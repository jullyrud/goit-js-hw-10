!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var c=u.test(t);return c||f.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}n=function(t,e,n){var o,i,r,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function T(){var t=m();if(j(t))return O(t);f=setTimeout(T,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function O(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=m(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return h(a);if(s)return f=setTimeout(T,e),g(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(y(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},w.flush=function(){return void 0===f?u:O(m())},w};({input:document.querySelector("#search-box")}).input.addEventListener("input",n((function(t){var e=t.target.value.trim();if(console.log(e),""===e)return alert("запоните поле");(n=e,o="https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages"),fetch(o).then((function(t){return 200!==t.status&&alert("памагите"),t.json()}))).then((function(t){t.length>9&&alert("Too many matches found. Please enter a more specific name."),console.log(t)}));var n,o}),1500))}();
//# sourceMappingURL=index.c9927331.js.map
