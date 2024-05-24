import React from 'react';
import { Box, Button, Grid, Paper, Typography, TextField, InputAdornment } from "@mui/material";
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="black">
      <Grid container>
        {/* Left side with logo and text */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" bgcolor="black" color="white" p={2}>
          <Box textAlign="center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9aaa6e809e7097514af160b70f98e8de00a39996e51d9ac5a2fd2d1ea891e4?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
              alt="Logo"
              style={{ width: '100px', marginBottom: '20px' }}
            />
            <Typography variant="h4" component="h1">
              T-Movie
            </Typography>
          </Box>
        </Grid>
        {/* Right side with login form */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <Paper elevation={3} sx={{ p: 4, bgcolor: 'white', maxWidth: '400px', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
              LOGIN
            </Typography>
            <TextField
              label="Phone number"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 4 }}
            />
            <Link to="/dashboard">
                <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1.5, fontSize: '1rem' }}
                >
                Login
                </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
