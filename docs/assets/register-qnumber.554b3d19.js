var xe=Object.defineProperty;var ye=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(ye(e,typeof t!="symbol"?t+"":t,n),n);import{d as Se,r as y,c as p,w,a as Ce,b as Be,o as ce,e as Ve,f as fe,g as J,i as qe,h as L,j as Ee,k as Fe,l as _e,m as we,s as Re,n as ke,p as Ne,q as Ae,t as Oe,u as c,v as A,Q as oe,x as Me,y as D,T as De,z as Ie,_ as je,A as Ue,B as He,C as Le,D as Pe,E as le,F as $e,G as re,H as Te}from"./index.97c622a6.js";import{a as Qe,r as ze}from"./focus-manager.387b0375.js";/**
 * Vue Number Format 3.17.0
 * (c) 2021-2023 Dipak Sarkar <hello@dipaksarkar.in> (https://dipaksarkar.in/)
 * @license MIT
 */var P={prefix:"",suffix:"",separator:",",decimal:".",precision:2,minimumFractionDigits:null,prefill:!0,reverseFill:!1,min:null,max:null,nullValue:""};function Ze(e,t,n){return Math.max(e,Math.min(t,n))}function Je(e){return Ze(0,e,20)}function Ge(e,t){const n=Math.pow(10,t);return(parseFloat(e)/n||0).toFixed(Je(t))}class Ke{constructor(t){F(this,"options");F(this,"input");F(this,"number");F(this,"isClean");F(this,"preSurRegExp");F(this,"numberRegExp");F(this,"cleanRegExp");F(this,"negativeRegExp");this.options=Object.assign(P,t),this.input="",this.number="",this.isClean=!0;const{prefix:n,suffix:o,decimal:l}=this.options;this.preSurRegExp=new RegExp(`${n}|${o}`,"g"),this.numberRegExp=new RegExp(`[^0-9\\${l}]+`,"gi"),this.cleanRegExp=new RegExp("[^0-9]+","gi"),this.negativeRegExp=new RegExp("[^0-9\\-]+","gi")}isNull(){return this.isClean?!this.numberOnly(this.input,this.cleanRegExp):!this.numberOnly(this.input,this.negativeRegExp)}clean(t=!1){return this.isClean=t,this}sign(){if(this.input===null||this.input===void 0)return"";const t=this.input.toString().indexOf("-")>=0;return this.isClean?t&&this.realNumber()>0?"-":"":t?"-":""}toNumber(t){return Number(t)}numberOnly(t,n){return t==null?void 0:t.toString().replace(n,"")}isNegative(){return this.sign()==="-"}numbers(){if(this.options.reverseFill)this.number=Ge(this.numberOnly(this.input,/\D+/g),this.options.precision).replace(".",this.options.decimal);else if(typeof this.input=="number")this.number=this.parts(this.input.toString().replace("-",""),".").join(this.options.decimal);else{const t=this.input.replace(this.preSurRegExp,"");this.number=this.numberOnly(t,this.numberRegExp),this.number=this.parts(this.number).join(this.options.decimal)}return this.number}realNumber(){return parseFloat(this.numbers().toString().replace(this.options.decimal,"."))}parts(t,n){const o=n||this.options.decimal;let l=t.toString().split(o);if(l.length>1&&(l[0]=this.toNumber(l[0])||0,l[1]=l.slice(1,l.length).join(""),l=l.slice(0,2)),this.isClean){const a=this.toNumber(l.join(".")).toFixed(this.options.precision),i=this.toNumber(a),u=i.toFixed(this.options.minimumFractionDigits);this.options.minimumFractionDigits>=0&&i.toString().length<u.length?l=u.toString().split("."):l=i.toString().split(".")}return l.slice(0,2)}addSeparator(){const t=this.numbers().split(this.options.decimal);return t[0]=t[0].toString().replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${this.options.separator}`),t.join(this.options.decimal)}format(t){return this.input=t,this.isNull()&&!this.options.reverseFill?this.options.nullValue:this.sign()+this.options.prefix+this.addSeparator()+this.options.suffix}unformat(t){return this.input=t,this.isNull()&&!this.options.reverseFill?this.options.nullValue:this.sign()+this.realNumber()}}const T="-";function me(e){return JSON.parse(JSON.stringify(e))}function G(e){return new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function I(e){const t=e instanceof HTMLInputElement?e:e.querySelector("input");if(!t)throw new Error("facade directive requires an input element");return t}function pe(e,t){const n=()=>{e.setSelectionRange(t,t)};n(),setTimeout(n(),1)}function O(e,t,{emit:n=!0,force:o=!1,clean:l=!1}={}){var s;const{options:a,oldValue:i}=e,u=((s=t==null?void 0:t.props)==null?void 0:s.value)||e.value;if(o||i!==u){const m=new Ke(a).clean(l&&!a.reverseFill);let f=m.format(u),h=m.clean(a&&!a.reverseFill).unformat(u);return l&&(Number(a.max)===a.max&&Number(h)>a.max?(f=m.format(a.max),h=m.unformat(a.max)):Number(a.min)===a.min&&Number(h)<a.min&&(f=m.format(a.min),h=m.unformat(a.min))),e.oldValue=f,e.masked=f,e.unmaskedValue=h,e.value!==f&&(e.value=f),n&&e.dispatchEvent(G("input"))}}function We(e){const{target:t,detail:n}=e;if(n!=null&&n.facade)return!1;const{oldValue:o,options:l,masked:a}=t;e.stopPropagation();let i=t.value.length;t.selectionEnd&&(i=t.value.length-t.selectionEnd),O(t,null,{emit:!1}),l.suffix&&(i=Math.max(i,l.suffix.length)),i=t.value.length-i,l.prefix&&(i=Math.max(i,l.prefix.length)),pe(t,i),o!==t.value&&(t.oldValue=a,t.dispatchEvent(G("input")))}function Xe(e){const{target:t,detail:n}=e;if(n!=null&&n.facade)return!1;const{oldValue:o,masked:l}=t;O(t,null,{force:!0,clean:!0}),o!==t.value&&(t.oldValue=l,t.dispatchEvent(G("change")))}function Ye(e,t){const{options:n}=t,{prefix:o,suffix:l,decimal:a,min:i,separator:u}=n,{key:s}=e,m=new RegExp(`${o}|${l}`,"g"),f=t.value.replace(m,""),h=i===void 0||Number(i)<0||Number(i)!==i;if(s===a&&f.includes(a))e.preventDefault();else if(s===T&&!h)e.preventDefault();else if(s==="Backspace"){const V=t.selectionEnd||0,q=t.value.slice(V-1,V),E=t.value.slice(V-2,V);let S=t.value.length-V;[o,T,u].includes(q)&&(e.preventDefault(),q===u?t.value=t.value.replace(E,""):t.value=t.value.replace(new RegExp(`[${o}${T}]`,"g"),""),S=Math.max(S,l.length),S=t.value.length-S,S=Math.max(S,o.length),pe(t,S),t.dispatchEvent(new Event("input")))}}var ve={beforeMount:(e,{value:t,modifiers:n},o)=>{e=I(e);const l=Object.assign(me(P),t,n);e.options=l,O(e,o,{force:l.prefill,clean:!0})},mounted:e=>{e=I(e);const t=e.parentElement||e,n=o=>{o.target===e&&We(o)};t.addEventListener("input",n,!0),e.onblur=o=>Xe(o),e.onkeydown=o=>Ye(o,e),e.cleanup=()=>t.removeEventListener("input",n,!0)},updated:(e,{value:t,oldValue:n,modifiers:o},l)=>{e=I(e);const a=e.options;e.options=Object.assign(a,t,o),t!==n?O(e,l,{force:!0,clean:!0}):O(e,l)},unmounted:e=>{I(e).cleanup()}};const C=me(P);var K=Se({name:"VueNumber",directives:{number:ve},props:{modelValue:{type:[String,Number],required:!0},nullValue:{type:[Number,String],required:!1,default:C.nullValue},masked:{type:Boolean,default:!1},reverseFill:{type:Boolean,default:C.reverseFill},prefill:{type:Boolean,default:C.prefill},precision:{type:Number,default:()=>C.precision},minimumFractionDigits:{type:Number,default:()=>C.minimumFractionDigits},decimal:{type:String,default:()=>C.decimal},min:{type:Number,default:()=>C.min},max:{type:Number,default:()=>C.max},separator:{type:String,default:()=>C.separator},prefix:{type:String,default:()=>C.prefix},suffix:{type:String,default:()=>C.suffix}},emits:["update:model-value","input:model-value"],setup(e,{emit:t}){const n=y(e.modelValue),o=y(""),l=p(()=>({...e})),a=p(()=>e.masked?n.value:o.value),i=s=>{const{target:m}=s;n.value=m.value,o.value=m.unmaskedValue,t("input:model-value",a.value)},u=()=>{t("update:model-value",a.value)};return w(()=>e.modelValue,(s,m)=>{s!==m&&(n.value=s)}),{config:l,maskedValue:n,input:i,change:u}}});const et=["value"];function tt(e,t,n,o,l,a){const i=Ce("number");return Be((ce(),Ve("input",{type:"text",autocomplete:"off",value:e.maskedValue,class:"v-number vue-number-format",onChange:t[0]||(t[0]=(...u)=>e.change&&e.change(...u)),onInput:t[1]||(t[1]=(...u)=>e.input&&e.input(...u))},null,40,et)),[[i,e.config]])}K.render=tt;K.__file="src/component.vue";const nt={install(e,t){t&&Object.assign(P,t),e.directive("number",ve),e.component("VueNumber",K)}},ot={dark:{type:Boolean,default:null}};function lt(e,t){return p(()=>e.dark===null?t.dark.isActive:e.dark)}function rt({validate:e,resetValidation:t,requiresQForm:n}){const o=qe(Ee,!1);if(o!==!1){const{props:l,proxy:a}=L();Object.assign(a,{validate:e,resetValidation:t}),w(()=>l.disable,i=>{i===!0?(typeof t=="function"&&t(),o.unbindComponent(a)):o.bindComponent(a)}),fe(()=>{l.disable!==!0&&o.bindComponent(a)}),J(()=>{l.disable!==!0&&o.unbindComponent(a)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const ie=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ae=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ue=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,j=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,U=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Q={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ie.test(e),hexaColor:e=>ae.test(e),hexOrHexaColor:e=>ue.test(e),rgbColor:e=>j.test(e),rgbaColor:e=>U.test(e),rgbOrRgbaColor:e=>j.test(e)||U.test(e),hexOrRgbColor:e=>ie.test(e)||j.test(e),hexaOrRgbaColor:e=>ae.test(e)||U.test(e),anyColor:e=>ue.test(e)||j.test(e)||U.test(e)},it=[!0,!1,"ondemand"],at={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>it.includes(e)}};function ut(e,t){const{props:n,proxy:o}=L(),l=y(!1),a=y(null),i=y(null);rt({validate:E,resetValidation:q});let u=0,s;const m=p(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),f=p(()=>n.disable!==!0&&m.value===!0),h=p(()=>n.error===!0||l.value===!0),V=p(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:a.value);w(()=>n.modelValue,()=>{S()}),w(()=>n.reactiveRules,B=>{B===!0?s===void 0&&(s=w(()=>n.rules,()=>{S(!0)})):s!==void 0&&(s(),s=void 0)},{immediate:!0}),w(e,B=>{B===!0?i.value===null&&(i.value=!1):i.value===!1&&(i.value=!0,f.value===!0&&n.lazyRules!=="ondemand"&&t.value===!1&&R())});function q(){u++,t.value=!1,i.value=null,l.value=!1,a.value=null,R.cancel()}function E(B=n.modelValue){if(f.value!==!0)return!0;const k=++u,$=t.value!==!0?()=>{i.value=!0}:()=>{},_=(g,b)=>{g===!0&&$(),l.value=g,a.value=b||null,t.value=!1},N=[];for(let g=0;g<n.rules.length;g++){const b=n.rules[g];let x;if(typeof b=="function"?x=b(B,Q):typeof b=="string"&&Q[b]!==void 0&&(x=Q[b](B)),x===!1||typeof x=="string")return _(!0,x),!1;x!==!0&&x!==void 0&&N.push(x)}return N.length===0?(_(!1),!0):(t.value=!0,Promise.all(N).then(g=>{if(g===void 0||Array.isArray(g)===!1||g.length===0)return k===u&&_(!1),!0;const b=g.find(x=>x===!1||typeof x=="string");return k===u&&_(b!==void 0,b),b===void 0},g=>(k===u&&(console.error(g),_(!0)),!1)))}function S(B){f.value===!0&&n.lazyRules!=="ondemand"&&(i.value===!0||n.lazyRules!==!0&&B!==!0)&&R()}const R=Fe(E,0);return J(()=>{s!==void 0&&s(),R.cancel()}),Object.assign(o,{resetValidation:q,validate:E}),_e(o,"hasError",()=>h.value),{isDirtyModel:i,hasRules:m,hasError:h,errorMessage:V,validate:E,resetValidation:q}}const se=/^on[A-Z]/;function st(e,t){const n={listeners:y({}),attributes:y({})};function o(){const l={},a={};for(const i in e)i!=="class"&&i!=="style"&&se.test(i)===!1&&(l[i]=e[i]);for(const i in t.props)se.test(i)===!0&&(a[i]=t.props[i]);n.attributes.value=l,n.listeners.value=a}return we(o),o(),n}let z,H=0;const v=new Array(256);for(let e=0;e<256;e++)v[e]=(e+256).toString(16).substring(1);const dt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),de=4096;function ct(){(z===void 0||H+16>de)&&(H=0,z=dt(de));const e=Array.prototype.slice.call(z,H,H+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,v[e[0]]+v[e[1]]+v[e[2]]+v[e[3]]+"-"+v[e[4]]+v[e[5]]+"-"+v[e[6]]+v[e[7]]+"-"+v[e[8]]+v[e[9]]+"-"+v[e[10]]+v[e[11]]+v[e[12]]+v[e[13]]+v[e[14]]+v[e[15]]}function Z(e){return e===void 0?`f_${ct()}`:e}function ft(e){return e!=null&&(""+e).length>0}const mt={...ot,...at,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},pt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function vt(){const{props:e,attrs:t,proxy:n,vnode:o}=L();return{isDark:lt(e,n.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:y(!1),focused:y(!1),hasPopupOpen:!1,splitAttrs:st(t,o),targetUid:y(Z(e.for)),rootRef:y(null),targetRef:y(null),controlRef:y(null)}}function gt(e){const{props:t,emit:n,slots:o,attrs:l,proxy:a}=L(),{$q:i}=a;let u=null;e.hasValue===void 0&&(e.hasValue=p(()=>ft(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{n("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:W,onFocusout:X}),Object.assign(e,{clearValue:Y,onControlFocusin:W,onControlFocusout:X,focus:b}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,d=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(d!==void 0?" / "+d:"")}}));const{isDirtyModel:s,hasRules:m,hasError:f,errorMessage:h,resetValidation:V}=ut(e.focused,e.innerLoading),q=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),E=p(()=>t.bottomSlots===!0||t.hint!==void 0||m.value===!0||t.counter===!0||t.error!==null),S=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=p(()=>`q-field row no-wrap items-start q-field--${S.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(q.value===!0?" q-field--float":"")+(k.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(f.value===!0?" q-field--error":"")+(f.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&E.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),B=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(f.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),k=p(()=>t.labelSlot===!0||t.label!==void 0),$=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&f.value!==!0?` text-${t.labelColor}`:"")),_=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:q.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=p(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});w(()=>t.for,r=>{e.targetUid.value=Z(r)});function g(){const r=document.activeElement;let d=e.targetRef!==void 0&&e.targetRef.value;d&&(r===null||r.id!==e.targetUid.value)&&(d.hasAttribute("tabindex")===!0||(d=d.querySelector("[tabindex]")),d&&d!==r&&d.focus({preventScroll:!0}))}function b(){Qe(g)}function x(){ze(g);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function W(r){u!==null&&(clearTimeout(u),u=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",r))}function X(r,d){u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",r)),d!==void 0&&d())})}function Y(r){Re(r),i.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),ke(()=>{V(),i.platform.is.mobile!==!0&&(s.value=!1)})}function ge(){const r=[];return o.prepend!==void 0&&r.push(c("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},o.prepend())),r.push(c("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},he())),f.value===!0&&t.noErrorIcon===!1&&r.push(M("error",[c(oe,{name:i.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(M("inner-loading-append",o.loading!==void 0?o.loading():[c(Me,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(M("inner-clearable-append",[c(oe,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:Y})])),o.append!==void 0&&r.push(c("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},o.append())),e.getInnerAppend!==void 0&&r.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function he(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(c("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):o.rawControl!==void 0?r.push(o.rawControl()):o.control!==void 0&&r.push(c("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(_.value))),k.value===!0&&r.push(c("div",{class:$.value},D(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(c("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(D(o.default))}function be(){let r,d;f.value===!0?h.value!==null?(r=[c("div",{role:"alert"},h.value)],d=`q--slot-error-${h.value}`):(r=D(o.error),d="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[c("div",t.hint)],d=`q--slot-hint-${t.hint}`):(r=D(o.hint),d="q--slot-hint"));const te=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&te===!1&&r===void 0)return;const ne=c("div",{key:d,class:"q-field__messages col"},r);return c("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[t.hideBottomSpace===!0?ne:c(De,{name:"q-transition--field-message"},()=>ne),te===!0?c("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function M(r,d){return d===null?null:c("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},d)}let ee=!1;return Ne(()=>{ee=!0}),Ae(()=>{ee===!0&&t.autofocus===!0&&a.focus()}),fe(()=>{Oe.value===!0&&t.for===void 0&&(e.targetUid.value=Z()),t.autofocus===!0&&a.focus()}),J(()=>{u!==null&&clearTimeout(u)}),Object.assign(a,{focus:b,blur:x}),function(){const d=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return c("label",{ref:e.rootRef,class:[R.value,l.class],style:l.style,...d},[o.before!==void 0?c("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},o.before()):null,c("div",{class:"q-field__inner relative-position col self-stretch"},[c("div",{ref:e.controlRef,class:B.value,tabindex:-1,...e.controlEvents},ge()),E.value===!0?be():null]),o.after!==void 0?c("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},o.after()):null])}}var ht=Ie({name:"QField",inheritAttrs:!1,props:mt,emits:pt,setup(){return gt(vt())}});const bt={props:{modelValue:[String,Number],placeholder:{type:String,default:"0.00"},options:{type:Object,default:()=>({precision:2,minimumFractionDigits:2})},label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean},emits:["update:model-value"],methods:{onChange(e){this.$emit("update:model-value",e)}},computed:{scopedSlots(){return Object.keys(this.$slots)}}};function xt(e,t,n,o,l,a){const i=Ue("vue-number");return ce(),He(ht,{class:"q-number","model-value":n.modelValue,"onUpdate:modelValue":a.onChange,label:n.label,"stack-label":n.stackLabel,hint:n.hint,"hide-hint":n.hideHint,prefix:n.prefix,suffix:n.suffix,"label-color":n.labelColor,color:n.color,"bg-color":n.bgColor,filled:n.filled,outlined:n.outlined,borderless:n.borderless,standout:n.standout,square:n.square,loading:n.loading,"label-slot":n.labelSlot,"bottom-slots":n.bottomSlots,"hide-bottom-space":n.hideBottomSpace,rounded:n.rounded,dense:n.dense,clearable:n.clearable,clearIcon:n.clearIcon,disable:n.disable,readonly:n.readonly,autofocus:n.autofocus},Le({control:le(({id:u,modelValue:s,emitValue:m})=>[Te(i,re({id:u,class:"q-field__input","model-value":s,"onUpdate:modelValue":f=>m(f.value)},n.options,{placeholder:n.placeholder}),null,16,["id","model-value","onUpdate:modelValue","placeholder"])]),_:2},[Pe(a.scopedSlots,u=>({name:u,fn:le(s=>[$e(e.$slots,u,re(s,{props:s}))])}))]),1032,["model-value","onUpdate:modelValue","label","stack-label","hint","hide-hint","prefix","suffix","label-color","color","bg-color","filled","outlined","borderless","standout","square","loading","label-slot","bottom-slots","hide-bottom-space","rounded","dense","clearable","clearIcon","disable","readonly","autofocus"])}var yt=je(bt,[["render",xt]]),Vt=({app:e})=>{e.use(nt),e.component("QNumber",yt)};export{Vt as default};
