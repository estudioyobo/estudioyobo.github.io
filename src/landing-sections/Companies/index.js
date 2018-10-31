import React from "react";
import styled from "styled-components";
import Company from "./company";

const SectionWrapper = styled.section`
  background: white;
  color: #eeca46;
  padding: 50px 100px 125px;
  text-align: center;
`;

const CompaniesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const Companies = ({ companies }) => (
  <SectionWrapper id="companies">
    <h1>Hemos trabajado para...</h1>
    <CompaniesWrapper>
      {companies.map(company => (
        <Company key={company.name} {...company} />
      ))}
    </CompaniesWrapper>
  </SectionWrapper>
);

export default Companies;
