import React from "react";
import Link from "gatsby-link";

import "./header.css";
import Logo from "../Logo";

const Header = ({ color }) => (
  <header className="header">
    <Link
      to="/"
      style={{
        color: "#333",
        fontFamily: "Montserrat SemiBold",
        textDecoration: "none"
      }}
    >
      <Logo color={color} />
    </Link>
    <nav className="header-nav">
      <div className="header-menu--hamburger">
        <input type="checkbox" />
        <div className="header-menu">
          <a
            href="/#services"
            className="header-nav--element"
            style={{ color }}
          >
            SERVICIOS
          </a>
          <a
            href="/#portfolio"
            className="header-nav--element"
            style={{ color }}
          >
            PORTFOLIO
          </a>
          <a href="/#team" className="header-nav--element" style={{ color }}>
            EQUIPO
          </a>
          <a href="/#contact" className="header-nav--element" style={{ color }}>
            CONTACTO
          </a>
        </div>

        <div className="hamburger">
          <span style={{ background: color }} />
          <span style={{ background: color }} />
          <span style={{ background: color }} />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
