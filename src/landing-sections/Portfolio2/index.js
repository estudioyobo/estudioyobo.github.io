import React from "react";

import SectionHeader from "../../components/SectionHeader";

import "./portfolio.css";

const Portfolio = () => (
  <section id="portfolio2">
    <SectionHeader
      title="portfolio"
      subtitle="nuestros trabajos"
      color="#EECA46"
    />
    <div className="portfolio2-section">
      <div className="portfolio-services">
        <span>Identidad Corporativa</span>
        <span>Video</span>
        <span>Packaging</span>
        <span>Comunicación Gráfica</span>
        <span>Social Media</span>
        <span>Apps Móviles</span>
        <span>Web</span>
        <span>Tiendas</span>
        <span>Bots</span>
        <span>APIs</span>
      </div>
      <img
        src="/images/proyecto-bot_telegram.jpg"
        alt=""
        className="portfolio-prev"
      />
      <h4 className="portfolio-prev--title">Bot Telegram Ho-oH bot</h4>
      <img src="/images/proyecto-mdc.jpg" alt="" className="portfolio-next" />
      <h4 className="portfolio-next--title">MDC</h4>
      <img
        src="/images/proyecto-ilustraciones-mandos.jpg"
        className="portfolio-post--image"
      />
      <div className="portfolio-post--title">
        <h2>Colección de mandos</h2>
        <h3>2017 - Ilustración</h3>
      </div>
      <div className="portfolio-more">
        <div>
          Esta una selección de algunos de nuestros proyectos, puedes ver más
          accediendo a la galería a través del enlace de abajo
        </div>
        <a href="">Ver más</a>
      </div>
    </div>
  </section>
);

export default Portfolio;
