// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PetListing from './components/PetListing';
import PetDetails from './components/PetDetails';
import OrderForm from './components/OrderForm';
import UserPetListing from './components/UserPetListing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={PetListing} />
        <Route path="/pets/:id" component={PetDetails} />
        <Route path="/order" component={OrderForm} />
        <Route path="/user/pet-listing" component={UserPetListing} />
      </Switch>
    </Router>
  );
}

export default App;
