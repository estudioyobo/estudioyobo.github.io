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
  Picture,
  Space
} from "./Grid";

import pencilIMG from "./pencil.png";
import keyboardIMG from "./keyboard.png";
import keyboardIMG_small from "./keyboard-s.png";

const ServicesSection = () => (
  <section id="services" className="padding">
    <SectionHeader title="Servicios" subtitle="¿Qué hacemos?" color="#FD5F65" />
    <div className="section-design">
      <Grid>
        <ServiceHeader title="Diseño" />
        <Title color="#FD5F65">¿Dónde vas sin un buen diseño?</Title>
        <Description>
          <p>
            Si quieres transmitir de una manera correcta tu identidad de marca,
            una idea, un concepto has de echar mano del diseño. Es una
            necesidad, hay que destacar por encima de tus competidores, no seas
            una copia barata, diferénciate y ofrece algo que de verdad llegue al
            público.
          </p>
          <p>
            Los logotipos, carteles, campañas publicitarias, todo, absolutamente
            todo tiene un por qué, aquí hay ciencia, esto no es homeopatía, no
            son cosas hechas al azar.
          </p>
          <p>
            No hay nada peor que tener una marca y que realmente no represente
            tus valores. En Estudio Yobo te podemos ayudar con nuestras
            soluciones creativas, ven y te asesoraremos en nuestra agencia de la
            mejor manera.
          </p>
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
                <li>Campañas en redes sociales</li>
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
          <p>
            ¿Quieres crear una aplicación y no sabes con cómo? ¿Tal vez una web
            que te ayude a encontrar y fidelizar nuevos clientes? Nuestro equipo
            de desarrollo te sacará de <i>"appuros"</i>.
          </p>
          <p>
            Mitad código mitad humanos son capaces de desarrollar una idea con
            gran precisión. Aplicaciones actuales con un gran soporte, webs que
            dejarán a cualquiera boquiabierto, bots de Telegram para cualquier
            cosa...
          </p>
          <p>
            En conclusión, todo lo que imaginas se puede crear gracias a
            nosotros.
          </p>
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
        <Picture>
          <source media="(max-width: 800px)" srcSet={keyboardIMG_small} />
          <source media="(min-width: 801px)" srcSet={keyboardIMG} />
          <img src={keyboardIMG} />
        </Picture>
      </Grid>
    </div>
  </section>
);

export default ServicesSection;
