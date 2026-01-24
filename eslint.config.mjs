import path from 'node:path';
import { fileURLToPath } from 'node:url';

import globals from 'globals';
import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { defineConfig, globalIgnores } from '@eslint/config-helpers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    '.config/*',
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/node_modules/',
    '**/coverage/',
    '**/build/',
    '**/dist/',
    '**/*.min.js',
    '**/*.bundle.js',
    '**/*.log',
    '**/*~',
    '**/webpack.config.js',
    '**/postcss.config.js',
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
      )
    ),

    plugins: {
      import: fixupPluginRules(_import),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
    rules: {
      'import/no-unresolved': [
        2,
        {
          caseSensitive: false,
        },
      ],
      'import/order': [
        2,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      indent: ['error', 2],
      'linebreak-style': 0,
      quotes: ['error', 'single'],
      'no-trailing-spaces': ['error'],
      semi: ['error', 'always'],
      'max-len': [
        'error',
        {
          code: 120,
          comments: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'prettier/prettier': 'off',
    },
  },
]);
