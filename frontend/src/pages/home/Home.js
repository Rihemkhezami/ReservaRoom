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
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/navbar/Topbar";

function Home(){
    const [isSidebar, setIsSidebar] = useState(true);

    return(
        <div>
            <h1>Home page</h1>
        </div>
        
    )
}

export default Home;