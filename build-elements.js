// build-elements.js
const fs = require('fs-extra');
const concat = require('concat');
const widgetName = 'search-widget';

(async function build() {
    const files = [
        // './dist/search-widget/scripts.js',
        './dist/search-widget/runtime-es2015.js',
        './dist/search-widget/main-es2015.js',
    ];
    // await fs.ensureDir('elements');
    console.log(files)
    await concat(files, `dist/search-widget/${widgetName}.js`);
})().catch(err => console.debug(err));