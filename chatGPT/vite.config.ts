import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  // ...
  plugins: [
    replace({
      "process.env.OPENAI_API_KEY": JSON.stringify(process.env.OPENAI_API_KEY),
    }),
    // ...
  ],
});