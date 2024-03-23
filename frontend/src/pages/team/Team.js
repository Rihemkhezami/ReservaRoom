import React, { useState, useEffect } from 'react';
//import SideBar from '@/components/admin/SideBar';
//import NavBar from '@/components/employe/NavBar';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  Card,
  CardActions,
  CardContent,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Container
} from '@mui/material';
import { mdiPencil, mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';

function Team() {
  const [dialog, setDialog] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [headers] = useState([
    { title: 'ID', align: 'left', sortable: false, field: 'id' },
    { title: 'First Name', field: 'firstname' },
    { title: 'Last Name', field: 'lastname' },
    { title: 'phone', field: 'phone' },
    { title: 'Email', field: 'email' },

  ]);
  const [users, setUsers] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [editedItem, setEditedItem] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [defaultItem] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

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
        setUsers(defaultItem);
        console.error('Error fetching data:', error);
      });
  };

  const editItem = (item) => {
    setEditedIndex(users.indexOf(item));
    setEditedItem({ ...item });
    setDialog(true);
  };

  const deleteItem = (item) => {
    setEditedIndex(users.indexOf(item));
    setEditedItem({ ...item });
    setDialogDelete(true);
  };

  const deleteItemConfirm = () => {
    const updatedUsers = [...users];
    updatedUsers.splice(editedIndex, 1);
    setUsers(updatedUsers);
    closeDelete();
  };

  const close = () => {
    setDialog(false);
    setEditedItem({ ...defaultItem });
    setEditedIndex(-1);
  };

  const closeDelete = () => {
    setDialogDelete(false);
    setEditedItem({ ...defaultItem });
    setEditedIndex(-1);
  };

  const save = () => {
    const updatedUsers = [...users];
    if (editedIndex > -1) {
      updatedUsers[editedIndex] = { ...editedItem };
    } else {
      updatedUsers.push({ ...editedItem });
    }
    setUsers(updatedUsers);
    close();
  };

  const formTitle = () => {
    return editedIndex === -1 ? 'New Item' : 'Edit Item';
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Users</Typography>
          <Divider orientation="vertical" flexItem />
          <IconButton edge="end" color="primary" onClick={() => setDialog(true)}>
            New Item
          </IconButton>
        </Toolbar>
      </AppBar>
{/*firstname,lastname,phone,email*/}
      <Dialog open={dialog} onClose={close} maxWidth="sm" fullWidth>
        <DialogTitle>{formTitle()}</DialogTitle>
        <DialogContent>
          <TextField
            label="ID"
            value={editedItem.id}
            onChange={(e) => setEditedItem({ ...editedItem, id: e.target.value })}
          />
          <TextField
            label="First Name"
            value={editedItem.firstname}
            onChange={(e) => setEditedItem({ ...editedItem, firstname: e.target.value })}
          />
          <TextField
            label="Last Name"
            value={editedItem.lastname}
            onChange={(e) => setEditedItem({ ...editedItem, lastname: e.target.value })}
          />
          <TextField
            label="phone"
            value={editedItem.phone}
            onChange={(e) => setEditedItem({ ...editedItem, phone: e.target.value })}
          />
        
          <TextField
            label="Email"
            value={editedItem.email}
            onChange={(e) => setEditedItem({ ...editedItem, email: e.target.value })}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">Cancel</Button>
          <Button onClick={save} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={dialogDelete} onClose={closeDelete}>
        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
        <DialogActions>
          <Button onClick={closeDelete} color="primary">Cancel</Button>
          <Button onClick={deleteItemConfirm} color="primary">OK</Button>
        </DialogActions>
      </Dialog>

      <Container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableCell key={header.title} align={header.align}>{header.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  {headers.map(header => (
                    <TableCell key={header.title}>{user[header.field]}</TableCell>
                  ))}
                  <TableCell>
                    <IconButton onClick={() => editItem(user)}>
                      <Icon path={mdiPencil} size={0.7} />
                    </IconButton>
                    <IconButton onClick={() => deleteItem(user)}>
                      <Icon path={mdiDelete} size={0.7} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Team;