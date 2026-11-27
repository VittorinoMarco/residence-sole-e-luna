import type { APIRoute } from 'astro';
import { stagingNoindex } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const noindex = stagingNoindex || import.meta.env.NOINDEX === 'true';
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site}sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
