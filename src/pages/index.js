import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import LandingMenu from "../components/LandingMenu";
import Top from "../components/Top";
import Social from "../components/Social";
import companiesInfo from "../config/companies";
import Portfolio from "../landing-sections/Portfolio";
import ServicesSection from "../landing-sections/Services";
import Companies from "../landing-sections/Companies";
import TeamWork from "../landing-sections/Teamwork";
import info from "../config/info";

import "./index.css";
import Contact from "../landing-sections/Contact/index";

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
  const { posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="home">
        <Top />
        <div className="social-side">
          {info.social.map((e, i) => (
            <Social invert key={i} {...e} />
          ))}
        </div>
        <LandingMenu sections={sections} />
        <section id="start" className="hero">
          <Img
            fluid={data.heroIMG.fluid}
            className="hero--caroussel"
            alt="decorative landing"
          />
          <h1>
            Diseño gráfico <br /> & desarrollo
          </h1>
          <div className="hero--description">
            <p>
              ¿Buscas un diseñador gráfico para crear esa marca que tanto deseas
              con su correspondiente branding? ¿Tal vez necesitas un nuevo
              diseño web o un programador para desarrollar una aplicación?
            </p>
            <p>
              Estás en el sitio adecuado, el <strong>diseño</strong> y el{" "}
              <strong>desarrollo</strong> es lo nuestro. Juntando estas dos
              disciplinas hacemos que el curso de las cosas mejore. Creamos
              desde tarjetas de visita hasta aplicaciones móviles. Ofrecemos un
              amplio abanico de servicios con los que quedarás satisfecho, tanto
              si eres empresa como un particular.
            </p>
            <p>
              En estudio Yobo nos gusta el trato personal, saber realmente qué
              es lo que necesita nuestro cliente, por eso para llegar a la idea
              realizamos un estudio previo, este nos ayuda a organizarnos y
              saber por dónde y cómo actuar.
            </p>
          </div>
          <a href="#contact" className="hero--contact">
            Contacto
          </a>
        </section>
        <ServicesSection />
        <Portfolio posts={posts} />
        <Companies companies={companiesInfo} />
        <TeamWork />
        <Contact />
        <div className="home-map">
          <iframe
            title="OSM location map"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src="https://umap.openstreetmap.fr/es/map/mapa-sin-titulo_246982?scaleControl=false&miniMap=true&scrollWheelZoom=false&zoomControl=false&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=null&onLoadPanel=undefined&captionBar=false"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    heroIMG: imageSharp(fluid: { originalName: { eq: "hero-us.png" } }) {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hide: { ne: true } } }
    ) {
      posts: edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
            description
          }
        }
      }
    }
  }
`;
