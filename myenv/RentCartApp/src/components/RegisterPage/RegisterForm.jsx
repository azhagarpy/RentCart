import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    phone: '',
    address: '',
    aadhaar: '',
    profile: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'profile') {
      setUserData({ ...userData, profile: e.target.files[0] });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleGetCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Update the address field with latitude and longitude
          setUserData({ ...userData, address: `${latitude}, ${longitude}` });
        },
        (error) => {
          console.error('Error getting coordinates:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('password', userData.password);
      formData.append('phone', userData.phone);
      formData.append('address', userData.address);
      formData.append('aadhaar', userData.aadhaar);
      formData.append('profile', userData.profile);

      const response = await fetch('http://127.0.0.1:8000/api/user/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Request successful
        console.log('User data submitted successfully!');
      } else {
        // Handle error case
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error('Error:', error);
    }
  };

  return (
    <div className='register-form container-lg container-md my-4'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="username " className='form-label'>Username:</label>
        <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} className='form-control' />

        <label htmlFor="password" className='form-label'>Password:</label>
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className='form-control' />

        <label htmlFor="phone" className='form-label'>Phone:</label>
        <input type="text" id="phone" name="phone" value={userData.phone} onChange={handleChange} className='form-control' />

        <label htmlFor="address" className='form-label'>Address:</label>
        <input type="text" readOnly id="address" name="address" value={userData.address} onChange={handleChange} className='form-control' />

        <button type="button" onClick={handleGetCoordinates} className='btn btn-info my-3'>
          Use Curent Location
        </button>
        <br />

        <label htmlFor="aadhaar" className='form-label'>Aadhaar:</label>
        <input type="text" id="aadhaar" name="aadhaar" value={userData.aadhaar} onChange={handleChange} className='form-control' />

        <label htmlFor="profile" className='form-label'>Profile:</label>
        <input type="file" id="profile" name="profile" onChange={handleChange} className='form-control' />

        <button type="submit" className='btn btn-success my-2'>Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
