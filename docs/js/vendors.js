!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).immer={})}(this,(function(n){function t(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[L]}function e(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[H]||!!n.constructor[H]||v(n)||s(n))}function i(n,t,r){void 0===r&&(r=!1),0===u(n)?(r?Object.keys:T)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function u(n){var t=n[L];return t?t.t>3?t.t-4:t.t:Array.isArray(n)?1:v(n)?2:s(n)?3:0}function o(n,t){return 2===u(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function f(n,t){return 2===u(n)?n.get(t):n[t]}function a(n,t,r){var e=u(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function v(n){return X&&n instanceof Map}function s(n){return q&&n instanceof Set}function l(n){return n.i||n.u}function p(n){if(Array.isArray(n))return n.slice();var t=U(n);delete t[L];for(var r=T(t),e=0;e<r.length;e++){var i=r[e],u=t[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function h(n,t){y(n)||r(n)||!e(n)||(u(n)>1&&(n.set=n.add=n.clear=n.delete=d),Object.freeze(n),t&&i(n,(function(n,t){return h(t,!0)}),!0))}function d(){t(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function _(n){var r=V[n];return r||t(19,n),r}function b(n,t){V[n]=t}function m(){return N}function j(n,t){t&&(_("Patches"),n.o=[],n.v=[],n.s=t)}function O(n){w(n),n.l.forEach(M),n.l=null}function w(n){n===N&&(N=n.p)}function S(n){return N={l:[],p:N,h:n,_:!0,m:0}}function M(n){var t=n[L];0===t.t||1===t.t?t.j():t.O=!0}function P(n,r){r.m=r.l.length;var i=r.l[0],u=void 0!==n&&n!==i;return r.h.S||_("ES5").M(r,n,u),u?(i[L].P&&(O(r),t(4)),e(n)&&(n=g(r,n),r.p||x(r,n)),r.o&&_("Patches").g(i[L],n,r.o,r.v)):n=g(r,i,[]),O(r),r.o&&r.s(r.o,r.v),n!==G?n:void 0}function g(n,t,r){if(y(t))return t;var e=t[L];if(!e)return i(t,(function(i,u){return A(n,e,t,i,u,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.u,!0),e.u;if(!e.R){e.R=!0,e.A.m--;var u=4===e.t||5===e.t?e.i=p(e.k):e.i;i(3===e.t?new Set(u):u,(function(t,i){return A(n,e,u,t,i,r)})),x(n,u,!1),r&&n.o&&_("Patches").F(e,r,n.o,n.v)}return e.i}function A(n,t,i,u,f,c){if(r(f)){var v=g(n,f,c&&t&&3!==t.t&&!o(t.D,u)?c.concat(u):void 0);if(a(i,u,v),!r(v))return;n._=!1}if(e(f)&&!y(f)){if(!n.h.K&&n.m<1)return;g(n,f),t&&t.A.p||x(n,f)}}function x(n,t,r){void 0===r&&(r=!1),n.h.K&&n._&&h(t,r)}function z(n,t){var r=n[L];return(r?l(r):n)[t]}function E(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function R(n){n.P||(n.P=!0,n.p&&R(n.p))}function k(n){n.i||(n.i=p(n.u))}function F(n,t,r){var e=v(t)?_("MapSet").$(t,r):s(t)?_("MapSet").C(t,r):n.S?function(n,t){var r=Array.isArray(n),e={t:r?1:0,A:t?t.A:m(),P:!1,R:!1,D:{},p:t,u:n,k:null,i:null,j:null,I:!1},i=e,u=Y;r&&(i=[e],u=Z);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(t,r):_("ES5").J(t,r);return(r?r.A:m()).l.push(e),e}function D(n){return r(n)||t(22,n),function n(t){if(!e(t))return t;var r,o=t[L],c=u(t);if(o){if(!o.P&&(o.t<4||!_("ES5").N(o)))return o.u;o.R=!0,r=K(t,c),o.R=!1}else r=K(t,c);return i(r,(function(t,e){o&&f(o.u,t)===e||a(r,t,n(e))})),3===c?new Set(r):r}(n)}function K(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return p(n)}function $(){function n(n,t){var r=f[n];return r?r.enumerable=t:f[n]=r={configurable:!0,enumerable:t,get:function(){return Y.get(this[L],n)},set:function(t){Y.set(this[L],n,t)}},r}function t(n){for(var t=n.length-1;t>=0;t--){var r=n[t][L];if(!r.P)switch(r.t){case 5:u(r)&&R(r);break;case 4:e(r)&&R(r)}}}function e(n){for(var t=n.u,r=n.k,e=T(r),i=e.length-1;i>=0;i--){var u=e[i];if(u!==L){var f=t[u];if(void 0===f&&!o(t,u))return!0;var a=r[u],v=a&&a[L];if(v?v.u!==f:!c(a,f))return!0}}var s=!!t[L];return e.length!==T(t).length+(s?0:1)}function u(n){var t=n.k;if(t.length!==n.u.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}var f={};b("ES5",{J:function(t,r){var e=Array.isArray(t),i=function(t,r){if(t){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,n(i,!0));return e}var u=U(r);delete u[L];for(var o=T(u),f=0;f<o.length;f++){var a=o[f];u[a]=n(a,t||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(r),u)}(e,t),u={t:e?5:4,A:r?r.A:m(),P:!1,R:!1,D:{},p:r,u:t,k:i,i:null,O:!1,I:!1};return Object.defineProperty(i,L,{value:u,writable:!0}),i},M:function(n,e,f){f?r(e)&&e[L].A===n&&t(n.l):(n.o&&function n(t){if(t&&"object"==typeof t){var r=t[L];if(r){var e=r.u,f=r.k,a=r.D,c=r.t;if(4===c)i(f,(function(t){t!==L&&(void 0!==e[t]||o(e,t)?a[t]||n(f[t]):(a[t]=!0,R(r)))})),i(e,(function(n){void 0!==f[n]||o(f,n)||(a[n]=!1,R(r))}));else if(5===c){if(u(r)&&(R(r),a.length=!0),f.length<e.length)for(var v=f.length;v<e.length;v++)a[v]=!1;else for(var s=e.length;s<f.length;s++)a[s]=!0;for(var l=Math.min(f.length,e.length),p=0;p<l;p++)void 0===a[p]&&n(f[p])}}}}(n.l[0]),t(n.l))},N:function(n){return 4===n.t?e(n):u(n)}})}function C(){function n(t){if(!t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(n);if(v(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],n(t[1])]})));if(s(t))return new Set(Array.from(t).map(n));var r=Object.create(Object.getPrototypeOf(t));for(var e in t)r[e]=n(t[e]);return r}function e(t){return r(t)?n(t):t}var a="add";b("Patches",{W:function(r,e){return e.forEach((function(e){for(var i=e.path,o=e.op,c=r,v=0;v<i.length-1;v++)"object"!=typeof(c=f(c,i[v]))&&t(15,i.join("/"));var s=u(c),l=n(e.value),p=i[i.length-1];switch(o){case"replace":switch(s){case 2:return c.set(p,l);case 3:t(16);default:return c[p]=l}case a:switch(s){case 1:return c.splice(p,0,l);case 2:return c.set(p,l);case 3:return c.add(l);default:return c[p]=l}case"remove":switch(s){case 1:return c.splice(p,1);case 2:return c.delete(p);case 3:return c.delete(e.value);default:return delete c[p]}default:t(17,o)}})),r},F:function(n,t,r,u){switch(n.t){case 0:case 4:case 2:return function(n,t,r,u){var c=n.u,v=n.i;i(n.D,(function(n,i){var s=f(c,n),l=f(v,n),p=i?o(c,n)?"replace":a:"remove";if(s!==l||"replace"!==p){var h=t.concat(n);r.push("remove"===p?{op:p,path:h}:{op:p,path:h,value:l}),u.push(p===a?{op:"remove",path:h}:"remove"===p?{op:a,path:h,value:e(s)}:{op:"replace",path:h,value:e(s)})}}))}(n,t,r,u);case 5:case 1:return function(n,t,r,i){var u=n.u,o=n.D,f=n.i;if(f.length<u.length){var c=[f,u];u=c[0],f=c[1];var v=[i,r];r=v[0],i=v[1]}for(var s=0;s<u.length;s++)if(o[s]&&f[s]!==u[s]){var l=t.concat([s]);r.push({op:"replace",path:l,value:e(f[s])}),i.push({op:"replace",path:l,value:e(u[s])})}for(var p=u.length;p<f.length;p++){var h=t.concat([p]);r.push({op:a,path:h,value:e(f[p])})}u.length<f.length&&i.push({op:"replace",path:t.concat(["length"]),value:u.length})}(n,t,r,u);case 3:return function(n,t,r,e){var i=n.u,u=n.i,o=0;i.forEach((function(n){if(!u.has(n)){var i=t.concat([o]);r.push({op:"remove",path:i,value:n}),e.unshift({op:a,path:i,value:n})}o++})),o=0,u.forEach((function(n){if(!i.has(n)){var u=t.concat([o]);r.push({op:a,path:u,value:n}),e.unshift({op:"remove",path:u,value:n})}o++}))}(n,t,r,u)}},g:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.u})}})}function I(){function n(n,t){function r(){this.constructor=n}o(n,t),n.prototype=(r.prototype=t.prototype,new r)}function r(n){n.i||(n.D=new Map,n.i=new Map(n.u))}function i(n){n.i||(n.i=new Set,n.u.forEach((function(t){if(e(t)){var r=F(n.A.h,t,n);n.l.set(t,r),n.i.add(r)}else n.i.add(t)})))}function u(n){n.O&&t(3,JSON.stringify(l(n)))}var o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function t(n,t){return this[L]={t:2,p:t,A:t?t.A:m(),P:!1,R:!1,i:void 0,D:void 0,u:n,k:this,I:!1,O:!1},this}n(t,Map);var i=t.prototype;return Object.defineProperty(i,"size",{get:function(){return l(this[L]).size}}),i.has=function(n){return l(this[L]).has(n)},i.set=function(n,t){var e=this[L];return u(e),l(e).has(n)&&l(e).get(n)===t||(r(e),R(e),e.D.set(n,!0),e.i.set(n,t),e.D.set(n,!0)),this},i.delete=function(n){if(!this.has(n))return!1;var t=this[L];return u(t),r(t),R(t),t.D.set(n,!1),t.i.delete(n),!0},i.clear=function(){var n=this[L];return u(n),r(n),R(n),n.D=new Map,n.i.clear()},i.forEach=function(n,t){var r=this;l(this[L]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},i.get=function(n){var t=this[L];u(t);var i=l(t).get(n);if(t.R||!e(i))return i;if(i!==t.u.get(n))return i;var o=F(t.A.h,i,t);return r(t),t.i.set(n,o),o},i.keys=function(){return l(this[L]).keys()},i.values=function(){var n,t=this,r=this.keys();return(n={})[Q]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},i.entries=function(){var n,t=this,r=this.keys();return(n={})[Q]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},i[Q]=function(){return this.entries()},t}(),a=function(){function t(n,t){return this[L]={t:3,p:t,A:t?t.A:m(),P:!1,R:!1,i:void 0,u:n,k:this,l:new Map,O:!1,I:!1},this}n(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return l(this[L]).size}}),r.has=function(n){var t=this[L];return u(t),t.i?!!t.i.has(n)||!(!t.l.has(n)||!t.i.has(t.l.get(n))):t.u.has(n)},r.add=function(n){var t=this[L];return u(t),this.has(n)||(i(t),R(t),t.i.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[L];return u(t),i(t),R(t),t.i.delete(n)||!!t.l.has(n)&&t.i.delete(t.l.get(n))},r.clear=function(){var n=this[L];return u(n),i(n),R(n),n.i.clear()},r.values=function(){var n=this[L];return u(n),i(n),n.i.values()},r.entries=function(){var n=this[L];return u(n),i(n),n.i.entries()},r.keys=function(){return this.values()},r[Q]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},t}();b("MapSet",{$:function(n,t){return new f(n,t)},C:function(n,t){return new a(n,t)}})}var J,N,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,G=W?Symbol.for("immer-nothing"):((J={})["immer-nothing"]=!0,J),H=W?Symbol.for("immer-draftable"):"__$immer_draftable",L=W?Symbol.for("immer-state"):"__$immer_state",Q="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,U=Object.getOwnPropertyDescriptors||function(n){var t={};return T(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},V={},Y={get:function(n,t){if(t===L)return n;var r=l(n);if(!o(r,t))return function(n,t,r){var e,i=E(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,r,t);var i=r[t];return n.R||!e(i)?i:i===z(n.u,t)?(k(n),n.i[t]=F(n.A.h,i,n)):i},has:function(n,t){return t in l(n)},ownKeys:function(n){return Reflect.ownKeys(l(n))},set:function(n,t,r){var e=E(l(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(n.D[t]=!0,!n.P){if(c(r,z(l(n),t))&&(void 0!==r||o(n.u,t)))return!0;k(n),R(n)}return n.i[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.u,t)||t in n.u?(n.D[t]=!1,k(n),R(n)):delete n.D[t],n.i&&delete n.i[t],!0},getOwnPropertyDescriptor:function(n,t){var r=l(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.t||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){t(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.u)},setPrototypeOf:function(){t(12)}},Z={};i(Y,(function(n,t){Z[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Z.deleteProperty=function(n,t){return Y.deleteProperty.call(this,n[0],t)},Z.set=function(n,t,r){return Y.set.call(this,n[0],t,r,n[0])};var nn=function(){function n(n){this.S=B,this.K=!1,"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=n.prototype;return i.produce=function(n,r,i){if("function"==typeof n&&"function"!=typeof r){var u=r;r=n;var o=this;return function(n){var t=this;void 0===n&&(n=u);for(var e=arguments.length,i=Array(e>1?e-1:0),f=1;f<e;f++)i[f-1]=arguments[f];return o.produce(n,(function(n){var e;return(e=r).call.apply(e,[t,n].concat(i))}))}}var f;if("function"!=typeof r&&t(6),void 0!==i&&"function"!=typeof i&&t(7),e(n)){var a=S(this),c=F(this,n,void 0),v=!0;try{f=r(c),v=!1}finally{v?O(a):w(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(a,i),P(n,a)}),(function(n){throw O(a),n})):(j(a,i),P(f,a))}if(!n||"object"!=typeof n){if((f=r(n))===G)return;return void 0===f&&(f=n),this.K&&h(f,!0),f}t(21,n)},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),u=1;u<r;u++)e[u-1]=arguments[u];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(n){e(n)||t(8),r(n)&&(n=D(n));var i=S(this),u=F(this,n,void 0);return u[L].I=!0,w(i),u},i.finishDraft=function(n,t){var r=(n&&n[L]).A;return j(r,t),P(void 0,r)},i.setAutoFreeze=function(n){this.K=n},i.setUseProxies=function(n){n&&!B&&t(20),this.S=n},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var u=_("Patches").W;return r(n)?u(n,t):this.produce(n,(function(n){return u(n,t.slice(e+1))}))},n}(),tn=new nn,rn=tn.produce,en=tn.produceWithPatches.bind(tn),un=tn.setAutoFreeze.bind(tn),on=tn.setUseProxies.bind(tn),fn=tn.applyPatches.bind(tn),an=tn.createDraft.bind(tn),cn=tn.finishDraft.bind(tn);n.Immer=nn,n.applyPatches=fn,n.castDraft=function(n){return n},n.castImmutable=function(n){return n},n.createDraft=an,n.current=D,n.default=rn,n.enableAllPlugins=function(){$(),I(),C()},n.enableES5=$,n.enableMapSet=I,n.enablePatches=C,n.finishDraft=cn,n.immerable=H,n.isDraft=r,n.isDraftable=e,n.nothing=G,n.original=function(n){return r(n)||t(23,n),n[L].u},n.produce=rn,n.produceWithPatches=en,n.setAutoFreeze=un,n.setUseProxies=on,Object.defineProperty(n,"__esModule",{value:!0})}));


/**
  @license
                                 Apache License
                         Version 2.0, January 2004
                      http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS

 APPENDIX: How to apply the Apache License to your work.

    To apply the Apache License to your work, attach the following
    boilerplate notice, with the fields enclosed by brackets "[]"
    replaced with your own identifying information. (Don't include
    the brackets!)  The text should be enclosed in the appropriate
    comment syntax for the file format. We also recommend that a
    file or class name and description of purpose be included on the
    same "printed page" as the copyright notice for easier
    identification within third-party archives.

 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 

 **/
/**
  @license
                                 Apache License
                         Version 2.0, January 2004
                      http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS

 APPENDIX: How to apply the Apache License to your work.

    To apply the Apache License to your work, attach the following
    boilerplate notice, with the fields enclosed by brackets "[]"
    replaced with your own identifying information. (Don't include
    the brackets!)  The text should be enclosed in the appropriate
    comment syntax for the file format. We also recommend that a
    file or class name and description of purpose be included on the
    same "printed page" as the copyright notice for easier
    identification within third-party archives.

 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 

 **/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('rxjs', ['exports'], factory) :
    (factory((global.rxjs = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function isFunction(x) {
        return typeof x === 'function';
    }

    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = new Error();
                console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                console.log('RxJS: Back to a better error behavior. Thank you. <3');
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    function hostReportError(err) {
        setTimeout(function () { throw err; }, 0);
    }

    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        },
        complete: function () { }
    };

    var isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

    function isObject(x) {
        return x !== null && typeof x === 'object';
    }

    var UnsubscriptionErrorImpl = (function () {
        function UnsubscriptionErrorImpl(errors) {
            Error.call(this);
            this.message = errors ?
                errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
            this.name = 'UnsubscriptionError';
            this.errors = errors;
            return this;
        }
        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
    })();
    var UnsubscriptionError = UnsubscriptionErrorImpl;

    var Subscription = (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (_parentOrParents instanceof Subscription) {
                _parentOrParents.remove(this);
            }
            else if (_parentOrParents !== null) {
                for (var index = 0; index < _parentOrParents.length; ++index) {
                    var parent_1 = _parentOrParents[index];
                    parent_1.remove(this);
                }
            }
            if (isFunction(_unsubscribe)) {
                try {
                    _unsubscribe.call(this);
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                }
            }
            if (isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        try {
                            sub.unsubscribe();
                        }
                        catch (e) {
                            errors = errors || [];
                            if (e instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                            }
                            else {
                                errors.push(e);
                            }
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            var subscription = teardown;
            if (!teardown) {
                return Subscription.EMPTY;
            }
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (!(subscription instanceof Subscription)) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default: {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }
            var _parentOrParents = subscription._parentOrParents;
            if (_parentOrParents === null) {
                subscription._parentOrParents = this;
            }
            else if (_parentOrParents instanceof Subscription) {
                if (_parentOrParents === this) {
                    return subscription;
                }
                subscription._parentOrParents = [_parentOrParents, this];
            }
            else if (_parentOrParents.indexOf(this) === -1) {
                _parentOrParents.push(this);
            }
            else {
                return subscription;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions === null) {
                this._subscriptions = [subscription];
            }
            else {
                subscriptions.push(subscription);
            }
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }

    var rxSubscriber = (function () {
        return typeof Symbol === 'function'
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random();
    })();

    var Subscriber = (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));

    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }

    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }

    var observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

    function identity(x) {
        return x;
    }

    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    function pipeFromArray(fns) {
        if (fns.length === 0) {
            return identity;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }

    var Observable = (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable$$1 = new Observable();
            observable$$1.source = this;
            observable$$1.operator = operator;
            return observable$$1;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                sink.add(operator.call(sink, this.source));
            }
            else {
                sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = config.Promise || Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    var ObjectUnsubscribedErrorImpl = (function () {
        function ObjectUnsubscribedErrorImpl() {
            Error.call(this);
            this.message = 'object unsubscribed';
            this.name = 'ObjectUnsubscribedError';
            return this;
        }
        ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
        return ObjectUnsubscribedErrorImpl;
    })();
    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    var SubjectSubscription = (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));

    var SubjectSubscriber = (function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber));
    var Subject = (function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable));
    var AnonymousSubject = (function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));

    function refCount() {
        return function refCountOperatorFunction(source) {
            return source.lift(new RefCountOperator(source));
        };
    }
    var RefCountOperator = (function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }());
    var RefCountSubscriber = (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    var ConnectableObservable = (function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subjectFactory = subjectFactory;
            _this._refCount = 0;
            _this._isComplete = false;
            return _this;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype.getSubject = function () {
            var subject = this._subject;
            if (!subject || subject.isStopped) {
                this._subject = this.subjectFactory();
            }
            return this._subject;
        };
        ConnectableObservable.prototype.connect = function () {
            var connection = this._connection;
            if (!connection) {
                this._isComplete = false;
                connection = this._connection = new Subscription();
                connection.add(this.source
                    .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
                if (connection.closed) {
                    this._connection = null;
                    connection = Subscription.EMPTY;
                }
            }
            return connection;
        };
        ConnectableObservable.prototype.refCount = function () {
            return refCount()(this);
        };
        return ConnectableObservable;
    }(Observable));
    var connectableObservableDescriptor = (function () {
        var connectableProto = ConnectableObservable.prototype;
        return {
            operator: { value: null },
            _refCount: { value: 0, writable: true },
            _subject: { value: null, writable: true },
            _connection: { value: null, writable: true },
            _subscribe: { value: connectableProto._subscribe },
            _isComplete: { value: connectableProto._isComplete, writable: true },
            getSubject: { value: connectableProto.getSubject },
            connect: { value: connectableProto.connect },
            refCount: { value: connectableProto.refCount }
        };
    })();
    var ConnectableSubscriber = (function (_super) {
        __extends(ConnectableSubscriber, _super);
        function ConnectableSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        ConnectableSubscriber.prototype._error = function (err) {
            this._unsubscribe();
            _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber.prototype._complete = function () {
            this.connectable._isComplete = true;
            this._unsubscribe();
            _super.prototype._complete.call(this);
        };
        ConnectableSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (connectable) {
                this.connectable = null;
                var connection = connectable._connection;
                connectable._refCount = 0;
                connectable._subject = null;
                connectable._connection = null;
                if (connection) {
                    connection.unsubscribe();
                }
            }
        };
        return ConnectableSubscriber;
    }(SubjectSubscriber));
    var RefCountSubscriber$1 = (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount$$1 = connectable._refCount;
            if (refCount$$1 <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount$$1 - 1;
            if (refCount$$1 > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
        return function (source) {
            return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
        };
    }
    var GroupByOperator = (function () {
        function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
            this.keySelector = keySelector;
            this.elementSelector = elementSelector;
            this.durationSelector = durationSelector;
            this.subjectSelector = subjectSelector;
        }
        GroupByOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        };
        return GroupByOperator;
    }());
    var GroupBySubscriber = (function (_super) {
        __extends(GroupBySubscriber, _super);
        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.elementSelector = elementSelector;
            _this.durationSelector = durationSelector;
            _this.subjectSelector = subjectSelector;
            _this.groups = null;
            _this.attemptedToUnsubscribe = false;
            _this.count = 0;
            return _this;
        }
        GroupBySubscriber.prototype._next = function (value) {
            var key;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                this.error(err);
                return;
            }
            this._group(value, key);
        };
        GroupBySubscriber.prototype._group = function (value, key) {
            var groups = this.groups;
            if (!groups) {
                groups = this.groups = new Map();
            }
            var group = groups.get(key);
            var element;
            if (this.elementSelector) {
                try {
                    element = this.elementSelector(value);
                }
                catch (err) {
                    this.error(err);
                }
            }
            else {
                element = value;
            }
            if (!group) {
                group = (this.subjectSelector ? this.subjectSelector() : new Subject());
                groups.set(key, group);
                var groupedObservable = new GroupedObservable(key, group, this);
                this.destination.next(groupedObservable);
                if (this.durationSelector) {
                    var duration = void 0;
                    try {
                        duration = this.durationSelector(new GroupedObservable(key, group));
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                }
            }
            if (!group.closed) {
                group.next(element);
            }
        };
        GroupBySubscriber.prototype._error = function (err) {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.error(err);
                });
                groups.clear();
            }
            this.destination.error(err);
        };
        GroupBySubscriber.prototype._complete = function () {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.complete();
                });
                groups.clear();
            }
            this.destination.complete();
        };
        GroupBySubscriber.prototype.removeGroup = function (key) {
            this.groups.delete(key);
        };
        GroupBySubscriber.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.attemptedToUnsubscribe = true;
                if (this.count === 0) {
                    _super.prototype.unsubscribe.call(this);
                }
            }
        };
        return GroupBySubscriber;
    }(Subscriber));
    var GroupDurationSubscriber = (function (_super) {
        __extends(GroupDurationSubscriber, _super);
        function GroupDurationSubscriber(key, group, parent) {
            var _this = _super.call(this, group) || this;
            _this.key = key;
            _this.group = group;
            _this.parent = parent;
            return _this;
        }
        GroupDurationSubscriber.prototype._next = function (value) {
            this.complete();
        };
        GroupDurationSubscriber.prototype._unsubscribe = function () {
            var _a = this, parent = _a.parent, key = _a.key;
            this.key = this.parent = null;
            if (parent) {
                parent.removeGroup(key);
            }
        };
        return GroupDurationSubscriber;
    }(Subscriber));
    var GroupedObservable = (function (_super) {
        __extends(GroupedObservable, _super);
        function GroupedObservable(key, groupSubject, refCountSubscription) {
            var _this = _super.call(this) || this;
            _this.key = key;
            _this.groupSubject = groupSubject;
            _this.refCountSubscription = refCountSubscription;
            return _this;
        }
        GroupedObservable.prototype._subscribe = function (subscriber) {
            var subscription = new Subscription();
            var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
            if (refCountSubscription && !refCountSubscription.closed) {
                subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }
            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
        };
        return GroupedObservable;
    }(Observable));
    var InnerRefCountSubscription = (function (_super) {
        __extends(InnerRefCountSubscription, _super);
        function InnerRefCountSubscription(parent) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            parent.count++;
            return _this;
        }
        InnerRefCountSubscription.prototype.unsubscribe = function () {
            var parent = this.parent;
            if (!parent.closed && !this.closed) {
                _super.prototype.unsubscribe.call(this);
                parent.count -= 1;
                if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                    parent.unsubscribe();
                }
            }
        };
        return InnerRefCountSubscription;
    }(Subscription));

    var BehaviorSubject = (function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            }
            else if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject));

    var Action = (function (_super) {
        __extends(Action, _super);
        function Action(scheduler, work) {
            return _super.call(this) || this;
        }
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            return this;
        };
        return Action;
    }(Subscription));

    var AsyncAction = (function (_super) {
        __extends(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.pending = false;
            return _this;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            if (this.closed) {
                return this;
            }
            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if (delay !== null && this.delay === delay && this.pending === false) {
                return id;
            }
            clearInterval(id);
            return undefined;
        };
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            }
            else if (this.pending === false && this.id != null) {
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            }
            catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
        };
        return AsyncAction;
    }(Action));

    var QueueAction = (function (_super) {
        __extends(QueueAction, _super);
        function QueueAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        QueueAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            if (delay > 0) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
        };
        QueueAction.prototype.execute = function (state, delay) {
            return (delay > 0 || this.closed) ?
                _super.prototype.execute.call(this, state, delay) :
                this._execute(state, delay);
        };
        QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            return scheduler.flush(this);
        };
        return QueueAction;
    }(AsyncAction));

    var Scheduler = (function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) { now = Scheduler.now; }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) { delay = 0; }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = function () { return Date.now(); };
        return Scheduler;
    }());

    var AsyncScheduler = (function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler(SchedulerAction, now) {
            if (now === void 0) { now = Scheduler.now; }
            var _this = _super.call(this, SchedulerAction, function () {
                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                    return AsyncScheduler.delegate.now();
                }
                else {
                    return now();
                }
            }) || this;
            _this.actions = [];
            _this.active = false;
            _this.scheduled = undefined;
            return _this;
        }
        AsyncScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) { delay = 0; }
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.schedule(work, delay, state);
            }
            else {
                return _super.prototype.schedule.call(this, work, delay, state);
            }
        };
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift());
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler));

    var QueueScheduler = (function (_super) {
        __extends(QueueScheduler, _super);
        function QueueScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueueScheduler;
    }(AsyncScheduler));

    var queueScheduler = new QueueScheduler(QueueAction);
    var queue = queueScheduler;

    var EMPTY = new Observable(function (subscriber) { return subscriber.complete(); });
    function empty$1(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
    }
    function emptyScheduled(scheduler) {
        return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
    }

    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }

    var subscribeToArray = function (array) { return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    }; };

    function scheduleArray(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }

    function fromArray(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToArray(input));
        }
        else {
            return scheduleArray(input, scheduler);
        }
    }

    function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scheduler = args[args.length - 1];
        if (isScheduler(scheduler)) {
            args.pop();
            return scheduleArray(args, scheduler);
        }
        else {
            return fromArray(args);
        }
    }

    function throwError(error, scheduler) {
        if (!scheduler) {
            return new Observable(function (subscriber) { return subscriber.error(error); });
        }
        else {
            return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
        }
    }
    function dispatch(_a) {
        var error = _a.error, subscriber = _a.subscriber;
        subscriber.error(error);
    }

    (function (NotificationKind) {
        NotificationKind["NEXT"] = "N";
        NotificationKind["ERROR"] = "E";
        NotificationKind["COMPLETE"] = "C";
    })(exports.NotificationKind || (exports.NotificationKind = {}));
    var Notification = (function () {
        function Notification(kind, value, error) {
            this.kind = kind;
            this.value = value;
            this.error = error;
            this.hasValue = kind === 'N';
        }
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.error);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.error);
                case 'C':
                    return complete && complete();
            }
        };
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            }
            else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return of(this.value);
                case 'E':
                    return throwError(this.error);
                case 'C':
                    return empty$1();
            }
            throw new Error('unexpected notification kind value');
        };
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return Notification.undefinedValueNotification;
        };
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        Notification.createComplete = function () {
            return Notification.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }());

    function observeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return function observeOnOperatorFunction(source) {
            return source.lift(new ObserveOnOperator(scheduler, delay));
        };
    }
    var ObserveOnOperator = (function () {
        function ObserveOnOperator(scheduler, delay) {
            if (delay === void 0) { delay = 0; }
            this.scheduler = scheduler;
            this.delay = delay;
        }
        ObserveOnOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
        };
        return ObserveOnOperator;
    }());
    var ObserveOnSubscriber = (function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) { delay = 0; }
            var _this = _super.call(this, destination) || this;
            _this.scheduler = scheduler;
            _this.delay = delay;
            return _this;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification, destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            var destination = this.destination;
            destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification.createError(err));
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification.createComplete());
            this.unsubscribe();
        };
        return ObserveOnSubscriber;
    }(Subscriber));
    var ObserveOnMessage = (function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }());

    var ReplaySubject = (function (_super) {
        __extends(ReplaySubject, _super);
        function ReplaySubject(bufferSize, windowTime, scheduler) {
            if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
            if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
            var _this = _super.call(this) || this;
            _this.scheduler = scheduler;
            _this._events = [];
            _this._infiniteTimeWindow = false;
            _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
            _this._windowTime = windowTime < 1 ? 1 : windowTime;
            if (windowTime === Number.POSITIVE_INFINITY) {
                _this._infiniteTimeWindow = true;
                _this.next = _this.nextInfiniteTimeWindow;
            }
            else {
                _this.next = _this.nextTimeWindow;
            }
            return _this;
        }
        ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype.nextTimeWindow = function (value) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype._subscribe = function (subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;
            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.isStopped || this.hasError) {
                subscription = Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                subscription = new SubjectSubscription(this, subscriber);
            }
            if (scheduler) {
                subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
            }
            if (_infiniteTimeWindow) {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i]);
                }
            }
            else {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i].value);
                }
            }
            if (this.hasError) {
                subscriber.error(this.thrownError);
            }
            else if (this.isStopped) {
                subscriber.complete();
            }
            return subscription;
        };
        ReplaySubject.prototype._getNow = function () {
            return (this.scheduler || queue).now();
        };
        ReplaySubject.prototype._trimBufferThenGetEvents = function () {
            var now = this._getNow();
            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;
            while (spliceCount < eventsCount) {
                if ((now - _events[spliceCount].time) < _windowTime) {
                    break;
                }
                spliceCount++;
            }
            if (eventsCount > _bufferSize) {
                spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }
            if (spliceCount > 0) {
                _events.splice(0, spliceCount);
            }
            return _events;
        };
        return ReplaySubject;
    }(Subject));
    var ReplayEvent = (function () {
        function ReplayEvent(time, value) {
            this.time = time;
            this.value = value;
        }
        return ReplayEvent;
    }());

    var AsyncSubject = (function (_super) {
        __extends(AsyncSubject, _super);
        function AsyncSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = null;
            _this.hasNext = false;
            _this.hasCompleted = false;
            return _this;
        }
        AsyncSubject.prototype._subscribe = function (subscriber) {
            if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.hasCompleted && this.hasNext) {
                subscriber.next(this.value);
                subscriber.complete();
                return Subscription.EMPTY;
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        AsyncSubject.prototype.next = function (value) {
            if (!this.hasCompleted) {
                this.value = value;
                this.hasNext = true;
            }
        };
        AsyncSubject.prototype.error = function (error) {
            if (!this.hasCompleted) {
                _super.prototype.error.call(this, error);
            }
        };
        AsyncSubject.prototype.complete = function () {
            this.hasCompleted = true;
            if (this.hasNext) {
                _super.prototype.next.call(this, this.value);
            }
            _super.prototype.complete.call(this);
        };
        return AsyncSubject;
    }(Subject));

    var nextHandle = 1;
    var RESOLVED = (function () { return Promise.resolve(); })();
    var activeHandles = {};
    function findAndClearHandle(handle) {
        if (handle in activeHandles) {
            delete activeHandles[handle];
            return true;
        }
        return false;
    }
    var Immediate = {
        setImmediate: function (cb) {
            var handle = nextHandle++;
            activeHandles[handle] = true;
            RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
            return handle;
        },
        clearImmediate: function (handle) {
            findAndClearHandle(handle);
        },
    };

    var AsapAction = (function (_super) {
        __extends(AsapAction, _super);
        function AsapAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
        };
        AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                Immediate.clearImmediate(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AsapAction;
    }(AsyncAction));

    var AsapScheduler = (function (_super) {
        __extends(AsapScheduler, _super);
        function AsapScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsapScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsapScheduler;
    }(AsyncScheduler));

    var asapScheduler = new AsapScheduler(AsapAction);
    var asap = asapScheduler;

    var asyncScheduler = new AsyncScheduler(AsyncAction);
    var async = asyncScheduler;

    var AnimationFrameAction = (function (_super) {
        __extends(AnimationFrameAction, _super);
        function AnimationFrameAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
        };
        AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                cancelAnimationFrame(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AnimationFrameAction;
    }(AsyncAction));

    var AnimationFrameScheduler = (function (_super) {
        __extends(AnimationFrameScheduler, _super);
        function AnimationFrameScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationFrameScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AnimationFrameScheduler;
    }(AsyncScheduler));

    var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
    var animationFrame = animationFrameScheduler;

    var VirtualTimeScheduler = (function (_super) {
        __extends(VirtualTimeScheduler, _super);
        function VirtualTimeScheduler(SchedulerAction, maxFrames) {
            if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
            if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
            var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
            _this.maxFrames = maxFrames;
            _this.frame = 0;
            _this.index = -1;
            return _this;
        }
        VirtualTimeScheduler.prototype.flush = function () {
            var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
            var error, action;
            while ((action = actions[0]) && action.delay <= maxFrames) {
                actions.shift();
                this.frame = action.delay;
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            }
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        VirtualTimeScheduler.frameTimeFactor = 10;
        return VirtualTimeScheduler;
    }(AsyncScheduler));
    var VirtualAction = (function (_super) {
        __extends(VirtualAction, _super);
        function VirtualAction(scheduler, work, index) {
            if (index === void 0) { index = scheduler.index += 1; }
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.index = index;
            _this.active = true;
            _this.index = scheduler.index = index;
            return _this;
        }
        VirtualAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        };
        VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            this.delay = scheduler.frame + delay;
            var actions = scheduler.actions;
            actions.push(this);
            actions.sort(VirtualAction.sortActions);
            return true;
        };
        VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            return undefined;
        };
        VirtualAction.prototype._execute = function (state, delay) {
            if (this.active === true) {
                return _super.prototype._execute.call(this, state, delay);
            }
        };
        VirtualAction.sortActions = function (a, b) {
            if (a.delay === b.delay) {
                if (a.index === b.index) {
                    return 0;
                }
                else if (a.index > b.index) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else if (a.delay > b.delay) {
                return 1;
            }
            else {
                return -1;
            }
        };
        return VirtualAction;
    }(AsyncAction));

    function noop() { }

    function isObservable(obj) {
        return !!obj && (obj instanceof Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
    }

    var ArgumentOutOfRangeErrorImpl = (function () {
        function ArgumentOutOfRangeErrorImpl() {
            Error.call(this);
            this.message = 'argument out of range';
            this.name = 'ArgumentOutOfRangeError';
            return this;
        }
        ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
        return ArgumentOutOfRangeErrorImpl;
    })();
    var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

    var EmptyErrorImpl = (function () {
        function EmptyErrorImpl() {
            Error.call(this);
            this.message = 'no elements in sequence';
            this.name = 'EmptyError';
            return this;
        }
        EmptyErrorImpl.prototype = Object.create(Error.prototype);
        return EmptyErrorImpl;
    })();
    var EmptyError = EmptyErrorImpl;

    var TimeoutErrorImpl = (function () {
        function TimeoutErrorImpl() {
            Error.call(this);
            this.message = 'Timeout has occurred';
            this.name = 'TimeoutError';
            return this;
        }
        TimeoutErrorImpl.prototype = Object.create(Error.prototype);
        return TimeoutErrorImpl;
    })();
    var TimeoutError = TimeoutErrorImpl;

    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var MapOperator = (function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    var MapSubscriber = (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));

    function bindCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
            if (isScheduler(resultSelector)) {
                scheduler = resultSelector;
            }
            else {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
                };
            }
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this;
            var subject;
            var params = {
                context: context,
                subject: subject,
                callbackFunc: callbackFunc,
                scheduler: scheduler,
            };
            return new Observable(function (subscriber) {
                if (!scheduler) {
                    if (!subject) {
                        subject = new AsyncSubject();
                        var handler = function () {
                            var innerArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                innerArgs[_i] = arguments[_i];
                            }
                            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                            subject.complete();
                        };
                        try {
                            callbackFunc.apply(context, args.concat([handler]));
                        }
                        catch (err) {
                            if (canReportError(subject)) {
                                subject.error(err);
                            }
                            else {
                                console.warn(err);
                            }
                        }
                    }
                    return subject.subscribe(subscriber);
                }
                else {
                    var state = {
                        args: args, subscriber: subscriber, params: params,
                    };
                    return scheduler.schedule(dispatch$1, 0, state);
                }
            });
        };
    }
    function dispatch$1(state) {
        var _this = this;
        var args = state.args, subscriber = state.subscriber, params = state.params;
        var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
        var subject = params.subject;
        if (!subject) {
            subject = params.subject = new AsyncSubject();
            var handler = function () {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i] = arguments[_i];
                }
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            };
            try {
                callbackFunc.apply(context, args.concat([handler]));
            }
            catch (err) {
                subject.error(err);
            }
        }
        this.add(subject.subscribe(subscriber));
    }
    function dispatchNext(state) {
        var value = state.value, subject = state.subject;
        subject.next(value);
        subject.complete();
    }

    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
            if (isScheduler(resultSelector)) {
                scheduler = resultSelector;
            }
            else {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
                };
            }
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var params = {
                subject: undefined,
                args: args,
                callbackFunc: callbackFunc,
                scheduler: scheduler,
                context: this,
            };
            return new Observable(function (subscriber) {
                var context = params.context;
                var subject = params.subject;
                if (!scheduler) {
                    if (!subject) {
                        subject = params.subject = new AsyncSubject();
                        var handler = function () {
                            var innerArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                innerArgs[_i] = arguments[_i];
                            }
                            var err = innerArgs.shift();
                            if (err) {
                                subject.error(err);
                                return;
                            }
                            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                            subject.complete();
                        };
                        try {
                            callbackFunc.apply(context, args.concat([handler]));
                        }
                        catch (err) {
                            if (canReportError(subject)) {
                                subject.error(err);
                            }
                            else {
                                console.warn(err);
                            }
                        }
                    }
                    return subject.subscribe(subscriber);
                }
                else {
                    return scheduler.schedule(dispatch$2, 0, { params: params, subscriber: subscriber, context: context });
                }
            });
        };
    }
    function dispatch$2(state) {
        var _this = this;
        var params = state.params, subscriber = state.subscriber, context = state.context;
        var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
        var subject = params.subject;
        if (!subject) {
            subject = params.subject = new AsyncSubject();
            var handler = function () {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i] = arguments[_i];
                }
                var err = innerArgs.shift();
                if (err) {
                    _this.add(scheduler.schedule(dispatchError$1, 0, { err: err, subject: subject }));
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    _this.add(scheduler.schedule(dispatchNext$1, 0, { value: value, subject: subject }));
                }
            };
            try {
                callbackFunc.apply(context, args.concat([handler]));
            }
            catch (err) {
                this.add(scheduler.schedule(dispatchError$1, 0, { err: err, subject: subject }));
            }
        }
        this.add(subject.subscribe(subscriber));
    }
    function dispatchNext$1(arg) {
        var value = arg.value, subject = arg.subject;
        subject.next(value);
        subject.complete();
    }
    function dispatchError$1(arg) {
        var err = arg.err, subject = arg.subject;
        subject.error(err);
    }

    var OuterSubscriber = (function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber));

    var InnerSubscriber = (function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.outerValue = outerValue;
            _this.outerIndex = outerIndex;
            _this.index = 0;
            return _this;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber));

    var subscribeToPromise = function (promise) { return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    }; };

    function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
            return '@@iterator';
        }
        return Symbol.iterator;
    }
    var iterator = getSymbolIterator();

    var subscribeToIterable = function (iterable) { return function (subscriber) {
        var iterator$$1 = iterable[iterator]();
        do {
            var item = void 0;
            try {
                item = iterator$$1.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator$$1.return === 'function') {
            subscriber.add(function () {
                if (iterator$$1.return) {
                    iterator$$1.return();
                }
            });
        }
        return subscriber;
    }; };

    var subscribeToObservable = function (obj) { return function (subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    }; };

    var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

    function isPromise(value) {
        return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    var subscribeTo = function (result) {
        if (!!result && typeof result[observable] === 'function') {
            return subscribeToObservable(result);
        }
        else if (isArrayLike(result)) {
            return subscribeToArray(result);
        }
        else if (isPromise(result)) {
            return subscribeToPromise(result);
        }
        else if (!!result && typeof result[iterator] === 'function') {
            return subscribeToIterable(result);
        }
        else {
            var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected."
                + ' You can provide an Observable, Promise, Array, or Iterable.';
            throw new TypeError(msg);
        }
    };

    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
        if (innerSubscriber === void 0) { innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
        if (innerSubscriber.closed) {
            return undefined;
        }
        if (result instanceof Observable) {
            return result.subscribe(innerSubscriber);
        }
        return subscribeTo(result)(innerSubscriber);
    }

    var NONE = {};
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var resultSelector = null;
        var scheduler = null;
        if (isScheduler(observables[observables.length - 1])) {
            scheduler = observables.pop();
        }
        if (typeof observables[observables.length - 1] === 'function') {
            resultSelector = observables.pop();
        }
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
    }
    var CombineLatestOperator = (function () {
        function CombineLatestOperator(resultSelector) {
            this.resultSelector = resultSelector;
        }
        CombineLatestOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
        };
        return CombineLatestOperator;
    }());
    var CombineLatestSubscriber = (function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, resultSelector) {
            var _this = _super.call(this, destination) || this;
            _this.resultSelector = resultSelector;
            _this.active = 0;
            _this.values = [];
            _this.observables = [];
            return _this;
        }
        CombineLatestSubscriber.prototype._next = function (observable) {
            this.values.push(NONE);
            this.observables.push(observable);
        };
        CombineLatestSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                this.active = len;
                this.toRespond = len;
                for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(subscribeToResult(this, observable, observable, i));
                }
            }
        };
        CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond
                ? 0
                : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;
            if (toRespond === 0) {
                if (this.resultSelector) {
                    this._tryResultSelector(values);
                }
                else {
                    this.destination.next(values.slice());
                }
            }
        };
        CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
            var result;
            try {
                result = this.resultSelector.apply(this, values);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return CombineLatestSubscriber;
    }(OuterSubscriber));

    function scheduleObservable(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () {
                var observable$$1 = input[observable]();
                sub.add(observable$$1.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }

    function schedulePromise(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () { return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            }); }));
            return sub;
        });
    }

    function scheduleIterable(input, scheduler) {
        if (!input) {
            throw new Error('Iterable cannot be null');
        }
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var iterator$$1;
            sub.add(function () {
                if (iterator$$1 && typeof iterator$$1.return === 'function') {
                    iterator$$1.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator$$1 = input[iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator$$1.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }

    function isInteropObservable(input) {
        return input && typeof input[observable] === 'function';
    }

    function isIterable(input) {
        return input && typeof input[iterator] === 'function';
    }

    function scheduled(input, scheduler) {
        if (input != null) {
            if (isInteropObservable(input)) {
                return scheduleObservable(input, scheduler);
            }
            else if (isPromise(input)) {
                return schedulePromise(input, scheduler);
            }
            else if (isArrayLike(input)) {
                return scheduleArray(input, scheduler);
            }
            else if (isIterable(input) || typeof input === 'string') {
                return scheduleIterable(input, scheduler);
            }
        }
        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    }

    function from(input, scheduler) {
        if (!scheduler) {
            if (input instanceof Observable) {
                return input;
            }
            return new Observable(subscribeTo(input));
        }
        else {
            return scheduled(input, scheduler);
        }
    }

    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        if (typeof resultSelector === 'function') {
            return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
        }
        else if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
        }
        return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
    }
    var MergeMapOperator = (function () {
        function MergeMapOperator(project, concurrent) {
            if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
            this.project = project;
            this.concurrent = concurrent;
        }
        MergeMapOperator.prototype.call = function (observer, source) {
            return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
        };
        return MergeMapOperator;
    }());
    var MergeMapSubscriber = (function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, concurrent) {
            if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, value, index);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = subscribeToResult(this, ish, undefined, undefined, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                destination.add(innerSubscription);
            }
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber));
    var flatMap = mergeMap;

    function mergeAll(concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        return mergeMap(identity, concurrent);
    }

    function concatAll() {
        return mergeAll(1);
    }

    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return concatAll()(of.apply(void 0, observables));
    }

    function defer(observableFactory) {
        return new Observable(function (subscriber) {
            var input;
            try {
                input = observableFactory();
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var source = input ? from(input) : empty$1();
            return source.subscribe(subscriber);
        });
    }

    function forkJoin() {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        if (sources.length === 1) {
            var first_1 = sources[0];
            if (isArray(first_1)) {
                return forkJoinInternal(first_1, null);
            }
            if (isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
                var keys = Object.keys(first_1);
                return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
            }
        }
        if (typeof sources[sources.length - 1] === 'function') {
            var resultSelector_1 = sources.pop();
            sources = (sources.length === 1 && isArray(sources[0])) ? sources[0] : sources;
            return forkJoinInternal(sources, null).pipe(map(function (args) { return resultSelector_1.apply(void 0, args); }));
        }
        return forkJoinInternal(sources, null);
    }
    function forkJoinInternal(sources, keys) {
        return new Observable(function (subscriber) {
            var len = sources.length;
            if (len === 0) {
                subscriber.complete();
                return;
            }
            var values = new Array(len);
            var completed = 0;
            var emitted = 0;
            var _loop_1 = function (i) {
                var source = from(sources[i]);
                var hasValue = false;
                subscriber.add(source.subscribe({
                    next: function (value) {
                        if (!hasValue) {
                            hasValue = true;
                            emitted++;
                        }
                        values[i] = value;
                    },
                    error: function (err) { return subscriber.error(err); },
                    complete: function () {
                        completed++;
                        if (completed === len || !hasValue) {
                            if (emitted === len) {
                                subscriber.next(keys ?
                                    keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                    values);
                            }
                            subscriber.complete();
                        }
                    }
                }));
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
        });
    }

    function fromEvent(target, eventName, options, resultSelector) {
        if (isFunction(options)) {
            resultSelector = options;
            options = undefined;
        }
        if (resultSelector) {
            return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
        }
        return new Observable(function (subscriber) {
            function handler(e) {
                if (arguments.length > 1) {
                    subscriber.next(Array.prototype.slice.call(arguments));
                }
                else {
                    subscriber.next(e);
                }
            }
            setupSubscription(target, eventName, handler, subscriber, options);
        });
    }
    function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else if (sourceObj && sourceObj.length) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(unsubscribe);
    }
    function isNodeStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isEventTarget(sourceObj) {
        return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }

    function fromEventPattern(addHandler, removeHandler, resultSelector) {
        if (resultSelector) {
            return fromEventPattern(addHandler, removeHandler).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
        }
        return new Observable(function (subscriber) {
            var handler = function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                return subscriber.next(e.length === 1 ? e[0] : e);
            };
            var retValue;
            try {
                retValue = addHandler(handler);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            if (!isFunction(removeHandler)) {
                return undefined;
            }
            return function () { return removeHandler(handler, retValue); };
        });
    }

    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        var resultSelector;
        var initialState;
        if (arguments.length == 1) {
            var options = initialStateOrOptions;
            initialState = options.initialState;
            condition = options.condition;
            iterate = options.iterate;
            resultSelector = options.resultSelector || identity;
            scheduler = options.scheduler;
        }
        else if (resultSelectorOrObservable === undefined || isScheduler(resultSelectorOrObservable)) {
            initialState = initialStateOrOptions;
            resultSelector = identity;
            scheduler = resultSelectorOrObservable;
        }
        else {
            initialState = initialStateOrOptions;
            resultSelector = resultSelectorOrObservable;
        }
        return new Observable(function (subscriber) {
            var state = initialState;
            if (scheduler) {
                return scheduler.schedule(dispatch$3, 0, {
                    subscriber: subscriber,
                    iterate: iterate,
                    condition: condition,
                    resultSelector: resultSelector,
                    state: state
                });
            }
            do {
                if (condition) {
                    var conditionResult = void 0;
                    try {
                        conditionResult = condition(state);
                    }
                    catch (err) {
                        subscriber.error(err);
                        return undefined;
                    }
                    if (!conditionResult) {
                        subscriber.complete();
                        break;
                    }
                }
                var value = void 0;
                try {
                    value = resultSelector(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                subscriber.next(value);
                if (subscriber.closed) {
                    break;
                }
                try {
                    state = iterate(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
            } while (true);
            return undefined;
        });
    }
    function dispatch$3(state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return undefined;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            if (!conditionResult) {
                subscriber.complete();
                return undefined;
            }
            if (subscriber.closed) {
                return undefined;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return undefined;
        }
        return this.schedule(state);
    }

    function iif(condition, trueResult, falseResult) {
        if (trueResult === void 0) { trueResult = EMPTY; }
        if (falseResult === void 0) { falseResult = EMPTY; }
        return defer(function () { return condition() ? trueResult : falseResult; });
    }

    function isNumeric(val) {
        return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
    }

    function interval(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async; }
        if (!isNumeric(period) || period < 0) {
            period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            scheduler = async;
        }
        return new Observable(function (subscriber) {
            subscriber.add(scheduler.schedule(dispatch$4, period, { subscriber: subscriber, counter: 0, period: period }));
            return subscriber;
        });
    }
    function dispatch$4(state) {
        var subscriber = state.subscriber, counter = state.counter, period = state.period;
        subscriber.next(counter);
        this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
    }

    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = null;
        var last = observables[observables.length - 1];
        if (isScheduler(last)) {
            scheduler = observables.pop();
            if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
            }
        }
        else if (typeof last === 'number') {
            concurrent = observables.pop();
        }
        if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
            return observables[0];
        }
        return mergeAll(concurrent)(fromArray(observables, scheduler));
    }

    var NEVER = new Observable(noop);
    function never() {
        return NEVER;
    }

    function onErrorResumeNext() {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        if (sources.length === 0) {
            return EMPTY;
        }
        var first = sources[0], remainder = sources.slice(1);
        if (sources.length === 1 && isArray(first)) {
            return onErrorResumeNext.apply(void 0, first);
        }
        return new Observable(function (subscriber) {
            var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
            return from(first).subscribe({
                next: function (value) { subscriber.next(value); },
                error: subNext,
                complete: subNext,
            });
        });
    }

    function pairs(obj, scheduler) {
        if (!scheduler) {
            return new Observable(function (subscriber) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                    var key = keys[i];
                    if (obj.hasOwnProperty(key)) {
                        subscriber.next([key, obj[key]]);
                    }
                }
                subscriber.complete();
            });
        }
        else {
            return new Observable(function (subscriber) {
                var keys = Object.keys(obj);
                var subscription = new Subscription();
                subscription.add(scheduler.schedule(dispatch$5, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
                return subscription;
            });
        }
    }
    function dispatch$5(state) {
        var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
        if (!subscriber.closed) {
            if (index < keys.length) {
                var key = keys[index];
                subscriber.next([key, obj[key]]);
                subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
            }
            else {
                subscriber.complete();
            }
        }
    }

    function not(pred, thisArg) {
        function notPred() {
            return !(notPred.pred.apply(notPred.thisArg, arguments));
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }

    function filter(predicate, thisArg) {
        return function filterOperatorFunction(source) {
            return source.lift(new FilterOperator(predicate, thisArg));
        };
    }
    var FilterOperator = (function () {
        function FilterOperator(predicate, thisArg) {
            this.predicate = predicate;
            this.thisArg = thisArg;
        }
        FilterOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator;
    }());
    var FilterSubscriber = (function (_super) {
        __extends(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.count = 0;
            return _this;
        }
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber));

    function partition(source, predicate, thisArg) {
        return [
            filter(predicate, thisArg)(new Observable(subscribeTo(source))),
            filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))
        ];
    }

    function race() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        if (observables.length === 1) {
            if (isArray(observables[0])) {
                observables = observables[0];
            }
            else {
                return observables[0];
            }
        }
        return fromArray(observables, undefined).lift(new RaceOperator());
    }
    var RaceOperator = (function () {
        function RaceOperator() {
        }
        RaceOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RaceSubscriber(subscriber));
        };
        return RaceOperator;
    }());
    var RaceSubscriber = (function (_super) {
        __extends(RaceSubscriber, _super);
        function RaceSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasFirst = false;
            _this.observables = [];
            _this.subscriptions = [];
            return _this;
        }
        RaceSubscriber.prototype._next = function (observable) {
            this.observables.push(observable);
        };
        RaceSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                for (var i = 0; i < len && !this.hasFirst; i++) {
                    var observable = observables[i];
                    var subscription = subscribeToResult(this, observable, observable, i);
                    if (this.subscriptions) {
                        this.subscriptions.push(subscription);
                    }
                    this.add(subscription);
                }
                this.observables = null;
            }
        };
        RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (!this.hasFirst) {
                this.hasFirst = true;
                for (var i = 0; i < this.subscriptions.length; i++) {
                    if (i !== outerIndex) {
                        var subscription = this.subscriptions[i];
                        subscription.unsubscribe();
                        this.remove(subscription);
                    }
                }
                this.subscriptions = null;
            }
            this.destination.next(innerValue);
        };
        return RaceSubscriber;
    }(OuterSubscriber));

    function range(start, count, scheduler) {
        if (start === void 0) { start = 0; }
        return new Observable(function (subscriber) {
            if (count === undefined) {
                count = start;
                start = 0;
            }
            var index = 0;
            var current = start;
            if (scheduler) {
                return scheduler.schedule(dispatch$6, 0, {
                    index: index, count: count, start: start, subscriber: subscriber
                });
            }
            else {
                do {
                    if (index++ >= count) {
                        subscriber.complete();
                        break;
                    }
                    subscriber.next(current++);
                    if (subscriber.closed) {
                        break;
                    }
                } while (true);
            }
            return undefined;
        });
    }
    function dispatch$6(state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    }

    function timer(dueTime, periodOrScheduler, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        var period = -1;
        if (isNumeric(periodOrScheduler)) {
            period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        }
        else if (isScheduler(periodOrScheduler)) {
            scheduler = periodOrScheduler;
        }
        if (!isScheduler(scheduler)) {
            scheduler = async;
        }
        return new Observable(function (subscriber) {
            var due = isNumeric(dueTime)
                ? dueTime
                : (+dueTime - scheduler.now());
            return scheduler.schedule(dispatch$7, due, {
                index: 0, period: period, subscriber: subscriber
            });
        });
    }
    function dispatch$7(state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        this.schedule(state, period);
    }

    function using(resourceFactory, observableFactory) {
        return new Observable(function (subscriber) {
            var resource;
            try {
                resource = resourceFactory();
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var result;
            try {
                result = observableFactory(resource);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var source = result ? from(result) : EMPTY;
            var subscription = source.subscribe(subscriber);
            return function () {
                subscription.unsubscribe();
                if (resource) {
                    resource.unsubscribe();
                }
            };
        });
    }

    function zip() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var resultSelector = observables[observables.length - 1];
        if (typeof resultSelector === 'function') {
            observables.pop();
        }
        return fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
    }
    var ZipOperator = (function () {
        function ZipOperator(resultSelector) {
            this.resultSelector = resultSelector;
        }
        ZipOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
        };
        return ZipOperator;
    }());
    var ZipSubscriber = (function (_super) {
        __extends(ZipSubscriber, _super);
        function ZipSubscriber(destination, resultSelector, values) {
            if (values === void 0) { values = Object.create(null); }
            var _this = _super.call(this, destination) || this;
            _this.iterators = [];
            _this.active = 0;
            _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
            _this.values = values;
            return _this;
        }
        ZipSubscriber.prototype._next = function (value) {
            var iterators = this.iterators;
            if (isArray(value)) {
                iterators.push(new StaticArrayIterator(value));
            }
            else if (typeof value[iterator] === 'function') {
                iterators.push(new StaticIterator(value[iterator]()));
            }
            else {
                iterators.push(new ZipBufferIterator(this.destination, this, value));
            }
        };
        ZipSubscriber.prototype._complete = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            this.unsubscribe();
            if (len === 0) {
                this.destination.complete();
                return;
            }
            this.active = len;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (iterator$$1.stillUnsubscribed) {
                    var destination = this.destination;
                    destination.add(iterator$$1.subscribe(iterator$$1, i));
                }
                else {
                    this.active--;
                }
            }
        };
        ZipSubscriber.prototype.notifyInactive = function () {
            this.active--;
            if (this.active === 0) {
                this.destination.complete();
            }
        };
        ZipSubscriber.prototype.checkIterators = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            var destination = this.destination;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (typeof iterator$$1.hasValue === 'function' && !iterator$$1.hasValue()) {
                    return;
                }
            }
            var shouldComplete = false;
            var args = [];
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                var result = iterator$$1.next();
                if (iterator$$1.hasCompleted()) {
                    shouldComplete = true;
                }
                if (result.done) {
                    destination.complete();
                    return;
                }
                args.push(result.value);
            }
            if (this.resultSelector) {
                this._tryresultSelector(args);
            }
            else {
                destination.next(args);
            }
            if (shouldComplete) {
                destination.complete();
            }
        };
        ZipSubscriber.prototype._tryresultSelector = function (args) {
            var result;
            try {
                result = this.resultSelector.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return ZipSubscriber;
    }(Subscriber));
    var StaticIterator = (function () {
        function StaticIterator(iterator$$1) {
            this.iterator = iterator$$1;
            this.nextResult = iterator$$1.next();
        }
        StaticIterator.prototype.hasValue = function () {
            return true;
        };
        StaticIterator.prototype.next = function () {
            var result = this.nextResult;
            this.nextResult = this.iterator.next();
            return result;
        };
        StaticIterator.prototype.hasCompleted = function () {
            var nextResult = this.nextResult;
            return nextResult && nextResult.done;
        };
        return StaticIterator;
    }());
    var StaticArrayIterator = (function () {
        function StaticArrayIterator(array) {
            this.array = array;
            this.index = 0;
            this.length = 0;
            this.length = array.length;
        }
        StaticArrayIterator.prototype[iterator] = function () {
            return this;
        };
        StaticArrayIterator.prototype.next = function (value) {
            var i = this.index++;
            var array = this.array;
            return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
        };
        StaticArrayIterator.prototype.hasValue = function () {
            return this.array.length > this.index;
        };
        StaticArrayIterator.prototype.hasCompleted = function () {
            return this.array.length === this.index;
        };
        return StaticArrayIterator;
    }());
    var ZipBufferIterator = (function (_super) {
        __extends(ZipBufferIterator, _super);
        function ZipBufferIterator(destination, parent, observable) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            _this.observable = observable;
            _this.stillUnsubscribed = true;
            _this.buffer = [];
            _this.isComplete = false;
            return _this;
        }
        ZipBufferIterator.prototype[iterator] = function () {
            return this;
        };
        ZipBufferIterator.prototype.next = function () {
            var buffer = this.buffer;
            if (buffer.length === 0 && this.isComplete) {
                return { value: null, done: true };
            }
            else {
                return { value: buffer.shift(), done: false };
            }
        };
        ZipBufferIterator.prototype.hasValue = function () {
            return this.buffer.length > 0;
        };
        ZipBufferIterator.prototype.hasCompleted = function () {
            return this.buffer.length === 0 && this.isComplete;
        };
        ZipBufferIterator.prototype.notifyComplete = function () {
            if (this.buffer.length > 0) {
                this.isComplete = true;
                this.parent.notifyInactive();
            }
            else {
                this.destination.complete();
            }
        };
        ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.buffer.push(innerValue);
            this.parent.checkIterators();
        };
        ZipBufferIterator.prototype.subscribe = function (value, index) {
            return subscribeToResult(this, this.observable, this, index);
        };
        return ZipBufferIterator;
    }(OuterSubscriber));

    function audit(durationSelector) {
        return function auditOperatorFunction(source) {
            return source.lift(new AuditOperator(durationSelector));
        };
    }
    var AuditOperator = (function () {
        function AuditOperator(durationSelector) {
            this.durationSelector = durationSelector;
        }
        AuditOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
        };
        return AuditOperator;
    }());
    var AuditSubscriber = (function (_super) {
        __extends(AuditSubscriber, _super);
        function AuditSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            return _this;
        }
        AuditSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
            if (!this.throttled) {
                var duration = void 0;
                try {
                    var durationSelector = this.durationSelector;
                    duration = durationSelector(value);
                }
                catch (err) {
                    return this.destination.error(err);
                }
                var innerSubscription = subscribeToResult(this, duration);
                if (!innerSubscription || innerSubscription.closed) {
                    this.clearThrottle();
                }
                else {
                    this.add(this.throttled = innerSubscription);
                }
            }
        };
        AuditSubscriber.prototype.clearThrottle = function () {
            var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
            if (throttled) {
                this.remove(throttled);
                this.throttled = null;
                throttled.unsubscribe();
            }
            if (hasValue) {
                this.value = null;
                this.hasValue = false;
                this.destination.next(value);
            }
        };
        AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
            this.clearThrottle();
        };
        AuditSubscriber.prototype.notifyComplete = function () {
            this.clearThrottle();
        };
        return AuditSubscriber;
    }(OuterSubscriber));

    function auditTime(duration, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return audit(function () { return timer(duration, scheduler); });
    }

    function buffer(closingNotifier) {
        return function bufferOperatorFunction(source) {
            return source.lift(new BufferOperator(closingNotifier));
        };
    }
    var BufferOperator = (function () {
        function BufferOperator(closingNotifier) {
            this.closingNotifier = closingNotifier;
        }
        BufferOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
        };
        return BufferOperator;
    }());
    var BufferSubscriber = (function (_super) {
        __extends(BufferSubscriber, _super);
        function BufferSubscriber(destination, closingNotifier) {
            var _this = _super.call(this, destination) || this;
            _this.buffer = [];
            _this.add(subscribeToResult(_this, closingNotifier));
            return _this;
        }
        BufferSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var buffer = this.buffer;
            this.buffer = [];
            this.destination.next(buffer);
        };
        return BufferSubscriber;
    }(OuterSubscriber));

    function bufferCount(bufferSize, startBufferEvery) {
        if (startBufferEvery === void 0) { startBufferEvery = null; }
        return function bufferCountOperatorFunction(source) {
            return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
        };
    }
    var BufferCountOperator = (function () {
        function BufferCountOperator(bufferSize, startBufferEvery) {
            this.bufferSize = bufferSize;
            this.startBufferEvery = startBufferEvery;
            if (!startBufferEvery || bufferSize === startBufferEvery) {
                this.subscriberClass = BufferCountSubscriber;
            }
            else {
                this.subscriberClass = BufferSkipCountSubscriber;
            }
        }
        BufferCountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
        };
        return BufferCountOperator;
    }());
    var BufferCountSubscriber = (function (_super) {
        __extends(BufferCountSubscriber, _super);
        function BufferCountSubscriber(destination, bufferSize) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.buffer = [];
            return _this;
        }
        BufferCountSubscriber.prototype._next = function (value) {
            var buffer = this.buffer;
            buffer.push(value);
            if (buffer.length == this.bufferSize) {
                this.destination.next(buffer);
                this.buffer = [];
            }
        };
        BufferCountSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer.length > 0) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        return BufferCountSubscriber;
    }(Subscriber));
    var BufferSkipCountSubscriber = (function (_super) {
        __extends(BufferSkipCountSubscriber, _super);
        function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.startBufferEvery = startBufferEvery;
            _this.buffers = [];
            _this.count = 0;
            return _this;
        }
        BufferSkipCountSubscriber.prototype._next = function (value) {
            var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
            this.count++;
            if (count % startBufferEvery === 0) {
                buffers.push([]);
            }
            for (var i = buffers.length; i--;) {
                var buffer = buffers[i];
                buffer.push(value);
                if (buffer.length === bufferSize) {
                    buffers.splice(i, 1);
                    this.destination.next(buffer);
                }
            }
        };
        BufferSkipCountSubscriber.prototype._complete = function () {
            var _a = this, buffers = _a.buffers, destination = _a.destination;
            while (buffers.length > 0) {
                var buffer = buffers.shift();
                if (buffer.length > 0) {
                    destination.next(buffer);
                }
            }
            _super.prototype._complete.call(this);
        };
        return BufferSkipCountSubscriber;
    }(Subscriber));

    function bufferTime(bufferTimeSpan) {
        var length = arguments.length;
        var scheduler = async;
        if (isScheduler(arguments[arguments.length - 1])) {
            scheduler = arguments[arguments.length - 1];
            length--;
        }
        var bufferCreationInterval = null;
        if (length >= 2) {
            bufferCreationInterval = arguments[1];
        }
        var maxBufferSize = Number.POSITIVE_INFINITY;
        if (length >= 3) {
            maxBufferSize = arguments[2];
        }
        return function bufferTimeOperatorFunction(source) {
            return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
        };
    }
    var BufferTimeOperator = (function () {
        function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            this.bufferTimeSpan = bufferTimeSpan;
            this.bufferCreationInterval = bufferCreationInterval;
            this.maxBufferSize = maxBufferSize;
            this.scheduler = scheduler;
        }
        BufferTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
        };
        return BufferTimeOperator;
    }());
    var Context = (function () {
        function Context() {
            this.buffer = [];
        }
        return Context;
    }());
    var BufferTimeSubscriber = (function (_super) {
        __extends(BufferTimeSubscriber, _super);
        function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.bufferTimeSpan = bufferTimeSpan;
            _this.bufferCreationInterval = bufferCreationInterval;
            _this.maxBufferSize = maxBufferSize;
            _this.scheduler = scheduler;
            _this.contexts = [];
            var context = _this.openContext();
            _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
            if (_this.timespanOnly) {
                var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
            else {
                var closeState = { subscriber: _this, context: context };
                var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
            }
            return _this;
        }
        BufferTimeSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            var filledBufferContext;
            for (var i = 0; i < len; i++) {
                var context_1 = contexts[i];
                var buffer = context_1.buffer;
                buffer.push(value);
                if (buffer.length == this.maxBufferSize) {
                    filledBufferContext = context_1;
                }
            }
            if (filledBufferContext) {
                this.onBufferFull(filledBufferContext);
            }
        };
        BufferTimeSubscriber.prototype._error = function (err) {
            this.contexts.length = 0;
            _super.prototype._error.call(this, err);
        };
        BufferTimeSubscriber.prototype._complete = function () {
            var _a = this, contexts = _a.contexts, destination = _a.destination;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                destination.next(context_2.buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferTimeSubscriber.prototype._unsubscribe = function () {
            this.contexts = null;
        };
        BufferTimeSubscriber.prototype.onBufferFull = function (context) {
            this.closeContext(context);
            var closeAction = context.closeAction;
            closeAction.unsubscribe();
            this.remove(closeAction);
            if (!this.closed && this.timespanOnly) {
                context = this.openContext();
                var bufferTimeSpan = this.bufferTimeSpan;
                var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
                this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
        };
        BufferTimeSubscriber.prototype.openContext = function () {
            var context = new Context();
            this.contexts.push(context);
            return context;
        };
        BufferTimeSubscriber.prototype.closeContext = function (context) {
            this.destination.next(context.buffer);
            var contexts = this.contexts;
            var spliceIndex = contexts ? contexts.indexOf(context) : -1;
            if (spliceIndex >= 0) {
                contexts.splice(contexts.indexOf(context), 1);
            }
        };
        return BufferTimeSubscriber;
    }(Subscriber));
    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevContext = state.context;
        if (prevContext) {
            subscriber.closeContext(prevContext);
        }
        if (!subscriber.closed) {
            state.context = subscriber.openContext();
            state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
        }
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
        var context = subscriber.openContext();
        var action = this;
        if (!subscriber.closed) {
            subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
            action.schedule(state, bufferCreationInterval);
        }
    }
    function dispatchBufferClose(arg) {
        var subscriber = arg.subscriber, context = arg.context;
        subscriber.closeContext(context);
    }

    function bufferToggle(openings, closingSelector) {
        return function bufferToggleOperatorFunction(source) {
            return source.lift(new BufferToggleOperator(openings, closingSelector));
        };
    }
    var BufferToggleOperator = (function () {
        function BufferToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        BufferToggleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
        };
        return BufferToggleOperator;
    }());
    var BufferToggleSubscriber = (function (_super) {
        __extends(BufferToggleSubscriber, _super);
        function BufferToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(subscribeToResult(_this, openings));
            return _this;
        }
        BufferToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].buffer.push(value);
            }
        };
        BufferToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_1 = contexts.shift();
                context_1.subscription.unsubscribe();
                context_1.buffer = null;
                context_1.subscription = null;
            }
            this.contexts = null;
            _super.prototype._error.call(this, err);
        };
        BufferToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                this.destination.next(context_2.buffer);
                context_2.subscription.unsubscribe();
                context_2.buffer = null;
                context_2.subscription = null;
            }
            this.contexts = null;
            _super.prototype._complete.call(this);
        };
        BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
        };
        BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
            this.closeBuffer(innerSub.context);
        };
        BufferToggleSubscriber.prototype.openBuffer = function (value) {
            try {
                var closingSelector = this.closingSelector;
                var closingNotifier = closingSelector.call(this, value);
                if (closingNotifier) {
                    this.trySubscribe(closingNotifier);
                }
            }
            catch (err) {
                this._error(err);
            }
        };
        BufferToggleSubscriber.prototype.closeBuffer = function (context) {
            var contexts = this.contexts;
            if (contexts && context) {
                var buffer = context.buffer, subscription = context.subscription;
                this.destination.next(buffer);
                contexts.splice(contexts.indexOf(context), 1);
                this.remove(subscription);
                subscription.unsubscribe();
            }
        };
        BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
            var contexts = this.contexts;
            var buffer = [];
            var subscription = new Subscription();
            var context = { buffer: buffer, subscription: subscription };
            contexts.push(context);
            var innerSubscription = subscribeToResult(this, closingNotifier, context);
            if (!innerSubscription || innerSubscription.closed) {
                this.closeBuffer(context);
            }
            else {
                innerSubscription.context = context;
                this.add(innerSubscription);
                subscription.add(innerSubscription);
            }
        };
        return BufferToggleSubscriber;
    }(OuterSubscriber));

    function bufferWhen(closingSelector) {
        return function (source) {
            return source.lift(new BufferWhenOperator(closingSelector));
        };
    }
    var BufferWhenOperator = (function () {
        function BufferWhenOperator(closingSelector) {
            this.closingSelector = closingSelector;
        }
        BufferWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
        };
        return BufferWhenOperator;
    }());
    var BufferWhenSubscriber = (function (_super) {
        __extends(BufferWhenSubscriber, _super);
        function BufferWhenSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.closingSelector = closingSelector;
            _this.subscribing = false;
            _this.openBuffer();
            return _this;
        }
        BufferWhenSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferWhenSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferWhenSubscriber.prototype._unsubscribe = function () {
            this.buffer = null;
            this.subscribing = false;
        };
        BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openBuffer();
        };
        BufferWhenSubscriber.prototype.notifyComplete = function () {
            if (this.subscribing) {
                this.complete();
            }
            else {
                this.openBuffer();
            }
        };
        BufferWhenSubscriber.prototype.openBuffer = function () {
            var closingSubscription = this.closingSubscription;
            if (closingSubscription) {
                this.remove(closingSubscription);
                closingSubscription.unsubscribe();
            }
            var buffer = this.buffer;
            if (this.buffer) {
                this.destination.next(buffer);
            }
            this.buffer = [];
            var closingNotifier;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector();
            }
            catch (err) {
                return this.error(err);
            }
            closingSubscription = new Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        };
        return BufferWhenSubscriber;
    }(OuterSubscriber));

    function catchError(selector) {
        return function catchErrorOperatorFunction(source) {
            var operator = new CatchOperator(selector);
            var caught = source.lift(operator);
            return (operator.caught = caught);
        };
    }
    var CatchOperator = (function () {
        function CatchOperator(selector) {
            this.selector = selector;
        }
        CatchOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
        };
        return CatchOperator;
    }());
    var CatchSubscriber = (function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            var _this = _super.call(this, destination) || this;
            _this.selector = selector;
            _this.caught = caught;
            return _this;
        }
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                }
                catch (err2) {
                    _super.prototype.error.call(this, err2);
                    return;
                }
                this._unsubscribeAndRecycle();
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                this.add(innerSubscriber);
                var innerSubscription = subscribeToResult(this, result, undefined, undefined, innerSubscriber);
                if (innerSubscription !== innerSubscriber) {
                    this.add(innerSubscription);
                }
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber));

    function combineAll(project) {
        return function (source) { return source.lift(new CombineLatestOperator(project)); };
    }

    function combineLatest$1() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var project = null;
        if (typeof observables[observables.length - 1] === 'function') {
            project = observables.pop();
        }
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0].slice();
        }
        return function (source) { return source.lift.call(from([source].concat(observables)), new CombineLatestOperator(project)); };
    }

    function concat$1() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function (source) { return source.lift.call(concat.apply(void 0, [source].concat(observables))); };
    }

    function concatMap(project, resultSelector) {
        return mergeMap(project, resultSelector, 1);
    }

    function concatMapTo(innerObservable, resultSelector) {
        return concatMap(function () { return innerObservable; }, resultSelector);
    }

    function count(predicate) {
        return function (source) { return source.lift(new CountOperator(predicate, source)); };
    }
    var CountOperator = (function () {
        function CountOperator(predicate, source) {
            this.predicate = predicate;
            this.source = source;
        }
        CountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
        };
        return CountOperator;
    }());
    var CountSubscriber = (function (_super) {
        __extends(CountSubscriber, _super);
        function CountSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.count = 0;
            _this.index = 0;
            return _this;
        }
        CountSubscriber.prototype._next = function (value) {
            if (this.predicate) {
                this._tryPredicate(value);
            }
            else {
                this.count++;
            }
        };
        CountSubscriber.prototype._tryPredicate = function (value) {
            var result;
            try {
                result = this.predicate(value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.count++;
            }
        };
        CountSubscriber.prototype._complete = function () {
            this.destination.next(this.count);
            this.destination.complete();
        };
        return CountSubscriber;
    }(Subscriber));

    function debounce(durationSelector) {
        return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
    }
    var DebounceOperator = (function () {
        function DebounceOperator(durationSelector) {
            this.durationSelector = durationSelector;
        }
        DebounceOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
        };
        return DebounceOperator;
    }());
    var DebounceSubscriber = (function (_super) {
        __extends(DebounceSubscriber, _super);
        function DebounceSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            _this.durationSubscription = null;
            return _this;
        }
        DebounceSubscriber.prototype._next = function (value) {
            try {
                var result = this.durationSelector.call(this, value);
                if (result) {
                    this._tryNext(value, result);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DebounceSubscriber.prototype._complete = function () {
            this.emitValue();
            this.destination.complete();
        };
        DebounceSubscriber.prototype._tryNext = function (value, duration) {
            var subscription = this.durationSubscription;
            this.value = value;
            this.hasValue = true;
            if (subscription) {
                subscription.unsubscribe();
                this.remove(subscription);
            }
            subscription = subscribeToResult(this, duration);
            if (subscription && !subscription.closed) {
                this.add(this.durationSubscription = subscription);
            }
        };
        DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        DebounceSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        DebounceSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                var value = this.value;
                var subscription = this.durationSubscription;
                if (subscription) {
                    this.durationSubscription = null;
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
                this.value = null;
                this.hasValue = false;
                _super.prototype._next.call(this, value);
            }
        };
        return DebounceSubscriber;
    }(OuterSubscriber));

    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
    }
    var DebounceTimeOperator = (function () {
        function DebounceTimeOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
        };
        return DebounceTimeOperator;
    }());
    var DebounceTimeSubscriber = (function (_super) {
        __extends(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.dueTime = dueTime;
            _this.scheduler = scheduler;
            _this.debouncedSubscription = null;
            _this.lastValue = null;
            _this.hasValue = false;
            return _this;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$2, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                var lastValue = this.lastValue;
                this.lastValue = null;
                this.hasValue = false;
                this.destination.next(lastValue);
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber));
    function dispatchNext$2(subscriber) {
        subscriber.debouncedNext();
    }

    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
    }
    var DefaultIfEmptyOperator = (function () {
        function DefaultIfEmptyOperator(defaultValue) {
            this.defaultValue = defaultValue;
        }
        DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
        };
        return DefaultIfEmptyOperator;
    }());
    var DefaultIfEmptySubscriber = (function (_super) {
        __extends(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            var _this = _super.call(this, destination) || this;
            _this.defaultValue = defaultValue;
            _this.isEmpty = true;
            return _this;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber));

    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }

    function delay(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        var absoluteDelay = isDate(delay);
        var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
        return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
    }
    var DelayOperator = (function () {
        function DelayOperator(delay, scheduler) {
            this.delay = delay;
            this.scheduler = scheduler;
        }
        DelayOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
        };
        return DelayOperator;
    }());
    var DelaySubscriber = (function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.delay = delay;
            _this.scheduler = scheduler;
            _this.queue = [];
            _this.active = false;
            _this.errored = false;
            return _this;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            }
            else {
                this.unsubscribe();
                source.active = false;
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            var destination = this.destination;
            destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        DelaySubscriber.prototype.scheduleNotification = function (notification) {
            if (this.errored === true) {
                return;
            }
            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._next = function (value) {
            this.scheduleNotification(Notification.createNext(value));
        };
        DelaySubscriber.prototype._error = function (err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
            this.unsubscribe();
        };
        DelaySubscriber.prototype._complete = function () {
            this.scheduleNotification(Notification.createComplete());
            this.unsubscribe();
        };
        return DelaySubscriber;
    }(Subscriber));
    var DelayMessage = (function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    }());

    function delayWhen(delayDurationSelector, subscriptionDelay) {
        if (subscriptionDelay) {
            return function (source) {
                return new SubscriptionDelayObservable(source, subscriptionDelay)
                    .lift(new DelayWhenOperator(delayDurationSelector));
            };
        }
        return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
    }
    var DelayWhenOperator = (function () {
        function DelayWhenOperator(delayDurationSelector) {
            this.delayDurationSelector = delayDurationSelector;
        }
        DelayWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
        };
        return DelayWhenOperator;
    }());
    var DelayWhenSubscriber = (function (_super) {
        __extends(DelayWhenSubscriber, _super);
        function DelayWhenSubscriber(destination, delayDurationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.delayDurationSelector = delayDurationSelector;
            _this.completed = false;
            _this.delayNotifierSubscriptions = [];
            _this.index = 0;
            return _this;
        }
        DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(outerValue);
            this.removeSubscription(innerSub);
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            var value = this.removeSubscription(innerSub);
            if (value) {
                this.destination.next(value);
            }
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype._next = function (value) {
            var index = this.index++;
            try {
                var delayNotifier = this.delayDurationSelector(value, index);
                if (delayNotifier) {
                    this.tryDelay(delayNotifier, value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DelayWhenSubscriber.prototype._complete = function () {
            this.completed = true;
            this.tryComplete();
            this.unsubscribe();
        };
        DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
            subscription.unsubscribe();
            var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
            if (subscriptionIdx !== -1) {
                this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            }
            return subscription.outerValue;
        };
        DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
            var notifierSubscription = subscribeToResult(this, delayNotifier, value);
            if (notifierSubscription && !notifierSubscription.closed) {
                var destination = this.destination;
                destination.add(notifierSubscription);
                this.delayNotifierSubscriptions.push(notifierSubscription);
            }
        };
        DelayWhenSubscriber.prototype.tryComplete = function () {
            if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                this.destination.complete();
            }
        };
        return DelayWhenSubscriber;
    }(OuterSubscriber));
    var SubscriptionDelayObservable = (function (_super) {
        __extends(SubscriptionDelayObservable, _super);
        function SubscriptionDelayObservable(source, subscriptionDelay) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subscriptionDelay = subscriptionDelay;
            return _this;
        }
        SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
            this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
        };
        return SubscriptionDelayObservable;
    }(Observable));
    var SubscriptionDelaySubscriber = (function (_super) {
        __extends(SubscriptionDelaySubscriber, _super);
        function SubscriptionDelaySubscriber(parent, source) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.source = source;
            _this.sourceSubscribed = false;
            return _this;
        }
        SubscriptionDelaySubscriber.prototype._next = function (unused) {
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype._error = function (err) {
            this.unsubscribe();
            this.parent.error(err);
        };
        SubscriptionDelaySubscriber.prototype._complete = function () {
            this.unsubscribe();
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
            if (!this.sourceSubscribed) {
                this.sourceSubscribed = true;
                this.unsubscribe();
                this.source.subscribe(this.parent);
            }
        };
        return SubscriptionDelaySubscriber;
    }(Subscriber));

    function dematerialize() {
        return function dematerializeOperatorFunction(source) {
            return source.lift(new DeMaterializeOperator());
        };
    }
    var DeMaterializeOperator = (function () {
        function DeMaterializeOperator() {
        }
        DeMaterializeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DeMaterializeSubscriber(subscriber));
        };
        return DeMaterializeOperator;
    }());
    var DeMaterializeSubscriber = (function (_super) {
        __extends(DeMaterializeSubscriber, _super);
        function DeMaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        DeMaterializeSubscriber.prototype._next = function (value) {
            value.observe(this.destination);
        };
        return DeMaterializeSubscriber;
    }(Subscriber));

    function distinct(keySelector, flushes) {
        return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
    }
    var DistinctOperator = (function () {
        function DistinctOperator(keySelector, flushes) {
            this.keySelector = keySelector;
            this.flushes = flushes;
        }
        DistinctOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
        };
        return DistinctOperator;
    }());
    var DistinctSubscriber = (function (_super) {
        __extends(DistinctSubscriber, _super);
        function DistinctSubscriber(destination, keySelector, flushes) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.values = new Set();
            if (flushes) {
                _this.add(subscribeToResult(_this, flushes));
            }
            return _this;
        }
        DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values.clear();
        };
        DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DistinctSubscriber.prototype._next = function (value) {
            if (this.keySelector) {
                this._useKeySelector(value);
            }
            else {
                this._finalizeNext(value, value);
            }
        };
        DistinctSubscriber.prototype._useKeySelector = function (value) {
            var key;
            var destination = this.destination;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this._finalizeNext(key, value);
        };
        DistinctSubscriber.prototype._finalizeNext = function (key, value) {
            var values = this.values;
            if (!values.has(key)) {
                values.add(key);
                this.destination.next(value);
            }
        };
        return DistinctSubscriber;
    }(OuterSubscriber));

    function distinctUntilChanged(compare, keySelector) {
        return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
    }
    var DistinctUntilChangedOperator = (function () {
        function DistinctUntilChangedOperator(compare, keySelector) {
            this.compare = compare;
            this.keySelector = keySelector;
        }
        DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
        };
        return DistinctUntilChangedOperator;
    }());
    var DistinctUntilChangedSubscriber = (function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.hasKey = false;
            if (typeof compare === 'function') {
                _this.compare = compare;
            }
            return _this;
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (value) {
            var key;
            try {
                var keySelector = this.keySelector;
                key = keySelector ? keySelector(value) : value;
            }
            catch (err) {
                return this.destination.error(err);
            }
            var result = false;
            if (this.hasKey) {
                try {
                    var compare = this.compare;
                    result = compare(this.key, key);
                }
                catch (err) {
                    return this.destination.error(err);
                }
            }
            else {
                this.hasKey = true;
            }
            if (!result) {
                this.key = key;
                this.destination.next(value);
            }
        };
        return DistinctUntilChangedSubscriber;
    }(Subscriber));

    function distinctUntilKeyChanged(key, compare) {
        return distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
    }

    function throwIfEmpty(errorFactory) {
        if (errorFactory === void 0) { errorFactory = defaultErrorFactory; }
        return function (source) {
            return source.lift(new ThrowIfEmptyOperator(errorFactory));
        };
    }
    var ThrowIfEmptyOperator = (function () {
        function ThrowIfEmptyOperator(errorFactory) {
            this.errorFactory = errorFactory;
        }
        ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
        };
        return ThrowIfEmptyOperator;
    }());
    var ThrowIfEmptySubscriber = (function (_super) {
        __extends(ThrowIfEmptySubscriber, _super);
        function ThrowIfEmptySubscriber(destination, errorFactory) {
            var _this = _super.call(this, destination) || this;
            _this.errorFactory = errorFactory;
            _this.hasValue = false;
            return _this;
        }
        ThrowIfEmptySubscriber.prototype._next = function (value) {
            this.hasValue = true;
            this.destination.next(value);
        };
        ThrowIfEmptySubscriber.prototype._complete = function () {
            if (!this.hasValue) {
                var err = void 0;
                try {
                    err = this.errorFactory();
                }
                catch (e) {
                    err = e;
                }
                this.destination.error(err);
            }
            else {
                return this.destination.complete();
            }
        };
        return ThrowIfEmptySubscriber;
    }(Subscriber));
    function defaultErrorFactory() {
        return new EmptyError();
    }

    function take(count) {
        return function (source) {
            if (count === 0) {
                return empty$1();
            }
            else {
                return source.lift(new TakeOperator(count));
            }
        };
    }
    var TakeOperator = (function () {
        function TakeOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        TakeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeSubscriber(subscriber, this.total));
        };
        return TakeOperator;
    }());
    var TakeSubscriber = (function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        TakeSubscriber.prototype._next = function (value) {
            var total = this.total;
            var count = ++this.count;
            if (count <= total) {
                this.destination.next(value);
                if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                }
            }
        };
        return TakeSubscriber;
    }(Subscriber));

    function elementAt(index, defaultValue) {
        if (index < 0) {
            throw new ArgumentOutOfRangeError();
        }
        var hasDefaultValue = arguments.length >= 2;
        return function (source) { return source.pipe(filter(function (v, i) { return i === index; }), take(1), hasDefaultValue
            ? defaultIfEmpty(defaultValue)
            : throwIfEmpty(function () { return new ArgumentOutOfRangeError(); })); };
    }

    function endWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return function (source) { return concat(source, of.apply(void 0, array)); };
    }

    function every(predicate, thisArg) {
        return function (source) { return source.lift(new EveryOperator(predicate, thisArg, source)); };
    }
    var EveryOperator = (function () {
        function EveryOperator(predicate, thisArg, source) {
            this.predicate = predicate;
            this.thisArg = thisArg;
            this.source = source;
        }
        EveryOperator.prototype.call = function (observer, source) {
            return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
        };
        return EveryOperator;
    }());
    var EverySubscriber = (function (_super) {
        __extends(EverySubscriber, _super);
        function EverySubscriber(destination, predicate, thisArg, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.source = source;
            _this.index = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
            this.destination.next(everyValueMatch);
            this.destination.complete();
        };
        EverySubscriber.prototype._next = function (value) {
            var result = false;
            try {
                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (!result) {
                this.notifyComplete(false);
            }
        };
        EverySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return EverySubscriber;
    }(Subscriber));

    function exhaust() {
        return function (source) { return source.lift(new SwitchFirstOperator()); };
    }
    var SwitchFirstOperator = (function () {
        function SwitchFirstOperator() {
        }
        SwitchFirstOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SwitchFirstSubscriber(subscriber));
        };
        return SwitchFirstOperator;
    }());
    var SwitchFirstSubscriber = (function (_super) {
        __extends(SwitchFirstSubscriber, _super);
        function SwitchFirstSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasCompleted = false;
            _this.hasSubscription = false;
            return _this;
        }
        SwitchFirstSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.hasSubscription = true;
                this.add(subscribeToResult(this, value));
            }
        };
        SwitchFirstSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
        };
        SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return SwitchFirstSubscriber;
    }(OuterSubscriber));

    function exhaustMap(project, resultSelector) {
        if (resultSelector) {
            return function (source) { return source.pipe(exhaustMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
        }
        return function (source) {
            return source.lift(new ExhaustMapOperator(project));
        };
    }
    var ExhaustMapOperator = (function () {
        function ExhaustMapOperator(project) {
            this.project = project;
        }
        ExhaustMapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
        };
        return ExhaustMapOperator;
    }());
    var ExhaustMapSubscriber = (function (_super) {
        __extends(ExhaustMapSubscriber, _super);
        function ExhaustMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.hasSubscription = false;
            _this.hasCompleted = false;
            _this.index = 0;
            return _this;
        }
        ExhaustMapSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.tryNext(value);
            }
        };
        ExhaustMapSubscriber.prototype.tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.hasSubscription = true;
            this._innerSub(result, value, index);
        };
        ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscriber = new InnerSubscriber(this, value, index);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = subscribeToResult(this, result, undefined, undefined, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                destination.add(innerSubscription);
            }
        };
        ExhaustMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        ExhaustMapSubscriber.prototype.notifyError = function (err) {
            this.destination.error(err);
        };
        ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return ExhaustMapSubscriber;
    }(OuterSubscriber));

    function expand(project, concurrent, scheduler) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        if (scheduler === void 0) { scheduler = undefined; }
        concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
        return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
    }
    var ExpandOperator = (function () {
        function ExpandOperator(project, concurrent, scheduler) {
            this.project = project;
            this.concurrent = concurrent;
            this.scheduler = scheduler;
        }
        ExpandOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
        };
        return ExpandOperator;
    }());
    var ExpandSubscriber = (function (_super) {
        __extends(ExpandSubscriber, _super);
        function ExpandSubscriber(destination, project, concurrent, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.scheduler = scheduler;
            _this.index = 0;
            _this.active = 0;
            _this.hasCompleted = false;
            if (concurrent < Number.POSITIVE_INFINITY) {
                _this.buffer = [];
            }
            return _this;
        }
        ExpandSubscriber.dispatch = function (arg) {
            var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
            subscriber.subscribeToProjection(result, value, index);
        };
        ExpandSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (destination.closed) {
                this._complete();
                return;
            }
            var index = this.index++;
            if (this.active < this.concurrent) {
                destination.next(value);
                try {
                    var project = this.project;
                    var result = project(value, index);
                    if (!this.scheduler) {
                        this.subscribeToProjection(result, value, index);
                    }
                    else {
                        var state = { subscriber: this, result: result, value: value, index: index };
                        var destination_1 = this.destination;
                        destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                    }
                }
                catch (e) {
                    destination.error(e);
                }
            }
            else {
                this.buffer.push(value);
            }
        };
        ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
            this.active++;
            var destination = this.destination;
            destination.add(subscribeToResult(this, result, value, index));
        };
        ExpandSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this._next(innerValue);
        };
        ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer && buffer.length > 0) {
                this._next(buffer.shift());
            }
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
        };
        return ExpandSubscriber;
    }(OuterSubscriber));

    function finalize(callback) {
        return function (source) { return source.lift(new FinallyOperator(callback)); };
    }
    var FinallyOperator = (function () {
        function FinallyOperator(callback) {
            this.callback = callback;
        }
        FinallyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FinallySubscriber(subscriber, this.callback));
        };
        return FinallyOperator;
    }());
    var FinallySubscriber = (function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            _this.add(new Subscription(callback));
            return _this;
        }
        return FinallySubscriber;
    }(Subscriber));

    function find(predicate, thisArg) {
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate is not a function');
        }
        return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
    }
    var FindValueOperator = (function () {
        function FindValueOperator(predicate, source, yieldIndex, thisArg) {
            this.predicate = predicate;
            this.source = source;
            this.yieldIndex = yieldIndex;
            this.thisArg = thisArg;
        }
        FindValueOperator.prototype.call = function (observer, source) {
            return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
        };
        return FindValueOperator;
    }());
    var FindValueSubscriber = (function (_super) {
        __extends(FindValueSubscriber, _super);
        function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.yieldIndex = yieldIndex;
            _this.thisArg = thisArg;
            _this.index = 0;
            return _this;
        }
        FindValueSubscriber.prototype.notifyComplete = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
            this.unsubscribe();
        };
        FindValueSubscriber.prototype._next = function (value) {
            var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
            var index = this.index++;
            try {
                var result = predicate.call(thisArg || this, value, index, this.source);
                if (result) {
                    this.notifyComplete(this.yieldIndex ? index : value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        FindValueSubscriber.prototype._complete = function () {
            this.notifyComplete(this.yieldIndex ? -1 : undefined);
        };
        return FindValueSubscriber;
    }(Subscriber));

    function findIndex(predicate, thisArg) {
        return function (source) { return source.lift(new FindValueOperator(predicate, source, true, thisArg)); };
    }

    function first(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
    }

    function ignoreElements() {
        return function ignoreElementsOperatorFunction(source) {
            return source.lift(new IgnoreElementsOperator());
        };
    }
    var IgnoreElementsOperator = (function () {
        function IgnoreElementsOperator() {
        }
        IgnoreElementsOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new IgnoreElementsSubscriber(subscriber));
        };
        return IgnoreElementsOperator;
    }());
    var IgnoreElementsSubscriber = (function (_super) {
        __extends(IgnoreElementsSubscriber, _super);
        function IgnoreElementsSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IgnoreElementsSubscriber.prototype._next = function (unused) {
        };
        return IgnoreElementsSubscriber;
    }(Subscriber));

    function isEmpty() {
        return function (source) { return source.lift(new IsEmptyOperator()); };
    }
    var IsEmptyOperator = (function () {
        function IsEmptyOperator() {
        }
        IsEmptyOperator.prototype.call = function (observer, source) {
            return source.subscribe(new IsEmptySubscriber(observer));
        };
        return IsEmptyOperator;
    }());
    var IsEmptySubscriber = (function (_super) {
        __extends(IsEmptySubscriber, _super);
        function IsEmptySubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
            var destination = this.destination;
            destination.next(isEmpty);
            destination.complete();
        };
        IsEmptySubscriber.prototype._next = function (value) {
            this.notifyComplete(false);
        };
        IsEmptySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return IsEmptySubscriber;
    }(Subscriber));

    function takeLast(count) {
        return function takeLastOperatorFunction(source) {
            if (count === 0) {
                return empty$1();
            }
            else {
                return source.lift(new TakeLastOperator(count));
            }
        };
    }
    var TakeLastOperator = (function () {
        function TakeLastOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        TakeLastOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
        };
        return TakeLastOperator;
    }());
    var TakeLastSubscriber = (function (_super) {
        __extends(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.ring = new Array();
            _this.count = 0;
            return _this;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            }
            else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = (count++) % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber));

    function last(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
    }

    function mapTo(value) {
        return function (source) { return source.lift(new MapToOperator(value)); };
    }
    var MapToOperator = (function () {
        function MapToOperator(value) {
            this.value = value;
        }
        MapToOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapToSubscriber(subscriber, this.value));
        };
        return MapToOperator;
    }());
    var MapToSubscriber = (function (_super) {
        __extends(MapToSubscriber, _super);
        function MapToSubscriber(destination, value) {
            var _this = _super.call(this, destination) || this;
            _this.value = value;
            return _this;
        }
        MapToSubscriber.prototype._next = function (x) {
            this.destination.next(this.value);
        };
        return MapToSubscriber;
    }(Subscriber));

    function materialize() {
        return function materializeOperatorFunction(source) {
            return source.lift(new MaterializeOperator());
        };
    }
    var MaterializeOperator = (function () {
        function MaterializeOperator() {
        }
        MaterializeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MaterializeSubscriber(subscriber));
        };
        return MaterializeOperator;
    }());
    var MaterializeSubscriber = (function (_super) {
        __extends(MaterializeSubscriber, _super);
        function MaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        MaterializeSubscriber.prototype._next = function (value) {
            this.destination.next(Notification.createNext(value));
        };
        MaterializeSubscriber.prototype._error = function (err) {
            var destination = this.destination;
            destination.next(Notification.createError(err));
            destination.complete();
        };
        MaterializeSubscriber.prototype._complete = function () {
            var destination = this.destination;
            destination.next(Notification.createComplete());
            destination.complete();
        };
        return MaterializeSubscriber;
    }(Subscriber));

    function scan(accumulator, seed) {
        var hasSeed = false;
        if (arguments.length >= 2) {
            hasSeed = true;
        }
        return function scanOperatorFunction(source) {
            return source.lift(new ScanOperator(accumulator, seed, hasSeed));
        };
    }
    var ScanOperator = (function () {
        function ScanOperator(accumulator, seed, hasSeed) {
            if (hasSeed === void 0) { hasSeed = false; }
            this.accumulator = accumulator;
            this.seed = seed;
            this.hasSeed = hasSeed;
        }
        ScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
        };
        return ScanOperator;
    }());
    var ScanSubscriber = (function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this._seed = _seed;
            _this.hasSeed = hasSeed;
            _this.index = 0;
            return _this;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            }
            else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            }
            catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber));

    function reduce(accumulator, seed) {
        if (arguments.length >= 2) {
            return function reduceOperatorFunctionWithSeed(source) {
                return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
            };
        }
        return function reduceOperatorFunction(source) {
            return pipe(scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast(1))(source);
        };
    }

    function max(comparer) {
        var max = (typeof comparer === 'function')
            ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
            : function (x, y) { return x > y ? x : y; };
        return reduce(max);
    }

    function merge$1() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function (source) { return source.lift.call(merge.apply(void 0, [source].concat(observables))); };
    }

    function mergeMapTo(innerObservable, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        if (typeof resultSelector === 'function') {
            return mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
        }
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
        }
        return mergeMap(function () { return innerObservable; }, concurrent);
    }

    function mergeScan(accumulator, seed, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
    }
    var MergeScanOperator = (function () {
        function MergeScanOperator(accumulator, seed, concurrent) {
            this.accumulator = accumulator;
            this.seed = seed;
            this.concurrent = concurrent;
        }
        MergeScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
        };
        return MergeScanOperator;
    }());
    var MergeScanSubscriber = (function (_super) {
        __extends(MergeScanSubscriber, _super);
        function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this.acc = acc;
            _this.concurrent = concurrent;
            _this.hasValue = false;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeScanSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                var index = this.index++;
                var destination = this.destination;
                var ish = void 0;
                try {
                    var accumulator = this.accumulator;
                    ish = accumulator(this.acc, value, index);
                }
                catch (e) {
                    return destination.error(e);
                }
                this.active++;
                this._innerSub(ish, value, index);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, value, index);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = subscribeToResult(this, ish, undefined, undefined, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                destination.add(innerSubscription);
            }
        };
        MergeScanSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var destination = this.destination;
            this.acc = innerValue;
            this.hasValue = true;
            destination.next(innerValue);
        };
        MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
        };
        return MergeScanSubscriber;
    }(OuterSubscriber));

    function min(comparer) {
        var min = (typeof comparer === 'function')
            ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
            : function (x, y) { return x < y ? x : y; };
        return reduce(min);
    }

    function multicast(subjectOrSubjectFactory, selector) {
        return function multicastOperatorFunction(source) {
            var subjectFactory;
            if (typeof subjectOrSubjectFactory === 'function') {
                subjectFactory = subjectOrSubjectFactory;
            }
            else {
                subjectFactory = function subjectFactory() {
                    return subjectOrSubjectFactory;
                };
            }
            if (typeof selector === 'function') {
                return source.lift(new MulticastOperator(subjectFactory, selector));
            }
            var connectable = Object.create(source, connectableObservableDescriptor);
            connectable.source = source;
            connectable.subjectFactory = subjectFactory;
            return connectable;
        };
    }
    var MulticastOperator = (function () {
        function MulticastOperator(subjectFactory, selector) {
            this.subjectFactory = subjectFactory;
            this.selector = selector;
        }
        MulticastOperator.prototype.call = function (subscriber, source) {
            var selector = this.selector;
            var subject = this.subjectFactory();
            var subscription = selector(subject).subscribe(subscriber);
            subscription.add(source.subscribe(subject));
            return subscription;
        };
        return MulticastOperator;
    }());

    function onErrorResumeNext$1() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i] = arguments[_i];
        }
        if (nextSources.length === 1 && isArray(nextSources[0])) {
            nextSources = nextSources[0];
        }
        return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
    }
    var OnErrorResumeNextOperator = (function () {
        function OnErrorResumeNextOperator(nextSources) {
            this.nextSources = nextSources;
        }
        OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
        };
        return OnErrorResumeNextOperator;
    }());
    var OnErrorResumeNextSubscriber = (function (_super) {
        __extends(OnErrorResumeNextSubscriber, _super);
        function OnErrorResumeNextSubscriber(destination, nextSources) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.nextSources = nextSources;
            return _this;
        }
        OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype._error = function (err) {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype._complete = function () {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
            var next = this.nextSources.shift();
            if (!!next) {
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                var destination = this.destination;
                destination.add(innerSubscriber);
                var innerSubscription = subscribeToResult(this, next, undefined, undefined, innerSubscriber);
                if (innerSubscription !== innerSubscriber) {
                    destination.add(innerSubscription);
                }
            }
            else {
                this.destination.complete();
            }
        };
        return OnErrorResumeNextSubscriber;
    }(OuterSubscriber));

    function pairwise() {
        return function (source) { return source.lift(new PairwiseOperator()); };
    }
    var PairwiseOperator = (function () {
        function PairwiseOperator() {
        }
        PairwiseOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new PairwiseSubscriber(subscriber));
        };
        return PairwiseOperator;
    }());
    var PairwiseSubscriber = (function (_super) {
        __extends(PairwiseSubscriber, _super);
        function PairwiseSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasPrev = false;
            return _this;
        }
        PairwiseSubscriber.prototype._next = function (value) {
            var pair;
            if (this.hasPrev) {
                pair = [this.prev, value];
            }
            else {
                this.hasPrev = true;
            }
            this.prev = value;
            if (pair) {
                this.destination.next(pair);
            }
        };
        return PairwiseSubscriber;
    }(Subscriber));

    function partition$1(predicate, thisArg) {
        return function (source) { return [
            filter(predicate, thisArg)(source),
            filter(not(predicate, thisArg))(source)
        ]; };
    }

    function pluck() {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        var length = properties.length;
        if (length === 0) {
            throw new Error('list of properties cannot be empty.');
        }
        return function (source) { return map(plucker(properties, length))(source); };
    }
    function plucker(props, length) {
        var mapper = function (x) {
            var currentProp = x;
            for (var i = 0; i < length; i++) {
                var p = currentProp != null ? currentProp[props[i]] : undefined;
                if (p !== void 0) {
                    currentProp = p;
                }
                else {
                    return undefined;
                }
            }
            return currentProp;
        };
        return mapper;
    }

    function publish(selector) {
        return selector ?
            multicast(function () { return new Subject(); }, selector) :
            multicast(new Subject());
    }

    function publishBehavior(value) {
        return function (source) { return multicast(new BehaviorSubject(value))(source); };
    }

    function publishLast() {
        return function (source) { return multicast(new AsyncSubject())(source); };
    }

    function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
        if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
            scheduler = selectorOrScheduler;
        }
        var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
        var subject = new ReplaySubject(bufferSize, windowTime, scheduler);
        return function (source) { return multicast(function () { return subject; }, selector)(source); };
    }

    function race$1() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function raceOperatorFunction(source) {
            if (observables.length === 1 && isArray(observables[0])) {
                observables = observables[0];
            }
            return source.lift.call(race.apply(void 0, [source].concat(observables)));
        };
    }

    function repeat(count) {
        if (count === void 0) { count = -1; }
        return function (source) {
            if (count === 0) {
                return empty$1();
            }
            else if (count < 0) {
                return source.lift(new RepeatOperator(-1, source));
            }
            else {
                return source.lift(new RepeatOperator(count - 1, source));
            }
        };
    }
    var RepeatOperator = (function () {
        function RepeatOperator(count, source) {
            this.count = count;
            this.source = source;
        }
        RepeatOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
        };
        return RepeatOperator;
    }());
    var RepeatSubscriber = (function (_super) {
        __extends(RepeatSubscriber, _super);
        function RepeatSubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RepeatSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.complete.call(this);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RepeatSubscriber;
    }(Subscriber));

    function repeatWhen(notifier) {
        return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
    }
    var RepeatWhenOperator = (function () {
        function RepeatWhenOperator(notifier) {
            this.notifier = notifier;
        }
        RepeatWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
        };
        return RepeatWhenOperator;
    }());
    var RepeatWhenSubscriber = (function (_super) {
        __extends(RepeatWhenSubscriber, _super);
        function RepeatWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            _this.sourceIsBeingSubscribedTo = true;
            return _this;
        }
        RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.sourceIsBeingSubscribedTo = true;
            this.source.subscribe(this);
        };
        RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            if (this.sourceIsBeingSubscribedTo === false) {
                return _super.prototype.complete.call(this);
            }
        };
        RepeatWhenSubscriber.prototype.complete = function () {
            this.sourceIsBeingSubscribedTo = false;
            if (!this.isStopped) {
                if (!this.retries) {
                    this.subscribeToRetries();
                }
                if (!this.retriesSubscription || this.retriesSubscription.closed) {
                    return _super.prototype.complete.call(this);
                }
                this._unsubscribeAndRecycle();
                this.notifications.next();
            }
        };
        RepeatWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
            if (notifications) {
                notifications.unsubscribe();
                this.notifications = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            _super.prototype._unsubscribeAndRecycle.call(this);
            this._unsubscribe = _unsubscribe;
            return this;
        };
        RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
            this.notifications = new Subject();
            var retries;
            try {
                var notifier = this.notifier;
                retries = notifier(this.notifications);
            }
            catch (e) {
                return _super.prototype.complete.call(this);
            }
            this.retries = retries;
            this.retriesSubscription = subscribeToResult(this, retries);
        };
        return RepeatWhenSubscriber;
    }(OuterSubscriber));

    function retry(count) {
        if (count === void 0) { count = -1; }
        return function (source) { return source.lift(new RetryOperator(count, source)); };
    }
    var RetryOperator = (function () {
        function RetryOperator(count, source) {
            this.count = count;
            this.source = source;
        }
        RetryOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
        };
        return RetryOperator;
    }());
    var RetrySubscriber = (function (_super) {
        __extends(RetrySubscriber, _super);
        function RetrySubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RetrySubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.error.call(this, err);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RetrySubscriber;
    }(Subscriber));

    function retryWhen(notifier) {
        return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
    }
    var RetryWhenOperator = (function () {
        function RetryWhenOperator(notifier, source) {
            this.notifier = notifier;
            this.source = source;
        }
        RetryWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
        };
        return RetryWhenOperator;
    }());
    var RetryWhenSubscriber = (function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            return _this;
        }
        RetryWhenSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var errors = this.errors;
                var retries = this.retries;
                var retriesSubscription = this.retriesSubscription;
                if (!retries) {
                    errors = new Subject();
                    try {
                        var notifier = this.notifier;
                        retries = notifier(errors);
                    }
                    catch (e) {
                        return _super.prototype.error.call(this, e);
                    }
                    retriesSubscription = subscribeToResult(this, retries);
                }
                else {
                    this.errors = null;
                    this.retriesSubscription = null;
                }
                this._unsubscribeAndRecycle();
                this.errors = errors;
                this.retries = retries;
                this.retriesSubscription = retriesSubscription;
                errors.next(err);
            }
        };
        RetryWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
            if (errors) {
                errors.unsubscribe();
                this.errors = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            this._unsubscribeAndRecycle();
            this._unsubscribe = _unsubscribe;
            this.source.subscribe(this);
        };
        return RetryWhenSubscriber;
    }(OuterSubscriber));

    function sample(notifier) {
        return function (source) { return source.lift(new SampleOperator(notifier)); };
    }
    var SampleOperator = (function () {
        function SampleOperator(notifier) {
            this.notifier = notifier;
        }
        SampleOperator.prototype.call = function (subscriber, source) {
            var sampleSubscriber = new SampleSubscriber(subscriber);
            var subscription = source.subscribe(sampleSubscriber);
            subscription.add(subscribeToResult(sampleSubscriber, this.notifier));
            return subscription;
        };
        return SampleOperator;
    }());
    var SampleSubscriber = (function (_super) {
        __extends(SampleSubscriber, _super);
        function SampleSubscriber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasValue = false;
            return _this;
        }
        SampleSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
        };
        SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        SampleSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        SampleSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.value);
            }
        };
        return SampleSubscriber;
    }(OuterSubscriber));

    function sampleTime(period, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
    }
    var SampleTimeOperator = (function () {
        function SampleTimeOperator(period, scheduler) {
            this.period = period;
            this.scheduler = scheduler;
        }
        SampleTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
        };
        return SampleTimeOperator;
    }());
    var SampleTimeSubscriber = (function (_super) {
        __extends(SampleTimeSubscriber, _super);
        function SampleTimeSubscriber(destination, period, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.period = period;
            _this.scheduler = scheduler;
            _this.hasValue = false;
            _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
            return _this;
        }
        SampleTimeSubscriber.prototype._next = function (value) {
            this.lastValue = value;
            this.hasValue = true;
        };
        SampleTimeSubscriber.prototype.notifyNext = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.lastValue);
            }
        };
        return SampleTimeSubscriber;
    }(Subscriber));
    function dispatchNotification(state) {
        var subscriber = state.subscriber, period = state.period;
        subscriber.notifyNext();
        this.schedule(state, period);
    }

    function sequenceEqual(compareTo, comparator) {
        return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparator)); };
    }
    var SequenceEqualOperator = (function () {
        function SequenceEqualOperator(compareTo, comparator) {
            this.compareTo = compareTo;
            this.comparator = comparator;
        }
        SequenceEqualOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
        };
        return SequenceEqualOperator;
    }());
    var SequenceEqualSubscriber = (function (_super) {
        __extends(SequenceEqualSubscriber, _super);
        function SequenceEqualSubscriber(destination, compareTo, comparator) {
            var _this = _super.call(this, destination) || this;
            _this.compareTo = compareTo;
            _this.comparator = comparator;
            _this._a = [];
            _this._b = [];
            _this._oneComplete = false;
            _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
            return _this;
        }
        SequenceEqualSubscriber.prototype._next = function (value) {
            if (this._oneComplete && this._b.length === 0) {
                this.emit(false);
            }
            else {
                this._a.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype._complete = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
            this.unsubscribe();
        };
        SequenceEqualSubscriber.prototype.checkValues = function () {
            var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
            while (_a.length > 0 && _b.length > 0) {
                var a = _a.shift();
                var b = _b.shift();
                var areEqual = false;
                try {
                    areEqual = comparator ? comparator(a, b) : a === b;
                }
                catch (e) {
                    this.destination.error(e);
                }
                if (!areEqual) {
                    this.emit(false);
                }
            }
        };
        SequenceEqualSubscriber.prototype.emit = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
        };
        SequenceEqualSubscriber.prototype.nextB = function (value) {
            if (this._oneComplete && this._a.length === 0) {
                this.emit(false);
            }
            else {
                this._b.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype.completeB = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
        };
        return SequenceEqualSubscriber;
    }(Subscriber));
    var SequenceEqualCompareToSubscriber = (function (_super) {
        __extends(SequenceEqualCompareToSubscriber, _super);
        function SequenceEqualCompareToSubscriber(destination, parent) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            return _this;
        }
        SequenceEqualCompareToSubscriber.prototype._next = function (value) {
            this.parent.nextB(value);
        };
        SequenceEqualCompareToSubscriber.prototype._error = function (err) {
            this.parent.error(err);
            this.unsubscribe();
        };
        SequenceEqualCompareToSubscriber.prototype._complete = function () {
            this.parent.completeB();
            this.unsubscribe();
        };
        return SequenceEqualCompareToSubscriber;
    }(Subscriber));

    function shareSubjectFactory() {
        return new Subject();
    }
    function share() {
        return function (source) { return refCount()(multicast(shareSubjectFactory)(source)); };
    }

    function shareReplay(configOrBufferSize, windowTime, scheduler) {
        var config;
        if (configOrBufferSize && typeof configOrBufferSize === 'object') {
            config = configOrBufferSize;
        }
        else {
            config = {
                bufferSize: configOrBufferSize,
                windowTime: windowTime,
                refCount: false,
                scheduler: scheduler
            };
        }
        return function (source) { return source.lift(shareReplayOperator(config)); };
    }
    function shareReplayOperator(_a) {
        var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
        var subject;
        var refCount = 0;
        var subscription;
        var hasError = false;
        var isComplete = false;
        return function shareReplayOperation(source) {
            refCount++;
            var innerSub;
            if (!subject || hasError) {
                hasError = false;
                subject = new ReplaySubject(bufferSize, windowTime, scheduler);
                innerSub = subject.subscribe(this);
                subscription = source.subscribe({
                    next: function (value) { subject.next(value); },
                    error: function (err) {
                        hasError = true;
                        subject.error(err);
                    },
                    complete: function () {
                        isComplete = true;
                        subscription = undefined;
                        subject.complete();
                    },
                });
            }
            else {
                innerSub = subject.subscribe(this);
            }
            this.add(function () {
                refCount--;
                innerSub.unsubscribe();
                if (subscription && !isComplete && useRefCount && refCount === 0) {
                    subscription.unsubscribe();
                    subscription = undefined;
                    subject = undefined;
                }
            });
        };
    }

    function single(predicate) {
        return function (source) { return source.lift(new SingleOperator(predicate, source)); };
    }
    var SingleOperator = (function () {
        function SingleOperator(predicate, source) {
            this.predicate = predicate;
            this.source = source;
        }
        SingleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
        };
        return SingleOperator;
    }());
    var SingleSubscriber = (function (_super) {
        __extends(SingleSubscriber, _super);
        function SingleSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.seenValue = false;
            _this.index = 0;
            return _this;
        }
        SingleSubscriber.prototype.applySingleValue = function (value) {
            if (this.seenValue) {
                this.destination.error('Sequence contains more than one element');
            }
            else {
                this.seenValue = true;
                this.singleValue = value;
            }
        };
        SingleSubscriber.prototype._next = function (value) {
            var index = this.index++;
            if (this.predicate) {
                this.tryNext(value, index);
            }
            else {
                this.applySingleValue(value);
            }
        };
        SingleSubscriber.prototype.tryNext = function (value, index) {
            try {
                if (this.predicate(value, index, this.source)) {
                    this.applySingleValue(value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        SingleSubscriber.prototype._complete = function () {
            var destination = this.destination;
            if (this.index > 0) {
                destination.next(this.seenValue ? this.singleValue : undefined);
                destination.complete();
            }
            else {
                destination.error(new EmptyError);
            }
        };
        return SingleSubscriber;
    }(Subscriber));

    function skip(count) {
        return function (source) { return source.lift(new SkipOperator(count)); };
    }
    var SkipOperator = (function () {
        function SkipOperator(total) {
            this.total = total;
        }
        SkipOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SkipSubscriber(subscriber, this.total));
        };
        return SkipOperator;
    }());
    var SkipSubscriber = (function (_super) {
        __extends(SkipSubscriber, _super);
        function SkipSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        SkipSubscriber.prototype._next = function (x) {
            if (++this.count > this.total) {
                this.destination.next(x);
            }
        };
        return SkipSubscriber;
    }(Subscriber));

    function skipLast(count) {
        return function (source) { return source.lift(new SkipLastOperator(count)); };
    }
    var SkipLastOperator = (function () {
        function SkipLastOperator(_skipCount) {
            this._skipCount = _skipCount;
            if (this._skipCount < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        SkipLastOperator.prototype.call = function (subscriber, source) {
            if (this._skipCount === 0) {
                return source.subscribe(new Subscriber(subscriber));
            }
            else {
                return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
            }
        };
        return SkipLastOperator;
    }());
    var SkipLastSubscriber = (function (_super) {
        __extends(SkipLastSubscriber, _super);
        function SkipLastSubscriber(destination, _skipCount) {
            var _this = _super.call(this, destination) || this;
            _this._skipCount = _skipCount;
            _this._count = 0;
            _this._ring = new Array(_skipCount);
            return _this;
        }
        SkipLastSubscriber.prototype._next = function (value) {
            var skipCount = this._skipCount;
            var count = this._count++;
            if (count < skipCount) {
                this._ring[count] = value;
            }
            else {
                var currentIndex = count % skipCount;
                var ring = this._ring;
                var oldValue = ring[currentIndex];
                ring[currentIndex] = value;
                this.destination.next(oldValue);
            }
        };
        return SkipLastSubscriber;
    }(Subscriber));

    function skipUntil(notifier) {
        return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
    }
    var SkipUntilOperator = (function () {
        function SkipUntilOperator(notifier) {
            this.notifier = notifier;
        }
        SkipUntilOperator.prototype.call = function (destination, source) {
            return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
        };
        return SkipUntilOperator;
    }());
    var SkipUntilSubscriber = (function (_super) {
        __extends(SkipUntilSubscriber, _super);
        function SkipUntilSubscriber(destination, notifier) {
            var _this = _super.call(this, destination) || this;
            _this.hasValue = false;
            var innerSubscriber = new InnerSubscriber(_this, undefined, undefined);
            _this.add(innerSubscriber);
            _this.innerSubscription = innerSubscriber;
            var innerSubscription = subscribeToResult(_this, notifier, undefined, undefined, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                _this.add(innerSubscription);
                _this.innerSubscription = innerSubscription;
            }
            return _this;
        }
        SkipUntilSubscriber.prototype._next = function (value) {
            if (this.hasValue) {
                _super.prototype._next.call(this, value);
            }
        };
        SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.hasValue = true;
            if (this.innerSubscription) {
                this.innerSubscription.unsubscribe();
            }
        };
        SkipUntilSubscriber.prototype.notifyComplete = function () {
        };
        return SkipUntilSubscriber;
    }(OuterSubscriber));

    function skipWhile(predicate) {
        return function (source) { return source.lift(new SkipWhileOperator(predicate)); };
    }
    var SkipWhileOperator = (function () {
        function SkipWhileOperator(predicate) {
            this.predicate = predicate;
        }
        SkipWhileOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
        };
        return SkipWhileOperator;
    }());
    var SkipWhileSubscriber = (function (_super) {
        __extends(SkipWhileSubscriber, _super);
        function SkipWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.skipping = true;
            _this.index = 0;
            return _this;
        }
        SkipWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (this.skipping) {
                this.tryCallPredicate(value);
            }
            if (!this.skipping) {
                destination.next(value);
            }
        };
        SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
            try {
                var result = this.predicate(value, this.index++);
                this.skipping = Boolean(result);
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        return SkipWhileSubscriber;
    }(Subscriber));

    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler(scheduler)) {
            array.pop();
            return function (source) { return concat(array, source, scheduler); };
        }
        else {
            return function (source) { return concat(array, source); };
        }
    }

    var SubscribeOnObservable = (function (_super) {
        __extends(SubscribeOnObservable, _super);
        function SubscribeOnObservable(source, delayTime, scheduler) {
            if (delayTime === void 0) { delayTime = 0; }
            if (scheduler === void 0) { scheduler = asap; }
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.delayTime = delayTime;
            _this.scheduler = scheduler;
            if (!isNumeric(delayTime) || delayTime < 0) {
                _this.delayTime = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== 'function') {
                _this.scheduler = asap;
            }
            return _this;
        }
        SubscribeOnObservable.create = function (source, delay, scheduler) {
            if (delay === void 0) { delay = 0; }
            if (scheduler === void 0) { scheduler = asap; }
            return new SubscribeOnObservable(source, delay, scheduler);
        };
        SubscribeOnObservable.dispatch = function (arg) {
            var source = arg.source, subscriber = arg.subscriber;
            return this.add(source.subscribe(subscriber));
        };
        SubscribeOnObservable.prototype._subscribe = function (subscriber) {
            var delay = this.delayTime;
            var source = this.source;
            var scheduler = this.scheduler;
            return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                source: source, subscriber: subscriber
            });
        };
        return SubscribeOnObservable;
    }(Observable));

    function subscribeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return function subscribeOnOperatorFunction(source) {
            return source.lift(new SubscribeOnOperator(scheduler, delay));
        };
    }
    var SubscribeOnOperator = (function () {
        function SubscribeOnOperator(scheduler, delay) {
            this.scheduler = scheduler;
            this.delay = delay;
        }
        SubscribeOnOperator.prototype.call = function (subscriber, source) {
            return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
        };
        return SubscribeOnOperator;
    }());

    function switchMap(project, resultSelector) {
        if (typeof resultSelector === 'function') {
            return function (source) { return source.pipe(switchMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
        }
        return function (source) { return source.lift(new SwitchMapOperator(project)); };
    }
    var SwitchMapOperator = (function () {
        function SwitchMapOperator(project) {
            this.project = project;
        }
        SwitchMapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
        };
        return SwitchMapOperator;
    }());
    var SwitchMapSubscriber = (function (_super) {
        __extends(SwitchMapSubscriber, _super);
        function SwitchMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.index = 0;
            return _this;
        }
        SwitchMapSubscriber.prototype._next = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (error) {
                this.destination.error(error);
                return;
            }
            this._innerSub(result, value, index);
        };
        SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscription = this.innerSubscription;
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            var innerSubscriber = new InnerSubscriber(this, value, index);
            var destination = this.destination;
            destination.add(innerSubscriber);
            this.innerSubscription = subscribeToResult(this, result, undefined, undefined, innerSubscriber);
            if (this.innerSubscription !== innerSubscriber) {
                destination.add(this.innerSubscription);
            }
        };
        SwitchMapSubscriber.prototype._complete = function () {
            var innerSubscription = this.innerSubscription;
            if (!innerSubscription || innerSubscription.closed) {
                _super.prototype._complete.call(this);
            }
            this.unsubscribe();
        };
        SwitchMapSubscriber.prototype._unsubscribe = function () {
            this.innerSubscription = null;
        };
        SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.innerSubscription = null;
            if (this.isStopped) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        return SwitchMapSubscriber;
    }(OuterSubscriber));

    function switchAll() {
        return switchMap(identity);
    }

    function switchMapTo(innerObservable, resultSelector) {
        return resultSelector ? switchMap(function () { return innerObservable; }, resultSelector) : switchMap(function () { return innerObservable; });
    }

    function takeUntil(notifier) {
        return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
    }
    var TakeUntilOperator = (function () {
        function TakeUntilOperator(notifier) {
            this.notifier = notifier;
        }
        TakeUntilOperator.prototype.call = function (subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = subscribeToResult(takeUntilSubscriber, this.notifier);
            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
                takeUntilSubscriber.add(notifierSubscription);
                return source.subscribe(takeUntilSubscriber);
            }
            return takeUntilSubscriber;
        };
        return TakeUntilOperator;
    }());
    var TakeUntilSubscriber = (function (_super) {
        __extends(TakeUntilSubscriber, _super);
        function TakeUntilSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.seenValue = false;
            return _this;
        }
        TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.seenValue = true;
            this.complete();
        };
        TakeUntilSubscriber.prototype.notifyComplete = function () {
        };
        return TakeUntilSubscriber;
    }(OuterSubscriber));

    function takeWhile(predicate, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return function (source) {
            return source.lift(new TakeWhileOperator(predicate, inclusive));
        };
    }
    var TakeWhileOperator = (function () {
        function TakeWhileOperator(predicate, inclusive) {
            this.predicate = predicate;
            this.inclusive = inclusive;
        }
        TakeWhileOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
        };
        return TakeWhileOperator;
    }());
    var TakeWhileSubscriber = (function (_super) {
        __extends(TakeWhileSubscriber, _super);
        function TakeWhileSubscriber(destination, predicate, inclusive) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.inclusive = inclusive;
            _this.index = 0;
            return _this;
        }
        TakeWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            var result;
            try {
                result = this.predicate(value, this.index++);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this.nextOrComplete(value, result);
        };
        TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
            var destination = this.destination;
            if (Boolean(predicateResult)) {
                destination.next(value);
            }
            else {
                if (this.inclusive) {
                    destination.next(value);
                }
                destination.complete();
            }
        };
        return TakeWhileSubscriber;
    }(Subscriber));

    function tap(nextOrObserver, error, complete) {
        return function tapOperatorFunction(source) {
            return source.lift(new DoOperator(nextOrObserver, error, complete));
        };
    }
    var DoOperator = (function () {
        function DoOperator(nextOrObserver, error, complete) {
            this.nextOrObserver = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator;
    }());
    var TapSubscriber = (function (_super) {
        __extends(TapSubscriber, _super);
        function TapSubscriber(destination, observerOrNext, error, complete) {
            var _this = _super.call(this, destination) || this;
            _this._tapNext = noop;
            _this._tapError = noop;
            _this._tapComplete = noop;
            _this._tapError = error || noop;
            _this._tapComplete = complete || noop;
            if (isFunction(observerOrNext)) {
                _this._context = _this;
                _this._tapNext = observerOrNext;
            }
            else if (observerOrNext) {
                _this._context = observerOrNext;
                _this._tapNext = observerOrNext.next || noop;
                _this._tapError = observerOrNext.error || noop;
                _this._tapComplete = observerOrNext.complete || noop;
            }
            return _this;
        }
        TapSubscriber.prototype._next = function (value) {
            try {
                this._tapNext.call(this._context, value);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(value);
        };
        TapSubscriber.prototype._error = function (err) {
            try {
                this._tapError.call(this._context, err);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.error(err);
        };
        TapSubscriber.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            return this.destination.complete();
        };
        return TapSubscriber;
    }(Subscriber));

    var defaultThrottleConfig = {
        leading: true,
        trailing: false
    };
    function throttle(durationSelector, config) {
        if (config === void 0) { config = defaultThrottleConfig; }
        return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
    }
    var ThrottleOperator = (function () {
        function ThrottleOperator(durationSelector, leading, trailing) {
            this.durationSelector = durationSelector;
            this.leading = leading;
            this.trailing = trailing;
        }
        ThrottleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
        };
        return ThrottleOperator;
    }());
    var ThrottleSubscriber = (function (_super) {
        __extends(ThrottleSubscriber, _super);
        function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.durationSelector = durationSelector;
            _this._leading = _leading;
            _this._trailing = _trailing;
            _this._hasValue = false;
            return _this;
        }
        ThrottleSubscriber.prototype._next = function (value) {
            this._hasValue = true;
            this._sendValue = value;
            if (!this._throttled) {
                if (this._leading) {
                    this.send();
                }
                else {
                    this.throttle(value);
                }
            }
        };
        ThrottleSubscriber.prototype.send = function () {
            var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
            if (_hasValue) {
                this.destination.next(_sendValue);
                this.throttle(_sendValue);
            }
            this._hasValue = false;
            this._sendValue = null;
        };
        ThrottleSubscriber.prototype.throttle = function (value) {
            var duration = this.tryDurationSelector(value);
            if (!!duration) {
                this.add(this._throttled = subscribeToResult(this, duration));
            }
        };
        ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
            try {
                return this.durationSelector(value);
            }
            catch (err) {
                this.destination.error(err);
                return null;
            }
        };
        ThrottleSubscriber.prototype.throttlingDone = function () {
            var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
            if (_throttled) {
                _throttled.unsubscribe();
            }
            this._throttled = null;
            if (_trailing) {
                this.send();
            }
        };
        ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.throttlingDone();
        };
        ThrottleSubscriber.prototype.notifyComplete = function () {
            this.throttlingDone();
        };
        return ThrottleSubscriber;
    }(OuterSubscriber));

    function throttleTime(duration, scheduler, config) {
        if (scheduler === void 0) { scheduler = async; }
        if (config === void 0) { config = defaultThrottleConfig; }
        return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
    }
    var ThrottleTimeOperator = (function () {
        function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
            this.duration = duration;
            this.scheduler = scheduler;
            this.leading = leading;
            this.trailing = trailing;
        }
        ThrottleTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
        };
        return ThrottleTimeOperator;
    }());
    var ThrottleTimeSubscriber = (function (_super) {
        __extends(ThrottleTimeSubscriber, _super);
        function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
            var _this = _super.call(this, destination) || this;
            _this.duration = duration;
            _this.scheduler = scheduler;
            _this.leading = leading;
            _this.trailing = trailing;
            _this._hasTrailingValue = false;
            _this._trailingValue = null;
            return _this;
        }
        ThrottleTimeSubscriber.prototype._next = function (value) {
            if (this.throttled) {
                if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            }
            else {
                this.add(this.throttled = this.scheduler.schedule(dispatchNext$3, this.duration, { subscriber: this }));
                if (this.leading) {
                    this.destination.next(value);
                }
                else if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            }
        };
        ThrottleTimeSubscriber.prototype._complete = function () {
            if (this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this.destination.complete();
            }
            else {
                this.destination.complete();
            }
        };
        ThrottleTimeSubscriber.prototype.clearThrottle = function () {
            var throttled = this.throttled;
            if (throttled) {
                if (this.trailing && this._hasTrailingValue) {
                    this.destination.next(this._trailingValue);
                    this._trailingValue = null;
                    this._hasTrailingValue = false;
                }
                throttled.unsubscribe();
                this.remove(throttled);
                this.throttled = null;
            }
        };
        return ThrottleTimeSubscriber;
    }(Subscriber));
    function dispatchNext$3(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
    }

    function timeInterval(scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return function (source) { return defer(function () {
            return source.pipe(scan(function (_a, value) {
                var current = _a.current;
                return ({ value: value, current: scheduler.now(), last: current });
            }, { current: scheduler.now(), value: undefined, last: undefined }), map(function (_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        }); };
    }
    var TimeInterval = (function () {
        function TimeInterval(value, interval) {
            this.value = value;
            this.interval = interval;
        }
        return TimeInterval;
    }());

    function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return function (source) {
            var absoluteTimeout = isDate(due);
            var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
            return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
        };
    }
    var TimeoutWithOperator = (function () {
        function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
            this.waitFor = waitFor;
            this.absoluteTimeout = absoluteTimeout;
            this.withObservable = withObservable;
            this.scheduler = scheduler;
        }
        TimeoutWithOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
        };
        return TimeoutWithOperator;
    }());
    var TimeoutWithSubscriber = (function (_super) {
        __extends(TimeoutWithSubscriber, _super);
        function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.absoluteTimeout = absoluteTimeout;
            _this.waitFor = waitFor;
            _this.withObservable = withObservable;
            _this.scheduler = scheduler;
            _this.action = null;
            _this.scheduleTimeout();
            return _this;
        }
        TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
            var withObservable = subscriber.withObservable;
            subscriber._unsubscribeAndRecycle();
            subscriber.add(subscribeToResult(subscriber, withObservable));
        };
        TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
            var action = this.action;
            if (action) {
                this.action = action.schedule(this, this.waitFor);
            }
            else {
                this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
            }
        };
        TimeoutWithSubscriber.prototype._next = function (value) {
            if (!this.absoluteTimeout) {
                this.scheduleTimeout();
            }
            _super.prototype._next.call(this, value);
        };
        TimeoutWithSubscriber.prototype._unsubscribe = function () {
            this.action = null;
            this.scheduler = null;
            this.withObservable = null;
        };
        return TimeoutWithSubscriber;
    }(OuterSubscriber));

    function timeout(due, scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return timeoutWith(due, throwError(new TimeoutError()), scheduler);
    }

    function timestamp(scheduler) {
        if (scheduler === void 0) { scheduler = async; }
        return map(function (value) { return new Timestamp(value, scheduler.now()); });
    }
    var Timestamp = (function () {
        function Timestamp(value, timestamp) {
            this.value = value;
            this.timestamp = timestamp;
        }
        return Timestamp;
    }());

    function toArrayReducer(arr, item, index) {
        if (index === 0) {
            return [item];
        }
        arr.push(item);
        return arr;
    }
    function toArray() {
        return reduce(toArrayReducer, []);
    }

    function window$1(windowBoundaries) {
        return function windowOperatorFunction(source) {
            return source.lift(new WindowOperator(windowBoundaries));
        };
    }
    var WindowOperator = (function () {
        function WindowOperator(windowBoundaries) {
            this.windowBoundaries = windowBoundaries;
        }
        WindowOperator.prototype.call = function (subscriber, source) {
            var windowSubscriber = new WindowSubscriber(subscriber);
            var sourceSubscription = source.subscribe(windowSubscriber);
            if (!sourceSubscription.closed) {
                windowSubscriber.add(subscribeToResult(windowSubscriber, this.windowBoundaries));
            }
            return sourceSubscription;
        };
        return WindowOperator;
    }());
    var WindowSubscriber = (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.window = new Subject();
            destination.next(_this.window);
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow();
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this._complete();
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
        };
        WindowSubscriber.prototype._unsubscribe = function () {
            this.window = null;
        };
        WindowSubscriber.prototype.openWindow = function () {
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var destination = this.destination;
            var newWindow = this.window = new Subject();
            destination.next(newWindow);
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    function windowCount(windowSize, startWindowEvery) {
        if (startWindowEvery === void 0) { startWindowEvery = 0; }
        return function windowCountOperatorFunction(source) {
            return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
        };
    }
    var WindowCountOperator = (function () {
        function WindowCountOperator(windowSize, startWindowEvery) {
            this.windowSize = windowSize;
            this.startWindowEvery = startWindowEvery;
        }
        WindowCountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
        };
        return WindowCountOperator;
    }());
    var WindowCountSubscriber = (function (_super) {
        __extends(WindowCountSubscriber, _super);
        function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowSize = windowSize;
            _this.startWindowEvery = startWindowEvery;
            _this.windows = [new Subject()];
            _this.count = 0;
            destination.next(_this.windows[0]);
            return _this;
        }
        WindowCountSubscriber.prototype._next = function (value) {
            var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
            var destination = this.destination;
            var windowSize = this.windowSize;
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len && !this.closed; i++) {
                windows[i].next(value);
            }
            var c = this.count - windowSize + 1;
            if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
                windows.shift().complete();
            }
            if (++this.count % startWindowEvery === 0 && !this.closed) {
                var window_1 = new Subject();
                windows.push(window_1);
                destination.next(window_1);
            }
        };
        WindowCountSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().error(err);
                }
            }
            this.destination.error(err);
        };
        WindowCountSubscriber.prototype._complete = function () {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().complete();
                }
            }
            this.destination.complete();
        };
        WindowCountSubscriber.prototype._unsubscribe = function () {
            this.count = 0;
            this.windows = null;
        };
        return WindowCountSubscriber;
    }(Subscriber));

    function windowTime(windowTimeSpan) {
        var scheduler = async;
        var windowCreationInterval = null;
        var maxWindowSize = Number.POSITIVE_INFINITY;
        if (isScheduler(arguments[3])) {
            scheduler = arguments[3];
        }
        if (isScheduler(arguments[2])) {
            scheduler = arguments[2];
        }
        else if (isNumeric(arguments[2])) {
            maxWindowSize = Number(arguments[2]);
        }
        if (isScheduler(arguments[1])) {
            scheduler = arguments[1];
        }
        else if (isNumeric(arguments[1])) {
            windowCreationInterval = Number(arguments[1]);
        }
        return function windowTimeOperatorFunction(source) {
            return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
        };
    }
    var WindowTimeOperator = (function () {
        function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            this.windowTimeSpan = windowTimeSpan;
            this.windowCreationInterval = windowCreationInterval;
            this.maxWindowSize = maxWindowSize;
            this.scheduler = scheduler;
        }
        WindowTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
        };
        return WindowTimeOperator;
    }());
    var CountedSubject = (function (_super) {
        __extends(CountedSubject, _super);
        function CountedSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._numberOfNextedValues = 0;
            return _this;
        }
        CountedSubject.prototype.next = function (value) {
            this._numberOfNextedValues++;
            _super.prototype.next.call(this, value);
        };
        Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
            get: function () {
                return this._numberOfNextedValues;
            },
            enumerable: true,
            configurable: true
        });
        return CountedSubject;
    }(Subject));
    var WindowTimeSubscriber = (function (_super) {
        __extends(WindowTimeSubscriber, _super);
        function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowTimeSpan = windowTimeSpan;
            _this.windowCreationInterval = windowCreationInterval;
            _this.maxWindowSize = maxWindowSize;
            _this.scheduler = scheduler;
            _this.windows = [];
            var window = _this.openWindow();
            if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                var closeState = { subscriber: _this, window: window, context: null };
                var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
            }
            else {
                var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
                _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
            }
            return _this;
        }
        WindowTimeSubscriber.prototype._next = function (value) {
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len; i++) {
                var window_1 = windows[i];
                if (!window_1.closed) {
                    window_1.next(value);
                    if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                        this.closeWindow(window_1);
                    }
                }
            }
        };
        WindowTimeSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            this.destination.error(err);
        };
        WindowTimeSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                var window_2 = windows.shift();
                if (!window_2.closed) {
                    window_2.complete();
                }
            }
            this.destination.complete();
        };
        WindowTimeSubscriber.prototype.openWindow = function () {
            var window = new CountedSubject();
            this.windows.push(window);
            var destination = this.destination;
            destination.next(window);
            return window;
        };
        WindowTimeSubscriber.prototype.closeWindow = function (window) {
            window.complete();
            var windows = this.windows;
            windows.splice(windows.indexOf(window), 1);
        };
        return WindowTimeSubscriber;
    }(Subscriber));
    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
        if (window) {
            subscriber.closeWindow(window);
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        var timeSpanState = { subscriber: subscriber, window: window, context: context };
        context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
        action.add(context.subscription);
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(state) {
        var subscriber = state.subscriber, window = state.window, context = state.context;
        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }

    function windowToggle(openings, closingSelector) {
        return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
    }
    var WindowToggleOperator = (function () {
        function WindowToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        WindowToggleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
        };
        return WindowToggleOperator;
    }());
    var WindowToggleSubscriber = (function (_super) {
        __extends(WindowToggleSubscriber, _super);
        function WindowToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
            return _this;
        }
        WindowToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            if (contexts) {
                var len = contexts.length;
                for (var i = 0; i < len; i++) {
                    contexts[i].window.next(value);
                }
            }
        };
        WindowToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_1 = contexts[index];
                    context_1.window.error(err);
                    context_1.subscription.unsubscribe();
                }
            }
            _super.prototype._error.call(this, err);
        };
        WindowToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_2 = contexts[index];
                    context_2.window.complete();
                    context_2.subscription.unsubscribe();
                }
            }
            _super.prototype._complete.call(this);
        };
        WindowToggleSubscriber.prototype._unsubscribe = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_3 = contexts[index];
                    context_3.window.unsubscribe();
                    context_3.subscription.unsubscribe();
                }
            }
        };
        WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (outerValue === this.openings) {
                var closingNotifier = void 0;
                try {
                    var closingSelector = this.closingSelector;
                    closingNotifier = closingSelector(innerValue);
                }
                catch (e) {
                    return this.error(e);
                }
                var window_1 = new Subject();
                var subscription = new Subscription();
                var context_4 = { window: window_1, subscription: subscription };
                this.contexts.push(context_4);
                var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context_4;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
            else {
                this.closeWindow(this.contexts.indexOf(outerValue));
            }
        };
        WindowToggleSubscriber.prototype.notifyError = function (err) {
            this.error(err);
        };
        WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
            if (inner !== this.openSubscription) {
                this.closeWindow(this.contexts.indexOf(inner.context));
            }
        };
        WindowToggleSubscriber.prototype.closeWindow = function (index) {
            if (index === -1) {
                return;
            }
            var contexts = this.contexts;
            var context = contexts[index];
            var window = context.window, subscription = context.subscription;
            contexts.splice(index, 1);
            window.complete();
            subscription.unsubscribe();
        };
        return WindowToggleSubscriber;
    }(OuterSubscriber));

    function windowWhen(closingSelector) {
        return function windowWhenOperatorFunction(source) {
            return source.lift(new WindowOperator$1(closingSelector));
        };
    }
    var WindowOperator$1 = (function () {
        function WindowOperator(closingSelector) {
            this.closingSelector = closingSelector;
        }
        WindowOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowSubscriber$1(subscriber, this.closingSelector));
        };
        return WindowOperator;
    }());
    var WindowSubscriber$1 = (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.closingSelector = closingSelector;
            _this.openWindow();
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
            if (this.closingNotification) {
                this.closingNotification.unsubscribe();
            }
        };
        WindowSubscriber.prototype.openWindow = function (innerSub) {
            if (innerSub === void 0) { innerSub = null; }
            if (innerSub) {
                this.remove(innerSub);
                innerSub.unsubscribe();
            }
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var window = this.window = new Subject();
            this.destination.next(window);
            var closingNotifier;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector();
            }
            catch (e) {
                this.destination.error(e);
                this.window.error(e);
                return;
            }
            this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    function withLatestFrom() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function (source) {
            var project;
            if (typeof args[args.length - 1] === 'function') {
                project = args.pop();
            }
            var observables = args;
            return source.lift(new WithLatestFromOperator(observables, project));
        };
    }
    var WithLatestFromOperator = (function () {
        function WithLatestFromOperator(observables, project) {
            this.observables = observables;
            this.project = project;
        }
        WithLatestFromOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
        };
        return WithLatestFromOperator;
    }());
    var WithLatestFromSubscriber = (function (_super) {
        __extends(WithLatestFromSubscriber, _super);
        function WithLatestFromSubscriber(destination, observables, project) {
            var _this = _super.call(this, destination) || this;
            _this.observables = observables;
            _this.project = project;
            _this.toRespond = [];
            var len = observables.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                _this.toRespond.push(i);
            }
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                _this.add(subscribeToResult(_this, observable, observable, i));
            }
            return _this;
        }
        WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            var toRespond = this.toRespond;
            if (toRespond.length > 0) {
                var found = toRespond.indexOf(outerIndex);
                if (found !== -1) {
                    toRespond.splice(found, 1);
                }
            }
        };
        WithLatestFromSubscriber.prototype.notifyComplete = function () {
        };
        WithLatestFromSubscriber.prototype._next = function (value) {
            if (this.toRespond.length === 0) {
                var args = [value].concat(this.values);
                if (this.project) {
                    this._tryProject(args);
                }
                else {
                    this.destination.next(args);
                }
            }
        };
        WithLatestFromSubscriber.prototype._tryProject = function (args) {
            var result;
            try {
                result = this.project.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return WithLatestFromSubscriber;
    }(OuterSubscriber));

    function zip$1() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function zipOperatorFunction(source) {
            return source.lift.call(zip.apply(void 0, [source].concat(observables)));
        };
    }

    function zipAll(project) {
        return function (source) { return source.lift(new ZipOperator(project)); };
    }



    var _operators = /*#__PURE__*/Object.freeze({
        audit: audit,
        auditTime: auditTime,
        buffer: buffer,
        bufferCount: bufferCount,
        bufferTime: bufferTime,
        bufferToggle: bufferToggle,
        bufferWhen: bufferWhen,
        catchError: catchError,
        combineAll: combineAll,
        combineLatest: combineLatest$1,
        concat: concat$1,
        concatAll: concatAll,
        concatMap: concatMap,
        concatMapTo: concatMapTo,
        count: count,
        debounce: debounce,
        debounceTime: debounceTime,
        defaultIfEmpty: defaultIfEmpty,
        delay: delay,
        delayWhen: delayWhen,
        dematerialize: dematerialize,
        distinct: distinct,
        distinctUntilChanged: distinctUntilChanged,
        distinctUntilKeyChanged: distinctUntilKeyChanged,
        elementAt: elementAt,
        endWith: endWith,
        every: every,
        exhaust: exhaust,
        exhaustMap: exhaustMap,
        expand: expand,
        filter: filter,
        finalize: finalize,
        find: find,
        findIndex: findIndex,
        first: first,
        groupBy: groupBy,
        ignoreElements: ignoreElements,
        isEmpty: isEmpty,
        last: last,
        map: map,
        mapTo: mapTo,
        materialize: materialize,
        max: max,
        merge: merge$1,
        mergeAll: mergeAll,
        mergeMap: mergeMap,
        flatMap: flatMap,
        mergeMapTo: mergeMapTo,
        mergeScan: mergeScan,
        min: min,
        multicast: multicast,
        observeOn: observeOn,
        onErrorResumeNext: onErrorResumeNext$1,
        pairwise: pairwise,
        partition: partition$1,
        pluck: pluck,
        publish: publish,
        publishBehavior: publishBehavior,
        publishLast: publishLast,
        publishReplay: publishReplay,
        race: race$1,
        reduce: reduce,
        repeat: repeat,
        repeatWhen: repeatWhen,
        retry: retry,
        retryWhen: retryWhen,
        refCount: refCount,
        sample: sample,
        sampleTime: sampleTime,
        scan: scan,
        sequenceEqual: sequenceEqual,
        share: share,
        shareReplay: shareReplay,
        single: single,
        skip: skip,
        skipLast: skipLast,
        skipUntil: skipUntil,
        skipWhile: skipWhile,
        startWith: startWith,
        subscribeOn: subscribeOn,
        switchAll: switchAll,
        switchMap: switchMap,
        switchMapTo: switchMapTo,
        take: take,
        takeLast: takeLast,
        takeUntil: takeUntil,
        takeWhile: takeWhile,
        tap: tap,
        throttle: throttle,
        throttleTime: throttleTime,
        throwIfEmpty: throwIfEmpty,
        timeInterval: timeInterval,
        timeout: timeout,
        timeoutWith: timeoutWith,
        timestamp: timestamp,
        toArray: toArray,
        window: window$1,
        windowCount: windowCount,
        windowTime: windowTime,
        windowToggle: windowToggle,
        windowWhen: windowWhen,
        withLatestFrom: withLatestFrom,
        zip: zip$1,
        zipAll: zipAll
    });

    var SubscriptionLog = (function () {
        function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
            if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
            this.subscribedFrame = subscribedFrame;
            this.unsubscribedFrame = unsubscribedFrame;
        }
        return SubscriptionLog;
    }());

    var SubscriptionLoggable = (function () {
        function SubscriptionLoggable() {
            this.subscriptions = [];
        }
        SubscriptionLoggable.prototype.logSubscribedFrame = function () {
            this.subscriptions.push(new SubscriptionLog(this.scheduler.now()));
            return this.subscriptions.length - 1;
        };
        SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
            var subscriptionLogs = this.subscriptions;
            var oldSubscriptionLog = subscriptionLogs[index];
            subscriptionLogs[index] = new SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
        };
        return SubscriptionLoggable;
    }());

    function applyMixins(derivedCtor, baseCtors) {
        for (var i = 0, len = baseCtors.length; i < len; i++) {
            var baseCtor = baseCtors[i];
            var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
            for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
                var name_1 = propertyKeys[j];
                derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
            }
        }
    }

    var ColdObservable = (function (_super) {
        __extends(ColdObservable, _super);
        function ColdObservable(messages, scheduler) {
            var _this = _super.call(this, function (subscriber) {
                var observable = this;
                var index = observable.logSubscribedFrame();
                var subscription = new Subscription();
                subscription.add(new Subscription(function () {
                    observable.logUnsubscribedFrame(index);
                }));
                observable.scheduleMessages(subscriber);
                return subscription;
            }) || this;
            _this.messages = messages;
            _this.subscriptions = [];
            _this.scheduler = scheduler;
            return _this;
        }
        ColdObservable.prototype.scheduleMessages = function (subscriber) {
            var messagesLength = this.messages.length;
            for (var i = 0; i < messagesLength; i++) {
                var message = this.messages[i];
                subscriber.add(this.scheduler.schedule(function (_a) {
                    var message = _a.message, subscriber = _a.subscriber;
                    message.notification.observe(subscriber);
                }, message.frame, { message: message, subscriber: subscriber }));
            }
        };
        return ColdObservable;
    }(Observable));
    applyMixins(ColdObservable, [SubscriptionLoggable]);

    var HotObservable = (function (_super) {
        __extends(HotObservable, _super);
        function HotObservable(messages, scheduler) {
            var _this = _super.call(this) || this;
            _this.messages = messages;
            _this.subscriptions = [];
            _this.scheduler = scheduler;
            return _this;
        }
        HotObservable.prototype._subscribe = function (subscriber) {
            var subject = this;
            var index = subject.logSubscribedFrame();
            var subscription = new Subscription();
            subscription.add(new Subscription(function () {
                subject.logUnsubscribedFrame(index);
            }));
            subscription.add(_super.prototype._subscribe.call(this, subscriber));
            return subscription;
        };
        HotObservable.prototype.setup = function () {
            var subject = this;
            var messagesLength = subject.messages.length;
            for (var i = 0; i < messagesLength; i++) {
                (function () {
                    var message = subject.messages[i];
                    subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
                })();
            }
        };
        return HotObservable;
    }(Subject));
    applyMixins(HotObservable, [SubscriptionLoggable]);

    var defaultMaxFrame = 750;
    var TestScheduler = (function (_super) {
        __extends(TestScheduler, _super);
        function TestScheduler(assertDeepEqual) {
            var _this = _super.call(this, VirtualAction, defaultMaxFrame) || this;
            _this.assertDeepEqual = assertDeepEqual;
            _this.hotObservables = [];
            _this.coldObservables = [];
            _this.flushTests = [];
            _this.runMode = false;
            return _this;
        }
        TestScheduler.prototype.createTime = function (marbles) {
            var indexOf = marbles.indexOf('|');
            if (indexOf === -1) {
                throw new Error('marble diagram for time should have a completion marker "|"');
            }
            return indexOf * TestScheduler.frameTimeFactor;
        };
        TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
            if (marbles.indexOf('^') !== -1) {
                throw new Error('cold observable cannot have subscription offset "^"');
            }
            if (marbles.indexOf('!') !== -1) {
                throw new Error('cold observable cannot have unsubscription marker "!"');
            }
            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var cold = new ColdObservable(messages, this);
            this.coldObservables.push(cold);
            return cold;
        };
        TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
            if (marbles.indexOf('!') !== -1) {
                throw new Error('hot observable cannot have unsubscription marker "!"');
            }
            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var subject = new HotObservable(messages, this);
            this.hotObservables.push(subject);
            return subject;
        };
        TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
            var _this = this;
            var messages = [];
            observable.subscribe(function (value) {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification.createNext(value) });
            }, function (err) {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification.createError(err) });
            }, function () {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification.createComplete() });
            });
            return messages;
        };
        TestScheduler.prototype.expectObservable = function (observable, subscriptionMarbles) {
            var _this = this;
            if (subscriptionMarbles === void 0) { subscriptionMarbles = null; }
            var actual = [];
            var flushTest = { actual: actual, ready: false };
            var subscriptionParsed = TestScheduler.parseMarblesAsSubscriptions(subscriptionMarbles, this.runMode);
            var subscriptionFrame = subscriptionParsed.subscribedFrame === Number.POSITIVE_INFINITY ?
                0 : subscriptionParsed.subscribedFrame;
            var unsubscriptionFrame = subscriptionParsed.unsubscribedFrame;
            var subscription;
            this.schedule(function () {
                subscription = observable.subscribe(function (x) {
                    var value = x;
                    if (x instanceof Observable) {
                        value = _this.materializeInnerObservable(value, _this.frame);
                    }
                    actual.push({ frame: _this.frame, notification: Notification.createNext(value) });
                }, function (err) {
                    actual.push({ frame: _this.frame, notification: Notification.createError(err) });
                }, function () {
                    actual.push({ frame: _this.frame, notification: Notification.createComplete() });
                });
            }, subscriptionFrame);
            if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
            }
            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
                toBe: function (marbles, values, errorValue) {
                    flushTest.ready = true;
                    flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
                }
            };
        };
        TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
            var flushTest = { actual: actualSubscriptionLogs, ready: false };
            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
                toBe: function (marbles) {
                    var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                    flushTest.ready = true;
                    flushTest.expected = marblesArray.map(function (marbles) {
                        return TestScheduler.parseMarblesAsSubscriptions(marbles, runMode);
                    });
                }
            };
        };
        TestScheduler.prototype.flush = function () {
            var _this = this;
            var hotObservables = this.hotObservables;
            while (hotObservables.length > 0) {
                hotObservables.shift().setup();
            }
            _super.prototype.flush.call(this);
            this.flushTests = this.flushTests.filter(function (test) {
                if (test.ready) {
                    _this.assertDeepEqual(test.actual, test.expected);
                    return false;
                }
                return true;
            });
        };
        TestScheduler.parseMarblesAsSubscriptions = function (marbles, runMode) {
            var _this = this;
            if (runMode === void 0) { runMode = false; }
            if (typeof marbles !== 'string') {
                return new SubscriptionLog(Number.POSITIVE_INFINITY);
            }
            var len = marbles.length;
            var groupStart = -1;
            var subscriptionFrame = Number.POSITIVE_INFINITY;
            var unsubscriptionFrame = Number.POSITIVE_INFINITY;
            var frame = 0;
            var _loop_1 = function (i) {
                var nextFrame = frame;
                var advanceFrameBy = function (count) {
                    nextFrame += count * _this.frameTimeFactor;
                };
                var c = marbles[i];
                switch (c) {
                    case ' ':
                        if (!runMode) {
                            advanceFrameBy(1);
                        }
                        break;
                    case '-':
                        advanceFrameBy(1);
                        break;
                    case '(':
                        groupStart = frame;
                        advanceFrameBy(1);
                        break;
                    case ')':
                        groupStart = -1;
                        advanceFrameBy(1);
                        break;
                    case '^':
                        if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                            throw new Error('found a second subscription point \'^\' in a ' +
                                'subscription marble diagram. There can only be one.');
                        }
                        subscriptionFrame = groupStart > -1 ? groupStart : frame;
                        advanceFrameBy(1);
                        break;
                    case '!':
                        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                            throw new Error('found a second subscription point \'^\' in a ' +
                                'subscription marble diagram. There can only be one.');
                        }
                        unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                        break;
                    default:
                        if (runMode && c.match(/^[0-9]$/)) {
                            if (i === 0 || marbles[i - 1] === ' ') {
                                var buffer = marbles.slice(i);
                                var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (match) {
                                    i += match[0].length - 1;
                                    var duration = parseFloat(match[1]);
                                    var unit = match[2];
                                    var durationInMs = void 0;
                                    switch (unit) {
                                        case 'ms':
                                            durationInMs = duration;
                                            break;
                                        case 's':
                                            durationInMs = duration * 1000;
                                            break;
                                        case 'm':
                                            durationInMs = duration * 1000 * 60;
                                            break;
                                        default:
                                            break;
                                    }
                                    advanceFrameBy(durationInMs / this_1.frameTimeFactor);
                                    break;
                                }
                            }
                        }
                        throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                            'subscription marble diagram. Found instead \'' + c + '\'.');
                }
                frame = nextFrame;
                out_i_1 = i;
            };
            var this_1 = this, out_i_1;
            for (var i = 0; i < len; i++) {
                _loop_1(i);
                i = out_i_1;
            }
            if (unsubscriptionFrame < 0) {
                return new SubscriptionLog(subscriptionFrame);
            }
            else {
                return new SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
            }
        };
        TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables, runMode) {
            var _this = this;
            if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
            if (runMode === void 0) { runMode = false; }
            if (marbles.indexOf('!') !== -1) {
                throw new Error('conventional marble diagrams cannot have the ' +
                    'unsubscription marker "!"');
            }
            var len = marbles.length;
            var testMessages = [];
            var subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
            var frame = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
            var getValue = typeof values !== 'object' ?
                function (x) { return x; } :
                function (x) {
                    if (materializeInnerObservables && values[x] instanceof ColdObservable) {
                        return values[x].messages;
                    }
                    return values[x];
                };
            var groupStart = -1;
            var _loop_2 = function (i) {
                var nextFrame = frame;
                var advanceFrameBy = function (count) {
                    nextFrame += count * _this.frameTimeFactor;
                };
                var notification = void 0;
                var c = marbles[i];
                switch (c) {
                    case ' ':
                        if (!runMode) {
                            advanceFrameBy(1);
                        }
                        break;
                    case '-':
                        advanceFrameBy(1);
                        break;
                    case '(':
                        groupStart = frame;
                        advanceFrameBy(1);
                        break;
                    case ')':
                        groupStart = -1;
                        advanceFrameBy(1);
                        break;
                    case '|':
                        notification = Notification.createComplete();
                        advanceFrameBy(1);
                        break;
                    case '^':
                        advanceFrameBy(1);
                        break;
                    case '#':
                        notification = Notification.createError(errorValue || 'error');
                        advanceFrameBy(1);
                        break;
                    default:
                        if (runMode && c.match(/^[0-9]$/)) {
                            if (i === 0 || marbles[i - 1] === ' ') {
                                var buffer = marbles.slice(i);
                                var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (match) {
                                    i += match[0].length - 1;
                                    var duration = parseFloat(match[1]);
                                    var unit = match[2];
                                    var durationInMs = void 0;
                                    switch (unit) {
                                        case 'ms':
                                            durationInMs = duration;
                                            break;
                                        case 's':
                                            durationInMs = duration * 1000;
                                            break;
                                        case 'm':
                                            durationInMs = duration * 1000 * 60;
                                            break;
                                        default:
                                            break;
                                    }
                                    advanceFrameBy(durationInMs / this_2.frameTimeFactor);
                                    break;
                                }
                            }
                        }
                        notification = Notification.createNext(getValue(c));
                        advanceFrameBy(1);
                        break;
                }
                if (notification) {
                    testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
                }
                frame = nextFrame;
                out_i_2 = i;
            };
            var this_2 = this, out_i_2;
            for (var i = 0; i < len; i++) {
                _loop_2(i);
                i = out_i_2;
            }
            return testMessages;
        };
        TestScheduler.prototype.run = function (callback) {
            var prevFrameTimeFactor = TestScheduler.frameTimeFactor;
            var prevMaxFrames = this.maxFrames;
            TestScheduler.frameTimeFactor = 1;
            this.maxFrames = Number.POSITIVE_INFINITY;
            this.runMode = true;
            AsyncScheduler.delegate = this;
            var helpers = {
                cold: this.createColdObservable.bind(this),
                hot: this.createHotObservable.bind(this),
                flush: this.flush.bind(this),
                expectObservable: this.expectObservable.bind(this),
                expectSubscriptions: this.expectSubscriptions.bind(this),
            };
            try {
                var ret = callback(helpers);
                this.flush();
                return ret;
            }
            finally {
                TestScheduler.frameTimeFactor = prevFrameTimeFactor;
                this.maxFrames = prevMaxFrames;
                this.runMode = false;
                AsyncScheduler.delegate = undefined;
            }
        };
        return TestScheduler;
    }(VirtualTimeScheduler));



    var _testing = /*#__PURE__*/Object.freeze({
        TestScheduler: TestScheduler
    });

    var __window = typeof window !== 'undefined' && window;
    var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
        self instanceof WorkerGlobalScope && self;
    var __global = typeof global !== 'undefined' && global;
    var _root = __window || __global || __self;
    (function () {
        if (!_root) {
            throw new Error('RxJS could not find any global context (window, self, global)');
        }
    })();

    function getCORSRequest() {
        if (_root.XMLHttpRequest) {
            return new _root.XMLHttpRequest();
        }
        else if (!!_root.XDomainRequest) {
            return new _root.XDomainRequest();
        }
        else {
            throw new Error('CORS is not supported by your browser');
        }
    }
    function getXMLHttpRequest() {
        if (_root.XMLHttpRequest) {
            return new _root.XMLHttpRequest();
        }
        else {
            var progId = void 0;
            try {
                var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
                for (var i = 0; i < 3; i++) {
                    try {
                        progId = progIds[i];
                        if (new _root.ActiveXObject(progId)) {
                            break;
                        }
                    }
                    catch (e) {
                    }
                }
                return new _root.ActiveXObject(progId);
            }
            catch (e) {
                throw new Error('XMLHttpRequest is not supported by your browser');
            }
        }
    }
    function ajaxGet(url, headers) {
        if (headers === void 0) { headers = null; }
        return new AjaxObservable({ method: 'GET', url: url, headers: headers });
    }
    function ajaxPost(url, body, headers) {
        return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
    }
    function ajaxDelete(url, headers) {
        return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
    }
    function ajaxPut(url, body, headers) {
        return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
    }
    function ajaxPatch(url, body, headers) {
        return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
    }
    var mapResponse = map(function (x, index) { return x.response; });
    function ajaxGetJSON(url, headers) {
        return mapResponse(new AjaxObservable({
            method: 'GET',
            url: url,
            responseType: 'json',
            headers: headers
        }));
    }
    var AjaxObservable = (function (_super) {
        __extends(AjaxObservable, _super);
        function AjaxObservable(urlOrRequest) {
            var _this = _super.call(this) || this;
            var request = {
                async: true,
                createXHR: function () {
                    return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
                },
                crossDomain: true,
                withCredentials: false,
                headers: {},
                method: 'GET',
                responseType: 'json',
                timeout: 0
            };
            if (typeof urlOrRequest === 'string') {
                request.url = urlOrRequest;
            }
            else {
                for (var prop in urlOrRequest) {
                    if (urlOrRequest.hasOwnProperty(prop)) {
                        request[prop] = urlOrRequest[prop];
                    }
                }
            }
            _this.request = request;
            return _this;
        }
        AjaxObservable.prototype._subscribe = function (subscriber) {
            return new AjaxSubscriber(subscriber, this.request);
        };
        AjaxObservable.create = (function () {
            var create = function (urlOrRequest) {
                return new AjaxObservable(urlOrRequest);
            };
            create.get = ajaxGet;
            create.post = ajaxPost;
            create.delete = ajaxDelete;
            create.put = ajaxPut;
            create.patch = ajaxPatch;
            create.getJSON = ajaxGetJSON;
            return create;
        })();
        return AjaxObservable;
    }(Observable));
    var AjaxSubscriber = (function (_super) {
        __extends(AjaxSubscriber, _super);
        function AjaxSubscriber(destination, request) {
            var _this = _super.call(this, destination) || this;
            _this.request = request;
            _this.done = false;
            var headers = request.headers = request.headers || {};
            if (!request.crossDomain && !_this.getHeader(headers, 'X-Requested-With')) {
                headers['X-Requested-With'] = 'XMLHttpRequest';
            }
            var contentTypeHeader = _this.getHeader(headers, 'Content-Type');
            if (!contentTypeHeader && !(_root.FormData && request.body instanceof _root.FormData) && typeof request.body !== 'undefined') {
                headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            }
            request.body = _this.serializeBody(request.body, _this.getHeader(request.headers, 'Content-Type'));
            _this.send();
            return _this;
        }
        AjaxSubscriber.prototype.next = function (e) {
            this.done = true;
            var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
            var result;
            try {
                result = new AjaxResponse(e, xhr, request);
            }
            catch (err) {
                return destination.error(err);
            }
            destination.next(result);
        };
        AjaxSubscriber.prototype.send = function () {
            var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
            try {
                var xhr = this.xhr = request.createXHR();
                this.setupEvents(xhr, request);
                if (user) {
                    xhr.open(method, url, async, user, password);
                }
                else {
                    xhr.open(method, url, async);
                }
                if (async) {
                    xhr.timeout = request.timeout;
                    xhr.responseType = request.responseType;
                }
                if ('withCredentials' in xhr) {
                    xhr.withCredentials = !!request.withCredentials;
                }
                this.setHeaders(xhr, headers);
                if (body) {
                    xhr.send(body);
                }
                else {
                    xhr.send();
                }
            }
            catch (err) {
                this.error(err);
            }
        };
        AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
            if (!body || typeof body === 'string') {
                return body;
            }
            else if (_root.FormData && body instanceof _root.FormData) {
                return body;
            }
            if (contentType) {
                var splitIndex = contentType.indexOf(';');
                if (splitIndex !== -1) {
                    contentType = contentType.substring(0, splitIndex);
                }
            }
            switch (contentType) {
                case 'application/x-www-form-urlencoded':
                    return Object.keys(body).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]); }).join('&');
                case 'application/json':
                    return JSON.stringify(body);
                default:
                    return body;
            }
        };
        AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        };
        AjaxSubscriber.prototype.getHeader = function (headers, headerName) {
            for (var key in headers) {
                if (key.toLowerCase() === headerName.toLowerCase()) {
                    return headers[key];
                }
            }
            return undefined;
        };
        AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
            var progressSubscriber = request.progressSubscriber;
            function xhrTimeout(e) {
                var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                var error;
                try {
                    error = new AjaxTimeoutError(this, request);
                }
                catch (err) {
                    error = err;
                }
                subscriber.error(error);
            }
            xhr.ontimeout = xhrTimeout;
            xhrTimeout.request = request;
            xhrTimeout.subscriber = this;
            xhrTimeout.progressSubscriber = progressSubscriber;
            if (xhr.upload && 'withCredentials' in xhr) {
                if (progressSubscriber) {
                    var xhrProgress_1;
                    xhrProgress_1 = function (e) {
                        var progressSubscriber = xhrProgress_1.progressSubscriber;
                        progressSubscriber.next(e);
                    };
                    if (_root.XDomainRequest) {
                        xhr.onprogress = xhrProgress_1;
                    }
                    else {
                        xhr.upload.onprogress = xhrProgress_1;
                    }
                    xhrProgress_1.progressSubscriber = progressSubscriber;
                }
                var xhrError_1;
                xhrError_1 = function (e) {
                    var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    var error;
                    try {
                        error = new AjaxError('ajax error', this, request);
                    }
                    catch (err) {
                        error = err;
                    }
                    subscriber.error(error);
                };
                xhr.onerror = xhrError_1;
                xhrError_1.request = request;
                xhrError_1.subscriber = this;
                xhrError_1.progressSubscriber = progressSubscriber;
            }
            function xhrReadyStateChange(e) {
                return;
            }
            xhr.onreadystatechange = xhrReadyStateChange;
            xhrReadyStateChange.subscriber = this;
            xhrReadyStateChange.progressSubscriber = progressSubscriber;
            xhrReadyStateChange.request = request;
            function xhrLoad(e) {
                var _a = xhrLoad, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
                if (this.readyState === 4) {
                    var status_1 = this.status === 1223 ? 204 : this.status;
                    var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                    if (status_1 === 0) {
                        status_1 = response ? 200 : 0;
                    }
                    if (status_1 < 400) {
                        if (progressSubscriber) {
                            progressSubscriber.complete();
                        }
                        subscriber.next(e);
                        subscriber.complete();
                    }
                    else {
                        if (progressSubscriber) {
                            progressSubscriber.error(e);
                        }
                        var error = void 0;
                        try {
                            error = new AjaxError('ajax error ' + status_1, this, request);
                        }
                        catch (err) {
                            error = err;
                        }
                        subscriber.error(error);
                    }
                }
            }
            xhr.onload = xhrLoad;
            xhrLoad.subscriber = this;
            xhrLoad.progressSubscriber = progressSubscriber;
            xhrLoad.request = request;
        };
        AjaxSubscriber.prototype.unsubscribe = function () {
            var _a = this, done = _a.done, xhr = _a.xhr;
            if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
                xhr.abort();
            }
            _super.prototype.unsubscribe.call(this);
        };
        return AjaxSubscriber;
    }(Subscriber));
    var AjaxResponse = (function () {
        function AjaxResponse(originalEvent, xhr, request) {
            this.originalEvent = originalEvent;
            this.xhr = xhr;
            this.request = request;
            this.status = xhr.status;
            this.responseType = xhr.responseType || request.responseType;
            this.response = parseXhrResponse(this.responseType, xhr);
        }
        return AjaxResponse;
    }());
    var AjaxErrorImpl = (function () {
        function AjaxErrorImpl(message, xhr, request) {
            Error.call(this);
            this.message = message;
            this.name = 'AjaxError';
            this.xhr = xhr;
            this.request = request;
            this.status = xhr.status;
            this.responseType = xhr.responseType || request.responseType;
            this.response = parseXhrResponse(this.responseType, xhr);
            return this;
        }
        AjaxErrorImpl.prototype = Object.create(Error.prototype);
        return AjaxErrorImpl;
    })();
    var AjaxError = AjaxErrorImpl;
    function parseJson(xhr) {
        if ('response' in xhr) {
            return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
        }
        else {
            return JSON.parse(xhr.responseText || 'null');
        }
    }
    function parseXhrResponse(responseType, xhr) {
        switch (responseType) {
            case 'json':
                return parseJson(xhr);
            case 'xml':
                return xhr.responseXML;
            case 'text':
            default:
                return ('response' in xhr) ? xhr.response : xhr.responseText;
        }
    }
    function AjaxTimeoutErrorImpl(xhr, request) {
        AjaxError.call(this, 'ajax timeout', xhr, request);
        this.name = 'AjaxTimeoutError';
        return this;
    }
    var AjaxTimeoutError = AjaxTimeoutErrorImpl;

    var ajax = (function () { return AjaxObservable.create; })();



    var _ajax = /*#__PURE__*/Object.freeze({
        ajax: ajax,
        AjaxResponse: AjaxResponse,
        AjaxError: AjaxError,
        AjaxTimeoutError: AjaxTimeoutError
    });

    var DEFAULT_WEBSOCKET_CONFIG = {
        url: '',
        deserializer: function (e) { return JSON.parse(e.data); },
        serializer: function (value) { return JSON.stringify(value); },
    };
    var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
    var WebSocketSubject = (function (_super) {
        __extends(WebSocketSubject, _super);
        function WebSocketSubject(urlConfigOrSource, destination) {
            var _this = _super.call(this) || this;
            if (urlConfigOrSource instanceof Observable) {
                _this.destination = destination;
                _this.source = urlConfigOrSource;
            }
            else {
                var config = _this._config = __assign({}, DEFAULT_WEBSOCKET_CONFIG);
                _this._output = new Subject();
                if (typeof urlConfigOrSource === 'string') {
                    config.url = urlConfigOrSource;
                }
                else {
                    for (var key in urlConfigOrSource) {
                        if (urlConfigOrSource.hasOwnProperty(key)) {
                            config[key] = urlConfigOrSource[key];
                        }
                    }
                }
                if (!config.WebSocketCtor && WebSocket) {
                    config.WebSocketCtor = WebSocket;
                }
                else if (!config.WebSocketCtor) {
                    throw new Error('no WebSocket constructor can be found');
                }
                _this.destination = new ReplaySubject();
            }
            return _this;
        }
        WebSocketSubject.prototype.lift = function (operator) {
            var sock = new WebSocketSubject(this._config, this.destination);
            sock.operator = operator;
            sock.source = this;
            return sock;
        };
        WebSocketSubject.prototype._resetState = function () {
            this._socket = null;
            if (!this.source) {
                this.destination = new ReplaySubject();
            }
            this._output = new Subject();
        };
        WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
            var self = this;
            return new Observable(function (observer) {
                try {
                    self.next(subMsg());
                }
                catch (err) {
                    observer.error(err);
                }
                var subscription = self.subscribe(function (x) {
                    try {
                        if (messageFilter(x)) {
                            observer.next(x);
                        }
                    }
                    catch (err) {
                        observer.error(err);
                    }
                }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
                return function () {
                    try {
                        self.next(unsubMsg());
                    }
                    catch (err) {
                        observer.error(err);
                    }
                    subscription.unsubscribe();
                };
            });
        };
        WebSocketSubject.prototype._connectSocket = function () {
            var _this = this;
            var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url = _a.url, binaryType = _a.binaryType;
            var observer = this._output;
            var socket = null;
            try {
                socket = protocol ?
                    new WebSocketCtor(url, protocol) :
                    new WebSocketCtor(url);
                this._socket = socket;
                if (binaryType) {
                    this._socket.binaryType = binaryType;
                }
            }
            catch (e) {
                observer.error(e);
                return;
            }
            var subscription = new Subscription(function () {
                _this._socket = null;
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
            });
            socket.onopen = function (e) {
                var _socket = _this._socket;
                if (!_socket) {
                    socket.close();
                    _this._resetState();
                    return;
                }
                var openObserver = _this._config.openObserver;
                if (openObserver) {
                    openObserver.next(e);
                }
                var queue = _this.destination;
                _this.destination = Subscriber.create(function (x) {
                    if (socket.readyState === 1) {
                        try {
                            var serializer = _this._config.serializer;
                            socket.send(serializer(x));
                        }
                        catch (e) {
                            _this.destination.error(e);
                        }
                    }
                }, function (e) {
                    var closingObserver = _this._config.closingObserver;
                    if (closingObserver) {
                        closingObserver.next(undefined);
                    }
                    if (e && e.code) {
                        socket.close(e.code, e.reason);
                    }
                    else {
                        observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                    }
                    _this._resetState();
                }, function () {
                    var closingObserver = _this._config.closingObserver;
                    if (closingObserver) {
                        closingObserver.next(undefined);
                    }
                    socket.close();
                    _this._resetState();
                });
                if (queue && queue instanceof ReplaySubject) {
                    subscription.add(queue.subscribe(_this.destination));
                }
            };
            socket.onerror = function (e) {
                _this._resetState();
                observer.error(e);
            };
            socket.onclose = function (e) {
                _this._resetState();
                var closeObserver = _this._config.closeObserver;
                if (closeObserver) {
                    closeObserver.next(e);
                }
                if (e.wasClean) {
                    observer.complete();
                }
                else {
                    observer.error(e);
                }
            };
            socket.onmessage = function (e) {
                try {
                    var deserializer = _this._config.deserializer;
                    observer.next(deserializer(e));
                }
                catch (err) {
                    observer.error(err);
                }
            };
        };
        WebSocketSubject.prototype._subscribe = function (subscriber) {
            var _this = this;
            var source = this.source;
            if (source) {
                return source.subscribe(subscriber);
            }
            if (!this._socket) {
                this._connectSocket();
            }
            this._output.subscribe(subscriber);
            subscriber.add(function () {
                var _socket = _this._socket;
                if (_this._output.observers.length === 0) {
                    if (_socket && _socket.readyState === 1) {
                        _socket.close();
                    }
                    _this._resetState();
                }
            });
            return subscriber;
        };
        WebSocketSubject.prototype.unsubscribe = function () {
            var _socket = this._socket;
            if (_socket && _socket.readyState === 1) {
                _socket.close();
            }
            this._resetState();
            _super.prototype.unsubscribe.call(this);
        };
        return WebSocketSubject;
    }(AnonymousSubject));

    function webSocket(urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    }



    var _webSocket = /*#__PURE__*/Object.freeze({
        webSocket: webSocket,
        WebSocketSubject: WebSocketSubject
    });

    function fromFetch(input, initWithSelector) {
        if (initWithSelector === void 0) { initWithSelector = {}; }
        var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
        return new Observable(function (subscriber) {
            var controller = new AbortController();
            var signal = controller.signal;
            var abortable = true;
            var unsubscribed = false;
            var subscription = new Subscription();
            subscription.add(function () {
                unsubscribed = true;
                if (abortable) {
                    controller.abort();
                }
            });
            var perSubscriberInit;
            if (init) {
                if (init.signal) {
                    if (init.signal.aborted) {
                        controller.abort();
                    }
                    else {
                        var outerSignal_1 = init.signal;
                        var outerSignalHandler_1 = function () {
                            if (!signal.aborted) {
                                controller.abort();
                            }
                        };
                        outerSignal_1.addEventListener('abort', outerSignalHandler_1);
                        subscription.add(function () { return outerSignal_1.removeEventListener('abort', outerSignalHandler_1); });
                    }
                }
                perSubscriberInit = __assign({}, init, { signal: signal });
            }
            else {
                perSubscriberInit = { signal: signal };
            }
            fetch(input, perSubscriberInit).then(function (response) {
                if (selector) {
                    subscription.add(from(selector(response)).subscribe(function (value) { return subscriber.next(value); }, function (err) {
                        abortable = false;
                        if (!unsubscribed) {
                            subscriber.error(err);
                        }
                    }, function () {
                        abortable = false;
                        subscriber.complete();
                    }));
                }
                else {
                    abortable = false;
                    subscriber.next(response);
                    subscriber.complete();
                }
            }).catch(function (err) {
                abortable = false;
                if (!unsubscribed) {
                    subscriber.error(err);
                }
            });
            return subscription;
        });
    }



    var _fetch = /*#__PURE__*/Object.freeze({
        fromFetch: fromFetch
    });

    var operators = _operators;
    var testing = _testing;
    var ajax$1 = _ajax;
    var webSocket$1 = _webSocket;
    var fetch$1 = _fetch;

    exports.operators = operators;
    exports.testing = testing;
    exports.ajax = ajax$1;
    exports.webSocket = webSocket$1;
    exports.fetch = fetch$1;
    exports.Observable = Observable;
    exports.ConnectableObservable = ConnectableObservable;
    exports.GroupedObservable = GroupedObservable;
    exports.observable = observable;
    exports.Subject = Subject;
    exports.BehaviorSubject = BehaviorSubject;
    exports.ReplaySubject = ReplaySubject;
    exports.AsyncSubject = AsyncSubject;
    exports.asap = asap;
    exports.asapScheduler = asapScheduler;
    exports.async = async;
    exports.asyncScheduler = asyncScheduler;
    exports.queue = queue;
    exports.queueScheduler = queueScheduler;
    exports.animationFrame = animationFrame;
    exports.animationFrameScheduler = animationFrameScheduler;
    exports.VirtualTimeScheduler = VirtualTimeScheduler;
    exports.VirtualAction = VirtualAction;
    exports.Scheduler = Scheduler;
    exports.Subscription = Subscription;
    exports.Subscriber = Subscriber;
    exports.Notification = Notification;
    exports.pipe = pipe;
    exports.noop = noop;
    exports.identity = identity;
    exports.isObservable = isObservable;
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
    exports.EmptyError = EmptyError;
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    exports.UnsubscriptionError = UnsubscriptionError;
    exports.TimeoutError = TimeoutError;
    exports.bindCallback = bindCallback;
    exports.bindNodeCallback = bindNodeCallback;
    exports.combineLatest = combineLatest;
    exports.concat = concat;
    exports.defer = defer;
    exports.empty = empty$1;
    exports.forkJoin = forkJoin;
    exports.from = from;
    exports.fromEvent = fromEvent;
    exports.fromEventPattern = fromEventPattern;
    exports.generate = generate;
    exports.iif = iif;
    exports.interval = interval;
    exports.merge = merge;
    exports.never = never;
    exports.of = of;
    exports.onErrorResumeNext = onErrorResumeNext;
    exports.pairs = pairs;
    exports.partition = partition;
    exports.race = race;
    exports.range = range;
    exports.throwError = throwError;
    exports.timer = timer;
    exports.using = using;
    exports.zip = zip;
    exports.scheduled = scheduled;
    exports.EMPTY = EMPTY;
    exports.NEVER = NEVER;
    exports.config = config;

    Object.defineProperty(exports, '__esModule', { value: true });

})));




/**
 * @license rxcomp v1.0.0-beta.11
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

var rxcomp = (function (exports, rxjs, operators) {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var CONTEXTS = {};
  var NODES = {};

  var Factory = function () {
    function Factory() {
      this.rxcompId = -1;
      this.unsubscribe$ = new rxjs.Subject();
      this.changes$ = new rxjs.ReplaySubject(1);
    }

    var _proto = Factory.prototype;

    _proto.onInit = function onInit() {};

    _proto.onChanges = function onChanges(changes) {};

    _proto.onView = function onView() {};

    _proto.onDestroy = function onDestroy() {};

    _proto.pushChanges = function pushChanges() {
      var _getContext = getContext(this),
          module = _getContext.module;

      if (module.instances) {
        this.changes$.next(this);
        this.onView();
      }
    };

    return Factory;
  }();
  function getContext(instance) {
    return CONTEXTS[instance.rxcompId];
  }

  var Directive = function (_Factory) {
    _inheritsLoose(Directive, _Factory);

    function Directive() {
      return _Factory.apply(this, arguments) || this;
    }

    return Directive;
  }(Factory);

  var ClassDirective = function (_Directive) {
    _inheritsLoose(ClassDirective, _Directive);

    function ClassDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.class = '';
      _this.keys = [];
      return _this;
    }

    var _proto = ClassDirective.prototype;

    _proto.onInit = function onInit() {
      var _this2 = this;

      var _getContext = getContext(this),
          node = _getContext.node;

      Array.prototype.slice.call(node.classList).forEach(function (x) {
        return _this2.keys.push(x);
      });
    };

    _proto.onChanges = function onChanges() {
      var _getContext2 = getContext(this),
          node = _getContext2.node;

      var keys = [];
      var object = this.class;

      if (typeof object === 'object') {
        for (var key in object) {
          if (object[key]) {
            keys.push(key);
          }
        }
      } else if (typeof object === 'string') {
        keys = object.split(/\s+/);
      }

      keys = keys.concat(this.keys);
      node.setAttribute('class', keys.join(' '));
    };

    return ClassDirective;
  }(Directive);
  ClassDirective.meta = {
    selector: "[[class]]",
    inputs: ['class']
  };

  var EVENTS = ['mousedown', 'mouseup', 'mousemove', 'click', 'dblclick', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'contextmenu', 'touchstart', 'touchmove', 'touchend', 'keydown', 'keyup', 'input', 'change', 'loaded'];

  var EventDirective = function (_Directive) {
    _inheritsLoose(EventDirective, _Directive);

    function EventDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.event = '';
      return _this;
    }

    var _proto = EventDirective.prototype;

    _proto.onInit = function onInit() {
      var _getContext = getContext(this),
          module = _getContext.module,
          node = _getContext.node,
          parentInstance = _getContext.parentInstance,
          selector = _getContext.selector;

      var event = this.event = selector.replace(/\[|\]|\(|\)/g, '');
      var event$ = rxjs.fromEvent(node, event).pipe(operators.shareReplay(1));
      var expression = node.getAttribute("(" + event + ")");

      if (expression) {
        var outputFunction = module.makeFunction(expression, ['$event']);
        event$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
          module.resolve(outputFunction, parentInstance, event);
        });
      } else {
        parentInstance[event + "$"] = event$;
      }
    };

    return EventDirective;
  }(Directive);
  EventDirective.meta = {
    selector: "[(" + EVENTS.join(')],[(') + ")]"
  };

  var Structure = function (_Factory) {
    _inheritsLoose(Structure, _Factory);

    function Structure() {
      return _Factory.apply(this, arguments) || this;
    }

    return Structure;
  }(Factory);

  var Component = function (_Factory) {
    _inheritsLoose(Component, _Factory);

    function Component() {
      return _Factory.apply(this, arguments) || this;
    }

    var _proto = Component.prototype;

    _proto.pushChanges = function pushChanges() {
      var _getContext = getContext(this),
          module = _getContext.module,
          node = _getContext.node;

      if (module.instances) {
        this.changes$.next(this);
        module.parse(node, this);
        this.onView();
      }
    };

    return Component;
  }(Factory);

  var RESERVED_PROPERTIES = ['constructor', 'rxcompId', 'onInit', 'onChanges', 'onDestroy', 'pushChanges', 'changes$', 'unsubscribe$'];

  var Context = function (_Component) {
    _inheritsLoose(Context, _Component);

    function Context(parentInstance, descriptors) {
      var _this;

      if (descriptors === void 0) {
        descriptors = {};
      }

      _this = _Component.call(this) || this;
      descriptors = Context.mergeDescriptors(parentInstance, parentInstance, descriptors);
      descriptors = Context.mergeDescriptors(Object.getPrototypeOf(parentInstance), parentInstance, descriptors);
      Object.defineProperties(_assertThisInitialized(_this), descriptors);
      return _this;
    }

    var _proto = Context.prototype;

    _proto.pushChanges = function pushChanges() {
      var _this2 = this;

      var context = getContext(this);

      if (!context.keys) {
        context.keys = Object.keys(context.parentInstance).filter(function (key) {
          return RESERVED_PROPERTIES.indexOf(key) === -1;
        });
      }

      if (context.module.instances) {
        context.keys.forEach(function (key) {
          _this2[key] = context.parentInstance[key];
        });
      }

      _Component.prototype.pushChanges.call(this);
    };

    Context.mergeDescriptors = function mergeDescriptors(source, instance, descriptors) {
      if (descriptors === void 0) {
        descriptors = {};
      }

      var properties = Object.getOwnPropertyNames(source);

      var _loop = function _loop() {
        var key = properties.shift();

        if (RESERVED_PROPERTIES.indexOf(key) === -1 && !descriptors.hasOwnProperty(key)) {
          var descriptor = Object.getOwnPropertyDescriptor(source, key);

          if (typeof descriptor.value == 'function') {
            descriptor.value = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return instance[key].apply(instance, args);
            };
          }

          descriptors[key] = descriptor;
        }
      };

      while (properties.length) {
        _loop();
      }

      return descriptors;
    };

    return Context;
  }(Component);

  var ForItem = function (_Context) {
    _inheritsLoose(ForItem, _Context);

    function ForItem(key, $key, value, $value, index, count, parentInstance) {
      var _this;

      _this = _Context.call(this, parentInstance) || this;
      _this[key] = $key;
      _this[value] = $value;
      _this.index = index;
      _this.count = count;
      return _this;
    }

    _createClass(ForItem, [{
      key: "first",
      get: function get() {
        return this.index === 0;
      }
    }, {
      key: "last",
      get: function get() {
        return this.index === this.count - 1;
      }
    }, {
      key: "even",
      get: function get() {
        return this.index % 2 === 0;
      }
    }, {
      key: "odd",
      get: function get() {
        return !this.even;
      }
    }]);

    return ForItem;
  }(Context);

  var ForStructure = function (_Structure) {
    _inheritsLoose(ForStructure, _Structure);

    function ForStructure() {
      var _this;

      _this = _Structure.apply(this, arguments) || this;
      _this.instances = [];
      return _this;
    }

    var _proto = ForStructure.prototype;

    _proto.onInit = function onInit() {
      var _getContext = getContext(this),
          module = _getContext.module,
          node = _getContext.node;

      var forbegin = document.createComment("*for begin");
      forbegin.rxcompId = node.rxcompId;
      node.parentNode.replaceChild(forbegin, node);
      var forend = this.forend = document.createComment("*for end");
      forbegin.parentNode.insertBefore(forend, forbegin.nextSibling);
      var expression = node.getAttribute('*for');
      node.removeAttribute('*for');
      var token = this.token = this.getExpressionToken(expression);
      this.forFunction = module.makeFunction(token.iterable);
    };

    _proto.onChanges = function onChanges(changes) {
      var context = getContext(this);
      var module = context.module;
      var node = context.node;
      var token = this.token;
      var result = module.resolve(this.forFunction, changes, this) || [];
      var isArray = Array.isArray(result);
      var array = isArray ? result : Object.keys(result);
      var total = array.length;
      var previous = this.instances.length;

      for (var i = 0; i < Math.max(previous, total); i++) {
        if (i < total) {
          var key = isArray ? i : array[i];
          var value = isArray ? array[key] : result[key];

          if (i < previous) {
            var instance = this.instances[i];
            instance[token.key] = key;
            instance[token.value] = value;
          } else {
            var clonedNode = node.cloneNode(true);
            delete clonedNode.rxcompId;
            this.forend.parentNode.insertBefore(clonedNode, this.forend);
            var args = [token.key, key, token.value, value, i, total, context.parentInstance];

            var _instance = module.makeInstance(clonedNode, ForItem, context.selector, context.parentInstance, args);

            if (_instance) {
              module.compile(clonedNode, _instance);
              this.instances.push(_instance);
            }
          }
        } else {
          var _instance2 = this.instances[i];

          var _getContext2 = getContext(_instance2),
              _node = _getContext2.node;

          _node.parentNode.removeChild(_node);

          module.remove(_node);
        }
      }

      this.instances.length = array.length;
    };

    _proto.getExpressionToken = function getExpressionToken(expression) {
      if (expression === null) {
        throw 'invalid for';
      }

      if (expression.trim().indexOf('let ') === -1 || expression.trim().indexOf(' of ') === -1) {
        throw 'invalid for';
      }

      var expressions = expression.split(';').map(function (x) {
        return x.trim();
      }).filter(function (x) {
        return x !== '';
      });
      var forExpressions = expressions[0].split(' of ').map(function (x) {
        return x.trim();
      });
      var value = forExpressions[0].replace(/\s*let\s*/, '');
      var iterable = forExpressions[1];
      var key = 'index';
      var keyValueMatches = value.match(/\[(.+)\s*,\s*(.+)\]/);

      if (keyValueMatches) {
        key = keyValueMatches[1];
        value = keyValueMatches[2];
      }

      if (expressions.length > 1) {
        var indexExpressions = expressions[1].split(/\s*let\s*|\s*=\s*index/).map(function (x) {
          return x.trim();
        });

        if (indexExpressions.length === 3) {
          key = indexExpressions[1];
        }
      }

      return {
        key: key,
        value: value,
        iterable: iterable
      };
    };

    return ForStructure;
  }(Structure);
  ForStructure.meta = {
    selector: '[*for]'
  };

  var HrefDirective = function (_Directive) {
    _inheritsLoose(HrefDirective, _Directive);

    function HrefDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    _createClass(HrefDirective, [{
      key: "href",
      set: function set(href) {
        if (this.href_ !== href) {
          this.href_ = href;

          var _getContext = getContext(this),
              node = _getContext.node;

          href ? node.setAttribute('href', href) : node.removeAttribute('href');
        }
      },
      get: function get() {
        return this.href_;
      }
    }]);

    return HrefDirective;
  }(Directive);
  HrefDirective.meta = {
    selector: '[[href]]',
    inputs: ['href']
  };

  var IfStructure = function (_Structure) {
    _inheritsLoose(IfStructure, _Structure);

    function IfStructure() {
      return _Structure.apply(this, arguments) || this;
    }

    var _proto = IfStructure.prototype;

    _proto.onInit = function onInit() {
      var _getContext = getContext(this),
          module = _getContext.module,
          node = _getContext.node;

      var ifbegin = this.ifbegin = document.createComment("*if begin");
      ifbegin.rxcompId = node.rxcompId;
      node.parentNode.replaceChild(ifbegin, node);
      var ifend = this.ifend = document.createComment("*if end");
      ifbegin.parentNode.insertBefore(ifend, ifbegin.nextSibling);
      var expression = node.getAttribute('*if');
      this.ifFunction = module.makeFunction(expression);
      var clonedNode = node.cloneNode(true);
      clonedNode.removeAttribute('*if');
      this.clonedNode = clonedNode;
      this.element = clonedNode.cloneNode(true);
    };

    _proto.onChanges = function onChanges(changes) {
      var _getContext2 = getContext(this),
          module = _getContext2.module;

      var value = module.resolve(this.ifFunction, changes, this);
      var element = this.element;

      if (value) {
        if (!element.parentNode) {
          var ifend = this.ifend;
          ifend.parentNode.insertBefore(element, ifend);
          module.compile(element);
        }
      } else {
        if (element.parentNode) {
          module.remove(element, this);
          element.parentNode.removeChild(element);
          this.element = this.clonedNode.cloneNode(true);
        }
      }
    };

    return IfStructure;
  }(Structure);
  IfStructure.meta = {
    selector: '[*if]'
  };

  var InnerHtmlDirective = function (_Directive) {
    _inheritsLoose(InnerHtmlDirective, _Directive);

    function InnerHtmlDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    _createClass(InnerHtmlDirective, [{
      key: "innerHTML",
      set: function set(innerHTML) {
        if (this.innerHTML_ !== innerHTML) {
          this.innerHTML_ = innerHTML;

          var _getContext = getContext(this),
              node = _getContext.node;

          node.innerHTML = innerHTML == undefined ? '' : innerHTML;
        }
      },
      get: function get() {
        return this.innerHTML_;
      }
    }]);

    return InnerHtmlDirective;
  }(Directive);
  InnerHtmlDirective.meta = {
    selector: "[innerHTML]",
    inputs: ['innerHTML']
  };

  var JsonComponent = function (_Component) {
    _inheritsLoose(JsonComponent, _Component);

    function JsonComponent() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.active = false;
      return _this;
    }

    var _proto = JsonComponent.prototype;

    _proto.onToggle = function onToggle() {
      this.active = !this.active;
      this.pushChanges();
    };

    return JsonComponent;
  }(Component);
  JsonComponent.meta = {
    selector: 'json-component',
    inputs: ['item'],
    template: "\n\t\t<div class=\"rxc-block\">\n\t\t\t<div class=\"rxc-head\">\n\t\t\t\t<span class=\"rxc-head__title\" (click)=\"onToggle()\">\n\t\t\t\t\t<span *if=\"!active\">+ json </span>\n\t\t\t\t\t<span *if=\"active\">- json </span>\n\t\t\t\t\t<span [innerHTML]=\"item\"></span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<ul class=\"rxc-list\" *if=\"active\">\n\t\t\t\t<li class=\"rxc-list__item\">\n\t\t\t\t\t<span class=\"rxc-list__value\" [innerHTML]=\"item | json\"></span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>"
  };

  var Pipe = function () {
    function Pipe() {}

    Pipe.transform = function transform(value) {
      return value;
    };

    return Pipe;
  }();

  var JsonPipe = function (_Pipe) {
    _inheritsLoose(JsonPipe, _Pipe);

    function JsonPipe() {
      return _Pipe.apply(this, arguments) || this;
    }

    JsonPipe.transform = function transform(value) {
      var cache = new Map();
      var json = JSON.stringify(value, function (key, value) {
        if (typeof value === 'object' && value != null) {
          if (cache.has(value)) {
            return '#ref';
          }

          cache.set(value, true);
        }

        return value;
      }, 2);
      return json;
    };

    return JsonPipe;
  }(Pipe);
  JsonPipe.meta = {
    name: 'json'
  };

  var ID = 0;

  var Module = function () {
    function Module() {}

    var _proto = Module.prototype;

    _proto.compile = function compile(node, parentInstance) {
      var _this = this;

      var componentNode;
      var instances = Module.querySelectorsAll(node, this.meta.selectors, []).map(function (match) {
        if (componentNode && componentNode !== match.node) {
          parentInstance = undefined;
        }

        var instance = _this.makeInstance(match.node, match.factory, match.selector, parentInstance);

        if (match.factory.prototype instanceof Component) {
          componentNode = match.node;
        }

        return instance;
      }).filter(function (x) {
        return x !== undefined;
      });
      return instances;
    };

    _proto.makeInstance = function makeInstance(node, factory, selector, parentInstance, args) {
      var _this2 = this;

      if (parentInstance || node.parentNode) {
        var meta = factory.meta;
        parentInstance = parentInstance || this.getParentInstance(node.parentNode);

        if (!parentInstance) {
          return undefined;
        }

        var instance = _construct(factory, args || []);

        var context = Module.makeContext(this, instance, parentInstance, node, factory, selector);

        if (meta) {
          this.makeHosts(meta, instance, node);
          context.inputs = this.makeInputs(meta, instance);
          context.outputs = this.makeOutputs(meta, instance);

          if (parentInstance instanceof Factory) {
            this.resolveInputsOutputs(instance, parentInstance);
          }
        }

        instance.onInit();

        if (parentInstance instanceof Factory) {
          parentInstance.changes$.pipe(operators.takeUntil(instance.unsubscribe$)).subscribe(function (changes) {
            if (meta) {
              _this2.resolveInputsOutputs(instance, changes);
            }

            instance.onChanges(changes);
            instance.pushChanges();
          });
        }

        return instance;
      } else {
        return undefined;
      }
    };

    _proto.makeFunction = function makeFunction(expression, params) {
      if (params === void 0) {
        params = ['$instance'];
      }

      if (expression) {
        expression = Module.parseExpression(expression);
        var args = params.join(',');
        var expression_func = new Function("with(this) {\n\t\t\t\treturn (function (" + args + ", $$module) {\n\t\t\t\t\tconst $$pipes = $$module.meta.pipes;\n\t\t\t\t\treturn " + expression + ";\n\t\t\t\t}.bind(this)).apply(this, arguments);\n\t\t\t}");
        return expression_func;
      } else {
        return function () {
          return null;
        };
      }
    };

    _proto.resolve = function resolve(expression, parentInstance, payload) {
      return expression.apply(parentInstance, [payload, this]);
    };

    _proto.parse = function parse(node, instance) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];

        if (child.nodeType === 1) {
          var element = child;
          var context = getParsableContextByNode(element);

          if (!context) {
            this.parse(element, instance);
          }
        } else if (child.nodeType === 3) {
          var text = child;
          this.parseTextNode(text, instance);
        }
      }
    };

    _proto.remove = function remove(node, keepInstance) {
      var keepContext = keepInstance ? getContext(keepInstance) : undefined;
      Module.traverseDown(node, function (node) {
        var rxcompId = node.rxcompId;

        if (rxcompId) {
          var keepContexts = Module.deleteContext(rxcompId, keepContext);

          if (keepContexts.length === 0) {
            delete node.rxcompId;
          }
        }
      });
      return node;
    };

    _proto.destroy = function destroy() {
      this.remove(this.meta.node);
      this.meta.node.innerHTML = this.meta.nodeInnerHTML;
    };

    _proto.makeContext = function makeContext(instance, parentInstance, node, selector) {
      var context = Module.makeContext(this, instance, parentInstance, node, instance.constructor, selector);
      return context;
    };

    _proto.getInstance = function getInstance(node) {
      if (node instanceof Document) {
        return window;
      }

      var context = getContextByNode(node);

      if (context) {
        return context.instance;
      } else {
        return undefined;
      }
    };

    _proto.getParentInstance = function getParentInstance(node) {
      var _this3 = this;

      return Module.traverseUp(node, function (node) {
        return _this3.getInstance(node);
      });
    };

    _proto.parseTextNode = function parseTextNode(node, instance) {
      var _this4 = this;

      var expressions = node.nodeExpressions;

      if (!expressions) {
        expressions = this.parseTextNodeExpression(node.wholeText);
      }

      if (expressions.length) {
        var replacedText = expressions.reduce(function (p, c) {
          var text;

          if (typeof c === 'function') {
            text = _this4.resolve(c, instance, instance);

            if (text == undefined) {
              text = '';
            }
          } else {
            text = c;
          }

          return p + text;
        }, '');

        if (node.nodeValue !== replacedText) {
          var textNode = document.createTextNode(replacedText);
          textNode.nodeExpressions = expressions;
          node.parentNode.replaceChild(textNode, node);
        }
      } else {
        node.nodeExpressions = expressions;
      }
    };

    _proto.pushFragment = function pushFragment(nodeValue, from, to, expressions) {
      var fragment = nodeValue.substring(from, to);
      expressions.push(fragment);
    };

    _proto.parseTextNodeExpression = function parseTextNodeExpression(nodeValue) {
      var expressions = [];
      var regex = /\{{2}((([^{}])|(\{([^{}]|(\{.*?\}))+?\}))*?)\}{2}/g;
      var lastIndex = 0,
          matches;

      while ((matches = regex.exec(nodeValue)) !== null) {
        var index = regex.lastIndex - matches[0].length;

        if (index > lastIndex) {
          this.pushFragment(nodeValue, index, lastIndex, expressions);
        }

        lastIndex = regex.lastIndex;
        var expression = this.makeFunction(matches[1]);
        expressions.push(expression);
      }

      var length = nodeValue.length;

      if (length > lastIndex) {
        this.pushFragment(nodeValue, lastIndex, length, expressions);
      }

      if (expressions.find(function (x) {
        return typeof x === 'function';
      })) {
        return expressions;
      } else {
        return [];
      }
    };

    _proto.makeHosts = function makeHosts(meta, instance, node) {
      if (meta.hosts) {
        Object.keys(meta.hosts).forEach(function (key) {
          var factory = meta.hosts[key];
          instance[key] = getHost(instance, factory, node);
        });
      }
    };

    _proto.makeInput = function makeInput(instance, key) {
      var _getContext = getContext(instance),
          node = _getContext.node;

      var input = null,
          expression = null;

      if (node.hasAttribute("[" + key + "]")) {
        expression = node.getAttribute("[" + key + "]");
      } else if (node.hasAttribute(key)) {
        var attribute = node.getAttribute(key).replace(/({{)|(}})|(")/g, function (substring, a, b, c) {
          if (a) {
            return '"+';
          }

          if (b) {
            return '+"';
          }

          if (c) {
            return '\"';
          }

          return '';
        });
        expression = "\"" + attribute + "\"";
      }

      if (expression) {
        input = this.makeFunction(expression);
      }

      return input;
    };

    _proto.makeInputs = function makeInputs(meta, instance) {
      var _this5 = this;

      var inputs = {};

      if (meta.inputs) {
        meta.inputs.forEach(function (key, i) {
          var input = _this5.makeInput(instance, key);

          if (input) {
            inputs[key] = input;
          }
        });
      }

      return inputs;
    };

    _proto.makeOutput = function makeOutput(instance, key) {
      var _this6 = this;

      var context = getContext(instance);
      var node = context.node;
      var parentInstance = context.parentInstance;
      var expression = node.getAttribute("(" + key + ")");
      var outputFunction = expression ? this.makeFunction(expression, ['$event']) : null;
      var output$ = new rxjs.Subject().pipe(operators.tap(function (event) {
        if (outputFunction) {
          _this6.resolve(outputFunction, parentInstance, event);
        }
      }));
      output$.pipe(operators.takeUntil(instance.unsubscribe$)).subscribe();
      instance[key] = output$;
      return output$;
    };

    _proto.makeOutputs = function makeOutputs(meta, instance) {
      var _this7 = this;

      var outputs = {};

      if (meta.outputs) {
        meta.outputs.forEach(function (key) {
          var output = _this7.makeOutput(instance, key);

          if (output) {
            outputs[key] = output;
          }
        });
      }

      return outputs;
    };

    _proto.resolveInputsOutputs = function resolveInputsOutputs(instance, changes) {
      var context = getContext(instance);
      var parentInstance = context.parentInstance;
      var inputs = context.inputs;

      for (var key in inputs) {
        var inputFunction = inputs[key];
        var value = this.resolve(inputFunction, parentInstance, instance);
        instance[key] = value;
      }
    };

    Module.parseExpression = function parseExpression(expression) {
      var l = '┌';
      var r = '┘';
      var rx1 = /(\()([^\(\)]*)(\))/;

      while (expression.match(rx1)) {
        expression = expression.replace(rx1, function (substring) {
          return "" + l + Module.parsePipes(arguments.length <= 2 ? undefined : arguments[2]) + r;
        });
      }

      expression = Module.parsePipes(expression);
      expression = expression.replace(/(┌)|(┘)/g, function (substring) {
        return (arguments.length <= 1 ? undefined : arguments[1]) ? '(' : ')';
      });
      return Module.parseOptionalChaining(expression);
    };

    Module.parsePipes = function parsePipes(expression) {
      var l = '┌';
      var r = '┘';
      var rx1 = /(.*?[^\|])\|([^\|]+)/;

      while (expression.match(rx1)) {
        expression = expression.replace(rx1, function (substring) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var value = args[0].trim();
          var params = Module.parsePipeParams(args[1]);
          var func = params.shift().trim();
          return "$$pipes." + func + ".transform" + l + [value].concat(params) + r;
        });
      }

      return expression;
    };

    Module.parsePipeParams = function parsePipeParams(expression) {
      var segments = [];
      var i = 0,
          word = '',
          block = 0;
      var t = expression.length;

      while (i < t) {
        var c = expression.substr(i, 1);

        if (c === '{' || c === '(' || c === '[') {
          block++;
        }

        if (c === '}' || c === ')' || c === ']') {
          block--;
        }

        if (c === ':' && block === 0) {
          if (word.length) {
            segments.push(word.trim());
          }

          word = '';
        } else {
          word += c;
        }

        i++;
      }

      if (word.length) {
        segments.push(word.trim());
      }

      return segments;
    };

    Module.parseOptionalChaining = function parseOptionalChaining(expression) {
      var regex = /(\w+(\?\.))+([\.|\w]+)/g;
      var previous;
      expression = expression.replace(regex, function (substring) {
        var tokens = substring.split('?.');

        for (var i = 0; i < tokens.length - 1; i++) {
          var a = i > 0 ? "(" + tokens[i] + " = " + previous + ")" : tokens[i];
          var b = tokens[i + 1];
          previous = i > 0 ? a + "." + b : "(" + a + " ? " + a + "." + b + " : void 0)";
        }

        return previous || '';
      });
      return expression;
    };

    Module.makeContext = function makeContext(module, instance, parentInstance, node, factory, selector) {
      instance.rxcompId = ++ID;
      var context = {
        module: module,
        instance: instance,
        parentInstance: parentInstance,
        node: node,
        factory: factory,
        selector: selector
      };
      var rxcompNodeId = node.rxcompId = node.rxcompId || instance.rxcompId;
      var nodeContexts = NODES[rxcompNodeId] || (NODES[rxcompNodeId] = []);
      nodeContexts.push(context);
      CONTEXTS[instance.rxcompId] = context;
      return context;
    };

    Module.deleteContext = function deleteContext(id, keepContext) {
      var keepContexts = [];
      var nodeContexts = NODES[id];

      if (nodeContexts) {
        nodeContexts.forEach(function (context) {
          if (context === keepContext) {
            keepContexts.push(keepContext);
          } else {
            var instance = context.instance;
            instance.unsubscribe$.next();
            instance.unsubscribe$.complete();
            instance.onDestroy();
            delete CONTEXTS[instance.rxcompId];
          }
        });

        if (keepContexts.length) {
          NODES[id] = keepContexts;
        } else {
          delete NODES[id];
        }
      }

      return keepContexts;
    };

    Module.matchSelectors = function matchSelectors(node, selectors, results) {
      for (var i = 0; i < selectors.length; i++) {
        var selectorResult = selectors[i](node);

        if (selectorResult) {
          var factory = selectorResult.factory;

          if (factory.prototype instanceof Component && factory.meta.template) {
            node.innerHTML = factory.meta.template;
          }

          results.push(selectorResult);

          if (factory.prototype instanceof Structure) {
            break;
          }
        }
      }

      return results;
    };

    Module.querySelectorsAll = function querySelectorsAll(node, selectors, results) {
      if (node.nodeType === 1) {
        var selectorResults = this.matchSelectors(node, selectors, []);
        results = results.concat(selectorResults);
        var structure = selectorResults.find(function (x) {
          return x.factory.prototype instanceof Structure;
        });

        if (structure) {
          return results;
        }

        var childNodes = node.childNodes;

        for (var i = 0; i < childNodes.length; i++) {
          results = this.querySelectorsAll(childNodes[i], selectors, results);
        }
      }

      return results;
    };

    Module.traverseUp = function traverseUp(node, callback, i) {
      if (i === void 0) {
        i = 0;
      }

      if (!node) {
        return;
      }

      var result = callback(node, i);

      if (result) {
        return result;
      }

      return this.traverseUp(node.parentNode, callback, i + 1);
    };

    Module.traverseDown = function traverseDown(node, callback, i) {
      if (i === void 0) {
        i = 0;
      }

      if (!node) {
        return;
      }

      var result = callback(node, i);

      if (result) {
        return result;
      }

      if (node.nodeType === 1) {
        var j = 0,
            t = node.childNodes.length;

        while (j < t && !result) {
          result = this.traverseDown(node.childNodes[j], callback, i + 1);
          j++;
        }
      }

      return result;
    };

    Module.traversePrevious = function traversePrevious(node, callback, i) {
      if (i === void 0) {
        i = 0;
      }

      if (!node) {
        return;
      }

      var result = callback(node, i);

      if (result) {
        return result;
      }

      return this.traversePrevious(node.previousSibling, callback, i + 1);
    };

    Module.traverseNext = function traverseNext(node, callback, i) {
      if (i === void 0) {
        i = 0;
      }

      if (!node) {
        return;
      }

      var result = callback(node, i);

      if (result) {
        return result;
      }

      return this.traverseNext(node.nextSibling, callback, i + 1);
    };

    return Module;
  }();
  function getParsableContextByNode(node) {
    var context;
    var rxcompId = node.rxcompId;

    if (rxcompId) {
      var nodeContexts = NODES[rxcompId];

      if (nodeContexts) {
        context = nodeContexts.reduce(function (previous, current) {
          if (current.factory.prototype instanceof Component) {
            return current;
          } else if (current.factory.prototype instanceof Context) {
            return previous ? previous : current;
          } else {
            return previous;
          }
        }, undefined);
      }
    }

    return context;
  }
  function getContextByNode(node) {
    var context = getParsableContextByNode(node);

    if (context && context.factory.prototype instanceof Structure) {
      context = undefined;
    }

    return context;
  }
  function getHost(instance, factory, node) {
    if (!node) {
      node = getContext(instance).node;
    }

    if (node.rxcompId) {
      var nodeContexts = NODES[node.rxcompId];

      if (nodeContexts) {
        for (var i = 0; i < nodeContexts.length; i++) {
          var context = nodeContexts[i];

          if (context.instance !== instance) {
            if (context.instance instanceof factory) {
              return context.instance;
            }
          }
        }
      }
    }

    if (node.parentNode) {
      return getHost(instance, factory, node.parentNode);
    } else {
      return undefined;
    }
  }

  var SrcDirective = function (_Directive) {
    _inheritsLoose(SrcDirective, _Directive);

    function SrcDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    _createClass(SrcDirective, [{
      key: "src",
      set: function set(src) {
        if (this.src_ !== src) {
          this.src_ = src;

          var _getContext = getContext(this),
              node = _getContext.node;

          src ? node.setAttribute('src', src) : node.removeAttribute('src');
        }
      },
      get: function get() {
        return this.src_;
      }
    }]);

    return SrcDirective;
  }(Directive);
  SrcDirective.meta = {
    selector: '[[src]]',
    inputs: ['src']
  };

  var StyleDirective = function (_Directive) {
    _inheritsLoose(StyleDirective, _Directive);

    function StyleDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = StyleDirective.prototype;

    _proto.onChanges = function onChanges() {
      var _getContext = getContext(this),
          node = _getContext.node;

      var style = this.style;
      var previousStyle = this.previousStyle;

      if (previousStyle) {
        for (var key in previousStyle) {
          if (!style || !style[key]) {
            var splitted = key.split('.');
            var propertyName = splitted.shift();
            node.style.removeProperty(propertyName);
          }
        }
      }

      if (style) {
        for (var _key in style) {
          if (!previousStyle || previousStyle[_key] !== style[_key]) {
            var _splitted = _key.split('.');

            var _propertyName = _splitted.shift();

            var value = style[_key] + (_splitted.length ? _splitted[0] : '');
            node.style.setProperty(_propertyName, value);
          }
        }
      }

      this.previousStyle = style;
    };

    return StyleDirective;
  }(Directive);
  StyleDirective.meta = {
    selector: "[[style]]",
    inputs: ['style']
  };

  var factories = [ClassDirective, EventDirective, ForStructure, HrefDirective, IfStructure, InnerHtmlDirective, JsonComponent, SrcDirective, StyleDirective];
  var pipes = [JsonPipe];

  var CoreModule = function (_Module) {
    _inheritsLoose(CoreModule, _Module);

    function CoreModule() {
      return _Module.apply(this, arguments) || this;
    }

    return CoreModule;
  }(Module);
  CoreModule.meta = {
    declarations: [].concat(factories, pipes),
    exports: [].concat(factories, pipes)
  };

  var ORDER = [Structure, Component, Directive];

  var Platform = function () {
    function Platform() {}

    Platform.bootstrap = function bootstrap(moduleFactory) {
      if (!moduleFactory) {
        throw 'missing moduleFactory';
      }

      if (!moduleFactory.meta) {
        throw 'missing moduleFactory meta';
      }

      if (!moduleFactory.meta.bootstrap) {
        throw 'missing bootstrap';
      }

      if (!moduleFactory.meta.bootstrap.meta) {
        throw 'missing bootstrap meta';
      }

      if (!moduleFactory.meta.bootstrap.meta.selector) {
        throw 'missing bootstrap meta selector';
      }

      var meta = this.resolveMeta(moduleFactory);
      var module = new moduleFactory();
      module.meta = meta;
      var instances = module.compile(meta.node, window);
      module.instances = instances;
      var root = instances[0];
      root.pushChanges();
      return module;
    };

    Platform.isBrowser = function isBrowser() {
      return Boolean(window);
    };

    Platform.querySelector = function querySelector(selector) {
      return document.querySelector(selector);
    };

    Platform.resolveMeta = function resolveMeta(moduleFactory) {
      var meta = this.resolveImportedMeta(moduleFactory);
      var bootstrap = moduleFactory.meta.bootstrap;
      var node = this.querySelector(bootstrap.meta.selector);

      if (!node) {
        throw "missing node " + bootstrap.meta.selector;
      }

      var nodeInnerHTML = node.innerHTML;
      var pipes = this.resolvePipes(meta);
      var factories = this.resolveFactories(meta);
      this.sortFactories(factories);
      factories.unshift(bootstrap);
      var selectors = this.unwrapSelectors(factories);
      return {
        factories: factories,
        pipes: pipes,
        selectors: selectors,
        bootstrap: bootstrap,
        node: node,
        nodeInnerHTML: nodeInnerHTML
      };
    };

    Platform.resolveImportedMeta = function resolveImportedMeta(moduleFactory) {
      var _this = this;

      var meta = Object.assign({
        imports: [],
        declarations: [],
        pipes: [],
        exports: []
      }, moduleFactory.meta);
      meta.imports = (moduleFactory.meta.imports || []).map(function (moduleFactory) {
        return _this.resolveImportedMeta(moduleFactory);
      });
      return meta;
    };

    Platform.resolvePipes = function resolvePipes(meta, exported) {
      var _this2 = this;

      var importedPipes = meta.imports.map(function (importMeta) {
        return _this2.resolvePipes(importMeta, true);
      });
      var pipes = {};
      var pipeList = (exported ? meta.exports : meta.declarations).filter(function (x) {
        return x.prototype instanceof Pipe;
      });
      pipeList.forEach(function (pipeFactory) {
        return pipes[pipeFactory.meta.name] = pipeFactory;
      });
      return Object.assign.apply(Object, [{}].concat(importedPipes, [pipes]));
    };

    Platform.resolveFactories = function resolveFactories(meta, exported) {
      var _this3 = this,
          _Array$prototype$conc;

      var importedFactories = meta.imports.map(function (importMeta) {
        return _this3.resolveFactories(importMeta, true);
      });
      var factoryList = (exported ? meta.exports : meta.declarations).filter(function (x) {
        return x.prototype instanceof Factory;
      });
      return (_Array$prototype$conc = Array.prototype.concat).call.apply(_Array$prototype$conc, [factoryList].concat(importedFactories));
    };

    Platform.sortFactories = function sortFactories(factories) {
      factories.sort(function (a, b) {
        var ai = ORDER.reduce(function (p, c, i) {
          return a.prototype instanceof c ? i : p;
        }, -1);
        var bi = ORDER.reduce(function (p, c, i) {
          return b.prototype instanceof c ? i : p;
        }, -1);
        var o = ai - bi;

        if (o === 0) {
          return (a.meta.hosts ? 1 : 0) - (b.meta.hosts ? 1 : 0);
        }

        return o;
      });
    };

    Platform.getExpressions = function getExpressions(selector) {
      var matchers = [];
      selector.replace(/\.([\w\-\_]+)|\[(.+?\]*)(\=)(.*?)\]|\[(.+?\]*)\]|([\w\-\_]+)/g, function (value, c1, a2, u3, v4, a5, e6) {
        if (c1) {
          matchers.push(function (node) {
            return node.classList.contains(c1);
          });
        }

        if (a2) {
          matchers.push(function (node) {
            return node.hasAttribute(a2) && node.getAttribute(a2) === v4 || node.hasAttribute("[" + a2 + "]") && node.getAttribute("[" + a2 + "]") === v4;
          });
        }

        if (a5) {
          matchers.push(function (node) {
            return node.hasAttribute(a5) || node.hasAttribute("[" + a5 + "]");
          });
        }

        if (e6) {
          matchers.push(function (node) {
            return node.nodeName.toLowerCase() === e6.toLowerCase();
          });
        }

        return '';
      });
      return matchers;
    };

    Platform.unwrapSelectors = function unwrapSelectors(factories) {
      var _this4 = this;

      var selectors = [];
      factories.forEach(function (factory) {
        if (factory.meta && factory.meta.selector) {
          factory.meta.selector.split(',').forEach(function (selector) {
            selector = selector.trim();
            var excludes = [];
            var matchSelector = selector.replace(/\:not\((.+?)\)/g, function (value, unmatchSelector) {
              excludes = _this4.getExpressions(unmatchSelector);
              return '';
            });

            var includes = _this4.getExpressions(matchSelector);

            selectors.push(function (node) {
              var included = includes.reduce(function (p, match) {
                return p && match(node);
              }, true);
              var excluded = excludes.reduce(function (p, match) {
                return p || match(node);
              }, false);

              if (included && !excluded) {
                return {
                  node: node,
                  factory: factory,
                  selector: selector
                };
              } else {
                return false;
              }
            });
          });
        }
      });
      return selectors;
    };

    return Platform;
  }();
  var PLATFORM_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var PLATFORM_JS_DOM = typeof window !== 'undefined' && window.name === 'nodejs' || navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom');
  var PLATFORM_NODE = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  var PLATFORM_WEB_WORKER = typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';

  var Browser = function (_Platform) {
    _inheritsLoose(Browser, _Platform);

    function Browser() {
      return _Platform.apply(this, arguments) || this;
    }

    return Browser;
  }(Platform);

  exports.Browser = Browser;
  exports.ClassDirective = ClassDirective;
  exports.Component = Component;
  exports.Context = Context;
  exports.CoreModule = CoreModule;
  exports.Directive = Directive;
  exports.EventDirective = EventDirective;
  exports.Factory = Factory;
  exports.ForItem = ForItem;
  exports.ForStructure = ForStructure;
  exports.HrefDirective = HrefDirective;
  exports.IfStructure = IfStructure;
  exports.InnerHtmlDirective = InnerHtmlDirective;
  exports.JsonComponent = JsonComponent;
  exports.JsonPipe = JsonPipe;
  exports.Module = Module;
  exports.PLATFORM_BROWSER = PLATFORM_BROWSER;
  exports.PLATFORM_JS_DOM = PLATFORM_JS_DOM;
  exports.PLATFORM_NODE = PLATFORM_NODE;
  exports.PLATFORM_WEB_WORKER = PLATFORM_WEB_WORKER;
  exports.Pipe = Pipe;
  exports.Platform = Platform;
  exports.SrcDirective = SrcDirective;
  exports.Structure = Structure;
  exports.StyleDirective = StyleDirective;
  exports.getContext = getContext;
  exports.getContextByNode = getContextByNode;
  exports.getHost = getHost;
  exports.getParsableContextByNode = getParsableContextByNode;

  return exports;

}({}, rxjs, rxjs.operators));

/**
 * @license rxcomp-form v1.0.0-beta.9
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

this.rxcomp = this.rxcomp || {};
this.rxcomp.form = (function (exports, rxcomp, rxjs, operators) {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var FormAbstractCollectionDirective = function (_Directive) {
    _inheritsLoose(FormAbstractCollectionDirective, _Directive);

    function FormAbstractCollectionDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormAbstractCollectionDirective.prototype;

    _proto.onChanges = function onChanges(changes) {
      var _getContext = rxcomp.getContext(this),
          node = _getContext.node;

      var flags = this.control.flags;
      Object.keys(flags).forEach(function (key) {
        flags[key] ? node.classList.add(key) : node.classList.remove(key);
      });
    };

    _createClass(FormAbstractCollectionDirective, [{
      key: "control",
      get: function get() {
        return {};
      }
    }]);

    return FormAbstractCollectionDirective;
  }(rxcomp.Directive);
  FormAbstractCollectionDirective.meta = {
    selector: '',
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormArrayDirective = function (_FormAbstractCollecti) {
    _inheritsLoose(FormArrayDirective, _FormAbstractCollecti);

    function FormArrayDirective() {
      return _FormAbstractCollecti.apply(this, arguments) || this;
    }

    _createClass(FormArrayDirective, [{
      key: "control",
      get: function get() {
        if (this.formArray) {
          return this.formArray;
        } else {
          if (!this.host) {
            throw 'missing form collection';
          }

          return this.host.control.get(this.formArrayName);
        }
      }
    }]);

    return FormArrayDirective;
  }(FormAbstractCollectionDirective);
  FormArrayDirective.meta = {
    selector: '[formArray],[formArrayName]',
    inputs: ['formArray', 'formArrayName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormAbstractDirective = function (_Directive) {
    _inheritsLoose(FormAbstractDirective, _Directive);

    function FormAbstractDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormAbstractDirective.prototype;

    _proto.onInit = function onInit() {
      var _this = this;

      var node = rxcomp.getContext(this).node;
      rxjs.fromEvent(node, 'input').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onChange(event);
      });
      rxjs.fromEvent(node, 'change').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onChange(event);
      });
      rxjs.fromEvent(node, 'blur').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onBlur(event);
      });
    };

    _proto.onChanges = function onChanges(changes) {
      var node = rxcomp.getContext(this).node;

      if (this.formControlName) {
        node.name = this.formControlName;
      }

      var control = this.control;
      var flags = control.flags;
      Object.keys(flags).forEach(function (key) {
        flags[key] ? node.classList.add(key) : node.classList.remove(key);
      });
      this.writeValue(control.value);
    };

    _proto.writeValue = function writeValue(value) {
      var node = rxcomp.getContext(this).node;
      node.value = value == null ? '' : value;
    };

    _proto.onChange = function onChange(event) {
      var node = rxcomp.getContext(this).node;
      this.control.value = node.value === '' ? null : node.value;
    };

    _proto.onBlur = function onBlur(event) {
      this.control.touched = true;
    };

    _proto.setDisabledState = function setDisabledState(disabled) {
      var node = rxcomp.getContext(this).node;
      node.disabled = disabled;
    };

    _createClass(FormAbstractDirective, [{
      key: "control",
      get: function get() {
        if (this.formControl) {
          return this.formControl;
        } else {
          if (!this.host) {
            throw 'missing form collection';
          }

          return this.host.control.get(this.formControlName);
        }
      }
    }]);

    return FormAbstractDirective;
  }(rxcomp.Directive);
  FormAbstractDirective.meta = {
    selector: '',
    inputs: ['formControl', 'formControlName', 'value'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormCheckboxDirective = function (_FormAbstractDirectiv) {
    _inheritsLoose(FormCheckboxDirective, _FormAbstractDirectiv);

    function FormCheckboxDirective() {
      return _FormAbstractDirectiv.apply(this, arguments) || this;
    }

    var _proto = FormCheckboxDirective.prototype;

    _proto.onInit = function onInit() {
      var _this = this;

      var node = rxcomp.getContext(this).node;
      rxjs.fromEvent(node, 'change').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onChange(event);
      });
      rxjs.fromEvent(node, 'blur').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onBlur(event);
      });
    };

    _proto.writeValue = function writeValue(value) {
      var node = rxcomp.getContext(this).node;
      value === this.value ? node.setAttribute('checked', value) : node.removeAttribute('checked');
    };

    _proto.setDisabledState = function setDisabledState(disabled) {
      var node = rxcomp.getContext(this).node;
      node.disabled = disabled;
    };

    _proto.onChange = function onChange(event) {
      var node = rxcomp.getContext(this).node;
      this.control.value = node.checked ? this.value : this.value === true ? false : null;
    };

    _proto.onBlur = function onBlur(event) {
      this.control.touched = true;
    };

    return FormCheckboxDirective;
  }(FormAbstractDirective);
  FormCheckboxDirective.meta = {
    selector: 'input[type=checkbox][formControl],input[type=checkbox][formControlName]',
    inputs: ['formControl', 'formControlName', 'value'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormFieldComponent = function (_Component) {
    _inheritsLoose(FormFieldComponent, _Component);

    function FormFieldComponent() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = FormFieldComponent.prototype;

    _proto.onChanges = function onChanges(changes) {
      var _getContext = rxcomp.getContext(this),
          node = _getContext.node;

      var flags = this.control.flags;
      Object.keys(flags).forEach(function (key) {
        flags[key] ? node.classList.add(key) : node.classList.remove(key);
      });
    };

    _createClass(FormFieldComponent, [{
      key: "control",
      get: function get() {
        if (this.formField) {
          return this.formField;
        } else {
          if (!this.host) {
            throw 'missing form collection';
          }

          return this.host.control.get(this.formFieldName);
        }
      }
    }]);

    return FormFieldComponent;
  }(rxcomp.Component);
  FormFieldComponent.meta = {
    selector: '[formField],[formFieldName]',
    inputs: ['formField', 'formFieldName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormGroupDirective = function (_FormAbstractCollecti) {
    _inheritsLoose(FormGroupDirective, _FormAbstractCollecti);

    function FormGroupDirective() {
      return _FormAbstractCollecti.apply(this, arguments) || this;
    }

    _createClass(FormGroupDirective, [{
      key: "control",
      get: function get() {
        if (this.formGroup) {
          return this.formGroup;
        } else {
          if (!this.host) {
            throw 'missing form collection';
          }

          return this.host.control.get(this.formGroupName);
        }
      }
    }]);

    return FormGroupDirective;
  }(FormAbstractCollectionDirective);
  FormGroupDirective.meta = {
    selector: '[formGroup],[formGroupName]',
    inputs: ['formGroup', 'formGroupName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormInputDirective = function (_FormAbstractDirectiv) {
    _inheritsLoose(FormInputDirective, _FormAbstractDirectiv);

    function FormInputDirective() {
      return _FormAbstractDirectiv.apply(this, arguments) || this;
    }

    var _proto = FormInputDirective.prototype;

    _proto.writeValue = function writeValue(value) {
      var node = rxcomp.getContext(this).node;
      node.value = value == null ? '' : value;
    };

    _proto.onChange = function onChange(event) {
      var node = rxcomp.getContext(this).node;
      this.control.value = node.value === '' ? null : node.value;
    };

    _proto.onBlur = function onBlur(event) {
      this.control.touched = true;
    };

    return FormInputDirective;
  }(FormAbstractDirective);
  FormInputDirective.meta = {
    selector: 'input[type=text][formControl],input[type=text][formControlName],input[type=email][formControl],input[type=email][formControlName],input[type=password][formControl],input[type=password][formControlName],textarea[formControl],textarea[formControlName]',
    inputs: ['formControl', 'formControlName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormPlaceholderDirective = function (_Directive) {
    _inheritsLoose(FormPlaceholderDirective, _Directive);

    function FormPlaceholderDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormPlaceholderDirective.prototype;

    _proto.onChanges = function onChanges(changes) {
      var node = rxcomp.getContext(this).node;
      node.setAttribute('placeholder', this.placeholder || '');
    };

    return FormPlaceholderDirective;
  }(rxcomp.Directive);
  FormPlaceholderDirective.meta = {
    selector: 'input[placeholder],textarea[placeholder]',
    inputs: ['placeholder']
  };

  var FormRadioDirective = function (_FormAbstractDirectiv) {
    _inheritsLoose(FormRadioDirective, _FormAbstractDirectiv);

    function FormRadioDirective() {
      return _FormAbstractDirectiv.apply(this, arguments) || this;
    }

    var _proto = FormRadioDirective.prototype;

    _proto.onInit = function onInit() {
      var _this = this;

      var node = rxcomp.getContext(this).node;
      rxjs.fromEvent(node, 'change').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onChange(event);
      });
      rxjs.fromEvent(node, 'blur').pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
        return _this.onBlur(event);
      });
    };

    _proto.writeValue = function writeValue(value) {
      var node = rxcomp.getContext(this).node;
      node.checked = node.value === value;
    };

    _proto.setDisabledState = function setDisabledState(disabled) {
      var node = rxcomp.getContext(this).node;
      node.disabled = disabled;
    };

    _proto.onChange = function onChange(event) {
      var node = rxcomp.getContext(this).node;

      if (node.checked) {
        this.control.value = node.value;
      }
    };

    _proto.onBlur = function onBlur(event) {
      this.control.touched = true;
    };

    return FormRadioDirective;
  }(FormAbstractDirective);
  FormRadioDirective.meta = {
    selector: 'input[type=radio][formControl],input[type=radio][formControlName]',
    inputs: ['formControl', 'formControlName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormSelectDirective = function (_FormAbstractDirectiv) {
    _inheritsLoose(FormSelectDirective, _FormAbstractDirectiv);

    function FormSelectDirective() {
      return _FormAbstractDirectiv.apply(this, arguments) || this;
    }

    var _proto = FormSelectDirective.prototype;

    _proto.writeValue = function writeValue(value) {
      var node = rxcomp.getContext(this).node;
      node.value = value == null ? '' : value;
    };

    _proto.setDisabledState = function setDisabledState(disabled) {
      var node = rxcomp.getContext(this).node;
      node.disabled = disabled;
    };

    _proto.onChange = function onChange(event) {
      var node = rxcomp.getContext(this).node;
      this.control.value = node.value === '' ? null : node.value;
    };

    _proto.onBlur = function onBlur(event) {
      this.control.touched = true;
    };

    return FormSelectDirective;
  }(FormAbstractDirective);
  FormSelectDirective.meta = {
    selector: 'select[formControl],select[formControlName]',
    inputs: ['formControl', 'formControlName'],
    hosts: {
      host: FormAbstractCollectionDirective
    }
  };

  var FormSubmitDirective = function (_Directive) {
    _inheritsLoose(FormSubmitDirective, _Directive);

    function FormSubmitDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormSubmitDirective.prototype;

    _proto.onInit = function onInit() {
      var _getContext = rxcomp.getContext(this),
          module = _getContext.module,
          node = _getContext.node,
          selector = _getContext.selector,
          parentInstance = _getContext.parentInstance;

      var event = this.event = selector.replace(/\[|\]|\(|\)/g, '');
      var form = node;
      var event$ = this.event$ = rxjs.fromEvent(form, 'submit').pipe(operators.tap(function (event) {
        event.preventDefault();
      }), operators.shareReplay(1));
      var expression = node.getAttribute("(" + event + ")");

      if (expression) {
        var outputFunction = module.makeFunction(expression, ['$event']);
        event$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (event) {
          module.resolve(outputFunction, parentInstance, event);
        });
      } else {
        parentInstance[event + "$"] = event$;
      }
    };

    return FormSubmitDirective;
  }(rxcomp.Directive);
  FormSubmitDirective.meta = {
    selector: "[(submit)]"
  };

  var FormValidator = function () {
    function FormValidator(validator, params) {
      this.validator = validator;
      this.params$ = new rxjs.BehaviorSubject(params);
    }

    var _proto = FormValidator.prototype;

    _proto.validate = function validate(value) {
      return this.validator(value, this.params);
    };

    _createClass(FormValidator, [{
      key: "params",
      get: function get() {
        return this.params$.getValue();
      },
      set: function set(params) {
        if (params) {
          var current = this.params;
          var differs = Object.keys(params).reduce(function (flag, key) {
            return flag || !current || current[key] !== params[key];
          }, false);

          if (differs) {
            this.params$.next(params);
          }
        }
      }
    }]);

    return FormValidator;
  }();

  function NullValidator() {
    return new FormValidator(function (value, params) {
      return null;
    });
  }
  function RequiredValidator() {
    return new FormValidator(function (value, params) {
      return value == null || value.length === 0 ? {
        required: true
      } : null;
    });
  }
  function RequiredTrueValidator() {
    return new FormValidator(function (value, params) {
      return value === true ? null : {
        required: true
      };
    });
  }
  function MinValidator(min) {
    return new FormValidator(function (value, params) {
      var min = params.min;

      if (!value || !min) {
        return null;
      }

      value = parseFloat(value);
      return !isNaN(value) && value < min ? {
        min: {
          min: min,
          actual: value
        }
      } : null;
    }, {
      min: min
    });
  }
  function MaxValidator(max) {
    return new FormValidator(function (value, params) {
      var max = params.max;

      if (!value || !max) {
        return null;
      }

      value = parseFloat(value);
      return !isNaN(value) && value > max ? {
        max: {
          max: max,
          actual: value
        }
      } : null;
    }, {
      max: max
    });
  }
  function MinLengthValidator(minlength) {
    return new FormValidator(function (value, params) {
      var minlength = params.minlength;

      if (!value || !minlength) {
        return null;
      }

      var length = value ? value.length : 0;
      return length < minlength ? {
        minlength: {
          requiredLength: minlength,
          actualLength: length
        }
      } : null;
    }, {
      minlength: minlength
    });
  }
  function MaxLengthValidator(maxlength) {
    return new FormValidator(function (value, params) {
      var maxlength = params.maxlength;

      if (!value || !maxlength) {
        return null;
      }

      var length = value ? value.length : 0;
      return length > maxlength ? {
        minlength: {
          requiredLength: maxlength,
          actualLength: length
        }
      } : null;
    }, {
      maxlength: maxlength
    });
  }
  function PatternValidator(pattern) {
    return new FormValidator(function (value, params) {
      var pattern = params.pattern;

      if (!value || !pattern) {
        return null;
      }

      var regex = patternToRegEx(pattern);
      return regex.test(value) ? null : {
        pattern: {
          requiredPattern: regex.toString(),
          actualValue: value
        }
      };
    }, {
      pattern: pattern
    });
  }
  function EmailValidator() {
    var regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return new FormValidator(function (value, params) {
      if (!value) {
        return null;
      }

      return regex.test(value) ? null : {
        email: true
      };
    });
  }

  function patternToRegEx(pattern) {
    var regex;

    if (pattern instanceof RegExp) {
      regex = pattern;
    } else if (typeof pattern === 'string') {
      pattern = pattern.charAt(0) === '^' ? pattern : "^" + pattern;
      pattern = pattern.charAt(pattern.length - 1) === '$' ? pattern : pattern + "$";
      regex = new RegExp(pattern);
    }

    return regex || new RegExp('');
  }

  var validators = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NullValidator: NullValidator,
    RequiredValidator: RequiredValidator,
    RequiredTrueValidator: RequiredTrueValidator,
    MinValidator: MinValidator,
    MaxValidator: MaxValidator,
    MinLengthValidator: MinLengthValidator,
    MaxLengthValidator: MaxLengthValidator,
    PatternValidator: PatternValidator,
    EmailValidator: EmailValidator
  });

  var FormEmailDirective = function (_Directive) {
    _inheritsLoose(FormEmailDirective, _Directive);

    function FormEmailDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormEmailDirective.prototype;

    _proto.onInit = function onInit() {
      var validator = this.validator = EmailValidator();

      if (this.host) {
        this.host.control.addValidators(validator);
      }
    };

    return FormEmailDirective;
  }(rxcomp.Directive);
  FormEmailDirective.meta = {
    selector: '[email][formControl],[email][formControlName]',
    inputs: ['email'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormMaxLengthDirective = function (_Directive) {
    _inheritsLoose(FormMaxLengthDirective, _Directive);

    function FormMaxLengthDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.maxlength = Number.POSITIVE_INFINITY;
      return _this;
    }

    var _proto = FormMaxLengthDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = MaxLengthValidator(this.maxlength);

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    _proto.onChanges = function onChanges(changes) {
      if (this.validator) {
        this.validator.params = {
          maxlength: this.maxlength
        };
      }
    };

    return FormMaxLengthDirective;
  }(rxcomp.Directive);
  FormMaxLengthDirective.meta = {
    selector: '[maxlength][formControl],[maxlength][formControlName]',
    inputs: ['maxlength'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormMaxDirective = function (_Directive) {
    _inheritsLoose(FormMaxDirective, _Directive);

    function FormMaxDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.max = Number.POSITIVE_INFINITY;
      return _this;
    }

    var _proto = FormMaxDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = MaxValidator(this.max);

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    _proto.onChanges = function onChanges(changes) {
      if (this.validator) {
        this.validator.params = {
          max: this.max
        };
      }
    };

    return FormMaxDirective;
  }(rxcomp.Directive);
  FormMaxDirective.meta = {
    selector: '[max][formControl],[max][formControlName]',
    inputs: ['max'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormMinLengthDirective = function (_Directive) {
    _inheritsLoose(FormMinLengthDirective, _Directive);

    function FormMinLengthDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.minlength = Number.NEGATIVE_INFINITY;
      return _this;
    }

    var _proto = FormMinLengthDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = MinLengthValidator(this.minlength);

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    _proto.onChanges = function onChanges(changes) {
      if (this.validator) {
        this.validator.params = {
          minlength: this.minlength
        };
      }
    };

    return FormMinLengthDirective;
  }(rxcomp.Directive);
  FormMinLengthDirective.meta = {
    selector: '[minlength][formControl],[minlength][formControlName]',
    inputs: ['minlength'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormMinDirective = function (_Directive) {
    _inheritsLoose(FormMinDirective, _Directive);

    function FormMinDirective() {
      var _this;

      _this = _Directive.apply(this, arguments) || this;
      _this.min = Number.NEGATIVE_INFINITY;
      return _this;
    }

    var _proto = FormMinDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = MinValidator(this.min);

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    _proto.onChanges = function onChanges(changes) {
      if (this.validator) {
        this.validator.params = {
          min: this.min
        };
      }
    };

    return FormMinDirective;
  }(rxcomp.Directive);
  FormMinDirective.meta = {
    selector: '[min][formControl],[min][formControlName]',
    inputs: ['min'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormPatternDirective = function (_Directive) {
    _inheritsLoose(FormPatternDirective, _Directive);

    function FormPatternDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormPatternDirective.prototype;

    _proto.onInit = function onInit() {
      if (this.pattern) {
        this.validator = PatternValidator(this.pattern);

        if (this.host) {
          this.host.control.addValidators(this.validator);
        }
      }
    };

    _proto.onChanges = function onChanges(changes) {
      if (this.validator) {
        this.validator.params = {
          pattern: this.pattern
        };
      }
    };

    return FormPatternDirective;
  }(rxcomp.Directive);
  FormPatternDirective.meta = {
    selector: '[pattern][formControl],[pattern][formControlName]',
    inputs: ['pattern'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormRequiredTrueDirective = function (_Directive) {
    _inheritsLoose(FormRequiredTrueDirective, _Directive);

    function FormRequiredTrueDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormRequiredTrueDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = RequiredTrueValidator();

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    return FormRequiredTrueDirective;
  }(rxcomp.Directive);
  FormRequiredTrueDirective.meta = {
    selector: '[requiredTrue][formControl],[requiredTrue][formControlName]',
    inputs: ['requiredTrue'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var FormRequiredDirective = function (_Directive) {
    _inheritsLoose(FormRequiredDirective, _Directive);

    function FormRequiredDirective() {
      return _Directive.apply(this, arguments) || this;
    }

    var _proto = FormRequiredDirective.prototype;

    _proto.onInit = function onInit() {
      this.validator = RequiredValidator();

      if (this.host) {
        this.host.control.addValidators(this.validator);
      }
    };

    return FormRequiredDirective;
  }(rxcomp.Directive);
  FormRequiredDirective.meta = {
    selector: '[required][formControl],[required][formControlName]',
    inputs: ['required'],
    hosts: {
      host: FormAbstractDirective
    }
  };

  var factories = [FormArrayDirective, FormCheckboxDirective, FormFieldComponent, FormGroupDirective, FormInputDirective, FormPlaceholderDirective, FormRadioDirective, FormSelectDirective, FormSubmitDirective, FormEmailDirective, FormMaxDirective, FormMaxLengthDirective, FormMinDirective, FormMinLengthDirective, FormPatternDirective, FormRequiredDirective, FormRequiredTrueDirective];
  var pipes = [];

  var FormModule = function (_Module) {
    _inheritsLoose(FormModule, _Module);

    function FormModule() {
      return _Module.apply(this, arguments) || this;
    }

    return FormModule;
  }(rxcomp.Module);
  FormModule.meta = {
    declarations: [].concat(factories, pipes),
    exports: [].concat(factories, pipes)
  };

  var FormStatus;

  (function (FormStatus) {
    FormStatus["Pending"] = "pending";
    FormStatus["Valid"] = "valid";
    FormStatus["Invalid"] = "invalid";
    FormStatus["Disabled"] = "disabled";
    FormStatus["Hidden"] = "hidden";
  })(FormStatus || (FormStatus = {}));
  var FormStatus$1 = FormStatus;

  var FormAbstract = function () {
    function FormAbstract(validators) {
      var _this = this;

      this.value_ = undefined;
      this.submitted_ = false;
      this.touched_ = false;
      this.dirty_ = false;
      this.valueSubject = new rxjs.BehaviorSubject(null);
      this.statusSubject = new rxjs.BehaviorSubject(null);
      this.validatorsSubject = new rxjs.ReplaySubject().pipe(operators.switchAll());
      this.value$ = this.valueSubject.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.tap(function () {
        _this.submitted_ = false;
        _this.dirty_ = true;

        _this.statusSubject.next(null);
      }), operators.shareReplay(1));
      this.status$ = rxjs.merge(this.statusSubject, this.validatorsSubject).pipe(operators.switchMap(function () {
        return _this.validate$(_this.value);
      }), operators.shareReplay(1));
      this.changes$ = rxjs.merge(this.value$, this.status$).pipe(operators.map(function () {
        return _this.value;
      }), operators.auditTime(1), operators.shareReplay(1));
      this.validators = validators ? Array.isArray(validators) ? validators : [validators] : [];
    }

    var _proto = FormAbstract.prototype;

    _proto.initSubjects_ = function initSubjects_() {
      this.switchValidators_();
    };

    _proto.switchValidators_ = function switchValidators_() {
      var validatorParams = this.validators.map(function (x) {
        return x.params$;
      });
      var validatorParams$ = validatorParams.length ? rxjs.combineLatest(validatorParams) : rxjs.of(validatorParams);
      this.validatorsSubject.next(validatorParams$);
    };

    _proto.initObservables_ = function initObservables_() {};

    _proto.validate$ = function validate$(value) {
      var _this2 = this;

      if (this.status === FormStatus$1.Disabled || this.status === FormStatus$1.Hidden || this.submitted_ || !this.validators.length) {
        this.errors = {};

        if (this.status === FormStatus$1.Invalid) {
          this.status = FormStatus$1.Valid;
        }

        return rxjs.of(this.errors);
      } else {
        return rxjs.combineLatest(this.validators.map(function (x) {
          var result$ = x.validate(value);
          return rxjs.isObservable(result$) ? result$ : rxjs.of(result$);
        })).pipe(operators.map(function (results) {
          _this2.errors = Object.assign.apply(Object, [{}].concat(results));
          _this2.status = Object.keys(_this2.errors).length === 0 ? FormStatus$1.Valid : FormStatus$1.Invalid;
          return _this2.errors;
        }));
      }
    };

    _proto.reset = function reset(status) {
      this.status = status || FormStatus$1.Pending;
      this.value_ = null;
      this.dirty_ = false;
      this.touched_ = false;
      this.submitted_ = false;
      this.statusSubject.next(null);
    };

    _proto.patch = function patch(value) {
      this.value_ = value;
      this.dirty_ = true;
      this.submitted_ = false;
      this.statusSubject.next(null);
    };

    _proto.addValidators = function addValidators() {
      var _this$validators;

      (_this$validators = this.validators).push.apply(_this$validators, arguments);

      this.switchValidators_();
    };

    _proto.replaceValidators = function replaceValidators() {
      for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }

      this.validators = validators;
      this.switchValidators_();
    };

    _proto.clearValidators = function clearValidators() {
      this.validators = [];
      this.switchValidators_();
    };

    _createClass(FormAbstract, [{
      key: "pending",
      get: function get() {
        return this.status === FormStatus$1.Pending;
      }
    }, {
      key: "valid",
      get: function get() {
        return this.status !== FormStatus$1.Invalid;
      }
    }, {
      key: "invalid",
      get: function get() {
        return this.status === FormStatus$1.Invalid;
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.status === FormStatus$1.Disabled;
      },
      set: function set(disabled) {
        if (disabled) {
          if (this.status !== FormStatus$1.Disabled) {
            this.status = FormStatus$1.Disabled;
            this.dirty_ = false;
            this.touched_ = false;
            this.submitted_ = false;
            this.statusSubject.next(null);
          }
        } else {
          if (this.status === FormStatus$1.Disabled) {
            this.status = FormStatus$1.Pending;
            this.dirty_ = false;
            this.touched_ = false;
            this.submitted_ = false;
            this.statusSubject.next(null);
          }
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.status !== FormStatus$1.Disabled;
      }
    }, {
      key: "hidden",
      get: function get() {
        return this.status === FormStatus$1.Hidden;
      },
      set: function set(hidden) {
        if (hidden) {
          if (this.status !== FormStatus$1.Hidden) {
            this.status = FormStatus$1.Hidden;
            this.dirty_ = false;
            this.touched_ = false;
            this.submitted_ = false;
            this.statusSubject.next(null);
          }
        } else {
          if (this.status === FormStatus$1.Hidden) {
            this.status = FormStatus$1.Pending;
            this.dirty_ = false;
            this.touched_ = false;
            this.submitted_ = false;
            this.statusSubject.next(null);
          }
        }
      }
    }, {
      key: "visible",
      get: function get() {
        return this.status !== FormStatus$1.Hidden;
      }
    }, {
      key: "submitted",
      get: function get() {
        return this.submitted_;
      },
      set: function set(submitted) {
        this.submitted_ = submitted;
        this.statusSubject.next(null);
      }
    }, {
      key: "dirty",
      get: function get() {
        return this.dirty_;
      }
    }, {
      key: "pristine",
      get: function get() {
        return !this.dirty_;
      }
    }, {
      key: "touched",
      get: function get() {
        return this.touched_;
      },
      set: function set(touched) {
        this.touched_ = touched;
        this.statusSubject.next(null);
      }
    }, {
      key: "untouched",
      get: function get() {
        return !this.touched_;
      }
    }, {
      key: "flags",
      get: function get() {
        return {
          untouched: this.untouched,
          touched: this.touched,
          pristine: this.pristine,
          dirty: this.dirty,
          pending: this.pending,
          enabled: this.enabled,
          disabled: this.disabled,
          hidden: this.hidden,
          visible: this.visible,
          valid: this.valid,
          invalid: this.invalid,
          submitted: this.submitted
        };
      }
    }, {
      key: "value",
      get: function get() {
        return this.value_;
      },
      set: function set(value) {
        this.value_ = value;
        this.valueSubject.next(value);
      }
    }]);

    return FormAbstract;
  }();

  var FormControl = function (_FormAbstract) {
    _inheritsLoose(FormControl, _FormAbstract);

    function FormControl(value, validators) {
      var _this;

      if (value === void 0) {
        value = null;
      }

      _this = _FormAbstract.call(this, validators) || this;
      _this.value_ = value;
      _this.status = FormStatus$1.Pending;
      _this.errors = {};

      _this.initSubjects_();

      _this.initObservables_();

      _this.statusSubject.next(null);

      return _this;
    }

    return FormControl;
  }(FormAbstract);

  var FormAbstractCollection = function (_FormAbstract) {
    _inheritsLoose(FormAbstractCollection, _FormAbstract);

    function FormAbstractCollection(controls, validators) {
      var _this;

      _this = _FormAbstract.call(this, validators) || this;
      _this.changesChildren = new rxjs.BehaviorSubject(undefined);
      _this.controls = controls;

      _this.initControls_();

      _this.initSubjects_();

      _this.initObservables_();

      return _this;
    }

    var _proto = FormAbstractCollection.prototype;

    _proto.initControl_ = function initControl_(controlOrValue, key) {
      var control = controlOrValue instanceof FormAbstract ? controlOrValue : new FormControl(controlOrValue);
      control.addValidators.apply(control, this.validators);
      control.name = key;
      return control;
    };

    _proto.initControls_ = function initControls_() {
      var _this2 = this;

      this.forEach_(function (control, key) {
        _this2.init(control, key);
      });
      return this.controls;
    };

    _proto.initSubjects_ = function initSubjects_() {
      this.changesChildren = this.changesChildren.pipe(operators.switchAll());
      this.switchSubjects_();
    };

    _proto.switchSubjects_ = function switchSubjects_() {
      var changesChildren = this.reduce_(function (result, control) {
        result.push(control.changes$);
        return result;
      }, []);
      var changesChildren$ = changesChildren.length ? rxjs.combineLatest(changesChildren) : rxjs.of(changesChildren);
      this.changesChildren.next(changesChildren$);
    };

    _proto.initObservables_ = function initObservables_() {
      var _this3 = this;

      this.changes$ = this.changesChildren.pipe(operators.map(function () {
        return _this3.value;
      }), operators.shareReplay(1));
    };

    _proto.validate = function validate(value) {
      var errors;

      if (this.status === FormStatus$1.Disabled || this.status === FormStatus$1.Hidden) {
        errors = [];
      } else {
        var errors_ = this.validators.map(function (x) {
          return x.validate(value);
        }).filter(function (x) {
          return x !== null;
        });
        errors = this.reduce_(function (result, control) {
          return result.concat(control.errors);
        }, errors_);
        this.status = errors.length === 0 ? FormStatus$1.Valid : FormStatus$1.Invalid;
      }

      return errors;
    };

    _proto.forEach_ = function forEach_(callback) {
      var _this4 = this;

      Object.keys(this.controls).forEach(function (key) {
        return callback(_this4.controls[key], key);
      });
    };

    _proto.reduce_ = function reduce_(callback, result) {
      this.forEach_(function (control, key) {
        result = callback(result, control, key);
      });
      return result;
    };

    _proto.all_ = function all_(key, value) {
      return this.reduce_(function (result, control) {
        return result && control[key] === value;
      }, true);
    };

    _proto.any_ = function any_(key, value) {
      return this.reduce_(function (result, control) {
        return result || control[key] === value;
      }, false);
    };

    _proto.reset = function reset() {
      this.forEach_(function (control) {
        return control.reset();
      });
    };

    _proto.patch = function patch(value) {
      if (value) {
        this.forEach_(function (control, key) {
          if (value[key] != undefined) {
            control.patch(value[key]);
          }
        });
      }
    };

    _proto.init = function init(control, key) {
      this.controls[key] = this.initControl_(control, key);
    };

    _proto.get = function get(key) {
      return this.controls[key];
    };

    _proto.set = function set(control, key) {
      delete this.controls[key];
      this.controls[key] = this.initControl_(control, key);
      this.switchSubjects_();
    };

    _proto.add = function add(control, key) {
      this.controls[key] = this.initControl_(control, key);
      this.switchSubjects_();
    };

    _proto.remove = function remove(control) {
      var _this5 = this;

      var key = Object.keys(this.controls).find(function (key) {
        return _this5.controls[key] === control ? key : null;
      });

      if (key) {
        this.removeKey(key);
      }
    };

    _proto.removeKey = function removeKey(key) {
      var exhist = this.controls[key] !== undefined;
      delete this.controls[key];

      if (exhist) {
        this.switchSubjects_();
      }
    };

    _proto.addValidators = function addValidators() {
      for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }

      this.forEach_(function (control) {
        return control.addValidators.apply(control, validators);
      });
    };

    _proto.replaceValidators = function replaceValidators() {
      for (var _len2 = arguments.length, validators = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        validators[_key2] = arguments[_key2];
      }

      this.forEach_(function (control) {
        return control.replaceValidators.apply(control, validators);
      });
    };

    _proto.clearValidators = function clearValidators() {
      this.forEach_(function (control) {
        return control.clearValidators();
      });
    };

    _createClass(FormAbstractCollection, [{
      key: "valid",
      get: function get() {
        return this.all_('valid', true);
      }
    }, {
      key: "invalid",
      get: function get() {
        return this.any_('invalid', true);
      }
    }, {
      key: "pending",
      get: function get() {
        return this.any_('pending', true);
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.all_('disabled', true);
      },
      set: function set(disabled) {
        this.forEach_(function (control) {
          control.disabled = disabled;
        });
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.any_('enabled', true);
      }
    }, {
      key: "hidden",
      get: function get() {
        return this.all_('hidden', true);
      },
      set: function set(hidden) {
        this.forEach_(function (control) {
          control.hidden = hidden;
        });
      }
    }, {
      key: "visible",
      get: function get() {
        return this.any_('visible', true);
      }
    }, {
      key: "submitted",
      get: function get() {
        return this.all_('submitted', true);
      },
      set: function set(submitted) {
        this.forEach_(function (control) {
          control.submitted = submitted;
        });
      }
    }, {
      key: "dirty",
      get: function get() {
        return this.any_('dirty', true);
      }
    }, {
      key: "pristine",
      get: function get() {
        return this.all_('pristine', true);
      }
    }, {
      key: "touched",
      get: function get() {
        return this.all_('touched', true);
      },
      set: function set(touched) {
        this.forEach_(function (control) {
          control.touched = touched;
        });
      }
    }, {
      key: "untouched",
      get: function get() {
        return this.any_('untouched', true);
      }
    }, {
      key: "value",
      get: function get() {
        return this.reduce_(function (result, control, key) {
          result[key] = control.value;
          return result;
        }, {});
      },
      set: function set(value) {
        this.forEach_(function (control, key) {
          control.value = value[key];
        });
      }
    }, {
      key: "errors",
      get: function get() {
        return this.reduce_(function (result, control) {
          return Object.assign(result, control.errors);
        }, {});
      }
    }]);

    return FormAbstractCollection;
  }(FormAbstract);

  var FormArray = function (_FormAbstractCollecti) {
    _inheritsLoose(FormArray, _FormAbstractCollecti);

    function FormArray(controls, validators) {
      if (controls === void 0) {
        controls = [];
      }

      return _FormAbstractCollecti.call(this, controls, validators) || this;
    }

    var _proto = FormArray.prototype;

    _proto.forEach_ = function forEach_(callback) {
      this.controls.forEach(function (control, key) {
        return callback(control, key);
      });
    };

    _proto.init = function init(control, key) {
      this.controls.length = Math.max(this.controls.length, key);
      this.controls[key] = this.initControl_(control, key);
    };

    _proto.set = function set(control, key) {
      this.controls.splice(key, 1, this.initControl_(control, key));
      this.switchSubjects_();
    };

    _proto.add = function add(control, key) {
      this.controls.length = Math.max(this.controls.length, key);
      this.controls[key] = this.initControl_(control, key);
      this.switchSubjects_();
    };

    _proto.push = function push(control) {
      this.controls.push(this.initControl_(control, this.controls.length));
      this.switchSubjects_();
    };

    _proto.insert = function insert(control, key) {
      this.controls.splice(key, 0, this.initControl_(control, key));
      this.switchSubjects_();
    };

    _proto.remove = function remove(control) {
      var key = this.controls.indexOf(control);

      if (key !== -1) {
        this.removeKey(key);
      }
    };

    _proto.removeKey = function removeKey(key) {
      if (this.controls.length > key) {
        this.controls.splice(key, 1);
        this.switchSubjects_();
      }
    };

    _proto.at = function at(key) {
      return this.controls[key];
    };

    _createClass(FormArray, [{
      key: "value",
      get: function get() {
        return this.reduce_(function (result, control, key) {
          result[key] = control.value;
          return result;
        }, []);
      }
    }, {
      key: "length",
      get: function get() {
        return this.controls.length;
      }
    }]);

    return FormArray;
  }(FormAbstractCollection);
  function formArray(controls, validators) {
    if (controls === void 0) {
      controls = [];
    }

    return new FormArray(controls, validators);
  }

  var FormGroup = function (_FormAbstractCollecti) {
    _inheritsLoose(FormGroup, _FormAbstractCollecti);

    function FormGroup(controls, validators) {
      if (controls === void 0) {
        controls = {};
      }

      return _FormAbstractCollecti.call(this, controls, validators) || this;
    }

    return FormGroup;
  }(FormAbstractCollection);
  function formGroup(controls, validators) {
    if (controls === void 0) {
      controls = {};
    }

    return new FormGroup(controls, validators);
  }

  exports.EmailValidator = EmailValidator;
  exports.FormAbstract = FormAbstract;
  exports.FormAbstractCollection = FormAbstractCollection;
  exports.FormAbstractCollectionDirective = FormAbstractCollectionDirective;
  exports.FormArray = FormArray;
  exports.FormArrayDirective = FormArrayDirective;
  exports.FormCheckboxDirective = FormCheckboxDirective;
  exports.FormControl = FormControl;
  exports.FormEmailDirective = FormEmailDirective;
  exports.FormFieldComponent = FormFieldComponent;
  exports.FormGroup = FormGroup;
  exports.FormGroupDirective = FormGroupDirective;
  exports.FormInputDirective = FormInputDirective;
  exports.FormMaxDirective = FormMaxDirective;
  exports.FormMaxLengthDirective = FormMaxLengthDirective;
  exports.FormMinDirective = FormMinDirective;
  exports.FormMinLengthDirective = FormMinLengthDirective;
  exports.FormModule = FormModule;
  exports.FormPatternDirective = FormPatternDirective;
  exports.FormPlaceholderDirective = FormPlaceholderDirective;
  exports.FormRadioDirective = FormRadioDirective;
  exports.FormRequiredDirective = FormRequiredDirective;
  exports.FormRequiredTrueDirective = FormRequiredTrueDirective;
  exports.FormSelectDirective = FormSelectDirective;
  exports.FormStatus = FormStatus$1;
  exports.FormValidator = FormValidator;
  exports.MaxLengthValidator = MaxLengthValidator;
  exports.MaxValidator = MaxValidator;
  exports.MinLengthValidator = MinLengthValidator;
  exports.MinValidator = MinValidator;
  exports.NullValidator = NullValidator;
  exports.PatternValidator = PatternValidator;
  exports.RequiredTrueValidator = RequiredTrueValidator;
  exports.RequiredValidator = RequiredValidator;
  exports.Validators = validators;
  exports.formArray = formArray;
  exports.formGroup = formGroup;

  return exports;

}({}, rxcomp, rxjs, rxjs.operators));

/**
 * @license rxcomp-store v1.0.0-beta.12
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

this.rxcomp=this.rxcomp||{};this.rxcomp.store=(function(exports,rxcomp,operators,rxjs,immer){'use strict';function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}var StorageService = function () {
  function StorageService() {}

  StorageService.encode = function encode(value) {
    var encodedJson = null;

    try {
      var cache = new Map();
      var json = JSON.stringify(value, function (key, value) {
        if (typeof value === 'object' && value != null) {
          if (cache.has(value)) {
            return;
          }

          cache.set(value, true);
        }

        return value;
      });
      encodedJson = btoa(encodeURIComponent(json));
    } catch (error) {
      console.warn('StorageService.encode.error', value, error);
    }

    return encodedJson;
  };

  StorageService.decode = function decode(encodedJson) {
    var value;

    if (encodedJson) {
      try {
        value = JSON.parse(decodeURIComponent(atob(encodedJson)));
      } catch (error) {
        value = encodedJson;
      }
    }

    return value;
  };

  StorageService.isSupported = function isSupported(type) {
    var flag = false;
    var storage;

    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      flag = true;
    } catch (error) {
      flag = error instanceof DOMException && (error.code === 22 || error.code === 1014 || error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') && Boolean(storage && storage.length !== 0);
    }

    return flag;
  };

  return StorageService;
}();
StorageService.supported = false;var CookieStorageService = function (_StorageService) {
  _inheritsLoose(CookieStorageService, _StorageService);

  function CookieStorageService() {
    return _StorageService.apply(this, arguments) || this;
  }

  CookieStorageService.clear = function clear() {
    var _this = this;

    this.toRawArray().forEach(function (x) {
      _this.setter(x.name, '', -1);
    });
  };

  CookieStorageService.delete = function _delete(name) {
    this.setter(name, '', -1);
  };

  CookieStorageService.exist = function exist(name) {
    return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
  };

  CookieStorageService.get = function get(name) {
    return this.decode(this.getRaw(name));
  };

  CookieStorageService.set = function set(name, value, days) {
    this.setter(name, this.encode(value), days);
  };

  CookieStorageService.getRaw = function getRaw(name) {
    var value = null;
    var cookies = this.toRawArray();
    var cookie = cookies.find(function (x) {
      return x.name === name;
    });

    if (cookie) {
      value = cookie.value;
    }

    return value;
  };

  CookieStorageService.setRaw = function setRaw(name, value, days) {
    this.setter(name, value, days);
  };

  CookieStorageService.toArray = function toArray() {
    var _this2 = this;

    return this.toRawArray().map(function (x) {
      x.value = _this2.decode(x.value);
      return x;
    });
  };

  CookieStorageService.toRawArray = function toRawArray() {
    return document.cookie.split(';').map(function (x) {
      var items = x.split('=');
      return {
        name: items[0].trim(),
        value: items[1] ? items[1].trim() : null
      };
    }).filter(function (x) {
      return x.name !== '';
    });
  };

  CookieStorageService.setter = function setter(name, value, days) {
    var expires;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    } else {
      expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';
    this.items$.next(this.toArray());
  };

  CookieStorageService.isSupported = function isSupported() {
    var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    return isBrowser;
  };

  return CookieStorageService;
}(StorageService);
CookieStorageService.items$ = new rxjs.ReplaySubject(1);var CookieStorageComponent = function (_Component) {
  _inheritsLoose(CookieStorageComponent, _Component);

  function CookieStorageComponent() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this.active = false;
    _this.items = [];
    return _this;
  }

  var _proto = CookieStorageComponent.prototype;

  _proto.onInit = function onInit() {
    var _this2 = this;

    this.items = CookieStorageService.toArray();
    CookieStorageService.items$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (items) {
      _this2.items = items;

      _this2.pushChanges();
    });
  };

  _proto.onToggle = function onToggle() {
    this.active = !this.active;
    this.pushChanges();
  };

  _proto.onClear = function onClear() {
    CookieStorageService.clear();
  };

  _proto.onRemove = function onRemove(item) {
    CookieStorageService.delete(item.name);
  };

  return CookieStorageComponent;
}(rxcomp.Component);
CookieStorageComponent.meta = {
  selector: 'cookie-storage-component',
  template: "\n\t\t<div class=\"rxc-block\">\n\t\t\t<div class=\"rxc-head\">\n\t\t\t\t<span class=\"rxc-head__title\" (click)=\"onToggle()\">\n\t\t\t\t\t<span *if=\"!active\">+ cookie</span>\n\t\t\t\t\t<span *if=\"active\">- cookie</span>\n\t\t\t\t\t<span [innerHTML]=\"' {' + items.length + ')'\"></span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"rxc-head__remove\" (click)=\"onClear()\">x</span>\n\t\t\t</div>\n\t\t\t<ul class=\"rxc-list\" *if=\"active\">\n\t\t\t\t<li class=\"rxc-list__item\" *for=\"let item of items\">\n\t\t\t\t\t<span class=\"rxc-list__name\" [innerHTML]=\"item.name\"></span>\n\t\t\t\t\t<span class=\"rxc-list__value\" [innerHTML]=\"item.value | json\"></span>\n\t\t\t\t\t<span class=\"rxc-list__remove\" (click)=\"onRemove(item)\">x</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>"
};var LocalStorageService = function (_StorageService) {
  _inheritsLoose(LocalStorageService, _StorageService);

  function LocalStorageService() {
    return _StorageService.apply(this, arguments) || this;
  }

  LocalStorageService.clear = function clear() {
    if (this.isSupported()) {
      localStorage.clear();
      this.items$.next(this.toArray());
    }
  };

  LocalStorageService.delete = function _delete(name) {
    if (this.isSupported()) {
      localStorage.removeItem(name);
      this.items$.next(this.toArray());
    }
  };

  LocalStorageService.exist = function exist(name) {
    if (this.isSupported()) {
      return localStorage.getItem(name) !== undefined;
    } else {
      return false;
    }
  };

  LocalStorageService.get = function get(name) {
    return this.decode(this.getRaw(name));
  };

  LocalStorageService.set = function set(name, value) {
    this.setRaw(name, this.encode(value));
  };

  LocalStorageService.getRaw = function getRaw(name) {
    var value = null;

    if (this.isSupported()) {
      value = localStorage.getItem(name);
    }

    return value;
  };

  LocalStorageService.setRaw = function setRaw(name, value) {
    if (value && this.isSupported()) {
      localStorage.setItem(name, value);
      this.items$.next(this.toArray());
    }
  };

  LocalStorageService.toArray = function toArray() {
    var _this = this;

    return this.toRawArray().map(function (x) {
      x.value = _this.decode(x.value);
      return x;
    });
  };

  LocalStorageService.toRawArray = function toRawArray() {
    var _this2 = this;

    if (this.isSupported()) {
      return Object.keys(localStorage).map(function (key) {
        return {
          name: key,
          value: _this2.getRaw(key)
        };
      });
    } else {
      return [];
    }
  };

  LocalStorageService.isSupported = function isSupported() {
    if (this.supported) {
      return true;
    }

    return StorageService.isSupported('localStorage');
  };

  return LocalStorageService;
}(StorageService);
LocalStorageService.items$ = new rxjs.ReplaySubject(1);var LocalStorageComponent = function (_Component) {
  _inheritsLoose(LocalStorageComponent, _Component);

  function LocalStorageComponent() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this.active = false;
    _this.items = [];
    return _this;
  }

  var _proto = LocalStorageComponent.prototype;

  _proto.onInit = function onInit() {
    var _this2 = this;

    this.items = LocalStorageService.toArray();
    LocalStorageService.items$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (items) {
      _this2.items = items;

      _this2.pushChanges();
    });
  };

  _proto.onToggle = function onToggle() {
    this.active = !this.active;
    this.pushChanges();
  };

  _proto.onClear = function onClear() {
    LocalStorageService.clear();
  };

  _proto.onRemove = function onRemove(item) {
    LocalStorageService.delete(item.name);
  };

  return LocalStorageComponent;
}(rxcomp.Component);
LocalStorageComponent.meta = {
  selector: 'local-storage-component',
  template: "\n\t\t<div class=\"rxc-block\">\n\t\t\t<div class=\"rxc-head\">\n\t\t\t\t<span class=\"rxc-head__title\" (click)=\"onToggle()\">\n\t\t\t\t\t<span *if=\"!active\">+ localStorage</span>\n\t\t\t\t\t<span *if=\"active\">- localStorage</span>\n\t\t\t\t\t<span [innerHTML]=\"' {' + items.length + ')'\"></span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"rxc-head__remove\" (click)=\"onClear()\">x</span>\n\t\t\t</div>\n\t\t\t<ul class=\"rxc-list\" *if=\"active\">\n\t\t\t\t<li class=\"rxc-list__item\" *for=\"let item of items\">\n\t\t\t\t\t<span class=\"rxc-list__name\" [innerHTML]=\"item.name\"></span>\n\t\t\t\t\t<span class=\"rxc-list__value\" [innerHTML]=\"item.value | json\"></span>\n\t\t\t\t\t<span class=\"rxc-list__remove\" (click)=\"onRemove(item)\">x</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>"
};var SessionStorageService = function (_StorageService) {
  _inheritsLoose(SessionStorageService, _StorageService);

  function SessionStorageService() {
    return _StorageService.apply(this, arguments) || this;
  }

  SessionStorageService.clear = function clear() {
    if (this.isSupported()) {
      sessionStorage.clear();
      this.items$.next(this.toArray());
    }
  };

  SessionStorageService.delete = function _delete(name) {
    if (this.isSupported()) {
      sessionStorage.removeItem(name);
      this.items$.next(this.toArray());
    }
  };

  SessionStorageService.exist = function exist(name) {
    if (this.isSupported()) {
      return sessionStorage.getItem(name) !== undefined;
    } else {
      return false;
    }
  };

  SessionStorageService.get = function get(name) {
    return this.decode(this.getRaw(name));
  };

  SessionStorageService.set = function set(name, value) {
    this.setRaw(name, this.encode(value));
  };

  SessionStorageService.getRaw = function getRaw(name) {
    var value = null;

    if (this.isSupported()) {
      value = sessionStorage.getItem(name);
    }

    return value;
  };

  SessionStorageService.setRaw = function setRaw(name, value) {
    if (value && this.isSupported()) {
      sessionStorage.setItem(name, value);
      this.items$.next(this.toArray());
    }
  };

  SessionStorageService.toArray = function toArray() {
    var _this = this;

    return this.toRawArray().map(function (x) {
      x.value = _this.decode(x.value);
      return x;
    });
  };

  SessionStorageService.toRawArray = function toRawArray() {
    var _this2 = this;

    if (this.isSupported()) {
      return Object.keys(sessionStorage).map(function (key) {
        return {
          name: key,
          value: _this2.getRaw(key)
        };
      });
    } else {
      return [];
    }
  };

  SessionStorageService.isSupported = function isSupported() {
    if (this.supported) {
      return true;
    }

    return StorageService.isSupported('sessionStorage');
  };

  return SessionStorageService;
}(StorageService);
SessionStorageService.items$ = new rxjs.ReplaySubject(1);var SessionStorageComponent = function (_Component) {
  _inheritsLoose(SessionStorageComponent, _Component);

  function SessionStorageComponent() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this.active = false;
    _this.items = [];
    return _this;
  }

  var _proto = SessionStorageComponent.prototype;

  _proto.onInit = function onInit() {
    var _this2 = this;

    this.items = SessionStorageService.toArray();
    SessionStorageService.items$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (items) {
      _this2.items = items;

      _this2.pushChanges();
    });
  };

  _proto.onToggle = function onToggle() {
    this.active = !this.active;
    this.pushChanges();
  };

  _proto.onClear = function onClear() {
    SessionStorageService.clear();
  };

  _proto.onRemove = function onRemove(item) {
    SessionStorageService.delete(item.name);
  };

  return SessionStorageComponent;
}(rxcomp.Component);
SessionStorageComponent.meta = {
  selector: 'session-storage-component',
  template: "\n\t\t<div class=\"rxc-block\">\n\t\t\t<div class=\"rxc-head\">\n\t\t\t\t<span class=\"rxc-head__title\" (click)=\"onToggle()\">\n\t\t\t\t\t<span *if=\"!active\">+ sessionStorage</span>\n\t\t\t\t\t<span *if=\"active\">- sessionStorage</span>\n\t\t\t\t\t<span [innerHTML]=\"' {' + items.length + ')'\"></span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"rxc-head__remove\" (click)=\"onClear()\">x</span>\n\t\t\t</div>\n\t\t\t<ul class=\"rxc-list\" *if=\"active\">\n\t\t\t\t<li class=\"rxc-list__item\" *for=\"let item of items\">\n\t\t\t\t\t<span class=\"rxc-list__name\" [innerHTML]=\"item.name\"></span>\n\t\t\t\t\t<span class=\"rxc-list__value\" [innerHTML]=\"item.value | json\"></span>\n\t\t\t\t\t<span class=\"rxc-list__remove\" (click)=\"onRemove(item)\">x</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>"
};var factories = [CookieStorageComponent, LocalStorageComponent, SessionStorageComponent];
var pipes = [];

var StoreModule = function (_Module) {
  _inheritsLoose(StoreModule, _Module);

  function StoreModule() {
    return _Module.apply(this, arguments) || this;
  }

  return StoreModule;
}(rxcomp.Module);
StoreModule.meta = {
  declarations: [].concat(factories, pipes),
  exports: [].concat(factories, pipes)
};(function (StoreType) {
  StoreType[StoreType["Memory"] = 1] = "Memory";
  StoreType[StoreType["Session"] = 2] = "Session";
  StoreType[StoreType["Local"] = 3] = "Local";
  StoreType[StoreType["Cookie"] = 4] = "Cookie";
})(exports.StoreType || (exports.StoreType = {}));
var Store = function () {
  function Store(state, type, key) {
    if (state === void 0) {
      state = {};
    }

    if (type === void 0) {
      type = exports.StoreType.Memory;
    }

    if (key === void 0) {
      key = 'store';
    }

    this.type = type;
    this.key = "rxcomp_" + key;
    state.busy = false;
    state.error = null;
    var state_ = new rxjs.BehaviorSubject(state);
    this.next = makeNext(state_);
    this.nextError = makeNextError(state_);
    this.select = makeSelect(state_);
    this.state$ = state_.asObservable();
  }

  var _proto = Store.prototype;

  _proto.busy$ = function busy$() {
    var _this = this;

    return rxjs.of(null).pipe(operators.filter(function () {
      var busy = _this.select(function (state) {
        return state.busy;
      });

      if (!busy) {
        _this.state = function (draft) {
          draft.busy = true;
          draft.error = null;
        };

        return true;
      } else {
        return false;
      }
    }));
  };

  _proto.cached$ = function cached$(callback) {
    var _this2 = this;

    return rxjs.of(null).pipe(operators.map(function () {
      var value = null;

      if (_this2.type === exports.StoreType.Local) {
        value = LocalStorageService.get(_this2.key);
      } else if (_this2.type === exports.StoreType.Session) {
        value = SessionStorageService.get(_this2.key);
      } else if (_this2.type === exports.StoreType.Cookie) {
        value = CookieStorageService.get(_this2.key);
      }

      if (value && typeof callback === 'function') {
        value = callback(value);
      }

      return value;
    }), operators.filter(function (x) {
      return x != null;
    }));
  };

  _proto.select$ = function select$(callback) {
    return this.state$.pipe(operators.map(callback), operators.distinctUntilChanged());
  };

  _proto.select = function select(callback) {};

  _proto.next = function next(callback) {};

  _proto.nextError = function nextError(error) {
    return rxjs.of();
  };

  _proto.reducer = function reducer(_reducer) {
    var _this3 = this;

    return function (source) {
      return rxjs.defer(function () {
        return source.pipe(operators.map(function (data) {
          if (typeof _reducer === 'function') {
            _this3.state = function (draft) {
              draft.error = null;

              _reducer(data, draft);

              draft.busy = false;

              if (_this3.type === exports.StoreType.Local) {
                LocalStorageService.set(_this3.key, draft);
              }

              if (_this3.type === exports.StoreType.Session) {
                SessionStorageService.set(_this3.key, draft);
              }

              if (_this3.type === exports.StoreType.Cookie) {
                CookieStorageService.set(_this3.key, draft, 365);
              }
            };
          }

          return data;
        }));
      });
    };
  };

  _proto.catchState = function catchState(errorReducer) {
    var _this4 = this;

    return function (source) {
      return rxjs.defer(function () {
        return source.pipe(operators.catchError(function (error) {
          _this4.state = function (draft) {
            draft.error = error;
            draft.busy = false;
          };

          if (typeof errorReducer === 'function') {
            error = errorReducer(error);
          } else {
            error = null;
          }

          return error ? rxjs.of(error) : rxjs.of();
        }));
      });
    };
  };

  _createClass(Store, [{
    key: "state",
    get: function get() {
      return this.select(function (draft) {
        return draft;
      });
    },
    set: function set(callback) {
      this.next(callback);
    }
  }]);

  return Store;
}();
function useStore(state, type, key) {
  var store = new Store(state, type, key);
  return {
    state$: store.state$,
    busy$: store.busy$.bind(store),
    cached$: store.cached$.bind(store),
    select$: store.select$.bind(store),
    select: store.select.bind(store),
    next: store.next.bind(store),
    nextError: store.nextError.bind(store),
    reducer: store.reducer.bind(store),
    catchState: store.catchState.bind(store)
  };
}

function makeNext(state) {
  return function (callback) {
    state.next(immer.produce(state.getValue(), function (draft) {
      if (typeof callback === 'function') {
        callback(draft);
      }

      return draft;
    }));
  };
}

function makeNextError(state) {
  return function (error) {
    state.next(immer.produce(state.getValue(), function (draft) {
      draft.error = error;
      draft.busy = false;
      return draft;
    }));
    return rxjs.of(error);
  };
}

function makeSelect(state) {
  return function (callback) {
    return callback(state.getValue());
  };
}exports.CookieStorageComponent=CookieStorageComponent;exports.CookieStorageService=CookieStorageService;exports.LocalStorageComponent=LocalStorageComponent;exports.LocalStorageService=LocalStorageService;exports.SessionStorageComponent=SessionStorageComponent;exports.SessionStorageService=SessionStorageService;exports.Store=Store;exports.StoreModule=StoreModule;exports.useStore=useStore;return exports;}({},rxcomp,rxjs.operators,rxjs,immer));
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * EasePack 3.4.2
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _registerEase,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _boolean = function _boolean(value, defaultValue) {
	  return !!(typeof value === "undefined" ? defaultValue : value && !~(value + "").indexOf("false"));
	},
	    _initCore = function _initCore(core) {
	  gsap = core || _getGSAP();

	  if (gsap) {
	    _registerEase = gsap.registerEase;

	    var eases = gsap.parseEase(),
	        createConfig = function createConfig(ease) {
	      return function (ratio) {
	        var y = 0.5 + ratio / 2;

	        ease.config = function (p) {
	          return ease(2 * (1 - p) * p * y + p * p);
	        };
	      };
	    },
	        p;

	    for (p in eases) {
	      if (!eases[p].config) {
	        createConfig(eases[p]);
	      }
	    }

	    _registerEase("slow", SlowMo);

	    _registerEase("expoScale", ExpoScaleEase);

	    _registerEase("rough", RoughEase);

	    for (p in EasePack) {
	      p !== "version" && gsap.core.globals(p, EasePack[p]);
	    }
	  }
	},
	    _createSlowMo = function _createSlowMo(linearRatio, power, yoyoMode) {
	  linearRatio = Math.min(1, linearRatio || 0.7);

	  var pow = linearRatio < 1 ? power || power === 0 ? power : 0.7 : 0,
	      p1 = (1 - linearRatio) / 2,
	      p3 = p1 + linearRatio,
	      calcEnd = _boolean(yoyoMode);

	  return function (p) {
	    var r = p + (0.5 - p) * pow;
	    return p < p1 ? calcEnd ? 1 - (p = 1 - p / p1) * p : r - (p = 1 - p / p1) * p * p * p * r : p > p3 ? calcEnd ? p === 1 ? 0 : 1 - (p = (p - p3) / p1) * p : r + (p - r) * (p = (p - p3) / p1) * p * p * p : calcEnd ? 1 : r;
	  };
	},
	    _createExpoScale = function _createExpoScale(start, end, ease) {
	  var p1 = Math.log(end / start),
	      p2 = end - start;
	  ease && (ease = gsap.parseEase(ease));
	  return function (p) {
	    return (start * Math.exp(p1 * (ease ? ease(p) : p)) - start) / p2;
	  };
	},
	    EasePoint = function EasePoint(time, value, next) {
	  this.t = time;
	  this.v = value;

	  if (next) {
	    this.next = next;
	    next.prev = this;
	    this.c = next.v - value;
	    this.gap = next.t - time;
	  }
	},
	    _createRoughEase = function _createRoughEase(vars) {
	  if (typeof vars !== "object") {
	    vars = {
	      points: +vars || 20
	    };
	  }

	  var taper = vars.taper || "none",
	      a = [],
	      cnt = 0,
	      points = (+vars.points || 20) | 0,
	      i = points,
	      randomize = _boolean(vars.randomize, true),
	      clamp = _boolean(vars.clamp),
	      template = gsap ? gsap.parseEase(vars.template) : 0,
	      strength = (+vars.strength || 1) * 0.4,
	      x,
	      y,
	      bump,
	      invX,
	      obj,
	      pnt,
	      recent;

	  while (--i > -1) {
	    x = randomize ? Math.random() : 1 / points * i;
	    y = template ? template(x) : x;

	    if (taper === "none") {
	      bump = strength;
	    } else if (taper === "out") {
	      invX = 1 - x;
	      bump = invX * invX * strength;
	    } else if (taper === "in") {
	      bump = x * x * strength;
	    } else if (x < 0.5) {
	      invX = x * 2;
	      bump = invX * invX * 0.5 * strength;
	    } else {
	      invX = (1 - x) * 2;
	      bump = invX * invX * 0.5 * strength;
	    }

	    if (randomize) {
	      y += Math.random() * bump - bump * 0.5;
	    } else if (i % 2) {
	      y += bump * 0.5;
	    } else {
	      y -= bump * 0.5;
	    }

	    if (clamp) {
	      if (y > 1) {
	        y = 1;
	      } else if (y < 0) {
	        y = 0;
	      }
	    }

	    a[cnt++] = {
	      x: x,
	      y: y
	    };
	  }

	  a.sort(function (a, b) {
	    return a.x - b.x;
	  });
	  pnt = new EasePoint(1, 1, null);
	  i = points;

	  while (i--) {
	    obj = a[i];
	    pnt = new EasePoint(obj.x, obj.y, pnt);
	  }

	  recent = new EasePoint(0, 0, pnt.t ? pnt : pnt.next);
	  return function (p) {
	    var pnt = recent;

	    if (p > pnt.t) {
	      while (pnt.next && p >= pnt.t) {
	        pnt = pnt.next;
	      }

	      pnt = pnt.prev;
	    } else {
	      while (pnt.prev && p <= pnt.t) {
	        pnt = pnt.prev;
	      }
	    }

	    recent = pnt;
	    return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
	  };
	};

	var SlowMo = _createSlowMo(0.7);
	SlowMo.ease = SlowMo;
	SlowMo.config = _createSlowMo;
	var ExpoScaleEase = _createExpoScale(1, 2);
	ExpoScaleEase.config = _createExpoScale;
	var RoughEase = _createRoughEase();
	RoughEase.ease = RoughEase;
	RoughEase.config = _createRoughEase;
	var EasePack = {
	  SlowMo: SlowMo,
	  RoughEase: RoughEase,
	  ExpoScaleEase: ExpoScaleEase
	};

	for (var p in EasePack) {
	  EasePack[p].register = _initCore;
	  EasePack[p].version = "3.4.2";
	}

	_getGSAP() && gsap.registerPlugin(SlowMo);

	exports.EasePack = EasePack;
	exports.ExpoScaleEase = ExpoScaleEase;
	exports.RoughEase = RoughEase;
	exports.SlowMo = SlowMo;
	exports.default = EasePack;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.4.2
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      _parenthesesExp = /\(([^()]+)\)/i,
      _relExp = /[+-]=-?[\.\d]+/,
      _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;

    if (!_isObject(target) && !_isFunction(target)) {
      targets = [targets];
    }

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property) {
    var currentValue = target[property];
    return _isFunction(currentValue) ? target[property]() : _isUndefined(currentValue) && target.getAttribute(property) || currentValue;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _parseVars = function _parseVars(params, type, parent) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars;

    if (isLegacy) {
      vars.duration = params[1];
    }

    vars.parent = parent;

    if (type) {
      irVars = vars;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);

      if (type < 2) {
        vars.runBackwards = 1;
      } else {
        vars.startAt = params[varsIndex - 1];
      }
    }

    return vars;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj) && p !== "duration" && p !== "ease") {
        obj[p] = defaults[p];
      }
    }
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p];
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation) {
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    return (tTime /= cycleDuration) && ~~tTime === tTime ? ~~tTime - 1 : ~~tTime;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(animation._dp._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && prevRatio && !tween._start && tween._zTime > _tinyNum && !tween._dp._lock || tween._ts < 0 || tween._dp._ts < 0 ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);

      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      return;
    }

    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      suppressEvents || _callback(tween, "onStart");
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache) {
    var repeat = animation._repeat,
        dur = _round(duration) || 0;
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);

    if (animation._time > dur) {
      animation._time = dur;
      animation._tTime = Math.min(animation._tTime, animation._tDur);
    }

    !skipUncache && _uncache(animation.parent);
    animation.parent && _setEnd(animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      i = position.charAt(0);

      if (i === "<" || i === ">") {
        return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
      }

      i = position.indexOf("=");

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = +(position.charAt(i - 1) + position.substr(i + 1));
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value) {
    return (value + "").substr((parseFloat(value) + "").length);
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      return Math.floor(Math.round(parseFloat(raw) / v) * v * p) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min + Math.random() * (max - min)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        params,
        scope;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    if (animation.progress() < 1) {
      _callback(animation, "onInterrupt");
    }

    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    if (config.register) {
      config.register(gsap, Plugin, PropTween);
    }
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length === 4) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b;
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;

          if (a.length > 3) {
            a[3] *= 1;
          }

          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch;

      if (elapsed > _lagThreshold) {
        _startTime += elapsed - _adjustedLag;
      }

      _lastUpdate += elapsed;
      _self.time = (_lastUpdate - _startTime) / 1000;
      overlap = _self.time - _nextTime;

      if (overlap > 0 || manual) {
        _self.frame++;
        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));
      dispatch && _listeners.forEach(function (l) {
        return l(_self.time, elapsed, _self.frame, v);
      });
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1 / (_fps || 240);
        _nextTime = _self.time + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);

        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1);
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _parenthesesExp.exec(name)[1].split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars, time) {
      var parent = vars.parent || _globalTimeline;
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1);

      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      var t = this._time / this._dur || 0;

      _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));

      return this._tTime ? _alignPlayhead(this, t * value + _elapsedCycleDuration(this)) : this;
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        this._rDelay = value;
        return _onUpdateTotalDuration(this);
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      if (from != null) {
        this.seek(from, suppressEvents);
      }

      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      if (from != null) {
        this.seek(from || this.totalDuration(), suppressEvents);
      }

      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      if (atTime != null) {
        this.seek(atTime, suppressEvents);
      }

      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        if (!!value !== this.reversed()) {
          this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        }

        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;

          if (params) {
            vars[type + "Params"] = params;
          }

          if (type === "onUpdate") {
            this._onUpdate = callback;
          }
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, time) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars, time) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          time = _round(tTime % cycleDuration);

          if (time > dur || tDur === tTime) {
            time = dur;
          }

          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);

            if (iteration < prevIteration) {
              rewinding = !rewinding;
            }

            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;

            if (!suppressEvents && this.parent) {
              _callback(this, "onRepeat");
            }

            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime !== this._time || prevPaused !== !this._ts) {
              return this;
            }

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur + 0.0001 : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
        }

        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");
        }

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      if (!_isNumber(position)) {
        position = _parsePosition(this, position);
      }

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return _uncache(this);
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          tween = Tween.to(tl, _setDefaults(vars, {
        ease: "none",
        lazy: false,
        time: endTime,
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration).render(tween._time, true, true);
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }));

      return tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate();
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._time = this._tTime = this._pTime = 0;

      if (includeLabels) {
        this.labels = {};
      }

      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          end,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          end = _setEnd(child);

          if (end > max && child._ts) {
            max = end;
          }

          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
      }
    }

    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end)) {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    if (_isFunction(vars)) {
      vars = _parseFuncOrString(vars, tween, index, target, targets);
    }

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _initTween = function _initTween(tween, time) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
        autoOverwrite = tween._overwrite === "auto",
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        if (immediateRender) {
          if (time > 0) {
            !autoRevert && (tween._startAt = 0);
          } else if (dur && !(time < 0 && prevStartAt)) {
            tween._zTime = time;
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._from = !tl && !!vars.runBackwards;
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, time, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        time.duration = vars;
        vars = time;
        time = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = _this3.parent,
          parsedTargets = (_isArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = _assertThisInitialized(_this3);

        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });

          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = {};

            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }

            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      parent && _postAddChecks(parent, _assertThisInitialized(_this3));

      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay));
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          time = _round(tTime % cycleDuration);

          if (time > dur || tDur === tTime) {
            time = dur;
          }

          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        time && !prevTime && !suppressEvents && _callback(this, "onStart");
        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          if (totalTime < 0 && this._startAt) {
            this._startAt.render(totalTime, true, force);
          }

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = 0;

        if (this.parent) {
          return _interrupt(this);
        }
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return new Tween(targets, _parseVars(arguments, 1));
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property) {
        pt.modifier(modifier, tween, target);
      }

      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      if (_isString(target)) {
        target = toArray(target)[0];
      }

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      if (unit === "native") {
        unit = "";
      }

      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      if (value && value.ease) {
        value.ease = _parseEase(value.ease, _defaults.ease);
      }

      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref) {
      var name = _ref.name,
          effect = _ref.effect,
          plugins = _ref.plugins,
          defaults = _ref.defaults,
          extendTimeline = _ref.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;

      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);

        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.4.2";
  _coreReady = 1;

  if (_windowExists()) {
    _wake();
  }

  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
      return _round(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        relative,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    if (_relExp.test(end)) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      t1 = !cache.uncache && target.getAttribute("data-svg-origin");

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
    cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);

    if (forceCSS) {
      target.style[_transformProp] = temp;
    }
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var style = _tempDivStyler.style,
        startCache = target._gsap,
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;
    style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
    style[_transformProp] = transforms;

    _doc$1.body.appendChild(_tempDivStyler);

    endCache = _parseTransform(_tempDivStyler, 1);

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _doc$1.body.removeChild(_tempDivStyler);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;

      if (!_pluginInitted) {
        _initCore();
      }

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          if (specialProp(this, target, p, endValue, tween)) {
            hasPriority = 1;
          }
        } else if (p.substr(0, 2) === "--") {
          this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
        } else {
          startValue = _get(target, p);
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];

              if (~p.indexOf(",")) {
                p = p.split(",")[0];
              }
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform || _parseTransform(target);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;

                if (endUnit !== cache.zOrigin) {
                  _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                }

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = (endValue + "").substr((endNum + "").length) || (p in _config.units ? _config.units[p] : startUnit);

            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, p, startValue, endUnit);
            }

            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }

          props.push(p);
        }
      }

      if (hasPriority) {
        _sortPropTweensByPriority(this);
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));
