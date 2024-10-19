import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Navbar.css';
import { AppBar, Container, Toolbar, Button, ButtonGroup, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Looo from './Looo.jpg';

const NavbarAdmin = () => {
    const Lo= useNavigate();
    const Logoutt = () => {
      Lo('/Logout');
    };
    const adds= useNavigate();
    const addevents= () => {
      adds('/Addeve');
    };
   
    const allevents= () => {
      adds('/Alleve');
    };
    const homee= () => {
      adds('/homee');
    };
    const Allbookad= () => {
      adds('/allbookingAd');
    };
    const payment= () => {
      adds('/payment');
    };

  return (
    <div>
      <div className='imag69'>
        <div id='mynavbar'>
          <ul>
              
            <li>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src={Looo}
                  sx={{ width: 70, height: 70 }}
                />
              </Stack>
            </li>
            <div id='mynavbars'>
                <li>
               
                </li>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
              <li>
                <Button style={{  fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={homee}>
                  <h4>Home</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={allevents}>
                  <h4>All Events</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={addevents}>
                  <h4>Add Events</h4>
                </Button>
              </li>
              
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '200px' }} onClick={Allbookad}>
                  <h4>All Bookings</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '200px' }} onClick={payment}>
                  <h4>All Payments</h4>
                </Button>
              </li>
             
             
             
              <li>
               
                
                {/* <button
                  className="inline-flex justify-center items-center text-brand hover:bg-brand-over gap-[3px] rounded-10 min-h-[40px] button-md py-2 px-10 hover:bg-white text-neutral-800"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  Log in/Sign up
                </button> */}
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={Logoutt}>
                  <h4>Logout</h4>
                </Button>
               
                
             </li>
            </div>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default NavbarAdmin;
