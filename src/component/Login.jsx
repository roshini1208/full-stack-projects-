import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Logo.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = '*Email is required';
    if (!formData.password) newErrors.password = '*Password is required';
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //   } else {
  //     try {
  //       const response = await axios.post('http://localhost:8080/api/users/login', {
  //         email: formData.email,
  //         password: formData.password,
  //       });
  //       const role = response.data;
  //       if (role === "User") {
  //         navigate('/Userpage');
  //       } else if (role === "Admin") {
  //         navigate('/Adminpage');
  //       }
  //     } catch (error) {
  //       console.error('There was an error making the request:', error);
  //       setErrors({ general: 'Username or Password is incorrect' });
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          email: formData.email,
          password: formData.password,
        });
        
        // Logging the response to check its format
        console.log('Login response:', response.data.role.role);
  
        // Assuming the role is returned in the response data object
        const role = response.data.role.role;
  
        if (role === "user") {
          navigate('/Userpage');
        } else if (role === "admin") {
          navigate('/Adminpage');
        } else {
          setErrors({ general: 'Unexpected role received from server' });
        }
      } catch (error) {
        console.error('There was an error making the request:', error);
        setErrors({ general: 'Username or Password is incorrect' });
      }
    }
  };


  return (
    <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='viji' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', backdropFilter: 'blur(10px)', padding: '20px', maxWidth: '400px', width: '90%' }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'rgb(24, 24, 24)', textAlign: 'center' }}>Login Page</h1>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            InputProps={{
              style: { color: 'black' }
            }}
          />
          <div>{errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}</div>
          <br />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            InputProps={{
              style: { color: 'black' }
            }}
          />
          <div>{errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}</div>
          <br />
          <Button style={{ color: 'rgb(29, 29, 30)' }} type="submit" variant="contained" color="secondary" fullWidth>
            Login
          </Button>
          <br />
          <Button style={{ color: 'rgb(29, 29, 30)' }} onClick={() => navigate('/sign')}>Signin</Button>
          <div>{errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
