// src/components/UserPetListing.js
import React, { useState } from 'react';

function UserPetListing() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    gender: 'Male',
    price: '',
    photo: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">List Your Pet for Sale</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Pet Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">Breed</label>
          <input type="text" className="form-control" id="breed" name="breed" value={formData.breed} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo</label>
          <input type="file" className="form-control" id="photo" name="photo" onChange={handlePhotoChange} accept="image/*" required />
        </div>
        <button type="submit" className="btn btn-primary">List Pet</button>
      </form>
    </div>
  );
}

export default UserPetListing;
