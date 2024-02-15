// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { useSpring, animated } from 'react-spring';
import './navabar.css'; // Import the CSS file

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
});

const AnimatedTypography = styled(animated(Typography))({
  flexGrow: 1,
  textAlign: 'center',
  '&:hover': {
    textDecoration: 'none',
    color: 'black',
    animation: `${fadeIn} 0.5s ease-in`,
  },
  color: 'black',
});

const StyledButton = styled(Button)({
  color: 'black',
  '&:hover': {
    color: '#e74c3c',
  },
});

const Navbar = ({ role }) => {
  // React Spring animations
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // State for the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Open the dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar className="navbar-container">
        <div className="navbar-left">
          <Link to="/Booking" className="navbar-brand">
            <AnimatedTypography variant="h6" className="app-title" style={springProps} textAlign="left">
              <StyledButton color="inherit" className="navbar-button">Boat Booking App</StyledButton>
            </AnimatedTypography>
          </Link>

          {/* Center Section */}
          <div className="navbar-center">
            {role === 'admin' ? (
              <> {/* Render admin navigation items here */}
              </>
            ) : (
              <> {/* Render user navigation items here */}
                <Link to="/add-booking">
                  <StyledButton color="inherit" className="navbar-button">Add Booking</StyledButton>
                </Link>
                <Link to="/view-booking">
                  <StyledButton color="inherit" className="navbar-button">View Booking</StyledButton>
                </Link>
                <Link to="/moo">
                  <StyledButton color="inherit" className="navbar-button">About us</StyledButton>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <AnimatedTypography className="navbar-user-menu" style={springProps}>
            {/* User Profile Dropdown */}
            <div>
              <Button
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="navbar-button"
              >
                <Avatar sx={{ width: 32, height: 32, marginRight: '5px' }}>
                  U
                </Avatar>
                User
              </Button>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/profile" className="navbar-button">User Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/" className="navbar-button">Logout</Link>
                </MenuItem>
              </Menu>
            </div>
          </AnimatedTypography>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
