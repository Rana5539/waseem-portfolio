import { Box, Button, SnackbarContent, Typography } from '@mui/material'
import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const pdfUrl = require('./pdf/waqar.pdf')
const handleButtonClick = () => {
  window.open(pdfUrl, '_blank');
};
function About() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
    <Box sx={{width:'90%', m:'auto', display:'flex', justifyContent:'space-evenly', mt:10, alignItems:'center', '@media screen and (max-width: 1000px)': {
            flexDirection:'column',
            mt:1 
          },}}>
             <Box
  sx={{
    width: '45vh',
    height: '45vh',
    bgcolor: '#63C5DA',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px 5px #63C5DA',
    '@media screen and (max-width: 1000px)': {
      mt:3, 
      width:'35vh',
      height:'35vh',
    },
    '@media screen and (min-width: 1000px)':{
      display:'none'
    }
  }}
  className='bg'
>
</Box>
        <Box sx={{width:'50%','@media screen and (max-width: 1000px)': {
            textAlign:'center', 
            mt:2,
            width:'100%'
          },}}>
            <Typography sx={{color:'white', fontFamily:'Poppins', fontSize:'45px'}}>Hi, I am </Typography>
            <Typography sx={{color:'white', fontFamily:'Poppins', fontSize:'35px',lineHeight:1}}>Muhammad Waseem </Typography>
            <Typography sx={{color:'#63C5DA', fontFamily:'Inria Sans'}}>Full Stack Developer</Typography>
            <Typography sx={{color:'#BEBEBE', fontFamily:'Poppins', fontWeight:'300', fontSize:'14px',mt:1}}>I am a motivated and versatile individual, always eager to take new challenges. With a passion for learning. I am a dedicated individual for web development, With a positive attitude and a  mindset of growing fast, i am ready to make a meaningful contribution and achieve great things. I always try to achieve 100% efficiency and accuracy in my work to impress my clients. To know further more about me contact me , check out my proven projects or scroll down  </Typography>
            <Box sx={{mt:2, display:'flex','@media screen and (max-width: 1000px)': {
 justifyContent:'space-evenly',
          },}}>
                <Button variant='outlined' sx={{color:'white', fontFamily:'Poppins', borderColor:'#63C5DA',textTransform:'none', fontWeight:'300'}}onClick={handleClick}>Hire me!</Button>
                <Button variant='outlined' sx={{color:'black', fontFamily:'Poppins', bgcolor:'#63C5DA', ml:2,textTransform:'none', ':hover':{bgcolor:'#63C5DA'}}} onClick={handleButtonClick}>Check Resume</Button>
            </Box>
        </Box>
        <Box
  sx={{
    width: '45vh',
    height: '45vh',
    bgcolor: '#63C5DA',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px 5px #63C5DA',
    '@media screen and (max-width: 1000px)': {
      display:'none'
    },
  }}
  className='bg'
>
</Box>
    </Box>
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <SnackbarContent
        message={
          <Typography variant="body1" style={{ fontFamily: 'Poppins', fontSize:'13px' }}>
            Scroll down to access my social media
          </Typography>
        }
        action={action}
      />
    </Snackbar>
    </>
    
  )
}

export default About