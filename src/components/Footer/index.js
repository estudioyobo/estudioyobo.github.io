import React from "react";

import "./footer.css";
import Logo from "../Logo";
import AnimatedLink from "../AnimatedLink";
import Social from "../Social";

const Footer = ({ social, mail, phone }) => {
  return (
    <footer>
      <div className="row margin equal elements">
        <ul className="footer-links">
          <li>
            <AnimatedLink href="#">Política de privacidad</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="#">Política de cookies</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="/404">Error 404</AnimatedLink>
          </li>
        </ul>
        <div className="footer-contact">
          <div className="footer-contact--social">
            {social.map((e, i) => (
              <Social key={i} {...e} />
            ))}
          </div>
          <div className="footer-contact--mail">
            <AnimatedLink href={`mailto:${mail}`}>{mail}</AnimatedLink>
          </div>
          <div className="footer-phone">
            {phone.map(p => (
              <AnimatedLink href={`tel:${p}`} key={p}>
                {p}
              </AnimatedLink>
            ))}
          </div>
        </div>
        <div className="footer-logo">
          <Logo color="#F3F4F0" width="200px" />
        </div>
      </div>
      <div className="row">
        <div className="made">Made with &#x2764; by Estudio Yobo</div>
      </div>
      <div className="row">
        <div className="copyright">Copyright &copy; 2018. Estudio Yobo</div>
      </div>
    </footer>
  );
};

export default Footer;
