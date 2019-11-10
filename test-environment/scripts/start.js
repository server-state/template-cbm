const fs = require('fs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const paths = require('../configs/paths');
const webpackConfig = require('../configs/webpack.config');
const webServerConfig = require('../configs/webpackDevServer.config');

const clearConsole = require('./clear-console');
const createCompiler = require('./create-compiler');

const isInteractive = process.stdout.isTTY;
const HOST = '127.0.0.1';
const PORT = 3001;

// check required files
if (!fs.existsSync(paths.entryJS) || !fs.existsSync(paths.entryHTML)) {
    console.error('Entry files are missing.');
    process.exit(1);
}

// create and hook up compiler
const compiler = createCompiler(webpackConfig);
// create and start Webpack Dev Server
const devServer = new WebpackDevServer(compiler, webServerConfig);

devServer.listen(PORT, HOST, err => {
    if (err) {
        clearConsole();
    }
    if (isInteractive) {
        console.log('\033[2J'); // clears console
    }

    console.log('\x1b[1;33m%s\x1b[0m', 'Starting CBM test environment ...');
});
