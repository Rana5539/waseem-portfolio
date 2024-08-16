import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img = require('./images/dhives.jpg')
function Fiverr() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <><div data-aos='fade-up'>
    <Box sx={{width:'60%', 
    height:'auto', 
    border:'1px dashed #63C5DA', 
    borderRadius:'15px',
    bgcolor:'rgb(0, 3, 20)',
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
    m:'auto',
    pb:1,
    mt:5,
    '@media screen and (max-width: 1000px)': {
 width:'80%',
          },}}>
   <Box sx={{width:'95%', m:'auto',mt:1.5, display:'flex'}}>
   <img src={img} width="80" alt="" style={{borderRadius: '50%', overflow: 'hidden'}}/>
        <Box sx={{ml:1}}>
            <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'300'}}>Full stack Developer</Typography>
            <Typography sx={{color: 'grey', fontSize:'15px', fontFamily:'Inria Sans', lineHeight:1}}>DHives</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans'}}>June 2023 - Present</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans'}}>Onsite</Typography>
        </Box>
        
   </Box>z
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, mr:0.5 }}> Working as a Full Stack Developer on thier product named as apnimanzil.com.</Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, display:'flex'}}>Skills  <Typography sx={{ml:1, fontFamily:'Inria Sans', fontWeight:'200', color:'grey'}}>React , Express, Node , JavaScript , Git & Github , Material UI, TypeScript</Typography></Typography>
    </Box></div>
    </>
  )
}

export default Fiverr