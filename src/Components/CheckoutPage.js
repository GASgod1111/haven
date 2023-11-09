import React from 'react';
import Payment from './Payment';

function CheckoutPage() {
  const handlePayment = () => {
    // Call the exposed function from Payment.js
    Payment.externalInitiateTransaction();
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Complete your payment:</p>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
}

export default CheckoutPage;
