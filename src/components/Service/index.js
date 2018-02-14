import React from "react";
import ColorSVG from "../ColorSVG";

import "./service.css";

const Service = ({ title, description, list, image, color }) => (
  <div className="service">
    <div className="service--content">
      <h2 className="service--title">{title}</h2>
      <p className="service--description">{description}</p>
      <ul className="service--list">
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    {image && (
      <ColorSVG image={image} color={color} wrapperClass="service--image" />
    )}
  </div>
);

export default Service;
