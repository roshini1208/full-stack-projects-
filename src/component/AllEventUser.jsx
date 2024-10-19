import React, { useState, useEffect } from 'react';
import './AllEventUser.css';
import NavbarUser from './NavbarUser';
import { Button, Card, CardContent, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AllEventUser = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch events from the backend
    fetch('http://localhost:8080/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleBooking = async (event) => {
    try {
      await fetch(`http://localhost:8080/api/events/${event.id}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // After booking, navigate to the MyBooking page
      navigate('/Mybookingg');
    } catch (error) {
      console.error('Error booking event:', error);
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className='Alleventuser_sri'>
        <div className="allevent-container">
          <h1>All Events</h1>
          <div className="allevent-card-container">
            {events.map((event) => (
              <Card key={event.id} className="event-card">
                <CardContent>
                  <Grid container style={{ paddingBottom: '100px' }}>
                    <Grid item xs={5} sm={3}>
                      <CardMedia
                        component="img"
                        style={{ height: 150, width: 350, objectFit:'scale-down' }}
                        alt={event.evenType}
                        image={event.images}  // Make sure this prop is set correctly
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

                    <Grid item xs={12} sm={3} style={{  }}>
                      <br />
                      <br />
                      <br />
                      {event.booked ? (
                        <Button variant="contained" disabled>Booked</Button>
                      ) : (
                        <Button variant="contained" onClick={() => handleBooking(event)}>Book</Button>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventUser;
