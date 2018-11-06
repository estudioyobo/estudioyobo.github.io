import React from "react";
import Link from "gatsby-link";

import "./portfolio-item.css";

const PortfolioItem = ({
  image,
  title,
  category,
  wrapClass,
  link,
  ...rest
}) => {
  return (
    <Link to={link} className="portfolio--item">
      <img src={image} alt={`Image from the project ${title}`} />
      <div className="portfolio-item--info">
        <h3>{title}</h3>
        <h4>{typeof category === "object" ? category.join(", ") : category}</h4>
      </div>
    </Link>
  );
};

export default PortfolioItem;
