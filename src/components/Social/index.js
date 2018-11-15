import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 35px;
  margin: 0 10px;
  ${({ invert }) => invert && "filter: invert(1);"};
`;

const Social = ({ name, icon, link, invert }) => (
  <div className="social">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon invert={invert} src={icon} alt={`${name} icon`} />
    </a>
  </div>
);

export default Social;
