const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: ['react', 'prop-types', '@material-ui/core', '@material-ui/styles', '@material-ui/icons'],
  plugins: [babel(), terser()],
}
