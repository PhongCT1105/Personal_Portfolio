import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Optional: Visualize bundle size
  ],
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
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit (default is 500 kB)
  },
});
