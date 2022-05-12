import React from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import "./Home.css"
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
const Home = () => {
    return (
        <div className='lg:px-12 md:px-10'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Treatment></Treatment>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;