import React from 'react';
import banner from '../../../assets/images/chair.png'
import Button from '../../Shared/Button/Button';
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} class="max-w-lg mx-3 rounded-lg shadow-2xl w-1/2 " alt=''/>
          <div className='w-1/2'>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;