import{e as g,p as T,s as j,P as E,k as w,i as F,r as H,n as I,j as O,R as $,q as A,v as L,x as B,y as q,_ as V,z,S as D,A as Y,F as G,B as P,C as W,L as U,D as X,E as Z,c as S,o as b,a as R,d as C,t as K,G as J,H as Q,w as ee,b as k}from"./DaVLYijK.js";import{_ as te}from"./CsWdnrSa.js";import{_ as ne}from"./DlAUqK2U.js";const ae=g({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(n){const a=n.renderKey,o=n.route,i={};for(const r in n.route)Object.defineProperty(i,r,{get:()=>a===n.renderKey?n.route[r]:o[r],enumerable:!0});return T(E,j(i)),()=>w(n.vnode,{ref:n.vnodeRef})}}),oe=g({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(n,{attrs:a,slots:o,expose:i}){const r=F(),c=H(),d=A(E,null);let m;i({pageRef:c});const u=A(U,null);let h;const v=r.deferHydration();if(r.isHydrating){const e=r.hooks.hookOnce("app:error",v);I().beforeEach(e)}n.pageKey&&O(()=>n.pageKey,(e,s)=>{e!==s&&r.callHook("page:loading:start")});let _=!1;return()=>w($,{name:n.name,route:n.route,...a},{default:e=>{const s=ie(d,e.route,e.Component),l=d&&d.matched.length===e.route.matched.length;if(!e.Component){if(h&&!l)return h;v();return}if(h&&u&&!u.isCurrent(e.route))return h;if(s&&d&&(!u||u!=null&&u.isCurrent(d)))return l?h:null;const t=L(e,n.pageKey);!r.isHydrating&&!se(d,e.route,e.Component)&&m===t&&(r.callHook("page:loading:end"),_=!0),m=t;const f=!!(n.transition??e.route.meta.pageTransition??B),y=f&&re([n.transition,e.route.meta.pageTransition,B,{onAfterLeave:()=>{r.callHook("page:transition:finish",e.Component)}}].filter(Boolean)),x=n.keepalive??e.route.meta.keepalive??q;return h=V(f&&y,z(x,w(D,{suspensible:!0,onPending:()=>r.callHook("page:start",e.Component),onResolve:()=>{Y(()=>r.callHook("page:finish",e.Component).then(()=>{if(!_)return r.callHook("page:loading:end");_=!1}).finally(v))}},{default:()=>{const p=w(ae,{key:t||void 0,vnode:o.default?w(G,void 0,o.default(e)):e.Component,route:e.route,renderKey:t||void 0,trackRootNodes:f,vnodeRef:c});return x&&(p.type.name=e.Component.type.name||e.Component.type.__name||"RouteProvider"),p}}))).default(),h}})}});function re(n){const a=n.map(o=>({...o,onAfterLeave:o.onAfterLeave?P(o.onAfterLeave):void 0}));return W(...a)}function ie(n,a,o){if(!n)return!1;const i=a.matched.findIndex(r=>{var c;return((c=r.components)==null?void 0:c.default)===(o==null?void 0:o.type)});return!i||i===-1?!1:a.matched.slice(0,i).some((r,c)=>{var d,m,u;return((d=r.components)==null?void 0:d.default)!==((u=(m=n.matched[c])==null?void 0:m.components)==null?void 0:u.default)})||o&&L({route:a,Component:o})!==L({route:n,Component:o})}function se(n,a,o){return n?a.matched.findIndex(r=>{var c;return((c=r.components)==null?void 0:c.default)===(o==null?void 0:o.type)})<a.matched.length-1:!1}const M=100,ce=g({__name:"AnimatedBg",setup(n){const a=H(null);let o;const i=[],r={x:0,y:0},c=()=>{if(a.value){const e=window.innerWidth,s=window.innerHeight;return a.value.width=e,a.value.height=s,{width:e,height:s}}return{width:0,height:0}},d=e=>{const{width:s,height:l}=c();i.length=0;for(let t=0;t<e;t++)i.push({x:Math.random()*s,y:Math.random()*l,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,radius:Math.random()*3+1})},m=()=>{if(!a.value)return;const{width:e,height:s}=a.value,l=.3;i.forEach(t=>{const f=t.x-r.x,y=t.y-r.y,x=Math.sqrt(f*f+y*y);if(x<M){const p=(M-x)/M,N=Math.atan2(y,f);t.vx+=Math.cos(N)*p*.5,t.vy+=Math.sin(N)*p*.5}t.x+=t.vx,t.y+=t.vy,t.vx*=.98,t.vy*=.98,Math.abs(t.vx)<l&&(t.vx=t.vx<0?-.3:l),Math.abs(t.vy)<l&&(t.vy=t.vy<0?-.3:l),(t.x<0||t.x>e)&&(t.vx*=-1),(t.y<0||t.y>s)&&(t.vy*=-1)})},u=e=>{i.forEach(s=>{e.beginPath(),e.arc(s.x,s.y,s.radius,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.7)",e.fill()})},h=()=>{if(!a.value)return;const e=a.value.getContext("2d");if(!e)return;const{width:s,height:l}=c(),t=getComputedStyle(document.documentElement),f=e.createLinearGradient(0,0,s,l);f.addColorStop(0,t.getPropertyValue("--tw-second").trim()),f.addColorStop(1,t.getPropertyValue("--tw-fourth").trim()),e.fillStyle=f,e.fillRect(0,0,s,l),m(),u(e),o=requestAnimationFrame(h)},v=()=>{c(),d(100)},_=e=>{r.x=e.clientX,r.y=e.clientY};return X(()=>{c(),d(100),h(),window.addEventListener("resize",v),window.addEventListener("mousemove",_)}),Z(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",v),window.removeEventListener("mousemove",_)}),(e,s)=>(b(),S("canvas",{ref_key:"canvasRef",ref:a,class:"fixed top-0 left-0 w-full h-full z-[-1]"},null,512))}}),de={class:"bg-third p-1 text-center"},le={class:"text-first"},ue=g({__name:"FootBar",setup(n){const a=new Date().getFullYear();return(o,i)=>(b(),S("footer",de,[R("p",le,[C(" © "+K(J(a))+" wiciu.pl. This project is licensed under the ",1),i[0]||(i[0]=R("a",{href:"https://raw.githubusercontent.com/TorSkiZ/Website/refs/heads/main/LICENSE",target:"_blank",class:"hover:text-second transition-colors duration-200 underline"}," MIT License ",-1))])]))}}),fe=g({__name:"NavButton",props:{to:{type:String,required:!0},label:{type:String,required:!0}},setup(n){const a=n;return(o,i)=>{const r=te;return b(),Q(r,{to:a.to,class:"bg-second hover:bg-first text-first hover:text-second rounded-lg transition-colors duration-200 px-4 py-2"},{default:ee(()=>[C(K(a.label),1)]),_:1},8,["to"])}}}),he={},me={class:"bg-third p-2 mx-8 rounded-2xl shadow-md"},ve={class:"flex gap-2"};function _e(n,a){const o=fe;return b(),S("div",me,[R("nav",ve,[k(o,{to:"/",label:"Home"})])])}const ge=ne(he,[["render",_e]]),ye={class:"min-h-screen flex flex-col space-y-8"},xe={class:"flex-1 container mx-auto p-8"},be=g({__name:"default",setup(n){return(a,o)=>{const i=oe;return b(),S("div",ye,[k(ce),k(ge),R("main",xe,[k(i)]),k(ue)])}}});export{be as default};
