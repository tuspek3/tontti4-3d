// Tontti 4 – kerros "Kuvat 25.10." (erillinen moduuli; kuvat/kuvat.json + kuvat/kNN.jpg)
(function(){
 const MAP=(window.__T&&window.__T.map)||(typeof map!=="undefined"?map:null);if(!MAP||!window.L)return;
 const KEY="kuvat2510";const grp=L.layerGroup();let own=false;
 try{if(typeof LG!=="undefined"&&typeof LAYER_NAMES!=="undefined"&&typeof applyLayers==="function"){LG[KEY]=grp;LAYER_NAMES.push([KEY,"📷 Kuvat 25.10. (20 kuvaa, suuntanuolet)"])}else own=true}catch(e){own=true}
 const css=document.createElement("style");css.textContent=
 ".k25{position:relative;width:0;height:0}.k25 svg{position:absolute;left:-26px;top:-26px;width:52px;height:52px;pointer-events:none}"+
 ".k25 b{position:absolute;left:-13px;top:-13px;width:26px;height:26px;border-radius:50%;color:#fff;font:700 13px/22px sans-serif;text-align:center;border:2px solid #fff;box-shadow:0 0 3px #000a}"+
 "#k25dlg{position:fixed;inset:0;z-index:3000;background:#000c;display:flex;flex-direction:column;overflow:auto;-webkit-overflow-scrolling:touch}"+
 "#k25dlg .bx{background:#fff;margin:auto;max-width:720px;width:100%;padding:10px 12px calc(env(safe-area-inset-bottom) + 12px)}"+
 "#k25dlg img{width:100%;height:auto;display:block;max-height:68vh;object-fit:contain;background:#222}"+
 "#k25dlg .hd{display:flex;gap:8px;align-items:center;margin-bottom:6px}#k25dlg .hd h3{flex:1;margin:0;font-size:17px}"+
 "#k25dlg table{font-size:14px;border-collapse:collapse;width:100%;margin-top:6px}#k25dlg td{padding:3px 4px;border-top:1px solid #eee;vertical-align:top}#k25dlg td:first-child{color:#555;white-space:nowrap}"+
 "#k25dlg .warn{background:#fde7f0;border-left:4px solid #c2185b;padding:6px 8px;font-size:14px;margin-top:6px}";document.head.appendChild(css);
 const c1=x=>(Math.round(x*10)/10).toFixed(1).replace(".",",");const es=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
 const col=k=>k.n===16||k.n===19?"#c2185b":(k.acc<=6&&!k.ep?"#1565c0":"#e65100");
 let K=[];
 function icon(k){const c=col(k);return L.divIcon({className:"",iconSize:[0,0],html:'<div class="k25"><svg viewBox="-26 -26 52 52"><g transform="rotate('+k.h.toFixed(1)+')"><path d="M0,-25 L-8,-9 L8,-9 Z" fill="'+c+'" stroke="#fff" stroke-width="1.5"/><path d="M0,0 L-11,-22 A24,24 0 0 1 11,-22 Z" fill="'+c+'" opacity=".25"/></g></svg><b style="background:'+c+'">'+k.n+'</b></div>'})}
 function dlg(i){const k=K[i];let d=document.getElementById("k25dlg");if(!d){d=document.createElement("div");d.id="k25dlg";document.body.appendChild(d)}
  d.innerHTML='<div class="bx"><div class="hd"><button id="k25p" aria-label="Edellinen">◀</button><h3>📷 '+k.n+' / '+K.length+' · klo '+k.t+'</h3><button id="k25n" aria-label="Seuraava">▶</button><button id="k25x">✕</button></div>'+
  '<img src="kuvat/'+k.f+'" alt="Kuva '+k.n+'">'+(k.ep&&(k.n===16||k.n===19)?'<div class="warn">'+es(k.sij)+'</div>':'')+
  '<table><tr><td>Aika</td><td>25.10.2026 klo '+k.t+' (UTC+2)</td></tr><tr><td>Suunta</td><td><b>'+Math.round(k.h)+'°</b> (tosi pohjoinen, puhelimen kompassi)</td></tr>'+
  '<tr><td>Tarkkuus</td><td>±'+c1(k.accx)+' m (GPS)'+(k.acc!==k.accx?' → sijoitus ±'+c1(k.acc)+' m':'')+'</td></tr><tr><td>Kohta</td><td>'+es(k.k)+'</td></tr>'+
  '<tr><td>EPSG:3067</td><td>E '+c1(k.E)+' · N '+c1(k.N)+'</td></tr><tr><td>Paikallinen</td><td>u '+c1(k.u)+' · v '+c1(k.v)+' m</td></tr>'+
  '<tr><td>Korko</td><td>maasto (DEM) '+(k.dem!=null?c1(k.dem)+' N2000':'–')+' · GPS-korkeus '+c1(k.alt)+' (epätarkka)</td></tr><tr><td>Sijoitus</td><td>'+es(k.sij)+'</td></tr><tr><td>Tiedosto</td><td style="word-break:break-all">'+es(k.orig)+'</td></tr></table>'+
  '<div style="display:flex;gap:8px;margin-top:8px"><button id="k25z" style="flex:1">🔍 Näytä kartalla</button><button id="k25c" style="flex:1">Sulje</button></div></div>';
  d.hidden=false;const cl=()=>{d.hidden=true};d.querySelector("#k25x").onclick=cl;d.querySelector("#k25c").onclick=cl;d.onclick=e=>{if(e.target===d)cl()};
  d.querySelector("#k25p").onclick=()=>dlg((i+K.length-1)%K.length);d.querySelector("#k25n").onclick=()=>dlg((i+1)%K.length);
  d.querySelector("#k25z").onclick=()=>{cl();if(!MAP.hasLayer(grp))grp.addTo(MAP);MAP.setView([k.lat,k.lon],Math.max(MAP.getZoom(),20))}}
 window.__K25={open:dlg,get K(){return K},grp};
 fetch("kuvat/kuvat.json").then(r=>r.json()).then(j=>{K=j.kuvat;K.forEach((k,i)=>{
   L.circle([k.lat,k.lon],{radius:k.acc,color:col(k),weight:1,dashArray:"4,4",fillOpacity:.05,interactive:false}).addTo(grp);
   if(k.raw)L.polyline([k.raw,[k.lat,k.lon]],{color:"#c2185b",weight:1.5,dashArray:"3,4",interactive:false}).addTo(grp);
   L.marker([k.lat,k.lon],{icon:icon(k),zIndexOffset:500+k.n}).on("click",()=>dlg(i)).addTo(grp)});
  if(own)grp.addTo(MAP);else applyLayers();
  // esilataa kuvat välimuistiin offline-käyttöä varten (SW tallentaa haetut tiedostot)
  const pre=()=>K.forEach(k=>{const im=new Image();im.src="kuvat/"+k.f});(window.requestIdleCallback||setTimeout)(pre,3000)
 }).catch(e=>console.warn("kuvat",e))})();
