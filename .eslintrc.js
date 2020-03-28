module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
  },

  extends: ['standard', 'standard-react', 'prettier', 'prettier/react'],

  globals: {
    Atomics: 'readonly',
    React: 'writable',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  plugins: ['react', 'react-hooks', 'prettier', 'import'],

  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}
