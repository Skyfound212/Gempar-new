# ðŸŒ¿ GEMPAR â€” Gerakan Memilah Sampah Dari Rumah

PWA landing page untuk GEMPAR, dibangun dengan arsitektur **config-driven** agar konten dan tema bisa diupdate langsung dari GitHub tanpa deploy ulang.

---

## ðŸš€ Quick Deploy

| Platform | Cara Deploy |
|----------|-------------|
| **Cloudflare Pages** | Connect repo â†’ Build command: `kosong` â†’ Output: `/` |
| **GitHub Pages** | Settings â†’ Pages â†’ Source: Deploy from branch `main` |
| **Vercel/Netlify** | Import repo â†’ Framework preset: `Other` |

---

## ðŸ“ Struktur Folder

```
Gempar-new/
â”œâ”€â”€ index.html              # Entry point + critical CSS inline
â”œâ”€â”€ manifest.json           # PWA manifest (icon PNG)
â”œâ”€â”€ sw.js                   # Service Worker + caching
â”œâ”€â”€ _redirects              # Cloudflare SPA routing
â”œâ”€â”€ _headers                # Security headers
â”œâ”€â”€ README.md               # Dokumentasi ini
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ icons/              # Icon PWA (72x72 s/d 512x512)
â”‚   â””â”€â”€ images/             # OG image, poster, dll
â”œâ”€â”€ config/
â”‚   â””â”€â”€ main.js             # ðŸ”¥ Update konten di sini
â”œâ”€â”€ theme/
â”‚   â””â”€â”€ variables.css       # ðŸŽ¨ Update tema di sini
â””â”€â”€ fallback/
    â””â”€â”€ config.js           # Backup kalau GitHub down
```

---

## âš¡ Cara Update Tanpa Deploy Ulang

### 1. Ubah Konten (Teks, Link, CTA, Section)

Edit file `config/main.js` di GitHub:

```javascript
window.GEMPAR_CONFIG = {
  version: '3.1',
  hero: {
    title: 'Gerakan Memilah <span class="highlight">Sampah</span> Dari Rumah',
    subtitle: 'Teks baru di sini...',
    primary_cta: {
      href: 'https://link-baru.com',
      label: 'ðŸš€ Tombol Baru'
    }
  },
  fab_block: {
    buttons: [
      { id: 'chat', label: 'Chat Baru', icon: 'ðŸ’¬', href: 'https://...' }
    ]
  }
};
```

Commit â†’ Push â†’ Otomatis update di semua deployment.

### 2. Ubah Warna / Style / Layout

Edit file `theme/variables.css` di GitHub:

```css
:root {
  --primary: #2D6A4F;        /* Ganti warna utama */
  --accent: #D4A574;         /* Ganti warna aksen */
  --gradient-hero: linear-gradient(...); /* Ganti gradient */
}
```

Commit â†’ Push â†’ Otomatis update.

---

## ðŸ”„ Cache Strategy

| Tipe | Strategi | Refresh |
|------|----------|---------|
| `index.html` | Cache First | Manual (ubah versi SW) |
| `config/main.js` | Stale-while-revalidate | Auto (timestamp di URL) |
| `theme/variables.css` | Stale-while-revalidate | Auto (timestamp di URL) |
| `assets/icons/` | Cache First | Manual |
| External (GitHub) | Network First + CORS | Auto |

---

## ðŸ› ï¸ Icon Generator

Gunakan tool online untuk generate icon PNG dari emoji/logo:

- [favicon.io](https://favicon.io/favicon-converter/) â€” Upload PNG â†’ Download semua size
- [maskable.app](https://maskable.app/editor) â€” Generate maskable icon untuk PWA

Upload hasil ke `assets/icons/` dengan nama sesuai manifest.

---

## ðŸ“± PWA Checklist

- [ ] Icon PNG 192x192 & 512x512 di `assets/icons/`
- [ ] OG Image 1200x630 di `assets/images/og-image.png`
- [ ] `manifest.json` valid (test di [PWA Manifest](https://manifest-validator.appspot.com/))
- [ ] `sw.js` ter-register (cek di DevTools â†’ Application â†’ Service Workers)
- [ ] Lighthouse PWA score â‰¥ 90

---

## ðŸŒ Environment Variables (Cloudflare Pages)

Tidak perlu. Semua config di-load dari GitHub secara dinamis.

---

## ðŸ“„ License

MIT â€” Gerakan Memilah Sampah Dari Rumah ðŸŒ¿