import React from 'react';
import quote from '../../assets/icons/quote.svg'
import Testimonial from './Testimonial';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
const Testimonials = () => {
    return (
      <div>
        <div className="flex lg:flex justify-between items-center lg:py-20 my-10">
          <div className="text-left">
            <p className="uppercase text-secondary font-bold lg:text-xl">
            Testimonial
            </p>
            <h1 className="capitalize font-semibold text-accent lg:text-4xl">What Our Patients Says</h1>
          </div>
          <img
            src={quote} alt="" className="lg:w-48 w-24"
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-10'>
            <Testimonial image={people1}></Testimonial>
            <Testimonial image={people2}></Testimonial>
            <Testimonial image={people3}></Testimonial>
        </div>
      </div>
    );
};

export default Testimonials;