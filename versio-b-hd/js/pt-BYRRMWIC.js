import{A as ze,Ab as Nn,B as Ve,Ba as Wr,Ca as je,D as te,Da as re,Db as Hn,Ea as Ge,Fa as $e,Fb as Ln,G as Ce,Gb as Ye,Ha as qe,I as xn,Ia as Ur,J as yn,Ja as Vr,Jb as j,K as nr,Ka as Fn,Kb as fr,L as uo,La as Cn,M as bn,Mb as Bl,N as Tn,Nb as zn,O as Nr,Ob as kl,P as bt,Q as ce,Qb as He,R as ke,Ra as cr,Rb as kt,T as se,V as Tt,W as wn,Wa as ve,X as Hr,Y as Lr,Z as zr,_a as Pn,a as _,c as Dl,ca as Sn,d as Pr,da as Or,fb as Dn,ga as _n,gb as lr,h as yt,ha as ye,hb as Bn,i as Dr,ia as An,ib as Gr,j as st,k as rt,ka as Rn,l as Br,lb as ur,m as vn,ma as at,na as Oe,oa as Mn,pa as In,qa as sr,ra as B,s as kr,sa as Ne,ta as ar,va as oe,xa as En,ya as ct,z as Bt,za as Re,zb as kn}from"./chunk-EC4UFZWC.js";var On,qr,fo=_(()=>{On=Math.pow(2,-24),qr=Symbol("SKIP_GENERATION")});function mo(o){return o.index?o.index.count:o.attributes.position.count}function Je(o){return mo(o)/3}function po(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function Wn(o,e){if(!o.index){let t=o.attributes.position.count,r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=po(t,r);o.setIndex(new re(n,1));for(let s=0;s<t;s++)n[s]=s}}function ho(o,e){let t=Je(o),r=e||o.drawRange,n=r.start/3,s=(r.start+r.count)/3,i=Math.max(0,n),c=Math.min(t,s)-i;return[{offset:Math.floor(i),count:Math.floor(c)}]}function go(o,e){if(!o.groups||!o.groups.length)return ho(o,e);let t=[],r=new Set,n=e||o.drawRange,s=n.start/3,i=(n.start+n.count)/3;for(let l of o.groups){let m=l.start/3,f=(l.start+l.count)/3;r.add(Math.max(s,m)),r.add(Math.min(i,f))}let c=Array.from(r.values()).sort((l,m)=>l-m);for(let l=0;l<c.length-1;l++){let m=c[l],f=c[l+1];t.push({offset:Math.floor(m),count:Math.floor(f-m)})}return t}function Un(o,e){let t=Je(o),r=go(o,e).sort((i,c)=>i.offset-c.offset),n=r[r.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return r.forEach(({count:i})=>s+=i),t!==s}var Nt=_(()=>{j()});function jr(o,e,t,r,n){let s=1/0,i=1/0,c=1/0,l=-1/0,m=-1/0,f=-1/0,u=1/0,a=1/0,p=1/0,v=-1/0,b=-1/0,d=-1/0;for(let h=e*6,g=(e+t)*6;h<g;h+=6){let y=o[h+0],w=o[h+1],T=y-w,M=y+w;T<s&&(s=T),M>l&&(l=M),y<u&&(u=y),y>v&&(v=y);let I=o[h+2],P=o[h+3],A=I-P,k=I+P;A<i&&(i=A),k>m&&(m=k),I<a&&(a=I),I>b&&(b=I);let H=o[h+4],C=o[h+5],W=H-C,U=H+C;W<c&&(c=W),U>f&&(f=U),H<p&&(p=H),H>d&&(d=H)}r[0]=s,r[1]=i,r[2]=c,r[3]=l,r[4]=m,r[5]=f,n[0]=u,n[1]=a,n[2]=p,n[3]=v,n[4]=b,n[5]=d}function Vn(o,e=null,t=null,r=null){let n=o.attributes.position,s=o.index?o.index.array:null,i=Je(o),c=n.normalized,l;e===null?(l=new Float32Array(i*6),t=0,r=i):(l=e,t=t||0,r=r||i);let m=n.array,f=n.offset||0,u=3;n.isInterleavedBufferAttribute&&(u=n.data.stride);let a=["getX","getY","getZ"];for(let p=t;p<t+r;p++){let v=p*3,b=p*6,d=v+0,h=v+1,g=v+2;s&&(d=s[d],h=s[h],g=s[g]),c||(d=d*u+f,h=h*u+f,g=g*u+f);for(let y=0;y<3;y++){let w,T,M;c?(w=n[a[y]](d),T=n[a[y]](h),M=n[a[y]](g)):(w=m[d+y],T=m[h+y],M=m[g+y]);let I=w;T<I&&(I=T),M<I&&(I=M);let P=w;T>P&&(P=T),M>P&&(P=M);let A=(P-I)/2,k=y*2;l[b+k+0]=I+A,l[b+k+1]=A+(Math.abs(I)+A)*On}}return l}var Gn=_(()=>{fo();Nt()});function fe(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function vo(o){let e=-1,t=-1/0;for(let r=0;r<3;r++){let n=o[r+3]-o[r];n>t&&(t=n,e=r)}return e}function xo(o,e){e.set(o)}function yo(o,e,t){let r,n;for(let s=0;s<3;s++){let i=s+3;r=o[s],n=e[s],t[s]=r<n?r:n,r=o[i],n=e[i],t[i]=r>n?r:n}}function mr(o,e,t){for(let r=0;r<3;r++){let n=e[o+2*r],s=e[o+2*r+1],i=n-s,c=n+s;i<t[r]&&(t[r]=i),c>t[r+3]&&(t[r+3]=c)}}function Ht(o){let e=o[3]-o[0],t=o[4]-o[1],r=o[5]-o[2];return 2*(e*t+t*r+r*e)}var wt=_(()=>{});function Xn(o,e,t,r,n,s){let i=-1,c=0;if(s===0)i=vo(e),i!==-1&&(c=(e[i]+e[i+3])/2);else if(s===1)i=vo(o),i!==-1&&(c=Ll(t,r,n,i));else if(s===2){let l=Ht(o),m=1.25*n,f=r*6,u=(r+n)*6;for(let a=0;a<3;a++){let p=e[a],d=(e[a+3]-p)/it;if(n<it/4){let h=[...lt];h.length=n;let g=0;for(let w=f;w<u;w+=6,g++){let T=h[g];T.candidate=t[w+2*a],T.count=0;let{bounds:M,leftCacheBounds:I,rightCacheBounds:P}=T;for(let A=0;A<3;A++)P[A]=1/0,P[A+3]=-1/0,I[A]=1/0,I[A+3]=-1/0,M[A]=1/0,M[A+3]=-1/0;mr(w,t,M)}h.sort(Hl);let y=n;for(let w=0;w<y;w++){let T=h[w];for(;w+1<y&&h[w+1].candidate===T.candidate;)h.splice(w+1,1),y--}for(let w=f;w<u;w+=6){let T=t[w+2*a];for(let M=0;M<y;M++){let I=h[M];T>=I.candidate?mr(w,t,I.rightCacheBounds):(mr(w,t,I.leftCacheBounds),I.count++)}}for(let w=0;w<y;w++){let T=h[w],M=T.count,I=n-T.count,P=T.leftCacheBounds,A=T.rightCacheBounds,k=0;M!==0&&(k=Ht(P)/l);let H=0;I!==0&&(H=Ht(A)/l);let C=1+1.25*(k*M+H*I);C<m&&(i=a,m=C,c=T.candidate)}}else{for(let y=0;y<it;y++){let w=lt[y];w.count=0,w.candidate=p+d+y*d;let T=w.bounds;for(let M=0;M<3;M++)T[M]=1/0,T[M+3]=-1/0}for(let y=f;y<u;y+=6){let M=~~((t[y+2*a]-p)/d);M>=it&&(M=it-1);let I=lt[M];I.count++,mr(y,t,I.bounds)}let h=lt[it-1];xo(h.bounds,h.rightCacheBounds);for(let y=it-2;y>=0;y--){let w=lt[y],T=lt[y+1];yo(w.bounds,T.rightCacheBounds,w.rightCacheBounds)}let g=0;for(let y=0;y<it-1;y++){let w=lt[y],T=w.count,M=w.bounds,P=lt[y+1].rightCacheBounds;T!==0&&(g===0?xo(M,Yr):yo(M,Yr,Yr)),g+=T;let A=0,k=0;g!==0&&(A=Ht(Yr)/l);let H=n-g;H!==0&&(k=Ht(P)/l);let C=1+1.25*(A*g+k*H);C<m&&(i=a,m=C,c=w.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:i,pos:c}}function Ll(o,e,t,r){let n=0;for(let s=e,i=e+t;s<i;s++)n+=o[s*6+r*2];return n/t}var it,Hl,lt,Yr,$n=_(()=>{wt();it=32,Hl=(o,e)=>o.candidate-e.candidate,lt=new Array(it).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Yr=new Float32Array(6)});var Lt,Zn=_(()=>{Lt=class{constructor(){this.boundingData=new Float32Array(6)}}});function Qn(o,e,t,r,n,s){let i=r,c=r+n-1,l=s.pos,m=s.axis*2;for(;;){for(;i<=c&&t[i*6+m]<l;)i++;for(;i<=c&&t[c*6+m]>=l;)c--;if(i<c){for(let f=0;f<3;f++){let u=e[i*3+f];e[i*3+f]=e[c*3+f],e[c*3+f]=u}for(let f=0;f<6;f++){let u=t[i*6+f];t[i*6+f]=t[c*6+f],t[c*6+f]=u}i++,c--}else return i}}var Kn=_(()=>{});function Jn(o,e,t,r,n,s){let i=r,c=r+n-1,l=s.pos,m=s.axis*2;for(;;){for(;i<=c&&t[i*6+m]<l;)i++;for(;i<=c&&t[c*6+m]>=l;)c--;if(i<c){let f=o[i];o[i]=o[c],o[c]=f;for(let u=0;u<6;u++){let a=t[i*6+u];t[i*6+u]=t[c*6+u],t[c*6+u]=a}i++,c--}else return i}}var es=_(()=>{});function he(o,e){return e[o+15]===65535}function be(o,e){return e[o+6]}function _e(o,e){return e[o+14]}function Ee(o){return o+8}function Me(o,e){return e[o+6]}function zt(o,e){return e[o+7]}var Ze=_(()=>{});function $r(o){return"count"in o?1:1+$r(o.left)+$r(o.right)}function is(o,e,t){return ts=new Float32Array(t),dr=new Uint32Array(t),Xr=new Uint16Array(t),rs=new Uint8Array(t),bo(o,e)}function bo(o,e){let t=o/4,r=o/2,n="count"in e,s=e.boundingData;for(let i=0;i<6;i++)ts[t+i]=s[i];if(n)if(e.buffer){let i=e.buffer;rs.set(new Uint8Array(i),o);for(let c=o,l=o+i.byteLength;c<l;c+=32){let m=c/2;he(m,Xr)||(dr[c/4+6]+=t)}return o+i.byteLength}else{let i=e.offset,c=e.count;return dr[t+6]=i,Xr[r+14]=c,Xr[r+15]=65535,o+32}else{let i=e.left,c=e.right,l=e.splitAxis,m;if(m=bo(o+32,i),m/4>zl)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return dr[t+6]=m/4,m=bo(m,c),dr[t+7]=l,m}}var ts,dr,Xr,rs,zl,os=_(()=>{Ze();zl=Math.pow(2,32)});function Ol(o,e){let t=(o.index?o.index.count:o.attributes.position.count)/3,r=t>2**16,n=r?4:2,s=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),i=r?new Uint32Array(s):new Uint16Array(s);for(let c=0,l=i.length;c<l;c++)i[c]=c;return i}function Wl(o,e,t,r,n){let{maxDepth:s,verbose:i,maxLeafTris:c,strategy:l,onProgress:m,indirect:f}=n,u=o._indirectBuffer,a=o.geometry,p=a.index?a.index.array:null,v=f?Jn:Qn,b=Je(a),d=new Float32Array(6),h=!1,g=new Lt;return jr(e,t,r,g.boundingData,d),w(g,t,r,d),g;function y(T){m&&m(T/b)}function w(T,M,I,P=null,A=0){if(!h&&A>=s&&(h=!0,i&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(a))),I<=c||A>=s)return y(M+I),T.offset=M,T.count=I,T;let k=Xn(T.boundingData,P,e,M,I,l);if(k.axis===-1)return y(M+I),T.offset=M,T.count=I,T;let H=v(u,p,e,M,I,k);if(H===M||H===M+I)y(M+I),T.offset=M,T.count=I;else{T.splitAxis=k.axis;let C=new Lt,W=M,U=H-M;T.left=C,jr(e,W,U,C.boundingData,d),w(C,W,U,d,A+1);let Z=new Lt,ue=H,Te=I-U;T.right=Z,jr(e,ue,Te,Z.boundingData,d),w(Z,ue,Te,d,A+1)}return T}}function ns(o,e){let t=o.geometry;e.indirect&&(o._indirectBuffer=Ol(t,e.useSharedArrayBuffer),Un(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||Wn(t,e);let r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=Vn(t),s=e.indirect?ho(t,e.range):go(t,e.range);o._roots=s.map(i=>{let c=Wl(o,n,i.offset,i.count,e),l=$r(c),m=new r(32*l);return is(0,c,m),m})}var ss=_(()=>{Nt();Gn();$n();Zn();Kn();es();os()});var We,gf,To=_(()=>{j();We=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let r=1/0,n=-1/0;for(let s=0,i=e.length;s<i;s++){let l=e[s][t];r=l<r?l:r,n=l>n?l:n}this.min=r,this.max=n}setFromPoints(e,t){let r=1/0,n=-1/0;for(let s=0,i=t.length;s<i;s++){let c=t[s],l=e.dot(c);r=l<r?l:r,n=l>n?l:n}this.min=r,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}};We.prototype.setFromBox=function(){let o=new B;return function(t,r){let n=r.min,s=r.max,i=1/0,c=-1/0;for(let l=0;l<=1;l++)for(let m=0;m<=1;m++)for(let f=0;f<=1;f++){o.x=n.x*l+s.x*(1-l),o.y=n.y*m+s.y*(1-m),o.z=n.z*f+s.z*(1-f);let u=t.dot(o);i=Math.min(u,i),c=Math.max(u,c)}this.min=i,this.max=c}}();gf=function(){let o=new We;return function(t,r){let n=t.points,s=t.satAxes,i=t.satBounds,c=r.points,l=r.satAxes,m=r.satBounds;for(let f=0;f<3;f++){let u=i[f],a=s[f];if(o.setFromPoints(a,c),u.isSeparated(o))return!1}for(let f=0;f<3;f++){let u=m[f],a=l[f];if(o.setFromPoints(a,n),u.isSeparated(o))return!1}}}()});var Ul,pr,as,wo=_(()=>{j();Ul=function(){let o=new B,e=new B,t=new B;return function(n,s,i){let c=n.start,l=o,m=s.start,f=e;t.subVectors(c,m),o.subVectors(n.end,n.start),e.subVectors(s.end,s.start);let u=t.dot(f),a=f.dot(l),p=f.dot(f),v=t.dot(l),d=l.dot(l)*p-a*a,h,g;d!==0?h=(u*a-v*p)/d:h=0,g=(u+h*a)/p,i.x=h,i.y=g}}(),pr=function(){let o=new ye,e=new B,t=new B;return function(n,s,i,c){Ul(n,s,o);let l=o.x,m=o.y;if(l>=0&&l<=1&&m>=0&&m<=1){n.at(l,i),s.at(m,c);return}else if(l>=0&&l<=1){m<0?s.at(0,c):s.at(1,c),n.closestPointToPoint(c,!0,i);return}else if(m>=0&&m<=1){l<0?n.at(0,i):n.at(1,i),s.closestPointToPoint(i,!0,c);return}else{let f;l<0?f=n.start:f=n.end;let u;m<0?u=s.start:u=s.end;let a=e,p=t;if(n.closestPointToPoint(u,!0,e),s.closestPointToPoint(f,!0,t),a.distanceToSquared(u)<=p.distanceToSquared(f)){i.copy(a),c.copy(u);return}else{i.copy(f),c.copy(p);return}}}}(),as=function(){let o=new B,e=new B,t=new Vr,r=new Ye;return function(s,i){let{radius:c,center:l}=s,{a:m,b:f,c:u}=i;if(r.start=m,r.end=f,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c||(r.start=m,r.end=u,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c)||(r.start=f,r.end=u,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c))return!0;let b=i.getPlane(t);if(Math.abs(b.distanceToPoint(l))<=c){let h=b.projectPoint(l,e);if(i.containsPoint(h))return!0}return!1}}()});function So(o){return Math.abs(o)<Vl}var Vl,Pe,Ot=_(()=>{j();To();wo();Vl=1e-15;Pe=class extends ct{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new B),this.satBounds=new Array(4).fill().map(()=>new We),this.points=[this.a,this.b,this.c],this.sphere=new ar,this.plane=new Vr,this.needsUpdate=!0}intersectsSphere(e){return as(e,this)}update(){let e=this.a,t=this.b,r=this.c,n=this.points,s=this.satAxes,i=this.satBounds,c=s[0],l=i[0];this.getNormal(c),l.setFromPoints(c,n);let m=s[1],f=i[1];m.subVectors(e,t),f.setFromPoints(m,n);let u=s[2],a=i[2];u.subVectors(t,r),a.setFromPoints(u,n);let p=s[3],v=i[3];p.subVectors(r,e),v.setFromPoints(p,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(c,e),this.needsUpdate=!1}};Pe.prototype.closestPointToSegment=function(){let o=new B,e=new B,t=new Ye;return function(n,s=null,i=null){let{start:c,end:l}=n,m=this.points,f,u=1/0;for(let a=0;a<3;a++){let p=(a+1)%3;t.start.copy(m[a]),t.end.copy(m[p]),pr(t,n,o,e),f=o.distanceToSquared(e),f<u&&(u=f,s&&s.copy(o),i&&i.copy(e))}return this.closestPointToPoint(c,o),f=c.distanceToSquared(o),f<u&&(u=f,s&&s.copy(o),i&&i.copy(c)),this.closestPointToPoint(l,o),f=l.distanceToSquared(o),f<u&&(u=f,s&&s.copy(o),i&&i.copy(l)),Math.sqrt(u)}}();Pe.prototype.intersectsTriangle=function(){let o=new Pe,e=new Array(3),t=new Array(3),r=new We,n=new We,s=new B,i=new B,c=new B,l=new B,m=new B,f=new Ye,u=new Ye,a=new Ye,p=new B;function v(b,d,h){let g=b.points,y=0,w=-1;for(let T=0;T<3;T++){let{start:M,end:I}=f;M.copy(g[T]),I.copy(g[(T+1)%3]),f.delta(i);let P=So(d.distanceToPoint(M));if(So(d.normal.dot(i))&&P){h.copy(f),y=2;break}let A=d.intersectLine(f,p);if(!A&&P&&p.copy(M),(A||P)&&!So(p.distanceTo(I))){if(y<=1)(y===1?h.start:h.end).copy(p),P&&(w=y);else if(y>=2){(w===1?h.start:h.end).copy(p),y=2;break}if(y++,y===2&&w===-1)break}}return y}return function(d,h=null,g=!1){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(o.copy(d),o.update(),d=o);let y=this.plane,w=d.plane;if(Math.abs(y.normal.dot(w.normal))>1-1e-10){let T=this.satBounds,M=this.satAxes;t[0]=d.a,t[1]=d.b,t[2]=d.c;for(let A=0;A<4;A++){let k=T[A],H=M[A];if(r.setFromPoints(H,t),k.isSeparated(r))return!1}let I=d.satBounds,P=d.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let A=0;A<4;A++){let k=I[A],H=P[A];if(r.setFromPoints(H,e),k.isSeparated(r))return!1}for(let A=0;A<4;A++){let k=M[A];for(let H=0;H<4;H++){let C=P[H];if(s.crossVectors(k,C),r.setFromPoints(s,e),n.setFromPoints(s,t),r.isSeparated(n))return!1}}return h&&(g||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),h.start.set(0,0,0),h.end.set(0,0,0)),!0}else{let T=v(this,w,u);if(T===1&&d.containsPoint(u.end))return h&&(h.start.copy(u.end),h.end.copy(u.end)),!0;if(T!==2)return!1;let M=v(d,y,a);if(M===1&&this.containsPoint(a.end))return h&&(h.start.copy(a.end),h.end.copy(a.end)),!0;if(M!==2)return!1;if(u.delta(c),a.delta(l),c.dot(l)<0){let W=a.start;a.start=a.end,a.end=W}let I=u.start.dot(c),P=u.end.dot(c),A=a.start.dot(c),k=a.end.dot(c),H=P<A,C=I<k;return I!==k&&A!==P&&H===C?!1:(h&&(m.subVectors(u.start,a.start),m.dot(c)>0?h.start.copy(u.start):h.start.copy(a.start),m.subVectors(u.end,a.end),m.dot(c)<0?h.end.copy(u.end):h.end.copy(a.end)),!0)}}}();Pe.prototype.distanceToPoint=function(){let o=new B;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Pe.prototype.distanceToTriangle=function(){let o=new B,e=new B,t=["a","b","c"],r=new Ye,n=new Ye;return function(i,c=null,l=null){let m=c||l?r:null;if(this.intersectsTriangle(i,m))return(c||l)&&(c&&m.getCenter(c),l&&m.getCenter(l)),0;let f=1/0;for(let u=0;u<3;u++){let a,p=t[u],v=i[p];this.closestPointToPoint(v,o),a=v.distanceToSquared(o),a<f&&(f=a,c&&c.copy(o),l&&l.copy(v));let b=this[p];i.closestPointToPoint(b,o),a=b.distanceToSquared(o),a<f&&(f=a,c&&c.copy(b),l&&l.copy(o))}for(let u=0;u<3;u++){let a=t[u],p=t[(u+1)%3];r.set(this[a],this[p]);for(let v=0;v<3;v++){let b=t[v],d=t[(v+1)%3];n.set(i[b],i[d]),pr(r,n,o,e);let h=o.distanceToSquared(e);h<f&&(f=h,c&&c.copy(o),l&&l.copy(e))}}return Math.sqrt(f)}}()});var Ae,St=_(()=>{j();To();Ot();wo();Ae=class{constructor(e,t,r){this.isOrientedBox=!0,this.min=new B,this.max=new B,this.matrix=new oe,this.invMatrix=new oe,this.points=new Array(8).fill().map(()=>new B),this.satAxes=new Array(3).fill().map(()=>new B),this.satBounds=new Array(3).fill().map(()=>new We),this.alignedSatBounds=new Array(3).fill().map(()=>new We),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),r&&this.matrix.copy(r)}set(e,t,r){this.min.copy(e),this.max.copy(t),this.matrix.copy(r),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Ae.prototype.update=function(){return function(){let e=this.matrix,t=this.min,r=this.max,n=this.points;for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++){let a=1*m|2*f|4*u,p=n[a];p.x=m?r.x:t.x,p.y=f?r.y:t.y,p.z=u?r.z:t.z,p.applyMatrix4(e)}let s=this.satBounds,i=this.satAxes,c=n[0];for(let m=0;m<3;m++){let f=i[m],u=s[m],a=1<<m,p=n[a];f.subVectors(c,p),u.setFromPoints(f,n)}let l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ae.prototype.intersectsBox=function(){let o=new We;return function(t){this.needsUpdate&&this.update();let r=t.min,n=t.max,s=this.satBounds,i=this.satAxes,c=this.alignedSatBounds;if(o.min=r.x,o.max=n.x,c[0].isSeparated(o)||(o.min=r.y,o.max=n.y,c[1].isSeparated(o))||(o.min=r.z,o.max=n.z,c[2].isSeparated(o)))return!1;for(let l=0;l<3;l++){let m=i[l],f=s[l];if(o.setFromBox(m,t),f.isSeparated(o))return!1}return!0}}();Ae.prototype.intersectsTriangle=function(){let o=new Pe,e=new Array(3),t=new We,r=new We,n=new B;return function(i){this.needsUpdate&&this.update(),i.isExtendedTriangle?i.needsUpdate&&i.update():(o.copy(i),o.update(),i=o);let c=this.satBounds,l=this.satAxes;e[0]=i.a,e[1]=i.b,e[2]=i.c;for(let a=0;a<3;a++){let p=c[a],v=l[a];if(t.setFromPoints(v,e),p.isSeparated(t))return!1}let m=i.satBounds,f=i.satAxes,u=this.points;for(let a=0;a<3;a++){let p=m[a],v=f[a];if(t.setFromPoints(v,u),p.isSeparated(t))return!1}for(let a=0;a<3;a++){let p=l[a];for(let v=0;v<4;v++){let b=f[v];if(n.crossVectors(p,b),t.setFromPoints(n,e),r.setFromPoints(n,u),t.isSeparated(r))return!1}}return!0}}();Ae.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Ae.prototype.distanceToPoint=function(){let o=new B;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Ae.prototype.distanceToBox=function(){let o=["x","y","z"],e=new Array(12).fill().map(()=>new Ye),t=new Array(12).fill().map(()=>new Ye),r=new B,n=new B;return function(i,c=0,l=null,m=null){if(this.needsUpdate&&this.update(),this.intersectsBox(i))return(l||m)&&(i.getCenter(n),this.closestPointToPoint(n,r),i.closestPointToPoint(r,n),l&&l.copy(r),m&&m.copy(n)),0;let f=c*c,u=i.min,a=i.max,p=this.points,v=1/0;for(let d=0;d<8;d++){let h=p[d];n.copy(h).clamp(u,a);let g=h.distanceToSquared(n);if(g<v&&(v=g,l&&l.copy(h),m&&m.copy(n),g<f))return Math.sqrt(g)}let b=0;for(let d=0;d<3;d++)for(let h=0;h<=1;h++)for(let g=0;g<=1;g++){let y=(d+1)%3,w=(d+2)%3,T=h<<y|g<<w,M=1<<d|h<<y|g<<w,I=p[T],P=p[M];e[b].set(I,P);let k=o[d],H=o[y],C=o[w],W=t[b],U=W.start,Z=W.end;U[k]=u[k],U[H]=h?u[H]:a[H],U[C]=g?u[C]:a[H],Z[k]=a[k],Z[H]=h?u[H]:a[H],Z[C]=g?u[C]:a[H],b++}for(let d=0;d<=1;d++)for(let h=0;h<=1;h++)for(let g=0;g<=1;g++){n.x=d?a.x:u.x,n.y=h?a.y:u.y,n.z=g?a.z:u.z,this.closestPointToPoint(n,r);let y=n.distanceToSquared(r);if(y<v&&(v=y,l&&l.copy(r),m&&m.copy(n),y<f))return Math.sqrt(y)}for(let d=0;d<12;d++){let h=e[d];for(let g=0;g<12;g++){let y=t[g];pr(h,y,r,n);let w=r.distanceToSquared(n);if(w<v&&(v=w,l&&l.copy(r),m&&m.copy(n),w<f))return Math.sqrt(w)}}return Math.sqrt(v)}}()});var ft,Qr=_(()=>{ft=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}});var _o,Le,Kr=_(()=>{Ot();Qr();_o=class extends ft{constructor(){super(()=>new Pe)}},Le=new _o});var Ao,ie,ot=_(()=>{Ao=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=r=>{t&&e.push(t),t=r,this.float32Array=new Float32Array(r),this.uint16Array=new Uint16Array(r),this.uint32Array=new Uint32Array(r)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},ie=new Ao});function cs(o,e,t,r,n,s){mt=Jr.getPrimitive(),Ut=Jr.getPrimitive(),Wt.push(mt,Ut),ie.setBuffer(o._roots[e]);let i=Ro(0,o.geometry,t,r,n,s);ie.clearBuffer(),Jr.releasePrimitive(mt),Jr.releasePrimitive(Ut),Wt.pop(),Wt.pop();let c=Wt.length;return c>0&&(Ut=Wt[c-1],mt=Wt[c-2]),i}function Ro(o,e,t,r,n=null,s=0,i=0){let{float32Array:c,uint16Array:l,uint32Array:m}=ie,f=o*2;if(he(f,l)){let a=be(o,m),p=_e(f,l);return fe(o,c,mt),r(a,p,!1,i,s+o,mt)}else{let k=function(C){let{uint16Array:W,uint32Array:U}=ie,Z=C*2;for(;!he(Z,W);)C=Ee(C),Z=C*2;return be(C,U)},H=function(C){let{uint16Array:W,uint32Array:U}=ie,Z=C*2;for(;!he(Z,W);)C=Me(C,U),Z=C*2;return be(C,U)+_e(Z,W)},a=Ee(o),p=Me(o,m),v=a,b=p,d,h,g,y;if(n&&(g=mt,y=Ut,fe(v,c,g),fe(b,c,y),d=n(g),h=n(y),h<d)){v=p,b=a;let C=d;d=h,h=C,g=y}g||(g=mt,fe(v,c,g));let w=he(v*2,l),T=t(g,w,d,i+1,s+v),M;if(T===2){let C=k(v),U=H(v)-C;M=r(C,U,!0,i+1,s+v,g)}else M=T&&Ro(v,e,t,r,n,s,i+1);if(M)return!0;y=Ut,fe(b,c,y);let I=he(b*2,l),P=t(y,I,h,i+1,s+b),A;if(P===2){let C=k(b),U=H(b)-C;A=r(C,U,!0,i+1,s+b,y)}else A=P&&Ro(b,e,t,r,n,s,i+1);return!!A}}var mt,Ut,Wt,Jr,ls=_(()=>{j();wt();Qr();Ze();ot();Wt=[],Jr=new ft(()=>new Ne)});function us(o,e,t={},r=0,n=1/0){let s=r*r,i=n*n,c=1/0,l=null;if(o.shapecast({boundsTraverseOrder:f=>(hr.copy(e).clamp(f.min,f.max),hr.distanceToSquared(e)),intersectsBounds:(f,u,a)=>a<c&&a<i,intersectsTriangle:(f,u)=>{f.closestPointToPoint(e,hr);let a=e.distanceToSquared(hr);return a<c&&(Mo.copy(hr),c=a,l=u),a<s}}),c===1/0)return null;let m=Math.sqrt(c);return t.point?t.point.copy(Mo):t.point=Mo.clone(),t.distance=m,t.faceIndex=l,t}var hr,Mo,fs=_(()=>{j();hr=new B,Mo=new B});function jl(o,e,t,r,n,s,i,c){let l;if(s===Dr?l=o.intersectTriangle(r,t,e,!0,n):l=o.intersectTriangle(e,t,r,s!==st,n),l===null)return null;let m=o.origin.distanceTo(n);return m<i||m>c?null:{distance:m,point:n.clone()}}function Yl(o,e,t,r,n,s,i,c,l,m,f){_t.fromBufferAttribute(e,s),At.fromBufferAttribute(e,i),Rt.fromBufferAttribute(e,c);let u=jl(o,_t,At,Rt,gr,l,m,f);if(u){let a=new B;ct.getBarycoord(gr,_t,At,Rt,a),r&&(ti.fromBufferAttribute(r,s),ri.fromBufferAttribute(r,i),ii.fromBufferAttribute(r,c),u.uv=ct.getInterpolation(gr,_t,At,Rt,ti,ri,ii,new ye)),n&&(ti.fromBufferAttribute(n,s),ri.fromBufferAttribute(n,i),ii.fromBufferAttribute(n,c),u.uv1=ct.getInterpolation(gr,_t,At,Rt,ti,ri,ii,new ye)),t&&(ms.fromBufferAttribute(t,s),ds.fromBufferAttribute(t,i),ps.fromBufferAttribute(t,c),u.normal=ct.getInterpolation(gr,_t,At,Rt,ms,ds,ps,new B),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let p={a:s,b:i,c,normal:new B,materialIndex:0};ct.getNormal(_t,At,Rt,p.normal),u.face=p,u.faceIndex=s,ql&&(u.barycoord=a)}return u}function Vt(o,e,t,r,n,s,i){let c=r*3,l=c+0,m=c+1,f=c+2,u=o.index;o.index&&(l=u.getX(l),m=u.getX(m),f=u.getX(f));let{position:a,normal:p,uv:v,uv1:b}=o.attributes,d=Yl(t,a,p,v,b,l,m,f,e,s,i);return d?(d.faceIndex=r,n&&n.push(d),d):null}var ql,_t,At,Rt,ti,ri,ii,ms,ds,ps,gr,Io=_(()=>{j();ql=parseInt(Pr)>=169,_t=new B,At=new B,Rt=new B,ti=new ye,ri=new ye,ii=new ye,ms=new B,ds=new B,ps=new B,gr=new B});function me(o,e,t,r){let n=o.a,s=o.b,i=o.c,c=e,l=e+1,m=e+2;t&&(c=t.getX(c),l=t.getX(l),m=t.getX(m)),n.x=r.getX(c),n.y=r.getY(c),n.z=r.getZ(c),s.x=r.getX(l),s.y=r.getY(l),s.z=r.getZ(l),i.x=r.getX(m),i.y=r.getY(m),i.z=r.getZ(m)}var dt=_(()=>{});function hs(o,e,t,r,n,s,i,c){let{geometry:l,_indirectBuffer:m}=o;for(let f=r,u=r+n;f<u;f++)Vt(l,e,t,f,s,i,c)}function gs(o,e,t,r,n,s,i){let{geometry:c,_indirectBuffer:l}=o,m=1/0,f=null;for(let u=r,a=r+n;u<a;u++){let p;p=Vt(c,e,t,u,null,s,i),p&&p.distance<m&&(f=p,m=p.distance)}return f}function vs(o,e,t,r,n,s,i){let{geometry:c}=t,{index:l}=c,m=c.attributes.position;for(let f=o,u=e+o;f<u;f++){let a;if(a=f,me(i,a*3,l,m),i.needsUpdate=!0,r(i,a,n,s))return!0}return!1}var oi=_(()=>{Io();dt()});function xs(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=o.geometry,r=t.index?t.index.array:null,n=t.attributes.position,s,i,c,l,m=0,f=o._roots;for(let a=0,p=f.length;a<p;a++)s=f[a],i=new Uint32Array(s),c=new Uint16Array(s),l=new Float32Array(s),u(0,m),m+=s.byteLength;function u(a,p,v=!1){let b=a*2;if(c[b+15]===65535){let h=i[a+6],g=c[b+14],y=1/0,w=1/0,T=1/0,M=-1/0,I=-1/0,P=-1/0;for(let A=3*h,k=3*(h+g);A<k;A++){let H=r[A],C=n.getX(H),W=n.getY(H),U=n.getZ(H);C<y&&(y=C),C>M&&(M=C),W<w&&(w=W),W>I&&(I=W),U<T&&(T=U),U>P&&(P=U)}return l[a+0]!==y||l[a+1]!==w||l[a+2]!==T||l[a+3]!==M||l[a+4]!==I||l[a+5]!==P?(l[a+0]=y,l[a+1]=w,l[a+2]=T,l[a+3]=M,l[a+4]=I,l[a+5]=P,!0):!1}else{let h=a+8,g=i[a+6],y=h+p,w=g+p,T=v,M=!1,I=!1;e?T||(M=e.has(y),I=e.has(w),T=!M&&!I):(M=!0,I=!0);let P=T||M,A=T||I,k=!1;P&&(k=u(h,p,T));let H=!1;A&&(H=u(g,p,T));let C=k||H;if(C)for(let W=0;W<3;W++){let U=h+W,Z=g+W,ue=l[U],Te=l[U+3],we=l[Z],De=l[Z+3];l[a+W]=ue<we?ue:we,l[a+W+3]=Te>De?Te:De}return C}}}var ys=_(()=>{});function Xe(o,e,t,r,n){let s,i,c,l,m,f,u=1/t.direction.x,a=1/t.direction.y,p=1/t.direction.z,v=t.origin.x,b=t.origin.y,d=t.origin.z,h=e[o],g=e[o+3],y=e[o+1],w=e[o+3+1],T=e[o+2],M=e[o+3+2];return u>=0?(s=(h-v)*u,i=(g-v)*u):(s=(g-v)*u,i=(h-v)*u),a>=0?(c=(y-b)*a,l=(w-b)*a):(c=(w-b)*a,l=(y-b)*a),s>l||c>i||((c>s||isNaN(s))&&(s=c),(l<i||isNaN(i))&&(i=l),p>=0?(m=(T-d)*p,f=(M-d)*p):(m=(M-d)*p,f=(T-d)*p),s>f||m>i)?!1:((m>s||s!==s)&&(s=m),(f<i||i!==i)&&(i=f),s<=n&&i>=r)}var vr=_(()=>{});function bs(o,e,t,r,n,s,i,c){let{geometry:l,_indirectBuffer:m}=o;for(let f=r,u=r+n;f<u;f++){let a=m?m[f]:f;Vt(l,e,t,a,s,i,c)}}function Ts(o,e,t,r,n,s,i){let{geometry:c,_indirectBuffer:l}=o,m=1/0,f=null;for(let u=r,a=r+n;u<a;u++){let p;p=Vt(c,e,t,l?l[u]:u,null,s,i),p&&p.distance<m&&(f=p,m=p.distance)}return f}function ws(o,e,t,r,n,s,i){let{geometry:c}=t,{index:l}=c,m=c.attributes.position;for(let f=o,u=e+o;f<u;f++){let a;if(a=t.resolveTriangleIndex(f),me(i,a*3,l,m),i.needsUpdate=!0,r(i,a,n,s))return!0}return!1}var ni=_(()=>{Io();dt()});function Ss(o,e,t,r,n,s,i){ie.setBuffer(o._roots[e]),Eo(0,o,t,r,n,s,i),ie.clearBuffer()}function Eo(o,e,t,r,n,s,i){let{float32Array:c,uint16Array:l,uint32Array:m}=ie,f=o*2;if(he(f,l)){let a=be(o,m),p=_e(f,l);hs(e,t,r,a,p,n,s,i)}else{let a=Ee(o);Xe(a,c,r,s,i)&&Eo(a,e,t,r,n,s,i);let p=Me(o,m);Xe(p,c,r,s,i)&&Eo(p,e,t,r,n,s,i)}}var _s=_(()=>{vr();Ze();ot();oi()});function As(o,e,t,r,n,s){ie.setBuffer(o._roots[e]);let i=Fo(0,o,t,r,n,s);return ie.clearBuffer(),i}function Fo(o,e,t,r,n,s){let{float32Array:i,uint16Array:c,uint32Array:l}=ie,m=o*2;if(he(m,c)){let u=be(o,l),a=_e(m,c);return gs(e,t,r,u,a,n,s)}else{let u=zt(o,l),a=Xl[u],v=r.direction[a]>=0,b,d;v?(b=Ee(o),d=Me(o,l)):(b=Me(o,l),d=Ee(o));let g=Xe(b,i,r,n,s)?Fo(b,e,t,r,n,s):null;if(g){let T=g.point[a];if(v?T<=i[d+u]:T>=i[d+u+3])return g}let w=Xe(d,i,r,n,s)?Fo(d,e,t,r,n,s):null;return g&&w?g.distance<=w.distance?g:w:g||w||null}}var Xl,Rs=_(()=>{Ze();ot();vr();oi();Xl=["x","y","z"]});function Is(o,e,t,r){ie.setBuffer(o._roots[e]);let n=Co(0,o,t,r);return ie.clearBuffer(),n}function Co(o,e,t,r,n=null){let{float32Array:s,uint16Array:i,uint32Array:c}=ie,l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Ms.set(t.boundingBox.min,t.boundingBox.max,r),n=Ms),he(l,i)){let f=e.geometry,u=f.index,a=f.attributes.position,p=t.index,v=t.attributes.position,b=be(o,c),d=_e(l,i);if(xr.copy(r).invert(),t.boundsTree)return fe(o,s,ai),ai.matrix.copy(xr),ai.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>ai.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(r),g.b.applyMatrix4(r),g.c.applyMatrix4(r),g.needsUpdate=!0;for(let y=b*3,w=(d+b)*3;y<w;y+=3)if(me(qt,y,u,a),qt.needsUpdate=!0,g.intersectsTriangle(qt))return!0;return!1}});for(let h=b*3,g=(d+b)*3;h<g;h+=3){me(Gt,h,u,a),Gt.a.applyMatrix4(xr),Gt.b.applyMatrix4(xr),Gt.c.applyMatrix4(xr),Gt.needsUpdate=!0;for(let y=0,w=p.count;y<w;y+=3)if(me(qt,y,p,v),qt.needsUpdate=!0,Gt.intersectsTriangle(qt))return!0}}else{let f=o+8,u=c[o+6];return fe(f,s,si),!!(n.intersectsBox(si)&&Co(f,e,t,r,n)||(fe(u,s,si),n.intersectsBox(si)&&Co(u,e,t,r,n)))}}var si,Gt,qt,xr,Ms,ai,Es=_(()=>{j();St();Ot();dt();wt();Ze();ot();si=new Ne,Gt=new Pe,qt=new Pe,xr=new oe,Ms=new Ae,ai=new Ae});function Fs(o,e,t,r={},n={},s=0,i=1/0){e.boundingBox||e.computeBoundingBox(),Po.set(e.boundingBox.min,e.boundingBox.max,t),Po.needsUpdate=!0;let c=o.geometry,l=c.attributes.position,m=c.index,f=e.attributes.position,u=e.index,a=Le.getPrimitive(),p=Le.getPrimitive(),v=$l,b=Zl,d=null,h=null;n&&(d=Ql,h=Kl);let g=1/0,y=null,w=null;return ci.copy(t).invert(),yr.matrix.copy(ci),o.shapecast({boundsTraverseOrder:T=>Po.distanceToBox(T),intersectsBounds:(T,M,I)=>I<g&&I<i?(M&&(yr.min.copy(T.min),yr.max.copy(T.max),yr.needsUpdate=!0),!0):!1,intersectsRange:(T,M)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>yr.distanceToBox(P),intersectsBounds:(P,A,k)=>k<g&&k<i,intersectsRange:(P,A)=>{for(let k=P,H=P+A;k<H;k++){me(p,3*k,u,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let C=T,W=T+M;C<W;C++){me(a,3*C,m,l),a.needsUpdate=!0;let U=a.distanceToTriangle(p,v,d);if(U<g&&(b.copy(v),h&&h.copy(d),g=U,y=C,w=k),U<s)return!0}}}});{let I=Je(e);for(let P=0,A=I;P<A;P++){me(p,3*P,u,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let k=T,H=T+M;k<H;k++){me(a,3*k,m,l),a.needsUpdate=!0;let C=a.distanceToTriangle(p,v,d);if(C<g&&(b.copy(v),h&&h.copy(d),g=C,y=k,w=P),C<s)return!0}}}}}),Le.releasePrimitive(a),Le.releasePrimitive(p),g===1/0?null:(r.point?r.point.copy(b):r.point=b.clone(),r.distance=g,r.faceIndex=y,n&&(n.point?n.point.copy(h):n.point=h.clone(),n.point.applyMatrix4(ci),b.applyMatrix4(ci),n.distance=b.sub(n.point).length(),n.faceIndex=w),r)}var ci,Po,yr,$l,Zl,Ql,Kl,Cs=_(()=>{j();St();dt();Nt();Kr();ci=new oe,Po=new Ae,yr=new Ae,$l=new B,Zl=new B,Ql=new B,Kl=new B});function Ps(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=o.geometry,r=t.index?t.index.array:null,n=t.attributes.position,s,i,c,l,m=0,f=o._roots;for(let a=0,p=f.length;a<p;a++)s=f[a],i=new Uint32Array(s),c=new Uint16Array(s),l=new Float32Array(s),u(0,m),m+=s.byteLength;function u(a,p,v=!1){let b=a*2;if(c[b+15]===65535){let h=i[a+6],g=c[b+14],y=1/0,w=1/0,T=1/0,M=-1/0,I=-1/0,P=-1/0;for(let A=h,k=h+g;A<k;A++){let H=3*o.resolveTriangleIndex(A);for(let C=0;C<3;C++){let W=H+C;W=r?r[W]:W;let U=n.getX(W),Z=n.getY(W),ue=n.getZ(W);U<y&&(y=U),U>M&&(M=U),Z<w&&(w=Z),Z>I&&(I=Z),ue<T&&(T=ue),ue>P&&(P=ue)}}return l[a+0]!==y||l[a+1]!==w||l[a+2]!==T||l[a+3]!==M||l[a+4]!==I||l[a+5]!==P?(l[a+0]=y,l[a+1]=w,l[a+2]=T,l[a+3]=M,l[a+4]=I,l[a+5]=P,!0):!1}else{let h=a+8,g=i[a+6],y=h+p,w=g+p,T=v,M=!1,I=!1;e?T||(M=e.has(y),I=e.has(w),T=!M&&!I):(M=!0,I=!0);let P=T||M,A=T||I,k=!1;P&&(k=u(h,p,T));let H=!1;A&&(H=u(g,p,T));let C=k||H;if(C)for(let W=0;W<3;W++){let U=h+W,Z=g+W,ue=l[U],Te=l[U+3],we=l[Z],De=l[Z+3];l[a+W]=ue<we?ue:we,l[a+W+3]=Te>De?Te:De}return C}}}var Ds=_(()=>{});function Bs(o,e,t,r,n,s,i){ie.setBuffer(o._roots[e]),Do(0,o,t,r,n,s,i),ie.clearBuffer()}function Do(o,e,t,r,n,s,i){let{float32Array:c,uint16Array:l,uint32Array:m}=ie,f=o*2;if(he(f,l)){let a=be(o,m),p=_e(f,l);bs(e,t,r,a,p,n,s,i)}else{let a=Ee(o);Xe(a,c,r,s,i)&&Do(a,e,t,r,n,s,i);let p=Me(o,m);Xe(p,c,r,s,i)&&Do(p,e,t,r,n,s,i)}}var ks=_(()=>{vr();Ze();ot();ni()});function Ns(o,e,t,r,n,s){ie.setBuffer(o._roots[e]);let i=Bo(0,o,t,r,n,s);return ie.clearBuffer(),i}function Bo(o,e,t,r,n,s){let{float32Array:i,uint16Array:c,uint32Array:l}=ie,m=o*2;if(he(m,c)){let u=be(o,l),a=_e(m,c);return Ts(e,t,r,u,a,n,s)}else{let u=zt(o,l),a=Jl[u],v=r.direction[a]>=0,b,d;v?(b=Ee(o),d=Me(o,l)):(b=Me(o,l),d=Ee(o));let g=Xe(b,i,r,n,s)?Bo(b,e,t,r,n,s):null;if(g){let T=g.point[a];if(v?T<=i[d+u]:T>=i[d+u+3])return g}let w=Xe(d,i,r,n,s)?Bo(d,e,t,r,n,s):null;return g&&w?g.distance<=w.distance?g:w:g||w||null}}var Jl,Hs=_(()=>{Ze();ot();vr();ni();Jl=["x","y","z"]});function zs(o,e,t,r){ie.setBuffer(o._roots[e]);let n=ko(0,o,t,r);return ie.clearBuffer(),n}function ko(o,e,t,r,n=null){let{float32Array:s,uint16Array:i,uint32Array:c}=ie,l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Ls.set(t.boundingBox.min,t.boundingBox.max,r),n=Ls),he(l,i)){let f=e.geometry,u=f.index,a=f.attributes.position,p=t.index,v=t.attributes.position,b=be(o,c),d=_e(l,i);if(br.copy(r).invert(),t.boundsTree)return fe(o,s,ui),ui.matrix.copy(br),ui.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>ui.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(r),g.b.applyMatrix4(r),g.c.applyMatrix4(r),g.needsUpdate=!0;for(let y=b,w=d+b;y<w;y++)if(me(Yt,3*e.resolveTriangleIndex(y),u,a),Yt.needsUpdate=!0,g.intersectsTriangle(Yt))return!0;return!1}});for(let h=b,g=d+b;h<g;h++){let y=e.resolveTriangleIndex(h);me(jt,3*y,u,a),jt.a.applyMatrix4(br),jt.b.applyMatrix4(br),jt.c.applyMatrix4(br),jt.needsUpdate=!0;for(let w=0,T=p.count;w<T;w+=3)if(me(Yt,w,p,v),Yt.needsUpdate=!0,jt.intersectsTriangle(Yt))return!0}}else{let f=o+8,u=c[o+6];return fe(f,s,li),!!(n.intersectsBox(li)&&ko(f,e,t,r,n)||(fe(u,s,li),n.intersectsBox(li)&&ko(u,e,t,r,n)))}}var li,jt,Yt,br,Ls,ui,Os=_(()=>{j();St();Ot();dt();wt();Ze();ot();li=new Ne,jt=new Pe,Yt=new Pe,br=new oe,Ls=new Ae,ui=new Ae});function Ws(o,e,t,r={},n={},s=0,i=1/0){e.boundingBox||e.computeBoundingBox(),No.set(e.boundingBox.min,e.boundingBox.max,t),No.needsUpdate=!0;let c=o.geometry,l=c.attributes.position,m=c.index,f=e.attributes.position,u=e.index,a=Le.getPrimitive(),p=Le.getPrimitive(),v=eu,b=tu,d=null,h=null;n&&(d=ru,h=iu);let g=1/0,y=null,w=null;return fi.copy(t).invert(),Tr.matrix.copy(fi),o.shapecast({boundsTraverseOrder:T=>No.distanceToBox(T),intersectsBounds:(T,M,I)=>I<g&&I<i?(M&&(Tr.min.copy(T.min),Tr.max.copy(T.max),Tr.needsUpdate=!0),!0):!1,intersectsRange:(T,M)=>{if(e.boundsTree){let I=e.boundsTree;return I.shapecast({boundsTraverseOrder:P=>Tr.distanceToBox(P),intersectsBounds:(P,A,k)=>k<g&&k<i,intersectsRange:(P,A)=>{for(let k=P,H=P+A;k<H;k++){let C=I.resolveTriangleIndex(k);me(p,3*C,u,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let W=T,U=T+M;W<U;W++){let Z=o.resolveTriangleIndex(W);me(a,3*Z,m,l),a.needsUpdate=!0;let ue=a.distanceToTriangle(p,v,d);if(ue<g&&(b.copy(v),h&&h.copy(d),g=ue,y=W,w=k),ue<s)return!0}}}})}else{let I=Je(e);for(let P=0,A=I;P<A;P++){me(p,3*P,u,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let k=T,H=T+M;k<H;k++){let C=o.resolveTriangleIndex(k);me(a,3*C,m,l),a.needsUpdate=!0;let W=a.distanceToTriangle(p,v,d);if(W<g&&(b.copy(v),h&&h.copy(d),g=W,y=k,w=P),W<s)return!0}}}}}),Le.releasePrimitive(a),Le.releasePrimitive(p),g===1/0?null:(r.point?r.point.copy(b):r.point=b.clone(),r.distance=g,r.faceIndex=y,n&&(n.point?n.point.copy(h):n.point=h.clone(),n.point.applyMatrix4(fi),b.applyMatrix4(fi),n.distance=b.sub(n.point).length(),n.faceIndex=w),r)}var fi,No,Tr,eu,tu,ru,iu,Us=_(()=>{j();St();dt();Nt();Kr();fi=new oe,No=new Ae,Tr=new Ae,eu=new B,tu=new B,ru=new B,iu=new B});function Vs(){return typeof SharedArrayBuffer<"u"}var Gs=_(()=>{});function qs(o,e,t,r){if(zo)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");zo=!0;let n=o._roots,s=e._roots,i,c=0,l=0,m=new oe().copy(t).invert();for(let f=0,u=n.length;f<u;f++){wr.setBuffer(n[f]),l=0;let a=pt.getPrimitive();fe(0,wr.float32Array,a),a.applyMatrix4(m);for(let p=0,v=s.length;p<v&&(mi.setBuffer(s[p]),i=Qe(0,0,t,m,r,c,l,0,0,a),mi.clearBuffer(),l+=s[p].length,!i);p++);if(pt.releasePrimitive(a),wr.clearBuffer(),c+=n[f].length,i)break}return zo=!1,i}function Qe(o,e,t,r,n,s=0,i=0,c=0,l=0,m=null,f=!1){let u,a;f?(u=mi,a=wr):(u=wr,a=mi);let p=u.float32Array,v=u.uint32Array,b=u.uint16Array,d=a.float32Array,h=a.uint32Array,g=a.uint16Array,y=o*2,w=e*2,T=he(y,b),M=he(w,g),I=!1;if(M&&T)f?I=n(be(e,h),_e(e*2,g),be(o,v),_e(o*2,b),l,i+e,c,s+o):I=n(be(o,v),_e(o*2,b),be(e,h),_e(e*2,g),c,s+o,l,i+e);else if(M){let P=pt.getPrimitive();fe(e,d,P),P.applyMatrix4(t);let A=Ee(o),k=Me(o,v);fe(A,p,Xt),fe(k,p,$t);let H=P.intersectsBox(Xt),C=P.intersectsBox($t);I=H&&Qe(e,A,r,t,n,i,s,l,c+1,P,!f)||C&&Qe(e,k,r,t,n,i,s,l,c+1,P,!f),pt.releasePrimitive(P)}else{let P=Ee(e),A=Me(e,h);fe(P,d,Ho),fe(A,d,Lo);let k=m.intersectsBox(Ho),H=m.intersectsBox(Lo);if(k&&H)I=Qe(o,P,t,r,n,s,i,c,l+1,m,f)||Qe(o,A,t,r,n,s,i,c,l+1,m,f);else if(k)if(T)I=Qe(o,P,t,r,n,s,i,c,l+1,m,f);else{let C=pt.getPrimitive();C.copy(Ho).applyMatrix4(t);let W=Ee(o),U=Me(o,v);fe(W,p,Xt),fe(U,p,$t);let Z=C.intersectsBox(Xt),ue=C.intersectsBox($t);I=Z&&Qe(P,W,r,t,n,i,s,l,c+1,C,!f)||ue&&Qe(P,U,r,t,n,i,s,l,c+1,C,!f),pt.releasePrimitive(C)}else if(H)if(T)I=Qe(o,A,t,r,n,s,i,c,l+1,m,f);else{let C=pt.getPrimitive();C.copy(Lo).applyMatrix4(t);let W=Ee(o),U=Me(o,v);fe(W,p,Xt),fe(U,p,$t);let Z=C.intersectsBox(Xt),ue=C.intersectsBox($t);I=Z&&Qe(A,W,r,t,n,i,s,l,c+1,C,!f)||ue&&Qe(A,U,r,t,n,i,s,l,c+1,C,!f),pt.releasePrimitive(C)}}return I}var wr,mi,pt,Xt,$t,Ho,Lo,zo,js=_(()=>{j();ot();Ze();wt();Qr();wr=new ie.constructor,mi=new ie.constructor,pt=new ft(()=>new Ne),Xt=new Ne,$t=new Ne,Ho=new Ne,Lo=new Ne,zo=!1});var di,Ys,ou,Sr,Xs=_(()=>{j();fo();ss();St();wt();Kr();ls();fs();oi();ys();_s();Rs();Es();Cs();ni();Ds();ks();Hs();Os();Us();Gs();dt();js();di=new Ae,Ys=new Ne,ou={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},Sr=class o{static serialize(e,t={}){t={cloneBuffers:!0,...t};let r=e.geometry,n=e._roots,s=e._indirectBuffer,i=r.getIndex(),c;return t.cloneBuffers?c={roots:n.map(l=>l.slice()),index:i?i.array.slice():null,indirectBuffer:s?s.slice():null}:c={roots:n,index:i?i.array:null,indirectBuffer:s},c}static deserialize(e,t,r={}){r={setIndex:!0,indirect:!!e.indirectBuffer,...r};let{index:n,roots:s,indirectBuffer:i}=e,c=new o(t,{...r,[qr]:!0});if(c._roots=s,c._indirectBuffer=i||null,r.setIndex){let l=t.getIndex();if(l===null){let m=new re(e.index,1,!1);t.setIndex(m)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return c}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...ou,[qr]:!1},t),t.useSharedArrayBuffer&&!Vs())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[qr]||(ns(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ne))),this.resolveTriangleIndex=t.indirect?r=>this._indirectBuffer[r]:r=>r}refit(e=null){return(this.indirect?Ps:xs)(this,e)}traverse(e,t=0){let r=this._roots[t],n=new Uint32Array(r),s=new Uint16Array(r);i(0);function i(c,l=0){let m=c*2,f=s[m+15]===65535;if(f){let u=n[c+6],a=s[m+14];e(l,f,new Float32Array(r,c*4,6),u,a)}else{let u=c+32/4,a=n[c+6],p=n[c+7];e(l,f,new Float32Array(r,c*4,6),p)||(i(u,l+1),i(a,l+1))}}}raycast(e,t=yt,r=0,n=1/0){let s=this._roots,i=this.geometry,c=[],l=t.isMaterial,m=Array.isArray(t),f=i.groups,u=l?t.side:t,a=this.indirect?Bs:Ss;for(let p=0,v=s.length;p<v;p++){let b=m?t[f[p].materialIndex].side:u,d=c.length;if(a(this,p,b,e,c,r,n),m){let h=f[p].materialIndex;for(let g=d,y=c.length;g<y;g++)c[g].face.materialIndex=h}}return c}raycastFirst(e,t=yt,r=0,n=1/0){let s=this._roots,i=this.geometry,c=t.isMaterial,l=Array.isArray(t),m=null,f=i.groups,u=c?t.side:t,a=this.indirect?Ns:As;for(let p=0,v=s.length;p<v;p++){let b=l?t[f[p].materialIndex].side:u,d=a(this,p,b,e,r,n);d!=null&&(m==null||d.distance<m.distance)&&(m=d,l&&(d.face.materialIndex=f[p].materialIndex))}return m}intersectsGeometry(e,t){let r=!1,n=this._roots,s=this.indirect?zs:Is;for(let i=0,c=n.length;i<c&&(r=s(this,i,e,t),!r);i++);return r}shapecast(e){let t=Le.getPrimitive(),r=this.indirect?ws:vs,{boundsTraverseOrder:n,intersectsBounds:s,intersectsRange:i,intersectsTriangle:c}=e;if(i&&c){let u=i;i=(a,p,v,b,d)=>u(a,p,v,b,d)?!0:r(a,p,this,c,v,b,t)}else i||(c?i=(u,a,p,v)=>r(u,a,this,c,p,v,t):i=(u,a,p)=>p);let l=!1,m=0,f=this._roots;for(let u=0,a=f.length;u<a;u++){let p=f[u];if(l=cs(this,u,s,i,n,m),l)break;m+=p.byteLength}return Le.releasePrimitive(t),l}bvhcast(e,t,r){let{intersectsRanges:n,intersectsTriangles:s}=r,i=Le.getPrimitive(),c=this.geometry.index,l=this.geometry.attributes.position,m=this.indirect?v=>{let b=this.resolveTriangleIndex(v);me(i,b*3,c,l)}:v=>{me(i,v*3,c,l)},f=Le.getPrimitive(),u=e.geometry.index,a=e.geometry.attributes.position,p=e.indirect?v=>{let b=e.resolveTriangleIndex(v);me(f,b*3,u,a)}:v=>{me(f,v*3,u,a)};if(s){let v=(b,d,h,g,y,w,T,M)=>{for(let I=h,P=h+g;I<P;I++){p(I),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let A=b,k=b+d;A<k;A++)if(m(A),i.needsUpdate=!0,s(i,f,A,I,y,w,T,M))return!0}return!1};if(n){let b=n;n=function(d,h,g,y,w,T,M,I){return b(d,h,g,y,w,T,M,I)?!0:v(d,h,g,y,w,T,M,I)}}else n=v}return qs(this,e,t,n)}intersectsBox(e,t){return di.set(e.min,e.max,t),di.needsUpdate=!0,this.shapecast({intersectsBounds:r=>di.intersectsBox(r),intersectsTriangle:r=>di.intersectsTriangle(r)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,r={},n={},s=0,i=1/0){return(this.indirect?Ws:Fs)(this,e,t,r,n,s,i)}closestPointToPoint(e,t={},r=0,n=1/0){return us(this,e,t,r,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(r=>{fe(0,new Float32Array(r),Ys),e.union(Ys)}),e}}});var Md,Id,Ed,$s=_(()=>{j();Md=parseInt(Pr)>=166,Id=$e.prototype.raycast,Ed=Pn.prototype.raycast});function nu(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function su(o){switch(o){case 1:return Tt;case 2:return Hr;case 3:return se;case 4:return se}}function Zs(o){switch(o){case 1:return wn;case 2:return Lr;case 3:return zr;case 4:return zr}}var pi,Zt,Qt,Oo=_(()=>{j();pi=class extends ve{constructor(){super(),this.minFilter=te,this.magFilter=te,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,r=e.itemSize,n=e.count;if(t!==null){if(r*n%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=n*r/t}let s=e.itemSize,i=e.count,c=e.normalized,l=e.array.constructor,m=l.BYTES_PER_ELEMENT,f=this._forcedType,u=s;if(f===null)switch(l){case Float32Array:f=ce;break;case Uint8Array:case Uint16Array:case Uint32Array:f=bt;break;case Int8Array:case Int16Array:case Int32Array:f=Nr;break}let a,p,v,b,d=nu(s);switch(f){case ce:v=1,p=su(s),c&&m===1?(b=l,d+="8",l===Uint8Array?a=nr:(a=uo,d+="_SNORM")):(b=Float32Array,d+="32F",a=ce);break;case Nr:d+=m*8+"I",v=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Zs(s),m===1?(b=Int8Array,a=uo):m===2?(b=Int16Array,a=bn):(b=Int32Array,a=Nr);break;case bt:d+=m*8+"UI",v=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Zs(s),m===1?(b=Uint8Array,a=nr):m===2?(b=Uint16Array,a=Tn):(b=Uint32Array,a=bt);break}u===3&&(p===se||p===zr)&&(u=4);let h=Math.ceil(Math.sqrt(i))||1,g=u*h*h,y=new b(g),w=e.normalized;e.normalized=!1;for(let T=0;T<i;T++){let M=u*T;y[M]=e.getX(T)/v,s>=2&&(y[M+1]=e.getY(T)/v),s>=3&&(y[M+2]=e.getZ(T)/v,u===4&&(y[M+3]=1)),s>=4&&(y[M+3]=e.getW(T)/v)}e.normalized=w,this.internalFormat=d,this.format=p,this.type=a,this.image.width=h,this.image.height=h,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=r,e.count=n}},Zt=class extends pi{constructor(){super(),this._forcedType=bt}},Qt=class extends pi{constructor(){super(),this._forcedType=ce}}});function au(o,e,t){let r=t.array,n=o.index?o.index.array:null;for(let s=0,i=e.length;s<i;s++){let c=3*s,l=3*e[s];for(let m=0;m<3;m++)r[c+m]=n?n[l+m]:l+m}}function cu(o,e,t){let r=o._roots;if(r.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let n=r[0],s=new Uint16Array(n),i=new Uint32Array(n),c=new Float32Array(n),l=n.byteLength/32,m=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*m*m),u=Math.ceil(Math.sqrt(l)),a=new Uint32Array(2*u*u);for(let p=0;p<l;p++){let v=p*32/4,b=v*2,d=v;for(let h=0;h<3;h++)f[8*p+0+h]=c[d+0+h],f[8*p+4+h]=c[d+3+h];if(he(b,s)){let h=_e(b,s),g=be(v,i),y=4294901760|h;a[p*2+0]=y,a[p*2+1]=g}else{let h=4*Me(v,i)/32,g=zt(v,i);a[p*2+0]=g,a[p*2+1]=h}}e.image.data=f,e.image.width=m,e.image.height=m,e.format=se,e.type=ce,e.internalFormat="RGBA32F",e.minFilter=te,e.magFilter=te,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=a,t.image.width=u,t.image.height=u,t.format=Lr,t.type=bt,t.internalFormat="RG32UI",t.minFilter=te,t.magFilter=te,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var hi,Qs=_(()=>{j();Oo();Ze();Nt();hi=class{constructor(){this.index=new Zt,this.position=new Qt,this.bvhBounds=new ve,this.bvhContents=new ve,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(cu(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let r=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==r.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let n=po(mo(t));this._cachedIndexAttr=new re(n,1,!1)}au(t,r,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:r,bvhContents:n}=this;e&&e.dispose(),t&&t.dispose(),r&&r.dispose(),n&&n.dispose()}}});var Ks=_(()=>{});var Wo,Js=_(()=>{Wo=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`});var ea,ta=_(()=>{ea=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0-v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = pow( 100000.0, 2.0 );
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`});var Uo,ra=_(()=>{Uo=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`});var ia,oa=_(()=>{ia=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`});var Mt={};Dl(Mt,{bvh_distance_functions:()=>ea,bvh_ray_functions:()=>Uo,bvh_struct_definitions:()=>ia,common_functions:()=>Wo});var Vo=_(()=>{Js();ta();ra();oa()});var Yd,gi=_(()=>{Xs();$s();Ot();St();Qs();Oo();Ks();Vo();Vo();Yd=`
	${Wo}
	${Uo}
`});function vi(o,e,t=0){if(o.isInterleavedBufferAttribute){let r=o.itemSize;for(let n=0,s=o.count;n<s;n++){let i=n+t;e.setX(i,o.getX(n)),r>=2&&e.setY(i,o.getY(n)),r>=3&&e.setZ(i,o.getZ(n)),r>=4&&e.setW(i,o.getW(n))}}else{let r=e.array,n=r.constructor,s=r.BYTES_PER_ELEMENT*o.itemSize*t;new n(r.buffer,s,o.array.length).set(o.array)}}function It(o,e=null){let t=o.array.constructor,r=o.normalized,n=o.itemSize,s=e===null?o.count:e;return new re(new t(n*s),n,r)}function ht(o,e){if(!o&&!e)return!0;if(!!o!=!!e)return!1;let t=o.count===e.count,r=o.normalized===e.normalized,n=o.array.constructor===e.array.constructor,s=o.itemSize===e.itemSize;return!(!t||!r||!n||!s)}var xi=_(()=>{j()});function lu(o){let e=o[0].index!==null,t=new Set(Object.keys(o[0].attributes));if(!o[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let r=0;r<o.length;++r){let n=o[r],s=0;if(e!==(n.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let i in n.attributes){if(!t.has(i))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+i+'" attribute exists among all geometries, or in none of them.');s++}if(s!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function uu(o){let e=0;for(let t=0,r=o.length;t<r;t++)e+=o[t].getIndex().count;return e}function fu(o){let e=0;for(let t=0,r=o.length;t<r;t++)e+=o[t].getAttribute("position").count;return e}function mu(o,e,t){o.index&&o.index.count!==e&&o.setIndex(null);let r=o.attributes;for(let n in r)r[n].count!==t&&o.deleteAttribute(n)}function na(o,e={},t=new Ge){let{useGroups:r=!1,forceUpdate:n=!1,skipAssigningAttributes:s=[],overwriteIndex:i=!0}=e;lu(o);let c=o[0].index!==null,l=c?uu(o):-1,m=fu(o);if(mu(t,l,m),r){let u=0;for(let a=0,p=o.length;a<p;a++){let v=o[a],b;c?b=v.getIndex().count:b=v.getAttribute("position").count,t.addGroup(u,b,a),u+=b}}if(c){let u=!1;if(t.index||(t.setIndex(new re(new Uint32Array(l),1,!1)),u=!0),u||i){let a=0,p=0,v=t.getIndex();for(let b=0,d=o.length;b<d;b++){let h=o[b],g=h.getIndex();if(!(!n&&!u&&s[b]))for(let w=0;w<g.count;++w)v.setX(a+w,g.getX(w)+p);a+=g.count,p+=h.getAttribute("position").count}}}let f=Object.keys(o[0].attributes);for(let u=0,a=f.length;u<a;u++){let p=!1,v=f[u];if(!t.getAttribute(v)){let h=o[0].getAttribute(v);t.setAttribute(v,It(h,m)),p=!0}let b=0,d=t.getAttribute(v);for(let h=0,g=o.length;h<g;h++){let y=o[h],w=!n&&!p&&s[h],T=y.getAttribute(v);w||vi(T,d,b),b+=T.count}}}var sa=_(()=>{j();xi()});function aa(o,e,t){let r=o.index,s=o.attributes.position.count,i=r?r.count:s,c=o.groups;c.length===0&&(c=[{count:i,start:0,materialIndex:0}]);let l=o.getAttribute("materialIndex");if(!l||l.count!==s){let f;t.length<=255?f=new Uint8Array(s):f=new Uint16Array(s),l=new re(f,1,!1),o.deleteAttribute("materialIndex"),o.setAttribute("materialIndex",l)}let m=l.array;for(let f=0;f<c.length;f++){let u=c[f],a=u.start,p=u.count,v=Math.min(p,i-a),b=Array.isArray(e)?e[u.materialIndex]:e,d=t.indexOf(b);for(let h=0;h<v;h++){let g=a+h;r&&(g=r.getX(g)),m[g]=d}}}function ca(o,e){if(!o.index){let t=o.attributes.position.count,r=new Array(t);for(let n=0;n<t;n++)r[n]=n;o.setIndex(r)}if(!o.attributes.normal&&e&&e.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&e&&e.includes("uv")){let t=o.attributes.position.count;o.setAttribute("uv",new re(new Float32Array(t*2),2,!1))}if(!o.attributes.uv2&&e&&e.includes("uv2")){let t=o.attributes.position.count;o.setAttribute("uv2",new re(new Float32Array(t*2),2,!1))}if(!o.attributes.tangent&&e&&e.includes("tangent"))if(o.attributes.uv&&o.attributes.normal)o.computeTangents();else{let t=o.attributes.position.count;o.setAttribute("tangent",new re(new Float32Array(t*4),4,!1))}if(!o.attributes.color&&e&&e.includes("color")){let t=o.attributes.position.count,r=new Float32Array(t*4);r.fill(1),o.setAttribute("color",new re(r,4))}}var Go=_(()=>{j()});function Kt(o){let e=0;if(o.byteLength!==0){let t=new Uint8Array(o);for(let r=0;r<o.byteLength;r++){let n=t[r];e=(e<<5)-e+n,e|=0}}return e}var yi=_(()=>{});function la(o){let e=o.uuid,t=Object.values(o.attributes);o.index&&(t.push(o.index),e+=`index|${o.index.version}`);let r=Object.keys(t).sort();for(let n of r){let s=t[n];e+=`${n}_${s.version}|`}return e}function ua(o){let e=o.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${Kt(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var bi,fa=_(()=>{j();yi();bi=class{constructor(e=null){this.matrixWorld=new oe,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=la(t),this.primitiveCount=r,this.skeletonHash=ua(e)}didChange(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===la(t)&&this.skeletonHash===ua(e)&&this.primitiveCount===r)}}});function ga(o,e,t){let r=o.skeleton,n=o.geometry,s=r.bones,i=r.boneInverses;da.fromBufferAttribute(n.attributes.skinIndex,e),pa.fromBufferAttribute(n.attributes.skinWeight,e),wi.elements.fill(0);for(let c=0;c<4;c++){let l=pa.getComponent(c);if(l!==0){let m=da.getComponent(c);ha.multiplyMatrices(s[m].matrixWorld,i[m]),du(wi,ha,l)}}return wi.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(wi),t}function jo(o,e,t,r,n){Ti.set(0,0,0);for(let s=0,i=o.length;s<i;s++){let c=e[s],l=o[s];c!==0&&(qo.fromBufferAttribute(l,r),t?Ti.addScaledVector(qo,c):Ti.addScaledVector(qo.sub(n),c))}n.add(Ti)}function du(o,e,t){let r=o.elements,n=e.elements;for(let s=0,i=n.length;s<i;s++)r[s]+=n[s]*t}function pu(o){let{index:e,attributes:t}=o;if(e)for(let r=0,n=e.count;r<n;r+=3){let s=e.getX(r),i=e.getX(r+2);e.setX(r,i),e.setX(r+2,s)}else for(let r in t){let n=t[r],s=n.itemSize;for(let i=0,c=n.count;i<c;i+=3)for(let l=0;l<s;l++){let m=n.getComponent(i,l),f=n.getComponent(i+2,l);n.setComponent(i,l,f),n.setComponent(i+2,l,m)}}return o}function va(o,e={},t=new Ge){e={applyWorldTransforms:!0,attributes:[],...e};let r=o.geometry,n=e.applyWorldTransforms,s=e.attributes.includes("normal"),i=e.attributes.includes("tangent"),c=r.attributes,l=t.attributes;for(let g in t.attributes)(!e.attributes.includes(g)||!(g in r.attributes))&&t.deleteAttribute(g);!t.index&&r.index&&(t.index=r.index.clone()),l.position||t.setAttribute("position",It(c.position)),s&&!l.normal&&c.normal&&t.setAttribute("normal",It(c.normal)),i&&!l.tangent&&c.tangent&&t.setAttribute("tangent",It(c.tangent)),ht(r.index,t.index),ht(c.position,l.position),s&&ht(c.normal,l.normal),i&&ht(c.tangent,l.tangent);let m=c.position,f=s?c.normal:null,u=i?c.tangent:null,a=r.morphAttributes.position,p=r.morphAttributes.normal,v=r.morphAttributes.tangent,b=r.morphTargetsRelative,d=o.morphTargetInfluences,h=new An;h.getNormalMatrix(o.matrixWorld),r.index&&t.index.array.set(r.index.array);for(let g=0,y=c.position.count;g<y;g++)Et.fromBufferAttribute(m,g),f&&Ft.fromBufferAttribute(f,g),u&&(ma.fromBufferAttribute(u,g),Ct.fromBufferAttribute(u,g)),d&&(a&&jo(a,d,b,g,Et),p&&jo(p,d,b,g,Ft),v&&jo(v,d,b,g,Ct)),o.isSkinnedMesh&&(o.applyBoneTransform(g,Et),f&&ga(o,g,Ft),u&&ga(o,g,Ct)),n&&Et.applyMatrix4(o.matrixWorld),l.position.setXYZ(g,Et.x,Et.y,Et.z),f&&(n&&Ft.applyNormalMatrix(h),l.normal.setXYZ(g,Ft.x,Ft.y,Ft.z)),u&&(n&&Ct.transformDirection(o.matrixWorld),l.tangent.setXYZW(g,Ct.x,Ct.y,Ct.z,ma.w));for(let g in e.attributes){let y=e.attributes[g];y==="position"||y==="tangent"||y==="normal"||!(y in c)||(l[y]||t.setAttribute(y,It(c[y])),ht(c[y],l[y]),vi(c[y],l[y]))}return o.matrixWorld.determinant()<0&&pu(t),t}var Et,Ft,Ct,ma,Ti,qo,da,pa,wi,ha,xa=_(()=>{j();xi();Et=new B,Ft=new B,Ct=new B,ma=new at,Ti=new B,qo=new B,da=new at,pa=new at,wi=new oe,ha=new oe});var Si,ya=_(()=>{j();fa();xa();xi();Si=class extends Ge{constructor(){super(),this.version=0,this.hash=null,this._diff=new bi}isCompatible(e,t){let r=e.geometry;for(let n=0;n<t.length;n++){let s=t[n],i=r.attributes[s],c=this.attributes[s];if(i&&!ht(i,c))return!1}return!0}updateFrom(e,t){let r=this._diff;return r.didChange(e)?(va(e,t,this),r.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}});function hu(o,e){for(let t=0,r=o.length;t<r;t++)o[t].traverseVisible(s=>{s.isMesh&&e(s)})}function gu(o){let e=[];for(let t=0,r=o.length;t<r;t++){let n=o[t];Array.isArray(n.material)?e.push(...n.material):e.push(n.material)}return e}function vu(o,e,t){if(o.length===0){e.setIndex(null);let r=e.attributes;for(let n in r)e.deleteAttribute(n);for(let n in t.attributes)e.setAttribute(t.attributes[n],new re(new Float32Array(0),4,!1))}else na(o,t,e);for(let r in e.attributes)e.attributes[r].needsUpdate=!0}var Ai,Yo,Xo,_i,ba=_(()=>{j();sa();Go();ya();Ai=0,Yo=1,Xo=2;_i=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new Wr,t=new Ge;t.setAttribute("position",new re(new Float32Array(9),3)),this._dummyMesh=new $e(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return hu(this.objects,t=>{e.push(t)}),e.sort((t,r)=>t.uuid>r.uuid?1:t.uuid<r.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),r=new Set(e.keys()),n={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let s=0,i=t.length;s<i;s++){let c=t[s],l=c.uuid;r.delete(l);let m=e.get(l);(!m||!m.isCompatible(c,this.attributes))&&(m&&m.dispose(),m=new Si,e.set(l,m)),m.updateFrom(c,n)&&this.generateMissingAttributes&&ca(m,this.attributes)}r.forEach(s=>{e.delete(s)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new Ge){let{useGroups:t,overwriteIndex:r,_intermediateGeometry:n,_geometryMergeSets:s}=this,i=this._getMeshes(),c=[],l=[],m=s.get(e)||[];this._updateIntermediateGeometries();let f=!1;i.length!==m.length&&(f=!0);for(let a=0,p=i.length;a<p;a++){let v=i[a],b=n.get(v.uuid);l.push(b);let d=m[a];!d||d.uuid!==b.uuid?(c.push(!1),f=!0):d.version!==b.version?c.push(!1):c.push(!0)}vu(l,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:c,overwriteIndex:r}),f&&e.dispose(),s.set(e,l.map(a=>({version:a.version,uuid:a.uuid})));let u=Ai;return f?u=Xo:c.includes(!1)&&(u=Yo),{changeType:u,materials:gu(i),geometry:e}}}});function xu(o){let e=new Set;for(let t=0,r=o.length;t<r;t++){let n=o[t];for(let s in n){let i=n[s];i&&i.isTexture&&e.add(i)}}return Array.from(e)}function yu(o){let e=[],t=new Set;for(let n=0,s=o.length;n<s;n++)o[n].traverse(i=>{i.visible&&(i.isRectAreaLight||i.isSpotLight||i.isPointLight||i.isDirectionalLight)&&(e.push(i),i.iesMap&&t.add(i.iesMap))});let r=Array.from(t).sort((n,s)=>n.uuid<s.uuid?1:n.uuid>s.uuid?-1:0);return{lights:e,iesTextures:r}}var Ri,$o=_(()=>{j();gi();ba();Go();Ri=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Ge,this.staticGeometryGenerator=new _i(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:r,attributes:n}=this,s=t.objects;t.attributes=n,s.forEach(u=>{u.traverse(a=>{a.isSkinnedMesh&&a.skeleton&&a.skeleton.update()})});let i=t.generate(r),c=i.materials,l=xu(c),{lights:m,iesTextures:f}=yu(s);if(i.changeType!==Ai&&aa(r,c,c),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(i.changeType===Xo){let u={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(r,u):this.bvh=new Sr(r,u)}else i.changeType===Yo&&this.bvh.refit()}return{bvhChanged:i.changeType!==Ai,bvh:this.bvh,lights:m,iesTextures:f,geometry:r,materials:c,textures:l,objects:s}}}});var gt,Mi=_(()=>{j();gt=class extends qe{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(r){this.uniforms[t].value=r}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}}});var Ii,Ta=_(()=>{j();Mi();Ii=class extends gt{constructor(e){super({blending:rt,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}}});function Ei(o=1){let e="uint";return o>1&&(e="uvec"+o),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Fi(o=1){let e="uint",t="float",r="",n=".r",s="1u";return o>1&&(e="uvec"+o,t="vec"+o,r=o+"",o===2?(n=".rg",s="uvec2( 1u, 2u )"):o===3?(n=".rgb",s="uvec3( 1u, 2u, 3u )"):(n="",s="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${r}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${n};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${s} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var Ci,wa,Sa,Zo=_(()=>{Ci=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Ei(1)}
	${Ei(2)}
	${Ei(3)}
	${Ei(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,wa=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,Sa=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Fi(1)}
	${Fi(2)}
	${Fi(3)}
	${Fi(4)}

`});var Qo,Pi,_a=_(()=>{j();kt();Mi();Zo();Qo=class extends gt{constructor(){super({blending:rt,uniforms:{resolution:{value:new ye}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Ci}
				${wa}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},Pi=class{generate(e,t=256){let r=new Oe(t,t,{type:ce,format:se,minFilter:te,magFilter:te,generateMipmaps:!1}),n=e.getRenderTarget();e.setRenderTarget(r);let s=new He(new Qo);return s.material.resolution.set(t,t),s.render(e),e.setRenderTarget(n),s.dispose(),r}}});var Di,Ko=_(()=>{j();Di=class extends Ur{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}});var Bi,Aa=_(()=>{Ko();Bi=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Di?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}});function ki(o){let e=new Uint16Array(o.length);for(let t=0,r=o.length;t<r;++t)e[t]=je.toHalfFloat(o[t]);return e}var Ra=_(()=>{j()});function Ma(o,e,t=0,r=o.length){let n=t,s=t+r-1;for(;n<s;){let i=n+s>>1;o[i]<e?n=i+1:s=i}return n-t}function bu(o,e,t){return .2126*o+.7152*e+.0722*t}function Tu(o,e=ke){let t=o.clone();t.source=new Rn({...t.image});let{width:r,height:n,data:s}=t.image,i=s;if(t.type!==e){e===ke?i=new Uint16Array(s.length):i=new Float32Array(s.length);let c;s instanceof Int8Array||s instanceof Int16Array||s instanceof Int32Array?c=2**(8*s.BYTES_PER_ELEMENT-1)-1:c=2**(8*s.BYTES_PER_ELEMENT)-1;for(let l=0,m=s.length;l<m;l++){let f=s[l];t.type===ke&&(f=je.fromHalfFloat(s[l])),t.type!==ce&&t.type!==ke&&(f/=c),e===ke&&(i[l]=je.toHalfFloat(f))}t.image.data=i,t.type=e}if(t.flipY){let c=i;i=i.slice();for(let l=0;l<n;l++)for(let m=0;m<r;m++){let f=n-l-1,u=4*(l*r+m),a=4*(f*r+m);i[a+0]=c[u+0],i[a+1]=c[u+1],i[a+2]=c[u+2],i[a+3]=c[u+3]}t.flipY=!1,t.image.data=i}return t}var Ni,Ia=_(()=>{j();Ra();Ni=class{constructor(){let e=new ve(ki(new Float32Array([0,0,0,0])),1,1);e.type=ke,e.format=se,e.minFilter=Ce,e.magFilter=Ce,e.wrapS=ze,e.wrapT=ze,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new ve(ki(new Float32Array([0,1])),1,2);t.type=ke,t.format=Tt,t.minFilter=Ce,t.magFilter=Ce,t.generateMipmaps=!1,t.needsUpdate=!0;let r=new ve(ki(new Float32Array([0,0,1,1])),2,2);r.type=ke,r.format=Tt,r.minFilter=Ce,r.magFilter=Ce,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=r,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=Tu(e);t.wrapS=ze,t.wrapT=Ve;let{width:r,height:n,data:s}=t.image,i=new Float32Array(r*n),c=new Float32Array(r*n),l=new Float32Array(n),m=new Float32Array(n),f=0,u=0;for(let d=0;d<n;d++){let h=0;for(let g=0;g<r;g++){let y=d*r+g,w=je.fromHalfFloat(s[4*y+0]),T=je.fromHalfFloat(s[4*y+1]),M=je.fromHalfFloat(s[4*y+2]),I=bu(w,T,M);h+=I,f+=I,i[y]=I,c[y]=h}if(h!==0)for(let g=d*r,y=d*r+r;g<y;g++)i[g]/=h,c[g]/=h;u+=h,l[d]=h,m[d]=u}if(u!==0)for(let d=0,h=l.length;d<h;d++)l[d]/=u,m[d]/=u;let a=new Uint16Array(n),p=new Uint16Array(r*n);for(let d=0;d<n;d++){let h=(d+1)/n,g=Ma(m,h);a[d]=je.toHalfFloat((g+.5)/n)}for(let d=0;d<n;d++)for(let h=0;h<r;h++){let g=d*r+h,y=(h+1)/r,w=Ma(c,y,d*r,r);p[g]=je.toHalfFloat((w+.5)/r)}this.dispose();let{marginalWeights:v,conditionalWeights:b}=this;v.image={width:n,height:1,data:a},v.needsUpdate=!0,b.image={width:r,height:n,data:p},b.needsUpdate=!0,this.totalSum=f,this.map=t}}});var Jo,wu,Su,_u,Au,Ru,Ke,Ue,Ea,Jt,Fa,er,Mu,Hi,Ca=_(()=>{j();yi();Jo=6,wu=0,Su=1,_u=2,Au=3,Ru=4,Ke=new B,Ue=new B,Ea=new oe,Jt=new sr,Fa=new B,er=new B,Mu=new B(0,1,0),Hi=class{constructor(){let e=new ve(new Float32Array(4),1,1);e.format=se,e.type=ce,e.wrapS=Ve,e.wrapT=Ve,e.generateMipmaps=!1,e.minFilter=te,e.magFilter=te,this.tex=e,this.count=0}updateFrom(e,t=[]){let r=this.tex,n=Math.max(e.length*Jo,1),s=Math.ceil(Math.sqrt(n));r.image.width!==s&&(r.dispose(),r.image.data=new Float32Array(s*s*4),r.image.width=s,r.image.height=s);let i=r.image.data;for(let l=0,m=e.length;l<m;l++){let f=e[l],u=l*Jo*4,a=0;for(let v=0;v<Jo*4;v++)i[u+v]=0;f.getWorldPosition(Ue),i[u+a++]=Ue.x,i[u+a++]=Ue.y,i[u+a++]=Ue.z;let p=wu;if(f.isRectAreaLight&&f.isCircular?p=Su:f.isSpotLight?p=_u:f.isDirectionalLight?p=Au:f.isPointLight&&(p=Ru),i[u+a++]=p,i[u+a++]=f.color.r,i[u+a++]=f.color.g,i[u+a++]=f.color.b,i[u+a++]=f.intensity,f.getWorldQuaternion(Jt),f.isRectAreaLight)Ke.set(f.width,0,0).applyQuaternion(Jt),i[u+a++]=Ke.x,i[u+a++]=Ke.y,i[u+a++]=Ke.z,a++,Ue.set(0,f.height,0).applyQuaternion(Jt),i[u+a++]=Ue.x,i[u+a++]=Ue.y,i[u+a++]=Ue.z,i[u+a++]=Ke.cross(Ue).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){let v=f.radius||0;Fa.setFromMatrixPosition(f.matrixWorld),er.setFromMatrixPosition(f.target.matrixWorld),Ea.lookAt(Fa,er,Mu),Jt.setFromRotationMatrix(Ea),Ke.set(1,0,0).applyQuaternion(Jt),i[u+a++]=Ke.x,i[u+a++]=Ke.y,i[u+a++]=Ke.z,a++,Ue.set(0,1,0).applyQuaternion(Jt),i[u+a++]=Ue.x,i[u+a++]=Ue.y,i[u+a++]=Ue.z,i[u+a++]=Math.PI*v*v,i[u+a++]=v,i[u+a++]=f.decay,i[u+a++]=f.distance,i[u+a++]=Math.cos(f.angle),i[u+a++]=Math.cos(f.angle*(1-f.penumbra)),i[u+a++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){let v=Ke.setFromMatrixPosition(f.matrixWorld);i[u+a++]=v.x,i[u+a++]=v.y,i[u+a++]=v.z,a++,a+=4,a+=1,i[u+a++]=f.decay,i[u+a++]=f.distance}else if(f.isDirectionalLight){let v=Ke.setFromMatrixPosition(f.matrixWorld),b=Ue.setFromMatrixPosition(f.target.matrixWorld);er.subVectors(v,b).normalize(),i[u+a++]=er.x,i[u+a++]=er.y,i[u+a++]=er.z}}this.count=e.length;let c=Kt(i.buffer);return this.hash!==c?(this.hash=c,r.needsUpdate=!0,!0):!1}}});function Pa(o,e,t,r,n){if(e>r)throw new Error;let s=o.length/e,i=o.constructor.BYTES_PER_ELEMENT*8,c=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:c=2**i-1;break;case Int8Array:case Int16Array:case Int32Array:c=2**(i-1)-1;break}for(let l=0;l<s;l++){let m=4*l,f=e*l;for(let u=0;u<r;u++)t[n+m+u]=e>=u+1?o[f+u]/c:0}}var Li,Da=_(()=>{j();gi();Li=class extends Mn{constructor(){super(),this._textures=[],this.type=ce,this.format=se,this.internalFormat="RGBA32F"}updateAttribute(e,t){let r=this._textures[e];r.updateFrom(t);let n=r.image,s=this.image;if(n.width!==s.width||n.height!==s.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:i,height:c,data:l}=s,f=i*c*4*e,u=t.itemSize;u===3&&(u=4),Pa(r.image.data,u,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,r=e.length;for(let u=0,a=r;u<a;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let n=this._textures;for(;n.length<r;){let u=new Qt;n.push(u)}for(;n.length>r;)n.pop();for(let u=0,a=r;u<a;u++)n[u].updateFrom(e[u]);let i=n[0].image,c=this.image;(i.width!==c.width||i.height!==c.height||i.depth!==r)&&(c.width=i.width,c.height=i.height,c.depth=r,c.data=new Float32Array(c.width*c.height*c.depth*4));let{data:l,width:m,height:f}=c;for(let u=0,a=r;u<a;u++){let p=n[u],b=m*f*4*u,d=e[u].itemSize;d===3&&(d=4),Pa(p.image.data,d,l,4,b)}this.dispose(),this.needsUpdate=!0}}});var zi,Ba=_(()=>{Da();zi=class extends Li{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,r,n){this.setAttributes([e,t,r,n])}}});function en(o,e){return o.uuid<e.uuid?1:o.uuid>e.uuid?-1:0}function Oi(o){return`${o.source.uuid}:${o.colorSpace}`}function Iu(o){let e=new Set,t=[];for(let r=0,n=o.length;r<n;r++){let s=o[r],i=Oi(s);e.has(i)||(e.add(i),t.push(s))}return t}function ka(o){let e=o.map(r=>r.iesMap||null).filter(r=>r),t=new Set(e);return Array.from(t).sort(en)}function Na(o){let e=new Set;for(let r=0,n=o.length;r<n;r++){let s=o[r];for(let i in s){let c=s[i];c&&c.isTexture&&e.add(c)}}let t=Array.from(e);return Iu(t).sort(en)}function Ha(o){let e=[];return o.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(en)}var tn=_(()=>{});var za,La,rn,Wi,Oa=_(()=>{j();tn();yi();za=45,La=za*4,rn=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},Wi=class extends ve{constructor(){super(new Float32Array(4),1,1),this.format=se,this.type=ce,this.wrapS=Ve,this.wrapT=Ve,this.minFilter=te,this.magFilter=te,this.generateMipmaps=!1,this.features=new rn}updateFrom(e,t){function r(v,b,d=-1){if(b in v&&v[b]){let h=Oi(v[b]);return u[h]}else return d}function n(v,b,d){return b in v?v[b]:d}function s(v,b,d,h){let g=v[b]&&v[b].isTexture?v[b]:null;if(g){g.matrixAutoUpdate&&g.updateMatrix();let y=g.matrix.elements,w=0;d[h+w++]=y[0],d[h+w++]=y[3],d[h+w++]=y[6],w++,d[h+w++]=y[1],d[h+w++]=y[4],d[h+w++]=y[7],w++}return 8}let i=0,c=e.length*za,l=Math.ceil(Math.sqrt(c))||1,{image:m,features:f}=this,u={};for(let v=0,b=t.length;v<b;v++)u[Oi(t[v])]=v;m.width!==l&&(this.dispose(),m.data=new Float32Array(l*l*4),m.width=l,m.height=l);let a=m.data;f.reset();for(let v=0,b=e.length;v<b;v++){let d=e[v];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let y=0;y<La;y++)a[i+y]=0;a[i+0*4+0]=d.color.r,a[i+0*4+1]=d.color.g,a[i+0*4+2]=d.color.b,a[i+2*4+3]=n(d,"emissiveIntensity",0),a[i+3*4+0]=d.emissive.r,a[i+3*4+1]=d.emissive.g,a[i+3*4+2]=d.emissive.b,a[i+13*4+1]=d.density,a[i+13*4+3]=0,a[i+14*4+2]=4,i+=La;continue}a[i++]=d.color.r,a[i++]=d.color.g,a[i++]=d.color.b,a[i++]=r(d,"map"),a[i++]=n(d,"metalness",0),a[i++]=r(d,"metalnessMap"),a[i++]=n(d,"roughness",0),a[i++]=r(d,"roughnessMap"),a[i++]=n(d,"ior",1.5),a[i++]=n(d,"transmission",0),a[i++]=r(d,"transmissionMap"),a[i++]=n(d,"emissiveIntensity",0),"emissive"in d?(a[i++]=d.emissive.r,a[i++]=d.emissive.g,a[i++]=d.emissive.b):(a[i++]=0,a[i++]=0,a[i++]=0),a[i++]=r(d,"emissiveMap"),a[i++]=r(d,"normalMap"),"normalScale"in d?(a[i++]=d.normalScale.x,a[i++]=d.normalScale.y):(a[i++]=1,a[i++]=1),a[i++]=n(d,"clearcoat",0),a[i++]=r(d,"clearcoatMap"),a[i++]=n(d,"clearcoatRoughness",0),a[i++]=r(d,"clearcoatRoughnessMap"),a[i++]=r(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(a[i++]=d.clearcoatNormalScale.x,a[i++]=d.clearcoatNormalScale.y):(a[i++]=1,a[i++]=1),i++,a[i++]=n(d,"sheen",0),"sheenColor"in d?(a[i++]=d.sheenColor.r,a[i++]=d.sheenColor.g,a[i++]=d.sheenColor.b):(a[i++]=0,a[i++]=0,a[i++]=0),a[i++]=r(d,"sheenColorMap"),a[i++]=n(d,"sheenRoughness",0),a[i++]=r(d,"sheenRoughnessMap"),a[i++]=r(d,"iridescenceMap"),a[i++]=r(d,"iridescenceThicknessMap"),a[i++]=n(d,"iridescence",0),a[i++]=n(d,"iridescenceIOR",1.3);let h=n(d,"iridescenceThicknessRange",[100,400]);a[i++]=h[0],a[i++]=h[1],"specularColor"in d?(a[i++]=d.specularColor.r,a[i++]=d.specularColor.g,a[i++]=d.specularColor.b):(a[i++]=1,a[i++]=1,a[i++]=1),a[i++]=r(d,"specularColorMap"),a[i++]=n(d,"specularIntensity",1),a[i++]=r(d,"specularIntensityMap");let g=n(d,"thickness",0)===0&&n(d,"attenuationDistance",1/0)===1/0;if(a[i++]=Number(g),i++,"attenuationColor"in d?(a[i++]=d.attenuationColor.r,a[i++]=d.attenuationColor.g,a[i++]=d.attenuationColor.b):(a[i++]=1,a[i++]=1,a[i++]=1),a[i++]=n(d,"attenuationDistance",1/0),a[i++]=r(d,"alphaMap"),a[i++]=d.opacity,a[i++]=d.alphaTest,!g&&d.transmission>0)a[i++]=0;else switch(d.side){case yt:a[i++]=1;break;case Dr:a[i++]=-1;break;case st:a[i++]=0;break}a[i++]=Number(n(d,"matte",!1)),a[i++]=Number(n(d,"castShadow",!0)),a[i++]=Number(d.vertexColors)|Number(d.flatShading)<<1,a[i++]=Number(d.transparent),i+=s(d,"map",a,i),i+=s(d,"metalnessMap",a,i),i+=s(d,"roughnessMap",a,i),i+=s(d,"transmissionMap",a,i),i+=s(d,"emissiveMap",a,i),i+=s(d,"normalMap",a,i),i+=s(d,"clearcoatMap",a,i),i+=s(d,"clearcoatNormalMap",a,i),i+=s(d,"clearcoatRoughnessMap",a,i),i+=s(d,"sheenColorMap",a,i),i+=s(d,"sheenRoughnessMap",a,i),i+=s(d,"iridescenceMap",a,i),i+=s(d,"iridescenceThicknessMap",a,i),i+=s(d,"specularColorMap",a,i),i+=s(d,"specularIntensityMap",a,i)}let p=Kt(a.buffer);return this.hash!==p?(this.hash=p,this.needsUpdate=!0,!0):!1}}});function Eu(o){return o?`${o.uuid}:${o.version}`:null}function Fu(o,e){for(let t in e)t in o&&(o[t]=e[t])}var Wa,_r,on,Ua=_(()=>{j();kt();Wa=new Re;_r=class extends In{constructor(e,t,r){let n={format:se,type:nr,minFilter:Ce,magFilter:Ce,wrapS:ze,wrapT:ze,generateMipmaps:!1,...r};super(e,t,1,n),Fu(this.texture,n),this.texture.setTextures=(...i)=>{this.setTextures(...i)},this.hashes=[null];let s=new He(new on);this.fsQuad=s}setTextures(e,t,r=this.width,n=this.height){let s=e.getRenderTarget(),i=e.toneMapping,c=e.getClearAlpha();e.getClearColor(Wa);let l=t.length||1;(r!==this.width||n!==this.height||this.depth!==l)&&(this.setSize(r,n,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=kr;let m=this.fsQuad,f=this.hashes,u=!1;for(let a=0,p=l;a<p;a++){let v=t[a],b=Eu(v);v&&(f[a]!==b||v.isWebGLRenderTarget)&&(v.matrixAutoUpdate=!1,v.matrix.identity(),m.material.map=v,e.setRenderTarget(this,a),m.render(e),v.updateMatrix(),v.matrixAutoUpdate=!0,f[a]=b,u=!0)}return m.material.map=null,e.setClearColor(Wa,c),e.setRenderTarget(s),e.toneMapping=i,u}dispose(){super.dispose(),this.fsQuad.dispose()}},on=class extends qe{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}}});function Cu(o,e=Math.random()){for(let t=o.length-1;t>0;t--){let r=Math.floor(e()*(t+1)),n=o[t];o[t]=o[r],o[r]=n}return o}var Ui,Va=_(()=>{Ui=class{constructor(e,t,r=Math.random){let n=e**t,s=new Uint16Array(n),i=n;for(let c=0;c<n;c++)s[c]=c;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let c=0;c<n;c++)s[c]=c;i=0},this.reshuffle=function(){i=0},this.next=function(){let{samples:c}=this;i>=s.length&&(Cu(s,r),this.reshuffle());let l=s[i++];for(let m=0;m<t;m++)c[m]=(l%e+r())/e,l=Math.floor(l/e);return c}}}});var Vi,Ga=_(()=>{Va();Vi=class{constructor(e,t,r=Math.random){let n=0;for(let l of t)n+=l;let s=new Float32Array(n),i=[],c=0;for(let l of t){let m=new Ui(e,l,r);m.samples=new Float32Array(s.buffer,c,m.samples.length),c+=m.samples.length*4,i.push(m)}this.samples=s,this.strataCount=e,this.next=function(){for(let l of i)l.next();return s},this.reshuffle=function(){for(let l of i)l.reshuffle()},this.reset=function(){for(let l of i)l.reset()}}}});var nn,Gi,qa=_(()=>{j();Ga();nn=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},Gi=class extends ve{constructor(e=1,t=1,r=8){super(new Float32Array(1),1,1,se,ce),this.minFilter=te,this.magFilter=te,this.strata=r,this.sampler=null,this.generator=new nn,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,r)}init(e=this.image.height,t=this.image.width,r=this.strata){let{image:n}=this;if(n.width===t&&n.height===e&&this.sampler!==null)return;let s=new Array(e*t).fill(4),i=new Vi(r,s,this.random);n.width=t,n.height=e,n.data=i.samples,this.sampler=i,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}});function ja(o,e=Math.random){for(let t=o.length-1;t>0;t--){let r=~~((e()-1e-6)*t),n=o[t];o[t]=o[r],o[r]=n}}function Ya(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}var Xa=_(()=>{});var Ar,$a=_(()=>{Ar=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,r=1/0,n=-1;for(let s=0,i=t.length;s<i;s++){if(t[s]!==0)continue;let c=e[s];c<r&&(r=c,n=s)}return n}findCluster(){let{score:e,binaryPattern:t}=this,r=-1/0,n=-1;for(let s=0,i=t.length;s<i;s++){if(t[s]!==1)continue;let c=e[s];c>r&&(r=c,n=s)}return n}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(10*2*e**2)+1),r=2*t+1,n=new Float32Array(r*r),s=e*e;for(let i=-t;i<=t;i++)for(let c=-t;c<=t;c++){let l=(t+c)*r+i+t,m=i*i+c*c;n[l]=Math.E**(-m/(2*s))}this.lookupTable=n,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:r}=this;t.fill(0);for(let n=0,s=e.length;n<s;n++)if(e[n]===0){let i=~~(n/r),c=n-i*r;this.updateScore(c,i,1),e[n]=1}else e[n]=0}updateScore(e,t,r){let{size:n,score:s,lookupTable:i}=this,c=this.radius,l=2*c+1;for(let m=-c;m<=c;m++)for(let f=-c;f<=c;f++){let u=(c+f)*l+m+c,a=i[u],p=e+m;p=p<0?n+p:p%n;let v=t+f;v=v<0?n+v:v%n;let b=v*n+p;s[b]+=r*a}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,r=~~(e/t),n=e-r*t;this.updateScore(n,r,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,r=~~(e/t),n=e-r*t;this.updateScore(n,r,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}});var qi,Za=_(()=>{Xa();$a();qi=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Ar(1),this.savedSamples=new Ar(1)}generate(){let{samples:e,savedSamples:t,sigma:r,majorityPointsRatio:n,size:s}=this;e.resize(s),e.setSigma(r);let i=Math.floor(s*s*n),c=e.binaryPattern;Ya(c,i),ja(c,this.random);for(let u=0,a=c.length;u<a;u++)c[u]===1&&e.addPointIndex(u);for(;;){let u=e.findCluster();e.removePointIndex(u);let a=e.findVoid();if(u===a){e.addPointIndex(u);break}e.addPointIndex(a)}let l=new Uint32Array(s*s);t.copy(e);let m;for(m=e.count-1;m>=0;){let u=e.findCluster();e.removePointIndex(u),l[u]=m,m--}let f=s*s;for(m=t.count;m<f/2;){let u=t.findVoid();t.addPointIndex(u),l[u]=m,m++}for(t.invert();m<f;){let u=t.findCluster();t.removePointIndex(u),l[u]=m,m++}return{data:l,maxValue:f}}}});function Pu(o){return o>=3?4:o}function Du(o){switch(o){case 1:return Tt;case 2:return Hr;default:return se}}var ji,Qa=_(()=>{j();Za();ji=class extends ve{constructor(e=64,t=1){super(new Float32Array(4),1,1,se,ce),this.minFilter=te,this.magFilter=te,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,r=new qi;r.channels=e,r.size=t;let n=Pu(e),s=Du(n);(this.image.width!==t||s!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*n),this.format=s,this.dispose());let i=this.image.data;for(let c=0,l=e;c<l;c++){let m=r.generate(),f=m.data,u=m.maxValue;for(let a=0,p=f.length;a<p;a++){let v=f[a]/u;i[a*n+c]=v}}this.needsUpdate=!0}}});var Ka,Ja=_(()=>{Ka=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`});var ec,tc=_(()=>{ec=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`});var rc,ic=_(()=>{rc=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`});var oc,nc=_(()=>{oc=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * 45u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );

		return m;

	}

`});var sc,ac=_(()=>{sc=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`});var cc=_(()=>{Ja();tc();ic();nc();ac()});var lc,uc=_(()=>{lc=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`});var fc,mc=_(()=>{fc=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`});var dc,pc=_(()=>{dc=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`});var hc=_(()=>{uc();mc();pc()});var gc,vc=_(()=>{gc=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`});var xc,yc=_(()=>{xc=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`});var bc,Tc=_(()=>{bc=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`});var wc,Sc=_(()=>{wc=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`});var Yi,_c=_(()=>{Yi=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`});var sn=_(()=>{vc();yc();Tc();Sc();_c()});var an,Rc=_(()=>{an=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`});var Mc,Ic=_(()=>{Mc=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`});var Ec=_(()=>{Rc();Zo();Ic()});var Fc,Cc=_(()=>{Fc=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`});var Pc,Dc=_(()=>{Pc=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`});var Bc,kc=_(()=>{Bc=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`});var Nc,Hc=_(()=>{Nc=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`});var Lc,zc=_(()=>{Lc=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`});var Oc=_(()=>{Cc();Dc();kc();Hc();zc()});var Wc,Uc=_(()=>{Wc=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * 45u;
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`});var Vc=_(()=>{});var Gc=_(()=>{Uc();Vc()});var qc,jc=_(()=>{qc=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`});var Yc,Xc=_(()=>{Yc=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = blades == 0 ? sampleCircle( shapeUVW.xy ) : sampleRegularPolygon( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`});var $c,Zc=_(()=>{$c=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`});var Qc,Kc=_(()=>{Qc=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`});var Jc,el=_(()=>{Jc=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`});var tl,rl=_(()=>{tl=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`});var il=_(()=>{jc();Xc();Zc();Kc();el();rl()});var Xi,cn=_(()=>{j();Mi();gi();Aa();Ia();Ca();Ba();Oa();Ua();qa();Qa();cc();hc();sn();Ec();Oc();Gc();il();Xi=class extends gt{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new ye},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new Bi},cameraWorldMatrix:{value:new oe},invProjectionMatrix:{value:new oe},bvh:{value:new hi},attributesArray:{value:new zi},materialIndexAttribute:{value:new Zt},materials:{value:new Wi},textures:{value:new _r().texture},lights:{value:new Hi},iesProfiles:{value:new _r(360,180,{type:ke,wrapS:Ve,wrapT:Ve}).texture},environmentIntensity:{value:1},environmentRotation:{value:new oe},envMapInfo:{value:new Ni},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new oe},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new Gi},stratifiedOffsetTexture:{value:new ji(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Mt.common_functions}
				${Mt.bvh_struct_definitions}
				${Mt.bvh_ray_functions}

				// uniform structs
				${Ka}
				${rc}
				${ec}
				${oc}
				${sc}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Mc}

				#elif RANDOM_TYPE == 1 	// Sobol

					${an}
					${Ci}
					${Sa}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${an}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${wc}
				${gc}
				${Yi}
				${xc}
				${bc}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${dc}
				${lc}
				${fc}

				${Wc}
				${Bc}
				${Lc}
				${Nc}
				${Pc}
				${Fc}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${Jc}
				${Yc}
				${tl}
				${qc}
				${$c}
				${Qc}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}}});function*Ou(){let{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:r,_blendTargets:n,_sobolTarget:s,_subframe:i,alpha:c,material:l}=this,m=new at,f=new at,u=t.material,[a,p]=n;for(;;){c?(u.opacity=this._opacityFactor/(this.samples+1),l.blending=rt,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Br);let[v,b,d,h]=i,g=r.width,y=r.height;l.resolution.set(g*d,y*h),l.sobolTexture=s.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let w=this.tiles.x||1,T=this.tiles.y||1,M=w*T,I=Math.ceil(g*d),P=Math.ceil(y*h),A=Math.floor(v*g),k=Math.floor(b*y),H=Math.ceil(I/w),C=Math.ceil(P/T);for(let W=0;W<T;W++)for(let U=0;U<w;U++){let Z=o.getRenderTarget(),ue=o.autoClear,Te=o.getScissorTest();o.getScissor(m),o.getViewport(f);let we=U,De=W;if(!this.stableTiles){let rr=this._currentTile%(w*T);we=rr%w,De=~~(rr/w),this._currentTile=rr+1}let et=T-De-1;r.scissor.set(A+we*H,k+et*C,Math.min(H,I-we*H),Math.min(C,P-et*C)),r.viewport.set(A,k,I,P),o.setRenderTarget(r),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(f),o.setScissor(m),o.setScissorTest(Te),o.setRenderTarget(Z),o.autoClear=ue,c&&(u.target1=a.texture,u.target2=r.texture,o.setRenderTarget(p),t.render(o),o.setRenderTarget(Z)),this.samples+=1/M,U===w-1&&W===T-1&&(this.samples=Math.round(this.samples)),yield}[a,p]=[p,a]}}var ol,Rr,ln=_(()=>{j();kt();Ta();_a();cn();ol=new Re,Rr=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new ye(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new at(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new He(new Xi),this._blendQuad=new He(new Ii),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new Pi().generate(e),this._primaryTarget=new Oe(1,1,{format:se,type:ce,magFilter:te,minFilter:te}),this._blendTargets=[new Oe(1,1,{format:se,type:ce,magFilter:te,minFilter:te}),new Oe(1,1,{format:se,type:ce,magFilter:te,minFilter:te})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let r=0;e.projectionMatrix.elements[15]>0&&(r=1),e.isEquirectCamera&&(r=2),t.setDefine("CAMERA_TYPE",r),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:r}=this,n=e.getRenderTarget(),s=e.getClearAlpha();e.getClearColor(ol),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(ol,s),e.setRenderTarget(n),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=Ou.call(this)),this._task.next())}}});var Pt,nl,$i,Zi,Qi,un=_(()=>{j();Pt=new ye,nl=new ye,$i=new Ln,Zi=new Re,Qi=class extends ve{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,se,ce,Bt,ze,Ve,Ce,Ce),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:r}=this.image;for(let n=0;n<t;n++)for(let s=0;s<r;s++){nl.set(t,r),Pt.set(n/t,s/r),Pt.x-=.5,Pt.y=1-Pt.y,$i.theta=Pt.x*2*Math.PI,$i.phi=Pt.y*Math.PI,$i.radius=1,this.generationCallback($i,Pt,nl,Zi);let c=4*(s*t+n);e[c+0]=Zi.r,e[c+1]=Zi.g,e[c+2]=Zi.b,e[c+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}}});var sl,Ki,fn=_(()=>{j();un();sl=new B,Ki=class extends Qi{constructor(e=512){super(e,e),this.topColor=new Re().set(16777215),this.bottomColor=new Re().set(0),this.exponent=2,this.generationCallback=(t,r,n,s)=>{sl.setFromSpherical(t);let i=sl.y*.5+.5;s.lerpColors(this.bottomColor,this.topColor,i**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}}});var Ji,al=_(()=>{j();Ji=class extends qe{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}}});var mn,Mr,cl=_(()=>{j();kt();sn();mn=class extends qe{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${Yi}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Mr=class{constructor(e){this._renderer=e,this._quad=new He(new mn)}generate(e,t=null,r=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let n=e.images[0],s=this._renderer,i=this._quad;t===null&&(t=4*n.height),r===null&&(r=2*n.height);let c=new Oe(t,r,{type:ce,colorSpace:n.colorSpace}),l=n.height,m=Math.log2(l)-2,f=1/l,u=1/(3*Math.max(Math.pow(2,m),7*16));i.material.defines.CUBEUV_MAX_MIP=`${m}.0`,i.material.defines.CUBEUV_TEXEL_WIDTH=u,i.material.defines.CUBEUV_TEXEL_HEIGHT=f,i.material.uniforms.envMap.value=e,i.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,i.material.needsUpdate=!0;let a=s.getRenderTarget(),p=s.autoClear;s.autoClear=!0,s.setRenderTarget(c),i.render(s),s.setRenderTarget(a),s.autoClear=p;let v=new Uint16Array(t*r*4),b=new Float32Array(t*r*4);s.readRenderTargetPixels(c,0,0,t,r,b),c.dispose();for(let h=0,g=b.length;h<g;h++)v[h]=je.toHalfFloat(b[h]);let d=new ve(v,t,r,se,ke);return d.minFilter=yn,d.magFilter=Ce,d.wrapS=ze,d.wrapT=ze,d.mapping=Bt,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}}});function Wu(o){return o.extensions.get("EXT_float_blend")}var tr,eo,ll=_(()=>{j();$o();ln();kt();fn();tn();al();cl();tr=new ye,eo=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new Ri,this._pathTracer=new Rr(e),this._queueReset=!1,this._clock=new Hn,this._compilePromise=null,this._lowResPathTracer=new Rr(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new He(new Ji({map:null,transparent:!0,blending:rt,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new ye(1024,1024),this.rasterizeSceneCallback=(t,r)=>{this._renderer.render(t,r)},this.renderToCanvasCallback=(t,r,n)=>{let s=r.autoClear;r.autoClear=!1,n.render(r),r.autoClear=s},this.setScene(new cr,new Ur)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,r={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let n=this._generator;if(n.setObjects(e),this._buildAsync)return n.generateAsync(r.onProgress).then(s=>this._updateFromResults(e,t,s));{let s=n.generate();return this._updateFromResults(e,t,s)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,r=this._materials,n=this.textureSize,s=Na(r);e.textures.setTextures(t,s,n.x,n.y),e.materials.updateFrom(r,s),this.reset()}updateLights(){let e=this.scene,t=this._renderer,r=this._pathTracer.material,n=Ha(e),s=ka(n);r.lights.updateFrom(n,s),r.iesProfiles.setTextures(t,s),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new Ki(16);let r=this._colorBackground;r.topColor.equals(e.background)||(r.topColor.set(e.background),r.bottomColor.set(e.background),r.update()),t.backgroundMap=r,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let r=new Mr(this._renderer).generate(e.background);this._internalBackground=r,t.backgroundMap=r,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environmentIntensity??1,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment)if(e.environment!==null)if(e.environment.isCubeTexture){let r=new Mr(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(r)}else t.envMapInfo.updateFrom(e.environment);else t.environmentIntensity=0;this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,r){let{materials:n,geometry:s,bvh:i,bvhChanged:c}=r;this._materials=n;let m=this._pathTracer.material;return c&&(m.bvh.updateFrom(i),m.attributesArray.updateFrom(s.attributes.normal,s.attributes.tangent,s.attributes.uv,s.attributes.color),m.materialIndexAttribute.updateFrom(s.attributes.materialIndex)),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),r}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,r=this._renderer,n=this._clock,s=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,s.material.opacity=0,n.start());let i=n.getDelta()*1e3,c=n.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=c&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!Wu(r),e.alpha=t.alpha,this.renderToCanvas){let l=this._renderer,m=this.minSamples;if(c>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?s.material.opacity=Math.min(s.material.opacity+i/this.fadeDuration,1):s.material.opacity=1),!this.enablePathTracing||this.samples<m||s.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let f=s.material.opacity;s.material.opacity=1-s.material.opacity,s.material.map=e.target.texture,s.render(l),s.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&s.material.opacity>0&&(s.material.opacity<1&&(s.material.blending=this.dynamicLowRes?vn:Br),s.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,s),s.material.blending=rt)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._renderQuad.dispose(),this._renderQuad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(tr);let e=Math.floor(this.renderScale*tr.x),t=Math.floor(this.renderScale*tr.y);if(this._pathTracer.getSize(tr),tr.x!==e||tr.y!==t){let r=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*r),Math.floor(t*r))}}}}});var ul=_(()=>{});var fl=_(()=>{});var ml=_(()=>{});var dl=_(()=>{});var pl=_(()=>{});var hl=_(()=>{});var gl=_(()=>{$o();ll();Ko();ul();fl();ml();un();fn();dl();pl();hl();cn();ln()});async function zg(o){let{renderer:e,scene:t,camera:r,sun:n,hdP:s}=o,i=o.triBudget||14e5,c=28,l=5e3,m=await new zn().loadAsync("tex/taivas_env.hdr");m.mapping=Bt;let f=new eo(e);f.bounces=5,f.transmissiveBounces=8,f.filterGlossyFactor=.5,f.multipleImportanceSampling=!0,f.minSamples=2,f.renderDelay=0,f.fadeDuration=250,f.tiles.set(2,2),f.textureSize.set(1024,1024),f.rasterizeSceneCallback=()=>o.rasterize();let u={on:!0,strength:1},a={type:ke,minFilter:te,magFilter:te,depthBuffer:!0,generateMipmaps:!1},p={key:"",w:0,h:0,alb:null,nz:null,a:null,b:null},v=new qe({side:st,vertexShader:"varying vec3 vN; varying float vZ; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vZ = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying float vZ; void main(){ vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n; gl_FragColor = vec4(n, vZ); }"}),b=new Map,d=x=>{if(!x)return x;let E=b.get(x);return E||(E=new Wr({color:x.color?x.color.clone():new Re(1,1,1),map:x.map||null,vertexColors:!!x.vertexColors,alphaTest:x.alphaTest||0,alphaMap:x.alphaMap||null,side:st,toneMapped:!1,fog:!1}),x.transmission>0&&(E.color.setRGB(.85,.85,.85),E.map=null),b.set(x,E)),E},h="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",g="float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }",y=new He(new qe({uniforms:{tCol:{value:null},tAlb:{value:null},tNZ:{value:null}},vertexShader:h,fragmentShader:`uniform sampler2D tCol, tAlb, tNZ; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tCol, vUv); vec4 a = texture2D(tAlb, vUv); float g = texture2D(tNZ, vUv).w;
        vec3 al = (g > 0.0 && a.a > 0.5) ? max(a.rgb, vec3(0.02)) : vec3(1.0); gl_FragColor = vec4(c.rgb / al, c.a); }`,depthTest:!1,depthWrite:!1})),w=new He(new qe({uniforms:{tCol:{value:null},tNZ:{value:null},uTex:{value:new ye},uStep:{value:1},uSigL:{value:1}},vertexShader:h,fragmentShader:`uniform sampler2D tCol, tNZ; uniform vec2 uTex; uniform float uStep, uSigL; varying vec2 vUv; ${g}
      void main(){ vec4 c0 = texture2D(tCol, vUv); vec4 g0 = texture2D(tNZ, vUv); if (g0.w <= 0.0) { gl_FragColor = c0; return; }
        float l0 = lum(c0.rgb); float K[3]; K[0] = 0.375; K[1] = 0.25; K[2] = 0.0625; vec3 sum = vec3(0.0); float ws = 0.0;
        for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
          vec2 uv = vUv + vec2(float(i), float(j)) * uStep * uTex; vec4 g = texture2D(tNZ, uv); if (g.w <= 0.0) continue; vec4 c = texture2D(tCol, uv);
          float h = K[i < 0 ? -i : i] * K[j < 0 ? -j : j];
          float wn = pow(max(dot(g0.xyz, g.xyz), 0.0), 48.0);
          float wz = exp(-abs(g0.w - g.w) / (0.004 * g0.w * uStep + 0.01));
          float wl = exp(-abs(l0 - lum(c.rgb)) / (uSigL * (sqrt(max(l0, 0.0)) + 0.03) + 1e-4));
          float w = h * wn * wz * wl; sum += c.rgb * w; ws += w; }
        gl_FragColor = vec4(ws > 1e-6 ? sum / ws : c0.rgb, c0.a); }`,depthTest:!1,depthWrite:!1})),T=new He(new qe({uniforms:{tCol:{value:null},tAlb:{value:null},tNZ:{value:null},tRaw:{value:null},uMix:{value:1}},vertexShader:h,fragmentShader:`uniform sampler2D tCol, tAlb, tNZ, tRaw; uniform float uMix; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tCol, vUv); vec4 a = texture2D(tAlb, vUv); float g = texture2D(tNZ, vUv).w;
        vec3 al = (g > 0.0 && a.a > 0.5) ? max(a.rgb, vec3(0.02)) : vec3(1.0); vec4 raw = texture2D(tRaw, vUv);
        gl_FragColor = vec4(mix(raw.rgb, c.rgb * al, uMix), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1,toneMapped:!0}));function M(x,E){let N=x+"x"+E+"|"+r.matrixWorld.elements.map(G=>G.toFixed(4)).join(",")+"|"+(H?H.bvh_ms+"_"+H.tris:"");if(p.key===N)return;if(p.key=N,p.w!==x||p.h!==E){for(let G of["alb","nz","a","b"])p[G]&&p[G].dispose();p.alb=new Oe(x,E,a),p.nz=new Oe(x,E,a),p.a=new Oe(x,E,{...a,depthBuffer:!1}),p.b=new Oe(x,E,{...a,depthBuffer:!1}),p.w=x,p.h=E}let D=e.getRenderTarget(),F=e.toneMapping,R=e.getClearColor(new Re),L=e.getClearAlpha(),O=e.shadowMap.enabled,V=A.background,z=A.environment,X=A.fog;A.background=null,A.environment=null,A.fog=null,e.toneMapping=kr,e.shadowMap.enabled=!1,e.setClearColor(0,0);let J=[];A.traverse(G=>{G.isMesh&&(J.push([G,G.material]),G.material=Array.isArray(G.material)?G.material.map(d):d(G.material))}),e.setRenderTarget(p.alb),e.clear(),e.render(A,r);for(let[G,ne]of J)G.material=ne;A.overrideMaterial=v,e.setRenderTarget(p.nz),e.clear(),e.render(A,r),A.overrideMaterial=null,A.background=V,A.environment=z,A.fog=X,e.setRenderTarget(D),e.toneMapping=F,e.shadowMap.enabled=O,e.setClearColor(R,L)}f.renderToCanvasCallback=(x,E,N)=>{let D=E.autoClear;if(E.autoClear=!1,u.on&&N.material.opacity>=1&&A&&!we.includes("vanhadn")){let F=x.width,R=x.height,L=Math.max(1,f.samples),O=E.getRenderTarget();M(F,R),y.material.uniforms.tCol.value=x.texture,y.material.uniforms.tAlb.value=p.alb.texture,y.material.uniforms.tNZ.value=p.nz.texture,E.setRenderTarget(p.a),y.render(E);let V=w.material.uniforms;V.tNZ.value=p.nz.texture,V.uTex.value.set(1/F,1/R),V.uSigL.value=u.strength*3/Math.sqrt(L);let z=p.a,X=p.b,J=L<64?5:L<400?4:3;for(let ne=0;ne<J;ne++)V.tCol.value=z.texture,V.uStep.value=1<<ne,E.setRenderTarget(X),w.render(E),[z,X]=[X,z];E.setRenderTarget(O);let G=T.material.uniforms;G.tCol.value=z.texture,G.tAlb.value=p.alb.texture,G.tNZ.value=p.nz.texture,G.tRaw.value=x.texture,G.uMix.value=1,T.render(E)}else N.render(E);E.autoClear=D};let I=()=>{for(let x of[f._pathTracer,f._lowResPathTracer]){let E=x&&x.material;!E||E.userData.clampPatched||(E.uniforms.uMaxSample={value:10},E.fragmentShader=E.fragmentShader.replace("void main() {",`uniform float uMaxSample;
void main() {`).replace("gl_FragColor.a *= opacity;",`{ float mxS = max(max(gl_FragColor.r, gl_FragColor.g), gl_FragColor.b); if (mxS > uMaxSample) gl_FragColor.rgb *= uMaxSample / mxS; }
 gl_FragColor.a *= opacity;`),E.userData.clampPatched=E.fragmentShader.includes("uMaxSample / mxS"),E.needsUpdate=!0)}},P=()=>{let x=(o.maxSample||12)/Math.max(.3,e.toneMappingExposure);for(let E of[f._pathTracer,f._lowResPathTracer]){let N=E&&E.material;N&&N.uniforms.uMaxSample&&(N.uniforms.uMaxSample.value=x)}};(o.dbg||"").includes("noclamp")||I();let A=null,k=[],H=null,C=[],W="",U=new Map,Z=new Re(1,1,1),ue=new Re(.86,.88,.92),Te=s.SE,we=o.dbg||"";function De(x,E){if(!x)return x;let N=x.uuid+(E?"c":"n");if(U.has(N))return U.get(N);let D=x.name||"",F=Te.uSnow.value,R=new ur;return R.name=D,R.color.copy(x.color||Z),R.map=x.map||null,R.normalMap=x.normalMap||null,x.normalScale&&R.normalScale.copy(x.normalScale),R.roughness=x.roughness??.85,R.metalness=x.metalness??0,R.roughnessMap=x.roughnessMap||null,R.metalnessMap=x.metalnessMap||null,x.emissive&&R.emissive.copy(x.emissive),R.emissiveMap=x.emissiveMap||null,R.emissiveIntensity=x.emissiveIntensity??1,R.alphaTest=x.alphaTest||0,R.alphaMap=x.alphaMap||null,R.side=x.side,R.vertexColors=!!x.vertexColors,R.opacity=x.opacity??1,R.transparent=!!x.transparent&&R.opacity<1,R.castShadow=E,(Uu.test(D)||x.transmission>0)&&(R.transmission=1,R.roughness=.02,R.metalness=0,R.ior=1.5,R.opacity=1,R.transparent=!1,R.side=st,R.color.set(/^saunan/.test(D)?14272944:15922934),R.thickness=0),D==="maasto_gltf"&&(R.vertexColors=!0,R.color.set(1,1,1),R.map=null,R.normalMap=null,R.roughness=.95),/^konesaumapelti/.test(D)&&F>0&&(R.color.lerp(ue,.9*F),R.roughness=.8,R.metalness=0),we.includes("flat")&&(R.map=null,R.normalMap=null,R.roughnessMap=null,R.metalnessMap=null,R.vertexColors=!1,R.color.set(.5,.5,.5),R.transmission=0,R.alphaTest=0,R.alphaMap=null),we.includes("nonormal")&&(R.normalMap=null),R.userData.src=x,U.set(N,R),R}let et=new Map;function rr(x){let E=Te.uSnow.value,N=x.uuid+"|"+E.toFixed(2);if(et.has(N))return et.get(N);let D=x.clone(),F=D.attributes.color,R=D.attributes.normal;if(F){if(E>0){let L=new Re;for(let O=0;O<F.count;O++){let V=E*_n.smoothstep(R?R.getY(O):1,.45,.8);L.setRGB(F.getX(O),F.getY(O),F.getZ(O)).lerp(ue,V),F.setXYZ(O,L.r,L.g,L.b)}}}else{let L=new Float32Array(D.attributes.position.count*3).fill(.35);D.setAttribute("color",new re(L,3))}return vt(D,!1),et.set(N,D),D}function vt(x,E){let N=x.attributes.color,D=x.attributes.position.count;if(N&&(N.itemSize!==4||!(N.array instanceof Float32Array)||N.normalized)){let F=new Float32Array(D*4);for(let R=0;R<D;R++)F[4*R]=N.getX(R),F[4*R+1]=N.getY(R),F[4*R+2]=N.getZ(R),F[4*R+3]=N.itemSize===4?N.getW(R):1;x.setAttribute("color",new re(F,4))}if(E&&!x.attributes.tangent){let F=new Float32Array(D*4);for(let R=0;R<D;R++)F[4*R]=1,F[4*R+3]=1;x.setAttribute("tangent",new re(F,4))}return x}let to=s.PTSPEC||{},tt=x=>x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4),Ir=x=>x<=.0031308?x*12.92:1.055*Math.pow(x,1/2.4)-.055,ro=(x,E,N)=>{let D=Math.min(1,Math.max(0,(N-x)/(E-x)));return D*D*(3-2*D)},io={};function dn(x,E,N,D){let F=document.createElement("canvas");F.width=E,F.height=N;let R=F.getContext("2d",{willReadFrequently:!0}),L=x.image,O=Math.ceil(D),V=N/D;for(let z=0;z<O;z++)R.drawImage(L,0,N-(z+1)*V,E,V);return R.getImageData(0,0,E,N)}function oo(x,E,N,D,F){if(io[x])return io[x];let R=document.createElement("canvas");R.width=E,R.height=N;let L=R.getContext("2d"),O=L.createImageData(E,N);D(O.data),L.putImageData(O,0,0);let V=new Dn(R);return V.wrapS=V.wrapT=ze,V.colorSpace=F?Or:Sn,V.anisotropy=8,io[x]=V}let vl=3.38,xl=13;function yl(x){let D=null,F=()=>D||(D=dn(x.map,1024,1024,7.5).data),R=V=>{let X=(1-(V+.5)/1024)*xl%1,J=2*X-1;return{t:X,x:J,h:Math.pow(Math.max(1-J*J,0),.35)}},L=oo("hirsi_a",1024,1024,V=>{let z=F();for(let X=0;X<1024;X++){let{h:J}=R(X),G=.35+.65*ro(0,.35,J);for(let ne=0;ne<1024;ne++){let le=4*(X*1024+ne),Fe=.2126*tt(z[le]/255)+.7152*tt(z[le+1]/255)+.0722*tt(z[le+2]/255),xe=ro(.02,.35,Fe),Q=[.0035+(.02-.0035)*xe,.0035+(.019-.0035)*xe,.0035+(.017-.0035)*xe];V[le]=255*Ir(Q[0]*G),V[le+1]=255*Ir(Q[1]*G),V[le+2]=255*Ir(Q[2]*G),V[le+3]=255}}},!0),O=oo("hirsi_n",1024,1024,V=>{for(let z=0;z<1024;z++){let{x:X}=R(z),G=-Math.min(1.6,Math.max(-1.6,-.35*X/Math.pow(Math.max(1-X*X,.02),.65)))*.55,ne=Math.hypot(G,1);for(let le=0;le<1024;le++){let Fe=4*(z*1024+le);V[Fe]=128,V[Fe+1]=255*(.5+.5*G/ne),V[Fe+2]=255*(.5+.5/ne),V[Fe+3]=255}}},!1);return{map:L,nor:O}}function bl(x,E){return oo("w_"+x,1024,1024,F=>{let R=dn(E.map,1024,1024,1).data;for(let L=0;L<1024*1024*4;L+=4){let O=.2126*tt(R[L]/255)+.7152*tt(R[L+1]/255)+.0722*tt(R[L+2]/255),V=ro(.02,.45,O);for(let z=0;z<3;z++)F[L+z]=255*Ir(E.lo[z]+(E.hi[z]-E.lo[z])*V);F[L+3]=255}},!0)}function Tl(x,E,N,D){let F=x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone();F.applyMatrix4(x.matrixWorld);let R=F.attributes.position,L=R.count,O=new Float32Array(L*2),V=new B,z=new B,X=new B,J=new B;for(let G=0;G<L;G+=3){V.fromBufferAttribute(R,G),z.fromBufferAttribute(R,G+1),X.fromBufferAttribute(R,G+2),J.subVectors(X,z).cross(new B().subVectors(V,z));let ne=Math.abs(J.x),le=Math.abs(J.y),Fe=Math.abs(J.z);for(let xe=0;xe<3;xe++){let Q=xe===0?V:xe===1?z:X,Y,pe;D==="xz"||le>=ne&&le>=Fe?(Y=Q.x,pe=Q.z):ne>=Fe?(Y=Q.z,pe=Q.y):(Y=Q.x,pe=Q.y),D==="hirsi"&&!(le>=ne&&le>=Fe)?(O[2*(G+xe)]=Y/1.4,O[2*(G+xe)+1]=(pe-.5)/vl):(O[2*(G+xe)]=Y/E,O[2*(G+xe)+1]=pe/N)}}F.setAttribute("uv",new re(O,2));for(let G of Object.keys(F.attributes))["position","normal","uv","color"].includes(G)||F.deleteAttribute(G);return F.computeTangents&&F.attributes.normal&&F.setIndex(null),vt(F,!1),F}let no=new Map;function wl(x,E){let N=E.userData.hd,D=to[N];if(!D||D.kind==="ground")return null;let F=De(E,x.castShadow).clone();C.push(F),F.color.set(1,1,1),F.vertexColors=!1;let R="tri",L=1,O=1;if(D.kind==="hirsi"){let z=yl(D);F.map=z.map,F.normalMap=z.nor,F.normalScale.set(1,1),F.roughness=.62,F.metalness=0,R="hirsi"}else if(D.kind==="wood")F.map=bl(N,D),F.normalMap=D.nor,F.normalScale.set(.5,.5),F.roughness=D.rough,F.metalness=0,[L,O]=D.scl;else if(D.kind==="sora"){F.map=D.map,F.normalMap=D.nor,F.normalScale.set(.8,.8),F.color.setRGB(.52,.49,.44),F.roughness=.95,R="xz",L=O=1.6;let z=Te.uSnow.value;z>0&&F.color.lerp(new Re(.7,.73,.78),.8*z)}return no.has(x.uuid)||no.set(x.uuid,Tl(x,L,O,R)),new $e(no.get(x.uuid),F)}let Er=14,Fr=14,ir=[{half:30,res:1024},{half:90,res:1024},{half:180,res:1024}],nt=null;function Sl(x){let E=Te.uSnow.value.toFixed(2)+Te.uRuska.value.toFixed(2)+Te.uGreen.value.toFixed(2)+Te.uWet.value.toFixed(2);if(nt&&nt.key===E&&nt.uuid===x.uuid)return nt;nt&&nt.rts.forEach(Y=>Y.dispose());let N=to.hd_ground,D=N&&N.u,F=null,R=new ve(new Uint8Array([255,255,255,255]),1,1);R.needsUpdate=!0,D&&D.tAO&&(F=D.tAO.value,D.tAO.value=R);let L=new cr;L.add(new Nn(16777215,Math.PI));let O=new $e(x.geometry,x.material);O.matrixAutoUpdate=!1,O.matrix.copy(x.matrixWorld),L.add(O),L.updateMatrixWorld(!0);let V=e.getRenderTarget(),z=e.toneMapping,X=e.shadowMap.enabled,J=[];for(let Y of ir){let pe=new Oe(Y.res,Y.res,{colorSpace:Or,samples:4}),ae=new Cn(-Y.half,Y.half,Y.half,-Y.half,1,3e3);ae.position.set(Er,1500,Fr),ae.up.set(0,0,-1),ae.lookAt(Er,0,Fr),ae.updateMatrixWorld(),e.setRenderTarget(pe),e.setClearColor(0,1),e.clear(),e.render(L,ae);let de=new Uint8Array(Y.res*Y.res*4);e.readRenderTargetPixels(pe,0,0,Y.res,Y.res,de),pe.dispose();let S=new ve(de,Y.res,Y.res);S.colorSpace=Or,S.flipY=!1,S.generateMipmaps=!0,S.minFilter=xn,S.magFilter=Ce,S.needsUpdate=!0,J.push({texture:S,dispose:()=>S.dispose()})}e.setRenderTarget(V),e.toneMapping=z,e.shadowMap.enabled=X,D&&F&&(D.tAO.value=F);let G=x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone();G.applyMatrix4(x.matrixWorld);let ne=G.attributes.position,le=G.attributes.normal,Fe=ne.count,xe=ir.map(()=>[]);for(let Y=0;Y<Fe;Y+=3){let pe=0;for(let ae=0;ae<3;ae++){let de=Math.abs(ne.getX(Y+ae)-Er),S=Math.abs(ne.getZ(Y+ae)-Fr),q=Math.max(de,S),K=ir.findIndex(ee=>q<ee.half*.995);K<0&&(K=ir.length-1),pe=Math.max(pe,K)}xe[pe].push(Y)}let Q=xe.map((Y,pe)=>{let ae=ir[pe],de=Y.length*3,S=new Float32Array(de*3),q=new Float32Array(de*3),K=new Float32Array(de*2),ee=0;for(let Ie of Y)for(let Se=0;Se<3;Se++,ee++){let xt=ne.getX(Ie+Se),$=ne.getY(Ie+Se),Be=ne.getZ(Ie+Se);S.set([xt,$,Be],3*ee),le&&q.set([le.getX(Ie+Se),le.getY(Ie+Se),le.getZ(Ie+Se)],3*ee),K[2*ee]=(xt-(Er-ae.half))/(2*ae.half),K[2*ee+1]=(Fr+ae.half-Be)/(2*ae.half)}let ge=new Ge;return ge.setAttribute("position",new re(S,3)),ge.setAttribute("normal",new re(q,3)),ge.setAttribute("uv",new re(K,2)),vt(ge,!0),ge});return G.dispose(),R.dispose(),nt={key:E,uuid:x.uuid,rts:J,geoms:Q}}function pn(x,E){if(x.visible){E(x);for(let N of x.children)pn(N,E)}}function so(x,E,N,D){let F=x.geometry.clone();x.getMatrixAt(E,N),F.applyMatrix4(new oe().multiplyMatrices(x.matrixWorld,N));for(let L of Object.keys(F.attributes))["position","normal","uv","color"].includes(L)||F.deleteAttribute(L);if(!F.attributes.uv&&F.setAttribute("uv",new re(new Float32Array(F.attributes.position.count*2),2)),F.attributes.color||F.setAttribute("color",new re(new Float32Array(F.attributes.position.count*4).fill(1),4)),vt(F,!0),D){let L=F.attributes.color;for(let O=0;O<L.count;O++)L.setXYZ(O,L.getX(O)*D.r,L.getY(O)*D.g,L.getZ(O)*D.b)}return F.index?F.toNonIndexed():F}let or={};function _l(x){if(or[x])return or[x];let E=[],N=(L,O,V)=>{L.translate(0,V,0);let z=L.toNonIndexed();z.deleteAttribute("uv"),z.setAttribute("uv",new re(new Float32Array(z.attributes.position.count*2),2));let X=new Float32Array(z.attributes.position.count*4);for(let J=0;J<X.length;J+=4)X[J]=O[0],X[J+1]=O[1],X[J+2]=O[2],X[J+3]=1;z.setAttribute("color",new re(X,4)),vt(z,!0),E.push(z)},D=[.16,.11,.08],F=Te.uRuska.value,R=Te.uLeaf.value;if(x==="kuusi")N(new lr(.012,.022,.25,5,1),D,.125),N(new Bn(.2,.86,8,1),[.045,.075,.04],.14+.43);else if(x==="manty"||x==="nuori"){N(new lr(.012,.02,.8,5,1),[.3,.17,.09],.4);let L=new Gr(.17,0);L.scale(1,.72,1),N(L,[.07,.1,.045],.8)}else if(x==="koivu"){if(N(new lr(.01,.017,.75,5,1),[.55,.53,.5],.375),R>.5){let L=new Gr(.21,0);L.scale(1,1.15,1),N(L,F>.5?[.42,.2,.03]:[.12,.2,.05],.66)}}else N(new lr(.014,.028,1,5,1),[.42,.4,.37],.5);return or[x]=fr(E)}let ao=new Map,co=new Map;function Al(x){if(!x||!x.image)return[.25,.3,.18];if(co.has(x.uuid))return co.get(x.uuid);let E=[.25,.3,.18];try{let N=document.createElement("canvas");N.width=N.height=64;let D=N.getContext("2d",{willReadFrequently:!0});D.drawImage(x.image,0,0,64,64);let F=D.getImageData(0,0,64,64).data,R=0,L=0,O=0,V=0;for(let z=0;z<F.length;z+=4)F[z+3]>107&&(R+=tt(F[z]/255),L+=tt(F[z+1]/255),O+=tt(F[z+2]/255),V++);V&&(E=[R/V,L/V,O/V])}catch{}return co.set(x.uuid,E),E}function Rl(x){if(ao.has(x.uuid))return ao.get(x.uuid);let E=x.attributes.position,N=x.index,D=x.attributes.color,F=N?N.count/3:E.count/3;x.boundingBox||x.computeBoundingBox();let R=x.boundingBox,L=R.max.y-R.min.y,O=Math.max(.04,L/15),V=new Map,z=new B,X=new B;for(let Q=0;Q<F;Q++){z.set(0,0,0);let Y=0;for(let de=0;de<3;de++){let S=N?N.getX(3*Q+de):3*Q+de;X.fromBufferAttribute(E,S),z.add(X),D&&(Y+=(D.getX(S)+D.getY(S)+D.getZ(S))/3)}z.multiplyScalar(1/3);let pe=Math.floor(z.x/O)+","+Math.floor(z.y/O)+","+Math.floor(z.z/O),ae=V.get(pe);ae||V.set(pe,ae={n:0,s:new B,q:0,c:0}),ae.n++,ae.s.add(z),ae.q+=z.lengthSq(),ae.c+=D?Y/3:1}let J=[...V.values()].map(Q=>Q.n).sort((Q,Y)=>Q-Y),G=J[Math.floor(J.length*.75)]||1,ne=[],le=new Gr(1,1).toNonIndexed(),Fe=0;for(let Q of V.values()){if(Q.n<Math.max(2,G*.08))continue;let Y=Q.s.multiplyScalar(1/Q.n),pe=Math.min(1,Math.sqrt(Q.n/G)),ae=O*(.45+.35*pe),de=le.clone(),S=Fe++*.618%1;de.scale(ae*(.9+.25*S),ae*(.72+.2*(S*7.3%1)),ae*(.9+.25*(S*3.1%1))),de.rotateY(S*6.28),de.translate(Y.x,Y.y,Y.z),de.deleteAttribute("uv"),de.setAttribute("uv",new re(new Float32Array(de.attributes.position.count*2),2));let q=Math.min(1.2,Q.c/Q.n),K=new Float32Array(de.attributes.position.count*4);for(let ee=0;ee<K.length;ee+=4){let ge=.8+.2*pe;K[ee]=K[ee+1]=K[ee+2]=q*ge,K[ee+3]=1}de.setAttribute("color",new re(K,4)),vt(de,!0),ne.push(de)}le.dispose();let xe=ne.length?fr(ne):null;return ne.forEach(Q=>Q.dispose()),ao.set(x.uuid,xe),xe}let lo=new Map;function Ml(x){let E=Te.uSnow.value,N=Te.uRuska.value,D=x.uuid+"|"+E.toFixed(2)+"|"+N.toFixed(2);if(lo.has(D))return lo.get(D);let F=Al(x.map),R=new Re((x.color||Z).r*F[0],(x.color||Z).g*F[1],(x.color||Z).b*F[2]);if(E>0&&!/koivu/.test(x.name)&&R.lerp(ue,.45*E),/koivu/.test(x.name)&&N>0){let O=.2126*R.r+.7152*R.g+.0722*R.b;R.lerp(new Re(1*O*2.6,.56*O*2.6,.08*O*2.6),N)}let L=new ur({color:R,vertexColors:!0,roughness:.92,metalness:0,side:yt});return L.name="latvus_"+x.name,L.castShadow=!0,lo.set(D,L),L}function Il(x,E,N,D){let F=Rl(x.geometry);if(!F)return null;let R=F.clone();if(x.getMatrixAt(E,N),R.applyMatrix4(new oe().multiplyMatrices(x.matrixWorld,N)),D){let L=R.attributes.color;for(let O=0;O<L.count;O++)L.setXYZ(O,L.getX(O)*D.r,L.getY(O)*D.g,L.getZ(O)*D.b)}return R}let El=x=>/^kuusi/.test(x)?"kuusi":/^manty_nuori/.test(x)?"nuori":/^manty/.test(x)?"manty":/^koivu/.test(x)?"koivu":"kelo";function Fl(){for(let S of C)S.dispose();C=[],U.clear();for(let S of Object.keys(or))delete or[S];A=new cr,k=[],t.updateMatrixWorld(!0),r.updateMatrixWorld();let x=new oe,E=new B,N=new sr,D=new B,F=r.position.clone(),R=new Fn().setFromProjectionMatrix(new oe().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse)),L=new Map,O=[],V=[],z=new Map,X=0,J=0,G=(S,q)=>{z.has(S)||z.set(S,[]),z.get(S).push(q)};pn(t,S=>{if(S.isLight&&S.visible&&(S.isPointLight||S.isSpotLight)){if(we.includes("nolights"))return;let $=S.clone();S.isSpotLight?($.target=new En,$.target.position.setFromMatrixPosition(S.target.matrixWorld),A.add($.target),$.radius=.04):$.radius=.03,$.position.setFromMatrixPosition(S.matrixWorld),A.add($),k.push([S,$]);return}if(!S.isMesh||S.isPoints||S.isLine)return;let q=S.userData.pt;if(S.isInstancedMesh){if(q&&q.kind==="near"){for(let $=0;$<S.count;$++){let Be=q.model+"#"+$;L.has(Be)||L.set(Be,{model:q.model,i:$,parts:[]}),L.get(Be).parts.push(S)}return}if(q&&q.kind==="far"){for(let $=0;$<S.count;$++)S.getMatrixAt($,x),O.push([q.model,x.clone(),q.H0]);return}if(q&&q.kind==="cover"){if(!we.includes("cover"))return;for(let $=0;$<S.count;$++)S.getMatrixAt($,x),E.setFromMatrixPosition(x),E.distanceTo(F)<c&&V.push([S,$]);return}if(S.count>400)return;for(let $=0;$<S.count;$++){let Be=De(S.material,S.castShadow);if(S.instanceColor&&S.material.name==="auto_kori"){let Dt=new Re;S.getColorAt($,Dt),Be=Be.clone(),Be.color.copy(Dt),C.push(Be)}let Cr=so(S,$,x,null);X+=Cr.attributes.position.count/3,G(Be,Cr)}return}let K=Array.isArray(S.material)?S.material.map($=>De($,S.castShadow)):De(S.material,S.castShadow),ee=(Array.isArray(S.material)?S.material:[S.material]).some($=>$&&$.name==="maasto_gltf");if(ee&&!Array.isArray(S.material)&&!we.includes("vanhamaasto")){let $=Sl(S);$.geoms.forEach((Be,Cr)=>{let Dt=new ur({map:$.rts[Cr].texture,roughness:.95,metalness:0,side:S.material.side});Dt.castShadow=!1,C.push(Dt),A.add(new $e(Be,Dt)),X+=Be.attributes.position.count/3}),J++;return}if(!Array.isArray(S.material)&&S.material&&S.material.userData.hd&&to[S.material.userData.hd]&&!we.includes("vanhamat")){let $=wl(S,S.material);if($){A.add($),J++,X+=$.geometry.attributes.position.count/3;return}}let ge=S.geometry.attributes.color,Ie=ge&&(ge.itemSize!==4||!(ge.array instanceof Float32Array)||ge.normalized),Se=ee?rr(S.geometry):S.geometry;!ee&&Ie&&(et.has(S.geometry.uuid)||et.set(S.geometry.uuid,vt(S.geometry.clone(),!1)),Se=et.get(S.geometry.uuid));let xt=new $e(Se,K);xt.matrixAutoUpdate=!1,xt.matrix.copy(S.matrixWorld),xt.matrixWorld.copy(S.matrixWorld),A.add(xt),J++,X+=(Se.index?Se.index.count:Se.attributes.position.count)/3});let ne=[...L.values()].map(S=>{S.parts[0].getMatrixAt(S.i,x),x.decompose(E,N,D);let q=E.clone().applyMatrix4(S.parts[0].matrixWorld),K=S.parts.reduce((Ie,Se)=>Ie+(Se.geometry.index?Se.geometry.index.count:Se.geometry.attributes.position.count)/3,0),ee=S.parts.reduce((Ie,Se)=>(Se.geometry.boundingBox||Se.geometry.computeBoundingBox(),Math.max(Ie,Se.geometry.boundingBox.max.y)),1)*D.y,ge=R.intersectsSphere(new ar(q.clone().add(new B(0,ee/2,0)),ee*.6));return{...S,M:x.clone(),wp:q,t:K,H:ee,d:q.distanceTo(F),vis:ge}});ne.sort((S,q)=>S.vis===q.vis?S.d-q.d:S.vis?-1:1);let le=0,Fe=0,xe=new oe,Q={},Y=(S,q,K)=>{let ee=El(S);q.decompose(E,N,D);let ge=K*D.y,Ie=D.x/Math.max(1e-6,D.y);xe.compose(E,new sr,new B(ge*Ie,ge,ge*Ie)),(Q[ee]=Q[ee]||[]).push(xe.clone())};for(let S of ne)if((S.vis||S.d<12)&&le+S.t<i){le+=S.t,Fe++;for(let q of S.parts){if(!q.visible)continue;let K=q.instanceColor?new Re:null;if(K&&q.getColorAt(S.i,K),q.material.alphaTest>0&&!we.includes("kortit")){let ee=Il(q,S.i,x,K);if(ee){G(Ml(q.material),ee);continue}}G(De(q.material,!0),so(q,S.i,x,K))}}else xe.multiplyMatrices(S.parts[0].matrixWorld,S.M),Y(S.model,xe.clone(),S.H/Math.max(1e-6,new B().setFromMatrixScale(S.M).y));if(we.includes("notree")){for(let S of Object.keys(Q))delete Q[S];[...z.keys()].forEach(S=>{(S.alphaTest>0||S.vertexColors)&&z.delete(S)})}else for(let[S,q,K]of O)Y(S,q,K);for(let[S,q]of V.slice(0,l)){let K=S.instanceColor?new Re:null;K&&S.getColorAt(q,K),G(De(S.material,!1),so(S,q,x,K))}X+=le;for(let[S,q]of z){let K=fr(q);if(q.forEach(ge=>ge.dispose()),!K)continue;C.push(K);let ee=new $e(K,S);A.add(ee)}let pe=new ur({vertexColors:!0,roughness:.9,metalness:0});C.push(pe);let ae=0;for(let[S,q]of Object.entries(Q)){let K=_l(S),ee=q.map(Ie=>K.clone().applyMatrix4(Ie));ae+=q.length;let ge=fr(ee);ee.forEach(Ie=>Ie.dispose()),C.push(ge),X+=ge.attributes.position.count/3,A.add(new $e(ge,pe))}if(!we.includes("nosun")){let S=new kn;A.add(S),A.add(S.target),k.push([n,S])}hn(),gn(),P(),H={pos:F.clone(),dir:r.getWorldDirection(new B),tris:Math.round(X),ndet:Fe,nprox:ae,covers:Math.min(V.length,l),meshes:J};let de=performance.now();return f.setScene(A,r),H.bvh_ms=Math.round(performance.now()-de),H}function hn(){for(let[x,E]of k)E.visible=x.visible,E.intensity=x.visible?x.intensity:0,E.color.copy(x.color),x.isDirectionalLight&&(E.position.setFromMatrixPosition(x.matrixWorld),E.target.position.setFromMatrixPosition(x.target.matrixWorld),E.target.updateMatrixWorld()),E.updateMatrixWorld()}function gn(){A.environment=we.includes("noenv")?null:m,A.environmentIntensity=t.environmentIntensity??1,A.environmentRotation.copy(t.environmentRotation),A.backgroundRotation.copy(t.backgroundRotation),A.background=t.background&&t.background.isTexture?t.background:t.background?t.background.clone():null,A.backgroundIntensity=t.backgroundIntensity??1}function Cl(){if(!A)return;hn(),gn(),P();let x="";for(let E of U.values()){let N=E.userData.src;N&&N.emissiveIntensity!==void 0&&E.emissiveIntensity!==N.emissiveIntensity&&(E.emissiveIntensity=N.emissiveIntensity,x+="x")}f.updateLights(),f.updateEnvironment(),x?f.updateMaterials():f.reset()}function Pl(){let x=new ye;e.getDrawingBufferSize(x),f.renderScale=Math.min(1,Math.sqrt((o.maxPixels||15e5)/(x.x*x.y)))}return{pt:f,build:Fl,updateLighting:Cl,setScale:Pl,DN:u,needsRebuild(){if(!H)return!0;let x=r.getWorldDirection(new B);return H.pos.distanceTo(r.position)>4||x.angleTo(H.dir)>.5},get built(){return H},get groundBake(){return nt},reset(){f.updateCamera()},sample(){if(we.includes("raster")&&A){let x=A.background;return e.setRenderTarget(null),e.render(A,r),1e9}return f.renderSample(),f.samples},dispose(){for(let x of C)x.dispose();C=[],f.dispose&&f.dispose()}}}var Uu,Vu=_(()=>{j();gl();kt();kl();Bl();Uu=/^(lasi|saunan_lasi|kaidelasi)/});Vu();export{zg as createPhoto};
