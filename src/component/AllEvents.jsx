import React, { useState, useEffect } from 'react';
import './AllEvents.css';
import NavbarAdmin from './NavbarAdmin';
import { Button, Card, CardContent, Grid, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteEvent, editEvent } from './EventSlice';
import ResponsiveDialog from './ResponsiveDialog'; // Import the dialog component

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog open/close
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:8080/api/events')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleEdit = (event) => {
    setIsEditing(event.id);
    setUpdatedEvent(event);
    setDialogOpen(true); // Open the dialog
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent({
      ...updatedEvent,
      [name]: value,
    });
  };

  const handleUpdateSubmit = () => {
    dispatch(editEvent({ id: isEditing, updatedEvent }));
    fetch(`http://localhost:8080/api/events/${isEditing}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then(response => response.json())
      .then(data => {
        setEvents(events.map(event => (event.id === isEditing ? data : event)));
        setIsEditing(null);
        setUpdatedEvent({});
        setDialogOpen(false); // Close the dialog after saving
      })
      .catch(error => console.error('Error updating event:', error));
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    fetch(`http://localhost:8080/api/events/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavbarAdmin />
      <div className='Allevent_sri'>
        <div className="allevent-container">
          <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>All Events</h1>
          <div className="allevent-card-container">
            {events.map((event) => (
              <Card key={event.id} className="event-card">
                <CardContent>
                  <Grid container style={{ paddingBottom: '100px' }}>
                    <Grid item xs={5} sm={3}>
                      <CardMedia
                        component="img"
                        style={{ height: 150, width: 350, objectFit: 'scale-down' }}
                        alt={event.evenType}
                        image={event.images}
                      />
                    </Grid>
                    
                    <Grid className="gridd" item sm={6} alignItems="center" style={{ textAlign: 'left', paddingBottom: '150px', paddingLeft: '150px' }}>
                    <div className="gridd"  style={{display:'flex'}}> <div  style={{fontWeight:'bold', fontSize: '18px' }}>
                     Type: </div>
                     <div  style={{fontSize: '18px',paddingLeft:'10px'}}>{event.evenType}</div></div>
                   
                    <div className="gridd"  style={{display:'flex'}}> <div  style={{fontWeight:'bold', fontSize: '18px' }}>
                      Description:</div>
                       <div  style={{fontSize: '18px',paddingLeft:'10px'}}> {event.description}</div> </div>

                    <div className="gridd"  style={{display:'flex'}}> <div  style={{fontWeight:'bold', fontSize: '18px' }}>

                    Packages: </div>
                    <div  style={{fontSize: '18px',paddingLeft:'10px'}}>{event.eventPackages}</div></div>
                    <div className="gridd"  style={{display:'flex'}}> <div  style={{fontWeight:'bold', fontSize: '18px' }}>
                    Count:</div>
                    <div  style={{fontSize: '18px',paddingLeft:'10px'}}> {event.participantCount}</div></div>
                    <div className="gridd"  style={{display:'flex'}}> <div  style={{fontWeight:'bold', fontSize: '18px' }}>
                     Charges: </div>
                     <div  style={{fontSize: '18px',paddingLeft:'10px'}}>{event.charges}</div></div>
                  
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <br /><br /><br />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(event)}
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
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ResponsiveDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleUpdateSubmit}
        updatedEvent={updatedEvent}
        handleUpdateChange={handleUpdateChange}
      />
    </div>
  );
};

export default AllEvents;
