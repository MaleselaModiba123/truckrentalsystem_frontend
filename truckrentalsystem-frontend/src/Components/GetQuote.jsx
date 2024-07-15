// GetQuote.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//import './GetQuote.css';
import { truckData } from './Renttrucks';  

const GetQuote = () => {
  const { truckId } = useParams();
  const selectedTruck = truckData.find(truck => truck.id === parseInt(truckId));

  const [formData, setFormData] = useState({ rentalDuration: 0 });
  const [price, setPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedPrice = calculatePrice(formData.rentalDuration, selectedTruck);
    setPrice(calculatedPrice);
  };

  const calculatePrice = (duration, truck) => {
    if (!truck) return 0;
    const basePrice = truck.type === 'Flatbed' ? 100 : 500; // Example pricing logic
    return basePrice * duration;
  };

  return (
    <div>
      <h1>Truck Rental Form</h1>
      {selectedTruck && (
        <div>
          <h2>{selectedTruck.model}</h2>
          <p><strong>Type:</strong> {selectedTruck.type}</p>
          <p><strong>Payload:</strong> {selectedTruck.payload}</p>
          <p><strong>Dimension:</strong> {selectedTruck.dimension}</p>
          <p><strong>License:</strong> {selectedTruck.license}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Rental Duration (days):
          <input type="number" name="rentalDuration" value={formData.rentalDuration} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Calculate Price</button>
      </form>
      {price !== null && (
        <div>
          <h2>Total Price: R{price}</h2>
        </div>
      )}
    </div>
  );
};

export default GetQuote;

