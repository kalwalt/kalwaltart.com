/**
 * service-worker.js
 * Standard HTML5 native Service Worker for offline support and asset caching.
 * purges all deprecated AMP-specific logic and external Workbox dependencies.
 */

const CACHE_NAME = 'kalwaltart-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/dist/main.css',
  '/assets/dist/main.js',
  '/offline.html'
];

// Install Event - Pre-cache essential app shell assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old cache schemas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Handle network-first and stale-while-revalidate strategies
self.addEventListener('fetch', event => {
  // Only handle GET requests and local scope requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const requestUrl = new URL(event.request.url);

  // Network-First strategy for HTML document requests
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache a clone of the fresh page
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Network failed, serve cached page or fallback to the offline page
          return caches.match(event.request).then(cachedResponse => {
            return cachedResponse || caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // Stale-While-Revalidate strategy for static assets (CSS, JS, Images, Fonts)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback silently if fetch fails in background
        });

      // Return cached version immediately if available, otherwise wait for the network request
      return cachedResponse || fetchPromise;
    })
  );
});
