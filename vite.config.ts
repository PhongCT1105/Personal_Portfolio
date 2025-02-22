import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      browser: 'webextension-polyfill', // Alias 'browser' to a polyfill
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate vendor libraries into their own chunk
          lottie: ['lottie-web'], // Separate lottie-web into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 1200, // Adjust chunk size warning limit (default is 500 kB)
  },
  server: {
    host: true, // Allow binding to all network interfaces (0.0.0.0)
    port: 5173, // Specify the port (optional, defaults to 5173)
  },
});
