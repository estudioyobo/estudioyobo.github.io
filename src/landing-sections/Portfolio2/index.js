import React, { Component } from "react";

import SectionHeader from "../../components/SectionHeader";

import "./portfolio.css";
import "./revealer.css";
import { Slideshow } from "./reveal";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.gridElems = [];
  }
  componentDidMount() {
    new Slideshow(this.gridElems, { filledColor: "#EECA46" });
  }
  render() {
    const { posts } = this.props;
    return (
      <section id="portfolio2">
        <SectionHeader
          title="portfolio"
          subtitle="nuestros trabajos"
          color="#EECA46"
        />
        <div style={{ height: "90vh" }}>
          {posts.map(({ node }, i) => {
            const prev = i > 0 ? i - 1 : posts.length - 1;
            const next = i < posts.length - 1 ? i + 1 : 0;
            return (
              <div
                key={node.frontmatter.title}
                className={`grid ${i === 0 ? "grid--current" : ""}`}
                ref={ref => this.gridElems.push(ref)}
              >
                <div className="portfolio-services">
                  <span>Identidad Corporativa</span>
                  <span>Video</span>
                  <span>Packaging</span>
                  <span>Comunicación Gráfica</span>
                  <span>Social Media</span>
                  <span>Apps Móviles</span>
                  <span>Web</span>
                  <span>Tiendas</span>
                  <span>Bots</span>
                  <span>APIs</span>
                </div>
                <div className="portfolio-prev  grid__item grid__item--nav-prev">
                  <img src={posts[prev].node.frontmatter.thumbnail} alt="" />
                </div>
                <h4
                  className="portfolio-prev--title  grid__item grid__item--text"
                  data-direction="btt"
                >
                  {posts[prev].node.frontmatter.title}
                </h4>
                <div className="portfolio-next  grid__item grid__item--nav-next">
                  <img src={posts[next].node.frontmatter.thumbnail} alt="" />
                </div>
                <h4
                  className="portfolio-next--title  grid__item grid__item--text"
                  data-direction="ttb"
                >
                  {posts[next].node.frontmatter.title}
                </h4>
                <div className="portfolio-post--image  grid__item">
                  <img src={node.frontmatter.thumbnail} />
                </div>
                <div className="portfolio-post--title  grid__item">
                  <h2>{node.frontmatter.title}</h2>
                  <h3>2017 - {node.frontmatter.tags}</h3>
                </div>
                <div className="portfolio-more">
                  <div>
                    Esta una selección de algunos de nuestros proyectos, puedes
                    ver más accediendo a la galería a través del enlace de abajo
                  </div>
                  <a href="">Ver más</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
