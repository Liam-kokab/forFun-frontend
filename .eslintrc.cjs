module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'airbnb'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'linebreak-style': 'off',
    'no-console': 0,
    'no-unused-vars': 1,
    'react/prop-types': 1,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function'
      }
    ],
    'max-len': [
      'error', {
        'code': 150,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true

      }
    ],
    'object-curly-newline': [
      'error', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ObjectPattern': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 10, 'consistent': true }
      }
    ],
    'import/prefer-default-export': 'off',
    'default-param-last': 'off'
  },
}
