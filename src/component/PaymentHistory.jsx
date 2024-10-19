import React, { useEffect, useState } from 'react';
import './PaymentHistory.css';
import NavbarUser from './NavbarUser';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // Replace with your backend API URL to fetch payment history
    const fetchPaymentHistory = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/userpayments');
        if (response.ok) {
          const data = await response.json();
          setPaymentHistory(data);
        } else {
          console.error('Failed to fetch payment history');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPaymentHistory();
  }, []);

  return (
    <div><NavbarUser/>
    <div className="payment-history-container">
      <h2>Payment History</h2>
      {paymentHistory.length > 0 ? (
        <ul className="payment-history-list">
          {paymentHistory.map((payment) => (
            <li key={payment.id} className="payment-history-item">
              <p><strong>Name on Card:</strong> {payment.name}</p>
              <p><strong>Card Number:</strong> **** **** **** {String(payment.cardnumber).slice(-4)}</p>
              <p><strong>CVV:</strong> {(payment.cvv)}</p>
              <p><strong>Amount:</strong> 60000</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment history available.</p>
      )}
    </div>
    </div>
    
  );
};

export default PaymentHistory;
