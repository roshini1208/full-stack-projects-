import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import NavbarAdmin from './NavbarAdmin';
import './AllBooking.css';

const AllBookingAdmin = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/userbooks')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleStatusChange = (id, status) => {
    const updatedEvent = { ...events.find(event => event.id === id), status };
    
    fetch(`http://localhost:8080/api/userbooks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((response) => {
        if (response.ok) {
          setEvents(events.map(event => event.id === id ? updatedEvent : event));
        } else {
          console.error('Failed to update status');
        }
      })
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <div>
      <NavbarAdmin />
      <div className='AllBo_sri'>
        <div className="table-container">
          <h2 className="table-title">All Bookings</h2>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Event Type</TableCell>
                <TableCell>Head Count</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Venue</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>{event.eventtype}</TableCell>
                  <TableCell>{event.headCount}</TableCell>
                  <TableCell>{event.eventDate}</TableCell>
                  <TableCell>{event.venue}</TableCell>
                  <TableCell>{event.status}</TableCell>
                  <TableCell style={{ width: '20%' }}>
                    <Button
                      variant="contained"
                      color={event.status === 'Pending' ? 'secondary' : 'primary'}
                      onClick={() => handleStatusChange(event.id, event.status === 'Pending' ? 'Verified' : 'Pending')}
                      disabled={event.status === 'Verified'}  // Disable button when status is Verified
                    >
                      {event.status === 'Pending' ? 'Verify' : 'Pending'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllBookingAdmin;
