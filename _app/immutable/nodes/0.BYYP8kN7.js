import{c as A,g as W,j as X,d as y,e as E,t as w}from"../chunks/disclose-version.Cdqo9ooX.js";import{A as L,q as M,h as I,o as Q,al as V,e as K,a as Z,j as x,b as $,d as ee,g as ae,a3 as te,P as se,p as Y,am as m,an as re,t as B,v as b,w as oe,z as G,L as P,ao as ne,M as c,Q as ie}from"../chunks/runtime.YJsn5Byk.js";import{d as le,a as de,b as me,s as q,c as ce,i as fe,e as ge,f as he,g as z,m as F,t as J,h as _e,j as ue,k as ve,l as ye}from"../chunks/mode.BSVB_23t.js";import{p as s,o as Se,i as U}from"../chunks/index-client.ayS0Bkrc.js";import{s as be,i as pe,a as D}from"../chunks/store.BWiZQ9NB.js";function H(f,e,r,o,n){var t=f,g="",l;L(()=>{if(g===(g=e()??"")){M&&I();return}l!==void 0&&(V(l),l=void 0),g!==""&&(l=Q(()=>{if(M){K.data;for(var a=I(),h=a;a!==null&&(a.nodeType!==8||a.data!=="");)h=a,a=Z(a);if(a===null)throw x(),$;A(K,h),t=ee(a);return}var _=g+"",d=W(_);A(ae(d),d.lastChild),t.before(d)}))})}function Ce(f,e,...r){var o=f,n=se,t;L(()=>{n!==(n=e())&&(t&&(V(t),t=null),t=Q(()=>n(o,...r)))},te),M&&(o=K)}const Te=!0,Ee=Object.freeze(Object.defineProperty({__proto__:null,prerender:Te},Symbol.toStringTag,{value:"Module"}));var Ne=w('<meta name="theme-color">'),ke=w("<!> <!>",1);function Me(f,e){Y(e,!1);const r=be(),o=()=>D(F,"$modeStorageKeyStore",r),n=()=>D(J,"$themeStorageKeyStore",r),t=ne();let g=s(e,"track",8,!0),l=s(e,"defaultMode",8,"system"),a=s(e,"themeColors",24,()=>{}),h=s(e,"disableTransitions",8,!0),_=s(e,"darkClassNames",24,()=>["dark"]),d=s(e,"lightClassNames",24,()=>[]),O=s(e,"defaultTheme",8,""),R=s(e,"nonce",8,""),p=s(e,"themeStorageKey",8,"mode-watcher-theme"),C=s(e,"modeStorageKey",8,"mode-watcher-mode");Se(()=>{const T=de.subscribe(()=>{}),S=me.subscribe(()=>{});q.tracking(g()),q.query();const u=localStorage.getItem(o());ce(fe(u)?u:l());const N=localStorage.getItem(n());return ge(N||O()),()=>{T(),S()}});const j=le({defaultMode:l(),themeColors:a(),darkClassNames:_(),lightClassNames:d(),defaultTheme:O(),modeStorageKey:C(),themeStorageKey:p()});m(()=>c(h()),()=>{_e.set(h())}),m(()=>c(a()),()=>{ue.set(a())}),m(()=>c(_()),()=>{ve.set(_())}),m(()=>c(d()),()=>{ye.set(d())}),m(()=>c(C()),()=>{F.set(C())}),m(()=>c(p()),()=>{J.set(p())}),m(()=>c(R()),()=>{ie(t,typeof window>"u"?R():"")}),re(),pe(),X(T=>{var S=ke(),u=b(S);U(u,a,v=>{var i=Ne();oe(()=>he(i,"content",a().dark)),y(v,i)});var N=G(u,2);U(N,()=>P(t),v=>{var i=E(),k=b(i);H(k,()=>`<script nonce=${P(t)}>(`+z.toString()+")("+JSON.stringify(j)+");<\/script>",!1,!1),y(v,i)},v=>{var i=E(),k=b(i);H(k,()=>"<script>("+z.toString()+")("+JSON.stringify(j)+");<\/script>",!1,!1),y(v,i)}),y(T,S)}),B()}var Ke=w("<!> <!>",1);function Ie(f,e){Y(e,!0);var r=Ke(),o=b(r);Me(o,{});var n=G(o,2);Ce(n,()=>e.children),y(f,r),B()}export{Ie as component,Ee as universal};
