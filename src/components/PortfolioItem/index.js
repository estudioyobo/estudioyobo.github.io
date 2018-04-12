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
    <div {...rest} className={`portfolio--item ${wrapClass}`}>
      <Link to={link}>
        <img src={image} alt={`Image from the project ${title}`} />
        <div className="portfolio--info">
          <h3>{title}</h3>
          <h4>
            {typeof category === "object" ? category.join(", ") : category}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;
