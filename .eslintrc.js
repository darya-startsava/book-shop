module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'local' }],
    'prefer-const': 'error',
     'no-console': 'off',
    'no-inner-declarations': 'off',
  },
};
