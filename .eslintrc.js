module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'next',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
      'prettier',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
   ],
   parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   parser: '@typescript-eslint/parser',
   plugins: ['react', 'prettier', '@typescript-eslint'],
   rules: {
      'prettier/prettier': 0,
      'block-spacing': 2,
      camelcase: ['error', { properties: 'never' }],
      'jsx-quotes': ['error', 'prefer-double'],
      'arrow-parens': [0, 'as-needed', { requireForBlockBody: true }],
      'react/jsx-pascal-case': 2,
      'prefer-const': 0,
      'no-console': 0,
      'react/self-closing-comp': 0,
      'react/jsx-props-no-spreading': 0,
      'react/function-component-definition': 0,
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-filename-extension': 0,
      'react/button-has-type': 0,
      'no-nested-ternary': 0,
      'no-use-before-define': 0,
      'react/prop-types': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'array-element-newline': [
         'error',
         {
            ArrayExpression: 'consistent',
            ArrayPattern: { minItems: 20 },
         },
      ],
      'no-plusplus': 0,
      'no-param-reassign': 0,
      'react/react-in-jsx-scope': 0
   },
   'settings': {
      'import/resolver': {
         'node': {
            'extensions': ['.js', '.jsx', '.ts', '.tsx'],
            'paths': ['src'],
         },
      },
   },
};
