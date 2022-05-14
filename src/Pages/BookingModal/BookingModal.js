import React from "react";
import { format } from "date-fns";
const BookingModal = ({ appoint, date,setAppoint }) => {
  const handleBooking=e=>{
    e.preventDefault();
    const slot=e.target.slot.value;
    console.log(slot);
    setAppoint(null)
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal mx-auto">
        <div className="modal-box relative px-10">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Appointment for : {appoint.name}</h3>
          <form onSubmit={handleBooking} className="flex flex-col place-items-center">
            <input
              type="email"
              value={format(date, "PP")}
              className="input input-bordered my-2 w-full"
              disabled
            />

            <select name="slot" className="select select-bordered w-full my-2">
              <option disabled selected>
                Pick your slot
              </option>
              {appoint.slots?.map(slot=><option value={slot} key={Math.random()*10000}>{slot}</option>)}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered my-2 w-full"
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered my-2 w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered my-2 w-full"
            />
            <button type="submit" className="btn btn-accent mt-3 text-white  w-full card-actions items-center">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
