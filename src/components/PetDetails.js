// src/components/PetDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PetDetails() {
  // Dummy pet data for demonstration
  const pets = [
    { id: 1, name: 'Buddy', breed: 'Labrador Retriever', age: 2, gender: 'Male', price: '$500' },
    { id: 2, name: 'Milo', breed: 'Golden Retriever', age: 1, gender: 'Male', price: '$600' },
    { id: 3, name: 'Bailey', breed: 'Beagle', age: 3, gender: 'Female', price: '$400' },
    { id: 4, name: 'Luna', breed: 'Siberian Husky', age: 2, gender: 'Female', price: '$700' },
  ];

  // Get the pet ID from the URL parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the pet with the matching ID
  const pet = pets.find(pet => pet.id === parseInt(id));

  if (!pet) {
    return <div>Pet not found!</div>;
  }

  const handleBuyNow = () => {
    // Redirect to the order form
    navigate('/order');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Pet Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{pet.name}</h5>
          <p className="card-text">Breed: {pet.breed}</p>
          <p className="card-text">Age: {pet.age}</p>
          <p className="card-text">Gender: {pet.gender}</p>
          <p className="card-text">Price: {pet.price}</p>
          <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
