import { Typography } from '@mui/material'
import React from 'react'
import Inter from './Inter'
import Fiverr from './Fiverr'

function Expr() {
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
  id = 'Exp'
>
  Experience
</Typography>
<Typography
  sx={{
    color: '#BEBEBE',
    fontFamily: 'Poppins',
    fontSize: '15px',
    textAlign: 'center',
    fontWeight:'300'
  }}
>
  My work experience as a software engineer and working on different companies and projects
  </Typography>
 
  <Fiverr/>
  <Inter/>
    </>
  )
}

export default Expr