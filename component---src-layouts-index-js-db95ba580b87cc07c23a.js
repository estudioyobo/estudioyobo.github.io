webpackJsonp([0x67ef26645b2a],{127:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Estudio Yobo"}}},layoutContext:{}}},227:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(242),c=r(u),l=n(127),s=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},32:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(34),c=n(33),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},33:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},34:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},35:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},25:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(4),T=r(d),p=n(40),E=r(p),m=n(32),A=r(m),y=n(39),h=n(15),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case h.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case h.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case h.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},S=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),v=_(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},15:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},39:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),c=n(7),l=r(c),s=n(15),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,s.TAG_NAMES.TITLE),n=A(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:A(e,s.HELMET_PROPS.DEFER),encode:A(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},h=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){h(t)},0)}}(),_=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},M=null,O=function(e){M&&S(M),e.defer?M=b(function(){g(e,function(){M=null})}):(g(e),M=null)},g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;C(s.TAG_NAMES.BODY,r),C(s.TAG_NAMES.HTML,o),R(d,T);var p={baseTag:N(s.TAG_NAMES.BASE,n),linkTags:N(s.TAG_NAMES.LINK,a),metaTags:N(s.TAG_NAMES.META,i),noscriptTags:N(s.TAG_NAMES.NOSCRIPT,u),scriptTags:N(s.TAG_NAMES.SCRIPT,l),styleTags:N(s.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=p[e].oldTags)}),t&&t(),c(e,E,m)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),C(s.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=a.indexOf(c);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},w=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=w(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=G(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,T=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,o,r),link:x(s.TAG_NAMES.LINK,a,r),meta:x(s.TAG_NAMES.META,i,r),noscript:x(s.TAG_NAMES.NOSCRIPT,u,r),script:x(s.TAG_NAMES.SCRIPT,c,r),style:x(s.TAG_NAMES.STYLE,l,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=v}).call(t,function(){return this}())},40:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){p=e(T.map(function(e){return e.props})),E.canUseDOM?t(p):n&&(p=n(p))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var T=[],p=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return p},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),d()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=s.canUseDOM,E}}var c=n(1),l=r(c),s=r(n(35)),f=r(n(41));e.exports=u},41:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],f=t[l];if(o=n?n.call(r,s,f,l):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},36:function(e,t){},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){scrollTo({top:0,left:0,behavior:"smooth"})}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i);n(36);var c=function(e){var t=e.name,n=e.icon,r=e.link;return u.default.createElement("div",{className:"social"},u.default.createElement("a",{href:r,target:"_blank"},u.default.createElement("img",{src:n,alt:t+" icon",className:"social--icon"})))},l=function(e){var t=e.social,n=e.mail,r=e.phone;return u.default.createElement("footer",null,u.default.createElement("div",{className:"footer-social"},t.map(function(e,t){return u.default.createElement(c,a({key:t},e))})),u.default.createElement("div",{className:"footer-contact"},u.default.createElement("a",{href:"mailto:"+n},n)),u.default.createElement("div",{className:"footer-phone"},r.map(function(e,t){return u.default.createElement("span",{key:t},e)})),u.default.createElement("div",{className:"footer__up",onClick:o},u.default.createElement("span",{className:"footer__up--arrow"},"▲"),u.default.createElement("span",{className:"footer__up--text"},"UP")))};t.default=l,e.exports=t.default},37:function(e,t){},27:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(24),u=r(i),c=n(22);r(c);n(37);var l=n(28),s=r(l),f=function(e){var t=e.color;return a.default.createElement("header",{className:"header"},a.default.createElement(u.default,{to:"/",style:{color:"#333",fontFamily:"Montserrat SemiBold",textDecoration:"none"}},a.default.createElement(s.default,{color:t})),a.default.createElement("nav",{className:"header-nav"},a.default.createElement("div",{className:"header-menu--hamburger"},a.default.createElement("input",{type:"checkbox"}),a.default.createElement("div",{className:"header-menu"},a.default.createElement(u.default,{to:"/",className:"header-nav--element",exact:!0,activeClassName:"header-nave--element__active",style:{color:t}},"HOME"),a.default.createElement(u.default,{to:"/services",className:"header-nav--element",activeClassName:"header-nave--element__active",style:{color:t}},"SERVICIOS"),a.default.createElement(u.default,{to:"/contact",className:"header-nav--element",activeClassName:"header-nave--element__active",style:{color:t}},"CONTACTO")),a.default.createElement("div",{className:"hamburger"},a.default.createElement("span",{style:{background:t}}),a.default.createElement("span",{style:{background:t}}),a.default.createElement("span",{style:{background:t}})))))};t.default=f,e.exports=t.default},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=function(e){var t=e.color,n=void 0===t?"#1D1D1B":t,r=e.width,o=void 0===r?"90px":r;return a.default.createElement("svg",{version:"1.1",id:"logo",x:"0px",y:"0px",viewBox:"0 0 259.9 54.5",width:o},a.default.createElement("g",{id:"XMLID_158_"},a.default.createElement("path",{fill:n,d:"M31.9,37v17.5H19.8V37.3L0,0.4h12.2l13.7,24.3L39.3,0.4h12.2L31.9,37z"}),a.default.createElement("path",{fill:n,d:"M120.8,27.4C120.8,43,108.4,55,92.1,55c-16.4,0-28.8-11.9-28.8-27.6C63.3,11.7,75.7,0,92.1,0 C108.4,0,120.8,11.7,120.8,27.4z M75.7,27.4c0,9.5,7.6,16.9,16.5,16.9s16.2-7.4,16.2-16.9c0-9.5-7.3-16.8-16.2-16.8 C83.2,10.7,75.7,17.9,75.7,27.4z"}),a.default.createElement("path",{fill:n,d:"M184,13.9c0,5.8-3.5,10.4-9.3,11.9c7,1.3,11.2,6.6,11.2,13.7c0,9.3-7.8,15-20.2,15h-25.5V0.4h24.6 C176.7,0.4,184,5.6,184,13.9z M171.6,16.1c0-3.7-2.8-5.9-7.3-5.8h-11.9v11.8h11.9C168.9,22.2,171.6,19.9,171.6,16.1z M173.5,37.9 c0-3.9-3.5-6.3-9.2-6.3h-11.9v12.8h11.9C170,44.5,173.5,42.1,173.5,37.9z"}),a.default.createElement("path",{fill:n,d:"M259.9,27.4c0,15.6-12.4,27.6-28.8,27.6s-28.8-11.9-28.8-27.6c0-15.8,12.4-27.4,28.8-27.4 S259.9,11.7,259.9,27.4z M214.8,27.4c0,9.5,7.6,16.9,16.5,16.9s16.2-7.4,16.2-16.9c0-9.5-7.3-16.8-16.2-16.8 C222.3,10.7,214.8,17.9,214.8,27.4z"})))};t.default=i,e.exports=t.default},19:function(e,t){"use strict";t.__esModule=!0,t.default={title:"Estudio Yobo",description:"Estudio de diseño gráfico y desarrollo ubicado en Elche especializado en identidad corporativa, comunicación gráfica e ilustración y desarrollo de aplicaciones web y móvil. ¿Tienes una idea? coméntanosla y le daremos forma para ayudarte a conseguir tus objetivos.",keywords:["diseño","design","desarrollo","programacion","programming","development","estudio de diseño y desarrollo","diseño grafico","web","elche","estudio","yobo","barato","profesional","logotipos","logos","iconos","carteles","ilustracion","rrss","social media","video"],social:[{name:"Facebook",icon:"/icons/fb.svg",link:"https://www.facebook.com/estudioyobo/"},{name:"Instagram",icon:"/icons/ig.svg",link:"https://www.instagram.com/estudioyobo/"}],mail:"info@estudioyobo.com",phone:["966 578 597","638 944 014"],url:"http://estudioyobo.com"},e.exports=t.default},122:function(e,t){},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(1),a=r(o),i=n(4),u=r(i),c=n(25),l=r(c),s=n(27),f=r(s),d=n(26),T=r(d);n(122);var p=n(19),E=r(p),m=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:E.default.description},{name:"keywords",content:E.default.keywords.concat()},{name:"og:type",content:"webpage"},{name:"og:site_name",content:"Estudio Yobo"}]}),a.default.createElement(f.default,null),t(),a.default.createElement(T.default,E.default))};m.propTypes={children:u.default.func},t.default=m;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-db95ba580b87cc07c23a.js.map