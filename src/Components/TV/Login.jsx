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

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/ums/login', { 
                phoneNum: phoneNumber, // Correct key name
                password
            });
            console.log(response.data);

            // Assuming response contains access_token and user data
            if (response.data.access_token) {
                localStorage.setItem('userRole', response.data.foundUser.role); // Assuming user object has a role property
                localStorage.setItem('accessToken', response.data.access_token);
                
                if (response.data.foundUser.role === 'admin') {
                    navigate('/dashboard');
                } else if (response.data.foundUser.role === 'user') {
                    navigate('/mainlayout');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Invalid credentials');
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
                            <form onSubmit={handleLogin}>
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
                                    type="submit"
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
                            </form>
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
