import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// __dirnameを設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompatを初期化
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint設定を手動で拡張
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),  // これで拡張した設定を取得
];

export default eslintConfig;
