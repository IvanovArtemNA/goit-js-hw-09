!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i,u,a,c=o("iU1Pc");function l(e,n){var t=Math.random()>.3;return promise=new Promise((function(r,o){setTimeout((function(){t?r({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault(),i=Number(n.currentTarget.elements.amount.value),u=Number(n.currentTarget.elements.delay.value),a=Number(n.currentTarget.elements.step.value);for(var t=1;t<=i;t+=1)l(t,u).then((function(n,t){e(c).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(n,t){e(c).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),u+=a}))}();
//# sourceMappingURL=03-promises.3ea31286.js.map
