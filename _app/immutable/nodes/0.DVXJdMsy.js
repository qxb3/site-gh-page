import{a as I,t as A}from"../chunks/disclose-version.CO8B-BsE.js";import{a1 as $,a0 as O,Q as J,al as V,a7 as X,$ as M,U as Y,R as B,am as D,n as b,ae as tt,an as at,ao as et,ap as rt,u as st,aq as it,e as R,ar as nt,a8 as ot,as as ft,at as ct,G as z,H as q,I as lt,C as G,w as vt,E as H,k as K,j as E,r as w,t as ut,d as T,D as dt}from"../chunks/runtime.DQUJu7hX.js";import{a as _t,s as pt}from"../chunks/render.8IRCt_OS.js";import{e as ht,i as mt,s as yt,a as xt,t as bt}from"../chunks/class.CxeUuBjc.js";import{p as wt}from"../chunks/proxy.D3o0wIiS.js";function gt(a,t,e){O&&J();var r=a,i=Y,s;$(()=>{V(i,i=t())&&(s&&X(s),s=M(()=>e(r)))}),O&&(r=B)}function kt(a,t,...e){var r=a,i=b,s;$(()=>{i!==(i=t())&&(s&&(tt(s),s=null),s=M(()=>i(r,...e)))},D),O&&(r=B)}const Tt=()=>performance.now(),y={tick:a=>requestAnimationFrame(a),now:()=>Tt(),tasks:new Set};function Q(a){y.tasks.forEach(t=>{t.c(a)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(Q)}function Nt(a){let t;return y.tasks.size===0&&y.tick(Q),{promise:new Promise(e=>{y.tasks.add(t={c:a,f:e})}),abort(){y.tasks.delete(t)}}}function N(a,t){a.dispatchEvent(new CustomEvent(t))}function Et(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function L(a){const t={},e=a.split(";");for(const r of e){const[i,s]=r.split(":");if(!i||s===void 0)break;const n=Et(i.trim());t[n]=s.trim()}return t}const It=a=>a;function W(a,t,e,r){var i=(a&it)!==0,s=(a&ft)!==0,n=i&&s,v=(a&ct)!==0,d=n?"both":i?"in":"out",_,u=t.inert,f,o;function x(){var l=lt,g=R;z(null),q(null);try{return _??(_=e()(t,(r==null?void 0:r())??{},{direction:d}))}finally{z(l),q(g)}}var m={is_global:v,in(){var l;if(t.inert=u,!i){o==null||o.abort(),(l=o==null?void 0:o.reset)==null||l.call(o);return}s||f==null||f.abort(),N(t,"introstart"),f=S(t,x(),o,1,()=>{N(t,"introend"),f==null||f.abort(),f=_=void 0})},out(l){if(!s){l==null||l(),_=void 0;return}t.inert=!0,N(t,"outrostart"),o=S(t,x(),f,0,()=>{N(t,"outroend"),l==null||l()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},c=R;if((c.transitions??(c.transitions=[])).push(m),i&&_t){var p=v;if(!p){for(var h=c.parent;h&&h.f&D;)for(;(h=h.parent)&&!(h.f&at););p=!h||(h.f&et)!==0}p&&rt(()=>{st(()=>m.in())})}}function S(a,t,e,r,i){var s=r===1;if(nt(t)){var n,v=!1;return ot(()=>{if(!v){var p=t({direction:s?"in":"out"});n=S(a,p,e,r,i)}}),{abort:()=>{v=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return i(),{abort:b,deactivate:b,reset:b,t:()=>r};const{delay:d=0,css:_,tick:u,easing:f=It}=t;var o=[];if(s&&e===void 0&&(u&&u(0,1),_)){var x=L(_(0,1));o.push(x,x)}var m=()=>1-r,c=a.animate(o,{duration:d});return c.onfinish=()=>{var p=(e==null?void 0:e.t())??1-r;e==null||e.abort();var h=r-p,l=t.duration*Math.abs(h),g=[];if(l>0){if(_)for(var j=Math.ceil(l/16.666666666666668),F=0;F<=j;F+=1){var C=p+h*f(F/j),Z=_(C,1-C);g.push(L(Z))}m=()=>{var k=c.currentTime;return p+h*f(k/l)},u&&Nt(()=>{if(c.playState!=="running")return!1;var k=m();return u(k,1-k),!0})}c=a.animate(g,{duration:l,fill:"forwards"}),c.onfinish=()=>{m=()=>r,u==null||u(r,1-r),i()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=b)},deactivate:()=>{i=b},reset:()=>{r===0&&(u==null||u(1,0))},t:()=>m()}}const At=!0;function Ft({url:a}){return{url:a.pathname}}const $t=Object.freeze(Object.defineProperty({__proto__:null,load:Ft,prerender:At},Symbol.toStringTag,{value:"Module"}));var Ot=A('<li class="svelte-hzlpg0"><a> </a></li>'),St=A('<nav class="theme border-b-2 border-primary-light dark:border-primary-dark p-4 shadow-sm shadow-primary-light flex justify-between items-center"><div class="transform transition-transform duration-500 hover:scale-110"><a href="/" class="!lowercase !no-underline !font-bold !text-secondary !text-xl transition-colors duration-500 hover:!text-primary svelte-hzlpg0"><div class="flex items-center"><p class="text-primary">q</p> <p class="text-primary">x</p> <p class="text-secondary">b</p> <p class="text-tertiary">3</p></div></a></div> <ul class="flex justify-evenly items-center space-x-6"></ul></nav>');function jt(a,t){G(t,!0);let e=wt([{active:!1,href:"/",text:"Home",color:"text-primary"},{active:!1,href:"/about",text:"About",color:"text-secondary"},{active:!1,href:"/projects",text:"Projects",color:"text-tertiary"}]);vt(()=>{for(let s=0;s<e.length;(s+=1)-1)e[s].href===t.data.url?e[s].active=!0:e[s].active=!1});var r=St(),i=K(E(r),2);ht(i,21,()=>e,mt,(s,n)=>{var v=Ot(),d=E(v),_=E(d,!0);w(d),w(v),ut(()=>{yt(d,"href",T(n).href),xt(d,`${T(n).color??""} svelte-hzlpg0`),bt(d,"!underline",T(n).active),pt(_,T(n).text)}),I(s,v)}),w(i),w(r),I(a,r),H()}function Ct(a){const t=a-1;return t*t*t+1}function P(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function U(a,{delay:t=0,duration:e=400,easing:r=Ct,x:i=0,y:s=0,opacity:n=0}={}){const v=getComputedStyle(a),d=+v.opacity,_=v.transform==="none"?"":v.transform,u=d*(1-n),[f,o]=P(i),[x,m]=P(s);return{delay:t,duration:e,easing:r,css:(c,p)=>`
			transform: ${_} translate(${(1-c)*f}${o}, ${(1-c)*x}${m});
			opacity: ${d-u*p}`}}var Rt=A('<div class="theme"><!></div>'),zt=A("<!> <!>",1);function Mt(a,t){G(t,!0);var e=zt(),r=dt(e);jt(r,{get data(){return t.data}});var i=K(r,2);gt(i,()=>t.data.url,s=>{var n=Rt(),v=E(n);kt(v,()=>t.children),w(n),W(1,n,()=>U,()=>({x:-window.innerWidth,duration:window.innerWidth/2,delay:400})),W(2,n,()=>U,()=>({x:window.innerWidth,duration:window.innerWidth/2})),I(s,n)}),I(a,e),H()}export{Mt as component,$t as universal};