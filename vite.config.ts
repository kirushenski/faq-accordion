/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@/test-utils': '/tests/test-utils',
      '@': '/src',
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      include: ['src/components/**/*.tsx', 'src/lib/**.ts'],
    },
  },
})
