import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";
import LandingMenu from "../components/LandingMenu";
import Top from "../components/Top";
import companiesInfo from "../config/companies";
import Portfolio from "../landing-sections/Portfolio";
import ServicesSection from "../landing-sections/Services";
import Companies from "../landing-sections/Companies";
import TeamWork from "../landing-sections/Teamwork";

import "./index.css";
import "aos/dist/aos.css";
import heroIMG from "./hero.png";
import Contact from "../landing-sections/Contact/index";

if (typeof window !== "undefined") {
  var AOS = require("aos/dist/aos.js");
  AOS.init();
}

const sections = [
  {
    id: "start",
    name: "Inicio"
  },
  {
    id: "services",
    name: "Servicios"
  },
  {
    id: "portfolio",
    name: "Portfolio"
  },
  {
    id: "team",
    name: "Equipo"
  },
  {
    id: "contact",
    name: "Contacto"
  }
];

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div className="home">
      <Top />
      <section id="start" className="hero">
        <LandingMenu sections={sections} />
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
      <Companies companies={companiesInfo} />
      <TeamWork />
      <Contact />
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
