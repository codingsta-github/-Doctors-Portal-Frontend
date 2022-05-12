import React from "react";

const Card = ({ image,title, bgColor }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl  ${bgColor} p-3`}>
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        
      </div>
    </div>
  );
};

export default Card;
