import React, { useState } from 'react';
import { TextField, Grid, Card, Avatar, Button } from '@mui/material';
import './style.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {

  const history = useHistory();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      fullname,
      email,
      password,
    };

    axios
      .post('http://localhost:8080/adduser', data)
      .then((res) => {
        if (res.data === true) {
          history.push('/login');
        } else {
          alert('Invalid input');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred');
      });
  };

  return (
    <>
      <div className="card">
        <div className="wall-sign">
          <h1 id="creating">Create Account</h1>
          <br />
          <Grid sx={{margin:"50px", padding:"50px", textAlign: "left", marginLeft: "auto" }}>
            <Card elevation={20} align="center" sx={{padding:"50px", width:"260px", margin:"30px",backgroundColor: "rgba(255, 255, 255, 0.55)",borderRadius:"20px"  }}>
              <Avatar src="/static/images/avatar/1.jpg" sx={{backgroundColor: "rgba(0, 0, 0, 1)"}} />
              <br />
              <TextField
                fullWidth
                label="Full Name"
                type="text"
                value={fullname}
                onChange={handleFullnameChange}
                sx={{margin:"10px"}}
              />
              <br />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
               sx={{margin:"10px"}}
              />
              <br />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                sx={{margin:"10px"}}
              />
              <br />
              <Button onClick={handleSubmit}>Sign up</Button>
              <br />
              <text>Already have an account?</text>
              <br />
              <Button onClick={() => history.push('/login')}>Log in</Button>
            </Card>
          </Grid>
        </div>
      </div>
    </>
  );
}
