import React from "react";

import "./service.css";

const Service = ({ title, description, list, image }) => (
  <div className="service">
    <div className="service--content">
      <h2 className="service--title">{title}</h2>
      <p className="service--description">{description}</p>
      <ul className="service--list">
        {list.map((item, i) => <li>{item}</li>)}
      </ul>
    </div>
    {image && <img className="service--image" src={image} alt="" />}
  </div>
);

export default Service;
