"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=n(function(w,f){
var y=require('@stdlib/math-base-assert-is-nan/dist');function j(i,r,e,a,p){var t,u;if(i<=0)return e;for(t=p,u=0;u<i;u++)y(e[t])&&(e[t]=r),t+=a;return e}f.exports=j
});var q=n(function(z,o){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=s();function R(i,r,e,a){return x(i,r,e,a,m(i,a))}o.exports=R
});var c=n(function(A,d){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=q(),E=s();_(l,"ndarray",E);d.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=c(),v,N=b(O(__dirname,"./native.js"));g(N)?v=h:v=N;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
