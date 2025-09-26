import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use environment variable VITE_BASE_URL, default to '/'
const baseUrl = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  base: baseUrl,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5174, // Dev server port
    open: true, // Open browser automatically
  },
})
