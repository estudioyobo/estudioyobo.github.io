import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import SectionHeader from "../../components/SectionHeader/index";

import jesusIMG from "./jesus.png";
import alexIMG from "./alex.png";
import antoniIMG from "./antoni.png";

const TeamworkHero = styled.div`
  height: 100vh;
  color: #56ef98;
  padding: 10rem;
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  & ::before {
    content: "";
    background-size: cover;
    background-image: url("http://img2.rtve.es/v/4668478?w=1600&preview=1531953977002.jpg");
    filter: grayscale(100%);
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & h1 {
    font-size: 6rem;
  }
`;

const Us = styled.div`
  height: 81vh;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto 50px auto;
`;

const BasePerson = styled.div`
  grid-row: 2 / 4;
  transition: all 0.3s ease-in-out;
  align-self: end;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 6fr 4fr;
  &.active {
    transform: scale(1.3);
    transform-origin: bottom left;
    z-index: 2;
    & div,
    span {
      display: block;
    }
  }

  & div {
    background: #56ef98;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: none;
  }
  & span {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: none;
    z-index: 3;
    color: white;
    font-size: 69px;
    font-weight: 600;
    line-height: 60px;
    writing-mode: sideways-lr;
    place-self: end;
  }
  & img {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    z-index: 2;
  }
`;

const Person1 = styled(BasePerson)`
  grid-column: 1 / 4;
`;
const Person2 = styled(BasePerson)`
  grid-column: 3 / 6;
`;
const Person3 = styled(BasePerson)`
  grid-column: 5 / 8;
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

const Person = ({ className, Wrapper, image, name, surname }) => {
  return (
    <Wrapper className={className}>
      <img src={image} alt="name" />
      <div />
      <span>
        {name}
        <br />
        {surname}
      </span>
    </Wrapper>
  );
};

const DegreeWrapper = styled.div`
  grid-column: 2 / 6;
  margin: 2rem 0;
`;

const DegreeUniversity = styled.div`
  color: #56ef98;
  text-transform: uppercase;
`;

const DegreeTitle = styled.div`
  font-family: "Crimson Text";
`;

const Degree = ({ title, university }) => (
  <DegreeWrapper>
    <DegreeTitle>{title}</DegreeTitle>
    <DegreeUniversity>{university}</DegreeUniversity>
  </DegreeWrapper>
);

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
    new ScrollMagic.Scene({
      duration: 1200,
      offset: -50,
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
        <TeamworkHero>
          <h1>Trabajo en equipo</h1>
        </TeamworkHero>
        <div style={{ height: "100vh" }} id="us-magic">
          <SectionHeader title="Nosotros" subtitle="Equipo" color="#56ef98" />
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
        </div>
      </section>
    );
  }
}

export default TeamWork;
