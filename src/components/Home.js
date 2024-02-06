// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Welcome to Pet Platform</h1>
      <p className="lead mb-4">Find your perfect pet here!</p>
      <div className="d-grid gap-2">
        <Link to="/signup" className="btn btn-primary btn-lg me-2">Sign Up</Link>
        <Link to="/signin" className="btn btn-secondary btn-lg">Sign In</Link>
      </div>
    </div>
  );
}

export default Home;
