import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img = require('./images/Capture1.jpg')
const data = [{text:'React js'},
{text:'Material UI'},
{text:'Hubspot'}
]
function Project2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const project = 'https://build2-nu.vercel.app/'
  const onClick = () => {
    window.open(project, '_blank');
  };
  return (
    <><div data-aos='flip-left'>
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
            transform: 'translateY(-10px)',
           
          },
        '@media screen and (max-width: 780px)':{
          mt:4
        }}}
        onClick={onClick}
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
            fontSize:'18px'}}>Real Estate</Typography>
            <Typography sx={{
              color:'grey', 
              fontFamily:'Inria Sans',
              ml:2, 
              fontSize:'13px'}}>Under development</Typography>
              <Typography sx={{color:'whitesmoke', fontFamily:'Poppins', fontWeight:'300', ml:2, fontSize:'15px'}}>It is a Real Estate project where you can buy and sell your property on the other hand you can avail many services. </Typography>
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
            </Box></div>
    </>
  )
}

export default Project2