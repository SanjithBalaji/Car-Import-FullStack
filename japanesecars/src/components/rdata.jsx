import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';
import SubAppBar from './SubAppBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function RegisterData(){
  const history=useHistory();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getCar");
    setUsers(result.data);
    console.log(result.data)
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteCar/${id}`);
    loadUsers();
  };

  return (
    <>
    <SubAppBar />
    <div className="wall-rd">
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2, bgcolor: 'rgba(204, 86, 86, 1)', color: 'white' } }}>
            <td>Car Id</td>
            <td>Your name</td>
            <td>Car Brand</td>
            <td>Car Model</td>
            <td>Shipping Method</td>
            <td>Country</td>
            <td>EDIT</td>
            <td>DELETE</td>
          </TableRow>
        </TableHead>
        
        <tbody>
          {users.map((user, index) => (
            <TableRow >
              
              <TableCell component="th" scope="row" align="center">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center"> {user.brand}</TableCell>
              <TableCell align="center"> {user.model}</TableCell>
              <TableCell align="center"> {user.method}</TableCell>
              <TableCell align="center"> {user.country}</TableCell>
              <TableCell align="center">
                <input
                  type="submit"
                  id="one"
                  onClick={() => history.push("/edit", { state: { id: user.id } })}
                  value="EDIT"
                ></input>
              </TableCell>
              <TableCell align="center">
              <input
              type="submit"
              id="one"
              onClick={() => deleteUser(user.id)} 
              value="DELETE"
            ></input>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      </TableContainer>
      </Card>
      </div>
    </>
  );
}


