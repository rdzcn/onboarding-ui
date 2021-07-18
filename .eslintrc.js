/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/prefer-module */

const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: ["./tsconfig.eslint.json"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/naming-convention": "off",
    "no-loop-func": "off",
    "no-restricted-globals": ["error", ...restrictedGlobals],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "no-restricted-imports": "error",
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-includes": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-query-selector": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**", "**/*.test.js"],
      env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
      },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        "unicorn/no-array-callback-reference": "off",
      },
    },
    {
      files: ["*.styles.ts", "*.styles.js", "*.style.ts", "*.style.js"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
