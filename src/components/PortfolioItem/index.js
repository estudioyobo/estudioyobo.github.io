import React from "react";

import "./portfolio-item.css";

const PortfolioItem = ({ image, title, category, wrapClass, ...rest }) => {
  return (
    <div {...rest} className={`portfolio--item ${wrapClass}`}>
      <img src={image} alt={`Image from the project ${title}`} />
      <div className="portfolio--info">
        <h3>{title}</h3>
        <h4>{category}</h4>
      </div>
    </div>
  );
};

export default PortfolioItem;
