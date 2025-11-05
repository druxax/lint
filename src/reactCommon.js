import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export const reactCommon = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    reactHooks.configs.flat.recommended,
  ],
  rules: {},
};
