// @ts-check
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    session: {
      driver: "cloudflare-kv", // Enable KV-based sessions
      binding: "SESSION"       // Must match your KV binding in Cloudflare Pages
    }
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/compile"
    }
  }
});
