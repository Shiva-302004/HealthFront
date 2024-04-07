// PaymentPage.js
import  { useState } from 'react';
import { useLocation } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = searchParams.get("total");
//   const totalAmount = 100; // Example total amount
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [googlePayUPI, setGooglePayUPI] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleGooglePayUPIChange = (event) => {
    setGooglePayUPI(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Payment Details</h2>
        <div className="mb-4">
          <label htmlFor="totalAmount" className="block text-gray-700">Total Amount</label>
          <span id="totalAmount" className="text-lg font-semibold">₹ {totalPrice}</span>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
            <input type="text" id="cardNumber" className="block border-[2px] border-gray-400 w-full mt-1 form-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-gray-700">Expiry Date</label>
            <input type="text" id="expiry" className="block border-[2px] border-gray-400 w-full mt-1 form-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700">CVV</label>
            <input type="text" id="cvv" className="block border-[2px] border-gray-400 w-full mt-1 form-input" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="card"
                className="w-5 h-5 text-blue-500 form-radio"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="card" className="ml-2 text-gray-700">Credit/Debit Card</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="googlePay"
                className="w-5 h-5 text-blue-500 form-radio"
                value="googlePay"
                checked={paymentMethod === 'googlePay'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="googlePay" className="ml-2 text-gray-700">Google Pay</label>
            </div>
            {paymentMethod === 'googlePay' && (
              <div className="mt-4">
                <label htmlFor="googlePayUPI" className="block text-gray-700">Google Pay UPI</label>
                <input
                  type="text"
                  id="googlePayUPI"
                  className="block  border-[2px] border-gray-400 w-full mt-1 form-input"
                  value={googlePayUPI}
                  onChange={handleGooglePayUPIChange}
                />
              </div>
            )}
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="cashOnDelivery"
                className="w-5 h-5 text-blue-500 form-radio"
                value="cashOnDelivery"
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="cashOnDelivery" className="ml-2 text-gray-700">Cash on Delivery</label>
            </div>
          </div>
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
