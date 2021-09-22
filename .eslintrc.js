module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    indent: 'off',
    'no-case-declarations': 'off',
    'no-console': 'error',
    'no-unused-vars': 'off', // covered by '@typescript-eslint/no-unused-vars'
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-imports': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'prettier/prettier': 'warn',
  },
};
