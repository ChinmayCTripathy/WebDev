import React from 'react';
import ProductList from '../components/ProductList';

function HomePage({ products, deleteProduct, editProduct, addToCart }) {
  return (
    <div>
      <h1>Home</h1>
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default HomePage;
