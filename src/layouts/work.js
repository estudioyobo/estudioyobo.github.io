import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer/index";
import info from "../config/info";

const TemplateWrapper = ({ children }) => (
  <div>
    {children()}
    <Footer {...info} />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node
};

export default TemplateWrapper;
