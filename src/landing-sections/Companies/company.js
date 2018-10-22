import React from "react";
import styled from "styled-components";

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-height: 5rem;
`;

const Company = ({ name, logo }) => (
  <CompanyWrapper>
    <Img src={logo} />
  </CompanyWrapper>
);

export default Company;
