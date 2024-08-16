import { Box, Typography } from '@mui/material'
import React from 'react'
import Frontend from './Frontend'


function Skill() {
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
  id='skills'
>
  Skills
</Typography>
<Typography
  sx={{
    color: '#BEBEBE',
    fontFamily: 'Poppins',
    fontSize: '15px',
    textAlign: 'center',
    fontWeight:'300'
  }}
  id="skillsImage"
>
  Here are some of my skills on which i have been working 
  </Typography>
<Box sx={{
    width:'80%', 
display:'flex', 
m:'auto', 
mt:5, 
justifyContent:'space-evenly', 
alignItems:'center',
'@media screen and (max-width: 1050px)': {
 flexDirection:'column',
          },}}>
<Frontend/>

</Box>

    </>
  )
}

export default Skill