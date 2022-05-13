import React from 'react';

const BookingButton = ({children,slots,setAppoint,schedule}) => {
    
    return (
        <label for="my-modal-3" disabled={slots===0} onClick={()=>setAppoint(schedule)}  className="btn modal-button btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</label>
        
    );
};

export default BookingButton;