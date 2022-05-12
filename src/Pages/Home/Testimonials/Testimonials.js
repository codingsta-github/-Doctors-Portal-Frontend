import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import Testimonial from '../Testimonial/Testimonial';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonials = () => {
    return (
      <div>
        <div class="flex lg:flex justify-between items-center py-20">
          <div className="text-left">
            <p class="uppercase text-secondary font-bold text-xl">
            Testimonial
            </p>
            <h1 class="capitalize font-semibold text-accent text-4xl">What Our Patients Says</h1>
          </div>
          <img
            src={quote} alt="" className="w-48"
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
            <Testimonial image={people1}></Testimonial>
            <Testimonial image={people2}></Testimonial>
            <Testimonial image={people3}></Testimonial>
        </div>
      </div>
    );
};

export default Testimonials;