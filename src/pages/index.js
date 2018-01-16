import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";

import "./index.css";
import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";

AOS.init();

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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <img
          data-aos="fade-up"
          className="home-grid--img"
          src={`http://lorempixel.com/400/400/abstract/${i}`}
          key={i}
        />
      ))}
    </div>
  </div>
);

export default IndexPage;
