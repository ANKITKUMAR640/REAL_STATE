
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REAL_STATE/', // 👈 यह ध्यान से जोड़ें
})
