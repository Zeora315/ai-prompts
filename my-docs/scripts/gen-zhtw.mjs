import OpenCC from 'opencc-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'docs', 'zh');
const dest = path.join(root, 'docs', 'zh-TW');

const convert = OpenCC.Converter({ from: 'cn', to: 'tw' });
const toCN = OpenCC.Converter({ from: 'tw', to: 'cn' });

const TEXT_EXT = new Set([
  '.md', '.mdx', '.json', '.ts', '.tsx', '.js', '.jsx',
  '.txt', '.yml', '.yaml', '.css', '.html', '.vue',
]);

// 内部链接：还原成简体文件名 slug + 加 /zh-TW 前缀
function fixInternalLink(url) {
  if (typeof url !== 'string') return url;
  if (!url.startsWith('/')) return url; // 仅处理站内链接
  return '/zh-TW' + toCN(url);
}

// JSON（_nav.json / _meta.json）：给 link/activeMatch 加前缀并还原简体 slug
function fixJsonLinks(obj) {
  if (Array.isArray(obj)) return obj.map(fixJsonLinks);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if ((k === 'link' || k === 'activeMatch') && typeof v === 'string' && v.startsWith('/')) {
        out[k] = fixInternalLink(v);
      } else {
        out[k] = fixJsonLinks(v);
      }
    }
    return out;
  }
  return obj;
}

// Markdown：修正 [text](url) / [text](url "tip") 中的站内链接
function fixMdLinks(content) {
  return content.replace(/\[([^\]]*)\]\((\/[^)\s]+)\)/g, (_m, text, url) => {
    return `[${text}](${fixInternalLink(url)})`;
  });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const from = path.join(dir, entry.name);
    const rel = path.relative(src, from);
    const to = path.join(dest, rel);
    if (entry.isDirectory()) {
      fs.mkdirSync(to, { recursive: true });
      walk(from);
    } else {
      fs.mkdirSync(path.dirname(to), { recursive: true });
      const ext = path.extname(entry.name).toLowerCase();
      if (TEXT_EXT.has(ext)) {
        let content = fs.readFileSync(from, 'utf8');
        content = convert(content);
        if (ext === '.json') {
          try {
            content = JSON.stringify(fixJsonLinks(JSON.parse(content)), null, 2);
          } catch {
            /* 非标准 JSON，保留 */
          }
        } else if (ext === '.md' || ext === '.mdx') {
          content = fixMdLinks(content);
        }
        fs.writeFileSync(to, content, 'utf8');
      } else {
        fs.copyFileSync(from, to);
      }
    }
  }
}

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
walk(src);
console.log('Generated docs/zh-TW/ (Simplified -> Traditional, links fixed)');
