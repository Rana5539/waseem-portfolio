import { Box } from '@mui/material';
import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Frontend() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in">
        <Box
          sx={{
            p: 3,
            width: 'auto',
            height: 'auto',
            bgcolor: 'rgb(0, 3, 20)',
            border: '1px dashed #63C5DA',
            boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
            borderRadius: '15px',
            alignItems: 'center',
            '@media screen and (max-width: 500px)': {
              width: '42vh',
              
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <img width="100" height="auto" src="https://img.icons8.com/nolan/html-5.png" alt="html-5"/>
            <img width="100" height="auto" src="https://img.icons8.com/nolan/css3.png" alt="css3"/>
            <img width="100" height="auto" src="https://img.icons8.com/nolan/react-native.png" alt="react-native"/>
            <img width="100" height="auto" src="https://img.icons8.com/nolan/javascript.png" alt="javascript"/>
            


           
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              
              mt: 2,
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <img width="100" height="auto" src="https://img.icons8.com/color/mongodb.png" alt="mongodb"/>
<img width="100" height="auto" src="https://img.icons8.com/fluency/tailwind_css.png" alt="tailwind_css"/>
<img width="100" height="auto" src="https://img.icons8.com/color/figma--v1.png" alt="figma--v1"/>
<img width="100" height="auto" src="https://img.icons8.com/color/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>         
</Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap:1,
              mt: 2,
              justifyContent: 'center',
              
            }}
          >
           <img width="100" height="auto" src="https://img.icons8.com/color/material-ui.png" alt="material-ui"/>
<img width="90" height="auto" src="https://img.icons8.com/nolan/git.png" alt="git"/>
<img width="100" height="auto" src="https://img.icons8.com/nolan/github.png" alt="github"/>
<img width="100" height="auto" src="https://img.icons8.com/color/redux.png" alt="redux"/>

          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap:1,
              mt: 2,
              justifyContent: 'center',
              
            }}
          >
    
<img width="100" height="auto" src="https://img.icons8.com/nolan/64/node-js.png" alt="node-js"/>
<img width="100" height="auto" src="https://img.icons8.com/nolan/64/sql.png" alt="sql"/>
<img width="100" height="auto" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js"/>
<img width="100" height="auto" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript--v1"/>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Frontend;
