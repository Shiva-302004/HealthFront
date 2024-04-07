// App.js
// import React from 'reactimport Cart from './Cart';
import Cart from '../pages/Cart';

function Carts() {
  const items = [
    { id: 1, name: 'Product 1',  price: 20, quantity: 3 },
    { id: 2, name: 'Product 2',  price: 30, quantity: 1 },
    { id: 3, name: 'Product 3',  price: 40, quantity: 3 },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <Cart items={items} />
    </div>
  );
}

export default Carts;
