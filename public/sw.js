const CACHE_NAME = 'kefasports-v1';
const STATIC_CACHE = 'kefasports-static-v1';
const DYNAMIC_CACHE = 'kefasports-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/logo-white.png',
  '/favicon/favicon.ico',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/site.webmanifest'
];

// Assets to cache on first request
const CACHE_STRATEGIES = {
  images: {
    pattern: /\.(jpg|jpeg|png|gif|webp|svg)$/,
    strategy: 'cacheFirst',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  api: {
    pattern: /\/api\//,
    strategy: 'networkFirst',
    maxAge: 5 * 60 * 1000, // 5 minutes
    maxEntries: 50
  },
  pages: {
    pattern: /\.(html|htm)$/,
    strategy: 'networkFirst',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    maxEntries: 50
  },
  static: {
    pattern: /\.(css|js|woff|woff2|ttf|eot)$/,
    strategy: 'cacheFirst',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxEntries: 100
  }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests with caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Determine caching strategy
  let strategy = 'networkFirst';
  let cacheName = DYNAMIC_CACHE;
  let maxAge = 24 * 60 * 60 * 1000; // 24 hours default

  for (const [key, config] of Object.entries(CACHE_STRATEGIES)) {
    if (config.pattern.test(url.pathname)) {
      strategy = config.strategy;
      maxAge = config.maxAge;
      break;
    }
  }

  event.respondWith(
    handleRequest(request, strategy, cacheName, maxAge)
  );
});

// Handle different caching strategies
async function handleRequest(request, strategy, cacheName, maxAge) {
  const cache = await caches.open(cacheName);

  switch (strategy) {
    case 'cacheFirst':
      return cacheFirst(request, cache, maxAge);
    case 'networkFirst':
      return networkFirst(request, cache, maxAge);
    case 'staleWhileRevalidate':
      return staleWhileRevalidate(request, cache, maxAge);
    default:
      return networkFirst(request, cache, maxAge);
  }
}

// Cache first strategy
async function cacheFirst(request, cache, maxAge) {
  try {
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse && !isExpired(cachedResponse, maxAge)) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    const cachedResponse = await cache.match(request);
    return cachedResponse || createOfflineResponse();
  }
}

// Network first strategy
async function networkFirst(request, cache, maxAge) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Network first strategy failed:', error);
    const cachedResponse = await cache.match(request);
    return cachedResponse || createOfflineResponse();
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cache, maxAge) {
  const cachedResponse = await cache.match(request);
  
  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const responseClone = networkResponse.clone();
        cache.put(request, responseClone);
      }
      return networkResponse;
    })
    .catch(() => null);

  return cachedResponse || networkPromise || createOfflineResponse();
}

// Check if cached response is expired
function isExpired(response, maxAge) {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return false;
  
  const date = new Date(dateHeader);
  return Date.now() - date.getTime() > maxAge;
}

// Create offline response
function createOfflineResponse() {
  return new Response(
    `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Offline - KefaSports</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { 
          font-family: Arial, sans-serif; 
          text-align: center; 
          padding: 50px; 
          background: #f5f5f5; 
        }
        .container { 
          max-width: 400px; 
          margin: 0 auto; 
          background: white; 
          padding: 40px; 
          border-radius: 10px; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        h1 { color: #17A2B8; }
        p { color: #666; line-height: 1.6; }
        button { 
          background: #17A2B8; 
          color: white; 
          border: none; 
          padding: 12px 24px; 
          border-radius: 5px; 
          cursor: pointer; 
          margin-top: 20px; 
        }
        button:hover { background: #138496; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>You're Offline</h1>
        <p>It looks like you're not connected to the internet. Please check your connection and try again.</p>
        <button onclick="window.location.reload()">Try Again</button>
      </div>
    </body>
    </html>
    `,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html'
      }
    }
  );
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form submissions when back online
async function syncContactForm() {
  try {
    const cache = await caches.open('form-submissions');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.delete(request);
        }
      } catch (error) {
        console.error('Failed to sync form submission:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/favicon/android-chrome-192x192.png',
    badge: '/favicon/android-chrome-192x192.png',
    data: data.url,
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view' && event.notification.data) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});
