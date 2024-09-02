import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.css';
// import Button from '@material-ui/core/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="sticky" style={{backgroundColor:"darkred" }} >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 4 }} id='Heading1' >
                 Import Hub
          </Typography>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}