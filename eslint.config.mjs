import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = {
  root: true,
  extends: ["next/core-web-vitals"], // Extend Next.js core rules
  parser: "@babel/eslint-parser", // Explicitly specify the parser if required
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    // Add custom rules or overrides if needed
  },
};

export default eslintConfig;
