import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceMenuItem from "../components/ServiceMenuItem";
import info from "../config/info";
import services from "../config/services";

class TemplateWrapper extends Component {
  isDevelop = () => this.props.location.pathname === "/services/develop";
  isDesign = () => this.props.location.pathname === "/services/design";
  condensedNav = () => this.isDesign() || this.isDevelop();

  render() {
    const { children, data } = this.props;
    const isDevelop = this.isDevelop();
    const isDesign = this.isDesign();
    const condensedNav = this.condensedNav();
    return (
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
        <div
          style={{
            background: isDevelop ? "#333" : "none",
            color: isDevelop ? "#f3f4f0" : "#333",
            paddingTop: "45px"
          }}
        >
          <h1>SERVICIOS</h1>

          <div
            className={`service__menu ${condensedNav && "service__menu--mini"}`}
          >
            <ServiceMenuItem
              title="Diseño"
              className={
                isDevelop
                  ? " service__section--light"
                  : " service__section--dark"
              }
              style={{
                textDecoration: isDesign ? "underline double" : "none"
              }}
              url="/services/design"
              enableItems={!condensedNav}
              items={services.design}
            />
            <ServiceMenuItem
              title="Desarrollo"
              className={
                isDevelop
                  ? " service__section--light"
                  : isDesign
                    ? " service__section--dark"
                    : " service__section--light"
              }
              style={{
                textDecoration: isDevelop ? "underline double" : "none"
              }}
              url="/services/develop"
              enableItems={!condensedNav}
              items={services.develop}
            />
          </div>

          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0
            }}
          >
            {children()}
          </div>
        </div>
        <Footer {...info} />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
