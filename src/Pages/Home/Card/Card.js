import React from "react";

const Card = ({ image }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        
      </div>
    </div>
  );
};

export default Card;