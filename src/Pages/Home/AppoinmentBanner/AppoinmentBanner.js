import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import Button from '../../Shared/Button/Button';
const AppoinmentBanner = () => {

    return (
        <div class="hero pt-10  px-10 mt-36 bg-white bg-appointment ">
        <div class="hero-content flex-col lg:flex-row py-0  text-white">
          <img src={doctor} class="max-w-lg  rounded-lg  w-full -mt-36" alt=''/>
          <div >
            <h1 class="text-5xl font-bold">Make an appointment Today</h1>
            <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fugiat ipsam dolorum asperiores ducimus distinctio labore doloremque tempora enim rem, maxime, inventore voluptatum recusandae incid</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentBanner;