import React from "react";
import BookingsCard from "./BookingsCard";

const BookingsGrid = ({guestBookings, deleteBooking}) => {

    const bookingList = guestBookings.map((booking) => {
        return <BookingsCard booking={booking} deleteBooking={deleteBooking} key={booking._id}/>
    });

    return (
        <>
        <ul> {bookingList}</ul>
        </>
    )
}
export default BookingsGrid;