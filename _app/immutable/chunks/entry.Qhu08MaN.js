import{x as lt}from"./utils.DQgNJj-m.js";import{w as pe}from"./index.BATnfGs2.js";import{H as ne,S as ge,R as $e}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ft(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ut(e){return e.split("%25").map(decodeURI).join("%25")}function dt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const ht=["href","pathname","search","toString","toJSON"];function pt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ht)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const gt="/__data.json",mt=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,mt):e.replace(/\/$/,"")+gt}function _t(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function wt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Fe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(me(e)),Fe(e,n));const B=new Map;function vt(e,n){const t=me(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&B.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=wt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function bt(e,n,t){if(B.size>0){const r=me(e,t),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(n,t)}function me(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${_t(...a)}"]`}return r}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${St(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=kt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function St(e){return e.slice(1).split("/").filter(Et)}function Rt(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[i+1],h=a[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function It({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=At(i),u={id:i,exec:g=>{const l=h.exec(g);if(l)return Rt(l,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function Ve(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var je;const U=((je=globalThis.__sveltekit_mx1k4b)==null?void 0:je.base)??"";var De;const Tt=((De=globalThis.__sveltekit_mx1k4b)==null?void 0:De.assets)??U,Ut="1730480891722",Be="sveltekit:snapshot",Ge="sveltekit:scroll",qe="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",q="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function He(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Te={...Y,"":Y.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ke(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=N(i,"preload-code")),a===null&&(a=N(i,"preload-data")),n===null&&(n=N(i,"keepfocus")),t===null&&(t=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Me(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[r??"off"],preload_data:Te[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ue(e){const n=pe(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function xt(){const{set:e,subscribe:n}=pe(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Ut;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==K||!e.pathname.startsWith(n)}function Le(e){const n=Ct(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ct(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Pt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Nt=-1,Ot=-2,jt=-3,Dt=-4,$t=-5,Ft=-6;function Vt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,s=!1){if(o===Nt)return;if(o===jt)return NaN;if(o===Dt)return 1/0;if(o===$t)return-1/0;if(o===Ft)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=t[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<i.length;u+=1)d.add(a(i[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<i.length;u+=2)h.set(a(i[u]),a(i[u+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=a(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=i[1],l=Le(g),m=new u(l);r[o]=m;break}case"ArrayBuffer":{const u=i[1],g=Le(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Ot&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in i){const d=i[f];c[f]=a(d)}}return r[o]}return a(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Bt=new Set([...We]);[...Bt];function Gt(e){return e.filter(n=>n!=null)}const qt="x-sveltekit-invalidated",Ht="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof ge?e.status:500}function Mt(e){return e instanceof ge?e.text:"Internal Error"}const C=Ve(Ge)??{},H=Ve(Be)??{},x={url:Ue({}),page:Ue({}),navigating:pe(null),updated:xt()};function _e(e){C[e]=ye()}function Kt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ye(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function xe(){}let ae,de,X,L,he,F;const ze=[],Z=[];let R=null;const Je=[],Wt=[];let O=[],_={branch:[],error:null,url:null},we=!1,Q=!1,Pe=!0,M=!1,V=!1,Xe=!1,ve=!1,be,E,T,I,ee;const G=new Set;async function sn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,ae=It(e),L=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),E=(a=history.state)==null?void 0:a[j],T=(o=history.state)==null?void 0:o[q],E||(E=T=Date.now(),history.replaceState({...history.state,[j]:E,[q]:T},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await tn(he,t):Qt(location.href,{replaceState:!0}),en()}function Yt(){ze.length=0,ve=!1}function Ze(e){Z.some(n=>n==null?void 0:n.snapshot)&&(H[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=H[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Z[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ce(){_e(E),Ie(Ge,C),Ze(T),Ie(Be,H)}async function et(e,n,t,r){return W({type:"goto",url:He(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=ae.find(t=>t.exec(rt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,be=new F.root({target:n,props:{...e.props,stores:x,components:Z},hydrate:t,sync:!1}),Qe(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(s=>s(a)),Q=!0}function te({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(U&&(e.pathname===U||e.pathname===U+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=ft(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Gt(t).map(u=>u.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||s!==void 0&&s!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:d?f:I.data}),c}async function ke({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(r,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:pt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const S=new URL(b,t);return i&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),Q?bt(b,S.href,m):vt(b,m)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==_.params[s])return!0;for(const s of a.dependencies)if(ze.some(i=>i(new URL(s))))return!0;return!1}function Ae(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Jt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}function Oe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=a,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=Jt(_.url,t);let g=!1;const l=f.map((p,v)=>{var P;const k=_.branch[v],A=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||Ne(g,y,h,u,(P=k.server)==null?void 0:P.uses,r));return A&&(g=!0),A});if(l.some(Boolean)){try{d=await it(t,l)}catch(p){const v=await D(p,{url:t,params:r,route:{id:e}});return G.has(o)?Oe({error:v,url:t,params:r,route:a}):oe({status:J(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(p,v)=>{var ie;if(!p)return;const k=_.branch[v],A=m==null?void 0:m[v];if((!A||A.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!Ne(b,y,h,u,(ie=k.universal)==null?void 0:ie.uses,r))return k;if(b=!0,(A==null?void 0:A.type)==="error")throw A;return ke({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Re;const Se={};for(let se=0;se<v;se+=1)Object.assign(Se,(Re=await S[se])==null?void 0:Re.data);return Se},server_data_node:Ae(A===void 0&&p[0]?{type:"skip"}:A??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of S)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await S[p])}catch(v){if(v instanceof $e)return{type:"redirect",location:v.location};if(G.has(o))return Oe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=J(v),A;if(m!=null&&m.includes(v))k=v.status??k,A=v.error;else if(v instanceof ne)A=v.body;else{if(await x.updated.check())return await Ye(),await $(t);A=await D(v,{params:r,url:t,route:{id:a.id}})}const P=await Xt(p,w,s);return P?te({url:t,params:r,branch:w.slice(0,P.idx).concat(P.node),status:k,error:A,route:a}):await ot(t,{id:a.id},A,k)}else w.push(void 0);return te({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function Xt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const f=await it(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await $(t)}const i=await ke({loader:de,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ae(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||re(e,U))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=rt(t);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:dt(o),url:e}}}function rt(e){return ut(e.slice(U.length)||"/")}function at({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ct(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Je.forEach(i=>i(s)),a?null:o}async function W({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=xe,block:d=xe}){const h=Ee(n,!1),y=at({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,g=T;f(),M=!0,Q&&x.navigating.set(y.navigation),ee=c;let l=h&&await nt(h);if(!l){if(re(n,U))return await $(n);l=await ot(n,{id:null},await D(new ge(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await oe({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&(await Ye(),await $(n));if(Yt(),_e(u),Ze(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[j]:E+=w,[q]:T+=w,[qe]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Kt(E,T)}if(R=null,l.props.page.state=s,Q){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Wt.map(p=>p(y.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){O=O.filter(v=>!w.includes(v))};w.push(p),O.push(...w)}be.$set(l.props),Xe=!0}else tt(l,he,!1);const{activeElement:m}=document;await lt();const b=t?t.scroll:a?ye():null;if(Pe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==m&&document.activeElement!==document.body;!r&&!S&&nn(),Pe=!0,l.props.page&&(I=l.props.page),M=!1,e==="popstate"&&Qe(T),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),x.navigating.set(null)}async function ot(e,n,t,r){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:r,error:t,url:e,route:n}):await $(e)}function Zt(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=Ke(o,L);if(!i)return;const{url:c,external:f,download:d}=ue(i,U);if(f||d)return;const h=z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=Ee(c,!1);u&&zt(u)}else s<=h.preload_code&&fe(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,U);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===Y.viewport&&t.observe(o),f.preload_code===Y.eager&&fe(s.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof ne)return e.body;const t=J(e),r=Mt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Qt(e,n={}){return e=He(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function en(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ce(),!M){const a=ct(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Je.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||Zt(),L.addEventListener("click",async t=>{var y;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ke(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=ue(r,U);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){at({url:a,type:"link"})?M=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===ce(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(y=r.ownerDocument.getElementById(decodeURIComponent(h)))==null||y.scrollIntoView();return}if(V=!0,_e(E),e(a),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(i,U))return;const c=t.target,f=z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),W({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(ee={},a===E)return;const o=C[a],s=t.state[qe]??{},i=new URL(t.state[Lt]??location.href),c=t.state[q],f=ce(location)===ce(_.url);if(c===T&&(Xe||f)){e(i),C[E]=ye(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},be.$set({page:I})),E=a;return}const h=a-E;await W({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{E=a,T=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++E,[q]:T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){_.url=t,x.page.set({...I,url:t}),x.page.notify()}}async function tn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const d=r.map(async(u,g)=>{const l=s[g];return l!=null&&l.uses&&(l.uses=st(l.uses)),ke({loader:F.nodes[u],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<g;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Ae(l)})}),h=await Promise.all(d),y=ae.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let g=0;g<u.length;g++)u[g]||h.splice(g,0,void 0)}f=te({url:c,params:a,branch:h,status:n,error:t,form:i,route:y??null})}catch(d){if(d instanceof $e){await $(new URL(d.location,location.href));return}f=await oe({status:J(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),tt(f,e,!0)}async function it(e,n){var a;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ht,"1"),t.searchParams.append(qt,n.map(o=>o?"1":"0").join(""));const r=await Fe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ne(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(y){return Vt(y,{Promise:u=>new Promise((g,l)=>{s.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=st(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:S}=l,w=s.get(m);s.delete(m),S?w.reject(f(S)):w.fulfil(f(b))}}}})}function st(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function nn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ct(e,n,t,r){var c,f;let a,o;const s=new Promise((d,h)=>{a=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{sn as a,x as s};
