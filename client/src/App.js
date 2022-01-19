import React, {useEffect, useState} from "react";
import './App.css';
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from "./components/BookingsForm";
import {getBookings, deleteBooking as apiDeleteBooking, postBooking} from "./BookingsService"

function App() {
  
  const [guestBookings, setGuestBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    postBooking(booking).then(newBooking => setGuestBookings([...guestBookings].push(newBooking)));
      }

  const deleteBooking = (id) => {
    apiDeleteBooking(id).then(() => {
      const temp = [...guestBookings].filter(booking => booking._id !== id)
      setGuestBookings(temp);
    })
  }
  
  return (
    <>
      <h1>  hello world !</h1>
      <BookingsGrid guestBookings={guestBookings} deleteBooking={deleteBooking}/>
      <BookingsForm addBooking={addBooking}/>
    </>
  )

}

export default App;
