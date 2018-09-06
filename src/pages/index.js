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
        <h1>Estudio de diseño y desarrollo</h1>
        <div className="hero--description">
          <p>
           Bienvenido a nuestro estudio ¡Pasa y siéntate!
          </p>
          <p>
            ¿Buscas un diseñador gráfico para crear esa campaña de publicidad que tanto deseas? ¿Tal vez necesitas un nuevo diseño web o un programador para desarrollar una aplicación?
          </p>
          <p>
            Estás en el sitio adecuado, el diseño y el desarrollo es lo nuestro. Juntando estas dos disciplinas hacemos que el curso de las cosas mejore. Creamos desde tarjetas de visita hasta aplicaciones móviles. Ofrecemos un amplio abanico de servicios con los que quedarás satisfecho, tanto si eres empresa como un particular.
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
            
            wrapClass="home-grid--img"
          />
        ))}
      </div>
      <div className="hero">
      <div className="hero--description">
          <p>
          Te ayudamos:<br/>

Con la publicidad de tu negocio, folletos, carteles, dossieres, todo necesita una buena imágen gráfica para atraer a nuevos clientes. 

A mantenerte cerca de tus clientes a través de una página web o una app. Todo con un buen desarrollo interno

          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hide: { ne: true } } }
    ) {
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
