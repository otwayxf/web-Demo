const StringReplacePlugin = require('string-replace-webpack-plugin');
const env = require('./env').getServerEnvironment();

const generatePrebuildRule = () => ({
  test: /src\/util\/config\.js$/,
  enforce: 'pre',
  use: [{
    loader: StringReplacePlugin.replace({
      replacements: [{
        pattern: /__IS_DEV__/g,
        replacement: () => process.env.NODE_ENV === 'development'
      }, {
        pattern: /__API_HTTPS__/g,
        replacement: () => env.API_HTTPS || false
      }, {
        pattern: /__API_VERSION__/g,
        replacement: () => env.API_VERSION || ''
      }, {
        pattern: /__API_HOST__/g,
        replacement: () => env.API_HOST || ''
      }, {
        pattern: /__API_PORT__/g,
        replacement: () => env.API_PORT || ''
      }, {
        pattern: /__API_PREFIX__/g,
        replacement: () => env.API_PREFIX || ''
      }]
    })
  }]
});

module.exports = {
  generatePrebuildRule
};
