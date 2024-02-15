// Formdetail.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import faShoppingCart
import axios from 'axios'; // Import Axios
import './formdetail.css';
import Navbar from './components/Navbar/Nabar';

const Formdetail = () => {
    const [booking, setBooking] = useState({
        noOfPersons: '',
        fromDate: '',
        toDate: '',
        totalPrice: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:8181/api/v1/book/post`,
                booking, // Pass booking data as the second argument
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Booking successful:', response.data);
            // Optionally, you can navigate to another page after successful booking
            // history.push('/success'); // Assuming 'history' is available (from React Router)
        } catch (error) {
            console.error('Error booking:', error);
        }
    };

    return (
        <div>
            <header>
                <Navbar/>
            </header>
        <div className="booking-form-container">
            <h2>Give Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="noOfPersons">Number of Persons:</label>
                    <input
                        type="number"
                        id="noOfPersons"
                        name="noOfPersons"
                        value={booking.noOfPersons}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fromDate">From Date:</label>
                    <input
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        value={booking.fromDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="toDate">To Date:</label>
                    <input
                        type="date"
                        id="toDate"
                        name="toDate"
                        value={booking.toDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="totalPrice">Total Price:</label>
                    <input
                        type="number"
                        id="totalPrice"
                        name="totalPrice"
                        value={booking.totalPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="book-button">
                    <FontAwesomeIcon icon={faShoppingCart} /> Book
                </button>
            </form>
        </div>
        </div>
    );
};

export default Formdetail;
