const C='iron45-cache-v1';
self.addEventListener('install',function(e){ self.skipWaiting(); });
self.addEventListener('activate',function(e){ e.waitUntil((async function(){ var ks=await caches.keys(); await Promise.all(ks.map(function(k){return caches.delete(k);})); await self.clients.claim(); })()); });
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET') return;
  e.respondWith((async function(){
    try{
      var net=await fetch(e.request,{cache:'no-store'});
      try{ var cache=await caches.open(C); cache.put(e.request, net.clone()); }catch(_){}
      return net;
    }catch(err){
      var cached=await caches.match(e.request);
      return cached || new Response('offline', {status:503});
    }
  })());
});
