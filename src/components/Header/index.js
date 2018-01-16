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
          <Link
            to="/"
            className="header-nav--element"
            exact
            activeClassName="header-nave--element__active"
          >
            HOME
          </Link>
          <Link
            to="/services"
            className="header-nav--element"
            activeClassName="header-nave--element__active"
          >
            SERVICIOS
          </Link>
          <Link
            to="/contact"
            className="header-nav--element"
            activeClassName="header-nave--element__active"
          >
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
