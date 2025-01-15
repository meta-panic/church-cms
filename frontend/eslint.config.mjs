import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    //"plugin:jsx-a11y/recommended",
  ),
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["warn", "always"],
      "quotes": ["error", "double"], // Enforce single quotes
      "@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables
      "no-console": "warn", // Warn on console.log statements
      "react/jsx-uses-react": "off", // Disable React import check (Next.js handles it)
      "react/react-in-jsx-scope": "off", // Disable React import check (Next.js handles it)
      "eol-last": ["error", "always"],
    },
  },
];

export default eslintConfig;
