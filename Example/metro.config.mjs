import { getDefaultConfig } from '@react-native/metro-config';
import { makeConfig } from 'react-native-monorepo-config';

// Get default config
const defaultConfig = getDefaultConfig(__dirname);

// Apply monorepo config
const config = makeConfig(defaultConfig);

// Additional custom configuration if needed
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'svg', 'cjs', 'mjs'],
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
};

export default config;

/*
const path = import('path');
const { getDefaultConfig } = import('@expo/metro-config');
const { withMetroConfig } = import('react-native-monorepo-config');


const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
/*
const config = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
});

config.resolver.unstable_enablePackageExports = true;

module.exports = config;
*/