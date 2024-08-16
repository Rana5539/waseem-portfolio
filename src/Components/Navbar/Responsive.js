import React from 'react'
import LightIcon from '@mui/icons-material/Light';
import {  Box, Typography } from '@mui/material'
import Drwr from "./Drwr"
function Responsive() {
  return (
    <>
    <Box sx={{
        display: 'flex',
        justifyContent:'space-between',
        mt:1,
        ml:2,
        '@media screen and (min-width: 778px)': {
            display: 'none', 
          },}}>
            
    <Typography sx={{
        color:'white', 
        fontFamily:'Poppins', 
        fontSize:'20px', 
        display:'flex', 
        alignItems:'center',
       
        }}><LightIcon/>Portfolio</Typography>
        <Drwr/>
        </Box>
    </>
  )
}

export default Responsive