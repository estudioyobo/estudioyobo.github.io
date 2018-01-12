import React from "react";
import Link from "gatsby-link";

import "./header.css";

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <Link
        to="/"
        style={{
          color: "#333",
          fontFamily: "Montserrat SemiBold",
          textDecoration: "none"
        }}
      >
        YOBO
      </Link>
    </div>
    <nav className="header-nav">
      <div className="header-menu--hamburger">
        <input type="checkbox" />
        <div className="header-menu">
          <Link to="/" className="header-nav--element">
            HOME
          </Link>
          <Link to="/about" className="header-nav--element">
            ¿YOBO?
          </Link>
          <Link to="/services" className="header-nav--element">
            SERVICIOS
          </Link>
          <Link to="/contact" className="header-nav--element">
            CONTACTO
          </Link>
        </div>

        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
