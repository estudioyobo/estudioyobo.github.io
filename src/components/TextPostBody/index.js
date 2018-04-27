import React from "react";
import rehypeReact from "rehype-react";

import ImageZoom from "../ImageZoom";
import Hidden from "../Hidden";
import Divide from "../Divide";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "zoom-image": ImageZoom,
    hidden: Hidden,
    divide: Divide
  }
}).Compiler;

function TextPostBody({ htmlAst }) {
  return renderAst(htmlAst);
}

export default TextPostBody;
