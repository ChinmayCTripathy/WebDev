import React from 'react';

function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.productName} - ₹{item.productPrice}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
