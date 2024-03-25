import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "../public",
  base: "/web-apis/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        examples: resolve(__dirname, "examples/index.html"),
        "intersection-observer": resolve(
          __dirname,
          "intersection-observer/index.html"
        ),
      },
    },
  },
});
