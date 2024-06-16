import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Tabs, Tab, Card, CardContent, CardMedia, IconButton, InputBase } from '@mui/material';
import WeatherIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import ClockIcon from '@mui/icons-material/AccessTime';
import MovieIcon from '@mui/icons-material/Movie';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { WatchLater } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Later = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [temperature, setTemperature] = useState(25);
    const [showSearchInput, setShowSearchInput] = useState(false);

    const [favorites, setFavorites] = useState([]);
    const [laters, setLaters] = useState([]);

    // Fetch image URL from localStorage
    const userImage = localStorage.getItem('userImage');

    const handleSearchClick = () => {
        setShowSearchInput((prevState) => !prevState);
    };



    const handleFavoriteClick = (program) => {
        // Check if the program is already in favorites
        const index = favorites.findIndex(item => item.id === program.id);

        if (index === -1) {
            // Program not found in favorites, add it
            const newFavorites = [...favorites, program];
            setFavorites(newFavorites);
            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            // Program is already in favorites, remove it
            const newFavorites = favorites.filter(item => item.id !== program.id);
            setFavorites(newFavorites);
            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);
    const handleLaterClick = (program) => {
        // Check if the program is already in favorites
        const index = laters.findIndex(item => item.id === program.id);

        if (index === -1) {
            // Program not found in favorites, add it
            const newLaters = [...laters, program];
            setLaters(newLaters);
            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(newLaters));
        } else {
            // Program is already in favorites, remove it
            const newLaters = laters.filter(item => item.id !== program.id);
            setLaters(newLaters);
            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(newLaters));
        }
    };
    useEffect(() => {
        const storedLaters = JSON.parse(localStorage.getItem('laters')) || [];
        setLaters(storedLaters);
    }, []);

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#11102F', color: '11102F' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 20, ml: 13, alignItems: 'center' }}>
                <Link to="/mainlayout">
                    <IconButton
                        aria-label="arrow forward"
                        sx={{
                            mb: 14,
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
                        <KeyboardArrowLeftIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Link>
                <Link to="/movies">
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
                </Link>
                <Link to="/favorite">
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

            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 10, backgroundColor: '#11102F', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 20 }}>
                    <Typography variant="h4" sx={{ ml: 4 }}>Watch Later</Typography>
                    <WeatherIcon sx={{ ml: 110, mr: 1 }} />
                    <Typography variant="body1">{temperature}°C</Typography>
                    <Typography variant="body1" sx={{ ml: 5, mr: 4 }}>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'short'
                        })}
                    </Typography>
                    <Typography variant="body1" sx={{ ml: 1, mr: 4 }}>
                        {new Date().toLocaleTimeString()}
                    </Typography>
                    <Box
                        sx={{
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
                    {userImage && <img src={userImage} alt="User" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />}
                </Box>

                <Divider sx={{ mb: 7, mx: 1, ml: 2, mr: 5, bgcolor: 'grey.500' }} />

                {favorites.length === 0 ? (
                    <Typography>You have no favorite movies.</Typography>
                ) : (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
                        {favorites.map((program) => (
                            <Card
                                key={program.id}
                                sx={{
                                    width: 350,
                                    backgroundColor: '#10112D',
                                    position: 'relative',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s ease',
                                    },
                                    border: '1px solid #DBDBDF', borderRadius: 2
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={program.imageUrl} // Ensure 'imageUrl' is correct as per your backend response
                                    alt={program.title}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            color: 'white',
                                            padding: '10px 10px'
                                        }}
                                    >
                                        {program.duration}
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ mt: 2, color: 'white', textTransform: 'capitalize' }}>
                                        {program.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, mt: 1, alignItems: 'center' }}>
                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: 'transparent',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                border: '1px solid white',
                                                padding: '1px',
                                            }}
                                        >
                                            <PlayArrowIcon sx={{ color: 'white', fontSize: 30 }} />
                                        </Box>
                                        <IconButton
                                            aria-label="add to watch later"
                                            onClick={() => handleLaterClick(program)}
                                            sx={{ color: laters.some((item) => item.id === program.id) ? 'red' : 'white' }}
                                        >
                                            <ClockIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};



export default Later;