import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'




const theme = createTheme();

export default function Login() {
 
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
 
const navigate=useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("Fill all fields");
      return;
    }
    

   
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
       
        
        navigate("/account");
      })
      .catch((err) => {
        toast.error("user not exist please register")
        navigate("/register")
      });
      
  };


  return (
    <div className='login' >
      <a href='/register'><Button><ArrowBackIosNewIcon/></Button></a>Go to registration
    <motion.div theme={theme} initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Login Form
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              value={email}
                  onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
                  onChange={(e)=>setPassword(e.target.value)}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onsubmit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </motion.div>
    </div>
  );
}