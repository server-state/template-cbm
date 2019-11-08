const webpack = require('webpack');

const clearConsole = require('./clear-console');

const isInteractive = process.stdout.isTTY;

module.exports = function(config) {
    let compiler;
    try {
        compiler = webpack(config);
    } catch (err) {
        console.log('Can not compile.');
        process.exit(1);
    }

    compiler.hooks.beforeCompile.tap('invalid', () => {
        if (isInteractive) {
            clearConsole();
        }
        console.log('\x1b[1;33m%s\x1b[0m', 'Compiling ...');
    });

    compiler.hooks.done.tap('done', _stats => {
        if (isInteractive) {
            console.log('\033[2J');
        }
        console.log('\x1b[1;32m%s\x1b[0m', 'Successfully compiled.');
        // const statsRes = stats.toJson({
        //     all: false,
        //     warnings: true,
        //     errors: true
        // });

        // console.log(JSON.stringify(statsRes));
    });

    return compiler;
};