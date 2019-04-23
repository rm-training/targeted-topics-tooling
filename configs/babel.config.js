module.exports = function (api) {
  // tell babel to cache this config file
  api.cache(true);

  const presets = [[
    '@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: { version: 3, proposals: true },
    }],
  ];
  const plugins = [
    '@babel/plugin-transform-spread'
  ];

  return {
    presets,
    plugins,
  };
};
