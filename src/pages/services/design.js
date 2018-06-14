import React, { Component } from "react";
import Service from "../../components/Service";
import services from "../../config/services";

const Design = () => (
  <div>
    {services.design.map((service, i) => <Service {...service} key={i} />)}
  </div>
);

export default Design;
