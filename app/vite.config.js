import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "../public",
  base: "/web-apis/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        canvas: resolve(__dirname, "canvas/index.html"),
        "dom-fetch": resolve(__dirname, "dom-fetch/index.html"),
        "intersection-observer": resolve(
          __dirname,
          "intersection-observer/index.html"
        ),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
      "@translations": resolve(__dirname, "translations"),
      "@img": resolve(__dirname, "img"),
    },
  },
});
