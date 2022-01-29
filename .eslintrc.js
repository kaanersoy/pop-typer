module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  rules: {
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx", ".ts"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        tsx: "never",
        ts: "never",
      },
    ],
  },
};
