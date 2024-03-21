import React from "react";
import { useState } from "react";
import { Link  as RouterLink,Navigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, IconButton,Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Login(){

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate =useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/user/signin',{email,password})
        .then(result=>{console.log(result)
          navigate('/register')
        } )
        .catch(err=>console.log(err))
      }




    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>


                <form onSubmit={handleSubmit}>
                <Stack spacing={2} >

                <TextField fullWidth label='Email' placeholder="Enter your email" 
                    onChange={(e)=> setEmail(e.target.value)}
                    />

                <TextField fullWidth label='Password' type='password' placeholder="Enter your password" 
                    onChange={(e)=> setPassword(e.target.value)} />                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="register" >
                        Sign Up 
                </Link>
                </Typography>
                </Stack>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;