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

    compiler.hooks.done.tap('done', stats => {
        if (isInteractive) {
            console.log('\033[2J');
        }

        const statsRes = stats.toJson({
            all: false,
            warnings: true,
            errors: true
        });

        if (statsRes.errors.length > 0) {
            console.log('\x1b[1;31m%s\x1b[0m', 'Can not compile.');
        } else if (statsRes.warnings.length > 0) {
            console.log('\x1b[1;33m%s\x1b[0m', 'Compiled with warnings.');
        } else {
            console.log('\x1b[1;32m%s\x1b[0m', 'Successfully compiled.');
        }
    });

    return compiler;
};