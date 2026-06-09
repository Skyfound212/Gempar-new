const CACHE_NAME = 'gempar-cf-v1';
const GITHUB_CACHE = 'gempar-github-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png'
];

const GITHUB_ASSETS = [
  'https://Skyfound212.github.io/Gempar-new/config/main.js',
  'https://Skyfound212.github.io/Gempar-new/theme/variables.css'
];

// Install: Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: Clean old caches
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

// Fetch: Smart caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // GitHub Pages assets — Stale-while-revalidate with CORS
  if (url.hostname.includes('github.io')) {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request, { mode: 'cors' })
          .then(response => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(GITHUB_CACHE).then(cache => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Document, Script, Style — Cache First
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

  // Images — Cache First
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        }).catch(() => {
          // Return placeholder for failed images
          return new Response('Image not available', { status: 404 });
        });
      })
    );
    return;
  }

  // Default — Network First, fallback to cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// Push Notification
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'GEMPAR', {
      body: data.body || 'Ada update baru!',
      icon: 'assets/icons/icon-192x192.png',
      badge: 'assets/icons/icon-192x192.png',
      data: data.url || '/',
      tag: data.tag || 'gempar-notification',
      requireInteraction: false,
      actions: [
        { action: 'open', title: 'Buka' },
        { action: 'close', title: 'Tutup' }
      ]
    })
  );
});

// Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clientList => {
          const url = event.notification.data || '/';
          for (const client of clientList) {
            if (client.url === url && 'focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
        })
    );
  }
});

// Background Sync (for offline form submissions)
self.addEventListener('sync', (event) => {
  if (event.tag === 'gempar-sync') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Implement your sync logic here
  console.log('[GEMPAR] Background sync executed');
}

// Periodic Background Sync (for content updates)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'gempar-update') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  // Implement your update logic here
  console.log('[GEMPAR] Periodic sync executed');
}