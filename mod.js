// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[u],e=a(r,u);try{r[u]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[u]=t:delete r[u],n}:function(r){return i.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function d(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(i):h(i)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var m=Math.abs,j=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,O=/e-(\d)$/,k=/^(\d+)$/,T=/^(\d+)e/,I=/\.0$/,x=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":m(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,A,"$1e"),t=E.call(t,x,"e"),t=E.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,_,"e+0$1"),t=E.call(t,O,"e-0$1"),r.alternate&&(t=E.call(t,k,"$1."),t=E.call(t,T,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):j.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var F=String.fromCharCode,C=Array.isArray;function $(r){return r!=r}function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,i,o,a,c,u,f,l,s,p,g;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+P(g):P(g)+l)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,t,n,i;for(t=[],i=0,n=B.exec(r);n;)(e=r.slice(i,B.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),i=B.lastIndex,n=B.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function G(r){var e,t;if("string"!=typeof r)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var X,Z=Object.prototype,M=Z.toString,U=Z.__defineGetter__,Y=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};var D=X;function q(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r){return"string"==typeof r}var K=String.prototype.valueOf;var Q=n();function rr(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function er(r){return J(r)||rr(r)}function tr(r){return"number"==typeof r}q(er,"isPrimitive",J),q(er,"isObject",rr);var nr=Number,ir=nr.prototype.toString;var or=n();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function cr(r){return tr(r)||ar(r)}function ur(r){return r!=r}function fr(r){return tr(r)&&ur(r)}function lr(r){return ar(r)&&ur(r.valueOf())}function sr(r){return fr(r)||lr(r)}q(cr,"isPrimitive",tr),q(cr,"isObject",ar),q(sr,"isPrimitive",fr),q(sr,"isObject",lr);var pr=Number.POSITIVE_INFINITY,gr=nr.NEGATIVE_INFINITY,dr=Math.floor;function hr(r){return dr(r)===r}function yr(r){return r<pr&&r>gr&&hr(r)}function br(r){return tr(r)&&yr(r)}function vr(r){return ar(r)&&yr(r.valueOf())}function wr(r){return br(r)||vr(r)}q(wr,"isPrimitive",br),q(wr,"isObject",vr);var mr=Object.prototype.propertyIsEnumerable;var jr=!mr.call("beep","0");function Sr(r,e){var t;return null!=r&&(!(t=mr.call(r,e))&&jr&&er(r)?!fr(e=+e)&&br(e)&&e>=0&&e<r.length:t)}var Er=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var _r=s?l:function(r){return null!==r&&"object"==typeof r&&!Er(r)&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Sr(r,"callee")},Or=Array.prototype.slice;function kr(r){return null!==r&&"object"==typeof r}q(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr));var Tr=Sr((function(){}),"prototype"),Ir=!Sr({toString:null},"toString"),xr=9007199254740991;function Ar(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&hr(o.length)&&o.length>=0&&o.length<=xr||J(r)))throw new TypeError(G("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!br(t))throw new TypeError(G("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(sr(e)){for(;i<n;i++)if(sr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Vr=/./;function Pr(r){return"boolean"==typeof r}var Fr=Boolean,Cr=Boolean.prototype.toString;var $r=n();function Lr(r){return"object"==typeof r&&(r instanceof Fr||($r?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function Nr(r){return Pr(r)||Lr(r)}q(Nr,"isPrimitive",Pr),q(Nr,"isObject",Lr);var Br="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gr="object"==typeof Wr?Wr:null,Xr="object"==typeof globalThis?globalThis:null;var Zr=function(r){if(arguments.length){if(!Pr(r))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Br)return Br;if(Rr)return Rr;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Zr.document&&Zr.document.childNodes,Ur=Int8Array;function Yr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n,i;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return kr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Yr,"REGEXP",Hr);var Dr="function"==typeof Vr||"object"==typeof Ur||"function"==typeof Mr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function qr(r){return r.constructor&&r.constructor.prototype===r}var Jr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kr="undefined"==typeof window?void 0:window;var Qr=function(){var r;if("undefined"===Dr(Kr))return!1;for(r in Kr)try{-1===Ar(Jr,r)&&a(Kr,r)&&null!==Kr[r]&&"object"===Dr(Kr[r])&&qr(Kr[r])}catch(r){return!0}return!1}(),re="undefined"!=typeof window;var ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var te=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return _r(e)?r(Or.call(e)):r(e)}:r:function(r){var e,t,n,i,o,c,u;if(i=[],_r(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!kr(r))return i;t=Tr&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if(Ir)for(e=function(r){if(!1===re&&!Qr)return qr(r);try{return qr(r)}catch(r){return!1}}(r),u=0;u<ee.length;u++)c=ee[u],e&&"constructor"===c||!a(r,c)||i.push(String(c));return i};function ne(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function ie(r,e){var t,n,i,o;if("object"!=typeof r||null===r)throw new TypeError(ne("1Wf3L",r));if("function"!==Dr(e))throw new TypeError(ne("1Wf2H",e));for(n={},t=te(r),o=0;o<t.length;o++)e(i=t[o],r[i])&&(n[i]=r[i]);return n}export{ie as default};
//# sourceMappingURL=mod.js.map
