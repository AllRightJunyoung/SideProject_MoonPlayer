module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'react-app',
    'react-app/jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'testing-library', 'jest-dom'],
  rules: {
    indent: ['warn', 2],
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-multiple-empty-lines': [1, { max: 1 }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    'testing-library/no-debugging-utils': [
      'error',
      {
        utilsToCheckFor: {
          debug: false,
          logRoles: true,
          logDOM: true,
        },
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
  },
};
