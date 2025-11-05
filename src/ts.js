import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { globalIgnores as globIgnores } from './globalIgnores.js';
import { tsCommon } from './tsCommon.js';
import { globals } from './globals.js';

export const ts = defineConfig([
  globalIgnores(globIgnores),
  {
    files: ['**/*.{ts,cts,mts}'],
    languageOptions: { globals },
    extends: [...tsCommon.extends],
    rules: { ...tsCommon.rules },
  },
  eslintPluginPrettierRecommended,
]);
