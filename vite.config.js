import { resolve } from "path";
import { defineConfig } from "vite";

const basePath = __dirname + "/app/";

export default defineConfig({
  publicDir: "public",
  base: "/web-apis/",
  root: "app",
  build: {
    outDir: "../public/dist",
    rollupOptions: {
      input: {
        main: resolve(basePath, "index.html"),
        canvas: resolve(basePath, "canvas/index.html"),
        "dom-fetch": resolve(basePath, "dom-fetch/index.html"),
        "intersection-observer": resolve(
          basePath,
          "intersection-observer/index.html"
        ),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(basePath, "."),
      "@translations": resolve(basePath, "translations"),
      "@img": resolve(basePath, "img"),
    },
  },
});
