This project can be used to generate markdown files for all sorcery codex data.

### Running the project:
First time: run `npm install @portabletext/markdown`
Run the included codex-parser.js file with nodejs

### Updating the source json manually (no longer required):
To update the underlying json file the following manual process needs to be performed:
1. Open https://curiosa.io/codex
2. Open your browser's developers tools (typically F12)
3. Copy the inner html of the `<script id="__NEXT_DATA__" type="application/json">` field (Firefox users see note below)
4. Paste the contents into a text editor, preferibly with a json formatter like vs code
5. Replace the codex.json files with the entire "data" object (close/fold it to make this faster)
6. Make sure to remove the `"data":` property so that your file starts `[` and ends with `]`, and no comma after the last ]
7. Create the codex.json file and place it next to your codex-parser.js files
8. Edit the codex-parser.js to use the file (see comment towards top of main function)

_Note: Firefox users need to enable large response payloads to see the data in the inspection tool. This can be done be opening the `about:config` page and setting `devtools.netmonitor.responseBodyLimit` to a much higher value, or 0 to disable it all together._
