const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
    mode: 'development',
    entry: {
        main: paths.entryJS
    },
    output: {
        filename: 'bundle.js',
        path: paths.outputPath,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                            '@babel/preset-react'
                        ],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2|jpg|jpeg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: `[name].[hash].[ext]`
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: paths.entryHTML,
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};