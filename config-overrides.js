const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: 'my-pwa-app',
        filename: 'service-worker.js',
        staticFileGlobs: ['build/**/*.{js,css,png,jpg,gif}'],
        minify: true,
        stripPrefix: 'build/',
        mergeStaticsConfig: true,
      })
    );
  }
  return config;
};
