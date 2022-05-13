import React from "react";
import BookingButton from "../Shared/Button/BookingButton";

const Schedule = ({ schedule ,setAppoint }) => {
  
  const { _id, name, slots } = schedule;
  return (
    <div class="card w-full bg-base-100 shadow-xl text-center">
      <div class="card-body ">
        <h2 class="card-title text-secondary justify-center">{name}</h2>
        <p className="font-bold text-xs">{slots.length>0?slots[0]:<span className="text-red-500">No slot available</span>}</p>
        <p className="font-bold text-sm">{slots.length} {slots.length>1?'SPACES ':"SPACE "}AVAILABLE</p>
        <div class="card-actions justify-center">
          <BookingButton slots={slots.length} schedule={schedule} setAppoint={setAppoint}>Book Appointment</BookingButton>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
