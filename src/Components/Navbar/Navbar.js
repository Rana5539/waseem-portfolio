import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import LightIcon from '@mui/icons-material/Light';
import './body.css';

function Navbar() {
  
  const nav = [
    { text: 'Skills', targetId: 'skillsImage' }, 
    { text: 'Projects', targetId:'Project' },
    { text: 'Experience',targetId: 'Exp' },
    { text: 'Education',targetId: 'Edu'  }
  ];

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '90%',
          height: '9vh',
          display: 'flex',
          alignItems: 'center',
          m: 'auto',
          justifyContent: 'space-between',
          '@media screen and (max-width: 775px)': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LightIcon />
          Portfolio
        </Typography>
        <Box>
          <Box sx={{ display: 'flex' }}>
            {nav.map((data) => (
              <Link
                key={data.text}
                sx={{
                  color: 'white',
                  fontFamily: 'Inria Sans',
                  mr: 5,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'scale(1.05)',
                    transition: '0.6s',
                  },
                }}
                onClick={() => scrollToSection(data.targetId)}
              >
                {data.text}
              </Link>
            ))}
          </Box>
          
        </Box>
      </Box>
      
    </>
  );
}

export default Navbar;
