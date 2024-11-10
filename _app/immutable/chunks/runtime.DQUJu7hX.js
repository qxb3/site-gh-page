var An=Array.isArray,mn=Array.from,In=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,On=Object.prototype,Rn=Array.prototype,Ut=Object.getPrototypeOf;function Sn(t){return typeof t=="function"}const Nn=()=>{};function gn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ct=4,M=8,nt=16,E=32,$=64,S=128,U=256,p=512,O=1024,H=2048,x=4096,Y=8192,Gt=16384,vt=32768,Dn=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),xn=Symbol("");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function kn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Fn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Pn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Ln(t){return tn(rt(t))}function qn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&w&&(d===null?pn([t]):d.push(t)),t}function Mn(t,n){return u!==null&&at()&&u.f&(w|nt)&&(d===null||!d.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),Et(t,O),at()&&l!==null&&l.f&p&&!(l.f&E)&&(_!==null&&_.includes(t)?(y(l,O),W(l)):I===null?hn([t]):I.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;i&O||!e&&o===l||(y(o,n),i&(p|S)&&(i&w?Et(o,H):W(o)))}}const Hn=1,Yn=2,jn=4,Bn=8,Un=16,Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Wn=2,Xn=4,Jn=1,Qn=2,rn="[",en="[!",sn="]",yt={},tr=Symbol();function Tt(t){console.warn("hydration_mismatch")}let k=!1;function nr(t){k=t}let A;function P(t){if(t===null)throw Tt(),yt;return A=t}function rr(){return P(C(A))}function er(t){if(k){if(C(A)!==null)throw Tt(),yt;A=t}}function sr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=C(n);n.remove(),n=e}}var it,wt,At;function ar(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;wt=lt(n,"firstChild").get,At=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return wt.call(t)}function C(t){return At.call(t)}function or(t,n){if(!k)return J(t);var r=J(A);if(r===null)r=A.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function lr(t,n){if(!k){var r=J(t);return r instanceof Comment&&r.data===""?C(r):r}return A}function ur(t,n=1,r=!1){let e=k?A:t;for(;n--;)e=C(e);if(!k)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),P(a),a}return P(e),e}function ir(t){t.textContent=""}function an(t){var n=w|O;l===null?n|=S:l.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&w){var e=u;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=an(t);return n.equals=dt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?et(e):F(e)}}}function It(t){var n,r=l;K(t.parent);try{mt(t),n=qt(t)}finally{K(r)}return n}function Ot(t){var n=It(t),r=(N||t.f&S)&&t.deps!==null?H:p;y(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function et(t){mt(t),q(t,0),y(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){l===null&&u===null&&Wt(),u!==null&&u.f&S&&zt(),st&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,a=l,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=g;try{ft(!0),z(o),o.f|=Gt}catch(c){throw F(o),c}finally{ft(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!T&&!s&&e&&(a!==null&&on(o,a),u!==null&&u.f&w)){var m=u;(m.children??(m.children=[])).push(o)}return o}function _r(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function cr(t){Rt();var n=l!==null&&(l.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=St(t);return e}}function vr(t){return Rt(),ln(t)}function pr(t){const n=b($,t,!0);return()=>{F(n)}}function St(t){return b(ct,t,!1)}function ln(t){return b(M,t,!0)}function hr(t){return un(t)}function un(t,n=0){return b(M|nt|n,t,!0)}function dr(t,n=!0){return b(M|E,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function gt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Dt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:C(e);e.remove(),e=a}r=!0}Dt(t,n&&!r),gt(t),q(t,0),y(t,Y);var o=t.transitions;if(o!==null)for(const T of o)T.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function xt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Er(t,n){var r=[];kt(t,r,!0),_n(r,()=>{F(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function kt(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&E)!==0;kt(e,n,a?r:!1),e=s}}}function yr(t){Ct(t,!0)}function Ct(t,n){if(t.f&x){j(t)&&z(t),t.f^=x;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function Tr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function cn(){V&&bt()}const Ft=0,vn=1;let B=Ft,L=!1,g=!1,st=!1;function ft(t){g=t}function _t(t){st=t}let R=[],D=0;let u=null;function G(t){u=t}let l=null;function K(t){l=t}let d=null;function pn(t){d=t}let _=null,h=0,I=null;function hn(t){I=t}let Pt=0,N=!1,f=null;function Lt(){return++Pt}function at(){return!Z||f!==null&&f.l===null}function j(t){var o,i;var n=t.f;if(n&O)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&Ot(a),e&&l!==null&&!N&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,p)}return!1}function dn(t,n,r){throw t}function qt(t){var ot;var n=_,r=h,e=I,s=u,a=N,o=d,i=f,T=t.f;_=null,h=0,I=null,u=T&(E|$)?null:t,N=!g&&(T&S)!==0,d=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!N)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(q(t,h),c.length=h);return m}finally{_=n,h=r,I=e,u=s,N=a,d=o,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(_===null||!_.includes(n))&&(y(n,H),n.f&(S|U)||(n.f^=U),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function z(t){var n=t.f;if(!(n&Y)){y(t,p);var r=l;l=t;try{n&nt?fn(t):Dt(t),gt(t),Nt(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Pt}catch(s){dn(s)}finally{l=r}}}function Mt(){D>1e3&&(D=0,Xt()),D++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),yn(a)}}finally{g=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|x))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?xt(e):e.fn=null))}}function Tn(){if(L=!1,D>1001)return;const t=R;R=[],Ht(t),L||(D=0)}function W(t){B===Ft&&(L||(L=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&E)!==0,o=a&&(s&p)!==0;if(!o&&!(s&x))if(s&M){a?r.f^=p:j(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=B,r=R;try{Mt();const s=[];B=vn,R=s,L=!1,Ht(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&jt(),D=0,e}finally{B=n,R=r}}async function wr(){await Promise.resolve(),jt()}function Ar(t){var i;var n=t.f,r=(n&w)!==0;if(r&&n&Y){var e=It(t);return et(t),e}if(u!==null){d!==null&&d.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&l!==null&&l.f&p&&!(l.f&E)&&I.includes(t)&&(y(l,O),W(l))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,j(a)&&Ot(a)),t.v}function mr(t){const n=u;try{return u=null,t()}finally{u=n}}const wn=~(O|H|p);function y(t,n){t.f=t.f&wn|n}function Ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Or(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];K(a.effect),G(a.reaction),St(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{dr as $,Rr as A,an as B,Ir as C,lr as D,Or as E,In as F,G,K as H,u as I,ar as J,J as K,rn as L,C as M,yt as N,nr as O,P,rr as Q,A as R,ut as S,sn as T,tr as U,Tt as V,kn as W,ir as X,mn as Y,pr as Z,X as _,Rn as a,k as a0,un as a1,jn as a2,en as a3,sr as a4,x as a5,yr as a6,Er as a7,Tr as a8,Hn as a9,$ as aA,Vn as aB,Z as aC,Gn as aD,$n as aE,Zn as aF,jt as aG,wr as aH,Ln as aI,nn as aa,Yn as ab,kt as ac,_n as ad,F as ae,Bn as af,Un as ag,xn as ah,Bt as ai,Jn as aj,Qn as ak,$t as al,vt as am,nt as an,Gt as ao,St as ap,zn as aq,Sn as ar,Wn as as,Xn as at,ln as au,Cn as av,Dn as aw,Kn as ax,dt as ay,E as az,bn as b,Mn as c,Ar as d,l as e,Fn as f,lt as g,Ut as h,An as i,or as j,ur as k,fr as l,Pn as m,Nn as n,On as o,_r as p,qn as q,er as r,rt as s,hr as t,mr as u,vr as v,cr as w,f as x,Vt as y,gn as z};
