import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";
import PortfolioItem from "../components/PortfolioItem";

import portfolio from "../config/portfolio";

import "./index.css";

// if (typeof window !== "undefined") {
//   import AOS from "aos/dist/aos.js";

//   AOS.init();
// }

import "aos/dist/aos.css";

const IndexPage = () => (
  <div className="home">
    <div className="hero">
      <h1>Estudio de diseño gráfico Yobo</h1>
      <div className="hero--description">
        <p>
          Estudio de diseño gráfico ubicado en Elche especializado en identidad
          corporativa, comunicación gráfica e ilustración.
        </p>
        <p>
          ¿Tienes una idea? coméntanosla y le daremos forma para ayudarte a
          conseguir tus objetivos.
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
      {portfolio.map((portfolio, i) => (
        <PortfolioItem
          key={i}
          {...portfolio}
          data-aos="fade-up"
          wrapClass="home-grid--img"
        />
      ))}
    </div>
  </div>
);

export default IndexPage;
