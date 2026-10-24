// Tontti 4 maastokartta – offline-välimuisti
const C='tontti4-kartta-v3-202610241642';const TILES='tontti4-kartta-osm';
const FILES=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png','lib/leaflet.js','lib/leaflet.css','lib/jszip.min.js','img/pohjakartta.jpg','img/kaava.jpg','img/ilmakuva.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==TILES&&x.startsWith('tontti4-kartta')).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
async function trimTiles(){const c=await caches.open(TILES);const k=await c.keys();if(k.length>1500)for(const r of k.slice(0,k.length-1500))await c.delete(r)}
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.hostname==='tile.openstreetmap.org'){e.respondWith(caches.open(TILES).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){c.put(r,res.clone());trimTiles()}return res}).catch(()=>new Response('',{status:504})))));return}
  if(u.origin!==location.origin)return;
  const nav=r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('index.html');
  if(nav){ // verkko ensin (päivitykset), välimuisti 3 s jälkeen tai ilman verkkoa
    e.respondWith(new Promise(res=>{let done=false;const fb=()=>caches.match('index.html',{ignoreSearch:true}).then(m=>{if(!done&&m){done=true;res(m)}});const t=setTimeout(fb,3000);
      fetch(r).then(x=>{if(x&&x.ok){const cp=x.clone();caches.open(C).then(c=>c.put('index.html',cp))}clearTimeout(t);if(!done){done=true;res(x)}}).catch(()=>{clearTimeout(t);fb().then(()=>{if(!done){done=true;res(new Response('Offline',{status:503}))}})})}));return}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res})))});
