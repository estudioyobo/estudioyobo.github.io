import React, { Component } from "react";

import mapConfig from "../config/map";

import "./contact.css";

class Contact extends Component {
  componentDidMount() {
    var script = document.createElement("script");
    script.innerText =
      "function myMap() { var myLatLng = {lat: 38.265277, lng: -0.704316};var mapOptions = { center: myLatLng, zoom: 17, mapTypeId: google.maps.MapTypeId.ROADMAP };var map = new google.maps.Map(document.getElementById('map'), mapOptions);var marker = new google.maps.Marker({position: myLatLng,map: map,title: 'YOBO'});}";
    document.getElementById("map").appendChild(script);

    var g = document.createElement("script");
    g.setAttribute("type", "text/javascript");
    g.setAttribute(
      "src",
      `https://maps.google.com/maps/api/js?libraries=places&sensor=false&callback=myMap&key=${
        mapConfig.apiKey
      }`
    );
    document.getElementById("map").appendChild(g);
  }

  render() {
    return (
      <div>
        <h1>CONTACTO</h1>
        <div className="container">
          <form
            className="form"
            action="https://formspree.io/info@estudioyobo.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input name="name" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input name="email" type="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              />
            </div>
            <input type="submit" value="Enviar" />
          </form>
          <div id="map" className="map" />
        </div>
      </div>
    );
  }
}

export default Contact;
