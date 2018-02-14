import React from "react";

import styled from "styled-components";

const SVG = styled.object`
  position: absolute;
  display: ${props => (props.hover ? "none" : "block")};
`;
const Wrapper = styled.div`
  position: relative;
  &:hover object:first-child {
    display: block;
  }
`;

const ColorSVG = ({ wrapperClass, image, color }) => {
  return (
    <Wrapper className={wrapperClass}>
      <SVG data={color} hover />
      <SVG data={image} />
    </Wrapper>
  );
};

export default ColorSVG;
