const paths = require('./paths');

module.exports = {
    // log messages
    noInfo: true,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    overlay: true,

    // server configuration
    compress: true,
    hot: true,
    contentBase: paths.contentBase,
    publicPath: '/'
};