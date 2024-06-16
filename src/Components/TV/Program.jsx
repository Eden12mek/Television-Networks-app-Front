import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    TextField,
    MenuItem,
    Modal,
    Switch
} from '@mui/material';
import {
    Search as SearchIcon,
    IosShare as ExportIcon,
    FilterList as FilterListIcon,
    Group as GroupIcon,
    Add as AddIcon,
    Done as DoneIcon,
    Close as CloseIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Visibility as VisibilityIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AddChannel from './AddChannel';
import AddProgram from './AddProgram';


//Switch design
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

const Program = () => {
    const [programs, setPrograms] = useState([])
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [currentProgram, setCurrentProgram] = useState(null);
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
    const [currentChannel, setCurrentChannel] = useState(null);
    const [currentType, setCurrentType] = useState([]);
    const [currentCategories, setCurrentCategory] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteOpen, setDeleteOpen] = useState('');
    const [deleteProgramId, setDeleteProgramId] = useState('');


    //pagination
    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(7);

    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const calculateTotalPages = () => {
            setTotalPages(
                Math.ceil(
                    programs ? programs.length / itemsPerPage : []
                )
            );
        };
        calculateTotalPages();
    }, [programs, itemsPerPage]);

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
    const filteredPrograms = searchQuery
        ? programs.filter(program => program.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : programs;


    // Calculate data for current page
    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentPageData = programs
        ? filteredPrograms.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // Reset current page to 1 when search query changes
        setCurrentPage(1);
    };


    //fetchPrograms   
    const fetchPrograms = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/movies/getall');
            setPrograms(response.data);
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    };
    useEffect(() => {
        fetchPrograms();
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditOpen = (program) => {
        setCurrentProgram(program);
        setEditOpen(true);
    };
    const handleEditClose = () => setEditOpen(false);
    const handleViewOpen = (program) => {
        setCurrentProgram(program);
        setViewOpen(true);
    };
    const handleViewClose = () => setViewOpen(false);
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDeleteOpen = (id) => {
        setDeleteProgramId(id);
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => setDeleteOpen(false);



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

    // post programs

    const handleAddProgram = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/General/movies', {
                title,
                duration: parseInt(duration),
                description,
                videoUrl,
                channelId,
                typeId,
                categoryId
            });
            console.log(response.data);
            handleClose();
            fetchPrograms();


        } catch (error) {
            console.error('Error adding program:', error);
        }
    };

    //Edit Programs   

    const handleEditProgram = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:4000/General/movies/update/${currentProgram.id}`, {
                title: currentProgram.title,
                duration: parseInt(currentProgram.duration),
                description: currentProgram.description,
                videoUrl: currentProgram.videoUrl,
                channelId: currentChannel.channelId,
                categoryId: currentCategories.categoryId,
                typeId: currentType.typeId
            });

            handleEditClose();
            fetchPrograms();
        } catch (error) {
            console.error('Error editing program:', error);
        }
    };

    //  ViewChannels
    const handleViewProgram = async (event) => {
        event.preventDefault();
        try {
            await axios.get(`http://localhost:4000/General/movies/get/${currentProgram.id}`, { title: currentProgram.title });
            setPrograms((prevPrograms) => prevPrograms.map(program => program.id === currentProgram.id ? currentProgram : program));
            handleViewClose();
        } catch (error) {
            console.error('Error viewing program:', error);
        }
    };

    //  DeleteChannels
    const handleDeleteProgram = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/General/movies/delete/${id}`);
            setPrograms((prevPrograms) => prevPrograms.filter(program => program.id !== id));
            handleDeleteClose();
        } catch (error) {
            console.error('Error deleting channel:', error);
        }
    };

    //Toggle suspended
    const handleToggleSuspend = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/General/movies/changestatus/${id}`);
            setPrograms((prevPrograms) => prevPrograms.map(program => program.id === id ? response.data.updatedProgram : program));
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
                            <Link to="/channel">
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
                            </Link>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
                            <Avatar
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8fdbbc6e2390920e44261859c65ccab30a7cf49eee7e7a5622d51b3fbaff32b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
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
                                Program
                            </Typography>

                        </Box>

                    </Box>
                </Paper>
            </Box>
            <Box sx={{ flexGrow: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#030327', p: 2.4 }}>
                    <Typography variant="h4" sx={{ ml: 7, color: 'white' }}>
                        Program
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24280f58b233f95f4a3bd288d1205a45a787b8f5b8caa8c95876efacd64ac8e7?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Link to="/login">
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'grey.300', ml: 2 }} />
                        </Link>
                            
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
                                            // Remove default bottom border
                                            '&::before': {
                                                borderBottom: 'none',
                                            },
                                            // Ensure no bottom border when focused
                                            '&::after': {
                                                borderBottom: 'none',
                                            },
                                            // Ensure no bottom border on hover
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
                                        Add Program
                                    </Button>
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 2, mb: 3, mx: 1, ml: 2, mr: -2 }} />
                            <Grid item container justifyContent="space-between" ml={4} >

                                <Typography variant="h6">Id</Typography>
                                <Typography sx={{ mr: 10, minWidth: 150 }} variant="h6">Title</Typography>
                                <Typography sx={{ ml: -17, minWidth: 100 }} variant="h6">Duration</Typography>
                                <Typography sx={{ minWidth: 250 }} mr={-17} variant="h6">Description</Typography>
                                <Typography ml={8} mr={15} variant="h6">Status</Typography>
                                <Typography ml={-8} mr={6} variant="h6">Action</Typography>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 4, mx: 1, ml: 2, mr: -2 }} />
                            {currentPageData.map(program => (
                                <Grid key={program.id} item container justifyContent="space-between" alignItems="center" ml={4} sx={{ paddingTop: 1, paddingBottom: 1 }}>
                                    <Typography sx={{ minWidth: 100 }}>{program.id}</Typography>
                                    <Typography sx={{ minWidth: 150 }}>{program.title}</Typography>
                                    <Typography sx={{ minWidth: 150 }}>{program.duration}</Typography>
                                    <Typography sx={{ minWidth: 200 }}>{program.description}</Typography>
                                    <Grid item xs={2} container justifyContent="center">
                                        <Button
                                            variant='contained'
                                            sx={{
                                                bgcolor: program.suspend ? '#aaf0c9' : '#ffccc5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                minWidth: 150,
                                                '&:hover': {
                                                    bgcolor: program.suspend ? '#aaf0c9' : '#ffccc5',
                                                },
                                            }}
                                        >
                                            {program.suspend ? (
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
                                            <CustomSwitch checked={program.suspend} onChange={() => handleToggleSuspend(program.id)} />
                                        </Button>
                                    </Grid>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton onClick={() => handleViewOpen(program)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleEditOpen(program)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteOpen(program.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            ))}

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
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
            {/*  Add program modal     */}
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
                        component="form"
                        onSubmit={handleAddProgram}
                        display="flex"
                        flexDirection="column"
                        px={{ xs: 2, md: 8 }}
                        py={{ xs: 8, md: 5 }}
                        bgcolor="white"
                        borderRadius={4}
                        maxWidth={1000}
                        width="100%"
                        boxShadow={3}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="black"
                            align="center"
                            sx={{ mb: { xs: 4, md: 6 } }}
                        >
                            Add Program
                        </Typography>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Video URL</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Title</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flex="1">
                                <Typography variant="h5">Duration</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flex="1">
                                <Typography variant="h5">Category</Typography>
                                <TextField
                                    variant="standard"
                                    select
                                    label=""
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: false,
                                        sx: {
                                            ml: 3,
                                            typography: 'h5'
                                        }
                                    }}
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        categoryData && categoryData.map((items) => (

                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                                        ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Channel</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    value={channelId}
                                    onChange={(e) => setChannelId(e.target.value)}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        channel && channel.map((items) => (

                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>

                                        ))}
                                </TextField>
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Type</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    value={typeId}
                                    onChange={(e) => setTypeId(e.target.value)}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        typeData && typeData.map((items) => (

                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                                        ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Typography variant="h5">Description</Typography>
                        <TextField
                            label=""
                            variant="standard"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{ mt: 2, bgcolor: 'grey.200', borderRadius: 2 }}
                        />
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
            </Modal>
            {/* // Edit channel modal */}
            <Modal
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="edit-program-modal-title"
                aria-describedby="edit-program-modal-description"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Box
                        component="form"
                        onSubmit={handleEditProgram}
                        display="flex"
                        flexDirection="column"
                        px={{ xs: 2, md: 8 }}
                        py={{ xs: 8, md: 5 }}
                        bgcolor="white"
                        borderRadius={4}
                        maxWidth={1000}
                        width="100%"
                        boxShadow={3}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="black"
                            align="center"
                            sx={{ mb: { xs: 4, md: 6 } }}
                        >
                            Edit Program
                        </Typography>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Video URL</Typography>
                                <TextField
                                    label="Video URL"
                                    fullWidth
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                    value={currentProgram?.videoUrl || ''}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, videoUrl: e.target.value })}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Title</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={currentProgram?.title || ''}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, title: e.target.value })}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flex="1">
                                <Typography variant="h5">Duration</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={parseInt(currentProgram?.duration || '')}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, duration: parseInt(e.target.value) })}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flex="1">
                                <Typography variant="h5">Category</Typography>
                                <TextField
                                    variant="standard"
                                    select
                                    label=" Select..."
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: false,
                                        sx: {
                                            ml: 3,
                                            typography: 'h5'
                                        }
                                    }}
                                    value={currentCategories?.categoryId || ''}
                                    onChange={(e) => setCurrentCategory({ ...currentCategories, categoryId: e.target.value })}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        categoryData && categoryData.map((items) => (
                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                                        ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Channel</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    // label="Channel ID"

                                    value={currentChannel?.channelId || ''}
                                    onChange={(e) => setCurrentChannel({ ...currentChannel, channelId: e.target.value })}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        channel && channel.map((items) => (
                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                                        ))}
                                </TextField>
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Type</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    // label="Type"
                                    value={currentType?.typeId || ''}
                                    onChange={(e) => setCurrentType({ ...currentType, typeId: e.target.value })}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >
                                    {
                                        typeData && typeData.map((items) => (
                                            <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                                        ))
                                    }
                                </TextField>
                            </Box>
                        </Box>

                        <Typography variant="h5">Description</Typography>
                        <TextField
                            label=""
                            variant="standard"
                            fullWidth
                            multiline
                            rows={4}
                            value={currentProgram?.description || ''}
                            onChange={(e) => setCurrentProgram({ ...currentProgram, description: e.target.value })}
                            sx={{ mt: 2, bgcolor: 'grey.200', borderRadius: 2 }}
                        />
                        <Box display="flex" justifyContent="flex-end" mt={7} gap={4} >
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleEditClose}
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
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>

            {/* View channel modal */}
            <Modal
                open={viewOpen}
                onClose={handleClose}
                aria-labelledby="view-program-modal-title"
                aria-describedby="view-program-modal-description"
            >

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Box
                        component="form"
                        onSubmit={handleViewProgram}
                        display="flex"
                        flexDirection="column"
                        px={{ xs: 2, md: 8 }}
                        py={{ xs: 8, md: 5 }}
                        bgcolor="white"
                        borderRadius={4}
                        maxWidth={1000}
                        width="100%"
                        boxShadow={3}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="black"
                            align="center"
                            sx={{ mb: { xs: 4, md: 6 } }}
                        >
                            Add Program
                        </Typography>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Video URL</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={currentProgram ? currentProgram.videoUrl : ''}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, videoUrl: e.target.value })}
                                    fullWidth
                                    required
                                    disabled
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Title</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={currentProgram ? currentProgram.title : ''}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, title: e.target.value })}
                                    fullWidth
                                    required
                                    disabled
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flex="1">
                                <Typography variant="h5">Duration</Typography>
                                <TextField
                                    variant="standard"
                                    label=""
                                    InputProps={{
                                        sx: {
                                            height: '50px'
                                        }
                                    }}
                                    value={currentProgram ? currentProgram.duration : ''}
                                    onChange={(e) => setCurrentProgram({ ...currentProgram, duration: e.target.value })}
                                    fullWidth
                                    required
                                    disabled
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flex="1">
                                <Typography variant="h5">Category</Typography>
                                <TextField
                                    variant="standard"
                                    select
                                    label=" Select..."
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: false,
                                        sx: {
                                            ml: 3,
                                            typography: 'h5'
                                        }
                                    }}
                                    value={currentProgram && currentProgram.category ? currentProgram.category.name : ''}
                                    fullWidth
                                    required
                                    disabled
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                >

                                </TextField>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                            <Box display="flex" flexDirection="column" mr={10} gap={1} flexGrow={1}>
                                <Typography variant="h5">Channel</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    value={currentProgram && currentProgram.channel ? currentProgram.channel.name : ''}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                    fullWidth
                                    required
                                    disabled
                                >

                                </TextField>
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                                <Typography variant="h5">Type</Typography>
                                <TextField
                                    label="Select..."
                                    select
                                    variant="standard"
                                    InputProps={{
                                        sx: {
                                            height: '35px'
                                        }
                                    }}
                                    value={currentProgram && currentProgram.type ? currentProgram.type.name : ''}
                                    sx={{ bgcolor: 'grey.200', borderRadius: 2, width: '450px' }}
                                    fullWidth
                                    required
                                    disabled
                                >

                                </TextField>
                            </Box>
                        </Box>
                        <Typography variant="h5">Description</Typography>
                        <TextField
                            label=""
                            variant="standard"
                            fullWidth
                            multiline
                            rows={4}
                            value={currentProgram ? currentProgram.description : ''}
                            onChange={(e) => setCurrentProgram({ ...currentProgram, description: e.target.value })}
                            sx={{ bgcolor: 'grey.200', borderRadius: 2 }}
                            required
                            disabled
                        ></TextField>
                        <Box display="flex" justifyContent="flex-end" mt={7} gap={4} >
                            <Button 
                                variant="outlined"
                                color="secondary"
                                onClick={handleViewClose} 
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
                                    border: '2.5px solid black',
                                    '&:hover': {
                                        backgroundColor: "#ffffff",
                                        borderColor: 'black'
                                    },
                                }}
                            >
                                Close
                            </Button>

                        </Box>

                    </Box>
                </Box>
            </Modal>

            <Modal open={deleteOpen} onClose={handleDeleteClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
                >
                    <Typography variant='h6' mb={2}>
                        Confirm Deletion
                    </Typography>
                    <Typography variant='body1' mb={2}>
                        Are you sure you want to delete this program?
                    </Typography>
                    <Box display="flex" justifyContent='flex-end' gap={2}>
                        <Button variant='outlined' color='primary' onClick={handleDeleteClose}>
                            No
                        </Button>
                        <Button variant='contained' color='error' onClick={() => handleDeleteProgram(deleteProgramId)}>
                            Yes
                        </Button>
                    </Box>
                </Box>
            </Modal >
        </Box >
    );
};




export default Program;
