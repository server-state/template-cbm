const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const appRoot = path.resolve(process.cwd());

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(appRoot, 'wrapper/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(appRoot, 'dist/'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        compress: true,
        hot: true,
        host: '127.0.0.1',
        port: 3001,
        stats: 'minimal',
        // noInfo: true
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
            template: path.join(appRoot, 'wrapper/public/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};