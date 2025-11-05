import { defineConfig } from 'eslint/config';
import { tsx as tsxRoot } from '../../tsx.js';
import { reactCommonRules } from './reactCommon.js';

export const tsx = defineConfig([
  {
    extends: [tsxRoot],
    rules: reactCommonRules,
  },
]);
