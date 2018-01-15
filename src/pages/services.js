import React from "react";
import Service from "../components/Service";

import services from "../config/services";

const Services = () => (
  <div>
    <h1>SERVICIOS</h1>
    {services.map((service, i) => <Service {...service} key={i} />)}
  </div>
);

export default Services;
