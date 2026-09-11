const CACHE='xiaoliao-v14';
const ASSETS=['./','./index.html','./v14.html','./styles-v14.css','./app-v14.js','./manifest.webmanifest','./lyrics/lyrics-v7.html','./lyrics/lyrics-extra.js','./lyrics/lyrics-yemeng.js','./lyrics/lyrics-sansheng.js','./lyrics/lyrics-huixi.js','./lyrics/lyrics-videos.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request))));
