import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/home.jsx';
import AddBooking from './components/Booking/AddBooking.jsx';
import ViewBooking from './components/ViewBooking.jsx';
import MakePayment from './components/MakePayment.jsx';
import Adminlogin from './components/Admin/Adminlogin.jsx';
import BoatBookingDetails from './components/Booking/BoatBookingDetails.jsx';
import AboutUs from './components/AboutUs.jsx';
import Dashboard from './components/Admin/Dasboard.jsx';
import ManageTeam from './components/Admin/Manages.jsx';
import PaymentTable from './components/Admin/PayementTable.jsx';







const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/add-booking" element={<AddBooking/>} />
                <Route path="/view-booking" element={<ViewBooking/>} />
                <Route path="/make-payment" element={<MakePayment/>} />
                <Route path="/Admin" element={<Adminlogin/>} />
                <Route path="/dash" element={<Dashboard/>} />
                <Route path="/register" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/Booking" element={<AddBooking/>} />
                <Route path="/mba" element={<BoatBookingDetails/>} />
                <Route path="/moo" element={<AboutUs/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/team" element={<ManageTeam/>} />
                <Route path="/transaction" element={<PaymentTable/>} />
                
                
                
            
            </Routes>
        </Router>
    );
};

export default App;
