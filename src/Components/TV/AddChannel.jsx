import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function AddChannel() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgcolor="rgba(0, 0, 0, 0.5)"
    >
      <Box
        bgcolor="white"
        borderRadius={5}
        boxShadow={3}
        p={6}
        width="90%"
        maxWidth={800}
        height={300}
      >
        <Typography variant="h3" fontWeight="bold" mt={-4} mb={6} textAlign="center">
          Add Channel
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Typography variant="body1" fontWeight="bold" alignSelf="flex-start" sx={{ ml: 27 }}>
            Name
          </Typography>
          <TextField
            variant="outlined"
            sx={{ mr: -3, flexGrow: 1, width: '400px' }}
            margin="normal"
          />
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          mt={7}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mr: 8,
              width: '100px',
              textTransform: 'capitalize', 
              fontSize: '1rem', // Set the font size
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 3,
              width: '100px',
              textTransform: 'capitalize', 
              fontSize: '1rem', 
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddChannel;