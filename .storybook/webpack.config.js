const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    // use: [{
    //   loader: require.resolve('awesome-typescript-loader')
    // }],
    // options: {
    //     presets: [['react-app', { flow: false, typescript: true }]],
    // }
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};