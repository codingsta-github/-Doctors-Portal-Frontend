import React from "react";
import Button from "../Shared/Button/Button";

const Schedule = ({ schedule }) => {
  const { _id, name, slots } = schedule;
  return (
    <div class="card w-full bg-base-100 shadow-xl text-center">
      <div class="card-body ">
        <h2 class="card-title text-secondary justify-center">{name}</h2>
        <p className="font-bold text-xs">{slots[0]}</p>
        <p className="font-bold text-sm">{slots.length} SPACES AVAILABLE</p>
        <div class="card-actions justify-center">
          <Button>Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
