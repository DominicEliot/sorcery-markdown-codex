This project can be used to generate markdown files for all sorcery codex data.

### Running the project:
Simply run the included js file with nodejs

### Updating the source json:
To update the underlying json file the following manual process needs to be performed:
1. Open https://curiosa.io/codex
2. Open your browser's developers tools (typically F12)
3. Copy the inner html of the `<script id="__NEXT_DATA__" type="application/json">` field
4. Paste the contents into a text editor, preferibly with a json formatter like vs code
5. replace the codex.json files with the entire "data" object (close/fold it to make this faster)
  5a. Make sure to remove the `"data":` property so that your file starts `[` and ends with `]`, and no comma after the last ]
