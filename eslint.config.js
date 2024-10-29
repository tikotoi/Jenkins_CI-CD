import js from "@eslint/js";
import globals from "globals";
import mocha from "eslint-plugin-mocha";
import prettier from "eslint-plugin-prettier";
import { configs as wdioConfig, rules as wdioRules } from "eslint-plugin-wdio";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...wdioConfig.recommended.globals
      }
    },
    plugins: {
      mocha,
      prettier,
      ["wdio"]: { rules: wdioRules }
    },
    rules: {
      "prettier/prettier": "error",
      "no-var": "error",
      quotes: ["error", "double"],
      "require-jsdoc": "off",
      indent: ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "no-undef": "error",
      "prefer-const": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^(capabilities|specs)$", args: "none" }],
      "no-multiple-empty-lines": "warn"
    }
  }
];
