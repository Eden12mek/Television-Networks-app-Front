import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Modal,
  Paper,
  Typography,
  Avatar,
  Button,
  IconButton,
  Container,
  TextField
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Movie as MovieIcon,
  Tv as TvIcon,
  Search as SearchIcon,
  IosShare as ExportIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const AddChannel = ({ open, handleClose  }) => {
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
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgcolor="rgba(0, 0, 0, 0.5)"
        zIndex={1300} 
      >
        <Box
          bgcolor="white"
          borderRadius={5}
          boxShadow={3}
          p={6}
          width="90%"
          maxWidth={800}
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
              sx={{ flexGrow: 1, width: '100%' }}
              margin="normal"
            />
          </Box>
          <Box  display="flex" justifyContent="flex-end" mt={7} >
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{
                mr: 5,
                variant: "h2",
                width: '100px',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderColor: 'black',
                color: 'black',
                '&:hover': {
                    
                    borderColor: "black"
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
  

export default AddChannel;