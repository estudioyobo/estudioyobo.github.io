import React from "react";

import PortfolioItem from "../../components/PortfolioItem";
import SectionHeader from "../../components/SectionHeader";

import "./portfolio-grid.css";

const PortfolioGrid = ({ posts }) => (
  <section className="padding">
    <SectionHeader
      title="portfolio"
      subtitle="nuestros trabajos"
      color="#EECA46"
    />
    <div className="portfolio-section">
      <h2>Project</h2>
      <h2>Spoiler</h2>
      <h3>Ver más</h3>
      <div className="portfolio">
        {posts.map(({ node }, i) => (
          <PortfolioItem
            key={i}
            title={node.frontmatter.title}
            image={node.frontmatter.thumbnail}
            category={node.frontmatter.tags}
            link={node.fields.slug}
          />
        ))}
      </div>
      <p className="portfolio-section--desc">
        Esta una selección de algunos de nuestros proyectos, puedes ver más
        accediendo a la galería a travñes del enlace de arriba
      </p>
    </div>
  </section>
);

export default PortfolioGrid;
