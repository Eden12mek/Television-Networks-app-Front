import React, { useState, useEffect } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import TVIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SportsIcon from '@mui/icons-material/Sports';
import WeatherIcon from '@mui/icons-material/WbSunny';
import ClockIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';

const channels = [
    { name: 'HBO', icon: <TVIcon /> },
    { name: 'ABC TV', icon: <HomeIcon /> },
    { name: 'AMC TV', icon: <MovieIcon /> },
    { name: 'ESPN', icon: <SportsIcon /> },
    // Add more channels here
];

const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: 160,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: 160, boxSizing: 'border-box', backgroundColor: '#1c1c1c' },
        }}
    >
        <Box sx={{ overflow: 'auto' }}>
            <Avatar
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/596c9a6460e16fc86f9d6f314fa878465103df347ebdf1e242a4b5f2540ad9d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                sx={{ width: 59, height: 59, ml: 2, mt: { xs: 4, md: 0 } }}
                alt="T-Movie"
            />
            <List>
                {channels.map((channel, index) => (
                    <ListItem button key={index} sx={{ color: 'white' }}>
                        <ListItemIcon sx={{ color: 'white' }}>{channel.icon}</ListItemIcon>
                        <ListItemText primary={channel.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
);

const MainContent = () => {
    const [time, setTime] = useState(new Date());
    const [temperature, setTemperature] = useState(25); // Initial temperature value
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch movie details from the server
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get('localhost:3000/General/movies'); // Fetch movie details
                setMovie(response.data); // Update movie state with the fetched data
                setLoading(false); // Set loading state to false
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setLoading(false); // Set loading state to false
            }
        };

        fetchMovieDetails(); // Call the fetchMovieDetails function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 160, backgroundColor: '#1c1c1c', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ClockIcon sx={{ mr: 1 }} />
                <Typography variant="body1">{time.toLocaleTimeString()}</Typography>
                <WeatherIcon sx={{ ml: 2, mr: 1 }} />
                <Typography variant="body1">{temperature}°C</Typography>
            </Box>
            {loading ? ( // Render loading message while fetching movie details
                <Typography variant="body1">Loading movie details...</Typography>
            ) : movie ? ( // If movie data is available
                <Card sx={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {movie.description}
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" color="primary">
                                Play
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="body1">No movie data available.</Typography> // Render if no movie data found
            )}
            <Box sx={{ mt: 6 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
                    <Box sx={{ backgroundColor: '#424242', p: 4, borderRadius: 1 }}>Live TV's</Box>
                    <Box sx={{ backgroundColor: '#424242', p: 4, borderRadius: 1 }}>Movies</Box>
                    <Box sx={{ backgroundColor: '#424242', p: 4, borderRadius: 1 }}>TV Shows</Box>
                    <Box sx={{ backgroundColor: '#424242', p: 4, borderRadius: 1 }}>Sports</Box>
                </Box>
            </Box>
        </Box>
    );
};


const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1c1c1c', color: 'white' }}>
            <Sidebar />
            <MainContent />
        </Box>
    );
};

export default MainLayout;
