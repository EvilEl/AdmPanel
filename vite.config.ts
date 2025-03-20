import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import type { ViteUserConfig } from 'vitest/config'

const vitestConfig: ViteUserConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
  },
}

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: false })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: vitestConfig.test,
})
