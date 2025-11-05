import { defineConfig } from 'eslint/config';
import { jsx as jsxRoot } from '../../jsx.js';
import { reactCommonRules } from './reactCommon.js';

export const jsx = defineConfig([
  {
    extends: [jsxRoot],
    rules: reactCommonRules,
  },
]);
