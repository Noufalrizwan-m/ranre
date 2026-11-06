import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { input: {
    main: 'index.html', about: 'about/index.html', services: 'services/index.html', approach: 'approach/index.html',
    legacyAbout: 'about.html', legacyServices: 'services.html', legacyApproach: 'approach.html',
  } } },
});
