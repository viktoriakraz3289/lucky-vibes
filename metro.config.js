const { getDefaultConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// rn-obfuscator-begin
const { withRnObfuscator } = require("./scripts/rn-obfuscator/metro");
// rn-obfuscator-end

module.exports = withRnObfuscator({
  ...defaultConfig,
  transformer: {
    ...defaultConfig.transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});