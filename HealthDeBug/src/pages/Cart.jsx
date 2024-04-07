// // Cart.js
// import  { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import CartItem from '../components/CartItem';


// const Cart = ({ items }) => {
//   const router = useNavigate();
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Function to update total price when quantity changes
//   const updateTotalPrice = () => {
//     let total = 0;
//     items.forEach(item => {
//       total += item.price * item.quantity;
//     });
//     setTotalPrice(total);
//   };

//   // Function to handle quantity change
//   const handleQuantityChange = (id, newQuantity) => {
//     const updatedItems = items.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     updateTotalPrice(updatedItems);
//   };
//   const handleCheckout = () => {
//     // Navigate to the checkout page
//     router(`/payment?total=${totalPrice}`);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
//       {items.map(item => (
//         <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
//       ))}
//       <div className="mt-4">
//         <p className="text-xl font-semibold">Total: ${totalPrice}</p>

//         <button onClick={handleCheckout}className='flex my-4 justify-center items-center sm:w-[40vw] w-[90vw] bg-blue-400 py-3 '> Paynow</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CartItem from '../components/CartItem';

const Cart = ({ items }) => {
  const router = useNavigate();
  // const [items, setItems] = useState(/* initial items array */);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to update total price when items change
  useEffect(() => {
    updateTotalPrice();
  }, [items]);

  // Function to update total price
  const updateTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateTotalPrice(updatedItems);
    setItems(updatedItems);
  };

  const handleCheckout = () => {
    // Navigate to the checkout page with total price as parameter
    router(`/payment?total=${totalPrice}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
      {items.map(item => (
        <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
      ))}
      <div className="mt-4">
        <p className="text-xl font-semibold">Total: ${totalPrice}</p>
        <button onClick={handleCheckout} className='flex my-4 justify-center items-center sm:w-[40vw] w-[90vw] bg-blue-400 py-3 '> Pay now</button>
      </div>
    </div>
  );
}

export default Cart;

