import React from "react";

const BookingsCard = ({booking, deleteBooking}) => {

    const handleDelete = () => deleteBooking(booking._id);
    

    return ( 
        <>
         <li>
             <h3>Name: {booking.name}</h3>
             <h4>Email: {booking.email}</h4>
             <h4>Checked in: {String(booking.checked_in)}</h4>
             <button onClick={handleDelete}> 🗑 </button>
         </li>
            
        </>
    )
}

export default BookingsCard;

   