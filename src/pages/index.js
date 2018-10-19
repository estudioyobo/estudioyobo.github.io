import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";

import "./index.css";
import heroIMG from "./hero.png";

if (typeof window !== "undefined") {
  var AOS = require("aos/dist/aos.js");
  AOS.init();
}

import "aos/dist/aos.css";
import Portfolio from "../landing-sections/Portfolio";
import ServicesSection from "../landing-sections/Services";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div className="home">
      <section className="hero">
        <img src={heroIMG} className="hero--caroussel" />
        <h1>
          Diseño gráfico <br /> & desarrollo
        </h1>
        <div className="hero--description">
          <p>
            ¿Tal vez necesitas un nuevo diseño web o un programador para
            desarrollar una aplicación?
          </p>
          <p>
            Estás en el sitio adecuado, el <strong>diseño</strong> y el{" "}
            <strong>desarrollo</strong> es lo nuestro. Juntando estas dos
            disciplinas hacemos que el curso de las cosas mejore.
          </p>
          <p>Creamos desde tarjetas de visita hasta aplicaciones móviles.</p>
          <p>
            Ofrecemos un amplio abanico de servicios con los que quedarás
            satisfecho, tanto si eres empresa como un particular.
          </p>
        </div>
        <a href="/contact" className="hero--contact">
          Contacto
        </a>
      </section>
      <ServicesSection />
      <Portfolio posts={posts} />
      <section className="home-contact">
        <form
          className="form"
          action="https://formspree.io/info@estudioyobo.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input name="name" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Presupuesto:</label>
            <input name="budget" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </section>
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
