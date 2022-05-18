import React from "react";
import { format } from "date-fns";
// import { useAuthState } from "react-firebase-hooks/auth";
const BookingModal = ({ appoint, date, setAppoint }) => {
  const { _id, name, slots } = appoint;
  // const [user, loading, error] = useAuthState();

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      patient: e.target.email.value,
      patientName:e.target.name.value,
      date: format(date, "PP"),
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    setAppoint(null);
  };
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
          <h3 className="text-lg font-bold">Appointment for : {name}</h3>
          <form
            onSubmit={handleBooking}
            className="flex flex-col place-items-center"
          >
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
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered my-2 w-full"
            />
            <input
              name="phone"
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
            <button
              type="submit"
              className="btn btn-accent mt-3 text-white  w-full card-actions items-center"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
