module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
    jest: true
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'promise'],
  overrides: [
    {
      files: ['**/*.ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 13
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
