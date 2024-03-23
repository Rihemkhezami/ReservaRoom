import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, useTheme,Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3002/reservation/');
          const reservations= await Promise.all(response.data.map(async (reservation) => {
            const userEmail = await fetchUserEmail(reservation.userId);
            const salleNom = await fetchSalle(reservation.salleId);
            return { ...reservation, userEmail,salleNom };
          }));
        
          setReservations(reservations);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchUserEmail = async (userId) => {
        try {
          const response = await axios.get(`http://localhost:3002/user/${userId}`);
          return response.data.email;
        } catch (error) {
          console.error('Error fetching user email:', error);
          return ''; // Retourne une chaîne vide en cas d'erreur
        }
      };

      const fetchSalle = async (salleId) => {
        try {
          const response = await axios.get(`http://localhost:3002/salle/${salleId}`);
          return response.data.nom;
        } catch (error) {
          console.error('Error fetching user email:', error);
          return ''; // Retourne une chaîne vide en cas d'erreur
        }
      };

  return (
    <div>
    <TableContainer component={Paper} style={{marginLeft:"20px",marginTop:"40px"}} border={2}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">User</TableCell>
            <TableCell align="center">Salle</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">End Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow
              key={reservation._id}
            >
              <TableCell align="left">{reservation.title}</TableCell>
              <TableCell align="left">{reservation.userEmail}</TableCell>
              <TableCell align="center">{reservation.salleNom}</TableCell>
              <TableCell align="center">{reservation.datedebut}</TableCell>
              <TableCell align="center">{reservation.datefin}</TableCell>
              <TableCell align="center">
              <Button color="primary" variant="text" >
        Cancel
      </Button>
      <Button color="error" variant="text" >
        Refuse
      </Button>
      <Button color="success" variant="text" >
        Accept
      </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
