import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

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
          <Link
            to="/"
            className="header-nav--element"
            exact
            activeClassName="header-nave--element__active"
            style={{ color }}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className="header-nav--element"
            activeClassName="header-nave--element__active"
            style={{ color }}
          >
            SERVICIOS
          </Link>
          <Link
            to="/contact"
            className="header-nav--element"
            activeClassName="header-nave--element__active"
            style={{ color }}
          >
            CONTACTO
          </Link>
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
