webpackJsonp([0xc1fcc761a193],{126:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Estudio Yobo"}}},layoutContext:{}}},225:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),c=n(239),s=r(c),u=n(126),l=r(u);t.default=function(e){return i.default.createElement(s.default,o({},e,l.default))},e.exports=t.default},55:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=i.call(e),t=i.call(t),u(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=c(e),f=c(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),a=d.length-1;a>=0;a--)if(d[a]!=f[a])return!1;for(a=d.length-1;a>=0;a--)if(l=d[a],!u(e[l],t[l],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,c=n(57),s=n(56),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},56:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},57:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},58:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},42:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),d=r(l),f=n(6),p=r(f),T=n(67),m=r(T),E=n(55),h=r(E),y=n(66),v=n(21),A=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return c(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case v.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=i,t.titleAttributes=s({},a),t));case v.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},a)});case v.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},a)})}return s({},o,(n={},n[r.type]=s({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,c=o(a,["children"]),s=(0,y.convertReactPropstoHtmlAttributes)(c);switch(n.warnOnInvalidChildren(e,i),e.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=s({},r);return n&&(a=this.mapChildrenToProps(n,a)),d.default.createElement(e,a)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},_=(0,m.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),g=A(_);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},21:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},66:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),c=r(i),s=n(7),u=r(s),l=n(21),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,l.TAG_NAMES.TITLE),n=h(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();t.indexOf(s)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(c)===-1||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=(0,u.default)({},r[c],o[c]);r[c]=s}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:m([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:h(e,l.HELMET_PROPS.DEFER),encode:h(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},v=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){v(t)},0)}}(),A=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:e.requestAnimationFrame||v,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,M=function(e){S&&_(S),e.defer?S=b(function(){O(e,function(){S=null})}):(O(e),S=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,o),w(f,p);var T={baseTag:C(l.TAG_NAMES.BASE,n),linkTags:C(l.TAG_NAMES.LINK,a),metaTags:C(l.TAG_NAMES.META,i),noscriptTags:C(l.TAG_NAMES.NOSCRIPT,c),scriptTags:C(l.TAG_NAMES.SCRIPT,u),styleTags:C(l.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),s(e,m,E)},P=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),o.indexOf(s)===-1&&o.push(s);var d=a.indexOf(s);d!==-1&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),a=P(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+d(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+d(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),a=G(n,o);return[c.default.createElement(l.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),c.default.createElement(e,o)})},x=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,r),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,o,r),link:x(l.TAG_NAMES.LINK,a,r),meta:x(l.TAG_NAMES.META,i,r),noscript:x(l.TAG_NAMES.NOSCRIPT,c,r),script:x(l.TAG_NAMES.SCRIPT,s,r),style:x(l.TAG_NAMES.STYLE,u,r),title:x(l.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=M,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=g}).call(t,function(){return this}())},67:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!d(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.createElement(c,this.props)},t}(s.Component);return m.displayName="SideEffect("+r(c)+")",m.canUseDOM=l.canUseDOM,m}}var s=n(1),u=r(s),l=r(n(58)),d=r(n(69));e.exports=c},69:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!c(u))return!1;var l=e[u],d=t[u];if(o=n?n.call(r,l,d,u):void 0,o===!1||void 0===o&&l!==d)return!1}return!0}},59:function(e,t){},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a);n(59);var c=function(e){var t=e.name,n=e.icon,r=e.link;return i.default.createElement("div",{className:"social"},i.default.createElement("a",{href:r,target:"_blank"},i.default.createElement("img",{src:n,alt:t+" icon",className:"social--icon"})))},s=function(e){var t=e.social,n=e.mail,r=e.phone;return i.default.createElement("footer",null,i.default.createElement("div",{className:"footer-social"},t.map(function(e,t){return i.default.createElement(c,o({key:t},e))})),i.default.createElement("div",{className:"footer-contact"},i.default.createElement("a",{href:"mailto:"+n},n)),i.default.createElement("div",{className:"footer-phone"},r.map(function(e,t){return i.default.createElement("span",{key:t},e)})))};t.default=s,e.exports=t.default},60:function(e,t){},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(27),c=r(i),s=n(22);r(s);n(60);var u=n(47),l=r(u),d=function(e){var t=e.color;return a.default.createElement("header",{className:"header"},a.default.createElement(c.default,{to:"/",style:{color:"#333",fontFamily:"Montserrat SemiBold",textDecoration:"none"}},a.default.createElement(l.default,{color:t})),a.default.createElement("nav",{className:"header-nav"},a.default.createElement("div",{className:"header-menu--hamburger"},a.default.createElement("input",{type:"checkbox"}),a.default.createElement("div",{className:"header-menu"},a.default.createElement(c.default,{to:"/",className:"header-nav--element",exact:!0,activeClassName:"header-nave--element__active",style:{color:t}},"HOME"),a.default.createElement(c.default,{to:"/services",className:"header-nav--element",activeClassName:"header-nave--element__active",style:{color:t}},"SERVICIOS"),a.default.createElement(c.default,{to:"/contact",className:"header-nav--element",activeClassName:"header-nave--element__active",style:{color:t}},"CONTACTO")),a.default.createElement("div",{className:"hamburger"},a.default.createElement("span",{style:{background:t}}),a.default.createElement("span",{style:{background:t}}),a.default.createElement("span",{style:{background:t}})))))};t.default=d,e.exports=t.default},47:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=function(e){var t=e.color,n=void 0===t?"#1D1D1B":t,r=e.width,o=void 0===r?"90px":r;return a.default.createElement("svg",{version:"1.1",id:"logo",x:"0px",y:"0px",viewBox:"0 0 259.9 54.5",width:o},a.default.createElement("g",{id:"XMLID_158_"},a.default.createElement("path",{fill:n,d:"M31.9,37v17.5H19.8V37.3L0,0.4h12.2l13.7,24.3L39.3,0.4h12.2L31.9,37z"}),a.default.createElement("path",{fill:n,d:"M120.8,27.4C120.8,43,108.4,55,92.1,55c-16.4,0-28.8-11.9-28.8-27.6C63.3,11.7,75.7,0,92.1,0\r C108.4,0,120.8,11.7,120.8,27.4z M75.7,27.4c0,9.5,7.6,16.9,16.5,16.9s16.2-7.4,16.2-16.9c0-9.5-7.3-16.8-16.2-16.8\r C83.2,10.7,75.7,17.9,75.7,27.4z"}),a.default.createElement("path",{fill:n,d:"M184,13.9c0,5.8-3.5,10.4-9.3,11.9c7,1.3,11.2,6.6,11.2,13.7c0,9.3-7.8,15-20.2,15h-25.5V0.4h24.6\r C176.7,0.4,184,5.6,184,13.9z M171.6,16.1c0-3.7-2.8-5.9-7.3-5.8h-11.9v11.8h11.9C168.9,22.2,171.6,19.9,171.6,16.1z M173.5,37.9\r c0-3.9-3.5-6.3-9.2-6.3h-11.9v12.8h11.9C170,44.5,173.5,42.1,173.5,37.9z"}),a.default.createElement("path",{fill:n,d:"M259.9,27.4c0,15.6-12.4,27.6-28.8,27.6s-28.8-11.9-28.8-27.6c0-15.8,12.4-27.4,28.8-27.4\r S259.9,11.7,259.9,27.4z M214.8,27.4c0,9.5,7.6,16.9,16.5,16.9s16.2-7.4,16.2-16.9c0-9.5-7.3-16.8-16.2-16.8\r C222.3,10.7,214.8,17.9,214.8,27.4z"})))};t.default=i,e.exports=t.default},235:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),s=r(c),u=n(!function(){var e=new Error('Cannot find module "react-anime"');throw e.code="MODULE_NOT_FOUND",e}()),l=r(u),d=n(27),f=r(d),p="undefined"!=typeof window?n(!function(){var e=new Error('Cannot find module "animejs"');throw e.code="MODULE_NOT_FOUND",e}()):function(e){return e},T=function(e){function t(){var n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=r=a(this,e.call.apply(e,[this].concat(s))),r.state={showItems:!1},r.mouseEnter=function(){r.setState({showItems:!0})},r.mouseLeave=function(){r.setState({showItems:!1})},i=n,a(r,i)}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.items,r=e.className,o=e.url,a=e.style,i=e.onClick,c=e.enableItems;return s.default.createElement("div",{className:"service__section"+r,style:a,onClick:i},s.default.createElement(f.default,{to:o,className:"service__title",onMouseOver:this.mouseEnter,onMouseOut:this.mouseLeave,onClick:this.props.onClick},t),c&&this.state.showItems&&s.default.createElement("div",{className:"service__items"},s.default.createElement(l.default,{duration:500,scale:[.4,1],translateY:function(e,t,n){return Math.round(p.random(110,160)*Math.sin(2*(t+1)*Math.PI/n))+"px"},translateX:function(e,t,n){return Math.round(p.random(130,180)*Math.cos(2*(t+1)*Math.PI/n))+"px"},delay:function(e,t){return 100*t},opacity:[0,1]},n.map(function(e,t){return s.default.createElement("span",{className:"service__item",key:t},e.title)}))))},t}(c.Component);t.default=T,e.exports=t.default},23:function(e,t){"use strict";t.__esModule=!0,t.default={title:"Estudio Yobo",description:"Estudio de diseño gráfico y desarrollo ubicado en Elche especializado en identidad corporativa, comunicación gráfica e ilustración y desarrollo de aplicaciones web y móvil. ¿Tienes una idea? coméntanosla y le daremos forma para ayudarte a conseguir tus objetivos.",keywords:["diseño","design","desarrollo","programacion","programming","development","estudio de diseño y desarrollo","diseño grafico","web","elche","estudio","yobo","barato","profesional","logotipos","logos","iconos","carteles","ilustracion","rrss","social media","video"],social:[{name:"Facebook",icon:"/icons/fb.svg",link:"https://www.facebook.com/estudioyobo/"},{name:"Instagram",icon:"/icons/ig.svg",link:"https://www.instagram.com/estudioyobo/"},{name:"Behance",icon:"/icons/bh.svg",link:"http://behance.net/AntoniBoix"}],mail:"info@estudioyobo.com",phone:["966 578 597","638 944 014"],url:"http://estudioyobo.com"},e.exports=t.default},48:function(e,t){"use strict";t.__esModule=!0;var n=t.categories={ilustracion:"Ilustración",branding:"Branding",identidad:"Identidad Corporativa",comunicacion:"Comunicación gráfica",packaging:"Packaging",social:"Social media",motion:"Stop motions",apps:"Apps Móviles",api:"APIs",web:"Apps Web",databases:"Bases de Datos",bots:"Bots de Telegram"},r={design:[{title:n.identidad,description:"Dedicamos tiempo y esfuerzo para que tu marca quede perfecta, tanto si es nueva o deseas un rediseño.",list:["Naming","Logotipo","Branding","Manuales de estilo"],image:"/icons/identidad-corporativa.svg",color:"/icons/identidad-corporativa-color.svg"},{title:n.comunicacion,description:"Comunicar tu idea de manera correcta es muy importante para no confundir a tu público. Desarollamos todo tipo de publicidad, desde carteles hasta tarjetas.",list:["Carteles","Tríticos-Dípticos","Flyers","Pegatinas","Tarjetas"],image:"/icons/comunicacion-grafica.svg",color:"/icons/comunicacion-grafica-color.svg"},{title:n.ilustracion,description:"Realizamos ilustraciones como tal o como apoyo a otros campos del diseño.",list:["Iconos","Ilustraciones por encargo","Como complemento de gráficas","En textil, camisetas, bolsos..."],image:"/icons/ilustracion.svg",color:"/icons/ilustracion-color.svg"},{title:n.packaging,description:"Hacemos que los unboxings sean atractivos desde el principio. Transmitimos la imágen de tu marca de una manera atractiva y divertida.",list:["Etiquetas","Diseño de packaging","Bandas o cintas para cajas"],image:"/icons/packaging.svg",color:"/icons/packaging-color.svg"},{title:n.social,description:"Tomamos las riendas de las redes sociales tales como Facebook, Twitter o Instagram para ayudarte a llegar al público de una manera graficamente correcta.",list:["Publicaciones en RRSS","Campañas para RRSS"],image:"/icons/social-media.svg",color:"/icons/social-media-color.svg"},{title:n.motion,description:"Los videos promocionales pueden ser de gran ayuda a la hora de mostrar tu marca o un nuevo producto.",list:["Minivídeos animados"],image:"/icons/stop-motions.svg",color:"/icons/stop-motions-color.svg"}],develop:[{title:n.apps,description:"Hacemos apps móviles a medida para hacer realidad tu idea.",list:["iOS","Android","React-Native (multiplataforma)"],image:"/icons/apps-moviles.svg"},{title:n.web,description:"Desarrollamos tanto páginas web para tu marca personal, tienda para tu negocio o cualquier aplicación que necesites.",list:["Páginas Web","Apps Web","Tiendas"],image:"/icons/web.svg"},{title:n.api,description:"Servicios de API para proveer de datos a tus aplicaciones.",list:["REST","GraphQL"],image:"/icons/apis.svg"},{title:n.databases,description:"Gestiona tus datos con una base de datos a medida.",list:["MySql","MongoDB"],image:"/icons/databases.svg"},{title:n.bots,description:"¿Tienes una idea de interacción para usuarios en Telegram? Cuéntanosla y la pondremos en marcha.",list:[],image:"/icons/telegram.svg"}]};t.default=r},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var c=n(1),s=r(c),u=n(6),l=r(u),d=n(42),f=r(d),p=n(46),T=r(p),m=n(45),E=r(m),h=n(235),y=r(h),v=n(23),A=r(v),b=n(48),_=r(b),g=function(e){function t(){var n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=r=a(this,e.call.apply(e,[this].concat(s))),r.isDevelop=function(){return"/services/develop"===r.props.location.pathname},r.isDesign=function(){return"/services/design"===r.props.location.pathname},r.condensedNav=function(){return r.isDesign()||r.isDevelop()},i=n,a(r,i)}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.data,r=this.isDevelop(),o=this.isDesign(),a=this.condensedNav();return s.default.createElement("div",null,s.default.createElement(f.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:A.default.description},{name:"keywords",content:A.default.keywords.concat()},{name:"og:type",content:"webpage"},{name:"og:site_name",content:"Estudio Yobo"}]}),s.default.createElement(T.default,null),s.default.createElement("div",{style:{background:r?"#333":"none",color:r?"#f3f4f0":"#333",paddingTop:"45px"}},s.default.createElement("h1",null,"SERVICIOS"),s.default.createElement("div",{className:"service__menu "+(a&&"service__menu--mini")},s.default.createElement(y.default,{title:"Diseño",className:r?" service__section--light":" service__section--dark",style:{textDecoration:o?"underline double":"none"},url:"/services/design",enableItems:!a,items:_.default.design}),s.default.createElement(y.default,{title:"Desarrollo",className:r?" service__section--light":o?" service__section--dark":" service__section--light",style:{textDecoration:r?"underline double":"none"},url:"/services/develop",enableItems:!a,items:_.default.develop})),s.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t())),s.default.createElement(E.default,A.default))},t}(c.Component);g.propTypes={children:l.default.func},t.default=g;t.query="** extracted graphql fragment **";
}});
//# sourceMappingURL=component---src-layouts-services-js-27d9bc018ee36452b4b0.js.map