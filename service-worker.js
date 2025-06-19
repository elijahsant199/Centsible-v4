
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('static').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './expenses.html',
        './style.css',
        './manifest.json',
        './script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
