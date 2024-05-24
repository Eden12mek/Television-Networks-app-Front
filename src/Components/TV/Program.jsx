import React from 'react'
import { Box, Paper, Typography, Grid, Button } from '@mui/material';


const Program = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" px={4} py={4} bgcolor="white" borderRadius={2} boxShadow={1}>
          <Box display="flex" flexDirection="column" width="100%" maxWidth="2280px">
            <Box width="100%">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Paper elevation={3} sx={{ p: 2, bgcolor: 'grey.200' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1b3bee6ed798f71031a6c1456c88710e3e5521c6d4e987b399d2fa85e38d5?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                        alt="Search Icon"
                        style={{ width: 50, height: 50 }}
                      />
                      <Typography variant="h4" color="textSecondary">Search</Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Paper elevation={3} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e51dc7c6f98dea16787e831b9d2b7cb3dcffdd17a3a77d2ba007116c7c576d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                          alt="Export Icon"
                          style={{ width: 42 }}
                        />
                        <Typography variant="h4" color="primary">Export</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={3} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c157ebe77c5ba0d23c8b18230931628e8a5fa0e61d293471a7949af2ff5e293?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                          alt="Filter Icon"
                          style={{ width: 50 }}
                        />
                        <Typography variant="h4" color="primary">Add Filter</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth>
                      Add Channel
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={8}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h4">Name</Typography>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/570279a8dbb9d89c477111833ea6288b4bf5172d5bab1b1c2d78fd761eef0af0?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                      alt="Name Icon"
                      style={{ width: 25, marginLeft: 8 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4">Status</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4">Action</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mt={8} ml={1}>
              <Typography variant="h4">GOT</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Paper elevation={3} sx={{ p: 2, bgcolor: 'green.100', borderRadius: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={7}>
                        <Box display="flex" alignItems="center">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e8589f1f87f4915a64507d2244d750da597a96598cfb6dec22784200aa31c4?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                            alt="Active Icon"
                            style={{ width: 35 }}
                          />
                          <Typography variant="h4" color="green" ml={2}>Active</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={5}>
                        <Box display="flex" justifyContent="center">
                          <Box bgcolor="green" borderRadius="50%" width={65} height={65} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2a647718846f3cb926fce7c9bfbd47a8a81203bf24728fb0ff0b74d4cb788e?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                      alt="Icon 1"
                      style={{ width: 85 }}
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dda3994d5c729cbf20ac242c4da6e6643a7888628b87f3acd5cba2d2d6552fd?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                      alt="Icon 2"
                      style={{ width: 33, marginLeft: 8 }}
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/108e63e330ae108ae03914d4f871ec6d6b0e1b3b00924656d790d185db51d14b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                      alt="Icon 3"
                      style={{ width: 27, marginLeft: 8 }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      );
}

export default Program