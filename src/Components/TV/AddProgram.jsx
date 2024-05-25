import React from 'react';
import { Box, Button, TextField, Typography, MenuItem } from '@mui/material';

const AddProgram = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        px={{ xs: 2, md: 8 }}
        py={{ xs: 8, md: 5 }}
        bgcolor="white"
        borderRadius={4}
        maxWidth={700}
        width="100%"
        boxShadow={3}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="black"
          align="center"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          Add Program
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
          <TextField
            label="Video URL"
            variant="outlined"
            
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          />
          <TextField
            variant="outlined"
            label="Title"
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          />
        </Box>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
          <TextField
            variant="outlined"
            label="Duration"
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          />
          <TextField
            label="Select..."
            select
            variant="outlined"
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          >
            <MenuItem value="Select...">Recommended</MenuItem>
            <MenuItem value="Select...">Popular</MenuItem>
            <MenuItem value="Select...">Featured</MenuItem>
          </TextField>
        </Box>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
          <TextField
            label="Select..."
            select
            variant="outlined"
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          >
            <MenuItem value="Select...">Recommended</MenuItem>
            <MenuItem value="Select...">Popular</MenuItem>
            <MenuItem value="Select...">Featured</MenuItem>
          </TextField>
          <TextField
            label="Select..."
            select
            variant="outlined"
            fullWidth
            sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
          >
            <MenuItem value="Select...">Recommended</MenuItem>
            <MenuItem value="Select...">Popular</MenuItem>
            <MenuItem value="Select...">Featured</MenuItem>
          </TextField>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={2}
          mt={8}
          alignSelf={{ md: 'flex-end' }}
        >
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 'bold',
              borderWidth: 2,
              borderColor: 'black',
              color: 'black',
              mb: { xs: 2, md: 0 },
              textTransform: 'capitalize', 
              fontSize: '1rem',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 'bold',
              bgcolor: 'indigo.950',
              borderWidth: 2,
              borderColor: 'indigo.950',
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
};

export default AddProgram;