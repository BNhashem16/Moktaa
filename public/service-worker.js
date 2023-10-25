self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/**/*.js',
        '/static/**/*.css',
        // favicon
        '/favicon.ico',
        // manifest
        '/manifest.json',
        // logo
        '/logo192.png',
        '/logo512.png',
        // robots
        '/robots.txt',
        // service worker
        
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
