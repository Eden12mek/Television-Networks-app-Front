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
        if (event.target.name === "search") {
            setSearchQuery(event.target.value);
        } else {
            setName(event.target.value);
        }
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
    //  ViewChannels
    const handleViewChannel = async (event) => {
        event.preventDefault();
        try {
            await axios.get(`http://localhost:4000/General/channel/get/${currentChannel.id}`, { name: currentChannel.name });
            setChannels((prevChannels) => prevChannels.map(channel => channel.id === currentChannel.id ? currentChannel : channel));
            handleViewClose();
        } catch (error) {
            console.error('Error viewing channel:', error);
        }
    };

    // Filter channels based on search query
    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                <Paper elevation={3} sx={{ p: 3, mt: 4, flexGrow: 1, overflowY: 'auto', ml: 4, mr: 3, mb: 2 }}>
                    <Box display="flex" flexDirection="column" width="100%" maxWidth="100%">
                        <Box display="flex" flexDirection="column" pl={4} pr={2.5}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={1} mx={1}>
                                <Box width={940} display="flex" flexDirection="column" justifyContent="center" alignItems="start" p={2} bgcolor="grey.200" color="text.secondary" gap={2}>
                                    <Box display="flex" gap={1} justifyContent="space-between">
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0348e7a71dcadd27cfa56bac7d3ed123f91b8592105f71f114e0e955b0a5a56d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Search Icon" style={{ width: 25, height: 25 }} />
                                        <TextField
                                            variant="standard"
                                            label="Search"
                                            value={searchQuery}
                                            onChange={handleChange}
                                            name="search"
                                        />

                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap={4} mr={-7} ml={9.95}>
                                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd4d5877d21f194a10f1e9aa0b8166aa78bc71475771154ed4cd4ae89b65dd6?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Export Icon" style={{ width: 32 }} />
                                        <Typography>Export</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa9dba43b2f1a27abe4d3484ab98ec9bf6597ee344765d7e43eeab1f6334b69?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Add Filter Icon" style={{ width: 32 }} />
                                        <Typography>Add Filter</Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            variant: "h2",
                                            textTransform: 'none',
                                            backgroundColor: "#0b0b3b",
                                            fontSize: '1.2rem',
                                            '&:hover': {
                                                backgroundColor: "#0b0b3b",
                                            },
                                        }}
                                        onClick={handleOpen}
                                    >
                                        Add Channel
                                    </Button>
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 2, mb: 3, mx: 1, ml: 2, mr: 3 }} />
                            <Grid item container justifyContent="space-between" ml={3} >
                                <Typography mr={-27.5} variant="h6">Name</Typography>
                                <Typography mr={-30} variant="h6">Status</Typography>
                                <Typography mr={100} variant="h6">Action</Typography>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 5, mx: 1, ml: 2, mr: 3 }} />
                            {channels.map((channel) => (
                                <Grid key={channel.id} item container justifyContent="space-between" alignItems="center" ml={3} mr={-15}>
                                    <Typography mr={-27.5} variant="h5">{channel.name}</Typography>
                                    <Box
                                        mr={-30}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            bgcolor: isActive ? 'green.100' : 'red.100',
                                            p: 1,
                                            borderRadius: 1,
                                            mr: 2,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                                                {channel.isSuspended ? (
                                                    <>
                                                        <DoneIcon color="success" />
                                                        <Typography sx={{ ml: 1, color: 'green.800' }}>Active</Typography>
                                                    </>
                                                ) : (
                                                    <>
                                                        <CloseIcon color="error" />
                                                        <Typography sx={{ ml: 1, color: 'red.800' }}>Inactive</Typography>
                                                    </>
                                                )}
                                            </IconButton>
                                        </Box>

                                    </Box>
                                    <Box mr={95} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton onClick={() => handleViewOpen(channel)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleEditOpen(channel)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteChannel(channel.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        {/* <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                                            {channel.isSuspended ? <DoneIcon /> : <CloseIcon />}
                                        </IconButton> */}
                                    </Box>
                                </Grid>
                            ))}
                            {filteredChannels.map((channel) => (
                                <Grid key={channel.id} item container justifyContent="space-between" alignItems="center" ml={3} mr={-15}>
                                    <Typography mr={-27.5} variant="h5">{channel.name}</Typography>
                                    <Box
                                        mr={-30}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            bgcolor: isActive ? 'green.100' : 'red.100',
                                            p: 1,
                                            borderRadius: 1,
                                            mr: 2,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                                                {channel.isSuspended ? (
                                                    <>
                                                        <DoneIcon color="success" />
                                                        <Typography sx={{ ml: 1, color: 'green.800' }}>Active</Typography>
                                                    </>
                                                ) : (
                                                    <>
                                                        <CloseIcon color="error" />
                                                        <Typography sx={{ ml: 1, color: 'red.800' }}>Inactive</Typography>
                                                    </>
                                                )}
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box mr={95} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton onClick={() => handleViewOpen(channel)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleEditOpen(channel)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteChannel(channel.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        {/* <IconButton onClick={() => handleToggleSuspend(channel.id)}>
                {channel.isSuspended ? <DoneIcon /> : <CloseIcon />}
            </IconButton> */}
                                    </Box>
                                </Grid>
                            ))}
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Modal open={open} onClose={handleClose}>
                <form onSubmit={handleAddChannel}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <Box bgcolor="white" borderRadius={2} p={4} boxShadow={3}>
                            <Typography variant="h4" mb={2}>Add Channel</Typography>
                            <TextField
                                label="Channel Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <Box display="flex" justifyContent="space-between" mt={2}>
                                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                                <Button type="submit" variant="contained" color="primary">Add</Button>
                            </Box>
                        </Box>
                    </Box>
                </form>
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
                        <Button onClick={handleEditClose} sx={{ mr: 1 }}>Cancel</Button>
                        <Button variant="contained" color="primary" type="submit">
                            Save
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Modal open={viewOpen} onClose={handleViewClose}>
                <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 1, width: 400, mx: 'auto', my: 'auto' }}>
                    <Typography variant="h6">View Channel</Typography>
                    <form onSubmit={handleViewChannel}>
                        <TextField
                            label="Name"
                            sx={{ my: 2 }}
                            value={currentChannel ? currentChannel.name : ''}
                            onChange={(e) => setCurrentChannel({ ...currentChannel, name: e.target.value })}
                            fullWidth
                            required
                            disabled
                        />
                        <Box mt={2} display="flex" justifyContent="flex-end">
                            <Button onClick={handleViewClose} sx={{ mr: 1 }}>Close</Button>
                            <Button variant="contained" color="primary" type="submit">
                                Save
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default Channel;
