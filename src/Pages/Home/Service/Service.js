import React from "react";

const Service = ({ image, title }) => {
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          aspernatur quis ipsam facere mollitia 
        </p>
      </div>
    </div>
  );
};

export default Service;
