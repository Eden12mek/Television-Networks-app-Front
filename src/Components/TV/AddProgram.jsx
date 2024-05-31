import React from 'react';
import { Box, Button, TextField, Typography, MenuItem, Modal } from '@mui/material';

const AddProgram = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-program-modal-title"
      aria-describedby="add-program-modal-description"
    >
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
              label="Category"
              select
              variant="outlined"
              fullWidth
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              <MenuItem value="Recommended">Recommended</MenuItem>
              <MenuItem value="Popular">Popular</MenuItem>
              <MenuItem value="Featured">Featured</MenuItem>
            </TextField>
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
            <TextField
              label="Channel"
              select
              variant="outlined"
              fullWidth
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              <MenuItem value="Channel 1">Channel 1</MenuItem>
              <MenuItem value="Channel 2">Channel 2</MenuItem>
              <MenuItem value="Channel 3">Channel 3</MenuItem>
            </TextField>
            <TextField
              label="Type"
              select
              variant="outlined"
              fullWidth
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              <MenuItem value="Type 1">Type 1</MenuItem>
              <MenuItem value="Type 2">Type 2</MenuItem>
              <MenuItem value="Type 3">Type 3</MenuItem>
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
              color="secondary"
              onClick={handleClose}
              sx={{
                mr: 2,
                variant: "h2",
                width: '100px',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderColor: 'black',
                color: 'black',
                '&:hover': {
                    color: "#000000",
                },
                '&:hover': {
                    
                    borderColor: "#000000"
                },
              }}
            >
              Cancel
            </Button>
            <Button
               variant="contained"
               color="secondary"
               sx={{
                   variant: "h2",
                   width: '100px',
                   textTransform: 'none',
                   backgroundColor: "#0b0b3b",
                   fontSize: '1.2rem',
                   '&:hover': {
                       backgroundColor: "#0b0b3b",
                   },
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddProgram;
