import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";


export default defineConfig({
  plugins: [vue()],
  test: {
    deps: {
      inline: [/vuetify/], // Чтобы Vuetify корректно импортировался
    },
    environment: "happy-dom",
    globals: true,
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  }
})
