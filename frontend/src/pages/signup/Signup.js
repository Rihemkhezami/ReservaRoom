import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Box from '@mui/material/Box';



const Signup = () => {

    const [firstname,setFirstname]=useState()
    const [lastname,setLastname]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/user/signup',{firstname,lastname,phone,email,password})
        .then(result=>{console.log(result)
          navigate('/')
        } )
        .catch(err=>console.log(err))
      }




    const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid style={{marginTop:20}}>

            <Paper style={paperStyle}>
            
                <Grid align='center' paddingBottom={2}>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>

                <form onSubmit={handleSubmit}>

                <Stack spacing={2} >

                <Box display="flex" >
                    <TextField  label='First Name' placeholder="Enter your name"  style={{ flex: 1, marginRight: '8px' }}
                    InputProps={{startAdornment: (<InputAdornment position="start"><Person2OutlinedIcon /></InputAdornment>),}} 
                    onChange={(e)=> setFirstname(e.target.value)} />
                    
                    <TextField  label='Last Name' placeholder="Enter your name" style={{ flex: 1 }}  
                    InputProps={{startAdornment: (<InputAdornment position="start"><Person2OutlinedIcon /></InputAdornment>),}}  
                    onChange={(e)=> setLastname(e.target.value)} />
                    </Box>
                    

                    <TextField fullWidth label='Email' placeholder="Enter your email" 
                    InputProps={{startAdornment: (<InputAdornment position="start">< MailOutlineIcon /></InputAdornment>), }}
                    onChange={(e)=> setEmail(e.target.value)}
                    />

                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"
                    InputProps={{startAdornment: (<InputAdornment position="start"><PhoneIcon /></InputAdornment>),}} 
                    onChange={(e)=> setPhone(e.target.value)}
                         />

                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password" 
                    onChange={(e)=> setPassword(e.target.value)} />
                    <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password"/>
                    
                    <Button type='submit' variant='contained' color='primary'>
                        Sign up
                    </Button>
                    
                    </Stack>
                
                </form>
                
            </Paper>
        </Grid>
    )
}

export default Signup;