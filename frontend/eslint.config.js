// eslint.config.js
module.exports = [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
    ],
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      react: import('eslint-plugin-react'),
      '@typescript-eslint': import('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
