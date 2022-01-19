import React, {useState}from "react";

const BookingsForm = ({addBooking}) => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState("");
    const [checkedIn, setCheckedIn] = useState(false);

    // set name state onNameChange
    const onNameChange = event => {
        setName(event.target.value);
    }

    // set email state onEmailChange
    const onEmailChange = event => {
        setEmail(event.target.value)
    }

    //  on submit
    // preventDefault
    //  set checked in state to true

    const handleSubmit = event => {
        event.preventDefault();
      
        setCheckedIn(true);
        
        const booking = 
        {
            name: name,
            email: email,
            checked_in: checkedIn
        }

        addBooking(booking);

        setName("");
        setEmail("");
        setCheckedIn(false)
    }   
    
//  create booking obj 
// pass obj to addBooking
// set states back to default


    

    return (
    <>
        <form onSubmit={handleSubmit}>
        <h2>Add a booking: </h2>
            <input onChange={onNameChange} type="text" placeholder="Name"/>
            <input onChange={onEmailChange}  type="email" placeholder="Email"/>
            <input type="submit" value="Check In"/>

        </form>
    </>
    )
}

export default BookingsForm