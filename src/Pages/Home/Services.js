import React from "react";
import Service from "./Service";
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
const Services = () => {
  return (
    <div className=" text-center my-40 font-sans">
      <div className="my-10">
      <p className="uppercase text-secondary font-bold text-xl">Our servies</p>
      <h1 className="capitalize font-semibold text-accent text-4xl">
        services we provide
      </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Service image={fluoride} title="Fluoride Treatment"></Service>
        <Service image={cavity} title="Cavity Filling"></Service>
        <Service image={whitening} title="Teeth Whitening"></Service>
      </div>
    </div>
  );
};

export default Services;
