import React from "react";
import Link from "gatsby-link";

import "./header.css";
import Logo from "../Logo";
import AnimatedLink from "../AnimatedLink";

const Header = ({ color = "#333333" }) => (
  <header className="header">
    <Link to="/">
      <Logo color={color} />
    </Link>
    <nav className="header-nav">
      <div className="header-menu--hamburger">
        <input type="checkbox" />
        <div className="header-menu">
          <AnimatedLink
            href="/#services"
            className="header-nav--element"
            color={color}
            highlightColor="white"
          >
            SERVICIOS
          </AnimatedLink>
          <AnimatedLink
            href="/#portfolio"
            className="header-nav--element"
            color={color}
            highlightColor="white"
          >
            PORTFOLIO
          </AnimatedLink>
          <AnimatedLink
            href="/#team"
            className="header-nav--element"
            color={color}
            highlightColor="white"
            highlightColor="white"
          >
            EQUIPO
          </AnimatedLink>
          <AnimatedLink
            href="/#contact"
            className="header-nav--element"
            color={color}
            highlightColor="white"
          >
            CONTACTO
          </AnimatedLink>
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
