// 安裝 Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('nuts-pwa-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/main.html', // 根據您的需要添加更多頁面
          '/assets/css/main.css',
          '/assets/js/main.js', // 根據您的腳本名稱
          '/images/android/playstore-icon.png'
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
  