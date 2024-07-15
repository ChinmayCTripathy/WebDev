import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { firstName, lastName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onSignup(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={() => onSignup(false)}>Login</button>
    </form>
  );
}

export default Signup;
