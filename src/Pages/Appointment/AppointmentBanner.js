import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import banner from '../../assets/images/chair.png'
const AppointmentBanner = ({date,setDate}) => {
  return (
    <div className="hero lg:min-h-screen md:min-h-screen py-10 pb-10 bg-white  bg-banner">
      <div className="hero-content flex-col lg:flex-row-reverse pt-0">
        <img
          src={banner}
          className="max-w-lg mx-3 rounded-lg shadow-2xl w-full lg:ml-20"
          alt=""
        />
        <DayPicker 
        mode="single"
        selected={date}
        onSelect={setDate}
        />;
      </div>
    </div>
  );
};

export default AppointmentBanner;
