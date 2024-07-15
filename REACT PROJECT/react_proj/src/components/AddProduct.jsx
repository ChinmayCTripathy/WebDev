import React, { useState } from 'react';

function AddProduct({ addProduct }) {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productImage && productPrice) {
      addProduct({ productName, productImage, productPrice });
      setProductName('');
      setProductImage('');
      setProductPrice('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name of Product"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL of Product"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price of Product (₹)"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
