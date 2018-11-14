import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ScrollMagic from "scrollmagic";

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
    transform: translateY(4.2vw);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Divider = styled.div`
  width: 15%;
  height: 2px;
  background: #333;
  opacity: 0;
  display: block;
  transform-origin: left;
  display: inline-block;
  margin-right: 10px;
`;

const Title = styled.h1`
  display: block;
  color: ${({ color }) => color};
  transform-origin: bottom;
  opacity: 0;
  font-weight: 500;
  text-transform: lowercase;
  margin-bottom: -20px;
  font-size: 4.7vw;
  line-height: 4.2vw;

  @media (max-width: 800px) {
    font-size: 8.7vw;
    line-height: 8.2vw;
  }
`;
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;

  transform-origin: bottom;
  opacity: 0;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 50px;
  &.animated {
    ${Divider} {
      animation: ${widthAnim} 0.6s ease-in-out 0s forwards;
    }
    ${Title} {
      animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
    }
    ${Subtitle} {
      animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
    }
  }
`;

class SectionHeader extends Component {
  componentDidMount() {
    this.controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: this.elem,
      triggerHook: "onEnter"
    })
      .setClassToggle(this.elem, "animated")
      .addTo(this.controller);
  }
  render() {
    const { title, subtitle, color } = this.props;
    return (
      <Wrapper innerRef={ref => (this.elem = ref)}>
        <Title color={color}>{title}</Title>
        <Divider />
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    );
  }
}

export default SectionHeader;
