import React from 'react';
import Card from './Card';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Card image={clock} title="Opening Hours" bgColor="bg-gradient-to-r from-secondary to-primary"></Card>
            <Card image={marker} title="Our Location" bgColor="bg-accent"></Card>
            <Card image={phone} title="Contact Us" bgColor="bg-gradient-to-r from-secondary to-primary"></Card>
        </div>
    );
};

export default Cards;