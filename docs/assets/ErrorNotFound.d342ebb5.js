import{S as I,U as Z,V as ee,W as G,X as te,c as o,h as Y,r as z,s as T,v as ne,g as ae,u as q,T as re,b as le,H as ue,_ as ie,d as oe,o as se,e as ce,P as V,E as de}from"./index.47fdcffe.js";import{u as fe,b as ve,Q as D,a as me}from"./QSpinner.83177d23.js";import{d as ge,c as be,a as he}from"./render.28335df4.js";import{c as ye}from"./dom.6136ce6e.js";function ke(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function H(e,t,l,n){l.modifiers.stop===!0&&G(e);const u=l.modifiers.color;let f=l.modifiers.center;f=f===!0||n===!0;const v=document.createElement("span"),d=document.createElement("span"),L=te(e),{left:h,top:m,width:_,height:r}=t.getBoundingClientRect(),y=Math.sqrt(_*_+r*r),g=y/2,k=`${(_-y)/2}px`,i=f?k:`${L.left-h-g}px`,b=`${(r-y)/2}px`,P=f?b:`${L.top-m-g}px`;d.className="q-ripple__inner",ye(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${P},0) scale3d(.2,.2,1)`,opacity:0}),v.className=`q-ripple${u?" text-"+u:""}`,v.setAttribute("dir","ltr"),v.appendChild(d),t.appendChild(v);const B=()=>{v.remove(),clearTimeout(S)};l.abort.push(B);let S=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,S=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,S=setTimeout(()=>{v.remove(),l.abort.splice(l.abort.indexOf(B),1)},275)},250)},50)}function Q(e,{modifiers:t,value:l,arg:n}){const u=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var pe=ge({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(u,e,n,u.qKeyEvent===!0)},keystart:ke(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&I(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(u,e,n,!0)},300)};Q(n,t),e.__qripple=n,Z(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&Q(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ee(t,"main"),delete e._qripple)}});const J={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},xe=Object.keys(J),qe={align:{type:String,validator:e=>xe.includes(e)}};function _e(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${J[t]}`})}function Ee(e){return e.appContext.config.globalProperties.$router!==void 0}function W(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $e(e,t){for(const l in t){const n=t[l],u=e[l];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,v)=>f!==u[v]))return!1}return!0}function U(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ce(e,t){return Array.isArray(e)===!0?U(e,t):Array.isArray(t)===!0?U(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ce(e[l],t[l])===!1)return!1;return!0}const we={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Be({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=Y(),{props:n,proxy:u,emit:f}=l,v=Ee(l),d=o(()=>n.disable!==!0&&n.href!==void 0),L=t===!0?o(()=>v===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>v===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>L.value===!0?P(n.to):null),m=o(()=>h.value!==null),_=o(()=>d.value===!0||m.value===!0),r=o(()=>n.type==="a"||_.value===!0?"a":n.tag||e||"div"),y=o(()=>d.value===!0?{href:n.href,target:n.target}:m.value===!0?{href:h.value.href,target:n.target}:{}),g=o(()=>{if(m.value===!1)return-1;const{matched:s}=h.value,{length:p}=s,E=s[p-1];if(E===void 0)return-1;const C=u.$route.matched;if(C.length===0)return-1;const w=C.findIndex(F.bind(null,E));if(w>-1)return w;const K=W(s[p-2]);return p>1&&W(E)===K&&C[C.length-1].path!==K?C.findIndex(F.bind(null,s[p-2])):w}),k=o(()=>m.value===!0&&g.value!==-1&&$e(u.$route.params,h.value.params)),i=o(()=>k.value===!0&&g.value===u.$route.matched.length-1&&Le(u.$route.params,h.value.params)),b=o(()=>m.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function P(s){try{return u.$router.resolve(s)}catch{}return null}function B(s,{returnRouterError:p,to:E=n.to,replace:C=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const w=u.$router[C===!0?"replace":"push"](E);return p===!0?w:w.then(()=>{}).catch(()=>{})}function S(s){if(m.value===!0){const p=E=>B(s,E);f("click",s,p),s.defaultPrevented!==!0&&p()}else f("click",s)}return{hasRouterLink:m,hasHrefLink:d,hasLink:_,linkTag:r,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:P,navigateToRouterLink:B,navigateOnClick:S}}const X={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Se={xs:8,sm:10,md:14,lg:20,xl:24},Pe=["button","submit","reset"],Te=/[^\s]\/[^\s]/,Re=["flat","outline","push","unelevated"],Ae=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Oe={...fe,...we,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Re.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Me(e){const t=ve(e,Se),l=_e(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:v,navigateOnClick:d}=Be({fallbackTag:"button"}),L=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in X?X[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),m=o(()=>e.disable!==!0&&e.loading!==!0),_=o(()=>m.value===!0?e.tabindex||0:-1),r=o(()=>Ae(e,"standard")),y=o(()=>{const i={tabindex:_.value};return u.value===!0?Object.assign(i,v.value):Pe.includes(e.type)===!0&&(i.type=e.type),f.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Te.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${r.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(m.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:L,innerClasses:k,attributes:y,hasLink:u,linkTag:f,navigateOnClick:d,isActionable:m}}const{passiveCapture:x}=ue;let R=null,A=null,O=null;var je=be({name:"QBtn",props:{...Oe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=Y(),{classes:u,style:f,innerClasses:v,attributes:d,hasLink:L,linkTag:h,navigateOnClick:m,isActionable:_}=Me(e),r=z(null),y=z(null);let g=null,k,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:L.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=o(()=>({center:e.round})),S=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(_.value===!0){const a={onClick:E,onKeydown:C,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:T}}),p=o(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...d.value,...s.value}));function E(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const N=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",N,x),r.value!==null&&r.value.removeEventListener("blur",N,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",N,x),r.value.addEventListener("blur",N,x)}}m(a)}}function C(a){r.value!==null&&(l("keydown",a),I(a,[13,32])===!0&&A!==r.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(r.value.focus(),A=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",$,!0),r.value.addEventListener("blur",$,x)),T(a)))}function w(a){r.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(R!==r.value&&(R!==null&&M(),R=r.value,g=a.target,g.addEventListener("touchcancel",$,x),g.addEventListener("touchend",$,x)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function K(a){r.value!==null&&(a.qSkipRipple=k===!0,l("mousedown",a),a.defaultPrevented!==!0&&O!==r.value&&(O!==null&&M(),O=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",$,x)))}function $(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(A===r.value&&I(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&ne(c),a.cancelBubble===!0&&G(c),r.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}l("keyup",a)}M()}}function M(a){const c=y.value;a!==!0&&(R===r.value||O===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),R===r.value&&(g!==null&&(g.removeEventListener("touchcancel",$,x),g.removeEventListener("touchend",$,x)),R=g=null),O===r.value&&(document.removeEventListener("mouseup",$,x),O=null),A===r.value&&(document.removeEventListener("keyup",$,!0),r.value!==null&&r.value.removeEventListener("blur",$,x),A=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return ae(()=>{M(!0)}),Object.assign(n,{click:E}),()=>{let a=[];e.icon!==void 0&&a.push(q(D,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(q("span",{class:"block"},[e.label])),a=he(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(q(D,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[q("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(q("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[q("span",{class:"q-btn__progress-indicator fit block",style:S.value})])),c.push(q("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+v.value},a)),e.loading!==null&&c.push(q(re,{name:"q-transition--fade"},()=>e.loading===!0?[q("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[q(me)])]:null)),le(q(h.value,p.value,c),[[pe,P.value,void 0,B.value]])}}});const Ke=oe({name:"ErrorNotFound"}),Ne={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},Ie=V("div",{style:{"font-size":"30vh"}}," 404 ",-1),Ve=V("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function ze(e,t,l,n,u,f){return se(),ce("div",Ne,[V("div",null,[Ie,Ve,de(je,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var Fe=ie(Ke,[["render",ze]]);export{Fe as default};
