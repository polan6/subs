import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [...compat.extends("next/core-web-vitals")];
const eslintConfig ={
  parser: '@babel/eslint-parser',  // または他のパーサー
  parserOptions: {
    requireConfigFile: false, // 必要に応じて追加
  },
  extends: ["next/core-web-vitals"], // その他の設定
};
export default eslintConfig;

