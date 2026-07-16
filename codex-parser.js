import * as fs from 'fs'
import { portableTextToMarkdown } from '@portabletext/markdown'
import * as path from 'node:path'

async function main() {
    // Uncomment the following lines to use a file instead, and comment out/delete the GetCodexFromCuriosaIo line.
    //let rawData = fs.readFileSync('codex.json');
    //let codexData = JSON.parse(rawData);
    let codexData = await GetCodexFromCuriosaIo();


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

        markdown += '\n\n[Codex Entry](https://curiosa.io/codex?id=' + codex._id + ')';
        markdown = markdown.replaceAll(/\n\n\n+/g, '\n\n');

        singleFileMarkdown += markdown + '\n\n';

        fs.writeFileSync(path.join('markdown', codex.title + '.md'), markdown);
    }

    fs.writeFileSync(path.join('Full Codex.md'), singleFileMarkdown.trim());
}

main().catch(console.error);

async function GetCodexFromCuriosaIo() {
    const response = await fetch('https://curiosa.io/codex');
    if (!response.ok) {
        throw new Error(`Couldn't load URL. Http Status: ${response.status} - ${response.statusText}`);
    }
    const data = await response.text();

    let searchTerm = `<script id="__NEXT_DATA__" type="application/json">`;
    let start = data.indexOf(searchTerm) + searchTerm.length;
    let end = data.indexOf(`</script>`, start);
    let jsonString = data.substring(start, end);
    let codexMetaData = JSON.parse(jsonString);
    let codexData = codexMetaData.props.pageProps.trpcState.json.queries[0].state.data;
    return codexData;
}
