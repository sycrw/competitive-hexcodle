import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis'
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

})
