parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.querySelector(".field tbody"),i=document.querySelector(".container"),l=document.querySelector(".append-row"),u=document.querySelector(".remove-row"),d=document.querySelector(".append-column"),m=document.querySelector(".remove-column");i.addEventListener("click",{handleEvent:function(e){if(e.target.classList.contains("button")){var t=f(e.target.classList[0]);s[t]();var n=a.children.length,r=a.lastElementChild.children.length;l.disabled=n>=10,u.disabled=n<=2,d.disabled=r>=10,m.disabled=r<=2}}});var s={appendRow:function(){for(var e=a.querySelector("tr").children.length,t=document.createElement("tr"),n=1;n<=e;n++){var r=document.createElement("td");t.append(r)}a.append(t)},appendColumn:function(){e(a.children).forEach(function(e){var t=document.createElement("td");e.append(t)})},removeRow:function(){a.lastElementChild.remove()},removeColumn:function(){e(a.children).forEach(function(e){e.lastElementChild.remove()})}};function f(e){var t=e.split("-");return t[1]=t[1].slice(0,1).toUpperCase()+t[1].slice(1),t.join("")}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f4d5e58f.js.map