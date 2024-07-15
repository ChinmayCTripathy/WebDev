import React from 'react';
import AddProduct from '../components/AddProduct';

function AddProductPage({ addProduct }) {
  return (
    <div>
      <h1>Add Product</h1>
      <AddProduct addProduct={addProduct} />
    </div>
  );
}

export default AddProductPage;
