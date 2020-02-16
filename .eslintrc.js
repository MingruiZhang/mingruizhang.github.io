const tsConfig = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/type-annotation-spacing": "error"
  }
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  overrides: [
    {
      ...tsConfig,
      files: ["*.ts", "*.tsx"],
      rules: {
        ...tsConfig.rules,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/accessible-emoji": 0
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
