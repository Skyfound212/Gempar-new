// GEMPAR CONFIG — Update di GitHub untuk ubah konten tanpa deploy ulang
window.GEMPAR_CONFIG = {
  version: '3.0',
  
  preloader: {
    enabled: true,
    duration_ms: 3000,
    show_skip_after_ms: 3000,
    loading_text: 'Memuat aplikasi...',
    version_text: 'v3.0',
    image: 'https://Skyfound212.github.io/Gempar-new/assets/images/preloader-bg.jpg'
  },
  
  header: {
    logo_text: 'GEMPAR',
    cta_button: {
      href: '#gabung',
      label: '🚀 Gabung'
    }
  },
  
  hero: {
    badge: {
      enabled: true,
      text: 'Gerakan Lingkungan #1 di Indonesia'
    },
    title: 'Gerakan Memilah <span class="highlight">Sampah</span> Dari Rumah',
    subtitle: 'Pilah sampah dari rumah, dapat GEM, banyak manfaat! Gabung sekarang dan jadilah bagian dari perubahan untuk lingkungan yang lebih bersih.',
    primary_cta: {
      href: '#gabung',
      label: '🚀 Mulai Sekarang'
    },
    secondary_cta: {
      href: '#cara-kerja',
      label: 'Pelajari Caranya'
    }
  },
  
  data: {
    sections: {
      steps: true,
      gem: true,
      impact: true,
      poster: true,
      testimonials: true,
      cta: true,
      faq: true
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
    button: {
      href: 'https://gemparwarakas-v2.base44.app/openformdaftar',
      label: '🌟 Gabung Sekarang',
      target: '_blank'
    }
  },
  
  footer: {
    logo_text: 'GEMPAR',
    copyright: 'Gerakan Memilah Sampah Dari Rumah',
    slogan: 'Pilah Sampah, Dapat GEM, Banyak Manfaat!'
  }
};