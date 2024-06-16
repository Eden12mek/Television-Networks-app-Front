import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
    const validatePhoneNumber = (phoneNumber) => /^[0-9]+$/.test(phoneNumber);

    const handleRegister = async (event) => {
        event.preventDefault();

        if (!name) {
            setErrorMessage('Name is required.');
            return;
        }
        if (!validateName(name)) {
            setErrorMessage('Name must contain only letters.');
            return;
        }
        if (!phoneNumber) {
            setErrorMessage('Phone number is required.');
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setErrorMessage('Phone number must contain only digits.');
            return;
        }
        if (!email) {
            setErrorMessage('Email is required.');
            return;
        }
        if (!email.endsWith('@gmail.com')) {
            setErrorMessage('Email must be a @gmail.com address.');
            return;
        }
        if (!password) {
            setErrorMessage('Password is required.');
            return;
        }
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }
        if (!role) {
            setErrorMessage('Role is required.');
            return;
        }
        if (!image) {
            setErrorMessage('Image is required.');
            return;
        }

        const formData = new FormData();
        formData.append('username', name);
        formData.append('phoneNum', phoneNumber);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4000/ums/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Assuming response.data.imageUrl is returned after successful registration
            const imageUrl = response.data.imageUrl;
            // Save role to localStorage for simplicity
            localStorage.setItem('userRole', role);
            localStorage.setItem('userImage', imageUrl);
            // Navigate to login page after registration
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh" bgcolor="black" p={6.05}>
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
                            <form onSubmit={handleRegister}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Name"
                                    margin="normal"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ mb: 2 }}
                                    error={!name || (!!errorMessage && !validateName(name))}
                                    helperText={!name ? 'Name is required.' : (errorMessage && !validateName(name) ? 'Name must contain only letters.' : '')}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Phone number"
                                    margin="normal"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    sx={{ mb: 2 }}
                                    error={!phoneNumber || (!!errorMessage && !validatePhoneNumber(phoneNumber))}
                                    helperText={!phoneNumber ? 'Phone number is required.' : (errorMessage && !validatePhoneNumber(phoneNumber) ? 'Phone number must contain only digits.' : '')}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Email"
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ mb: 2 }}
                                    error={!email || (!!errorMessage && !email.endsWith('@gmail.com'))}
                                    helperText={!email ? 'Email is required.' : (errorMessage && !email.endsWith('@gmail.com') ? 'Email must be a @gmail.com address.' : '')}
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
                                    error={!password || (!!errorMessage && password.length < 8)}
                                    helperText={!password ? 'Password is required.' : (errorMessage && password.length < 8 ? 'Password must be at least 8 characters long.' : '')}
                                />
                                <Select
                                    fullWidth
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    label="Role"
                                    sx={{ mb: 2 }}
                                    error={!role || (!!errorMessage && !role)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="user">User</MenuItem>
                                </Select>
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
                                {errorMessage && (
                                    <Typography color="error" sx={{ mt: 2 }}>
                                        {errorMessage}
                                    </Typography>
                                )}
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
                                    Register
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Register;
