parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=function(e,t,n,i,s){var o=document.createElement("div");o.classList.add("notification",s),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),o.insertAdjacentHTML("beforeend",'\n  <h2 class="title">\n    '.concat(n,'\n  </h2>\n  <p class="title">\n    ').concat(i,"\n  </p>")),document.body.append(o),setTimeout(function(){o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(240,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(440,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6f17767e.js.map