import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Schedule from "./Schedule";

const AvailableAppointment = ({ date, setDate }) => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);
  const [appoint,setAppoint]=useState([null])
  return (
    <div className="my-20">
      <p className="text-center text-secondary text-2xl font-bold">
        Available Appointments on {format(date, "PP")}{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 lg:m-20">
        {schedules.map((schedule) => (
          <Schedule schedule={schedule} key={schedule._id} setAppoint={setAppoint}></Schedule>
        ))}
      </div>
      {
        appoint && <BookingModal></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
