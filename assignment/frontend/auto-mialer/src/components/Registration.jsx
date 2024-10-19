import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const API_URL = 'https://jobpost-bacend.onrender.com/api/auth/createuser';
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          console.log('User created, token:', result.authtoken);
          sessionStorage.setItem('authtoken', result.authtoken);
          navigate("/verify");
        } 
      } catch (error) {
        console.error('Error:', error);
      }
    
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          className="form-input"
          placeholder="Phone no."
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="companyName"
          className="form-input"
          placeholder="Company Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="companyEmail"
          className="form-input"
          placeholder="Company Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="employeeSize"
          className="form-input"
          placeholder="Employee Size"
          onChange={handleChange}
          required
        />
        <button type="submit" className="form-button">Proceed</button>
      </form>
    </div>
  );
}

export default Registration;
