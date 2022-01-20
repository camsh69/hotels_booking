import React, { useState } from "react";

const BookingsForm = ({addBooking}) => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState("");
    const [checkedIn, setCheckedIn] = useState(false);

    const onNameChange = event =>  setName(event.target.value);

    const onEmailChange = event =>  setEmail(event.target.value);

    const handleOnClick = () => setCheckedIn(true);

    const handleSubmit = event => {
        
        event.preventDefault();
      
        const booking = 
        {
            name: name,
            email: email,
            checked_in: checkedIn
        }
        addBooking(booking);

        setName("");
        setEmail("");
        setCheckedIn(false);
    }   
        
    return (
        <form onSubmit={handleSubmit}>
        <h2>Add a booking: </h2>
            <input onChange={onNameChange} value={name} type="text" placeholder="Name"/>
            <input onChange={onEmailChange} value={email} type="email" placeholder="Email"/>
            <input onClick={handleOnClick} type="submit" value="Check In"/>
        </form>
    )
}

export default BookingsForm