import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Navbar.css';
import { AppBar, Container, Toolbar, Button, ButtonGroup, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Looo from './Looo.jpg';

const Navbar = ({ onAllVenuesClick }) => {
    const Lo= useNavigate();
    const Loogin = () => {
      Lo('/signin');
    };
    const Si= useNavigate();
    const Siignin = () => {
      Si('/sign');
    };
    // const handleAllVenuesClick = () => {
    //   if (footSectionRef && footSectionRef.current) {
    //     footSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    //   }
    // };
  return (
    <div>
      <div className='imag69'>
        <div id='mynavbar'>
          <ul>
              <li></li>
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
               
                <Button style={{fontWeight:'-moz-initial',  fontSize: '20px', color: 'black', height: '40px', borderColor: 'black', width: '350px' }}>
                    <h4>PARTY EVENT MANAGEMENT</h4>
                </Button>
                </li>
              <li>
                <Button style={{  fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }}>
                  <h4>Home</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }}>
                  <h4>Dashboard</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }}     onClick={onAllVenuesClick}>
                  <h4>All Venues</h4>
                </Button>
              </li>
             
             
              <li>
               
                
                {/* <button
                  className="inline-flex justify-center items-center text-brand hover:bg-brand-over gap-[3px] rounded-10 min-h-[40px] button-md py-2 px-10 hover:bg-white text-neutral-800"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  Log in/Sign up
                </button> */}
                 <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={Loogin}>
                  <h4>Login</h4>
                </Button>
               
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={Siignin}>
                  <h4>Signup</h4>
                </Button>
           
                </ButtonGroup>
             </li>
            </div>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default Navbar;
