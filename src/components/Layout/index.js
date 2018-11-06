import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "./index.css";
import info from "../../config/info";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
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
        {children}
        <Footer {...info} />
      </>
    )}
  />
);

export default TemplateWrapper;

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
