import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";

import AnimatedInput from "../../components/AnimatedInput";

const ContactWrapper = styled.section`
  background: #f3f4f0;
  padding-top: 100px;
`;

const Grid = styled.div`
  background: url("images/contact-telephone.png");
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 1fr 200px auto auto auto;
  height: 100%;

  @media (max-width: 800px) {
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("images/contact-telephone.png");
    background-size: contain;
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
  }
  & h1 {
    grid-column: 8 / 14;
    grid-row: 1 / 2;
    text-align: right;
    font-size: 5vw;
    @media (max-width: 800px) {
      grid-column: 1 / 14;
      font-size: 10vw;
    }
  }
  & .direction {
    font-family: "Crimson Text";
    font-size: 1.38rem;
    grid-column: 5 / 8;
    grid-row: 5 / 6;
    margin: 20px 0;
    @media (max-width: 800px) {
      grid-column: 2 / 8;
    }
  }
  & img {
    grid-column: 5 / 8;
    grid-row: 1 / 2;
    width: 100%;
    align-self: end;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Form = styled.form`
  grid-column: 5 / 13;
  grid-row: 3 / 5;
  position: relative;
  @media (max-width: 800px) {
    grid-column: 1 / 15;
    grid-row: 2 / 4;
  }
`;

const FormBody = styled.div`
  background: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0;
  margin: 0;
  color: #a856ef;
  width: 90%;
  height: 95%;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const Submit = styled.input`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  background: #333;
  border: none;
  color: #f3f4f0;
  width: 25%;
  height: 12%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #111;
  }
`;

const Contact = () => (
  <ContactWrapper id="contact">
    <SectionHeader title="contacto" subtitle="¿Hablamos?" color="#A856EF" />
    <Grid>
      <h1>
        ¿Hablamos?
        <br />
        Parlem?
        <br />
        Talk?
      </h1>
      <Form
        className="form"
        action="https://formspree.io/info@estudioyobo.com"
        method="POST"
      >
        <FormBody>
          <div>
            <AnimatedInput name="name" required />
            <AnimatedInput name="email" required />
            <AnimatedInput name="telephone" />
            <AnimatedInput name="presupuesto" required />
          </div>
          <div>
            <AnimatedInput isTextarea name="message" required />
          </div>
        </FormBody>
        <Submit type="submit" value="Enviar" />
      </Form>
      <div className="direction">
        Elche - Alicante
        <br />
        C/ Reina Victoria, 39. Planta 3<br />
        966 578 597
        <br />
      </div>
    </Grid>
  </ContactWrapper>
);

export default Contact;
