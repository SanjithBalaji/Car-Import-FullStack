import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import SubAppBar from './SubAppBar';


export default function EditUser() {
const history=useHistory();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    brand: "",
    model: "",
    method: "",
    country: "",
  });

  const { name, brand, model, method, country } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateCar/${id}`, user);
    history.push("/");
  };
  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/getCar/${id}`);
    setUser(result.data);
  };
  
  

  return (
    <>
      <SubAppBar />
      <div className="wall-r">
      <h1 id="reg">Fullfill Your Dreams!</h1>
        <Grid sx={{margin:"50px", padding:"50px", textAlign: "left", marginLeft: "auto" }}>
          <Card elevation={20} align="center" className='cardstyle'>

            <form onSubmit={(e) => onSubmit(e)}>
            <TextField sx={{margin:"10px"}} fullWidth label="Car id" type="number" value={id} onChange={onInputChange} name="id" />
            <TextField sx={{margin:"10px"}} fullWidth label="Full Name" type="text" value={name} onChange={onInputChange} name="name" />
            <TextField sx={{margin:"10px"}} fullWidth label="Car Brand" type="text" value={brand} onChange={onInputChange} name="brand" />
            <TextField sx={{margin:"10px"}} fullWidth label="Car Model" type="text" value={model} onChange={onInputChange} name="model" />
            <TextField sx={{margin:"10px"}} fullWidth label="Shipping Method" type="text" value={method} onChange={onInputChange} name="method" />
            <TextField sx={{margin:"10px"}} fullWidth label="Country" type="text" value={country} onChange={onInputChange} name="country" />

            <br/>
            <br/>
            <Button type="submit">Apply Changes</Button>
            </form>
          </Card>
        </Grid>
      </div>
    </>
  );

}