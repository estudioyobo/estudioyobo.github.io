import React from "react";
import styled from "styled-components";

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-height: 10rem;
`;

const Company = ({ name, logo, link }) => (
  <CompanyWrapper>
    {link ? (
      <a href={link}>
        <Img src={logo} />
      </a>
    ) : (
      <Img src={logo} />
    )}
  </CompanyWrapper>
);

export default Company;
