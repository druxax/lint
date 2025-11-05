# @druxax/lint

A comprehensive ESLint configuration package that provides linting for JavaScript, TypeScript, JSX, and TSX files with carefully curated recommended rules and custom configurations.

## What This Package Provides

### 🛠️ Multi-Language Support
- **JavaScript** (.js) - Modern JavaScript linting with recommended rules
- **TypeScript** (.ts) - TypeScript-specific linting configurations
- **JSX** (.jsx) - React JSX syntax support for JavaScript files
- **TSX** (.tsx) - React JSX syntax support for TypeScript files

### ⚛️ React Ecosystem Integration
- **React 17+** with automatic version detection
- **JSX Runtime** configuration for modern React
- **React Hooks** with exhaustive-deps rule enforcement
- **React Recommended** rules from the official ESLint plugin

### 🔧 Custom Configuration Tiers
- **Base Configurations** (`/js`, `/ts`, `/jsx`, `/tsx`) - Standard recommended rules
- **Druxax Custom Rules** (`/druxax/*`) - Enhanced configurations with additional custom rules for JSX/TSX

### 🔄 Prettier Compatibility
- Seamless integration with Prettier for code formatting
- Prevents conflicts between ESLint and Prettier rules
- Supports Prettier v3.0.0+

### 📦 Modular Architecture
- **ESLint Flat Config** format (v9.x)
- **ESM-only** package with modern JavaScript exports
- **Extensible design** - easy to override or extend configurations

## Installation

### npm
```bash
npm install -D @druxax/lint eslint@^9.0.0 @eslint/js@^9.0.0 typescript-eslint@^8.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^7.0.0 eslint-config-prettier@^10.0.0 eslint-plugin-prettier@^5.0.0 prettier@^3.0.0 globals@^16.0.0
```

### pnpm
```bash
pnpm add -D @druxax/lint eslint@^9.0.0 @eslint/js@^9.0.0 typescript-eslint@^8.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^7.0.0 eslint-config-prettier@^10.0.0 eslint-plugin-prettier@^5.0.0 prettier@^3.0.0 globals@^16.0.0
```

### yarn
```bash
yarn add -D @druxax/lint eslint@^9.0.0 @eslint/js@^9.0.0 typescript-eslint@^8.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^7.0.0 eslint-config-prettier@^10.0.0 eslint-plugin-prettier@^5.0.0 prettier@^3.0.0 globals@^16.0.0
```

### bun
```bash
bun add -d @druxax/lint eslint@^9.0.0 @eslint/js@^9.0.0 typescript-eslint@^8.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^7.0.0 eslint-config-prettier@^10.0.0 eslint-plugin-prettier@^5.0.0 prettier@^3.0.0 globals@^16.0.0
```

## Peer Dependencies

This package requires the following peer dependencies to be installed:
- `eslint@^9.0.0`
- `@eslint/js@^9.0.0`
- `typescript-eslint@^8.0.0`
- `eslint-plugin-react@^7.0.0`
- `eslint-plugin-react-hooks@^7.0.0`
- `eslint-config-prettier@^10.0.0`
- `eslint-plugin-prettier@^5.0.0`
- `prettier@^3.0.0`
- `globals@^16.0.0`

## Usage Examples

### Basic Configuration for a React Project

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import { jsx, tsx } from '@druxax/lint/druxax';

export default defineConfig([
  {
    extends: [jsx, tsx],
    rules: {
      'react/button-has-type': 'error',
    },
  },
]);
```

### Individual Language Configurations

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import { jsx } from '@druxax/lint/druxax/jsx';
import { tsx } from '@druxax/lint/druxax/tsx';

export default defineConfig([
  {
    files: ['**/*.jsx'],
    extends: [jsx],
  },
  {
    files: ['**/*.tsx'], 
    extends: [tsx],
  },
]);
```

### Mixed Project with Custom Rules

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import { js } from '@druxax/lint/js';
import { ts } from '@druxax/lint/ts';
import { jsx } from '@druxax/lint/druxax/jsx';
import { tsx } from '@druxax/lint/druxax/tsx';

export default defineConfig([
  {
    files: ['**/*.js'],
    extends: [js],
  },
  {
    files: ['**/*.ts'],
    extends: [ts],
  },
  {
    files: ['**/*.jsx'],
    extends: [jsx],
    rules: {
      'react/prop-types': 'off', // Disable prop-types for JSX
    },
  },
  {
    files: ['**/*.tsx'],
    extends: [tsx],
    rules: {
      'react/button-has-type': 'error',
    },
  },
]);
```

## Available Exports

| Export Path | Description |
|------------|-------------|
| `@druxax/lint` | Main entry point |
| `@druxax/lint/js` | JavaScript configuration |
| `@druxax/lint/ts` | TypeScript configuration |
| `@druxax/lint/jsx` | JSX configuration |
| `@druxax/lint/tsx` | TSX configuration |
| `@druxax/lint/druxax` | Custom Druxax rules entry (exports jsx, tsx) |
| `@druxax/lint/druxax/jsx` | Enhanced JSX with custom rules |
| `@druxax/lint/druxax/tsx` | Enhanced TSX with custom rules |

## Key Features

- ✅ **ESLint Flat Config** (v9.x) support
- ✅ **React 18 Ready** with modern JSX transform
- ✅ **TypeScript Strict** mode compatibility
- ✅ **Prettier Integration** without conflicts
- ✅ **ES Modules** only for modern projects
- ✅ **Easy extension** with custom rule overrides

## Important Notes

- This package uses ESLint's **flat config** system (v9+)
- Configurations are designed to be **extended** using the `extends` property
- You can easily **override rules** by adding them to your config object
- Use `defineConfig` for better TypeScript support and IDE autocomplete

## License

MIT © Andrey Smirnov