(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var da={o:!0},ea={};try{ea.__proto__=da;p=ea.o;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=n,q=this||self;function ha(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}var ia=Date.now||function(){return+new Date};
function r(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}function t(a){return a};var ka=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,f="string"===typeof a?a.split(""):a,d=0;d<c;d++)d in f&&b.call(void 0,f[d],d,a)};var w;function x(a,b){this.c=a===la&&b||"";this.f=ma}x.prototype.b=!0;x.prototype.a=function(){return this.c};var ma={},la={};function y(a,b){this.c=a===z&&b||"";this.f=na}y.prototype.b=!0;y.prototype.a=function(){return this.c.toString()};var oa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function pa(a){if(a instanceof y)return a;a="object"==typeof a&&a.b?a.a():String(a);oa.test(a)||(a="about:invalid#zClosurez");return new y(z,a)}var na={},z={};function A(a){A[" "](a);return a}A[" "]=function(){};var qa={},B=null;function C(){}var ra="function"==typeof Uint8Array;function D(a,b,c){a.b=null;b||(b=[]);a.u=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var f=a.a[b];if(!(null===f||"object"!=typeof f||Array.isArray(f)||ra&&f instanceof Uint8Array)){a.h=b-a.f;a.c=f;break a}}a.h=Number.MAX_VALUE}a.g={};if(c)for(b=0;b<c.length;b++)if(f=c[b],f<a.h)f+=a.f,a.a[f]=a.a[f]||E;else{var d=a.h+a.f;a.a[d]||(a.c=a.a[d]={});a.c[f]=a.c[f]||E}}var E=[];
function F(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===E?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===E?a.c[b]=[]:c}function G(a,b,c){a=F(a,b);return null==a?c:a}function H(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function sa(a,b,c){a.b||(a.b={});if(!a.b[c]){var f=F(a,c);f&&(a.b[c]=new b(f))}return a.b[c]}function I(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var f=F(a,c),d=[],h=0;h<f.length;h++)d[h]=new b(f[h]);a.b[c]=d}b=a.b[c];b==E&&(b=a.b[c]=[]);return b}
C.prototype.s=ra?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!B){B={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var h=c.concat(f[d].split(""));qa[d]=h;for(var e=0;e<h.length;e++){var g=h[e];void 0===B[g]&&(B[g]=e)}}}b=qa[b];c=[];for(f=0;f<this.length;f+=3){var k=this[f],l=(d=f+1<this.length)?this[f+1]:0;g=(h=f+2<this.length)?this[f+2]:0;e=k>>2;
k=(k&3)<<4|l>>4;l=(l&15)<<2|g>>6;g&=63;h||(g=64,d||(l=64));c.push(b[e],b[k],b[l]||"",b[g]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,ta)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,ta)};function ta(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}C.prototype.toString=function(){return this.a.toString()};function ua(a){D(this,a,null)}r(ua,C);var va=document,J=window;function wa(a,b,c){if(Array.isArray(b))for(var f=0;f<b.length;f++)wa(a,String(b[f]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function xa(a,b){var c=[];for(f in b)wa(f,b[f],c);b=c.join("&");if(b){c=a.indexOf("#");0>c&&(c=a.length);var f=a.indexOf("?");if(0>f||f>c){f=c;var d=""}else d=a.substring(f+1,c);a=[a.substr(0,f),d,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a};function K(){var a=L;try{var b;if(b=!!a&&null!=a.location.href)a:{try{A(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};var ya=/^((market|itms|intent|itms-appss):\/\/)/i;function M(a,b,c){b=b instanceof y||!ya.test(b)?b:new y(z,b);"about:invalid#zClosurez"===(b instanceof y?b:pa(b)).a()&&c(String(b));c=b instanceof y?b:pa(b);a.href=c instanceof y&&c.constructor===y&&c.f===na?c.c:"type_error:SafeUrl"}function za(){var a=(Aa()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(b){b=xa(a,{id:"unsafeurl",ctx:599,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};function Aa(){var a=void 0===a?J:a;return"http:"===a.location.protocol}var Ba=!!window.google_async_iframe_id,L=Ba&&window.parent||window,N;N=new x(la,"//fonts.googleapis.com/css");var Ca;Ca=N instanceof x&&N.constructor===x&&N.f===ma?N.c:"type_error:Const";var Da;if(void 0===w){var O=null,Ea=q.trustedTypes;if(Ea&&Ea.createPolicy){try{O=Ea.createPolicy("goog#html",{createHTML:t,createScript:t,createScriptURL:t})}catch(a){q.console&&q.console.error(a.message)}w=O}else w=O}(Da=w)&&Da.createScriptURL(Ca);var P=null;function Fa(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=q.performance,Ga=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Ga){var b;if(null===P){P="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Ha(){var a=S;this.a=[];this.c=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=R()||(null!=b?b:1>Math.random())}function Ia(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
Ha.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?q:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=q.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):ia());a=new Fa(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};if(Ba&&!K()){var T="."+va.domain;try{for(;2<T.split(".").length&&!K();)va.domain=T=T.substr(T.indexOf(".")+1),L=window.parent}catch(a){}K()||(L=window)}var S=L,U=new Ha;function Ja(){S.google_measure_js_timing||(U.b=!1,U.a!=U.c.google_js_reporting_queue&&(R()&&ka(U.a,Ia),U.a.length=0))}"number"!==typeof S.google_srt&&(S.google_srt=Math.random());if("complete"==S.document.readyState)Ja();else if(U.b){var Ka=function(){Ja()},La=S;La.addEventListener&&La.addEventListener("load",Ka,!1)};function Ma(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{l:a.slice(0,b)+"&act=1"+a.slice(b),m:decodeURIComponent(c[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;var f="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),f=a.slice(b)));return{l:c+"&act=1"+f,m:c+"&dct=1"+f}}return null};function Na(a){var b=Oa(a.href),c=b.i;M(a,b.j,za());return c}function Oa(a){var b=Ma(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(Pa(b.l,"&ri=1"),"")?{j:b.m,i:!0}:{j:Pa(a,"&ri=2"),i:!1}:{j:Pa(a,"&ri=16"),i:!1}:{j:a,i:!1}}function Pa(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)}function Qa(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==Ma(a)};function V(){}V.prototype.f=function(){};function Ra(a){D(this,a,null)}r(Ra,C);function Sa(a){D(this,a,Ta)}r(Sa,C);var Ta=[1];function Ua(a){D(this,a,Va)}r(Ua,C);var Va=[1,2];function Wa(a){D(this,a,null)}r(Wa,C);function Xa(){this.a=NaN}function Ya(a,b){!isNaN(b)&&0<b&&(isNaN(a.a)||a.a<b)&&(a.a=b)}
function Za(a,b,c){var f=sa(b,Ua,4);if(!f)return!0;for(var d=ba(I(f,Sa,1)),h=d.next();!h.done;h=d.next()){a:{var e=h.value;h=c;var g=G(e,2,"");g=g?document.querySelectorAll(g):[h.currentTarget];for(var k=0;k<g.length;++k){var l=g[k].getBoundingClientRect();var m=e;var u=F(m,1);m.g||(m.g={});if(!m.g[1]){for(var v=0;v<u.length;v++)u[v]=+u[v];m.g[1]=!0}m=u;u=h.clientX;v=h.clientY;if(u>=l.left&&u<=l.right&&v>=l.top&&v<=l.bottom&&(v-m[0]<l.top||u+m[1]>l.right||v+m[2]>l.bottom||u-m[3]<l.left)){e=!1;break a}}e=
!0}if(!e)return $a(b,"blocked_border_click"),!1}d=ba(I(f,Ra,2));for(h=d.next();!h.done;h=d.next())if(e=a,h=h.value,g=c.currentTarget,Ya(e,parseInt(g.getAttribute("data-on-ready-ts"),10)),Ya(e,parseInt(g.getAttribute("data-on-show-ts"),10)),g=e.a,isNaN(g)||!(0<g)||ia()<e.a+G(h,1,0))return $a(b,"blocked_fast_click"),!1;return H(f,3)&&"function"==typeof q.copfcChm?(q.copfcChm(c),$a(b,"onepointfiveclick_first_click"),!1):!0}
function $a(a,b){if(a=G(a,5,"")){J.google_image_requests||(J.google_image_requests=[]);var c=J.document.createElement("img");c.src=a+"&label="+b;J.google_image_requests.push(c)}};function ab(a){return function(b){b=xa("https://pagead2.googlesyndication.com/pagead/gen_204",{id:"unsafeurl",ctx:a,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};function W(a,b){a.dispatchEvent(new CustomEvent("customError",{detail:{message:b}}))}
function X(a){var b=a.currentTarget,c=a.type;null!=a.clientX&&null!=a.clientY&&(c+=" ["+a.clientX+","+a.clientY+"]");a=a.target;for(var f=!1,d=!1,h=!1;a!=b;){for(var e=a.attributes,g=0;g<e.length;++g){var k=e[g];!f&&k.name.match(/^x-.+-l$/)?(c="[l="+k.value+"]"+c,f=!0):!d&&k.name.match(/^x-.+-v$/)?(c="[v="+k.value+"]"+c,d=!0):!h&&k.name.match(/^x-.+-e$/)&&(c="[e="+k.value+"]"+c,h=!0)}e=a.parentElement||b;if(!h)for(g=e.children,k=0;k<g.length;k++)if(g[k]==a){c=">"+k+c;break}a=e}return c};function bb(){this.a=!1}function cb(a,b){a.a=b}function db(a){for(;!a.id;){var b="goog-js-util-"+Math.random().toString(36).substr(2,5);if(!document.getElementById(b)){a.id=b;break}}return a.id};function eb(a){D(this,a,fb)}r(eb,C);var fb=[1];function Y(){this.a=null;this.h=new Xa;this.g=new bb;this.b=!1;this.c=-1}Y.prototype=ca(V.prototype);Y.prototype.constructor=Y;if(fa)fa(Y,V);else for(var Z in V)if("prototype"!=Z)if(Object.defineProperties){var gb=Object.getOwnPropertyDescriptor(V,Z);gb&&Object.defineProperty(Y,Z,gb)}else Y[Z]=V[Z];
Y.prototype.f=function(a){a:{var b=a.getElementsByTagName("META");for(var c=0;c<b.length;++c)if("exit"===b[c].getAttribute("name")){b=b[c].getAttribute("content");break a}b=""}if(this.a=b?new eb(b?JSON.parse(b):null):null){b=H(this.a,7);b=void 0===b?!1:b;c=Date.now();if(!isNaN(c)&&0<c){var f=parseInt(a.getAttribute("data-on-ready-ts"),10);!b&&!isNaN(f)&&0<f||a.setAttribute("data-on-ready-ts",c)}ib(this,this.a,a);this.b||(this.b=!0,jb(this,a))}};
function ib(a,b,c){cb(a.g,H(b,2));H(b,4)&&c.setAttribute("data-use-custom-tabs-in-sdk","true");if(G(b,5,""))for(a=c.querySelectorAll(G(b,5,"")),b=0;b<a.length;++b)a[b].addEventListener("click",function(){})}
function jb(a,b){var c=null,f=null;b.addEventListener("mousedown",function(d){for(var h=d.currentTarget,e=d.target;e!=h.parentElement&&"A"!=e.tagName;)e=e.parentElement;c=e==h.parentElement?null:e;a:{if(null!=a.a){h=d.currentTarget;e=d.target;if(H(a.a,2)&&1==e.children.length&&"SPAN"==e.children[0].tagName){var g=e.children[0],k=g.getBoundingClientRect();k.left<=d.clientX&&d.clientX<=k.right&&k.top<=d.clientY&&d.clientY<=k.bottom&&(e=g)}for(g=I(a.a,Wa,1);e!=h.parentElement;){e.matches=e.matches||
e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;for(k=0;k<g.length;++k){var l=g[k];if(e.matches(G(l,1,""))){f=l;break a}}e=e.parentElement}}f=null}if(c&&f&&G(f,2,"")){e=f;h=c;if(g=G(e,2,""))M(h,g,ab(618)),h.target=G(e,3,"")||"_top";h.removeAttribute("data-u2-final-url");h.removeAttribute("data-u2-tracking-url");(g=G(e,6,""))&&h.setAttribute("data-u2-final-url",g);(g=G(e,7,""))&&h.setAttribute("data-u2-tracking-url",g);h.removeAttribute("data-app-click-info");
(e=sa(e,ua,9))&&h.setAttribute("data-app-click-info",e.s());h=d.currentTarget;"function"==ha(window.st)?window.st(db(c)):W(h,"js-util: st() missing: "+X(d));H(a.a,6)&&c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN",{bubbles:!0}))}});b.addEventListener("click",function(d){if(c&&f&&G(f,2,"")&&Za(a.h,f,d)&&!d.defaultPrevented){var h=c,e=d.currentTarget;a:{var g=d.currentTarget;var k=d.target;if(a.g.a&&1==k.children.length&&"SPAN"==k.children[0].tagName){var l=k.children[0],m=l.getBoundingClientRect();
m.left<=d.clientX&&d.clientX<=m.right&&m.top<=d.clientY&&d.clientY<=m.bottom&&(k=l)}for(;k!=g;){l=k.getAttribute("x-code");if(null!=l){g=parseInt(l,10);break a}k=k.parentElement}g=17}k=g;"function"==ha(window.ja)?window.ja(db(h),k):W(e,"js-util: ja() missing: "+X(d));e=d.currentTarget;(g=h.href)?(l=[],0==/&nb=[^&]+/i.test(g)&&l.push("&nb="+k),0==/&nx=[^&]+/i.test(g)&&l.push("&nx="+Math.round(d.clientX-e.offsetLeft)),0==/&ny=[^&]+/i.test(g)&&l.push("&ny="+Math.round(d.clientY-e.offsetTop)),0<l.length&&
(k=l.join(""),l=g.indexOf("&adurl="),g=0>l?g+k:g.substring(0,l)+k+g.substring(l),M(h,g,ab(620)),W(e,"js-util: ja() filling: "+k+" "+X(d)))):W(e,"js-util: href is empty: "+X(d));h=c;e=G(f,2,"");g=e.indexOf("&adurl=");0>g||(e=e.slice(g),g=h.href||"",k=g.indexOf(e),0>k||(l=g.slice(k+e.length))&&M(h,g.slice(0,k)+l+e,ab(619)));if(H(a.a,6))c.dispatchEvent(new CustomEvent("CUSTOM_CLICK",{bubbles:!0})),d.stopImmediatePropagation(),d.preventDefault();else{d=c;if(d=(Qa(d.href)||(d.getAttribute("data-orig-async-clicktrack-url")?
Qa(d.getAttribute("data-orig-async-clicktrack-url")):!1))&&H(f,8))d=c,h=H(f,10),e=a.c,h?300>Date.now()-(void 0===e?-1:e)?d=!1:(h=d.getAttribute("data-orig-async-clicktrack-url"))?(h=Oa(h),e=h.i,M(d,h.j,za()),d=e):(d.setAttribute("data-orig-async-clicktrack-url",d.href),d=Na(d)):d=Na(d);d&&(a.c=Date.now())}}else d.stopImmediatePropagation(),d.preventDefault()})};var kb=document.getElementById("mys-content");if(kb){var lb=new Y;kb.addEventListener("browserReady",function(){lb.f(kb)})};}).call(this);
