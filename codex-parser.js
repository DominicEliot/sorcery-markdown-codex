import * as fs from 'fs'
import {portableTextToMarkdown} from '@portabletext/markdown'
import * as path from 'node:path'

let rawData = fs.readFileSync('codex.json');
let fullCodex = JSON.parse(rawData);

const damageGridRegex = /```json(.*\n)*?```/g;

let singleFileMarkdown = "";

for (let codex of fullCodex){
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
