import{g as q,c as V}from"./default-i18n.hohxoesu.js";var k={exports:{}};function D(){}D.prototype={on:function(o,i,r){var p=this.e||(this.e={});return(p[o]||(p[o]=[])).push({fn:i,ctx:r}),this},once:function(o,i,r){var p=this;function h(){p.off(o,h),i.apply(r,arguments)}return h._=i,this.on(o,h,r)},emit:function(o){var i=[].slice.call(arguments,1),r=((this.e||(this.e={}))[o]||[]).slice(),p=0,h=r.length;for(p;p<h;p++)r[p].fn.apply(r[p].ctx,i);return this},off:function(o,i){var r=this.e||(this.e={}),p=r[o],h=[];if(p&&i)for(var n=0,t=p.length;n<t;n++)p[n].fn!==i&&p[n].fn._!==i&&h.push(p[n]);return h.length?r[o]=h:delete r[o],this}};k.exports=D;k.exports.TinyEmitter=D;var z=k.exports,G=z,U=new G;const F=q(U);var $={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(o,i){(function(r,p){o.exports=p()})(V,function(){return p={686:function(n,u,e){e.d(u,{default:function(){return H}});var u=e(279),l=e.n(u),u=e(370),m=e.n(u),u=e(817),y=e.n(u);function g(a){try{return document.execCommand(a)}catch{return}}var w=function(a){return a=y()(a),g("cut"),a};function x(v,s){var c,d,v=(c=v,d=document.documentElement.getAttribute("dir")==="rtl",(v=document.createElement("textarea")).style.fontSize="12pt",v.style.border="0",v.style.padding="0",v.style.margin="0",v.style.position="absolute",v.style[d?"right":"left"]="-9999px",d=window.pageYOffset||document.documentElement.scrollTop,v.style.top="".concat(d,"px"),v.setAttribute("readonly",""),v.value=c,v);return s.container.appendChild(v),s=y()(v),g("copy"),v.remove(),s}var E=function(a){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},c="";return typeof a=="string"?c=x(a,s):a instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(a==null?void 0:a.type)?c=x(a.value,s):(c=y()(a),g("copy")),c};function S(a){return(S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(a)}var T=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=d.action,a=c===void 0?"copy":c,s=d.container,c=d.target,d=d.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0){if(!c||S(c)!=="object"||c.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(a==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return d?E(d,{container:s}):c?a==="cut"?w(c):E(c,{container:s}):void 0};function A(a){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(a)}function C(a,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a,s){return(j=Object.setPrototypeOf||function(c,d){return c.__proto__=d,c})(a,s)}function I(a){var s=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var c,d=O(a);return c=s?(c=O(this).constructor,Reflect.construct(d,arguments,c)):d.apply(this,arguments),d=this,!(c=c)||A(c)!=="object"&&typeof c!="function"?function(v){if(v!==void 0)return v;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(d):c}}function O(a){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(a)}function N(a,s){if(a="data-clipboard-".concat(a),s.hasAttribute(a))return s.getAttribute(a)}var H=function(){(function(f,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(b&&b.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),b&&j(f,b)})(v,l());var a,s,c,d=I(v);function v(f,b){var _;return function(B){if(!(B instanceof v))throw new TypeError("Cannot call a class as a function")}(this),(_=d.call(this)).resolveOptions(b),_.listenClick(f),_}return a=v,c=[{key:"copy",value:function(f){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return E(f,b)}},{key:"cut",value:function(f){return w(f)}},{key:"isSupported",value:function(){var f=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof f=="string"?[f]:f,b=!!document.queryCommandSupported;return f.forEach(function(_){b=b&&!!document.queryCommandSupported(_)}),b}}],(s=[{key:"resolveOptions",value:function(){var f=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof f.action=="function"?f.action:this.defaultAction,this.target=typeof f.target=="function"?f.target:this.defaultTarget,this.text=typeof f.text=="function"?f.text:this.defaultText,this.container=A(f.container)==="object"?f.container:document.body}},{key:"listenClick",value:function(f){var b=this;this.listener=m()(f,"click",function(_){return b.onClick(_)})}},{key:"onClick",value:function(B){var b=B.delegateTarget||B.currentTarget,_=this.action(b)||"copy",B=T({action:_,container:this.container,target:this.target(b),text:this.text(b)});this.emit(B?"success":"error",{action:_,text:B,trigger:b,clearSelection:function(){b&&b.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(f){return N("action",f)}},{key:"defaultTarget",value:function(f){if(f=N("target",f),f)return document.querySelector(f)}},{key:"defaultText",value:function(f){return N("text",f)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(a.prototype,s),c&&C(a,c),v}()},828:function(n){var t;typeof Element>"u"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),n.exports=function(e,l){for(;e&&e.nodeType!==9;){if(typeof e.matches=="function"&&e.matches(l))return e;e=e.parentNode}}},438:function(n,t,e){var l=e(828);function m(u,y,g,w,x){var E=(function(S,T,A,C){return function(j){j.delegateTarget=l(j.target,T),j.delegateTarget&&C.call(S,j)}}).apply(this,arguments);return u.addEventListener(g,E,x),{destroy:function(){u.removeEventListener(g,E,x)}}}n.exports=function(u,y,g,w,x){return typeof u.addEventListener=="function"?m.apply(null,arguments):typeof g=="function"?m.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(E){return m(E,y,g,w,x)}))}},879:function(n,t){t.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},t.nodeList=function(e){var l=Object.prototype.toString.call(e);return e!==void 0&&(l==="[object NodeList]"||l==="[object HTMLCollection]")&&"length"in e&&(e.length===0||t.node(e[0]))},t.string=function(e){return typeof e=="string"||e instanceof String},t.fn=function(e){return Object.prototype.toString.call(e)==="[object Function]"}},370:function(n,t,e){var l=e(879),m=e(438);n.exports=function(u,y,g){if(!u&&!y&&!g)throw new Error("Missing required arguments");if(!l.string(y))throw new TypeError("Second argument must be a String");if(!l.fn(g))throw new TypeError("Third argument must be a Function");if(l.node(u))return T=y,A=g,(S=u).addEventListener(T,A),{destroy:function(){S.removeEventListener(T,A)}};if(l.nodeList(u))return w=u,x=y,E=g,Array.prototype.forEach.call(w,function(C){C.addEventListener(x,E)}),{destroy:function(){Array.prototype.forEach.call(w,function(C){C.removeEventListener(x,E)})}};if(l.string(u))return u=u,y=y,g=g,m(document.body,u,y,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var w,x,E,S,T,A}},817:function(n){n.exports=function(t){var e,l=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),l=window.getSelection(),(e=document.createRange()).selectNodeContents(t),l.removeAllRanges(),l.addRange(e),l.toString());return l}},279:function(n){function t(){}t.prototype={on:function(e,l,m){var u=this.e||(this.e={});return(u[e]||(u[e]=[])).push({fn:l,ctx:m}),this},once:function(e,l,m){var u=this;function y(){u.off(e,y),l.apply(m,arguments)}return y._=l,this.on(e,y,m)},emit:function(e){for(var l=[].slice.call(arguments,1),m=((this.e||(this.e={}))[e]||[]).slice(),u=0,y=m.length;u<y;u++)m[u].fn.apply(m[u].ctx,l);return this},off:function(e,l){var m=this.e||(this.e={}),u=m[e],y=[];if(u&&l)for(var g=0,w=u.length;g<w;g++)u[g].fn!==l&&u[g].fn._!==l&&y.push(u[g]);return y.length?m[e]=y:delete m[e],this}},n.exports=t,n.exports.TinyEmitter=t}},h={},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,{a:t}),t},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r(686).default;function r(n){if(h[n])return h[n].exports;var t=h[n]={exports:{}};return p[n](t,t.exports,r),t.exports}var p,h})})($);var W=$.exports;const P=q(W),L={autoSetContainer:!1,appendToBody:!0},Y={install:function(o){o.config.globalProperties.$clipboardConfig=L,o.config.globalProperties.$copyText=function(i,r){return new Promise(function(p,h){const n=document.createElement("button"),t=new P(n,{text:function(){return i},action:function(){return"copy"},container:typeof r=="object"?r:document.body});t.on("success",function(e){t.destroy(),p(e)}),t.on("error",function(e){t.destroy(),h(e)}),L.appendToBody&&document.body.appendChild(n),n.click(),L.appendToBody&&document.body.removeChild(n)})},o.directive("clipboard",{beforeMount:function(i,r){if(r.arg==="success")i._vClipboard_success=r.value;else if(r.arg==="error")i._vClipboard_error=r.value;else{const p=new P(i,{text:function(){return r.value},action:function(){return r.arg==="cut"?"cut":"copy"},container:L.autoSetContainer?i:void 0});p.on("success",function(h){const n=i._vClipboard_success;n&&n(h)}),p.on("error",function(h){const n=i._vClipboard_error;n&&n(h)}),i._vClipboard=p}},updated:function(i,r){r.arg==="success"?i._vClipboard_success=r.value:r.arg==="error"?i._vClipboard_error=r.value:(i._vClipboard.text=function(){return r.value},i._vClipboard.action=function(){return r.arg==="cut"?"cut":"copy"})},unmounted:function(i,r){r.arg==="success"?delete i._vClipboard_success:r.arg==="error"?delete i._vClipboard_error:(i._vClipboard.destroy(),delete i._vClipboard)}})},config:L},X=o=>{const i=/[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,r=/[\uDC00-\uDFFF]/;return o?r.test(o)||i.test(o):!1},M=o=>!o||o.nodeName!=="IMG"||o.className.indexOf("emoji")===-1||!X(o.getAttribute("alt"))?null:o,R=o=>{o.forEach(i=>{const r=document.createTextNode(i.getAttribute("alt"));i.parentNode.classList.add("wp-exclude-emoji"),i.parentNode.replaceChild(r,i)})},J=o=>{!o||o.nodeName!=="DIV"||o.className.indexOf("ql-editor")===-1||o.querySelectorAll(".ql-editor > p").forEach(i=>{i.classList.add("wp-exclude-emoji")})},K=()=>{const o=n=>{let t=n.length,e,l,m;const u=[];for(;t--;)for(e=n[t].addedNodes,l=e.length;l--;){m=e[l];const y=M(m);y&&(J(m),u.push(y))}R(u)},i=new MutationObserver(o);document.querySelectorAll(".aioseo-app, .vue-portal-target").forEach(n=>{i.observe(n,{childList:!0,subtree:!0})});const p=document.querySelectorAll(".aioseo-app img.emoji"),h=[];p.forEach(n=>{const t=M(n);t&&h.push(t)}),R(h)};document.addEventListener("DOMContentLoaded",K);window.aioseo=window.aioseo||{};window.aioseoBus=window.aioseoBus||{$on:(...o)=>F.on(...o),$once:(...o)=>F.once(...o),$off:(...o)=>F.off(...o),$emit:(...o)=>F.emit(...o)};window.__aioseoDynamicImportPreload__=o=>`${window.aioseo.urls.publicPath||"/"}dist/Lite/assets/${o}`;const Z=o=>(o.use(Y),o);export{F as e,Z as l};
