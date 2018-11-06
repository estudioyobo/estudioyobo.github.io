import React, { Component } from "react";
import Link from "gatsby-link";

import SectionHeader from "../../components/SectionHeader";
import { Slideshow } from "./reveal";

import "./portfolio.css";
import "./revealer.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.tags.map(({ fieldValue }) => fieldValue)
    };
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
  containsTag = (postTags, tag) => {
    return postTags.includes(tag);
  };
  enableFilter = tag => {
    this.gridElems = [];
    if (this.state.selected.includes(tag)) {
      this.setState(state => ({
        selected: state.selected.filter(s => s !== tag)
      }));
    } else {
      this.setState(state => {
        state.selected.push(tag);
        return { selected: state.selected };
      });
    }
  };
  render() {
    const { posts, tags: allTags } = this.props;
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
                <div className="portfolio-services">
                  {allTags.map(({ fieldValue }) => (
                    <span
                      key={fieldValue}
                      style={{
                        color: this.containsTag(tags, fieldValue)
                          ? "#333"
                          : "lightgray"
                      }}
                    >
                      {fieldValue}
                    </span>
                  ))}
                </div>
                <div className="portfolio-prev  grid__item grid__item--nav-prev">
                  <img src={posts[prev].node.frontmatter.thumbnail} alt="" />
                  <h4 className="portfolio-prev--title" data-direction="btt">
                    {posts[prev].node.frontmatter.title}
                  </h4>
                </div>
                <div className="portfolio-next  grid__item grid__item--nav-next">
                  <h4 className="portfolio-next--title" data-direction="ttb">
                    {posts[next].node.frontmatter.title}
                  </h4>
                  <img src={posts[next].node.frontmatter.thumbnail} alt="" />
                </div>
                <Link
                  to={node.fields.slug}
                  className="portfolio-post--image  grid__item"
                >
                  <img src={node.frontmatter.thumbnail} />
                </Link>
                <div className="portfolio-post--title  grid__item">
                  <h2>{node.frontmatter.title}</h2>
                  <h3>2017</h3>
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
