// build-elements.js
const fs = require('fs-extra');
const concat = require('concat');
const widgetName = 'search-widget';

(async function build() {
    const files = [
        './dist/widget/scripts.js',
        './dist/widget/runtime-es2015.js',
        './dist/widget/main-es2015.js',
    ];
    await fs.ensureDir('elements');
    console.log(files)
    await concat(files, `elements/${widgetName}.js`);
})().catch(err => console.debug(err));