import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 子路徑：qpig0218/ChiMei-Month
export default defineConfig({
  plugins: [react()],
  base: '/ChiMei-Month/',
})
