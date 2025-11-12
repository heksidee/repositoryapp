const babelParser = require("@babel/eslint-parser");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
