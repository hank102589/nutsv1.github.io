// 安裝 Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('nuts-pwa-cache-v1').then(cache => {
        return cache.addAll([
          './',
          './assets/css/main.css',
          './assets/js/main.js', // 根據您的腳本名稱
          './images/android/playstore-icon.png'
        ]);
      })
    );
  });
  
  // 捕獲請求並返回快取的資源
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  