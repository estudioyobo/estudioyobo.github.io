import React from "react";
import Layout from "../components/Layout";

import "./404.css";

const Video = () => (
  <div className="not-found">
    <video autoPlay muted loop className="not-found__video">
      <source src="/videos/error-404.mp4" type="video/mp4" />
    </video>
  </div>
);

const Lost = () => <div className="not-found__svg" />;

const NotFoundPage = () => (
  <Layout>
    <div className="not-found__wrapper">
      {new Date().getSeconds() % 2 === 0 ? <Video /> : <Lost />}
    </div>
  </Layout>
);

export default NotFoundPage;
