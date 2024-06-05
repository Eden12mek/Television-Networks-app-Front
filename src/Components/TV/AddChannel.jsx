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

const Channel = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [channels, setChannels] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [currentChannel, setCurrentChannel] = useState(null);


//  FetchChannels
    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await axios.get('http://localhost:4000/General/channel');
                setChannels(response.data);
            } catch (error) {
                console.error('Error fetching channels:', error);
            }
        };

        fetchChannels();
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditOpen = (channel) => {
        setCurrentChannel(channel);
        setEditOpen(true);
    };
    const handleEditClose = () => setEditOpen(false);

    const handleChange = (event) => {
        setName(event.target.value);
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#030327', p: 2.4 }}>
                    <Typography variant="h4" sx={{ ml: 7, color: 'white' }}>
                        Channel
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24280f58b233f95f4a3bd288d1205a45a787b8f5b8caa8c95876efacd64ac8e7?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Link to="/logout">
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'grey.300', ml: 2 }} />
                        </Link>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ flexGrow: 1, bgcolor: 'neutral.100' }}>
                    <Grid item xs={12} md={9}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'neutral.100' }}>
                            <Paper sx={{ p: 2 }}>
                                <Box display="flex" alignItems="center">
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mr: 2 }}
                                        InputProps={{
                                            endAdornment: <SearchIcon />
                                        }}
                                    />
                                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                        <ExportIcon />
                                    </Button>
                                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                        <FilterListIcon />
                                    </Button>
                                </Box>
                            </Paper>

                            <Paper sx={{ p: 2 }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">Channels</Typography>
                                    <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpen}>
                                        Add Channel
                                    </Button>
                                </Box>
                                <Box mt={2}>
                                    {channels.map((channel) => (
                                        <Paper key={channel.id} sx={{ p: 2, mb: 2 }}>
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Box display="flex" alignItems="center">
                                                    <Avatar sx={{ mr: 2 }} />
                                                    <Typography>{channel.name}</Typography>
                                                </Box>
                                                <Box>
                                                    <IconButton onClick={() => handleEditOpen(channel)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDeleteChannel(channel.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                                                        {channel.isSuspended ? <DoneIcon /> : <CloseIcon />}
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 1, width: 400, mx: 'auto', my: 'auto' }}>
                    <Typography variant="h6">Add Channel</Typography>
                    <form onSubmit={handleAddChannel}>
                        <TextField
                            label="Name"
                            fullWidth
                            sx={{ my: 2 }}
                            value={name}
                            onChange={handleChange}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Add
                        </Button>
                    </form>
                </Box>
            </Modal>

            <Modal open={editOpen} onClose={handleEditClose}>
                <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 1, width: 400, mx: 'auto', my: 'auto' }}>
                    <Typography variant="h6">Edit Channel</Typography>
                    <form onSubmit={handleEditChannel}>
                        <TextField
                            label="Name"
                            fullWidth
                            sx={{ my: 2 }}
                            value={currentChannel?.name || ''}
                            onChange={(e) => setCurrentChannel({ ...currentChannel, name: e.target.value })}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Save
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default Channel;

