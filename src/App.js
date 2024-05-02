import './App.css';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from './BookingForm';
import {
  Route,
  Routes
} from "react-router-dom";
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
function App() {


  return (
    // <div>
    // <Header />

    // <BookingForm></BookingForm>
    // <h4>booking page and form</h4>
    
    // <Routes>
    //   <Route path="/booking" element={<BookingPage />}></Route>
    // </Routes>

    // </div>
    <>
    <Header />
        <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
