import React from "react";
import treatment from '../../assets/images/treatment.png'
import Button from "../Shared/Button";
const Treatment = () => {
  return (
    <div className="hero min-h-screen bg-white lg:px-40">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl w-full lg:mr-20 " alt=""
        />
        <div>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestiae libero esse neque ratione inventore, ex quasi magni nulla cupiditate soluta omnis, praesentium animi, fugit accusamus repellat! Magni, ullam culpa?
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
