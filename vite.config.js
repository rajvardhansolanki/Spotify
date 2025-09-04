import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/home', // Ensure root path for Netlify deployment
  plugins: [
    react(),
    tailwindcss(),
  ],
})
