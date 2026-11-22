import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (name.endsWith('.html')) files.push(path);
  }
  return files;
}

function fileFor(pathname) {
  if (pathname === '/') return join(dist, 'index.html');
  return join(dist, pathname.slice(1), 'index.html');
}

function exists(pathname) {
  try {
    return statSync(fileFor(pathname)).isFile();
  } catch {
    return false;
  }
}

const problems = [];
const htmlFiles = walk(dist);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (html.includes('http-equiv="refresh"') || html.includes('astro-redirect')) continue;
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((match) => match[1] || '/');
  for (const href of hrefs) {
    if (href.startsWith('//')) continue;
    const path = href.replace(/\/$/, '') || '/';
    if (path.includes('.') || path.startsWith('/_astro')) continue;
    if (!exists(path)) problems.push(`${file.replace(dist, '')} → ${path}`);
  }
}

const csv = readFileSync(join(root, 'redirect.csv'), 'utf8').trim().split('\n').slice(1);
for (const line of csv) {
  const [source, target, status] = line.split(',');
  const targetPath = target.split('#')[0] || '/';
  if (status !== '301') problems.push(`status non 301: ${source}`);
  if (!exists(source)) problems.push(`manca la pagina di redirect: ${source}`);
  if (!exists(targetPath)) problems.push(`destinazione assente: ${target}`);
}

const titles = new Map();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (file.includes('/404/') || html.includes('http-equiv="refresh"')) continue;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const h1 = [...html.matchAll(/<h1[\s\S]*?<\/h1>/g)];
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!title) problems.push(`senza title: ${file}`);
  if (h1.length !== 1) problems.push(`H1 attesi 1, trovati ${h1.length}: ${file}`);
  if (!canonical) problems.push(`senza canonical: ${file}`);
  if (titles.has(title)) problems.push(`title duplicato: ${title}`);
  titles.set(title, file);
}

if (problems.length) {
  console.error(problems.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log(`Link, redirect, title, H1 e canonical ok su ${htmlFiles.length} pagine HTML.`);
