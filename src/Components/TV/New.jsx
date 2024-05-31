import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const New = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            fontWeight="fontWeightBold"
            color="text.primary"
            maxWidth={653}
        >
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',
                    px: { xs: 2.5, md: 5 },
                    py: 4,
                    bgcolor: 'indigo.950',
                    // color: 'white',
                    borderRadius: 1,
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    fontSize: { xs: '2rem', md: '3rem' },
                }}
            >
                <Avatar
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8ae3cc68487a297b90fda6c7bfb0818d5d03bf64046314c05474171b8dd03b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    sx={{ width: 53, height: 53 }}
                    alt="Dashboard"
                />
                <Typography variant="h4">Dashboard</Typography>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',
                    px: { xs: 2.5, md: 5 },
                    py: 4,
                    borderRadius: 1,
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    fontSize: { xs: '2rem', md: '3rem' },
                }}
            >
                <Avatar
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3620781fe146b6ed93e1132c8674da2643f3764a91d49c29e2a203facc155f?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    sx={{ width: 53, height: 53 }}
                    alt="Channel"
                />
                <Typography variant="h4">Channel</Typography>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',
                    px: { xs: 2.5, md: 5 },
                    py: 4,
                    borderRadius: 1,
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    fontSize: { xs: '2rem', md: '3rem' },
                }}
            >
                <Avatar
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b3cc57fbebc318569a8ddcb66bd929913f8ea9e3e2af02864da1e403357294?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    sx={{ width: 53, height: 53 }}
                    alt="Program"
                />
                <Typography variant="h4">Program</Typography>
            </Paper>
        </Box>
    );
};

export default New;
