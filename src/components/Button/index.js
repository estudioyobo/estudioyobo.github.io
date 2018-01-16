import React from "react";

import "./button.css";

const Button = ({ children }) => {
  return <span className="button">{children}</span>;
};

export default Button;
