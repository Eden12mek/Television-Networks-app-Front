import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="black">
      <Grid container spacing={5} maxWidth="md" sx={{ flexWrap: { xs: 'wrap-reverse', md: 'nowrap' } }}>
        <Grid item md={16} marginTop={15} marginBottom={50}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9aaa6e809e7097514af160b70f98e8de00a39996e51d9ac5a2fd2d1ea891e4?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
            style={{ width: '100%', aspectRatio: '0.67' }}
          />
        </Grid>
        <Grid item  md={26}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={10}
            
            bgcolor="white"
            borderRadius={0}
            boxShadow={3}
          >
            <Typography variant="h3" fontWeight="bold" color="text.primary" mb={10}>
              LOGIN
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%">
              <Box display="flex" alignItems="center" gap={2} width="100%" py={2} borderRadius={2} border={1} borderColor="secondary.main">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e79e61dfc80cbf30d2aa792ec3331460a90de1c213a54a57f5fb7fcc682b06?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  style={{ width: '44px', height: '44px' }}
                />
                <Typography variant="body1">Phone number</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2} width="100%" py={2} borderRadius={2} border={1} borderColor="secondary.main" mt={3}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74b3c958cbfacf98aa6a80ce1e4c541ba3ee30548e30446e2d0815cd6856f821?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  style={{ width: '35px', height: '35px' }}
                />
                <Typography variant="body1">Password</Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%', py: 2, mt: 5, fontSize: '1.25rem', fontWeight: 'bold' }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;