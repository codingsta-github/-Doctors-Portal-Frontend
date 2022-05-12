import React from "react";
import treatment from '../../../assets/images/treatment.png'
import Button from "../../Shared/Button/Button";
const Treatment = () => {
  return (
    <div class="hero min-h-screen bg-white lg:px-40">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl w-full lg:mr-20 " alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestiae libero esse neque ratione inventore, ex quasi magni nulla cupiditate soluta omnis, praesentium animi, fugit accusamus repellat! Magni, ullam culpa?
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
