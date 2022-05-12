import React from 'react';
import Card from './Card';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Card image={clock}></Card>
            <Card image={marker}></Card>
            <Card image={phone}></Card>
        </div>
    );
};

export default Cards;