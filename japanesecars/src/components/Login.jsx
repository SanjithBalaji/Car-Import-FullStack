import React, { useState } from 'react'
import {TextField,Grid,Card,Avatar,Button} from '@mui/material';
import './style.css';
import { useHistory } from 'react-router-dom';
// import ButtonAppBar from './ButtonAppBar';
import axios from 'axios';

export default function Login()  {

  const history=useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/validate/${email}/${password}`
      );
      
      if (response.data === true) {
        console.log('Successfully logged in');
        history.push('/allanimals');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
   }
  };
    return (
      <>
      
      <div className="card">
        <div 
        className='wall-cont'>
        <h1 id="creating-l">Welcome Back!</h1>
        <br/>
        <Grid style={{margin:"50px", padding:"50px", textAlign: "right", marginRight: "auto" }}>
          <Card elevation={20} align="center" style={{padding:"50px", width:"260px", margin:"30px",backgroundColor: "rgba(255, 255, 255, 0.55)",borderRadius:"20px" }}>
          <Avatar src="/static/images/avatar/1.jpg" sx={{backgroundColor: "rgba(0, 0, 0, 1)"}}/>
          <br/>
          <TextField style={{margin:"10px"}} fullwidth label="Email" type={"email"} onChange={handleEmailChange}/>
          <br/>
          <TextField style={{margin:"10px"}} fullwidth label="Password" type={"password"} onChange={handlePasswordChange} />
          <br/>
          <Button onSubmit={handleSubmit}>Login</Button>
          <br/>
          <text>Don't have an account?</text>
          <br/>
          <Button onClick={()=>window.location.href='/signup'} >Sign up</Button>
          </Card>
        </Grid>
          
      </div>
      </div>
      </>
    );
  }

