import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import Payment from './Payment';
import './AllBooking.css';
import NavbarUser from './NavbarUser';

const AllBooking = () => {
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/userbooks')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditClick = (event) => {
    setIsEditing(true);
    setUpdatedEvent(event);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent({
      ...updatedEvent,
      [name]: value,
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/userbooks/${updatedEvent.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((response) => {
        if (response.ok) {
          setEvents((prevEvents) =>
            prevEvents.map((event) =>
              event.id === updatedEvent.id ? { ...event, ...updatedEvent } : event
            )
          );
          setIsEditing(false);
        } else {
          console.error('Error updating event');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/userbooks/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
        } else {
          console.error('Error deleting event');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleOpenPaymentDialog = (event) => {
    setSelectedEvent(event);
    setOpenPaymentDialog(true);
  };

  const handleClosePaymentDialog = () => {
    setOpenPaymentDialog(false);
    setSelectedEvent(null);
  };

  const handlePaymentSuccess = (eventId) => {
    // Mark the event as paid in the state
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, status: 'Paid' } : event
      )
    );
  
    // Store the paid event ID in localStorage
    const paidEvents = JSON.parse(localStorage.getItem('paidEvents')) || [];
    localStorage.setItem('paidEvents', JSON.stringify([...paidEvents, eventId]));
  
    handleClosePaymentDialog();
  };

  useEffect(() => {
    // On component load, check localStorage for paid events and update state
    const paidEvents = JSON.parse(localStorage.getItem('paidEvents')) || [];
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        paidEvents.includes(event.id) ? { ...event, status: 'Paid' } : event
      )
    );
  }, []);

  return (
    <div>
      <NavbarUser />
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
                  <TableCell>
  <Button
    variant="contained"
    color="secondary"
    disabled={event.status === 'Paid'}
    onClick={() => handleOpenPaymentDialog(event)}
    style={{ 
      marginRight: '10px',
      backgroundColor: event.status === 'Paid' ? '#d3d3d3' : undefined, // Light grey color for disabled button
      color: event.status === 'Paid' ? '#a9a9a9' : undefined // Darker grey color for text
    }}
  >
    {event.status === 'Paid' ? 'Paid' : event.status === 'Verified' ? 'Pay' : 'Pending'}
  </Button>
  <Button
    variant="contained"
    color="primary"
    onClick={() => handleEditClick(event)}
    style={{ marginRight: '10px' }}
  >
    Edit
  </Button>
  <Button
    variant="contained"
    color="secondary"
    onClick={() => handleDelete(event.id)}
  >
    Delete
  </Button>
</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Edit Event Dialog */}
      <Dialog open={isEditing} onClose={handleCancel} fullWidth maxWidth="sm">
        <DialogTitle>Edit Booking</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdateSubmit}>
            <TextField
              label="Name"
              name="name"
              value={updatedEvent.name || ''}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={updatedEvent.description || ''}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Event Type"
              name="eventtype"
              value={updatedEvent.eventtype || ''}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Head Count"
              name="headCount"
              type="number"
              value={updatedEvent.headCount || ''}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Event Date"
              name="eventDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={updatedEvent.eventDate || ''}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Venue</InputLabel>
              <Select
                name="venue"
                value={updatedEvent.venue || ''}
                onChange={handleUpdateChange}
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
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button variant="contained" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog open={openPaymentDialog} onClose={handleClosePaymentDialog} fullWidth maxWidth="sm">
        <DialogContent>
          <Payment event={selectedEvent} onPaymentSuccess={handlePaymentSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllBooking;
