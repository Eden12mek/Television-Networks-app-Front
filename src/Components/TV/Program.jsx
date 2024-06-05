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
    Modal
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
import AddChannel from './AddChannel';
import AddProgram from './AddProgram';

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
        } catch (error) {
            console.error('Error adding program:', error);
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
                        <Link to="/logout">
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'grey.300', ml: 2 }} />
                        </Link>
                    </Box>
                </Box>
                <Paper elevation={3} sx={{ p: 3, mt: 4, flexGrow: 1, overflowY: 'auto', ml: 4, mr: 3, mb: 2 }}>
                    {/* <Box display="flex" justifyContent="center" alignItems="center" p={4} bgcolor="white" borderRadius={4} boxShadow={2} maxWidth={{ xs: '100%', md: '2338px' }}> */}
                    <Box display="flex" flexDirection="column" width="100%" maxWidth="100%">
                        <Box display="flex" flexDirection="column" pl={4} pr={2.5}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={1} mx={1}>
                                <Box width={940} display="flex" flexDirection="column" justifyContent="center" alignItems="start" p={2} bgcolor="grey.200" color="text.secondary" gap={2}>
                                    <Box display="flex" gap={1} justifyContent="space-between">
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0348e7a71dcadd27cfa56bac7d3ed123f91b8592105f71f114e0e955b0a5a56d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Search Icon" style={{ width: 25, height: 25 }} />
                                        <Typography variant='h6'>Search</Typography>
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
                                        Add Program
                                    </Button>
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 2, mb: 3, mx: 1, ml: 2, mr: 2.5 }} />
                            <Grid item container justifyContent="space-between" ml={4} >

                                <Typography mr={-15} variant="h6">Id</Typography>
                                <Typography mr={-15} variant="h6">Title</Typography>
                                <Typography mr={-10} variant="h6">Duration</Typography>
                                <Typography mr={-10} variant="h6">Description</Typography>
                                <Typography mr={-10} variant="h6">Status</Typography>
                                <Typography mr={15} variant="h6">Action</Typography>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 4, mx: 1, ml: 2, mr: 2.5 }} />
                            {programs.map((program) => (
                                <Grid key={program.id} item container justifyContent="space-between" alignItems="center" ml={4} >
                                    <Typography>{program.id}</Typography>
                                    <Typography ml={-14}>{program.title}</Typography>
                                    <Typography ml={-15}>{program.duration}</Typography>
                                    <Typography mr={-18} ml={-5}>{program.description}</Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            bgcolor: isActive ? 'green.100' : 'red.100',
                                            mr: -15
                                        }}
                                    // onClick={handleClick}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', p: 1, borderRadius: 1, mr: 2 }}>
                                            {isActive ? (
                                                <>
                                                    <DoneIcon color="success" />
                                                    <Typography sx={{ ml: 1, color: 'green.800' }}>Active</Typography>
                                                </>

                                            ) : (
                                                <>
                                                    <CloseIcon color="success" />
                                                    <Typography sx={{ ml: 1, color: 'green.800' }}>Deactive</Typography>
                                                </>
                                            )}
                                        </Box>
                                        <Avatar sx={{ bgcolor: isActive ? 'green.800' : 'red.800', width: 65, height: 65 }} />
                                    </Box>
                                    <Box mr={10} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: 'red' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            ))}
                        </Box>
                    </Box>
                    {/* </Box> */}
                </Paper>
            </Box>
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
                                        categoryData && categoryData.map((items) => (

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
                                        channel && channel.map((items) => (

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
                                        typeData && typeData.map((items) => (

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
        </Box>
    );
};




export default Program;
