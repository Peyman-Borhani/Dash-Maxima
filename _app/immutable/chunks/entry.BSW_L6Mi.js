import{y as lt}from"./utils.B4DdRf_R.js";import{w as pe}from"./index.DoASHjij.js";import{H as ne,S as ge,R as $e}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ft(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ut(e){return e.split("%25").map(decodeURI).join("%25")}function dt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const ht=["href","pathname","search","toString","toJSON"];function pt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of ht)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const gt="/__data.json",mt=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,mt):e.replace(/\/$/,"")+gt}function _t(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function wt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Fe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(me(e)),Fe(e,n));const B=new Map;function vt(e,n){const t=me(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&B.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=wt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function bt(e,n,t){if(B.size>0){const a=me(e,t),r=B.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);B.delete(a)}}return window.fetch(n,t)}function me(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${_t(...r)}"]`}return a}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${St(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=At.exec(c),[,h,y,u,p]=d;return n.push({name:u,matcher:p,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function St(e){return e.slice(1).split("/").filter(Et)}function Rt(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[i+1],h=r[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function It({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=kt(i),u={id:i,exec:p=>{const l=h.exec(p);if(l)return Rt(l,y,a)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function Ve(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var je;const U=((je=globalThis.__sveltekit_1aqab6)==null?void 0:je.base)??"";var De;const Tt=((De=globalThis.__sveltekit_1aqab6)==null?void 0:De.assets)??U,Ut="1731544953898",Be="sveltekit:snapshot",qe="sveltekit:scroll",Ge="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",G="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function He(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Te={...Y,"":Y.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ke(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function z(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=N(i,"preload-code")),r===null&&(r=N(i,"preload-data")),n===null&&(n=N(i,"keepfocus")),t===null&&(t=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Me(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[a??"off"],preload_data:Te[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ue(e){const n=pe(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Pt(){const{set:e,subscribe:n}=pe(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==Ut;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function ae(e,n){return e.origin!==K||!e.pathname.startsWith(n)}function Le(e){const n=Ct(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const xt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ct(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=xt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Nt=-1,Ot=-2,jt=-3,Dt=-4,$t=-5,Ft=-6;function Vt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===Nt)return;if(o===jt)return NaN;if(o===Dt)return 1/0;if(o===$t)return-1/0;if(o===Ft)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<i.length;u+=1)d.add(r(i[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<i.length;u+=2)h.set(r(i[u]),r(i[u+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=r(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=i[1],l=Le(p),m=new u(l);a[o]=m;break}case"ArrayBuffer":{const u=i[1],p=Le(u);a[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Ot&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in i){const d=i[f];c[f]=r(d)}}return a[o]}return r(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Bt=new Set([...We]);[...Bt];function qt(e){return e.filter(n=>n!=null)}const Gt="x-sveltekit-invalidated",Ht="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof ge?e.status:500}function Mt(e){return e instanceof ge?e.text:"Internal Error"}const C=Ve(qe)??{},H=Ve(Be)??{},P={url:Ue({}),page:Ue({}),navigating:pe(null),updated:Pt()};function _e(e){C[e]=ye()}function Kt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ye(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Pe(){}let re,de,X,L,he,F;const ze=[],Z=[];let R=null;const Je=[],Wt=[];let O=[],_={branch:[],error:null,url:null},we=!1,Q=!1,xe=!0,M=!1,V=!1,Xe=!1,ve=!1,be,E,T,I,ee;const q=new Set;async function sn(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),F=e,re=It(e),L=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),E=(r=history.state)==null?void 0:r[j],T=(o=history.state)==null?void 0:o[G],E||(E=T=Date.now(),history.replaceState({...history.state,[j]:E,[G]:T},""));const a=C[E];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await tn(he,t):Qt(location.href,{replaceState:!0}),en()}function Yt(){ze.length=0,ve=!1}function Ze(e){Z.some(n=>n==null?void 0:n.snapshot)&&(H[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=H[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Z[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ce(){_e(E),Ie(qe,C),Ze(T),Ie(Be,H)}async function et(e,n,t,a){return W({type:"goto",url:He(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};q.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=re.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,be=new F.root({target:n,props:{...e.props,stores:P,components:Z},hydrate:t,sync:!1}),Qe(T);const r={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(s=>s(r)),Q=!0}function te({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(U&&(e.pathname===U||e.pathname===U+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=ft(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:qt(t).map(u=>u.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const p=t[u],l=_.branch[u];(p==null?void 0:p.data)!==(l==null?void 0:l.data)&&(d=!0),p&&(f={...f,...p.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||s!==void 0&&s!==I.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:d?f:I.data}),c}async function Ae({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const p={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:pt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const S=new URL(b,t);return i&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),Q?bt(b,S.href,m):vt(b,m)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,p)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,a,r,o){if(ve)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==_.params[s])return!0;for(const s of r.dependencies)if(ze.some(i=>i(new URL(s))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Jt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function Oe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return q.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?r.id!==_.route.id:!1,u=Jt(_.url,t);let p=!1;const l=f.map((g,v)=>{var x;const A=_.branch[v],k=!!(g!=null&&g[0])&&((A==null?void 0:A.loader)!==g[1]||Ne(p,y,h,u,(x=A.server)==null?void 0:x.uses,a));return k&&(p=!0),k});if(l.some(Boolean)){try{d=await it(t,l)}catch(g){const v=await D(g,{url:t,params:a,route:{id:e}});return q.has(o)?Oe({error:v,url:t,params:a,route:r}):oe({status:J(g),error:v,url:t,route:r})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(g,v)=>{var ie;if(!g)return;const A=_.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&g[1]===(A==null?void 0:A.loader)&&!Ne(b,y,h,u,(ie=A.universal)==null?void 0:ie.uses,a))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ae({loader:g[1],url:t,params:a,route:r,parent:async()=>{var Re;const Se={};for(let se=0;se<v;se+=1)Object.assign(Se,(Re=await S[se])==null?void 0:Re.data);return Se},server_data_node:ke(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?A==null?void 0:A.server:void 0)})});for(const g of S)g.catch(()=>{});const w=[];for(let g=0;g<f.length;g+=1)if(f[g])try{w.push(await S[g])}catch(v){if(v instanceof $e)return{type:"redirect",location:v.location};if(q.has(o))return Oe({error:await D(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let A=J(v),k;if(m!=null&&m.includes(v))A=v.status??A,k=v.error;else if(v instanceof ne)k=v.body;else{if(await P.updated.check())return await Ye(),await $(t);k=await D(v,{params:a,url:t,route:{id:r.id}})}const x=await Xt(g,w,s);return x?te({url:t,params:a,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:r}):await ot(t,{id:r.id},k,A)}else w.push(void 0);return te({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Xt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:a}){const r={};let o=null;if(F.server_loads[0]===0)try{const f=await it(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await $(t)}const i=await Ae({loader:de,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||ae(e,U))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=at(t);for(const r of re){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:dt(o),url:e}}}function at(e){return ut(e.slice(U.length)||"/")}function rt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=ct(_,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return M||Je.forEach(i=>i(s)),r?null:o}async function W({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Pe,block:d=Pe}){const h=Ee(n,!1),y=rt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,p=T;f(),M=!0,Q&&P.navigating.set(y.navigation),ee=c;let l=h&&await nt(h);if(!l){if(ae(n,U))return await $(n);l=await ot(n,{id:null},await D(new ge(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await oe({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&(await Ye(),await $(n));if(Yt(),_e(u),Ze(p),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,g={[j]:E+=w,[G]:T+=w,[Ge]:s};(o?history.replaceState:history.pushState).call(history,g,"",n),o||Kt(E,T)}if(R=null,l.props.page.state=s,Q){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Wt.map(g=>g(y.navigation)))).filter(g=>typeof g=="function");if(w.length>0){let g=function(){O=O.filter(v=>!w.includes(v))};w.push(g),O.push(...w)}be.$set(l.props),Xe=!0}else tt(l,he,!1);const{activeElement:m}=document;await lt();const b=t?t.scroll:r?ye():null;if(xe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==m&&document.activeElement!==document.body;!a&&!S&&nn(),xe=!0,l.props.page&&(I=l.props.page),M=!1,e==="popstate"&&Qe(T),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function ot(e,n,t,a){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:a,error:t,url:e,route:n}):await $(e)}function Zt(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=Ke(o,L);if(!i)return;const{url:c,external:f,download:d}=ue(i,U);if(f||d)return;const h=z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=Ee(c,!1);u&&zt(u)}else s<=h.preload_code&&fe(c.pathname)}function r(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,U);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===Y.viewport&&t.observe(o),f.preload_code===Y.eager&&fe(s.pathname))}}O.push(r),r()}function D(e,n){if(e instanceof ne)return e.body;const t=J(e),a=Mt(e);return F.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function Qt(e,n={}){return e=He(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function en(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ce(),!M){const r=ct(_,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Je.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||Zt(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Ke(t.composedPath()[0],L);if(!a)return;const{url:r,external:o,target:s,download:i}=ue(a,U);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[d,h]=r.href.split("#"),y=d===ce(location);if(o||c.reload&&(!y||!h)){rt({url:r,type:"link"})?M=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=a.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(V=!0,_e(E),e(r),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ae(i,U))return;const c=t.target,f=z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),W({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[j]){const r=t.state[j];if(ee={},r===E)return;const o=C[r],s=t.state[Ge]??{},i=new URL(t.state[Lt]??location.href),c=t.state[G],f=ce(location)===ce(_.url);if(c===T&&(Xe||f)){e(i),C[E]=ye(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},be.$set({page:I})),E=r;return}const h=r-E;await W({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{E=r,T=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++E,[G]:T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...I,url:t}),P.page.notify()}}async function tn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const d=a.map(async(u,p)=>{const l=s[p];return l!=null&&l.uses&&(l.uses=st(l.uses)),Ae({loader:F.nodes[u],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<p;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:ke(l)})}),h=await Promise.all(d),y=re.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let p=0;p<u.length;p++)u[p]||h.splice(p,0,void 0)}f=te({url:c,params:r,branch:h,status:n,error:t,form:i,route:y??null})}catch(d){if(d instanceof $e){await $(new URL(d.location,location.href));return}f=await oe({status:J(d),error:await D(d,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),tt(f,e,!0)}async function it(e,n){var r;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ht,"1"),t.searchParams.append(Gt,n.map(o=>o?"1":"0").join(""));const a=await Fe(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ne(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(y){return Vt(y,{Promise:u=>new Promise((p,l)=>{s.set(u,{fulfil:p,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const p=d.indexOf(`
`);if(p===-1)break;const l=JSON.parse(d.slice(0,p));if(d=d.slice(p+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=st(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:S}=l,w=s.get(m);s.delete(m),S?w.reject(f(S)):w.fulfil(f(b))}}}})}function st(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function nn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function ct(e,n,t,a){var c,f;let r,o;const s=new Promise((d,h)=>{r=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{sn as a,P as s};
