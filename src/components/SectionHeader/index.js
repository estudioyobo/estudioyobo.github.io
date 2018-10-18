import React from "react";
import styled, { keyframes } from "styled-components";

const widthAnim = keyframes`
	0% {
    opacity: 0.1;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.1;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const Divider = styled.div`
  width: 100px;
  height: 2px;
  background: #333;
  opacity: 0;
  display: block;
  animation: ${widthAnim} 0.6s ease-in-out 0.1s forwards;
  transform-origin: left;
  display: inline-block;
  margin-right: 10px;
`;

const Title = styled.h1`
  display: block;
  color: ${({ color }) => color};
  animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
  transform-origin: bottom;
  opacity: 0;
  font-weight: 800;
  text-transform: lowercase;
  margin-bottom: -14px;
  font-size: 35px;
`;
const Subtitle = styled.h2`
  font-size: 14px;
  display: inline-block;
  animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
  transform-origin: bottom;
  opacity: 0;
  text-transform: uppercase;
`;

const SectionHeader = ({ title, subtitle, color }) => (
  <div>
    <Title color={color}>{title}</Title>
    <Divider />
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

export default SectionHeader;
