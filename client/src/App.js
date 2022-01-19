import React, {useEffect, useState} from "react";
import './App.css';
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from "./components/BookingsForm";
import {getBookings, deleteBooking, postBooking} from "./BookingsService"

function App() {
  
  const [guestBookings, setGuestBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);
  
  return (
    <>
      <h1>  hello world !</h1>
      <BookingsGrid/>
      <BookingsForm/>
    </>
  )

}

export default App;
