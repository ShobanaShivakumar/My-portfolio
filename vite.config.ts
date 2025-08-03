import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  base: "/My-portfolio/", // ✅ REQUIRED for GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // ✅ Copy index.html to 404.html after build
    {
      name: "copy-index-as-404",
      closeBundle: () => {
        const indexPath = resolve(__dirname, "dist", "index.html");
        const notFoundPath = resolve(__dirname, "dist", "404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log("✅ 404.html created from index.html");
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
