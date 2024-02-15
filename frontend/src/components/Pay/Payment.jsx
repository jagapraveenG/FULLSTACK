import React, { useState } from 'react';
import './style.css';
import Navbar from '../Navbar/Nabar';

const Payment = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        amount: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error message when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission logic here
            console.log(paymentDetails);
            // Optionally, you can navigate to a success page
            // history.push('/success');
        }
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!paymentDetails.cardNumber.trim()) {
            errors.cardNumber = 'Card number is required';
            isValid = false;
        } else if (!/^\d{16}$/.test(paymentDetails.cardNumber)) {
            errors.cardNumber = 'Invalid card number';
            isValid = false;
        }

        if (!paymentDetails.expiryDate.trim()) {
            errors.expiryDate = 'Expiry date is required';
            isValid = false;
        } else if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(paymentDetails.expiryDate)) {
            errors.expiryDate = 'Invalid expiry date format (MM/YYYY)';
            isValid = false;
        }

        if (!paymentDetails.cvv.trim()) {
            errors.cvv = 'CVV is required';
            isValid = false;
        } else if (!/^\d{3}$/.test(paymentDetails.cvv)) {
            errors.cvv = 'Invalid CVV';
            isValid = false;
        }

        if (!paymentDetails.name.trim()) {
            errors.name = 'Name on card is required';
            isValid = false;
        }

        if (!paymentDetails.amount.trim()) {
            errors.amount = 'Amount is required';
            isValid = false;
        } else if (!/^\d+(\.\d{1,2})?$/.test(paymentDetails.amount)) {
            errors.amount = 'Invalid amount';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className="payment-container">
                <h2>Payment Details</h2>
                <form className="payment-form" onSubmit={handleSubmit}>
                    <label>
                        Card Number:
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentDetails.cardNumber}
                            onChange={handleChange}
                            placeholder="Enter card number"
                            required
                        />
                        {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </label>
                    <label>
                        Expiry Date:
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentDetails.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YYYY"
                            required
                        />
                        {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                    </label>
                    <label>
                        CVV:
                        <input
                            type="text"
                            name="cvv"
                            value={paymentDetails.cvv}
                            onChange={handleChange}
                            placeholder="CVV"
                            required
                        />
                        {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                    </label>
                    <label>
                        Name on Card:
                        <input
                            type="text"
                            name="name"
                            value={paymentDetails.name}
                            onChange={handleChange}
                            placeholder="Name on card"
                            required
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </label>
                    <label>
                        Amount:
                        <input
                            type="number"
                            name="amount"
                            value={paymentDetails.amount}
                            onChange={handleChange}
                            placeholder="Amount"
                            required
                        />
                        {errors.amount && <span className="error-message">{errors.amount}</span>}
                    </label>
                    <button type="submit">Pay Now</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
