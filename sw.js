var CACHE_NAME = 'asa-site-cache-v1';
var urlsToCache = [
  'index.html',
  'manifest.webmanifest',
  'styles/styles.css',
  'scripts/scripts.js',
  'assets/svg/logo.svg',
  'assets/svg/logoseethru.svg',
  'assets/svg/monogram.svg',
  'assets/images/thumb.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [];
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
  