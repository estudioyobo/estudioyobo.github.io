webpackJsonp([35783957827783],{277:function(e,t){},176:function(e,t,o){!function(t,o){e.exports=o()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=o(1),r=(n(i),o(6)),c=n(r),s=o(7),u=n(s),l=o(8),d=n(l),f=o(9),m=n(f),p=o(10),g=n(p),v=o(11),b=n(v),y=o(14),h=n(y),w=[],k=!1,j=document.all&&!window.atob,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,b.default)(w,x),(0,g.default)(w,x.once),w},E=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},M=function(e){return e===!0||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&e()===!0},S=function(e){return x=a(x,e),w=(0,h.default)(),M(x.disable)||j?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){O(!0)}):document.addEventListener(x.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,u.default)(O,50,!0)),window.addEventListener("orientationchange",(0,u.default)(O,50,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,g.default)(w,x.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,u.default)(E,50,!0)}),(0,d.default)("[data-aos]",E),w)};e.exports={init:S,refresh:O,refreshHard:E}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=g,n=v;return g=v=void 0,k=t,y=e.apply(n,o)}function i(e){return k=e,h=setTimeout(l,t),E?n(e):y}function r(e){var o=e-w,n=e-k,a=t-o;return _?x(a,b-n):a}function s(e){var o=e-w,n=e-k;return void 0===w||o>=t||o<0||_&&n>=b}function l(){var e=O();return s(e)?d(e):void(h=setTimeout(l,r(e)))}function d(e){return h=void 0,M&&g?n(e):(g=v=void 0,y)}function f(){void 0!==h&&clearTimeout(h),k=0,g=w=v=h=void 0}function m(){return void 0===h?y:d(O())}function p(){var e=O(),o=s(e);if(g=arguments,v=this,w=e,o){if(void 0===h)return i(w);if(_)return h=setTimeout(l,t),n(w)}return void 0===h&&(h=setTimeout(l,t)),y}var g,v,b,y,h,w,k=0,E=!1,_=!1,M=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,a(o)&&(E=!!o.leading,_="maxWait"in o,b=_?j(c(o.maxWait)||0,t):b,M="trailing"in o?!!o.trailing:M),p.cancel=f,p.flush=m,p}function n(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return a(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:i,maxWait:t,trailing:r})}function a(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||i(e)&&k.call(e)==d}function c(e){if("number"==typeof e)return e;if(r(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=p.test(e);return o||g.test(e)?v(e.slice(2),o?2:8):m.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,g=/^0o[0-7]+$/i,v=parseInt,b="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,h=b||y||Function("return this")(),w=Object.prototype,k=w.toString,j=Math.max,x=Math.min,O=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function a(t){var o=g,n=v;return g=v=void 0,O=t,y=e.apply(n,o)}function i(e){return O=e,h=setTimeout(l,t),E?a(e):y}function c(e){var o=e-w,n=e-O,a=t-o;return _?j(a,b-n):a}function u(e){var o=e-w,n=e-O;return void 0===w||o>=t||o<0||_&&n>=b}function l(){var e=x();return u(e)?d(e):void(h=setTimeout(l,c(e)))}function d(e){return h=void 0,M&&g?a(e):(g=v=void 0,y)}function f(){void 0!==h&&clearTimeout(h),O=0,g=w=v=h=void 0}function m(){return void 0===h?y:d(x())}function p(){var e=x(),o=u(e);if(g=arguments,v=this,w=e,o){if(void 0===h)return i(w);if(_)return h=setTimeout(l,t),a(w)}return void 0===h&&(h=setTimeout(l,t)),y}var g,v,b,y,h,w,O=0,E=!1,_=!1,M=!0;if("function"!=typeof e)throw new TypeError(s);return t=r(t)||0,n(o)&&(E=!!o.leading,_="maxWait"in o,b=_?k(r(o.maxWait)||0,t):b,M="trailing"in o?!!o.trailing:M),p.cancel=f,p.flush=m,p}function n(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&w.call(e)==l}function r(e){if("number"==typeof e)return e;if(i(e))return u;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=m.test(e);return o||p.test(e)?g(e.slice(2),o?2:8):f.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,j=Math.min,x=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&i&&(c=new i(n),c.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;o<n;o++){e=r[o],t=a.querySelectorAll(e.selector);for(var i,c=0,s=t.length;c<s;c++)i=t[c],i.ready||(i.ready=!0,e.fn.call(i,i))}}Object.defineProperty(t,"__esModule",{value:!0});var a=window.document,i=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t.default=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){o(this,e)}return a(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,a=window.innerHeight;e.forEach(function(e,i){o(e,a+n,t)})};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(12),i=n(a),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e};t.default=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(13),i=n(a),r=function(e,t){var o=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t.default=o}])})},58:function(e,t){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,l,d){if("string"!=typeof l){if(u){var f=s(l);f&&f!==u&&e(t,f,d)}var m=i(l);r&&(m=m.concat(r(l)));for(var p=0;p<m.length;++p){var g=m[p];if(!(o[g]||n[g]||d&&d[g])){var v=c(l,g);try{a(t,g,v)}catch(e){}}}return t}return t}},278:function(e,t){},185:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(2),i=n(a);o(278);var r=function(e){var t=e.children;return i.default.createElement("span",{className:"button"},t)};t.default=r,e.exports=t.default},188:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(2),c=n(r);o(280);var s=function(e){var t=e.image,o=e.title,n=e.category,r=e.wrapClass,s=a(e,["image","title","category","wrapClass"]);return c.default.createElement("div",i({},s,{className:"portfolio--item "+r}),c.default.createElement("img",{src:t,alt:"Image from the project "+o}),c.default.createElement("div",{className:"portfolio--info"},c.default.createElement("h3",null,o),c.default.createElement("h4",null,n)))};t.default=s,e.exports=t.default},280:function(e,t){},191:function(e,t,o){"use strict";t.__esModule=!0;var n=o(66),a=[{title:"At Home Renovations",category:n.categories.identidad,image:"/images/proyecto-at-home-renovations.jpg"},{title:"Invitación Boda",category:n.categories.comunicacion+", "+n.categories.ilustracion,image:"/images/proyecto-invitacion-boda.jpg"},{title:"Inmovilla",category:n.categories.ilustracion,image:"/images/proyecto-iconos-inmovilla.jpg"},{title:"Yownes",category:n.categories.identidad+", "+n.categories.branding,image:"/images/proyecto-yownes.jpg"},{title:"Mandos",category:n.categories.ilustracion,image:"/images/proyecto-ilustraciones-mandos.jpg"},{title:"KRT Motorsport",category:n.categories.identidad,image:"/images/proyecto-krt.jpg"},{title:"Reason",category:n.categories.identidad,image:"/images/proyecto-reason.jpg"},{title:"Usui Reiki Ryoho",category:n.categories.identidad,image:"/images/proyecto-reyki.jpg"}];t.default=a,e.exports=t.default},66:function(e,t){"use strict";t.__esModule=!0;var o=t.categories={ilustracion:"Ilustración",branding:"Branding",identidad:"Identidad Corporativa",comunicacion:"Comunicación gráfica",packaging:"Packaging",social:"Social media",motion:"Stop motions"},n=[{title:o.identidad,description:"Dedicamos tiempo y esfuerzo para que tu marca quede perfecta, tanto si es nueva o deseas un rediseño.",list:["Naming","Logotipo","Branding","Manuales de estilo"],image:"/icons/identidad-corporativa.svg",color:"/icons/identidad-corporativa-color.svg"},{title:o.comunicacion,description:"Comunicar tu idea de manera correcta es muy importante para no confundir a tu público. Desarollamos todo tipo de publicidad, desde carteles hasta tarjetas.",list:["Carteles","Tríticos-Dípticos","Flyers","Pegatinas","Tarjetas"],image:"/icons/comunicacion-grafica.svg",color:"/icons/comunicacion-grafica-color.svg"},{title:o.ilustracion,description:"Realizamos ilustraciones como tal o como apoyo a otros campos del diseño.",list:["Iconos","Ilustraciones por encargo","Como complemento de gráficas","En textil, camisetas, bolsos..."],image:"/icons/ilustracion.svg",color:"/icons/ilustracion-color.svg"},{title:o.packaging,description:"Hacemos que los unboxings sean atractivos desde el principio. Transmitimos la imágen de tu marca de una manera atractiva y divertida.",list:["Etiquetas","Diseño de packaging","Bandas o cintas para cajas"],image:"/icons/packaging.svg",color:"/icons/packaging-color.svg"},{title:o.social,description:"Tomamos las riendas de las redes sociales tales como Facebook, Twitter o Instagram para ayudarte a llegar al público de una manera graficamente correcta.",list:["Publicaciones en RRSS","Campañas para RRSS"],image:"/icons/social-media.svg",color:"/icons/social-media-color.svg"},{title:o.motion,description:"Los videos promocionales pueden ser de gran ayuda a la hora de mostrar tu marca o un nuevo producto.",list:["Minivídeos animados"],image:"/icons/stop-motions.svg",color:"/icons/stop-motions-color.svg"}];t.default=n},284:function(e,t){},195:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=o(2),r=n(i),c=o(138),s=n(c),u=o(185),l=n(u),d=o(188),f=n(d),m=o(191),p=n(m);if(o(284),o(277),"undefined"!=typeof window){var g=o(176);console.log("AOS"),g.init()}var v=function(){return r.default.createElement("div",{className:"home"},r.default.createElement("div",{className:"hero"},r.default.createElement("h1",null,"Estudio de diseño gráfico Yobo"),r.default.createElement("div",{className:"hero--description"},r.default.createElement("p",null,"Estudio de diseño gráfico ubicado en Elche especializado en identidad corporativa, comunicación gráfica e ilustración. ¿Tienes una idea? coméntanosla y le daremos forma para ayudarte a conseguir tus objetivos."),r.default.createElement(l.default,null,r.default.createElement(s.default,{to:"/contact",style:{color:"white",textDecoration:"none"}},"Contactar")))),r.default.createElement("div",{className:"home-grid"},p.default.map(function(e,t){return r.default.createElement(f.default,a({key:t},e,{"data-aos":"fade-up",wrapClass:"home-grid--img"}))})))};t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-ac61bb6cd9e87104e499.js.map