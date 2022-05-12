import React from 'react';
import banner from '../../../assets/images/chair.png'
import Button from '../../Shared/Button/Button';
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white bg-banner">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={banner} class="max-w-lg mx-3 rounded-lg shadow-2xl w-full" alt=''/>
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur minus nostrum accusantium facilis aut, corporis similique itaque quaerat, exercitationem neque quisquam at eum? Consequatur cupiditate et temporibus ut voluptas.</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;