import React from 'react';
import { Box, Typography, TextField, Button, Grid, InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        // <Box display="flex" justifyContent="center" bgcolor="white" p={2}>
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
                    <Box display="flex" flexDirection="column" px={{ xs: 2, md: 9 }} py={{ xs: 5, md: 20 }} textAlign="center">
                        <Typography variant="h2" component="div" sx={{ mt: { xs: 2, md: 8 }, mb: { xs: 1, md: 5 } }}>
                            LOGIN
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Phone number"
                            margin="normal"
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
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 4,
                                py: 2,
                                fontSize: '1.25rem',
                                bgcolor: 'black',
                                textTransform: 'capitalize',
                                borderRadius: '10px',
                                '&:hover': {
                                    bgcolor: 'black',
                                },
                            }}
                            fullWidth
                        >
                            Login
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        
    );
};

export default Login;
