import React from 'react';
import banner from '../../assets/images/chair.png'
import HomeButton from '../Shared/HomeButton';
const Banner = () => {
  
    return (
        <div className="hero lg:min-h-screen md:min-h-screen py-10 pb-10 bg-white  bg-banner">
        <div className="hero-content flex-col lg:flex-row-reverse pt-0">
          <img src={banner} className="max-w-lg mx-3 rounded-lg shadow-2xl w-full" alt=''/>
          <div className='pt-10'>
            <h1 className="lg:text-5xl md:text-3xl text-2xl  font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fugiat ipsam dolorum asperiores ducimus distinctio labore doloremque tempora enim rem, maxime, inventore voluptatum recusandae incid</p>
            <HomeButton>Get Started</HomeButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;