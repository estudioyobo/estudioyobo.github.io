import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import SectionHeader from "../../components/SectionHeader";
import { Slideshow } from "./reveal";

import "./portfolio.css";
import "./revealer.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.gridElems = [];
  }
  componentDidMount() {
    if (true)
      new Slideshow(this.gridElems, {
        filledColor: "#EECA46"
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      new Slideshow(this.gridElems.filter(grid => grid !== null), {
        filledColor: "#EECA46"
      });
    }
  }
  render() {
    const { posts } = this.props;
    return (
      <section id="portfolio">
        <SectionHeader
          title="portfolio"
          subtitle="nuestros trabajos"
          color="#EECA46"
        />
        <div className="grid-wrapper">
          {posts.map(({ node }, i) => {
            const prev = i > 0 ? i - 1 : posts.length - 1;
            const next = i < posts.length - 1 ? i + 1 : 0;
            const { tags } = node.frontmatter;
            return (
              <div
                key={node.frontmatter.title}
                className={`grid ${i === 0 ? "grid--current" : ""}`}
                ref={ref => this.gridElems.push(ref)}
              >
                <div className="portfolio-prev  grid__item grid__item--nav-prev">
                  <Img
                    fluid={
                      posts[prev].node.frontmatter.thumbnail.childImageSharp
                        .fluid
                    }
                    alt={`previous project: ${
                      posts[prev].node.frontmatter.description
                    }`}
                    className="img"
                  />
                  <h4 className="portfolio-prev--title" data-direction="btt">
                    {posts[prev].node.frontmatter.title}
                  </h4>
                </div>
                <div className="portfolio-next  grid__item grid__item--nav-next">
                  <h4 className="portfolio-next--title" data-direction="ttb">
                    {posts[next].node.frontmatter.title}
                  </h4>
                  <Img
                    fluid={
                      posts[next].node.frontmatter.thumbnail.childImageSharp
                        .fluid
                    }
                    alt={`next project: ${
                      posts[next].node.frontmatter.description
                    }`}
                    className="img"
                  />
                </div>
                <Link
                  to={node.fields.slug}
                  className="portfolio-post--image  grid__item"
                >
                  <Img
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={node.frontmatter.description}
                    className="img"
                  />
                </Link>
                <div className="portfolio-post--title  grid__item">
                  <h2>{node.frontmatter.title}</h2>
                  <h3>2017 - {node.frontmatter.tags.join(", ")}</h3>
                </div>
                <div className="portfolio-more grid__item">
                  <div>{node.frontmatter.description}</div>
                  <Link to={node.fields.slug}>Ver más</Link>
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
