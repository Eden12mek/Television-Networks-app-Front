import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
    Container,
    Divider,
} from '@mui/material';
import {
    Search as SearchIcon,
    IosShare as ExportIcon,
    FilterList as FilterListIcon,
    Add as AddIcon,
    Group as GroupIcon // Import the icon you're using in the screenshot
} from '@mui/icons-material';
import AddChannel from './AddChannel';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'neutral.100' }}>
            <Box sx={{ width: '15%', minWidth: 200, display: 'flex', flexDirection: 'column' }}>
                <Paper elevation={3} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" px={2} py={2} boxShadow={3} bgcolor="white">
                        <Container maxWidth={false} disableGutters>
                            <Box display="flex" alignItems="center" flexDirection="row" width="100%">
                                <Avatar
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/596c9a6460e16fc86f9d6f314fa878465103df347ebdf1e242a4b5f2540ad9d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    sx={{ width: 111, height: 55, mt: { xs: 2, md: 0 } }}
                                    variant="square"
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
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc2a6dc8993a88d1b6423c1ed2682525a715c81df6b3277b10588926fb3cd56?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                sx={{ width: 53, height: 53 }}
                                variant="square"
                            />
                            <Link to="/dashboard">
                                <Typography
                                    variant="h5"
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'grey.900', p: 2.3 }}>
                    <Typography variant="h4" sx={{ ml: 7, color: 'white' }}>
                        Dashboard
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24280f58b233f95f4a3bd288d1205a45a787b8f5b8caa8c95876efacd64ac8e7?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                            sx={{ width: 46, height: 46 }}
                        />
                        <Link to="/logout">
                            <Avatar sx={{ width: 50, height: 50, bgcolor: 'grey.300', ml: 2 }} />
                        </Link>
                    </Box>
                </Box>
                <Paper elevation={3} sx={{ p: 3, mt: 3, flexGrow: 1, overflowY: 'auto', ml: 3, mr: 3, mb: 2 }}>
                    <Grid container direction="column" spacing={2} mt={-1} mr={-100}>
                        <Grid item container justifyContent="space-between" alignItems="center">
                            <Button startIcon={<SearchIcon />} variant="outlined" sx={{ ml: 6, textTransform: 'none', alignItems: 'flex-start',  paddingRight: '1000px'}}>
                                Search
                            </Button>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button startIcon={<ExportIcon />} variant="text" sx={{ mr: 3, textTransform: 'none' }}>
                                    Export
                                </Button>
                                <Button startIcon={<FilterListIcon />} variant="text" sx={{ mr: 3, textTransform: 'none' }}>
                                    Add Filter
                                </Button>
                                <Button variant="contained" fontSize='2rem' color="primary" sx={{ mr: 4.5, textTransform: 'none' }} onClick={handleOpen}>
                                    Add Filter
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item mt={1.5} ml={5} mr={4} >
                            <Divider sx={{ width: '99%', mx: 'auto' }} />
                        </Grid>
                        {/* <Grid item container spacing={2} sx={{ ml: 1, mt: 2 }}> */}
                        <Grid container spacing={2} sx={{ mt: 3,maxWidth:1570, justifyContent: 'space-between' , ml:4.5, mr:-1}}>
                            <Grid item xs={4} >
                                <Paper elevation={5} sx={{ p: 5, maxWidth: 400, maxHeight: 500, borderRadius: 3  }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ ml: 1 }}>
                                            <Typography fontWeight='bold' color='black' variant="h5" gutterBottom>
                                                System User
                                            </Typography>
                                            <Typography sx={{ mt: 5 }} variant="h4">37</Typography>
                                            <Typography sx={{ mt: 2 }} variant="h5" color="black">
                                                +12% This Month
                                            </Typography>
                                        </Box>
                                        <GroupIcon sx={{ fontSize: 40, color: 'primary.main', ml: 2 }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper elevation={5} sx={{ p: 5, maxWidth: 400, maxHeight: 500, borderRadius: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ ml: 1 }}>
                                            <Typography fontWeight='bold' color='black' variant="h5" gutterBottom>
                                                Program
                                            </Typography>
                                            <Typography sx={{ mt: 5 }} variant="h4">37</Typography>
                                            <Typography sx={{ mt: 2 }} variant="h5" color="black">
                                                +12% This Month
                                            </Typography>
                                        </Box>
                                        <GroupIcon sx={{ fontSize: 40, color: 'primary.main', ml: 2 }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper elevation={5} sx={{ p: 5, maxWidth: 400, maxHeight: 400, borderRadius: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ mr: 1 }}>
                                            <Typography fontWeight='bold' color='black' variant="h5" gutterBottom>
                                                Channel
                                            </Typography>
                                            <Typography sx={{ mt: 5 }} variant="h4">37</Typography>
                                            <Typography sx={{ mt: 2 }} variant="h5" color="black">
                                                +12% This Month
                                            </Typography>
                                        </Box>
                                        <GroupIcon sx={{ fontSize: 40, color: 'primary.main', ml: 2 }} />
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>


                        {/* </Grid> */}
                    </Grid>
                </Paper>
            </Box>
        </Box>
    );
};

export default Dashboard;
