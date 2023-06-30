self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('minha-task').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'icon.png',
          // Adicione aqui todos os arquivos que devem ser armazenados em cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  