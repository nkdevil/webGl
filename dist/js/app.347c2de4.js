(function(e){function n(n){for(var r,o,a=n[0],i=n[1],l=n[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==u[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d2bc3":"2fd3bd0a","chunk-0f1008e6":"e189098a","chunk-2d8a6760":"1c33c797","chunk-2d21a3d2":"343027c4"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0f1008e6":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d2bc3":"31d6cfe0","chunk-0f1008e6":"2ea225ea","chunk-2d8a6760":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var l=c[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],d=l.getAttribute("data-href");if(d===r||d===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],s.parentNode.removeChild(s),t(c)},s.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}u[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",e._l(e.links,(function(n,r){return t("router-link",{key:r,attrs:{to:n.name}},[e._v(e._s(n.title))])})),1),t("router-view")],1)},u=[],c={name:"app",components:{},data:function(){return{links:[{name:"bone",title:"유적"},{name:"coin",title:"코인"}]}},beforeCreate:function(){},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{},computed:{},watch:{}},a=c,i=(t("5c0b"),t("2877")),l=Object(i["a"])(a,o,u,!1,null,null,null),d=l.exports,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["a"].use(f["a"]);var s=[{path:"/",name:"home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/bone",name:"bone",component:function(){return Promise.all([t.e("chunk-2d0d2bc3"),t.e("chunk-0f1008e6")]).then(t.bind(null,"7e6b"))}},{path:"/coin",name:"coin",component:function(){return Promise.all([t.e("chunk-2d0d2bc3"),t.e("chunk-2d8a6760")]).then(t.bind(null,"73d1"))}}],p=new f["a"]({mode:"history",base:"/",scrollBehavior:function(e,n,t){return t||{x:0,y:0}},routes:s}),h=p;r["a"].config.productionTip=!1,h.beforeEach((function(e,n,t){t()})),new r["a"]({router:h,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.347c2de4.js.map