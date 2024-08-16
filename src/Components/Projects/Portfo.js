import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Project3 from './Project3'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img = require('./images/me.jpg')
const data = [{text:'React js'},
{text:'Material UI'},
{text:'JavaScript'}
]
const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'rgb(0,0,0,0.9)',
  boxShadow: 24,
  p: 3,
  borderRadius:'15px',
  border:'1px solid white',
  
};
function Portfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <div data-aos='flip-right'>
    <Box sx={{
    display:"flex", 
    m:'auto', 
    justifyContent:'space-evenly',
    mt:5,
    '@media screen and (max-width: 780px)': {
      flexDirection:'column',
      alignItems:'center'
    },}}>
        <Box sx={{
            width:'45vh', 
            height:'auto',  
            borderRadius:'15px', 
            bgcolor:'rgb(0, 3, 20)',
            boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
            cursor:'pointer',
            transition: 'transform 0.3s ease-in-out',
            pb:3,
          ':hover': {
            transform: 'translateY(-10px)'
           
          },}}
          onClick={handleOpen}
        ><Box sx={{
            width:"90%", 
            m:'auto', 
            height:'23vh', 
            mt:2, 
            borderRadius:'10px',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>

            </Box>
            <Typography sx={{
              color:'white', 
            fontFamily:'Poppins', 
            fontWeight:'300', 
            mt:2,ml:2, 
            fontSize:'18px'}}>Apnimanzil</Typography>
            <Typography sx={{
              color:'grey', 
              fontFamily:'Inria Sans',
              ml:2, 
              fontSize:'13px'}}>july 2023 - Present</Typography>
              <Typography sx={{color:'whitesmoke', fontFamily:'Poppins', fontWeight:'300', ml:2, fontSize:'15px'}}>Working on my company's product named as apnimanzil.com from last 1 year. A map based real estate portal</Typography>
              <Box sx={{m:'auto', display:'flex', justifyContent:'space-evenly',mt:2}}>
              {data.map((a)=>(
                <Box sx={{ 
                  bgcolor:"#63C5DF",
                  color:'black',
                  fontWeight:'400',
                  fontFamily:'Poppins', 
                  fontSize:'14px',
                  boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
                pl:0.8,
                pr:0.8,
                pt:0.5,
                pb:0.5,
              borderRadius:'17px'}}>{a.text}</Box>
              ))}
            </Box>
            </Box>
        <Project3/>
    </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontFamily:'Poppins',color:'white'}}>
            Portfolio
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily:'Inria Sans',color:'white'}}>
            This project is currently you are observing that is my personal portfolio and the other mentioned project is under development.
          </Typography>
        </Box>
      </Modal></div>
    </>
  )
}

export default Portfo