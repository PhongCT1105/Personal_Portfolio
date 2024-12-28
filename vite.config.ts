import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      browser: 'webextension-polyfill', // Alias 'browser' to a polyfill
    },
  },
});
