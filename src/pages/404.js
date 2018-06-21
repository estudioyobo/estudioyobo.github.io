import React from "react";

import "./404.css";

const NotFoundPage = () => (
  <div className="not-found">
    <video autoPlay muted loop className="not-found__video">
      <source src="/videos/error-404.mp4" type="video/mp4" />
    </video>
  </div>
);

export default NotFoundPage;
