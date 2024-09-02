import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['New Imports', 'Import Procedure', 'Taxes'];


function ResponsiveAppBar() {

  return (
    <AppBar position="static" style={{backgroundColor:"grey"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          

          {/* <Box sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
            
            
          </Box> */}
          
       
          <Box sx={{ flexGrow: 4, display: { xs: 'none', sm:'block' } }}>
            
              <Button
                
                onClick={()=>window.location.href='/tax'}
                sx={{ color: 'white' }}
                style={{fontFamily: 'revert' }}
              >
               Tax 
              </Button>
              <Button
                
                onClick={()=>window.location.href='/home'}
                sx={{ color: 'white' }}
                style={{fontFamily: 'revert' }}
              >
               Home 
              </Button>
              <Button
                
                onClick={()=>window.location.href='/rules'}
                sx={{ color: 'white' }}
                style={{fontFamily: 'revert' }}
              >
               Procedure 
              </Button>
              <Button
                
                onClick={()=>window.location.href='/Register'}
                sx={{ color: 'white' }}
                style={{fontFamily: 'revert' }}
              >
               Buy 
              </Button>
              <Button
                
                onClick={()=>window.location.href='/rdata'}
                sx={{ color: 'white' }}
                style={{fontFamily: 'revert' }}
              >
               Your Car
              </Button>
          </Box>
          {/* <Button color="inherit" style={{fontFamily:'revert' }} onClick={()=>window.location.href='/signup'}>Signup</Button> */}
          
          {/* <Button color="inherit" style={{fontFamily:'revert' }} onClick={()=>window.location.href='/'}>Logout</Button> */}
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;