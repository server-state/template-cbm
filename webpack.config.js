module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    '@material-ui/core': '@material-ui/core',
    '@material-ui/styles': '@material-ui/styles',
    '@material-ui/icons': '@material-ui/icons'
  }
};