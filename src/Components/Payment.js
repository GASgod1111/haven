import React, { useEffect } from 'react';
import axios from 'axios';

function Payment() {
  const initiateTransaction = async () => {
    try {
      const response = await axios.post(
        'https://tinypesa.com/api/v1/express/initialize',
        {
          amount: '1000',
          msisdn: '254708374149',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Apikey': 'YourApiKeyHere',
          },
        }
      );

      if (response.data.success === 'true') {
        console.error('Error initiating transaction:', response.data);
      } else {
        window.alert('Transaction successfully initiated');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // Expose the function for external use
  const externalInitiateTransaction = () => initiateTransaction();

  useEffect(() => {
    initiateTransaction();
  }, []);

  return (
    <div>
      {/* Your payment form content goes here */}
    </div>
  );
}

export default Payment;
