import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ event, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name on card is required';
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format';
    }

    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const paymentData = {
            cardnumber: cardNumber,
          name:name,
          cvv:cvv,
        };

        // Replace with your backend API URL
        const response = await fetch('http://localhost:8080/api/userpayments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        });

        if (response.ok) {
          setIsPaymentSuccessful(true);
          setTimeout(() => {
            alert('Payment Successful');
            onPaymentSuccess(event.id);
          }, 1000);
        } else {
          alert('Payment failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="payment-container">
      {isPaymentSuccessful ? (
        <div className="payment-success">
          <h2>Payment Successful</h2>
          <p>Your payment has been processed successfully.</p>
        </div>
      ) : (
        <>
          <h2>Payment Details</h2>
          <form className="payment-form" onSubmit={handlePayment}>
            <div className="form-group">
              <label>Name on Card</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input 
                type="text" 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)} 
                required 
                maxLength="16"
              />
              {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input 
                type="text" 
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)} 
                required 
              />
              {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input 
                type="text" 
                value={cvv}
                onChange={(e) => setCvv(e.target.value)} 
                required 
                maxLength="3"
              />
              {errors.cvv && <p className="error-message">{errors.cvv}</p>}
            </div>
            <button type="submit" className="pay-button">Pay Now</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
