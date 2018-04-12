import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";
import PortfolioItem from "../components/PortfolioItem";

import "./index.css";

if (typeof window !== "undefined") {
  var AOS = require("aos/dist/aos.js");
  AOS.init();
}

import "aos/dist/aos.css";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div className="home">
      <div className="hero">
        <h1>Estudio de diseño gráfico Yobo</h1>
        <div className="hero--description">
          <p>
            Estudio de diseño gráfico ubicado en Elche especializado en
            identidad corporativa, comunicación gráfica e ilustración. ¿Tienes
            una idea? coméntanosla y le daremos forma para ayudarte a conseguir
            tus objetivos.
          </p>
          <Button>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contactar
            </Link>
          </Button>
        </div>
      </div>

      <div className="home-grid">
        {posts.map(({ node }, i) => (
          <PortfolioItem
            key={i}
            title={node.frontmatter.title}
            image={node.frontmatter.thumbnail}
            category={node.frontmatter.tags}
            link={node.fields.slug}
            data-aos="fade-up"
            wrapClass="home-grid--img"
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
