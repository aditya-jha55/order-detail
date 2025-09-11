// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Prefer sass-embedded (fast) locally, but fallback to sass (JS) on StackBlitz
function getSassImplementation() {
  try {
    return require("sass-embedded");
  } catch {
    return require("sass");
  }
}

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: getSassImplementation(),
      },
    },
  },
});
