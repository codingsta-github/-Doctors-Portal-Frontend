import React from "react";
import { format } from "date-fns";
const BookingModal = ({appoint,date}) => {
  console.log(date.toLocaleString())
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal lg:w-1/4 mx-auto ">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">{appoint.name}</h3>
          <div className="flex flex-col  place-items-center">
            <input
              type="email"
              value={format(date, "PP")}
              class="input input-bordered my-2 w-full" readOnly
            />
            <input
              type="text"
              placeholder="example@example.com"
              class="input input-bordered my-2 w-full"
            />
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered my-2 w-full"
            />
            <input
              type="number"
              placeholder="Phone Number"
              class="input input-bordered my-2 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered my-2 w-full"
            />
            <button class="btn btn-accent mt-3 text-white  w-full card-actions">
                SUBMIT
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
