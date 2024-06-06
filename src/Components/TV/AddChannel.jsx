import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
    IconButton,
    Container,
    Divider,
    Modal,
    TextField
} from '@mui/material';
import {
    Search as SearchIcon,
    IosShare as ExportIcon,
    FilterList as FilterListIcon,
    Group as GroupIcon,
    Add as AddIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Close as CloseIcon,
    Visibility as VisibilityIcon
} from '@mui/icons-material';
import axios from 'axios';

const AddChannel = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [channels, setChannels] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [currentChannel, setCurrentChannel] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    //fetchchannels
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
    console.log(channels);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditOpen = (channel) => {
        setCurrentChannel(channel);
        setEditOpen(true);
    };
    const handleEditClose = () => setEditOpen(false);
    const handleViewOpen = (channel) => {
        setCurrentChannel(channel);
        setViewOpen(true);
    };
    const handleViewClose = () => setViewOpen(false);
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    //  PostChannels
    const handleAddChannel = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/General/channel', { name });
            setChannels((prevChannels) => [...prevChannels, response.data.channel]);
            handleClose();
        } catch (error) {
            console.error('Error adding channel:', error);
        }
    };

    //  EditChannels
    const handleEditChannel = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:4000/General/channel/update/${currentChannel.id}`, { name: currentChannel.name });
            setChannels((prevChannels) => prevChannels.map(channel => channel.id === currentChannel.id ? currentChannel : channel));
            handleEditClose();
        } catch (error) {
            console.error('Error editing channel:', error);
        }
    };

    //  DeleteChannels
    const handleDeleteChannel = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/General/channel/delete/${id}`);
            setChannels((prevChannels) => prevChannels.filter(channel => channel.id !== id));
        } catch (error) {
            console.error('Error deleting channel:', error);
        }
    };
    //  StatusChannels
    const handleToggleSuspend = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/General/channel/changestatus/${id}`);
            setChannels((prevChannels) => prevChannels.map(channel => channel.id === id ? response.data.updatedChannel : channel));
        } catch (error) {
            console.error('Error toggling suspend:', error);
        }
    };

    const filteredChannels = searchQuery
        ? channels.filter(channel => channel.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : channels;

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'neutral.100' }}>
            <Box sx={{ width: '15%', minWidth: 300, display: 'flex', flexDirection: 'column' }}>
                <Paper elevation={3} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" px={2} py={1.24} boxShadow={3} bgcolor="white">
                        <Container maxWidth={false} disableGutters>
                            <Box display="flex" alignItems="center" flexDirection="row" px={{ xs: 3, md: 3 }} width="100%">
                                <Avatar
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/596c9a6460e16fc86f9d6f314fa878465103df347ebdf1e242a4b5f2540ad9d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    sx={{ width: 59, height: 59, ml: 2, mt: { xs: 4, md: 0 } }}
                                    alt="T-Movie"
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '2rem' },
                                        fontWeight: 'bold',
                                        color: 'rgba(0, 0, 0, 0.8)',
                                        ml: 2
                                    }}
                                >
                                    T-Movie
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="start" sx={{ mt: 2, pl: 2 }}>
                        <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
                            <Avatar
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8ae3cc68487a297b90fda6c7bfb0818d5d03bf64046314c05474171b8dd03b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                sx={{ width: 23, height: 23 }}
                                alt="Dashboard"
                            />
                            <Link to="/dashboard">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.5rem' },
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }}
                                >
                                    Dashboard
                                </Typography>
                            </Link>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
                            <Avatar
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea50eccf65544b63eae86b62c5ae2ed1b7275ac079cd76b64ea4a145fd364711?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                sx={{ width: 53, height: 53 }}
                                variant="square"
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.5rem' },
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}
                            >
                                Channel
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
                            <Avatar
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8fdbbc6e2390920e44261859c65ccab30a7cf49eee7e7a5622d51b3fbaff32b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                sx={{ width: 53, height: 53 }}
                                variant="square"
                            />
                            <Link to="/program">
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.5rem' },
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }}
                                >
                                    Program
                                </Typography>
                            </Link>
                        </Box>

                    </Box>
                </Paper>
            </Box>
            <Box sx={{ flexGrow: 2, display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
                    <Typography variant="h4">Channels</Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ mr: 1 }} />
                                ),
                            }}
                            onChange={handleSearchInputChange}
                            value={searchQuery}
                        />
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            <AddIcon sx={{ mr: 1 }} />
                            Add Channel
                        </Button>
                    </Box>
                </Box>
                <Divider />
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {filteredChannels.map(channel => (
                        <Grid item xs={12} md={6} lg={4} key={channel.id}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6">{channel.name}</Typography>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <IconButton onClick={() => handleViewOpen(channel)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleEditOpen(channel)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDeleteChannel(channel.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                                            {channel.isActive ? <DoneIcon /> : <CloseIcon />}
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box component="form" onSubmit={handleAddChannel} sx={{ ...modalStyle }}>
                    <Typography variant="h6" component="h2">Add New Channel</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Channel Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={handleChange}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Add</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={editOpen} onClose={handleEditClose}>
                <Box component="form" onSubmit={handleEditChannel} sx={{ ...modalStyle }}>
                    <Typography variant="h6" component="h2">Edit Channel</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Channel Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentChannel?.name || ''}
                        onChange={(e) => setCurrentChannel({ ...currentChannel, name: e.target.value })}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleEditClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Save</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={viewOpen} onClose={handleViewClose}>
                <Box sx={{ ...modalStyle }}>
                    <Typography variant="h6" component="h2">View Channel</Typography>
                    <Typography variant="body1">Name: {currentChannel?.name}</Typography>
                    <Typography variant="body1">Status: {currentChannel?.isActive ? 'Active' : 'Inactive'}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleViewClose}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default AddChannel;
