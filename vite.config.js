import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variable VITE_BASE_URL, default to '/'
const baseUrl = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  base: baseUrl, // this sets the base path for production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5174, // dev server port
    open: true, // open browser automatically
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
