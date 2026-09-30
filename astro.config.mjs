import { defineConfig } from 'astro/config';
import { siteConfig } from './src/data/siteConfig';
export default defineConfig({site:siteConfig.origin,trailingSlash:'always',build:{format:'directory'}});
