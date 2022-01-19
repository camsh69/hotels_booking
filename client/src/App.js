import React, {useEffect, useState} from "react";
import './App.css';
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from "./components/BookingsForm";

function App() {
  return (
    <>
      <h1>  hello world !</h1>
      <BookingsGrid/>
      <BookingsForm/>
    </>
  )

}

export default App;
