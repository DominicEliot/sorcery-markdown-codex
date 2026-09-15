import * as fs from 'fs'
import { portableTextToMarkdown } from '@portabletext/markdown'
import * as path from 'node:path'

async function main() {    
    await WriteCodexFilesFacade();

    await WriteFaqFilesFacade();
}

main().catch(console.error);

async function WriteCodexFilesFacade() {
    // Uncomment the following lines to use a file instead, and comment out/delete the GetCodexFromCuriosaIo line.
    //let rawData = fs.readFileSync('codex.json');
    //let codexData = JSON.parse(rawData);
    let codexData = await GetCodexFromSorcerySite();

    console.log(`Processing ${codexData.length} codex entries.`);

    const damageGridRegex = /```json(.*\n)*?```/g;

    let singleFileMarkdown = "";

    for (let codex of codexData) {
        let markdown = portableTextToMarkdown(codex.content).replaceAll(damageGridRegex, '_See live codex for table_');
        markdown = "# " + codex.title + "\n" + markdown;

        if (codex.subcodexes != null) {
            for (let subcodex of codex.subcodexes) {
                let subCodexMd = portableTextToMarkdown(subcodex.content).replaceAll(damageGridRegex, '_See live codex for table_');
                markdown += "\n\n## " + subcodex.title + "\n" + subCodexMd;
            };
        }

        markdown += '\n\n[Codex Entry](https://curiosa.io/codex/' + codex._id + ')';
        markdown = markdown.replaceAll(/\n\n\n+/g, '\n\n');

        singleFileMarkdown += markdown + '\n\n';

        fs.writeFileSync(path.join('markdown', codex.title + '.md'), markdown);
    }

    fs.writeFileSync(path.join('Full Codex.md'), singleFileMarkdown.trim());
    console.log(`Processing Complete. Wrote ${codexData.length} individual codex files.`);
}

async function WriteFaqFilesFacade() {
    let faqData = await GetFaqsFromSorcerySite();
    let cardDict: Record<string, Faq[]> = {};

    for (let faq of faqData) {
        let markdownQuestion = portableTextToMarkdown(faq.question);
        let markdownAnswer = portableTextToMarkdown(faq.answer);

        for (let card of faq.cards) {
            let existingData = cardDict[card];
            if (existingData == null) {
                existingData = [];
                cardDict[card] = existingData;
            }
            let faqDto = new Faq(markdownQuestion, markdownAnswer, faq.cards);
            existingData.push(faqDto);
        }
    }
    fs.writeFileSync('generatedFaqs.json', JSON.stringify(cardDict, null, 2));

    let singleFileMarkdown = "";
    for (let [key, faqs] of Object.entries(cardDict).sort()) {
        let cardName = key.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
        let text = "# " + cardName + "\n";

        for (let faq of faqs) {
            text += "### " + faq.question + "\n" + faq.answer + "\n";
        }
        fs.writeFileSync(path.join('faq', cardName + '.md'), text);
        singleFileMarkdown += text + '\n';
    }
    fs.writeFileSync('Full Faqs.md', singleFileMarkdown);
}

async function GetCodexFromSorcerySite() {
    const response = await fetch('https://sorcerytcg.com/codex');
    if (!response.ok) {
        throw new Error(`Couldn't load URL. Http Status: ${response.status} - ${response.statusText}`);
    }
    const data = await response.text();

    let codexMetaData = findAndParseCodexBlock(data);
    return codexMetaData;
}

async function GetFaqsFromSorcerySite() {
    const response = await fetch('https://sorcerytcg.com/api/trpc/cms.faqs?batch=1');

    if (!response.ok) {
        throw new Error(`Couldn't load URL. Http Status: ${response.status} - ${response.statusText}`);
    }
    const data = await response.text();
    //const data = fs.readFileSync('rawFaq.json');

    let fullPayload = JSON.parse(data);
    let faqData = fullPayload[0].result.data.json;
    return faqData;
}

// This is a sample of what the html page returns
// <script>self.__next_f.push([1,"15:{\"json\":[{\"_createdAt\":\"2026-04-22T19:59:14Z\",\"_id\":\"d123e994-d95f-4fa9-9f2d-3a3e31fe95af\",\"_rev\":\"xUfyFbT1vwoJFdAninWR38\",\"_type\":\"codex\",\"_updatedAt\":\"2026-05-19T18:39:37Z\",\"content\":[{\"_key\":\"a04eb8a98c1c\",\"_type\":\"block\",\"children\":[{\"_key\":\"aeb747c7085a\",\"_type\":\"span\",\"marks\":[],\"text\":\"There are many abilities...\" ..."])</script>
export function findAndParseCodexBlock(html: string) {
    const marker = '\\"_type\\":\\"codex\\"';  // escaped version of the escaped json text in the raw HTML
    const markerIndex = html.indexOf(marker);
    if (markerIndex === -1) return null;

    const pushStart = html.lastIndexOf("self.__next_f.push([1,", markerIndex);
    if (pushStart === -1) return null;

    const pushEnd = html.indexOf('"])', markerIndex);
    if (pushEnd === -1) return null;

    const chunkSlice = html.slice(pushStart, pushEnd + 3);
    const match = chunkSlice.match(/self\.__next_f\.push\(\[1,\s*("(?:\\.|[^"\\])*")\]\)/s);
    if (!match) return null;

    const unescaped = JSON.parse(match[1]);
    
    const jsonPayload = unescaped.match(/^[0-9a-f]+:(.*)$/s);
    if (!jsonPayload) return null;
    
    const parsed = JSON.parse(jsonPayload[1]);
    return parsed.json;
}

class Faq {
    question: string;
    answer: string;
    cards: string[];

    constructor(question: string, answer: string, cards: string[]){
        this.question = question;
        this.answer = answer;
        this.cards = cards;
    }
}