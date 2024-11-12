import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hcmus',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
