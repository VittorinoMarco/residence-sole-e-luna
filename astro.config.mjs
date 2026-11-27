import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://www.residencesoleluna.it';

/** Destinazioni senza hash: il file statico non sempre conserva l'ancora. L'ancora è nel CSV. */
const redirects = {
  '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-animazione':
    '/residence-calabria-piscina-animazione-lido#animazione',
  '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-giochi-barbecue':
    '/residence-calabria-piscina-animazione-lido#giochi',
  '/residence-calabria-praia-scalea': '/contatti',
  '/residence-calabria-praia-scalea/richiedi-preventivo': '/contatti#preventivo',
  '/residence-calabria-praia-scalea/prenota': '/contatti#preventivo',
};

export default defineConfig({
  site,
  trailingSlash: 'never',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    define: {
      'import.meta.env.NOINDEX': JSON.stringify(process.env.NOINDEX ?? ''),
    },
  },
  redirects: Object.fromEntries(
    Object.entries(redirects).map(([source, destination]) => [
      source,
      { status: 301, destination },
    ]),
  ),
});
