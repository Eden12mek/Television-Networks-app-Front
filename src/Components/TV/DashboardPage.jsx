import React from 'react';
import { Box, Typography, Grid, Avatar, Button, Divider } from '@mui/material';

const DashboardPage = () => {
    return (
        <Box sx={{ bgcolor: 'neutral.100', minHeight: '100vh', p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ bgcolor: 'white', boxShadow: 1, p: 3, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar 
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3690cd15fb5f0bca8291537454271a4fcb9d3d7c7e4e46f15173a1604d049f59?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                    sx={{ width: 111, height: 111, mr: 2 }}
                                />
                                <Typography variant="h3" component="div">
                                    T-Movie
                                </Typography>
                            </Box>
                        </Box>
                        <Button fullWidth variant="contained" color="primary" sx={{ py: 2, mb: 2 }}>
                            <Avatar 
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cab5be2fe54aa340eceeeb2f6699acff7831cd1a062fd08906760621e0006?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                sx={{ width: 53, height: 53, mr: 2 }}
                            />
                            <Typography variant="h4">
                                Dashboard
                            </Typography>
                        </Button>
                        <Button fullWidth variant="outlined" sx={{ py: 2, mb: 2 }}>
                            <Avatar 
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e87dc3bc13537db0c076d79b861ce11e7790e37752b0a405f30eaf37818f674?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                sx={{ width: 53, height: 53, mr: 2 }}
                            />
                            <Typography variant="h4">
                                Channel
                            </Typography>
                        </Button>
                        <Button fullWidth variant="outlined" sx={{ py: 2, mb: 2 }}>
                            <Avatar 
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e034d4a791a2061d422665337cdb3f46a9e48752748a479231c2781f1efeec?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                sx={{ width: 53, height: 53, mr: 2 }}
                            />
                            <Typography variant="h4">
                                Program
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box sx={{ bgcolor: 'white', boxShadow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h3" component="div" color="white">
                                Dashboard
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar 
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13e89f1c434d6e7d3778aea30d08e6725f1f74d9efe32f468077f20d5860b78?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                    sx={{ width: 46, height: 46, mr: 2 }}
                                />
                                <Avatar sx={{ width: 50, height: 50, bgcolor: 'zinc.300' }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'gray.200', p: 2, borderRadius: 1 }}>
                                <Avatar 
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1b3bee6ed798f71031a6c1456c88710e3e5521c6d4e987b399d2fa85e38d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                />
                                <Typography variant="h5">Search</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button variant="text" color="primary">
                                    <Avatar 
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a672e37986b085d54583428fcf4289be3f38c2a5b10ba1db1360797ae2909280?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                        sx={{ width: 42, height: 42, mr: 2 }}
                                    />
                                    Export
                                </Button>
                                <Button variant="text" color="primary">
                                    <Avatar 
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f352957664f5c54d0f94dc16f9ac13d454dc0647be8d49a8eb276aa21207e?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" 
                                        sx={{ width: 50, height: 50, mr: 2 }}
                                    />
                                    Add Filter
                                </Button>
                                <Button variant="contained" color="primary">
                                    Add Filter
                                </Button>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 4 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ p: 3, bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                                    <Typography variant="h4" gutterBottom>
                                        System User
                                    </Typography>
                                    <Typography variant="h3">
                                        37
                                    </Typography>
                                    <Typography variant="body1" color="primary">
                                        +12% This Month
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ p: 3, bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                                    <Typography variant="h4" gutterBottom>
                                        Program
                                    </Typography>
                                    <Typography variant="h3">
                                        37
                                    </Typography>
                                    <Typography variant="body1" color="primary">
                                        +12% This Month
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ p: 3, bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                                    <Typography variant="h4" gutterBottom>
                                        Channel
                                    </Typography>
                                    <Typography variant="h3">
                                        37
                                    </Typography>
                                    <Typography variant="body1" color="primary">
                                        +12% This Month
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 4 }} />
                        <Box sx={{ p: 3, bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                Program on Category
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                                        <img
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4aa281908a71af5b9e63374c34a1bf687e09c58173349e70c588deba1c1276?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                            alt="Chart"
                                            style={{ width: '100%', borderRadius: 8 }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ p: 2, bgcolor: 'white', boxShadow: 1, borderRadius: 2 }}>
                                        <Typography variant="h5">
                                            Channel Information
                                        </Typography>
                                    </Box>
                                    <Box sx={{ p: 2, bgcolor: 'white', boxShadow: 1, borderRadius: 2, mt: 2 }}>
                                        <Typography variant="h5">
                                            Program Information
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardPage;
