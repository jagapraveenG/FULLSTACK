import React from 'react';
import './Payement.css'; // Import CSS for styling

const PaymentTable = () => {
  // Dummy data for payments
  const payments = [
    { serialNo: 1, paymentId: 'PAY001', paymentName: 'John Doe', amount: 100 },
    { serialNo: 2, paymentId: 'PAY002', paymentName: 'Jane Smith', amount: 200 },
    { serialNo: 3, paymentId: 'PAY003', paymentName: 'Alice Johnson', amount: 150 },
    { serialNo: 4, paymentId: 'PAY004', paymentName: 'Bob Brown', amount: 180 },
    { serialNo: 5, paymentId: 'PAY005', paymentName: 'Emma Wilson', amount: 220 },
    { serialNo: 6, paymentId: 'PAY006', paymentName: 'Michael Davis', amount: 130 },
    { serialNo: 7, paymentId: 'PAY007', paymentName: 'Olivia Martinez', amount: 170 },
    { serialNo: 8, paymentId: 'PAY008', paymentName: 'William Taylor', amount: 190 },
    { serialNo: 9, paymentId: 'PAY009', paymentName: 'Sophia Thomas', amount: 210 },
    { serialNo: 10, paymentId: 'PAY010', paymentName: 'Ethan Anderson', amount: 240 },
    { serialNo: 2, paymentId: 'PAY002', paymentName: 'Jane Smith', amount: 200 },
    { serialNo: 3, paymentId: 'PAY003', paymentName: 'Alice Johnson', amount: 150 },
    { serialNo: 4, paymentId: 'PAY004', paymentName: 'Bob Brown', amount: 180 },
    { serialNo: 5, paymentId: 'PAY005', paymentName: 'Emma Wilson', amount: 220 },
    { serialNo: 6, paymentId: 'PAY006', paymentName: 'Michael Davis', amount: 130 },
    { serialNo: 7, paymentId: 'PAY007', paymentName: 'Olivia Martinez', amount: 170 },
    { serialNo: 8, paymentId: 'PAY008', paymentName: 'William Taylor', amount: 190 },
    { serialNo: 9, paymentId: 'PAY009', paymentName: 'Sophia Thomas', amount: 210 },
    { serialNo: 10, paymentId: 'PAY010', paymentName: 'Ethan Anderson', amount: 240 },
  ];

  return (
    <div className="payment-table">
      <h2>Payment Details</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Payment ID</th>
            <th>Payment Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.paymentId}>
              <td>{payment.serialNo}</td>
              <td>{payment.paymentId}</td>
              <td>{payment.paymentName}</td>
              <td>${payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
