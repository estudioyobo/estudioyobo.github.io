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
            <a href="">
              <span>Política de privacidad</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Política de cookies</span>
            </a>
          </li>
          <li>
            <a href="/404">
              <span>Error 404</span>
            </a>
          </li>
        </ul>
        <div className="footer-contact">
          <div className="footer-contact--social">
            {social.map((e, i) => <Social key={i} {...e} />)}
          </div>
          <div className="footer-contact--mail">
            <a href={`mailto:${mail}`}>
              <span>{mail}</span>
            </a>
          </div>
          <div className="footer-phone">
            {phone.map(p => (
              <a href={`tel:${p}`} key={p}>
                <span>{p}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-logo">
          <Logo color="#F3F4F0" />
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
