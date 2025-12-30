// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

const isNetlify = process.env.ASTRO_ADAPTER === 'netlify';

export default defineConfig({
  output: 'server',

  adapter: isNetlify
    ? netlify({ edge: true })   // Netlify Edge
    : cloudflare(),             // Cloudflare Workers

  vite: {
    plugins: [tailwindcss()],
  },
});
