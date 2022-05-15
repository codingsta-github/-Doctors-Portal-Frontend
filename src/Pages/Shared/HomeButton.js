import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({children}) => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
     navigate('/appointment')
    }

    return (
        <button onClick={handleNavigate} className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default HomeButton;