module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'linebreak-style': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'consistent-return': 'off',
    eqeqeq: 'off',
    'func-names': 'off',
    'global-require': 'off',
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-else-return': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'object-shorthand': 'warn',
    'object-curly-newline': 'off',
    'prefer-template': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-target-blank': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-find-dom-node': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'require-yield': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "some": [ "nesting", "id" ]
      },
      "allowChildren": false,
  }],
  "jsx-a11y/label-has-associated-control": [ 2, {
    "labelComponents": ["CustomInputLabel"],
    "labelAttributes": ["label"],
    "controlComponents": ["CustomInput"],
    "depth": 3,
  }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['react-native', 'react-native-web'], ['~', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  globals: {
    __IS_DEV__: true,
    __API_HTTPS__: false,
    __API_HOST__: true,
    __API_PORT__: true
  }
};
