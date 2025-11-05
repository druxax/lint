import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { globalIgnores as globIgnores } from './globalIgnores.js';
import { globals } from './globals.js';
import { jsCommon } from './jsCommon.js';
import { reactCommon } from './reactCommon.js';

export const jsx = defineConfig([
  globalIgnores(globIgnores),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals },
    settings: {
      ...reactCommon.settings,
    },
    extends: [...jsCommon.extends, ...reactCommon.extends],
    rules: {
      ...jsCommon.rules,
      ...reactCommon.rules,
    },
  },
  eslintPluginPrettierRecommended,
]);
