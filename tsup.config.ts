import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"], // ESM only — drop CJS
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ["react"],

  loader: {
    ".css": "copy",
  },

  esbuildOptions(options) {
    options.assetNames = "[name]";
    options.legalComments = "none"; // strips comments from JS
  },
});
