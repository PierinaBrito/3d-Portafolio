import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173, // Use the PORT environment variable or default to 3000
    strict: false,
  },
})


