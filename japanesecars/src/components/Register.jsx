

import React, { useState } from 'react';
import SubAppBar from "./SubAppBar";
import './style.css';
import { Grid, Card, Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    brand: "",
    model: "",
    method: "",
    country: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveCar", user);
    history.push("/");
  };

  return (
    <>
      <SubAppBar />
      <div className="wall-r">
        <h1 id="reg">Fullfill Your Dreams!</h1>
        <Grid sx={{ margin: "50px", padding: "50px", textAlign: "left", marginLeft: "auto" }}>
          <Card elevation={20} align="center" className='cardstyle'>
            <form style={{marginLeft:50,marginRight:50}} onSubmit={(e) => onSubmit(e)}>
            <TextField sx={{margin:"10px"}} fullWidth label="Full Name" type="text" value={user.name} onChange={onInputChange} name="name" />

              <br />
              {/* <TextField sx={{ margin: "10px" }} fullWidth label="Car Brand" type="text"> */}
                <div><input
                  type="text"
                  value={user.brand}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter car brand"
                  name="brand"
                /></div>
              {/* </TextField> */}
              <br />
              {/* <TextField sx={{ margin: "10px" }} fullWidth label="Car Model" type="text"> */}
               <div><input
                  type="text"
                  value={user.model}
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter your model'
                  name="model"
                /></div>
              {/* </TextField> */}
              <br />
              {/* <TextField sx={{ margin: "10px" }} fullWidth label="Shipping Method" type="text"> */}
               <div> <input
                  type="text"
                  value={user.method}
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter shipping method'
                  name="method"
                /></div>
              {/* </TextField> */}
              <br />
              {/* <TextField sx={{ margin: "10px" }}  fullWidth label="Country" type="text"> */}
               <div>
                <input
                  type="text"
                  value={user.country}
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter Country'
                  name="country"
                />
                </div>
              {/* </TextField> */}
              <br />
              <br />
              <Button type="submit">Register</Button>
            </form>
          </Card>
        </Grid>
      </div>
    </>
  );
}
