import React from "react";
import ImageZoom from "react-medium-image-zoom";
import styled from "styled-components";

const StyledFigcaption = styled.figcaption`
  text-align: right;
  font-size: 0.8em;
  padding 0.25em 0;
  // text-transform: uppercase;
  color: #999;
`;

class CustomImageZoom extends React.Component {
  render() {
    console.log("Custom image zoom", this.props);
    return (
      <ImageZoom image={{ src: this.props.src, alt: this.props.alt || "" }} />
    );
  }
}

export default CustomImageZoom;
