webpackJsonp([70144966829960],{192:function(e,t){"use strict";t.__esModule=!0,t.default={apiKey:"AIzaSyDL_OP1pQz-ObjVQ2462d9m2tuiYlQoGj8",place:"Carrer+Reina+Victoria,39,Elx"},e.exports=t.default},286:function(e,t){},196:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var m=a(2),p=n(m),i=a(192),u=n(i);a(286);var c=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){var e=document.createElement("script");e.innerText="function myMap() { var myLatLng = {lat: 38.265277, lng: -0.704316};var mapOptions = { center: myLatLng, zoom: 17, mapTypeId: google.maps.MapTypeId.ROADMAP };var map = new google.maps.Map(document.getElementById('map'), mapOptions);var marker = new google.maps.Marker({position: myLatLng,map: map,title: 'YOBO'});}",document.getElementById("map").appendChild(e);var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://maps.google.com/maps/api/js?libraries=places&sensor=false&callback=myMap&key="+u.default.apiKey),document.getElementById("map").appendChild(t)},t.prototype.render=function(){return p.default.createElement("div",null,p.default.createElement("h1",null,"CONTACTO"),p.default.createElement("div",{className:"container"},p.default.createElement("form",{className:"form"},p.default.createElement("div",{className:"form-group"},p.default.createElement("label",{htmlFor:"name"},"Nombre:"),p.default.createElement("input",{name:"name",type:"text"})),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",{htmlFor:"email"},"Email:"),p.default.createElement("input",{name:"email",type:"email"})),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",{htmlFor:"message"},"Mensaje:"),p.default.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"10"})),p.default.createElement("input",{type:"submit",value:"Enviar"})),p.default.createElement("div",{id:"map",className:"map"})))},t}(m.Component);t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-0ef5b5c64a558060ae59.js.map