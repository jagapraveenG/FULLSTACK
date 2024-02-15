import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/home.jsx';
import AddBooking from './components/Booking/AddBooking.jsx';
import ViewBooking from './components/ViewBooking/ViewBooking.jsx';
import MakePayment from './components/Payment/MakePayment.jsx';
import Adminlogin from './components/Admin/Adminlogin.jsx';
import BoatBookingDetails from './components/Booking/BoatBookingDetails.jsx';
import AboutUs from './components/About/AboutUs.jsx';
import Dashboard from './components/Admin/Dasboard.jsx';
import ManageTeam from './components/Admin/Manages.jsx';
import PaymentTable from './components/Admin/PayementTable.jsx';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Payment from './components/Pay/Payment.jsx';
import Profile from './components/Profile/Profile.jsx';
import Formdetail from './Formdetail.jsx';
// import Formdetail from './components/Boatformdetails/formdetail.jsx';










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
                <Route path="/buy-boat" element={<Formdetail/>} />
                <Route path="/profile" element={<Profile/>} />
                
                <Route path="/BoatBooking" element={<BoatBookingDetails/>} />

                <Route path="/payment" element={<Payment/>} />



                
                
            
            </Routes>
        </Router>
    );
};

export default App;
