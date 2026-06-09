window.GEMPAR_CONFIG = {
  version: '2.0.0',
  updated_at: '2026-06-10',
  
  features: {
    preloader: true,
    info_banner: false,
    steps: true,
    gem_card: true,
    impact: true,
    poster: true,
    testimonials: true,
    cta: true,
    faq: true,
    fab_block: true,
    pwa_banner: true,
    scroll_top: true,
    toast: true
  },
  
  preloader: {
    enabled: true,
    image: 'https://USERNAME.github.io/gempar-config/assets/images/poster.png',
    loading_text: 'Memuat aplikasi...',
    version_text: 'v3.0',
    duration_ms: 3000,
    show_skip_after_ms: 3000
  },
  
  header: {
    logo_image: 'https://USERNAME.github.io/gempar-config/assets/icons/icon-192.png',
    logo_text: 'GEMPAR',
    nav_items: [
      { href: '#cara-kerja', label: 'Cara Kerja' },
      { href: '#gem', label: 'Koin GEM' },
      { href: '#dampak', label: 'Dampak' },
      { href: '#faq', label: 'FAQ' }
    ],
    cta_button: {
      href: '#gabung',
      label: '🚀 Gabung'
    }
  },
  
  hero: {
    badge: {
      enabled: true,
      text: 'Gerakan Lingkungan #1 di Indonesia',
      dot_pulse: true
    },
    mascot_image: 'https://USERNAME.github.io/gempar-config/assets/images/mascot-cool.png',
    mascot_fallback_emoji: '🌿',
    title: 'Gerakan Memilah <span class="highlight">Sampah</span> Dari Rumah',
    subtitle: 'Pilah sampah dari rumah, dapat GEM, banyak manfaat! Gabung sekarang dan jadilah bagian dari perubahan untuk lingkungan yang lebih bersih.',
    stats: [
      { number: 15000, label: 'Anggota Aktif' },
      { number: 500, label: 'Drop Point' },
      { number: 50, label: 'Ton Sampah' }
    ],
    primary_cta: {
      href: '#gabung',
      label: '🚀 Mulai Sekarang'
    },
    secondary_cta: {
      href: '#cara-kerja',
      label: 'Pelajari Caranya'
    }
  },
  
  fab_block: {
    enabled: true,
    position: 'right-bottom',
    style: 'pill',
    buttons: [
      {
        id: 'chat',
        label: 'Chat Si Gempar',
        icon: '💬',
        href: 'https://gempar212.base44.app',
        target: '_blank',
        theme: 'primary',
        pulse: true,
        order: 1
      },
      {
        id: 'app',
        label: 'Aplikasi Gempar',
        icon: '🚀',
        href: 'https://gemparwarakas-v2.base44.app',
        target: '_blank',
        theme: 'accent',
        pulse: false,
        order: 2
      }
    ]
  },
  
  cta: {
    mascot_image: 'https://USERNAME.github.io/gempar-config/assets/images/mascot-reward.png',
    mascot_fallback_emoji: '🎉',
    title: 'Siap Bergabung?',
    subtitle: 'Jadilah bagian dari gerakan memilah sampah dari rumah. Bersama-sama kita bisa menciptakan lingkungan yang lebih bersih dan berkelanjutan untuk generasi mendatang.',
    button: {
      href: 'https://gemparwarakas-v2.base44.app/openformdaftar',
      label: '🌟 Gabung Sekarang',
      target: '_blank'
    }
  },
  
  footer: {
    logo_image: 'https://USERNAME.github.io/gempar-config/assets/icons/icon-192.png',
    logo_text: 'GEMPAR',
    copyright: '2026 GEMPAR. All rights reserved.',
    slogan: 'Pilah Sampah, Dapat GEM, Banyak Manfaat!',
    links: [
      { href: '#beranda', label: 'Beranda' },
      { href: '#cara-kerja', label: 'Cara Kerja' },
      { href: '#dampak', label: 'Dampak' },
      { href: '#faq', label: 'FAQ' }
    ],
    social: [
      { href: '#', title: 'Instagram', icon: '📷' },
      { href: '#', title: 'Twitter', icon: '🐦' },
      { href: '#', title: 'Facebook', icon: '📘' },
      { href: '#', title: 'YouTube', icon: '▶️' }
    ]
  },
  
  theme: {
    css_url: 'https://USERNAME.github.io/gempar-config/theme/variables.css',
    colors: {}
  },
  
  data: {
    base_url: 'https://USERNAME.github.io/gempar-config/data/content',
    sections: {
      steps: 'steps.json',
      gem: 'gem.json',
      impact: 'impact.json',
      poster: 'poster.json',
      testimonials: 'testimonials.json',
      cta: 'cta.json',
      faq: 'faq.json'
    }
  }
};
