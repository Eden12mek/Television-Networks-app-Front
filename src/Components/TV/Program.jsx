import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  IconButton,
  Container
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Movie as MovieIcon,
  Tv as TvIcon, 
  Search as SearchIcon,
  IosShare as ExportIcon, 
  FilterList as FilterListIcon,
  Add as AddIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const Program = () => {
  return (
    <Box sx={{ bgcolor: 'neutral.100', p: 2 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 5 }}>
                <Avatar
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29c91f404d1a862ee7096be93f2c2b199cf2c3498a4e5fc045cabd5154f02f43?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  sx={{ width: 111, height: 111, mt: 2 }}
                />
                <Typography variant="h3" sx={{ mt: 2 }}>
                  T-Movie
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
              <Link to="/dashboard">
                <Button fullWidth startIcon={<DashboardIcon />} sx={{ mb: 1 }}>
                  Dashboard
                </Button>
                </Link>
                <Link to="/channel">
                <Button fullWidth startIcon={<TvIcon />} sx={{ mb: 1 }}>
                  Channel
                </Button>
                </Link>
                <Button fullWidth startIcon={<MovieIcon />} sx={{ mb: 1 }}>
                  Program
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'grey.900', p: 2 }}>
                <Typography variant="h3" sx={{ color: 'white' }}>
                  Program
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/24280f58b233f95f4a3bd288d1205a45a787b8f5b8caa8c95876efacd64ac8e7?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    sx={{ width: 46, height: 46 }}
                  />
                  <Avatar sx={{ width: 50, height: 50, bgcolor: 'grey.300', ml: 2 }} />
                </Box>
              </Box>
              <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Button startIcon={<SearchIcon />} variant="outlined">
                    Search
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button startIcon={<ExportIcon />} variant="text" sx={{ mr: 2 }}>
                      Export
                    </Button>
                    <Button startIcon={<FilterListIcon />} variant="text" sx={{ mr: 2 }}>
                      Add Filter
                    </Button>
                    <Button startIcon={<AddIcon />} variant="contained" color="primary">
                      Add Program
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6">Id</Typography>
                  <Typography variant="h6">Title</Typography>
                  <Typography variant="h6">Duration</Typography>
                  <Typography variant="h6">Description</Typography>
                  <Typography variant="h6">Status</Typography>
                  <Typography variant="h6">Action</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography>1</Typography>
                  <Typography>Game of Thrones</Typography>
                  <Typography>2h</Typography>
                  <Typography>
                    Medieval Movie
                    <br />
                    Series
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'green.100', p: 1, borderRadius: 1, mr: 2 }}>
                      <DoneIcon color="success" />
                      <Typography sx={{ ml: 1, color: 'green.800' }}>Active</Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: 'green.800', width: 65, height: 65 }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Program;
