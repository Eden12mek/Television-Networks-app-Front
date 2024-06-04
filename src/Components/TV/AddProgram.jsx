import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Modal } from '@mui/material';
import axios from 'axios';


const AddProgram = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [channel, setChannels] = useState('');
  const [categoryData, setCategoryData] = useState('');
  const [typeData, setTypeData] = useState('');


  const [channelId, setChannelId] = useState('');

  const [typeId, setTypeId] = useState('');
  const [categoryId, setCategoryId] = useState('');


 //channels
const fetchChannels = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/channel/getall');
            setChannels(response.data);
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    };
  useEffect(() => {
    fetchChannels();
}, []);


//categories

const fetchCategoryData = async () => {
  try {
      const response = await axios.get('http://localhost:4000/General/categories/getall');
      setCategoryData(response.data);
  } catch (error) {
      console.error('Error fetching channels:', error);
  }
};
useEffect(() => {
  fetchCategoryData();
}, []);

//type

const fetchTypeData = async () => {
  try {
      const response = await axios.get('http://localhost:4000/General/type/getall');
      setTypeData(response.data);
  } catch (error) {
      console.error('Error fetching channels:', error);
  }
};
useEffect(() => {
  fetchTypeData();
}, []);

console.log(typeData)
  const handleAddProgram = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/General/movies', {
        title,
        duration: parseInt(duration),
        description,
        videoUrl,
        channelId, // Ensure channelId is an integer
        typeId, // Ensure typeId is an integer
        categoryId
      });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error adding program:', error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-program-modal-title"
      aria-describedby="add-program-modal-description"
    >
    <form > 
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          component="form"
          onSubmit={handleAddProgram}
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
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            />
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            />
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
            <TextField
              variant="outlined"
              label="Duration"
              fullWidth
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            />
            <TextField
              label="Category"
              select
              variant="outlined"
              fullWidth
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              {
                categoryData && categoryData.map((items)=>(
              
              <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
            ))}
            </TextField>
          </Box>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mt: 2, bgcolor: 'neutral.200', borderRadius: 2 }}
          />
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
            <TextField
              label="Channel"
              select
              variant="outlined"
              fullWidth
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              {
                channel && channel.map((items)=>(
              
              <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
             
               ))}
            </TextField>
            <TextField
              label="Type"
              select
              variant="outlined"
              fullWidth
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
              sx={{ bgcolor: 'neutral.200', borderRadius: 2 }}
            >
              {
                typeData && typeData.map((items)=>(
              
              <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
            ))}
            </TextField>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt={7} gap={4} >
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{
                mr: 5,
                variant: "h2",
                width: '160px',
                textTransform: 'none',
                borderColor: 'black',
                color: 'black',
                backgroundColor: "#ffffff",
                fontSize: '1.55rem',
                fontWeight: 'bold',
                borderWidth: 'bold',
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
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                variant: "h2",
                width: '160px',
                textTransform: 'none',
                backgroundColor: "#0b0b3b",
                fontSize: '1.5rem',
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
    </form> 
    </Modal>
  );
};

export default AddProgram;
