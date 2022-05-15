import React from 'react';
import Doctor from './Doctor';
import Banner from './Banner';
import Cards from './Cards';
import Contact from './Contact';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';
const Home = () => {
    return (
        <div className='lg:px-12 md:px-10'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Treatment></Treatment>
            <Doctor></Doctor>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;