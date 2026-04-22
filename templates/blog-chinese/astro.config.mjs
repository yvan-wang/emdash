import { defineConfig } from 'astro/config';
import emdash from '@emdashcms/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [emdash()],
  site: 'https://io70.com',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },
});
