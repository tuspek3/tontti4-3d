'use strict';
(function(){
const T=window.T4, R=6371008.8, DECL=13; // Rukan magneettinen eranto n. +13° (arvio)
const $=id=>document.getElementById(id);
// --- WGS84/GRS80 -> ETRS-TM35FIN (Krüger-sarja), lähes mm-tarkka
function toTM35(lat,lon){const a=6378137,f=1/298.257222101,k0=0.9996,lon0=27*Math.PI/180,E0=500000;
 const n=f/(2-f),A=a/(1+n)*(1+n*n/4+n**4/64),e=Math.sqrt(f*(2-f));
 const al=[n/2-2*n*n/3+5*n**3/16,13*n*n/48-3*n**3/5,61*n**3/240];
 const p=lat*Math.PI/180,l=lon*Math.PI/180-lon0;
 const t=Math.sinh(Math.atanh(Math.sin(p))-e*Math.atanh(e*Math.sin(p)));
 const xi=Math.atan2(t,Math.cos(l)),eta=Math.atanh(Math.sin(l)/Math.sqrt(1+t*t));
 let x=xi,y=eta;for(let j=1;j<=3;j++){x+=al[j-1]*Math.sin(2*j*xi)*Math.cosh(2*j*eta);y+=al[j-1]*Math.cos(2*j*xi)*Math.sinh(2*j*eta);}
 return [E0+k0*A*y,k0*A*x];}
window.toTM35=toTM35;
// Ellipsoidinen (GRS80) paikallinen laskenta: mm-tarkka alle 1 km:n etäisyyksillä
function enu(a,b){const r=Math.PI/180,A=6378137,e2=0.00669438002290,p=(a[0]+b[0])/2*r,s=Math.sin(p),w=1-e2*s*s;
 const M=A*(1-e2)/Math.pow(w,1.5),N=A/Math.sqrt(w);return [(b[1]-a[1])*r*N*Math.cos(p),(b[0]-a[0])*r*M];}
function dist(a,b){const v=enu(a,b);return Math.hypot(v[0],v[1]);}
function bearing(a,b){const v=enu(a,b);return (Math.atan2(v[0],v[1])*180/Math.PI+360)%360;}
const DIRS=['P','PPI','KO','IKI','I','IKA','KA','EKA','E','ELO','LO','LLO','L','LLU','LU','PLU'];
const dname=b=>['pohjoinen','koillinen','itä','kaakko','etelä','lounas','länsi','luode'][Math.round(b/45)%8];
const fi=(x,n)=>x.toFixed(n).replace('.',',');
window.T4calc={dist,bearing};
// --- kartta
const map=L.map('map',{zoomControl:false,maxZoom:23,attributionControl:true}).setView([66.1722,29.1895],19);
const osm=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxNativeZoom:19,maxZoom:23,attribution:'© OpenStreetMap'});
const orto=L.imageOverlay('ortho.jpg',T.bounds,{attribution:'Ilmakuva © MML'}).addTo(map);
const g=T.geom, lay={};
const poly=(k,o)=>L.polygon(g[k],o);
lay['Kaavatontti RA / VR']=L.layerGroup([poly('VA',{color:'#2e7d32',weight:2,fillOpacity:.12,dashArray:'6 4'}).bindTooltip('VR (yhteinen, ei rakentamista)'),
  L.polygon(g.KL4,{color:'#e65100',weight:3,fill:false}).bindTooltip('RA-kaavatontti'),poly('MA',{color:'#ff1744',weight:2,fill:false})]).addTo(map);
lay['Hallinta-alueet A / B']=L.layerGroup([poly('HA',{color:'#1e6fd9',weight:1,fillOpacity:.18}),poly('HB',{color:'#e8710a',weight:1,fillOpacity:.18})]).addTo(map);
lay['Ajoväylä Y3 + liittymä']=L.layerGroup([poly('Y3',{color:'#ff9800',weight:2,fillColor:'#bdbdbd',fillOpacity:.6}),poly('LC',{color:'#555',weight:1,fillColor:'#bdbdbd',fillOpacity:.6}),
  L.polyline(g.CL,{color:'#263238',weight:2,dashArray:'6 3'}),L.polyline(g.ROAD_CL,{color:'#fff',weight:2,dashArray:'8 8',opacity:.8}).bindTooltip('Siimapolku (keskilinja)')]).addTo(map);
lay['Talot, katos, terassit']=L.layerGroup([poly('A_roof',{color:'#000',weight:1,dashArray:'2 3',fill:false}),poly('B_roof',{color:'#000',weight:1,dashArray:'2 3',fill:false}),
  poly('A_T',{color:'#000',weight:1,fillColor:'#c8a165',fillOpacity:.85}),poly('B_T',{color:'#000',weight:1,fillColor:'#c8a165',fillOpacity:.85}),
  poly('A_W',{color:'#000',weight:2,fillColor:'#1e6fd9',fillOpacity:.7}).bindTooltip('A-talo (länsi)'),poly('B_W',{color:'#000',weight:2,fillColor:'#e8710a',fillOpacity:.7}).bindTooltip('B-talo (itä)'),
  poly('CP',{color:'#000',weight:2,fillColor:'#cfd8dc',fillOpacity:.8}).bindTooltip('Katos'),poly('Y1',{color:'#000',weight:1,fillColor:'#fdd835',fillOpacity:.85}).bindTooltip('Jätepiste Y1')]).addTo(map);
lay['Jakolinja']=L.polyline(g.J,{color:'#c62828',weight:4}).addTo(map);
const ptLayer=L.layerGroup().addTo(map); lay['Kohdepisteet']=ptLayer;
L.control.layers({'Ilmakuva (offline, MML)':L.layerGroup(),'OpenStreetMap (verkko)':osm},lay,{collapsed:true,position:'topright'}).addTo(map);
map.fitBounds(L.latLngBounds(g.MA).pad(.15));
const mk={};
T.points.forEach(p=>{mk[p.id]=L.circleMarker([p.lat,p.lon],{radius:5,color:'#000',weight:1.5,fillColor:'#fff',fillOpacity:1}).addTo(ptLayer)
  .bindTooltip(p.id,{permanent:true,direction:'right',className:'lbl',offset:[4,0]}).on('click',()=>select(p.id));});
// --- tila
let raw=null,acc=null,off=[0,0],sel=null,heading=null,follow=true,avg=null,samples=[];
try{const o=JSON.parse(localStorage.getItem('t4off')||'null');if(o)off=o;}catch(e){}
const me=L.circleMarker([0,0],{radius:7,color:'#fff',weight:3,fillColor:'#1976d2',fillOpacity:1});
const circ=L.circle([0,0],{radius:1,color:'#1976d2',weight:1,fillOpacity:.15});
const line=L.polyline([],{color:'#d32f2f',weight:3,dashArray:'4 6'}).addTo(map);
const pos=()=>raw?[raw[0]+off[0],raw[1]+off[1]]:null;
function onPos(p){raw=[p.coords.latitude,p.coords.longitude];acc=p.coords.accuracy;
 if(avg){samples.push([raw[0],raw[1],acc]);}
 if(!map.hasLayer(me)){me.addTo(map);circ.addTo(map);}
 update();}
function onErr(e){$('acc').textContent='GPS ei käytössä';$('acc').className='bad';
 $('accsub').textContent=e.code===1?'Sijainnin käyttö estetty – salli se selaimen asetuksista':'Virhe: '+e.message;}
if(!('geolocation' in navigator)) onErr({code:0,message:'selain ei tue paikannusta'});
else navigator.geolocation.watchPosition(onPos,onErr,{enableHighAccuracy:true,maximumAge:0,timeout:30000});
function update(){const P=pos();
 if(P){me.setLatLng(P);circ.setLatLng(P).setRadius(acc);
  $('acc').textContent='Tarkkuus ±'+fi(acc,acc<10?1:0)+' m';$('acc').className=acc<=3?'good':acc<=5?'mid':'bad';
  $('warn').hidden=!(acc>5);const tm=toTM35(P[0],P[1]);
  $('accsub').textContent='Sinä: N '+fi(tm[1],1)+'  E '+fi(tm[0],1)+(off[0]||off[1]?' · kalibroitu':'');
  if(follow&&!sel)map.panTo(P,{animate:false});}
 if(sel){const t=T.points.find(q=>q.id===sel);$('tname').textContent=t.id+' – '+t.nimi;
  if(P){const d=dist(P,[t.lat,t.lon]),b=bearing(P,[t.lat,t.lon]);
   $('tdist').textContent=d<50?fi(d,1)+' m':fi(d,0)+' m';
   $('tbear').textContent='Suunta '+fi(b,0)+'° ('+dname(b)+')'+(heading!=null?' · kompassi '+fi(heading,0)+'°':' · kartta pohjoinen ylös')+(d<acc?' · olet tarkkuuden rajoissa':'');
   $('arrow').style.transform='rotate('+((b-(heading||0)+360)%360)+'deg)';line.setLatLngs([P,[t.lat,t.lon]]);}
  else{$('tdist').textContent='–';line.setLatLngs([]);}}}
function select(id){sel=id;const t=T.points.find(q=>q.id===id);Object.values(mk).forEach(m=>m.setStyle({fillColor:'#fff',radius:5}));
 mk[id].setStyle({fillColor:'#d32f2f',radius:8});const P=pos();
 if(P)map.fitBounds(L.latLngBounds([P,[t.lat,t.lon]]).pad(.3),{maxZoom:21});else map.setView([t.lat,t.lon],20);
 $('sheet').hidden=true;update();}
window.T4select=select;
// --- kohdelista
function sheet(title,html){$('shTitle').textContent=title;$('shBody').innerHTML=html;$('sheet').hidden=false;}
document.querySelector('#sheet .close').onclick=()=>$('sheet').hidden=true;
function listHTML(mode){let h='',gp='';
 if(mode==='cal')h+='<p>Seiso <b>tunnetun pisteen</b> (esim. rajapyykin) päällä ja paina sitä. Sijaintisi siirretään niin, että se osuu pisteeseen. Paras tulos: tee ensin 30 s keskiarvo.</p><p><button data-reset="1">Poista kalibrointi</button> (nyt: '+fi(Math.hypot(off[0]*111320,off[1]*111320*Math.cos(66.17*Math.PI/180)),2)+' m)</p>';
 T.points.forEach(p=>{if(p.ryhma!==gp){gp=p.ryhma;h+='<div class="grp">'+gp+'</div>';}
  h+='<div class="pt'+(p.id===sel?' sel':'')+'"><button data-'+(mode==='cal'?'cal':'go')+'="'+p.id+'">'+(mode==='cal'?'Olen tässä':'Näytä')+'</button><b>'+p.id+'</b> '+p.nimi+
  '<div class="c">ETRS-TM35FIN: N '+p.N.toFixed(2)+'  E '+p.E.toFixed(2)+'<br>WGS84: '+p.lat.toFixed(7)+', '+p.lon.toFixed(7)+'</div>'+(p.kuvaus?'<div class="c">'+p.kuvaus+'</div>':'')+'</div>';});return h;}
$('shBody').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.go)select(b.dataset.go);
 if(b.dataset.reset){off=[0,0];localStorage.removeItem('t4off');$('sheet').hidden=true;status('Kalibrointi poistettu');update();}
 if(b.dataset.cal){if(!raw){alert('Ei GPS-sijaintia vielä');return;}const t=T.points.find(q=>q.id===b.dataset.cal);
  const base=avg&&samples.length?mean():raw; off=[t.lat-base[0],t.lon-base[1]];localStorage.setItem('t4off',JSON.stringify(off));
  $('sheet').hidden=true;status('Kalibroitu pisteeseen '+t.id+', siirto '+fi(dist(base,[t.lat,t.lon]),2)+' m');update();}});
$('bList').onclick=()=>sheet('Kohteet',listHTML('go'));
$('bCal').onclick=()=>sheet('Kalibroi tunnettuun pisteeseen',listHTML('cal'));
$('bInfo').onclick=()=>sheet('Ohje',`<p>Sininen piste = sijaintisi, vaalea ympyrä = GPS:n arvioitu tarkkuus. Valitse kohde: näet etäisyyden, suunnan ja nuolen.</p>
<p><b>Tarkkuus:</b> puhelimen GPS on avoimella paikalla tyypillisesti 3–5 m, metsässä 5–15 m. Sivu sopii suuntaa-antavaan paikantamiseen, ei rakentamisen merkintään. Tarkka merkintä: mittamies (koordinaatit listassa) tai mittanauha tunnetusta rajapyykistä.</p>
<p><b>Keskiarvo:</b> seiso paikallasi 30 s – tulos on yleensä vakaampi.</p><p><b>Kalibrointi:</b> seiso tunnetun rajapyykin päällä ja valitse se – virhe poistuu lähialueelta, kunnes satelliittitilanne muuttuu (n. 10–30 min).</p>
<p><b>Kompassi:</b> puhelimen kompassi voi heittää 10–20°; pidä puhelin vaakatasossa ja kaukana metallista. Eranto (+${DECL}°) huomioitu.</p>
<p>Suunnitelma: V1h (15°, kokonaisuus käännetty +4°). A = länsi, B = itä. Koordinaatit ETRS-TM35FIN (EPSG:3067) ja WGS84.</p>`);
function status(t){$('status').textContent=t;}
function mean(){let w=0,a=0,b=0;samples.forEach(s=>{const k=1/Math.max(s[2],1)**2;w+=k;a+=s[0]*k;b+=s[1]*k;});return [a/w,b/w];}
$('bAvg').onclick=()=>{if(!raw){status('Odotetaan GPS-sijaintia…');return;}if(avg)return;samples=[[raw[0],raw[1],acc]];avg=true;let s=30;$('bAvg').classList.add('on');
 const iv=setInterval(()=>{s--;status('Keskiarvo: pysy paikallasi… '+s+' s ('+samples.length+' havaintoa)');
  if(s<=0){clearInterval(iv);const m=mean();const sd=Math.sqrt(samples.reduce((q,x)=>q+dist(x,m)**2,0)/samples.length);
   raw=m;acc=Math.max(sd,Math.min(...samples.map(x=>x[2]))/Math.sqrt(samples.length),0.5);avg=false;$('bAvg').classList.remove('on');
   status('Keskiarvo valmis: '+samples.length+' havaintoa, hajonta '+fi(sd,1)+' m. Sijainti lukittu, kunnes GPS päivittyy.');update();}},1000);};
$('bFollow').onclick=()=>{follow=!follow;$('bFollow').classList.toggle('on',follow);const P=pos();if(follow&&P)map.setView(P,20);};
// --- kompassi
function onOri(e){let h=null;if(e.webkitCompassHeading!=null)h=e.webkitCompassHeading;else if(e.absolute&&e.alpha!=null)h=360-e.alpha;
 if(h==null)return;const so=(screen.orientation&&screen.orientation.angle)||0;heading=(h+DECL+so+360)%360;update();}
$('bCompass').onclick=async()=>{try{if(typeof DeviceOrientationEvent!=='undefined'&&DeviceOrientationEvent.requestPermission){const r=await DeviceOrientationEvent.requestPermission();if(r!=='granted'){status('Kompassin käyttö estetty');return;}}
 window.addEventListener('deviceorientationabsolute',onOri,true);window.addEventListener('deviceorientation',onOri,true);$('bCompass').classList.add('on');status('Kompassi päällä – nuoli näyttää suunnan puhelimen yläreunasta');}
 catch(e){status('Kompassi ei käytettävissä: '+e.message);}};
update();
})();
