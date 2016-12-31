const NODE_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
      join = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');
const isDev = NODE_ENV === 'development';

const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dest = join(root, 'dist');
const matchCssLoaders = /(^|!)(css-loader)($|!)/;
const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match));
  return found ? found[0] : null;
}
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
});

config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);
const cssLoader = findLoader(config.module.loaders, matchCssLoaders);

module.exports = config;
