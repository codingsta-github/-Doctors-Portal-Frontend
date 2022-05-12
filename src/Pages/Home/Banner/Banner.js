import React from 'react';
import banner from '../../../assets/images/chair.png'
import Button from '../../Shared/Button/Button';
const Banner = () => {
    return (
        <div class="hero lg:min-h-screen md:min-h-screen py-10 pb-10 bg-white  bg-banner">
        <div class="hero-content flex-col lg:flex-row-reverse pt-0">
          <img src={banner} class="max-w-lg mx-3 rounded-lg shadow-2xl w-full" alt=''/>
          <div className='pt-10'>
            <h1 class="lg:text-5xl md:text-3xl text-2xl  font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fugiat ipsam dolorum asperiores ducimus distinctio labore doloremque tempora enim rem, maxime, inventore voluptatum recusandae incid</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;