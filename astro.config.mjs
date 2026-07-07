import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // replace with your actual domain
  site: 'https://jakebouda.com',

  output: "hybrid",
  adapter: cloudflare()
});