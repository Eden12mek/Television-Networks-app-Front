import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
    Container,
    TextField,
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
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import styled from 'styled-components';
import ApexCharts from 'apexcharts';
import Auth from '../Auth';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [typeData, setTypeData] = useState([]);
    const [channels, setChannels] = useState([]);
    const [count, setCount] = useState(0);
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);
    const [graphRendered, setGraphRendered] = useState(false);
    const graphRef = React.useRef(null);


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


    // Organize programs by category
    const programsByCategory = Array.isArray(categoryData) && Array.isArray(programs) ? categoryData.reduce((acc, category) => {
        const lastSevenDays = dayjs().subtract(7, 'day').startOf('day');
        const categoryPrograms = programs.filter(program => program.categoryId === category.id && dayjs(program.createdAt).isAfter(lastSevenDays));

        acc[category.id] = {
            ...category,
            programs: categoryPrograms,
            count: categoryPrograms.length
        };
        return acc;
    }, {}) : {};

    useEffect(() => {
        const series = Object.values(programsByCategory).map(category => category.count);
        const labels = Object.values(programsByCategory).map(category => category.name);

        setChartOptions({
            colors: ["#8D1FB4", "#E10070", "#008000", "#1484E6", "#16C138"],
            chart: {
                type: "donut",
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "50%", // Adjust the thickness of the donut chart
                    },
                },
            },
            labels: labels,
            series: series,
            legend: {
                show: true,
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
        });

        setChartSeries(series);
    }, [programsByCategory]);




    useEffect(() => {

        const getGraphOptions = () => {
            const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
            const seriesData = [
                {
                    name: "Recommended ",
                    data: [
                        { x: "Mon", y: 20 },
                        { x: "Tue", y: 35 },
                        { x: "Wed", y: 45 },
                        { x: "Thu", y: 30 },
                        { x: "Fri", y: 55 },
                    ],
                },
                {
                    name: "Popular",
                    data: [
                        { x: "Mon", y: 40 },
                        { x: "Tue", y: 15 },
                        { x: "Wed", y: 25 },
                        { x: "Thu", y: 50 },
                        { x: "Fri", y: 35 },
                    ],
                },
                {
                    name: "Featured",
                    data: [
                        { x: "Mon", y: 10 },
                        { x: "Tue", y: 25 },
                        { x: "Wed", y: 35 },
                        { x: "Thu", y: 20 },
                        { x: "Fri", y: 45 },
                    ],
                },
                {
                    name: "Comedy",
                    data: [
                        { x: "Mon", y: 30 },
                        { x: "Tue", y: 45 },
                        { x: "Wed", y: 55 },
                        { x: "Thu", y: 40 },
                        { x: "Fri", y: 65 },
                    ],
                },
                {
                    name: "Adventure",
                    data: [
                        { x: "Mon", y: 50 },
                        { x: "Tue", y: 35 },
                        { x: "Wed", y: 50 },
                        { x: "Thu", y: 40 },
                        { x: "Fri", y: 65 },
                    ],
                },
            ];

            return {
                series: seriesData,
                colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#FB977D", "#16BDCA"], // Example colors
                chart: {
                    height: "380px",
                    width: "100%",
                    type: "line",
                    sparkline: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: daysOfWeek,
                    type: "category",
                },
            };
        };
        if (graphRef.current && !graphRendered) {
            const graph = new ApexCharts(graphRef.current, getGraphOptions());
            graph.render();
            setGraphRendered(true);
        }

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (graphRef.current) {
                graphRef.current.innerHTML = ""; // Clear the chart container
            }
        };
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const StatBox = ({ title, count, percentageChange, iconSrc, extraInfo }) => (
        <Box flex={1} p={3} bgcolor="white" borderRadius={2} boxShadow={3} display="flex" flexDirection="row" alignItems="center" gap={2}>
            <Box flex={1}>
                <Typography variant="h4" mt={-1} fontWeight="bold">{title}</Typography>
                <Typography variant="h4" mt={6}>{count}</Typography>
                <Typography variant="h6" mt={2}>{percentageChange} This Month</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" p={2} bgcolor="#030327" borderRadius={1} mt={-8}>
                <img src={iconSrc} alt="Icon" style={{ width: 63 }} />
            </Box>
        </Box>
    );



    // Fetch channels from the server
    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await axios.get('http://localhost:4000/General/channel/getall');
                setChannels(response.data);
            } catch (error) {
                console.error('Error fetching channels:', error);
            }
        };
        fetchChannels();
    }, []);

    //fetchPrograms   
    const fetchPrograms = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/movies/getall');
            setPrograms(response.data);
        } catch (error) {
            console.error('Error fetching channels:', error);
            setPrograms([]);
        }
    };

    //categories

    const fetchCategoryData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/General/categories/getall');
            setCategoryData(response.data);
        } catch (error) {
            console.error('Error fetching channels:', error);
            setCategoryData([]);
        }
    };

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
        fetchCategoryData();
        fetchPrograms();
        fetchTypeData();
    }, []);




    // Organize programs by type
    const programsByType = Array.isArray(typeData) && Array.isArray(programs) ? typeData.reduce((acc, type) => {
        const typePrograms = programs.filter(program => program.typeId === type.id);
        acc[type.id] = {
            ...type,
            programs: typePrograms,
            count: typePrograms.length
        };
        return acc;
    }, {}) : {};





    //user counter
    const fetchUserCount = async () => {
        try {
            const response = await axios.get('http://localhost:4000/ums/userCount');
            setCount(response.data.count);
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };

    useEffect(() => {
        fetchUserCount();
    }, []);





    const statItems = [
        {
            title: 'System User',
            count: count,
            percentageChange: '+12%',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b795853b8ded18cb603d00c837091b24c2604451db229dfbc2b28c38cef2bed?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&',
            extraInfo: `Total Users: ${count}`
        },
        {
            title: 'Program',
            count: programs.length,
            percentageChange: '+12%',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b795853b8ded18cb603d00c837091b24c2604451db229dfbc2b28c38cef2bed?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&',
            extraInfo: `Total Programs: ${programs.length}`
        },
        {
            title: 'Channel',
            count: channels.length,
            percentageChange: '+12%',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b795853b8ded18cb603d00c837091b24c2604451db229dfbc2b28c38cef2bed?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&',
            extraInfo: `Total Channels: ${channels.length}`
        }
    ];

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
                        Dashboard
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
                    {/* <Box display="flex" justifyContent="center" alignItems="center" p={4} bgcolor="white" borderRadius={4} boxShadow={2} maxWidth={{ xs: '100%', md: '2338px' }}> */}
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
                                        Add Filter
                                    </Button>
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 2, mb: 1, mx: 1 }} />
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={5} mt={5}>
                                {statItems.map((item, index) => (
                                    <StatBox
                                        key={index}
                                        title={item.title}
                                        count={item.count}
                                        percentageChange={item.percentageChange}
                                        iconSrc={item.iconSrc}
                                        extraInfo={item.extraInfo}
                                    />
                                ))}
                            </Box>

                            <Box display="flex" flexDirection="column" mt={12} bgcolor="white" borderRadius={2} boxShadow={3} p={2} width="75%">
                                <Box display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor="black" borderRadius={2} color="white" pr={50}>
                                    <Typography variant="h6" ml={1}>Program on Category</Typography>

                                </Box>
                                <Grid container spacing={2} mt={1} ml={0}>
                                    <Grid item xs={12} md={8}>
                                        <div
                                            className="bg-white dark:bg-gray-700 p-3 rounded-lg"

                                        ></div>
                                    </Grid>

                                    <Grid container spacing={3}>
                                        {chartSeries.length > 0 && (
                                            <ReactApexChart
                                                options={chartOptions}
                                                series={chartSeries}
                                                type="donut"
                                                height="350"
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>


                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={7} bgcolor="white" borderRadius={2} boxShadow={3} p={3}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={7}>
                                        <Typography variant="h4" color="white" bgcolor="black" p={2} borderRadius={2}>Program with Type</Typography>
                                        <div className="" ref={graphRef}></div>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p={1} bgcolor="black" color="white" borderRadius={2}>
                                            <Typography variant="h4"> {programs.length}</Typography>
                                            <Typography variant="h4">overall program</Typography>
                                        </Box>
                                        <Grid container spacing={3}>
                                            {Object.values(programsByType).map(type => (
                                                <Grid item xs={12} md={4} key={type.id} style={{ maxWidth: '400px' }}>
                                                    <Typography variant="h6" gutterBottom>
                                                        {type.name} ({type.count})
                                                    </Typography>
                                                    {type.programs.map((program, index) => (
                                                        <Box key={program.id} mt={index > 0 ? 1 : 0}>
                                                            <Typography variant="body1" component="div">
                                                                {program.name}
                                                            </Typography>
                                                            <Typography variant="body2" component="div" color="text.secondary">
                                                                {program.rating}
                                                            </Typography>
                                                            {index < type.programs.length - 1 && <Box my={0.5} />}
                                                        </Box>
                                                    ))}
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};



export default Auth(Dashboard);
