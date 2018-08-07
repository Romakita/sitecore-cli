module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-airbnb-base/rules/best-practices'),
    require.resolve('eslint-config-airbnb-base/rules/errors'),
    require.resolve('eslint-config-airbnb-base/rules/node'),
    // require.resolve('eslint-config-airbnb-base/rules/style'),
    require.resolve('eslint-config-airbnb-base/rules/variables'),
    require.resolve('eslint-config-airbnb-base/rules/es6'),
    require.resolve('eslint-config-airbnb-base/rules/imports')
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    strict: 'error',
    'prettier/prettier': 'error',
    'function-paren-newline': 'off',
    'no-underscore-dangle': 'off',
    'array-bracket-spacing': 'off',
    'computed-property-spacing': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
    'func-names': 'off',
    'arrow-parens': 0,
    'brace-style': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    'no-floating-decimal': 0,
    'class-methods-use-this': 0,
    'import/first': 0,
    'import/no-unresolved': 1,
    'import/extensions': 1,
    'import/prefer-default-export': 0,
    'max-len': 0
  }
};
