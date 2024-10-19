import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Logo.css';
import NavbarAdmin from './NavbarAdmin';

const AddeventList = () => {
  const [formData, setFormData] = useState({
    type: '',
    desc: '',
    packages: '',
    count: '',
    charges: '',
    image: '', // New field for image URL
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = '*Event Type is required';
    if (!formData.desc) newErrors.desc = '*Description is required';
    if (!formData.packages) newErrors.packages = '*Event Packages is required';
    if (!formData.count) newErrors.count = '*Participants Count is required';
    if (!formData.charges) newErrors.charges = '*Charges are required';
    if (!formData.image) newErrors.image = '*Image URL is required';
    else if (!(formData.image)) newErrors.image = '*Invalid URL format';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const eventData = {
        evenType: formData.type,
        description: formData.desc,
        eventPackages: formData.packages,
        participantCount: parseInt(formData.count, 10),
        charges: parseInt(formData.charges, 10),
        images: formData.image, // Add the image URL to the data
      };

      try {
        const response = await axios.post('http://localhost:8080/api/events/eventpost', eventData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200 || response.status === 201) {
          console.log("Event added successfully");
          setFormData({
            type: '',
            desc: '',
            packages: '',
            count: '',
            charges: '',
            image: '', // Reset image field
          });
          setErrors({});
          navigate('/alleven');
        } else {
          console.error('Failed to add event');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div elevation={10} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)', padding: '20px', maxWidth: '400px', width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: 'rgb(24, 24, 24)', textAlign: 'center' }}>Add Events</h1>
            <TextField label="Event Type" type="text" name="type" value={formData.type} onChange={handleChange} fullWidth />
            <div>{errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}</div>
            <br />
            <TextField label="Description" type="text" name="desc" value={formData.desc} onChange={handleChange} fullWidth />
            <div>{errors.desc && <div style={{ color: 'red' }}>{errors.desc}</div>}</div>
            <br />
            <TextField label="Event Packages" type="text" name="packages" value={formData.packages} onChange={handleChange} fullWidth />
            <div>{errors.packages && <div style={{ color: 'red' }}>{errors.packages}</div>}</div>
            <br />
            <TextField label="Participants Count" type="text" name="count" value={formData.count} onChange={handleChange} fullWidth />
            <div>{errors.count && <div style={{ color: 'red' }}>{errors.count}</div>}</div>
            <br />
            <TextField label="Charges" name="charges" type="text" value={formData.charges} onChange={handleChange} fullWidth />
            <div>{errors.charges && <div style={{ color: 'red' }}>{errors.charges}</div>}</div>
            <br />
            <TextField label="Image URL" name="image" type="text" value={formData.image} onChange={handleChange} fullWidth />
            <div>{errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}</div>
            <br />
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Add Event
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddeventList;
