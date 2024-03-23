import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';



export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        axios.get('http://localhost:3002/users/')
          .then(response => {
            setUsers(response.data);
            const numberOfUsers = response.data.length;
            console.log('Nombre d\'utilisateurs:', numberOfUsers);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };




  return (
    <div>
      <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Create New User
              </Button>
            </Box>
    <TableContainer component={Paper} style={{marginLeft:"20px",marginTop:"40px"}} border={2}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.email}
            
            >
              <TableCell align="left">{user.firstname}</TableCell>
              <TableCell align="left">{user.lastname}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="center">
              
              <IconButton type="button" >
                    <EditOutlinedIcon color='success' />
              </IconButton>
                    
              
              <IconButton type="button" >
                    <DeleteOutlinedIcon color='error' />
              </IconButton>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}