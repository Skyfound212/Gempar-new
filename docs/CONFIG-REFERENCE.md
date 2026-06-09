# Config Reference

## features
| Key | Type | Default | Deskripsi |
|-----|------|---------|-----------|
| preloader | boolean | true | Preloader fullscreen |
| steps | boolean | true | Section cara kerja |
| gem_card | boolean | true | Info koin GEM |
| impact | boolean | true | Statistik dampak |
| poster | boolean | true | Poster kampanye |
| testimonials | boolean | true | Testimoni |
| cta | boolean | true | Call to action |
| faq | boolean | true | FAQ accordion |
| fab_block | boolean | true | FAB balok kanan bawah |

## fab_block.buttons[]
| Key | Type | Contoh |
|-----|------|--------|
| id | string | "chat" |
| label | string | "Chat Si Gempar" |
| icon | string | "💬" |
| href | string | "https://..." |
| target | string | "_blank" |
| theme | string | "primary" | "accent" |
| pulse | boolean | true |
| order | number | 1 |

## cta.button
| Key | Type | Contoh |
|-----|------|--------|
| href | string | "https://gemparwarakas-v2.base44.app/openformdaftar" |
| label | string | "🌟 Gabung Sekarang" |
| target | string | "_blank" |