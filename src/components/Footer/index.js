import React from "react";

import "./footer.css";

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
      <div className="footer-social">{social.map(e => <Social {...e} />)}</div>
      <div className="footer-contact">{mail}</div>
      <div className="footer-phone">{phone.map(p => <span>{p}</span>)}</div>
    </footer>
  );
};

export default Footer;
