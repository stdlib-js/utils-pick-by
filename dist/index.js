"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=v(function(g,s){
var c=require('@stdlib/utils-keys/dist'),f=require('@stdlib/assert-is-function/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r){var t,i,n,u;if(typeof e!="object"||e===null)throw new TypeError(a('1Wf3L',e));if(!f(r))throw new TypeError(a('1Wf2H',r));for(i={},t=c(e),u=0;u<t.length;u++)n=t[u],r(n,e[n])&&(i[n]=e[n]);return i}s.exports=m
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
