import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ["react"],

  /* copy CSS with original filename (no hash) */
  loader: {
    ".css": "copy",
  },

  /* ensure deterministic output filenames */
  esbuildOptions(options) {
    options.assetNames = "[name]";
  },
});
