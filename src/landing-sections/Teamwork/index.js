import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import SectionHeader from "../../components/SectionHeader/index";
import Person, { Person1, Person2, Person3 } from "./Person";
import TeamworkHero from "./Hero";
import Degree from "./Degree";

import jesusIMG from "./jesus.png";
import alexIMG from "./alex.png";
import antoniIMG from "./antoni.png";

const Us = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto 50px auto;
`;

const Description = styled.div`
  background: #333;
  color: #f3f4f0;
  grid-column: 9 / 15;
  grid-row: 3 / 4;
  display: none;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;
  & > p {
    grid-column: 3 / 6;
    text-align: right;
  }
  &.active {
    display: grid;
  }
`;

const People = styled.div`
  grid-column: 1 / 9;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const PersonTitle = styled.h3`
  grid-column: 9 / 15;
  grid-row: 2 / 3;
  text-align: center;
  text-transform: uppercase;
  display: none;
  &.active {
    display: block;
  }
`;

const Order = styled.div`
  font-size: 200px;
  text-align: right;
  font-weight: 800;
  color: #56ef98;
  grid-column: 12 / 15;
  grid-row: 1 / 2;
  display: none;
  &.active {
    display: block;
  }
`;

const Magic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  height: 100vh;
  background: #f3f4f0;
`;

class TeamWork extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });
  }

  componentDidMount() {
    // Hero scene
    const heroScene = new ScrollMagic.Scene({
      triggerElement: "#teamwork-hero"
    })
      .setPin("#teamwork-hero")
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#us-magic"
    })
      .on("enter", () => {
        heroScene.removePin(true);
      })
      .on("leave", () => {
        heroScene.setPin("#teamwork-hero");
      })
      .addTo(this.controller);

    // Team scenes
    new ScrollMagic.Scene({
      duration: 1200,
      triggerElement: "#us-magic"
    })
      .setPin("#us-magic")
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#us-magic",
      duration: 400
    })
      .setClassToggle(".p1", "active")
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#us-magic",
      duration: 400,
      offset: 400
    })
      .setClassToggle(".p2", "active")
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#us-magic",
      duration: 400,
      offset: 800
    })
      .setClassToggle(".p3", "active")
      .addTo(this.controller);
  }

  render() {
    return (
      <section id="team">
        <TeamworkHero id="teamwork-hero">
          <h1>Trabajo en equipo</h1>
        </TeamworkHero>
        <Magic id="us-magic">
          <SectionHeader title="Equipo" subtitle="Nosotros" color="#56ef98" />
          <Us>
            <People>
              <Person
                className="p1"
                Wrapper={Person1}
                image={jesusIMG}
                name="Jesús"
                surname="Gallego"
              />
              <Person
                className="p2"
                Wrapper={Person2}
                image={antoniIMG}
                name="Antoni"
                surname="Boix"
              />
              <Person
                className="p3"
                Wrapper={Person3}
                image={alexIMG}
                name="Alejandro"
                surname="Almira"
              />
            </People>
            <Order className="p1">01</Order>
            <PersonTitle className="p1">Ingeniero Informático</PersonTitle>
            <Description className="p1">
              <Degree
                title="Grado en Ingeniería Informática"
                university="Universidad de Alicante"
              />
              <Degree
                title="Máster en Desarrollo de Software para Dispositivos Móviles"
                university="Universidad de Alicante"
              />
              <p>
                Esta es una pequeña descripción sobre nosotros, algo cercano,
                nada cñasico, rollo me gustan los videojuegos y cosas así, para
                que quede más majete todo
              </p>
            </Description>
            <Order className="p2">02</Order>
            <PersonTitle className="p2">Diseñador gráfico</PersonTitle>
            <Description className="p2">
              <Degree
                title="Grado en Diseño Gráfico"
                university="Escuela de Arte y Superior de Diseño de Alicante"
              />
              <p>
                Esta es una pequeña descripción sobre nosotros, algo cercano,
                nada cñasico, rollo me gustan los videojuegos y cosas así, para
                que quede más majete todo
              </p>
            </Description>
            <Order className="p3">03</Order>
            <PersonTitle className="p3">Ingeniero Informático</PersonTitle>
            <Description className="p3">
              <Degree
                title="Grado en Ingeniería Informática"
                university="Universidad de Alicante"
              />
              <Degree
                title="Máster en Automática y Robótica"
                university="Universidad de Alicante"
              />
              <p>
                Esta es una pequeña descripción sobre nosotros, algo cercano,
                nada cñasico, rollo me gustan los videojuegos y cosas así, para
                que quede más majete todo
              </p>
            </Description>
          </Us>
        </Magic>
      </section>
    );
  }
}

export default TeamWork;
