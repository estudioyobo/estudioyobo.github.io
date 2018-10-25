import React from "react";

import "./footer.css";
import Logo from "../Logo";

const Social = ({ name, icon, link }) => (
  <div className="social">
    <a href={link} target="_blank">
      <img src={icon} alt={`${name} icon`} className="social--icon" />
    </a>
  </div>
);

const Footer = ({ social, mail, phone }) => {
  return (
    <footer>
      <div className="row margin equal">
        <ul className="footer-links">
          <li>
            <a href="">Política de privacidad</a>
          </li>
          <li>
            <a href="">Política de cookies</a>
          </li>
          <li>
            <a href="/404">Error 404</a>
          </li>
        </ul>
        <div className="footer-contact">
          <div className="footer-contact--social">
            {social.map((e, i) => <Social key={i} {...e} />)}
          </div>
          <div className="footer-contact--mail">
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
          <div className="footer-phone">
            {phone.map((p, i) => <span key={i}>{p}</span>)}
          </div>
        </div>
        <div className="footer-logo">
          <Logo color="#F3F4F0" />
        </div>
      </div>
      <div className="row">
        <div>Made with &#x2764; by Estudio Yobo</div>
      </div>
      <div className="row">
        <div className="copyright">Copyright &copy; 2018. Estudio Yobo</div>
      </div>
    </footer>
  );
};

export default Footer;
