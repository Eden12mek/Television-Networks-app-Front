import React from 'react';
import { Box, Grid, Typography, Card, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChannelIcon from '@mui/icons-material/VideoLibrary';
import ProgramIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search'; 
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category'; 

const Dashboard = () => {
    return (
        <Box bgcolor="neutral.100" p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Link to="/">
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Avatar
                                    alt="T-Movie Logo"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3312711bf58b75f2c3afe29e2d7305c1eb9e256748b914574f808c5cb851c2b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    sx={{ width: 111, height: 111 }}
                                />
                                <Typography variant="h4" fontWeight="bold" mt={2}>T-Movie</Typography>
                            </Box>
                        </Link>
                    </Card>

                    <Card variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: 'indigo.950' }}>
                        <Link to="/">
                            <Box display="flex" alignItems="center" justifyContent="center" color="white">
                                <DashboardIcon fontSize="large" />
                                <Typography variant="h4" fontWeight="bold" ml={1}>Dashboard</Typography>
                            </Box>
                        </Link>
                    </Card>

                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Link to="/channel">
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <ChannelIcon fontSize="large" />
                                <Typography variant="h4" fontWeight="bold" ml={1}>Channel</Typography>
                            </Box>
                        </Link>
                    </Card>

                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Link to="/program">
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <ProgramIcon fontSize="large" />
                                <Typography variant="h4" fontWeight="bold" ml={1}>Program</Typography>
                            </Box>
                        </Link>
                    </Card>
                </Grid>

                <Grid item xs={12} md={10}>
                    <Card variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: 'slate.950' }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" color="white">
                            <Typography variant="h4" fontWeight="bold">Dashboard</Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar
                                    alt="User Avatar"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb194586129aa8468fa164f35030b78430171bf107bdd3c47064962dff8e575e?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    sx={{ width: 46, height: 46, mr: 2 }}
                                />
                                <Avatar sx={{ bgcolor: 'zinc.300', width: 50, height: 50 }} />
                            </Box>
                        </Box>
                    </Card>

                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Box display="flex" alignItems="center" bgcolor="gray.200" p={2}>
                                    <SearchIcon fontSize="large" />
                                    <Typography variant="h5" ml={2}>Search</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box display="flex" alignItems="center" color="indigo.950">
                                        <SaveAltIcon fontSize="large" />
                                        <Typography variant="h5" ml={1}>Export</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center" color="indigo.950">
                                        <AddIcon fontSize="large" />
                                        <Typography variant="h5" ml={1}>Add Filter</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                    <Box my={2}>
                        <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                                        <Typography variant="h5" fontWeight="bold">System User</Typography>
                                        <Typography variant="h3" color="indigo.950" mt={4}>37</Typography>
                                        <Typography variant="h5" mt={2}>
                                            <span style={{ color: 'indigo.950' }}>+12%</span> This Month
                                        </Typography>
                                        <Box mt={4} display="flex" justifyContent="center">
                                            <Avatar sx={{ bgcolor: 'indigo.950', width: 93, height: 93 }} />
                                        </Box>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                                        <Typography variant="h5" fontWeight="bold">Program</Typography>
                                        <Typography variant="h3" color="indigo.950" mt={4}>37</Typography>
                                        <Typography variant="h5" mt={2}>
                                            <span style={{ color: 'indigo.950' }}>+12%</span> This Month
                                        </Typography>
                                        <Box mt={4} display="flex" justifyContent="center">
                                            <Avatar sx={{ bgcolor: 'indigo.950', width: 93, height: 93 }} />
                                        </Box>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                                        <Typography variant="h5" fontWeight="bold">Channel</Typography>
                                        <Typography variant="h3" color="indigo.950" mt={4}>37</Typography>
                                        <Typography variant="h5" mt={2}>
                                            <span style={{ color: 'indigo.950' }}>+12%</span> This Month
                                        </Typography>
                                        <Box mt={4} display="flex" justifyContent="center">
                                            <Avatar sx={{ bgcolor: 'indigo.950', width: 93, height: 93 }} />
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>

                    <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Typography variant="h4" fontWeight="bold" bgcolor="black" color="white" p={2} textAlign="right" borderRadius={2}>
                            Program on Category
                        </Typography>
                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12} md={6}>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4aa281908a71af5b9e63374c34a1bf687e09c58173349e70c588deba1c1276?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    alt="Category"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="h5" fontWeight="bold">
                                    <CategoryIcon sx={{ color: 'fuchsia.700', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'pink.600', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'green.800', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'orange.400', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'red.500', mr: 2 }} />
                                    Name
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="h5" fontWeight="bold">
                                    <CategoryIcon sx={{ color: 'yellow.500', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'amber.600', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'teal.400', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'emerald.600', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'blue.800', mr: 2 }} />
                                    Name
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" mt={4}>
                                    <CategoryIcon sx={{ color: 'violet.500', mr: 2 }} />
                                    Name
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
