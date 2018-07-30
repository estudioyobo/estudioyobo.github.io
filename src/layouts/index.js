import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import info from "../config/info";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: info.description },
        { name: "keywords", content: info.keywords.concat() },
        { name: "og:type", content: "webpage" },
        { name: "og:site_name", content: "Estudio Yobo" }
      ]}
    />
    <Header />
    {children()}
    <Footer {...info} />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
