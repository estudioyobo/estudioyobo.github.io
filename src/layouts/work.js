import React from "react";
import Footer from "../components/Footer/index";
import info from "../config/info";
import { Helmet } from "react-helmet";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Work |" />
    {children()}
    <Footer {...info} />
  </div>
);

export default TemplateWrapper;
