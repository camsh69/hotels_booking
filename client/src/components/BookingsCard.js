import React from "react";

const BookingsCard = ({booking, deleteBooking}) => {

    return ( 
        <>
         <li>
             <h3>Name: {booking.name}</h3>
             <h4>Email: {booking.email}</h4>
             <h4>Checked in: {String(booking.checked_in)}</h4>
         </li>
            
        </>
    )
}

export default BookingsCard;

   