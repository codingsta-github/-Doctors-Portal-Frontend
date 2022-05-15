import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Button from '../Shared/Button';
const Doctor = () => {

    return (
        <div className="hero pt-10  px-10 mt-36 bg-white bg-appointment py-10 lg:py-0">
        <div className="hero-content flex-col lg:flex-row py-0  text-white">
          <img src={doctor} className="hidden lg:block md:block max-w-lg  rounded-lg  w-full -mt-36" alt=''/>
          <div >
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Make an appointment Today</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fugiat ipsam dolorum asperiores ducimus distinctio labore doloremque tempora enim rem, maxime, inventore voluptatum recusandae incid</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    );
};

export default Doctor;