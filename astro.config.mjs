import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // if you use SSR
  adapter: netlify(),
  experimental: {
    session: true, // enable session support
  },
});
