webpackJsonp([70144966829960],{221:function(e,t){"use strict";t.__esModule=!0,t.default={apiKey:"AIzaSyDL_OP1pQz-ObjVQ2462d9m2tuiYlQoGj8",place:"Carrer+Reina+Victoria,39,Elx"},e.exports=t.default},312:function(e,t){},226:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var m=a(1),i=n(m),p=a(221),c=n(p);a(312);var u=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){var e=document.createElement("script");e.innerText="function myMap() { var myLatLng = {lat: 38.265277, lng: -0.704316};var mapOptions = { center: myLatLng, zoom: 17, mapTypeId: google.maps.MapTypeId.ROADMAP };var map = new google.maps.Map(document.getElementById('map'), mapOptions);var marker = new google.maps.Marker({position: myLatLng,map: map,title: 'YOBO'});}",document.getElementById("map").appendChild(e);var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://maps.google.com/maps/api/js?libraries=places&sensor=false&callback=myMap&key="+c.default.apiKey),document.getElementById("map").appendChild(t)},t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"CONTACTO"),i.default.createElement("div",{className:"container"},i.default.createElement("form",{className:"form",action:"https://formspree.io/info@estudioyobo.com",method:"POST"},i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{htmlFor:"name"},"Nombre:"),i.default.createElement("input",{name:"name",type:"text"})),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{htmlFor:"email"},"Email:"),i.default.createElement("input",{name:"email",type:"email"})),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{htmlFor:"message"},"Mensaje:"),i.default.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"10"})),i.default.createElement("input",{type:"submit",value:"Enviar"})),i.default.createElement("div",{id:"map",className:"map"})))},t}(m.Component);t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-73ee4536bc580918f7da.js.map