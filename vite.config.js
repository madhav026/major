import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    define: {
        'process.env.NODE_DEBUG': JSON.stringify(false),
    },
},
optimizeDeps: {
  exclude: ['jsdom'],
},
})
