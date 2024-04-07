// PaymentSuccessPage.js
// import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 text-center bg-white rounded shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-16 mx-auto mb-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M19.707 2.293a1 1 0 0 1 0 1.414L8.414 17.707a1 1 0 0 1-1.414 0L.293 11.414a1 1 0 0 1 1.414-1.414l6.293 6.293 10-10a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
        </svg>
        <h2 className="mb-4 text-2xl font-semibold text-green-500">Payment Successfully Paid</h2>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
