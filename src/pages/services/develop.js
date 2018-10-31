import React from "react";
import Service from "../../components/Service";
import services from "../../config/services";

const Develop = () => (
  <div>
    {services.develop.map((service, i) => (
      <Service {...service} key={i} />
    ))}
  </div>
);

export default Develop;
