import 'tachyons';
import { Link } from 'react-router-dom';
function PetListing() {
  // Dummy data for demonstration
  const pets = [
    { id: 1, name: 'Buddy', breed: 'Labrador Retriever', age: 2, gender: 'Male', price: '$500', userId: 1 },
    { id: 2, name: 'Milo', breed: 'Golden Retriever', age: 1, gender: 'Male', price: '$600', userId: 2 },
    { id: 3, name: 'Bailey', breed: 'Beagle', age: 3, gender: 'Female', price: '$400', userId: 1 },
    { id: 4, name: 'Luna', breed: 'Siberian Husky', age: 2, gender: 'Female', price: '$700', userId: 3 },
  ];

  // Dummy users data for demonstration
  const users = {
    1: { id: 1, username: 'user1' },
    2: { id: 2, username: 'user2' },
    3: { id: 3, username: 'user3' }
  };

  const getUserById = userId => users[userId];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">List of Available Pets</h2>
      <div className="row">
        {pets.map(pet => (
          <div key={pet.id} className="col-md-6 mb-4">
            <div className="card shadow-3 bg-light-moon-grey">
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">Breed: {pet.breed}</p>
                <p className="card-text">Age: {pet.age}</p>
                <p className="card-text">Gender: {pet.gender}</p>
                <p className="card-text">Price: {pet.price}</p>
                <p className="card-text">Posted By: {getUserById(pet.userId).username}</p>
                <Link to={`/pets/${pet.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetListing;
