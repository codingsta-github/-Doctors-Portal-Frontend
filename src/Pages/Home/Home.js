import React from 'react';
import Doctor from './Doctor/Doctor';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import Contact from './Contact/Contact';
import "./Home.css"
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Treatment from './Treatment/Treatment';
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