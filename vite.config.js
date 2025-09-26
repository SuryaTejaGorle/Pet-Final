import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Pet-Final', // ✅ Serve from root so Nginx finds files
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5174, // ✅ Change dev server port to avoid conflict with Docker
    open: true, // Optional: auto-open browser on dev start
  },
})
