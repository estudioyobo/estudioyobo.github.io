import React from "react";
import Service from "../components/Service";

import services from "../config/services";

const Services = () => (
  <div>
    <h1>SERVICIOS</h1>
    {services.map(service => <Service {...service} />)}
  </div>
);

export default Services;
