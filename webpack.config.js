/**
 * @fileoverview Config for webpack.
 */
const path = require('path');
const glob = require('glob');

const jsBasePath = path.resolve(__dirname, 'src');
const targetDirectories = ['pc', 'sp'];

const targets = glob.sync(`${jsBasePath}/+(${targetDirectories.join('|')})/*.js`);
const entries = {};

targets.forEach(value => {
  const re = new RegExp(`${jsBasePath}/`);
  const key = value.replace(re, '');
  entries[key] = value;
});

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]',
  },
};
