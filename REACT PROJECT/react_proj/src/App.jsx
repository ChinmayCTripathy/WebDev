import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const addProduct = async (product) => {
    try {
      const res = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      setProducts([...products, data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage products={products} deleteProduct={deleteProduct} addToCart={addToCart} />} />
        <Route path="/add-product" element={<AddProductPage addProduct={addProduct} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
