# ♻️ GEMPAR — Gerakan Pilah Sampah Di Warakas

> **G**erakan **E**dukasi **M**asyarakat **P**ilah Sampah **A**ktif di **R**W

Aplikasi web PWA (Progressive Web App) untuk manajemen bank sampah berbasis poin per RW di Kelurahan Warakas. Dibangun dengan HTML5, CSS3, dan vanilla JavaScript — tanpa framework agar bisa berjalan lancar di perangkat mobile kelas bawah.

---

## 🚀 Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🔐 **GEM-ID Gate** | Autentikasi sederhana berbasis ID unik per anggota |
| 📋 **QR Code** | Generate QR per anggota untuk scan cepat di TPS |
| 💎 **Poin GEM** | Sistem poin transparan dengan milestone progress bar |
| 📊 **Riwayat Setor** | Catatan historis setoran sampah per anggota |
| 🎁 **Reward** | Katalog hadiah yang bisa ditukar dengan poin |
| 👤 **Profil** | Data lengkap anggota: nama, alamat, RW/RT, status |
| 📱 **PWA Ready** | Installable, offline-capable, splash screen, icon app |
| 🎨 **Mobile-First** | UI/UX optimized untuk layar kecil, touch-friendly |

---

## 📁 Struktur Folder

```
gempar/
├── index.html              # Halaman utama (dashboard anggota)
├── 404.html                # Halaman error + navigasi cepat
├── manifest.json           # PWA manifest
├── css/
│   └── style.css           # Styling utama (mobile-first)
├── js/
│   ├── app.js              # Logika aplikasi & UI controller
│   └── data.js             # Data dummy / mock database
├── assets/
│   └── logo.png            # Logo GEMPAR (icon app + branding)
└── README.md               # Dokumentasi ini
```

---

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)
- **QR Generator**: [qrcode.js](https://github.com/davidshimjs/qrcodejs) CDN
- **PWA**: Web App Manifest + Service Worker (opsional, siap ditambah)
- **No Backend**: Data saat ini menggunakan `data.js` (mock). Siap integrasi dengan API.

---

## 🎯 Cara Menjalankan

### 1. Clone repo
```bash
git clone https://github.com/username/gempar.git
cd gempar
```

### 2. Jalankan lokal
Karena ini static HTML, cukup buka `index.html` di browser, atau gunakan live server:

```bash
# Menggunakan Python 3
python -m http.server 8000

# Menggunakan Node.js (npx)
npx serve .

# Menggunakan VS Code Live Server extension
# Klik kanan index.html → "Open with Live Server"
```

### 3. Buka di browser / mobile
```
http://localhost:8000
```

> 💡 **Tips**: Untuk test PWA (install prompt, splash screen), buka via `localhost` atau HTTPS. GitHub Pages mendukung HTTPS secara default.

---

## 🔐 Sistem GEM-ID

Format ID anggota:
```
GEM-YYYY-XXXXX-RWXX-RTXX
```
Contoh: `GEM-2026-00101-JM01-0002`

| Segmen | Arti |
|--------|------|
| `GEM` | Prefix aplikasi |
| `YYYY` | Tahun registrasi |
| `XXXXX` | Nomor urut anggota |
| `RWXX` | Kode RW (contoh: JM01 = RW Jembatan) |
| `RTXX` | Nomor RT |

---

## 🎨 Design System

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| Primary | `#166534` | Header, brand, tombol utama |
| Primary Light | `#22C55E` | Accent, hover, milestone |
| Background | `#F0FDF4` | Background halaman |
| Dark Text | `#1F2937` | Judul, teks utama |
| Gray Text | `#6B7280` | Subtitle, deskripsi |

**Font**: Inter (body), Plus Jakarta Sans (heading/brand)

---

## 📱 PWA Checklist

- [x] `manifest.json` dengan icon, theme color, display mode
- [x] `apple-touch-icon` & `theme-color` meta tags
- [x] Splash screen dengan logo & loading animation
- [x] Responsive viewport (`maximum-scale=1.0, user-scalable=no`)
- [ ] Service Worker (rekomendasi: Workbox)
- [ ] Offline fallback page

---

## 🗺️ Roadmap

| Phase | Target |
|-------|--------|
| **v1.0** | ✅ PWA dashboard anggota (current) |
| **v1.1** | ⏳ Integrasi backend (Node.js + MongoDB) |
| **v1.2** | ⏳ Panel admin (`/admingempar/`) |
| **v1.3** | ⏳ Bank Sampah TPS (`/bank/?tps=RW001`) |
| **v2.0** | ⏳ Notifikasi push, real-time update, leaderboard |

---

## 🤝 Kontribusi

Pull request sangat diterima! Beberapa area yang butuh bantuan:
- Service Worker untuk offline mode
- Animasi transisi yang lebih smooth
- Integrasi API backend
- Unit testing dengan Jest

---

## 📄 Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan untuk kepentingan lingkungan dan masyarakat. 🌿

---

## 🙏 Dukung GEMPAR

> *"Pilah Sampah Hari Ini, Lingkungan Bersih Esok Nanti"*

Dibuat dengan ❤️ untuk warga Kelurahan Warakas dan seluruh Indonesia.

---

**Kontak**: Hubungi Ketua RW Anda untuk registrasi GEM-ID atau kunjungi TPS terdekat.
