// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PetListing from './components/PetListing';
import PetDetails from './components/PetDetails';
import OrderForm from './components/OrderForm';
import UserPetListing from './components/UserPetListing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import 'tachyons';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pets" element={<PetListing />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/user/pet-listing" element={<UserPetListing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
