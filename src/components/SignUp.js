// src/components/SignUp.js
import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
