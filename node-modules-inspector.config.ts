import { defineConfig } from "node-modules-inspector";

export default defineConfig({
  defaultFilters: {
    excludes: ["eslint"],
  },
  defaultSettings: {
    moduleTypeSimple: true,
  },
});
