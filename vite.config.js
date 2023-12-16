import { defineConfig } from 'vite';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/ch-business-blog-card/' : './',
  server: {
    open: true,
  },
});
