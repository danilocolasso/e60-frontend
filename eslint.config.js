import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',

      // Disable formatting rules that may conflict with Prettier
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      // TypeScript-specific formatting rules
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',

      // General formatting rules
      'max-len': 'off',
      'comma-dangle': 'off',
      'quotes': 'off',
      'semi': 'off',
      'indent': 'off',
      'space-before-function-paren': 'off',
      'object-curly-spacing': 'off',
      'space-infix-ops': 'off',
      'keyword-spacing': 'off',
      'comma-spacing': 'off',
      'brace-style': 'off',
      'func-call-spacing': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-multiple-empty-lines': 'off',
      'no-extra-semi': 'off',
      'semi-spacing': 'off',
    },
  },
)
