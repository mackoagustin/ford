import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compresión Gzip - reduce el tamaño de todos los archivos
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Solo comprimir archivos > 10kb
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Compresión Brotli - aún mejor compresión que gzip
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://backend:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
