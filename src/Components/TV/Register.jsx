import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleRegister = () => {
        // Mock registration logic
        // Save role to localStorage for simplicity
        localStorage.setItem('userRole', role);
        // Navigate to login page after registration
        navigate('/login');
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="black" p={2}>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
                p={2}
                width={{ xs: '90%', sm: '70%', md: '50%', lg: '40%' }}
            >
                <Grid container spacing={5} direction="column">
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="column" px={2} py={5} textAlign="center">
                            <Typography variant="h2" component="div" sx={{ mb: 5 }} color="black">
                                REGISTER
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Name"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Phone number"
                                margin="normal"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Email"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="password"
                                placeholder="Password"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Role (admin/user)"
                                margin="normal"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    mt: 2,
                                    py: 2,
                                    fontSize: '1rem',
                                    bgcolor: '#030327',
                                    textTransform: 'capitalize',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        bgcolor: '#030327',
                                    },
                                }}
                            >
                                Upload Image
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleRegister}
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
                                Register
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Register;
