import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
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
    options.legalComments = "none";
  },

  // Strip comments from declaration files
  treeshake: true,
  tsconfig: "tsconfig.json",
});
