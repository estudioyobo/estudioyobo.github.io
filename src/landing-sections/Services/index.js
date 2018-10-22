import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ServiceHeader from "./ServiceHeader";
import {
  Grid,
  Title,
  Description,
  Services,
  ServiceCol1,
  ServiceCol2,
  ServiceItem,
  Fill,
  Image,
  Space
} from "./Grid";

import pencilIMG from "./pencil.png";
import keyboardIMG from "./keyboard.png";

const ServicesSection = () => (
  <section id="services" className="padding">
    <SectionHeader title="Servicios" subtitle="¿Qué hacemos?" color="#FD5F65" />
    <div className="section-design">
      <Grid>
        <ServiceHeader title="Diseño" />
        <Title color="#FD5F65">¿Dónde vas sin un buen diseño?</Title>
        <Description>
          A mantenerte cerca de tus clientes a través de una página web o una
          app. Todo con un buen desarrollo interno
        </Description>
        <Services>
          <ServiceCol1>
            <ServiceItem>
              Identidad Corporativa
              <ul>
                <li>Naming</li>
                <li>Logotipos</li>
                <li>Branding</li>
                <li>Manuales de estilo</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              Vídeo
              <ul>
                <li>Motion graphics</li>
                <li>Presentaciones</li>
                <li>GIFs</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              Packaging
              <ul>
                <li>Diseño de packaging</li>
                <li>Etiquetas</li>
              </ul>
            </ServiceItem>
          </ServiceCol1>
          <ServiceCol2>
            <ServiceItem>
              Comunicación Gráfica
              <ul>
                <li>Publicidad</li>
                <li>Carteles</li>
                <li>Ilustración</li>
                <li>Tarjetas</li>
                <li>Iconos</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              Social Media
              <ul>
                <li>Publicaciones en redes sociales</li>
                <li>Campañas en resdes sociales</li>
              </ul>
            </ServiceItem>
          </ServiceCol2>
        </Services>
        <Fill />
        <Image src={pencilIMG} />
      </Grid>
    </div>
    <div className="section-develop">
      <Grid right>
        <ServiceHeader title="Desarrollo" left />
        <Title right color="#FD5F65">
          ¿Dónde vas sin un buen desarrollo?
        </Title>
        <Description right>
          A mantenerte cerca de tus clientes a través de una página web o una
          app. Todo con un buen desarrollo interno
        </Description>
        <Services right>
          <ServiceCol1 right>
            <ServiceItem>
              Apps Móviles
              <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>React-Native</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              Tiendas online
              <ul>
                <li>Personalizadas</li>
                <li>Prestashop</li>
                <li>Magento</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              Bots de Telegram
              <ul>
                <li>Eso, bots. De Telegram</li>
              </ul>
            </ServiceItem>
          </ServiceCol1>
          <ServiceCol2 right>
            <ServiceItem>
              Web
              <ul>
                <li>Aplicaciones web</li>
                <li>Páginas web</li>
              </ul>
            </ServiceItem>
            <ServiceItem>
              APIs
              <ul>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </ServiceItem>
          </ServiceCol2>
        </Services>
        <Space rowStart={6} rowEnd={7} height={100} />
        <Fill right />
        <Image src={keyboardIMG} right />
      </Grid>
    </div>
  </section>
);

export default ServicesSection;
