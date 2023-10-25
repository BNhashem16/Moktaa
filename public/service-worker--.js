// public/service-worker.js

workbox.core.setCacheNameDetails({ prefix: 'offline-react-app' });

self.addEventListener('install', (event) => {
  const preCache = [
    '/',
    '/index.html',
    '/static/js/bundle.js',
    '/static/css/main.chunk.css',
  ];

  event.waitUntil(
    caches.open(workbox.core.cacheNames.precache)
      .then((cache) => cache.addAll(preCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
