import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hugo-dev/',
  server: {
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    force: true
  }
})
