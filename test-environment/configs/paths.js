const path = require('path');

const appRoot = path.resolve(process.cwd());
const environmentPath = path.join(appRoot, 'test-environment');
const entryJS = path.join(environmentPath, 'index.js');
const outputPath = path.join(appRoot, 'dist/');
const entryHTML = path.join(environmentPath, 'public/index.html');

const contentBase = path.resolve(environmentPath, 'public');

module.exports = {
    appRoot,
    environmentPath,
    entryJS,
    outputPath,
    contentBase,
    entryHTML
};