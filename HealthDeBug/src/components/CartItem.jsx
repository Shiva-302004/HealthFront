// CartItem.js


const CartItem = ({ item, onQuantityChange }) => {
  const handleQuantityIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* <img src={item.image} alt={item.name} className="object-cover w-20 h-20 mr-4" /> */}
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div>
        <button onClick={handleQuantityDecrement} className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={handleQuantityIncrement} className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>
    </div>
  );
}

export default CartItem;
