import React, { useState } from 'react';
import { Paper, TextField, Button, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Logo.css';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    password: '',
    Cpassword: '',
    Rpassword: ''
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

  const handleRoleChange = (event) => {
    setFormData({
      ...formData,
      Rpassword: event.target.value
    });
    if (errors.Rpassword) {
      setErrors({
        ...errors,
        Rpassword: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name) newErrors.name = '*Name is required';
    if (!formData.email) newErrors.email = '*Email is required';
    if (!formData.pass) newErrors.pass = '*Phone Number is required';
    if (!formData.password) {
      newErrors.password = '*Password is required';
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password = '*Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
    }
    if (!formData.Cpassword) newErrors.Cpassword = '*Confirm Password is required';
    if (formData.password && formData.Cpassword && formData.password !== formData.Cpassword) {
      newErrors.Cpassword = '*Passwords do not match';
    }
    if (!formData.Rpassword) newErrors.Rpassword = '*Role is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const data = {
      username: formData.name,
      email: formData.email,
      mobileNumber: formData.pass,
      password: formData.password,
      role: formData.Rpassword
    };

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', data);
      if (response.status === 200) {
        navigate('/signin');
      }
    } catch (error) {
      console.error(error.response.data);
      setErrors({ general: 'Registration failed. Please try again.' });
    }
  };

  return (
    <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh' }}>
      <form onSubmit={handleSubmit}>
            <h1>Signup Form</h1>
        <Paper elevation={10} style={{ padding: '40px 20px', width: 400, margin: '20px auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Phone Number"
              placeholder="Enter your phone number"
              fullWidth
              name="pass"
              value={formData.pass}
              onChange={handleChange}
              error={!!errors.pass}
              helperText={errors.pass}
            />
            <TextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              fullWidth
              name="Cpassword"
              value={formData.Cpassword}
              onChange={handleChange}
              error={!!errors.Cpassword}
              helperText={errors.Cpassword}
            />
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                value={formData.Rpassword}
                onChange={handleRoleChange}
                error={!!errors.Rpassword}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
              {errors.Rpassword && <p style={{ color: 'red' }}>{errors.Rpassword}</p>}
            </FormControl>
            {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Box>
        </Paper>
      </form>
    </div>
  );
};

export default Signin;
