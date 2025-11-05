import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { globalIgnores as globIgnores } from './globalIgnores.js';
import { tsCommon } from './tsCommon.js';
import { reactCommon } from './reactCommon.js';
import { globals } from './globals.js';

export const tsx = defineConfig([
  globalIgnores(globIgnores),
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    languageOptions: { globals },
    settings: {
      ...reactCommon.settings,
    },
    extends: [...tsCommon.extends, ...reactCommon.extends],
    rules: {
      ...tsCommon.rules,
      ...reactCommon.rules,
    },
  },
  eslintPluginPrettierRecommended,
]);
