import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   exclude: ["@naari3/react-crossword-ja-otomad"],
  // },
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
});
