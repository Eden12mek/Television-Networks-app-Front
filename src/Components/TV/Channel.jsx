import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Box,Grid, Paper,Typography,Avatar,Button, IconButton, Container, Divider, Modal, TextField, Switch} from '@mui/material';
import {
    Search as SearchIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Close as CloseIcon,
    Visibility as VisibilityIcon
} from '@mui/icons-material';
import axios from 'axios';
import Auth from '../Auth';
import styled from 'styled-components';



const CustomSwitch = styled(Switch)(({ theme, checked }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            color: checked ? 'green' : 'red',
            '& + .MuiSwitch-track': {
                backgroundColor: checked ? 'green' : 'red',
            },
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: checked ? 'green' : 'red',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: checked ? 'green' : 'red',
    },
    '& .MuiSwitch-switchBase': {
        color: checked ? 'green' : 'red',
    },
    '& .MuiSwitch-track': {
        backgroundColor: checked ? 'green' : 'red',
    },
}));




const Channel = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [channels, setChannels] = useState([]);
    const [name, setName] = useState('');
    const [currentChannel, setCurrentChannel] = useState(null);
    const [deleteChannelId, setDeleteChannelId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    //pagination
    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(7);

    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const calculateTotalPages = () => {
            setTotalPages(
                Math.ceil(
                    channels ? channels.length / itemsPerPage : []
                )
            );
        };
        calculateTotalPages();
    }, [channels, itemsPerPage]);

    // Function to handle next page button click
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle previous page button click
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Filter channels based on search query
    const filteredChannels = searchQuery
        ? channels.filter(channel => channel.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : channels;


    // Calculate data for current page
    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentPageData = channels
        ? filteredChannels.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // Reset current page to 1 when search query changes
        setCurrentPage(1);
    };

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

    const handleDeleteOpen = (id) => {
        setDeleteChannelId(id);
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => setDeleteOpen(false);


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
            handleDeleteClose();
        } catch (error) {
            console.error('Error deleting channel:', error);
        }
    };

    //Toggle suspended
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
   // Styled components for the modal menu
    const ModalContainer = styled.div`
    position: absolute;
    top: calc(100% + 10px); /* Position below Avatar, adjust as needed */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000; /* Ensure it's above other content */
    `;

    const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    const MenuItem = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 10px 0;
    `;

    const MenuDivider = styled.hr`
    width: 100%;
    margin: 10px 0;
    border: none;
    border-top: 1px solid #ccc;
    `;
    const StyledMenuItem = styled(Link)`
    text-decoration: none;
    color: red; /* Set color to red */
    margin: 10px 0;
    text-transform: uppercase; /* Transform text to uppercase */
    `;


    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Fetch user information from localStorage
        const storedUserName = localStorage.getItem('userName');
        const storedUserEmail = localStorage.getItem('userEmail');
        if (storedUserName) {
            setUserName(storedUserName);
        }
        if (storedUserEmail) {
            setUserEmail(storedUserEmail);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                        <div style={{ position: 'relative' }}>
                        <Avatar
                            sx={{ width: 40, height: 40, bgcolor: 'grey.300', ml: 2, mr:2 }}
                            onClick={toggleMenu}
                        />
                        {menuOpen && (
                            <ModalContainer>
                                <MenuList>
                                    <Avatar
                                        sx={{ width: 40, height: 40, bgcolor: 'grey.300', ml: 2 }}
                                    />
                                    <Typography variant="body1">{userEmail}</Typography>
                                    <MenuDivider />
                                    <StyledMenuItem to="/login">LOGOUT</StyledMenuItem>
                                </MenuList>
                            </ModalContainer>
                        )}
                    </div>
                    </Box>
                </Box>
                <Paper elevation={3} sx={{ p: 3, mt: 4, flexGrow: 1, overflowY: 'auto', ml: 4, mr: 3, mb: 2 }}>
                    <Box display="flex" flexDirection="column" width="100%" maxWidth="100%">
                        <Box display="flex" flexDirection="column" pl={4} pr={2.5}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={1} mx={1}>

                                <TextField
                                    variant="standard"
                                    size="small"
                                    placeholder="Search"
                                    InputProps={{
                                        startAdornment: (
                                            <SearchIcon sx={{ mr: 1, ml: 1 }} />
                                        ),
                                        sx: {
                                            pr: 94,
                                            bgcolor: 'grey.100',
                                            height: '50px',
                                            
                                            '&::before': {
                                                borderBottom: 'none',
                                            },
                                           
                                            '&::after': {
                                                borderBottom: 'none',
                                            },
                                            
                                            '&:hover:not(.Mui-disabled)::before': {
                                                borderBottom: 'none',
                                            },
                                        }
                                    }}
                                    onChange={handleSearchInputChange}
                                    value={searchQuery}
                                />
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
                                <Typography mr={35} variant="h6">Action</Typography>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 5, mx: 1, ml: 2, mr: 3 }} />
                            {currentPageData.map(channel => (
                                <Grid key={channel.id} item container alignItems="center" spacing={3} sx={{ mb: 2, ml: 0.5 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h5">{channel.name}</Typography>
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="center">
                                        <Button
                                            variant='contained'
                                            sx={{
                                                bgcolor: channel.suspend ? '#aaf0c9' : '#ffccc5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                minWidth: 150,
                                                '&:hover': {
                                                    bgcolor: channel.suspend ? '#aaf0c9' : '#ffccc5',
                                                },
                                            }}
                                        >
                                            {channel.suspend ? (
                                                <>
                                                    <DoneIcon sx={{ color: 'green' }} />
                                                    <Typography color='green' sx={{ ml: 1, textTransform: 'capitalize' }}>Active</Typography>

                                                </>
                                            ) : (
                                                <>
                                                    <CloseIcon sx={{ color: 'red' }} />
                                                    <Typography color='red' sx={{ ml: 1, textTransform: 'capitalize' }}>Deactive</Typography>

                                                </>
                                            )}
                                            <CustomSwitch checked={channel.suspend} onChange={() => handleToggleSuspend(channel.id)} />

                                        </Button>

                                    </Grid>
                                    <Grid item xs={6} container justifyContent="flex-end">
                                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 31 }}>
                                            <IconButton onClick={() => handleViewOpen(channel)}>
                                                <VisibilityIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleEditOpen(channel)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteOpen(channel.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))}


                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mr: 18 }}>
                        <Button
                            variant="contained"
                            disabled={currentPage === 1}
                            onClick={handlePreviousPage}
                            sx={{ bgcolor: '#030327', color: 'white', '&:hover': { bgcolor: '#0b0b3b' } }}
                        >
                            Prev
                        </Button>
                        <Typography variant="body1" sx={{ mx: 5 }}>{currentPage} of {totalPages}</Typography>
                        <Button
                            variant="contained"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                            sx={{ bgcolor: '#030327', color: 'white', '&:hover': { bgcolor: '#0b0b3b' } }}
                        >
                            Next
                        </Button>
                    </Box>

                </Paper>

            </Box>
            <Modal open={open} onClose={handleClose}>
                <form onSubmit={handleAddChannel}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <Box bgcolor="white" width={1000} height={380} borderRadius={3} p={4} boxShadow={5}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h3" mb={8} sx={{ fontWeight: 'bold' }}>Add Channel</Typography>
                            </Box>
                            <Typography variant="h5" mb={1} ml={35}>Name</Typography>
                            <TextField
                                variant="standard"
                                label=""
                                name="name"
                                InputProps={{

                                    sx: {
                                        ml: 35,
                                        pr: 34,
                                        bgcolor: 'grey.100',
                                        height: '50px',
                                        borderRadius: '8px 8px 0 0',
                                        '&::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&::after': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&:hover:not(.Mui-disabled)::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                    }
                                }}

                                value={name}
                                onChange={handleChange}
                            />

                            <Box display="flex" justifyContent="space-between" mt={9} gap={4}>
                                <Button
                                    variant="outlined"
                                    onClick={handleClose}
                                    sx={{
                                        ml: 74,
                                        variant: "h2",
                                        width: '140px',
                                        textTransform: 'none',
                                        borderColor: 'black',
                                        color: 'black',
                                        backgroundColor: "#ffffff",
                                        fontSize: '1.55rem',
                                        fontWeight: 'bold',
                                        border: '2.5px solid black',
                                        '&:hover': {
                                            backgroundColor: "#ffffff",
                                            borderColor: 'black'
                                        },
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        mr: 6,
                                        variant: "h2",
                                        width: '140px',
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

            <Modal open={editOpen} onClose={handleEditClose}>
                <form onSubmit={handleEditChannel}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <Box bgcolor="white" width={900} height={350} borderRadius={3} p={4} boxShadow={5}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h4" mb={8} sx={{ fontWeight: 'bold' }}>Edit Channel</Typography>
                            </Box>
                            <Typography variant="h5" mb={1} ml={32}>Name</Typography>
                            <TextField
                                variant="standard"
                                label=""
                                name="name"
                                fullWidth
                                InputProps={{

                                    sx: {
                                        ml: 32,
                                        pl: 4,
                                        bgcolor: 'grey.100',
                                        height: '50px',
                                        width: '400px',
                                        borderRadius: '8px 8px 0 0',
                                        '&::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&::after': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&:hover:not(.Mui-disabled)::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                    }
                                }}
                                value={currentChannel?.name || ''}
                                onChange={(e) => setCurrentChannel({ ...currentChannel, name: e.target.value })}
                            />
                            <Box display="flex" justifyContent="space-between" mt={9} gap={4}>
                                <Button
                                    variant="outlined"
                                    onClick={handleEditClose}
                                    sx={{
                                        ml: 64,
                                        variant: "h2",
                                        width: '140px',
                                        textTransform: 'none',
                                        borderColor: 'black',
                                        color: 'black',
                                        backgroundColor: "#ffffff",
                                        fontSize: '1.55rem',
                                        fontWeight: 'bold',
                                        border: '2.5px solid black',
                                        '&:hover': {
                                            backgroundColor: "#ffffff",
                                            borderColor: 'black'
                                        },
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        mr: 6,
                                        variant: "h2",
                                        width: '140px',
                                        textTransform: 'none',
                                        backgroundColor: "#0b0b3b",
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: "#0b0b3b",
                                        },
                                    }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </form>

            </Modal>
            <Modal open={viewOpen} onClose={handleViewClose}>
                <form onSubmit={handleViewChannel}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <Box bgcolor="white" width={800} height={300} borderRadius={3} p={4} boxShadow={5}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h4" mb={8} sx={{ fontWeight: 'bold' }}>View Channel</Typography>
                            </Box>
                            <Typography variant="h5" mb={1} ml={25}>Name</Typography>
                            <TextField
                                variant="standard"
                                label=""
                                name="name"
                                InputProps={{

                                    sx: {
                                        ml: 25,
                                        pl: 20,
                                        fontWeight: 'bold',
                                        bgcolor: 'grey.100',
                                        height: '50px',
                                        width: '400px',
                                        borderRadius: '8px 8px 0 0',
                                        '&::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&::after': {
                                            borderBottom: '2px solid black',  
                                        },
                                        '&:hover:not(.Mui-disabled)::before': {
                                            borderBottom: '2px solid black',  
                                        },
                                    }
                                }}
                                value={currentChannel ? currentChannel.name : ''}
                                onChange={(e) => setCurrentChannel({ ...currentChannel, name: e.target.value })}
                                fullWidth
                                required
                                disabled
                            />
                            <Box display="flex" justifyContent="space-between" mt={7} gap={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleViewClose}
                                    sx={{
                                        ml: 76,
                                        variant: "h2",
                                        width: '140px',
                                        textTransform: 'none',
                                        backgroundColor: "#0b0b3b",
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: "#0b0b3b",
                                        },
                                    }}
                                >
                                    Close
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </form>

            </Modal>
            <Modal open={deleteOpen} onClose={handleDeleteClose}>
                <Box sx={{ ...modalStyle }}>
                    <Typography variant="h4" mb={2}>
                        Confirm Deletion
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        Are you sure you want to delete this channel?
                    </Typography>
                    <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleDeleteClose}
                            sx={{

                                variant: 'h4',
                                borderColor: 'black',
                                color: 'black',
                                backgroundColor: "#ffffff",
                                border: '2.5px solid black',
                                '&:hover': {
                                    backgroundColor: "#ffffff",
                                    borderColor: 'black'
                                },
                            }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="error" onClick={() => handleDeleteChannel(deleteChannelId)}>
                            Delete
                        </Button>
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
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 6,
    p: 6,
};



export default Auth(Channel);
