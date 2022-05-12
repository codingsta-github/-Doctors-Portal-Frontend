import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import "./Home.css"
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
        </div>
    );
};

export default Home;