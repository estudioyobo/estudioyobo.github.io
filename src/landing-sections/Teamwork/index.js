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
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto 50px auto;
`;

const BasePerson = styled.div`
  grid-row: 2 / 4;
  transition: all 0.3s ease-in-out;
  align-self: end;
  position: relative;
  & :hover {
    transform: scale(1.3);
    transform-origin: bottom;
    z-index: 2;
    & div {
      display: block;
    }
  }

  & div {
    background: #56ef98;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 90%;
    z-index: -1;
    display: none;
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
`;
const Description = styled.div`
  background: #333;
  color: #f3f4f0;
  grid-column: 9 / 15;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;
  & > p {
    grid-column: 3 / 6;
    text-align: right;
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
`;

const Person = ({ Wrapper, image, name }) => {
  return (
    <Wrapper>
      <img src={image} alt="name" />
      <div />
      <span>{name}</span>
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
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {}

  render() {
    return (
      <section id="team">
        <TeamworkHero>
          <h1>Trabajo en equipo</h1>
        </TeamworkHero>
        <SectionHeader title="Nosotros" subtitle="Equipo" color="#56ef98" />
        <Us id="us-magic">
          <People>
            <Person Wrapper={Person1} image={jesusIMG} name="Jesús Gallego" />
            <Person Wrapper={Person2} image={antoniIMG} name="Antoni Boix" />
            <Person Wrapper={Person3} image={alexIMG} name="Alejandro Almira" />
          </People>
          <Order>01</Order>
          <PersonTitle>Ingeniero Informático</PersonTitle>
          <Description>
            <Degree
              title="Grado en Ingeniería Informática"
              university="Universidad de Alicante"
            />
            <Degree
              title="Máster en Desarrollo de Software para Dispositivos Móviles"
              university="Universidad de Alicante"
            />
            <p>
              Esta es una pequeña descripción sobre nosotros, algo cercano, nada
              cñasico, rollo me gustan los videojuegos y cosas así, para que
              quede más majete todo
            </p>
          </Description>
        </Us>
      </section>
    );
  }
}

export default TeamWork;
