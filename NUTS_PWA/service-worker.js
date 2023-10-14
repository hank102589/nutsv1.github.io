self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nuts-pwa-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './assets/css/main.css',
        './assets/js/main.js', // 根據您的腳本名稱
        './images/android/playstore-icon.png'
      ]);
    }).then(() => {
      self.skipWaiting(); // 強制使新的 Service Worker 取得控制權
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.claim() // 確保新版本的 Service Worker 立即生效
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
