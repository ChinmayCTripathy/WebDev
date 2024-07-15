import React from 'react';

function ProductItem({ product, deleteProduct, editProduct, addToCart }) {
  return (
    <div className="product-item">
      <h2>{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} />
      <p>Price: ₹{product.productPrice}</p>
      <button onClick={deleteProduct}>Delete</button>
      <button onClick={editProduct}>Edit</button>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
