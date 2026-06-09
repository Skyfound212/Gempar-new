// FALLBACK CONFIG — Kalau GitHub down, ini yang dipakai
window.GEMPAR_CONFIG = {
  version: 'fallback',
  features: { fab_block: true, cta: true },
  fab_block: {
    enabled: true,
    position: 'right-bottom',
    style: 'pill',
    buttons: [
      { id: 'chat', label: 'Chat Si Gempar', icon: '💬', href: 'https://gempar212.base44.app', target: '_blank', theme: 'primary', pulse: true, order: 1 },
      { id: 'app', label: 'Aplikasi Gempar', icon: '🚀', href: 'https://gemparwarakas-v2.base44.app', target: '_blank', theme: 'accent', pulse: false, order: 2 }
    ]
  },
  cta: {
    button: { href: 'https://gemparwarakas-v2.base44.app/openformdaftar', label: '🌟 Gabung Sekarang', target: '_blank' }
  }
};
