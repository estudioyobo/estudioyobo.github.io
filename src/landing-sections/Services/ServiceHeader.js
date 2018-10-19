import React from "react";
import styled from "styled-components";

const Line = styled.div`
  height: 30px;
  width: 100%;
  background: lightgray;
  display: inline-block;
  transform: translateX(${({ left }) => (left ? -6 : 3)}rem);
  z-index: -1;
`;

const Title = styled.h3`
  font-size: 100px;
  margin-bottom: -30px;
  text-transform: uppercase;
  font-weight: 800;
`;

const Wrapper = styled.div`
  display: inline-block;
  grid-column: ${({ left }) => (left ? "7 / 14" : "2 / 6")};
  justify-self: ${({ left }) => (left ? "end" : "start")};
  margin: 50px 0;
`;

const Header = ({ title, left }) => (
  <Wrapper left={left}>
    <Title>{title}</Title>
    <Line left={left} />
  </Wrapper>
);

export default Header;
