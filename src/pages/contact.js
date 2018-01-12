import React, { Component } from "react";

import mapConfig from "../config/map";

class Contact extends Component {
  componentDidMount() {
    var script = document.createElement("script");
    script.innerText = `function myMap() { var mapOptions = { center: new google.maps.LatLng(38.265277, -0.704316), zoom: 10, mapTypeId: google.maps.MapTypeId.HYBRID };var map = new google.maps.Map(document.getElementById("map"), mapOptions);}`;
    document.getElementById("map").appendChild(script);

    var g = document.createElement("script");
    g.setAttribute("type", "text/javascript");
    g.setAttribute(
      "src",
      "https://maps.google.com/maps/api/js?libraries=places&sensor=false&callback=myMap"
    );
    document.getElementById("map").appendChild(g);
  }

  render() {
    return (
      <div>
        <h1>CONTACTO</h1>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input name="name" type="text" />
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" />
          <textarea name="message" id="message" cols="30" rows="10" />
          <input type="submit" value="Enviar" />
        </form>
        <div id="map" />
      </div>
    );
  }
}

export default Contact;
