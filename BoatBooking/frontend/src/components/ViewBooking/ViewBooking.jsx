// ViewBooking.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewBooking.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Nabar';

const ViewBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/api/v1/book/details`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            
            setBookings(response.data.data);
            setError(null);
           
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setError('Failed to fetch bookings. Please try again later.');
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleEdit = async (bookingId, updatedBookingData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8181/api/v1/book/api/v1/book/${bookingId}`, updatedBookingData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            console.log(`Booking with ID ${bookingId} updated successfully`);
            fetchBookings();
            
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const handleDelete = async (bookingId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8181/api/v1/book/api/v1/book/${bookingId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            setBookings(prevBookings => prevBookings.filter(booking => booking.bookingId !== bookingId));
            console.log(`Booking with ID ${bookingId} deleted successfully`);
            
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const handleConfirm = async (bookingId) => {
        try {
            console.log(`Booking with ID ${bookingId} confirmed`);
        } catch (error) {
            console.error('Error confirming booking:', error);
        }
    };

    const handlePersonChange = (bookingId, updatedNoOfPersons) => {
        const updatedBookings = bookings.map(booking => {
            if (booking.bookingId === bookingId) {
                return { ...booking, noOfPersons: updatedNoOfPersons };
            }
            return booking;
        });
        
        handleEdit(bookingId, updatedBookings.find(booking => booking.bookingId === bookingId));
    };

    return (
        <div className="view-booking-container">
            <Navbar />
            <div className="bookings-container">
                {error && <div className="error-message">{error}</div>}
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Number of Persons</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(bookings) && bookings.length > 0 ? (
                            bookings.map(booking => (
                                <tr key={booking.bookingId}>
                                    <td>
                                        <input
                                            type="number"
                                            value={booking.noOfPersons}
                                            onChange={(e) => handlePersonChange(booking.bookingId, parseInt(e.target.value))}
                                        />
                                    </td>
                                    <td>{booking.fromDate}</td>
                                    <td>{booking.toDate}</td>
                                    <td>{booking.totalPrice}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => handleEdit(booking.bookingId, booking)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDelete(booking.bookingId)}>Delete</button>
                                        <Link to='/payment'><button className="confirm-button" onClick={() => handleConfirm(booking.bookingId)}>Confirm</button></Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No bookings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBooking;
