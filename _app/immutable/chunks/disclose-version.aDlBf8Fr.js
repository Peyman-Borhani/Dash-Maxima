import{N as I,F as M,am as D,$ as O,n as m,A as x,as as C,q as c,H as P,a as b,s as S,c as y,d as u,g as _,at as R,au as F,r as A,h as V}from"./runtime.Dew58M6U.js";const W=new Set,q=new Set;function B(e,t,r,o){function n(a){if(o.capture||H.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?M(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Y(e,t,r,o,n){var a={capture:o,passive:n},i=B(e,t,r,a);(t===document.body||t===window||t===document)&&I(()=>{t.removeEventListener(e,i,a)})}function J(e){for(var t=0;t<e.length;t++)W.add(e[t]);for(var r of q)r(e)}function H(e){var T;var t=this,r=t.ownerDocument,o=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],a=n[0]||e.target,i=0,f=e.__root;if(f){var l=n.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var E=n.indexOf(t);if(E===-1)return;l<=E&&(i=l)}if(a=n[i]||e.target,a!==t){D(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var p,w=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(O(h)){var[L,...k]=h;L.apply(a,[e,...k])}else h.call(a,e)}catch(v){p?w.push(v):p=v}if(e.cancelBubble||g===t||g===null)break;a=g}if(p){for(let v of w)queueMicrotask(()=>{throw v});throw p}}finally{e.__root=t,delete e.currentTarget}}}let s;function K(){s=void 0}function Q(e){let t=null,r=c;var o;if(c){for(t=u,s===void 0&&(s=_(document.head));s!==null&&(s.nodeType!==8||s.data!==P);)s=b(s);s===null?S(!1):s=y(b(s))}c||(o=document.head.appendChild(m()));try{x(()=>e(o),C)}finally{r&&(S(!0),s=u,y(t))}}function N(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function d(e,t){var r=A;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function X(e,t){var r=(t&R)!==0,o=(t&F)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return d(u,null),u;n===void 0&&(n=N(a?e:"<!>"+e),r||(n=_(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=_(i),l=i.lastChild;d(f,l)}else d(i,i);return i}}function Z(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(c)return d(u,null),u;if(!a){var i=N(n),f=_(i);a=_(f)}var l=a.cloneNode(!0);return d(l,l),l}}function ee(e=""){if(!c){var t=m(e+"");return d(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=m()),y(r)),d(r,r),r}function te(){if(c)return d(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=m();return e.append(t,r),d(t,r),e}function re(e,t){if(c){A.nodes_end=u,V();return}e!==null&&e.before(t)}function ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ne(e){return $.includes(e)}const U={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function oe(e){return e=e.toLowerCase(),U[e]??e}const G=["touchstart","touchmove"];function ie(e){return G.includes(e)}const j="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(j);export{W as a,K as b,d as c,re as d,N as e,Q as f,te as g,H as h,ie as i,ee as j,ae as k,B as l,J as m,oe as n,ne as o,Z as p,Y as q,q as r,X as t};
