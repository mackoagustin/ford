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
  build: {
    // Optimizaciones de build simplificadas
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separar vendor chunks más granularmente
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            // Todos los demás vendors van al vendor-react para evitar problemas
            return 'vendor-react';
          }
          
          // Separar componentes por funcionalidad
          if (id.includes('components/Banner')) {
            return 'chunk-banners';
          }
          if (id.includes('components/Slider')) {
            return 'chunk-sliders';
          }
          if (id.includes('components/Form')) {
            return 'chunk-forms';
          }
          if (id.includes('pages/')) {
            return 'chunk-pages';
          }
        }
      }
    },
    // Optimizaciones adicionales para reducir Script Evaluation
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    chunkSizeWarningLimit: 1000,
    // Optimizaciones para reducir parsing
    sourcemap: false
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3001',  // Cambiar aquí
        changeOrigin: true,
        secure: false
      }
    }
  }
})
