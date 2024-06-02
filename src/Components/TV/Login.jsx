import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, InputAdornment, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   

const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3000/login', {
            phoneNum: phoneNumber,
            password: password
        });

        const { access_token, foundUser } = response.data;

        // Store the token and user information as needed
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('userRole', foundUser.role); // assuming `role` is part of `foundUser`

        if (foundUser.role === 'admin') {
            navigate('/dashboard');
        } else if (foundUser.role === 'user') {
            navigate('/channel');
        } else {
            alert('Invalid credentials');
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert(error.response.data.message);
        } else if (error.response && error.response.status === 401) {
            alert('Wrong password');
        } else {
            alert('Server error');
        }
    }
};


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
            bgcolor="black"
            p={6.05}
        >
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
                p={20}
                mt={-13}
                
                width={{ xs: '90%', sm: '70%', md: '50%', lg: '40%' }}
            >
                <Grid container spacing={5} direction={{ xs: 'column', md: 'row' }}>
                    <Grid item xs={12} md={6}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c593d0384434ac840e3963fa4f135d9b823fd6cc2a1a51ef3d16a63ed5c6f353?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                            style={{ width: '100%', aspectRatio: '0.67' }}
                            alt="Login illustration"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" px={{ xs: 2, md: 3 }} py={{ xs: 5, md: 8 }} textAlign="center">
                            <Typography variant="h2" component="div" sx={{ mt: { xs: 2, md: 8 }, mb: { xs: 1, md: 5 } }} color="black">
                                LOGIN
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Phone number"
                                margin="normal"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderRadius: '10px',
                                        },
                                        '& .MuiInputBase-input': {
                                            fontSize: '1.25rem',
                                            color: 'black',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="password"
                                placeholder="Password"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderRadius: '10px',
                                        },
                                        '& .MuiInputBase-input': {
                                            fontSize: '1.25rem',
                                            color: 'black',
                                        },
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLogin}
                                sx={{
                                    mt: 4,
                                    py: 2,
                                    fontSize: '1.25rem',
                                    bgcolor: '#030327',
                                    textTransform: 'capitalize',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        bgcolor: '#030327',
                                    },
                                }}
                                fullWidth
                            >
                                Login
                            </Button>
                            <Typography variant="h5" color="black" sx={{ mt: 2 }}>
                                Don't have an account?{' '}
                                <Link href="/register" sx={{ color: '#0b0b3b', textDecoration: 'none' }}>
                                    Create account
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Login;
