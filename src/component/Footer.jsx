import React from 'react'

const Footer = () => {
  return (
    <div>
         <div style={{backgroundColor:'white'}}>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a premier event management company dedicated to making your events unforgettable. From weddings to corporate gatherings, we handle it all.
          </p>
        </div>
        
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: roshini87@partyeventmanagement.com</p>
          <p>Phone: 8148339609</p>
          <p>Coimbatore</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Party Event Management | Designed by Your Company
      </div>
    </footer>
      </div>
    </div>
  )
}

export default Footer