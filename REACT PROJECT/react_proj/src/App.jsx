import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import CartPage from './pages/CartPage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const addProduct = async (product) => {
    const res = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    setProducts([...products, data]);
  };

  const deleteProduct = async (index) => {
    const productToDelete = products[index];
    await fetch(`http://localhost:3001/products/${productToDelete.id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter((_, i) => i !== index));
  };

  const editProduct = async (index) => {
    const productToEdit = products[index];
    const updatedProduct = { ...productToEdit, productName: 'Updated Name' }; // Example update
    await fetch(`http://localhost:3001/products/${productToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    setProducts(
      products.map((product, i) => (i === index ? updatedProduct : product))
    );
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleSignup = (loggedIn) => {
    setShowSignup(!loggedIn);
  };

  return (
    <Router>
      {user ? (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-product">Add Product</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={() => setUser(null)}>Logout</button>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  deleteProduct={deleteProduct}
                  editProduct={editProduct}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/add-product"
              element={<AddProductPage addProduct={addProduct} />}
            />
            <Route path="/cart" element={<CartPage cart={cart} />} />
          </Routes>
        </>
      ) : showSignup ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
