import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/create',formData);
      if (response.status === 201) {
        alert("User and address created successfully!")
        setMessage('User and address created successfully!');
        setFormData({
          name: '',
          city: '',
          state: '',
          pincode: ''
        });
      } else {
        setMessage(response.data.message || 'Failed to create user and address.');
      }
    } catch (error) {
      setMessage('Error occurred while submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <h2 className="form-title">User Address</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            placeholder="Enter your state"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            placeholder="Enter your pincode"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default UserForm;
