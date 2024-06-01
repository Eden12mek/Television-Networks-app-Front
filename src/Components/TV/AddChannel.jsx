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
          maxWidth={900}
        >
          <Typography variant="h3" fontWeight="bold" mt={-4} mb={8} textAlign="center">
            Add Channel
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2} mr={11}>
            <Typography variant="h6" fontSize= '1.5rem'  alignSelf="flex-start" sx={{ ml: 23 }}>
              Name
            </Typography>
            <TextField
              variant="outlined"
              sx={{ flexGrow: 1, width: '100%', maxWidth: 450 }}
              margin="normal"
            />
          </Box>
          <Box  display="flex" justifyContent="flex-end" mt={7} mgap={7} >
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{
                mr: 10,
                variant: "h2",
                width: '160px',
                textTransform: 'none',
                borderColor: 'black',
                color: 'black',
                backgroundColor: "#ffffff",
                fontSize: '1.5rem',
                fontWeight: 'bold',  
                '&:hover': {
                    backgroundColor: "#ffffff",
                },              
                '&:hover': {
                    
                    borderColor: 'black'
                },
              }}
           
            >
              Cancel
            </Button>
            <Button
               variant="contained"
               color="secondary"
               sx={{
                   mr: 4,
                   variant: "h2",
                   width: '160px',
                   textTransform: 'none',
                   backgroundColor: "#0b0b3b",
                   fontSize: '1.55rem',
                   fontWeight: 'bold',
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