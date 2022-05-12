import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Schedule from "./Schedule";

const AvailableAppointment = ({ date, setDate }) => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);
  return (
    <div className="my-20">
      <p className="text-center text-secondary text-2xl font-semibold">
        Available Appointments on {format(date, "PP")}{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {schedules.map((schedule) => (
          <Schedule schedule={schedule} key={schedule.id}></Schedule>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
