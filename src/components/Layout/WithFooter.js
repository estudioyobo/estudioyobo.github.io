import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/";
import info from "../../config/info";

const WithFooter = ({ children }) => (
  <>
    {children}
    <Footer {...info} />
  </>
);

WithFooter.propTypes = {
  children: PropTypes.node
};

export default WithFooter;
