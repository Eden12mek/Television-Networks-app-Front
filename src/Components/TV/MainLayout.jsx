import React, { useState, useEffect } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, Paper, ListItemText, CardMedia, IconButton, InputBase, Grid, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import TVIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SportsIcon from '@mui/icons-material/Sports';
import WeatherIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import ClockIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { WatchLater } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';





const Sidebar = ({ channels }) => (
    <Drawer
        variant="permanent"
        sx={{
            width: 160,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 500,
                boxSizing: 'border-box',
                backgroundColor: '#0E0F2E'
            },
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 10, ml: 10, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Avatar
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/596c9a6460e16fc86f9d6f314fa878465103df347ebdf1e242a4b5f2540ad9d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    sx={{
                        mb: 20,
                        color: 'white',
                        width: 90,
                        height: 90,
                        padding: '10px',
                    }}
                    alt="T-Movie"
                />
                <Box
                    sx={{
                        mb: 4,
                        width: 90,
                        height: 90,
                        backgroundColor: 'transparent',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '5px solid #191A39',
                        padding: '1px',
                    }}
                >
                    <MovieIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>
                <Link to="/later">
                    <IconButton
                        aria-label="favorite"
                        sx={{
                            mb: 4,
                            color: 'white',
                            width: 90,
                            height: 90,
                            padding: '10px',
                            borderRadius: '50%', // Makes the button circular
                            border: '5px solid #191A39', // Adds a white border
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adds a background color on hover
                            },
                        }}
                    >
                        <FavoriteIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Link>
                <IconButton
                    aria-label="watch later"
                    sx={{
                        color: 'white',
                        width: 90,
                        height: 90,
                        padding: '10px',
                        borderRadius: '50%', // Makes the button circular
                        border: '5px solid #191A39', // Adds a white border
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adds a background color on hover
                        },
                    }}
                >
                    <WatchLater sx={{ fontSize: 30 }} />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, ml: 5 }}>
                {channels.map((channel) => (
                    <Paper key={channel.id} sx={{ p: 2, mb: 2, backgroundColor: '#0E0F2E', borderRadius: '50%', display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" color={'white'} sx={{ ml: 2 }} gutterBottom>
                            {channel.name}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    </Drawer>

);

const MainContent = () => {
    const [time, setTime] = useState(new Date());
    const [temperature, setTemperature] = useState(25); // Initial temperature value
    const [programs, setPrograms] = useState([]);
    const [typeData, setTypeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [channel, setChannels] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const handleSearchClick = () => {
        setShowSearchInput((prevState) => !prevState);
    };


    const cards = [
        { id: 1, title: "Live TV's", icon: <TVIcon />, path: '/livetv' },
        { id: 2, title: "Movies", icon: <MovieIcon />, path: "/movies" },
        { id: 3, title: "TV Shows", icon: <HomeIcon />, path: '/tvshows' },
        { id: 4, title: "Sports", icon: <SportsIcon />, path: '/sports' },
    ];


    //fetchPrograms   
    const fetchPrograms = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/movies/getall');
            setPrograms(response.data);
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.error('Error fetching channels:', error);
            setPrograms([]);
            setLoading(false); // Set loading to false on error
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []); // Empty dependency array ensures the effect runs only once on component mount


    //type

    const fetchTypeData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/type/getall');
            setTypeData(response.data);
        } catch (error) {
            console.error('Error fetching channels:', error);
            setTypeData([]);
        }
    };
    useEffect(() => {

        fetchTypeData();
    }, []);

    // Organize programs by type
    const programsByType = Array.isArray(typeData) && Array.isArray(programs) ? typeData.reduce((acc, type) => {
        const lastSevenDays = dayjs().subtract(7, 'day').startOf('day');
        const typePrograms = programs.filter(program => program.typeId === type.id);
        acc[type.id] = {
            ...type,
            programs: typePrograms,
            count: typePrograms.length
        };
        return acc;
    }, {}) : {};
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

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 42, backgroundColor: '#0E0F2E', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 10, mt: 5 }}>

                <Typography variant="body1" sx={{ ml: 120, mr: 1 }}>{time.toLocaleTimeString()}</Typography>
                <WeatherIcon sx={{ ml: 2, mr: 1 }} />
                <Typography variant="body1">{temperature}°C</Typography>
                <Box
                    sx={{
                        ml: 4,
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: showSearchInput ? 0 : '50%', // Set the border radius based on the state
                        width: showSearchInput ? 200 : 40,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transition: 'width 0.3s, height 0.3s, border-radius 0.3s',
                    }}
                    onClick={handleSearchClick}
                >
                    <SearchIcon sx={{ color: 'white', mx: 'auto', display: showSearchInput ? 'none' : 'block' }} />
                    <InputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            flexGrow: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: 1,
                            padding: '4px 8px',
                            color: 'white',
                            display: showSearchInput ? 'block' : 'none',
                        }}
                    />
                </Box>
            </Box>

            {loading ? ( // Render loading message while fetching movie details
                <Typography variant="body1">Loading movie details...</Typography>
            ) : programs.length > 0 ? ( // If movie data is available
                // <Card sx={{ backgroundColor: '#191A39', color: 'white' }}>
                <CardContent>
                    <Typography variant="h3" component="div">
                        {programs[0].title}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 4 }} component="p">
                        {programs[0].description}
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button variant="contained" color="primary">
                            Play
                        </Button>
                    </Box>
                </CardContent>
                // </Card>
            ) : (
                <Typography variant="body1">No movie data available.</Typography> // Render if no movie data found
            )}
            <Box mt={5} width="100%" height="500px">
                <Box
                    display="grid"
                    gridTemplateColumns={`repeat(${cards.length}, 1fr)`}
                    gap={4}
                    transition="transform 0.3s ease"
                    sx={{
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    {cards.map(card => (
                        <Card key={card.id} sx={{
                            backgroundColor: '#191A39',
                            borderRadius: 2,
                            overflow: 'hidden',
                            position: 'relative',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease'
                            },
                            width: '100%',
                            height: '100%'
                        }}>
                            <Link to={card.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <CardContent sx={{
                                    padding: 4,
                                    color: 'white',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid #0F102E', // Add a 2px solid border with the teal-like color
                                    borderRadius: '8px' // Add a border-radius of 8 pixels
                                }}>
                                    <Box sx={{
                                        mt: -38,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '280px', // Adjust the width as needed
                                        height: '200px', // Adjust the height as needed
                                        border: '5px solid #0F102E',
                                        backgroundColor: '#0F102E',
                                        borderRadius: '0%', // Make the border round
                                        '& svg': {
                                            width: '98px',
                                            height: '98px',
                                            color: 'white'
                                        }
                                    }}>
                                        {card.icon}
                                    </Box>
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 100,
                                        left: 10,
                                        padding: 2,
                                    }}>
                                        <Typography variant="h4">{card.title}</Typography>
                                    </Box>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}

                </Box>
            </Box>
        </Box>
    );
};

const MainLayout = () => {
    const [channels, setChannels] = useState([]);

    const fetchChannels = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/channel/getall');
            setChannels(response.data); // Assuming response.data is an array of channels
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    };

    useEffect(() => {
        fetchChannels();
    }, []);

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1c1c1c', color: 'white' }}>
            <Sidebar channels={channels} />
            <MainContent />
        </Box>
    );
};


export default MainLayout;
