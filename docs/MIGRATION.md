# Migration Guide

## v1 → v2

1. Pindahkan config dari inline JS ke `config/main.js`
2. Pindahkan CSS ke `theme/variables.css`
3. Pindahkan konten ke `data/content/*.json`
4. Update URL di Cloudflare ke GitHub Pages

## Breaking Changes
- `CONFIG` global → `window.GEMPAR_CONFIG`
- CSS variables prefix `--` → `--gempar-`