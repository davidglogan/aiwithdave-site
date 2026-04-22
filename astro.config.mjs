// @ts-check

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://aiwithdave.com';

const postsDir = path.resolve('./src/content/posts');
const draftUrls = new Set(
  readdirSync(postsDir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .filter((f) => {
      const content = readFileSync(path.join(postsDir, f), 'utf-8');
      const match = content.match(/^status:\s*(\S+)/m);
      const status = match ? match[1].replace(/['"]/g, '') : '';
      return status !== 'published';
    })
    .map((f) => `${SITE_URL}/posts/${f.replace(/\.(md|mdx)$/, '')}/`),
);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap({ filter: (page) => !draftUrls.has(page) })],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});