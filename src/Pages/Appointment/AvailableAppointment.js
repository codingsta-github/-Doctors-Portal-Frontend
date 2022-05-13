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
      <p className="text-center text-secondary text-2xl font-bold">
        Available Appointments on {format(date, "PP")}{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 lg:m-20">
        {schedules.map((schedule) => (
          <Schedule schedule={schedule} key={schedule._id}></Schedule>
        ))}
      </div>
      <div>
      {/* <!-- The button to open modal --> */}
<label for="my-modal-3" class="btn modal-button">open modal</label>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
