import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";

import telephoneThunder from "./telephone-thunder.svg";

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
  & h1 {
    grid-column: 8 / 14;
    grid-row: 1 / 2;
    text-align: right;
    font-size: 100px;
  }
  & form {
    background: lightgray;
    grid-column: 5 / 13;
    grid-row: 3 / 5;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 30px 0;
    margin: 0;
    color: #a856ef;
  }
  & .direction {
    grid-column: 5 / 8;
    grid-row: 5 / 6;
  }
  & img {
    grid-column: 5 / 8;
    grid-row: 1 / 2;
    width: 100%;
    align-self: end;
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
      <img src={telephoneThunder} alt="" />
      <form
        className="form"
        action="https://formspree.io/info@estudioyobo.com"
        method="POST"
      >
        <div>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input name="name" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Teléfono: (opcional)</label>
            <input name="telephone" type="telephone" required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Presupuesto: </label>
            <input name="budget" type="text" required />
          </div>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            />
          </div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      <div className="direction">
        <p>Elche - Alicante</p>
        <p>c/ Reina Victoria, 39. Planta 3</p>
        <p>966 578 597</p>
      </div>
    </Grid>
  </ContactWrapper>
);

export default Contact;
