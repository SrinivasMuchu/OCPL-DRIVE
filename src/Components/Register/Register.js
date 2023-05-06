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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import {motion} from "framer-motion"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";




const theme = createTheme();

export default function Register() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  // const navigate=useNavigate()

  // const [nameError, setNameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   // Name validation: name cannot be empty and must contain only letters and spaces
  //   if (formData.name.trim() === '') {
  //     setNameError('Name is required');
  //     return;
  //   } else if (!/^[a-zA-Z ]+$/.test(formData.name.trim())) {
  //     setNameError('Name can only contain letters and spaces');
  //     return;
  //   } else {
  //     setNameError('');
  //   }

  //   // Email validation: email must be a valid email address
  //   if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
  //     setEmailError('Invalid email address');
  //     return;
  //   } else {
  //     setEmailError('');
  //   }

  //   // Phone number validation: phone number must contain only digits and must be 10 characters long
  //   if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
  //     setPhoneError('Phone number must be 10 digits long');
  //     return;
  //   } else {
  //     setPhoneError('');
  //   }

  //   // Password validation: password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
  //   if (formData.password.length < 8 ) {
  //     setPasswordError('Password must be at least 8 characters long ');
  //     return;
  //   } else {
  //     setPasswordError('');
  //   }


  //   // Save form data to local storage
  //   localStorage.setItem('name', formData.name);
  //   localStorage.setItem('email', formData.email);
  //   localStorage.setItem('phoneNumber', formData.phoneNumber);
  //   localStorage.setItem('password', formData.password);

  //   toast.success('Registration successfull');
  //   toast.success('Please Login');
  //   navigate("/login")
  //   // redirect to login page or perform any other action
  //   const userDetails = {
  //     name: formData.name,
  //     email: formData.email,
  //     phoneNumber: formData.phoneNumber,
  //     password: formData.password
  //   };
  //   console.log(userDetails);
  // };
const[name,setName]=useState("")
const[phoneNumber,setPhoneNumber]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
  // const { registerUser } = useUserContext();


  
const navigate=useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password ||!phoneNumber) {
      toast.warn("Fill all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
       
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/account");
      })
      .catch((err) => {
        toast.error("user already exists please login")
        navigate("/login")
      });

    
  };
  return (
    <div className='register'>
      <div className='arrows'>
        <div className='back'><a href='/'><Button><ArrowBackIosNewIcon/></Button></a> Home</div>
        
        <div className='forward'>Signin<a href='/login'><Button><ArrowForwardIosIcon/></Button></a></div>
        
      </div>
      <motion.div className='here'
         initial={{ y: -10 }}
         animate={{ y: 10 }}
         transition={{
           type: "smooth",
           repeatType: "mirror",
           duration: 2,
           repeat: Infinity,
         }}>
          <KeyboardDoubleArrowDownRoundedIcon/>
          <p>Register here</p>
          </motion.div>
      <motion.ThemeProvider theme={theme} initial={{ opacity: 0, x: -50 }}
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
            Register Here
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  type='text'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                 
                />
                {/* {nameError && <p>{nameError}</p>} */}
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  type='number'
                  id="Phone-Number"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="off"
                  value={phoneNumber}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  className='numbers'
                  
                />
                 {/* {phoneError && <p>{phoneError}</p>} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  type='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                {/* {emailError && <p>{emailError}</p>} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                 
                />
                {/* {passwordError && <p>{passwordError}</p>} */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onsubmit}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </motion.ThemeProvider>
    </div>
  );
}