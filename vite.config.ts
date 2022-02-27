import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { chromeExtension } from 'vite-plugin-chrome-extension';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        manifest: 'src/manifest.json',
        panel: 'src/panel.html'
      }
    }
  },
  plugins: [chromeExtension(), react()]
});
