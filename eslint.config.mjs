import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["error", "always"],
      singleQuote: ["error", "double"],
      "prefer-arrow-callbacks": ["error", "always"],
      "prefer-template": ["error", "always"],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-vars": ["error", { args: "none" }],
      "no-var": ["error"],
      "no-const-assign": ["error"],
    },
  }),
];

export default eslintConfig;
