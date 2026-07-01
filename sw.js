// Service Worker for TM PrimePress Single EOM
const CACHE_NAME = 'primepress-eom-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/data.js',
  './js/router.js',
  './js/components.js',
  './js/search.js',
  './js/app.js'
];

// Install - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch - network-first for data, cache-first for static
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // For data files and images, use stale-while-revalidate
  if (url.pathname.includes('/data/') || url.pathname.includes('/images/')) {
    event.respondWith(staleWhileRevalidate(event.request));
  } else {
    // For core assets, cache-first
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
      )
    );
  }
});

// Stale-while-revalidate strategy
function staleWhileRevalidate(request) {
  return caches.open(CACHE_NAME).then(cache =>
    cache.match(request).then(cached => {
      const fetchPromise = fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
}
