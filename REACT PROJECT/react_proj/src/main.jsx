import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx'; // Ensure the correct file name casing here
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);