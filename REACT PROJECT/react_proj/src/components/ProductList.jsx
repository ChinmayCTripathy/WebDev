import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, deleteProduct, editProduct, addToCart }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          deleteProduct={() => deleteProduct(index)}
          editProduct={() => editProduct(index)}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
