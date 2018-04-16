import React from "react";
import ImageZoom from "react-medium-image-zoom";

class CustomImageZoom extends React.Component {
  render() {
    return (
      <ImageZoom image={{ src: this.props.src, alt: this.props.alt || "" }} />
    );
  }
}

export default CustomImageZoom;
