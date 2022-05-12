import React from "react";
const Testimonial = ({image}) => {
  return (
    <div class="card w-full bg-base-100 shadow-2xl rounded-2xl">
      <div class="card-body py-3 text-justify">
        <h4>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h4>
      </div>
      <figure className="pl-10">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
            
          </div>
        </div>
        <div class="card-body py-3">
              <h4 class="card-title">Winson Herry</h4>
              <h5>California</h5>
            </div>
      </figure>
    </div>
  );
};

export default Testimonial;
