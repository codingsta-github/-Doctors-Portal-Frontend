import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import "./Home.css"
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default Home;