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
    Group as GroupIcon 
} from '@mui/icons-material';
import AddChannel from './AddChannel';

const Logout = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'neutral.100' }}>
            <Box sx={{ width: '15%', minWidth: 300, display: 'flex', flexDirection: 'column' }}>
                <Paper elevation={3} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" px={2} py={1.24} boxShadow={3} bgcolor="white">
                        <Container maxWidth={false} disableGutters>
                            <Box display="flex" alignItems="center" flexDirection="row"px={{ xs: 3, md: 3 }} width="100%">
                                <Avatar
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/596c9a6460e16fc86f9d6f314fa878465103df347ebdf1e242a4b5f2540ad9d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                                    sx={{ width: 59, height: 59, ml:2, mt: { xs: 4, md: 0 } }}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'grey.900', p: 2.4 }}>
                    <Typography variant="h4" sx={{ ml: 7, color: 'white' }}>
                        Dashboard
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
                                    <Box  width={970} display="flex" flexDirection="column" justifyContent="center" alignItems="start" p={2} bgcolor="grey.200" color="text.secondary"gap={2}>
                                        <Box display="flex" gap={1} justifyContent="space-between">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0348e7a71dcadd27cfa56bac7d3ed123f91b8592105f71f114e0e955b0a5a56d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Search Icon" style={{ width: 25, height: 25 }} />
                                            <Typography>Search</Typography>
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
                                        <Button variant="contained" color="primary">Add Filter</Button>
                                    </Box>
                                </Box>
                                <Divider sx={{ mt: 2, mx: 1 }} />
                                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={5}>
                                    {['System User', 'Program', 'Channel'].map((item, index) => (
                                        <Box key={index} flex={1} p={3} bgcolor="white" borderRadius={2} boxShadow={3} display="flex" flexDirection="row" alignItems="center" gap={2}>
                                            <Box flex={1}>
                                                <Typography variant="h4" mt={-1} fontWeight="bold">{item}</Typography>
                                                <Typography variant="h4" mt={6}>37</Typography>
                                                <Typography variant="h6" mt={1} >+12% This Month</Typography>
                                            </Box>
                                            <Box display="flex" justifyContent="center" alignItems="center" p={2} bgcolor="primary.main" borderRadius={1}mt={-8}>
                                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b795853b8ded18cb603d00c837091b24c2604451db229dfbc2b28c38cef2bed?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Icon" style={{ width: 63 }} />
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Box display="flex" flexDirection="column" mt={7} bgcolor="white" borderRadius={2} boxShadow={3} p={3}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="black" borderRadius={2} color="white">
                                        <Typography variant="h4" ml={2}>Program on Category</Typography>
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f67459de57d298769361de06d5ca333e76dd029602803b603895a4398311a2?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Icon" style={{ width: 16 }} />
                                    </Box>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={12} md={8}>
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4aa281908a71af5b9e63374c34a1bf687e09c58173349e70c588deba1c1276?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Graph" style={{ width: '100%' }} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            {['Name', 'Name', 'Name', 'Name', 'Name'].map((name, index) => (
                                                <Box key={index} display="flex" alignItems="center" gap={2} mt={index > 0 ? 2 : 0}>
                                                    <Avatar sx={{ bgcolor: ['green', 'fuchsia', 'pink', 'green', 'sky'][index], height: 60, width: 60 }} />
                                                    <Typography variant="h5">{name}</Typography>
                                                </Box>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={7} bgcolor="white" borderRadius={2} boxShadow={3} p={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={7}>
                                            <Typography variant="h4" color="white" bgcolor="black" p={2} borderRadius={2}>Program with Type</Typography>
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10e55ca3bfca0f3c957e54b8c6544f28fcefd1e988958ec18bafa3d6d06a90d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&" alt="Graph" style={{ width: '100%', marginTop: 16 }} />
                                        </Grid>
                                        <Grid item xs={12} md={5}>
                                            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p={2} bgcolor="black" color="white" borderRadius={2}>
                                                <Typography variant="h4">201</Typography>
                                                <Typography>overall program</Typography>
                                            </Box>
                                            {['Name', 'Name', 'Name', 'Name', 'Name'].map((name, index) => (
                                                <Box key={index} display="flex" alignItems="center" gap={2} mt={2}>
                                                    <Avatar sx={{ bgcolor: ['pink', 'green', 'purple', 'yellow', 'blue'][index], height: 60, width: 60 }} />
                                                    <Typography variant="h5">{name}</Typography>
                                                    <Typography variant="h6" ml="auto" color="text.secondary">500</Typography>
                                                </Box>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    {/* </Box> */}
                </Paper>
            </Box>
        </Box>
    );
};

export default Logout;
