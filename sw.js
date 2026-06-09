const CACHE_NAME = 'gempar-cf-v1';
const GITHUB_CACHE = 'gempar-github-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

const GITHUB_ASSETS = [
  'https://Skyfound212.github.io/Gempar-new/config/main.js',
  'https://Skyfound212.github.io/Gempar-new/theme/variables.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== GITHUB_CACHE)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.hostname.includes('github.io')) {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request).then(response => {
          const clone = response.clone();
          caches.open(GITHUB_CACHE).then(cache => cache.put(request, clone));
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  if (request.destination === 'document' || request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'GEMPAR', {
      body: data.body || 'Ada update baru!',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231B5E20" width="100" height="100" rx="20"/><text x="50" y="65" text-anchor="middle" font-size="55">🌿</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231B5E20" width="100" height="100" rx="20"/><text x="50" y="65" text-anchor="middle" font-size="55">🌿</text></svg>',
      data: data.url || '/',
      actions: [
        { action: 'open', title: 'Buka' },
        { action: 'close', title: 'Tutup' }
      ]
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(clients.openWindow(event.notification.data || '/'));
  }
});