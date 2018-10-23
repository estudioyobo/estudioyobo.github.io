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
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const Divider = styled.div`
  width: 240px;
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
  margin-bottom: -14px;
  font-size: 70px;
  line-height: 60px;
`;
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;

  transform-origin: bottom;
  opacity: 0;
  text-transform: uppercase;
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
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
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
