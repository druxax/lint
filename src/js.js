import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { globalIgnores as globIgnores } from './globalIgnores.js';
import { globals } from './globals.js';
import { jsCommon } from './jsCommon.js';

export const js = defineConfig([
  globalIgnores(globIgnores),
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals },
    extends: [...jsCommon.extends],
    rules: { ...jsCommon.rules },
  },
  eslintPluginPrettierRecommended,
]);
