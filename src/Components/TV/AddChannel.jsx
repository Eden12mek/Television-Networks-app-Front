import React, { useState } from 'react';
import { Box, Modal, TextField, Typography, Button, } from '@mui/material';
import axios from 'axios';

const AddChannel = ({ open, handleClose, handleAddChannel }) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(name)
            const response = await axios.post('http://localhost:4000/General/channel',{name});
            console.log(response)
            handleAddChannel(response.data);
            handleClose();
            
        } catch (error) {
            console.error('Error adding channel:', error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
        <form>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Box bgcolor="white" borderRadius={2} p={4} boxShadow={3}>
                    <Typography variant="h4" mb={2}>Add Channel</Typography>
                    <TextField
                        label="Channel Name"
                        name="name"
                        value={name}
                        onChange={(e)=>handleChange(e)}
                        fullWidth
                        margin="normal"
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Add</Button>
                    </Box>
                </Box>
            </Box>
            </form>
        </Modal>
    );
};

export default AddChannel;
