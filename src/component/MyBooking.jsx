import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MyBooking.css';
import NavbarUser from './NavbarUser';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers';

const MyBooking = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    packages: '',
    count: '',
    eventDate: null,
    venue: '',
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

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
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
    if (!formData.type) newErrors.type = '*Name is required';
    if (!formData.description) newErrors.description = '*Description is required';
    if (!formData.packages) newErrors.packages = '*Event Type is required';
    if (!formData.count) newErrors.count = '*Head Count is required';
    if (!formData.eventDate) newErrors.eventDate = '*Event Date is required';
    if (!formData.venue) newErrors.venue = '*Venue is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const bookData = {
        name: formData.type,
        description: formData.description,
        eventtype: formData.packages,
        eventDate: formData.eventDate ? dayjs(formData.eventDate).format('YYYY-MM-DD') : null,
        headCount: parseInt(formData.count, 10),
        venue: formData.venue,
      };
      
      fetch('http://localhost:8080/api/userbooks/userbooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
      .then(response => {
        console.log("rose");
        if (response.ok) {
          console.log("varsh");
          setFormData({
            type: '',
            description: '',
            packages: '',
            count: '',
            eventDate: null,
            venue: '',
          });
          console.log("vishwa");
          setErrors({});
          navigate('/uhome');
        } else {
          console.error('Error');
        }
      })
      .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh' }}>
        <Paper elevation={10} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 3)', backdropFilter: 'blur(10px)', padding: '20px', width: '25%' }}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: 'rgb(24, 24, 24)', textAlign: 'center' }}>Booking Form</h1>
            <TextField label="Name" type="text" name="type" value={formData.type} onChange={handleChange} fullWidth />
            <div>{errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}</div>
            <br />
            <TextField label="Description" type="text" name="description" value={formData.description} onChange={handleChange} fullWidth />
            <div>{errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}</div>
            <br />
            <TextField label="Event Type" type="text" name="packages" value={formData.packages} onChange={handleChange} fullWidth />
            <div>{errors.packages && <div style={{ color: 'red' }}>{errors.packages}</div>}</div>
            <br />
            <TextField label="Head Count" type="text" name="count" value={formData.count} onChange={handleChange} fullWidth />
            <div>{errors.count && <div style={{ color: 'red' }}>{errors.count}</div>}</div>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="Event Date"
                value={formData.eventDate}
                minDate={dayjs()} // Restrict to dates after today
                format="YYYY-MM-DD"
                onChange={(date) => handleDateChange('eventDate', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
            <div>{errors.eventDate && <div style={{ color: 'red' }}>{errors.eventDate}</div>}</div>
            <br />
            <FormControl fullWidth>
              <InputLabel>Venue</InputLabel>
              <Select
                name="venue"
                value={formData.venue}
                onChange={handleChange}
              >
                <MenuItem value="Ruby and Diamond Hall">Ruby and Diamond Hall</MenuItem>
                <MenuItem value="Lee Diamond Party Hall">Lee Diamond Party Hall</MenuItem>
                <MenuItem value="WoW Palace">WoW Palace</MenuItem>
                <MenuItem value="Qualia Party Beach">Qualia Party Beach</MenuItem>
                <MenuItem value="Royal Beach">Royal Beach</MenuItem>
                <MenuItem value="Shangri-La Maldives">Shangri-La Maldives</MenuItem>
                <MenuItem value="Kayal Hall">Kayal Hall</MenuItem>
              </Select>
            </FormControl>
            <div>{errors.venue && <div style={{ color: 'red' }}>{errors.venue}</div>}</div>
            <br />
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Add Booking
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default MyBooking;
