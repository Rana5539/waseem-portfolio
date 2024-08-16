import { Box, Typography } from '@mui/material'
import React from 'react'

import BSCS from './BSCS'
function Education() {
  return (
    <>
     <Typography
  sx={{
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '30px',
    textAlign: 'center',
    mt: 10,
  }}
  id='Edu'
>
  Education
</Typography>
<Box sx={{width:'90%',m:'auto'}}>
<Typography
  sx={{
    color: '#BEBEBE',
    fontFamily: 'Poppins',
    fontSize: '15px',
    textAlign: 'center',
    fontWeight:'300'
  }}
  
>
  My education has been a journey of self-discovered and growth. My educational details are as follows
  </Typography></Box>
  <BSCS/>
  
  
  
    </>
  )
}

export default Education