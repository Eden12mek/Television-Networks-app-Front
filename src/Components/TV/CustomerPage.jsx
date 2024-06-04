import React from 'react';
import { Box } from '@mui/material';

const CustomerPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '56.25%', // Aspect ratio 16:9
      }}
    >
      <Box
        component="img"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b26daead6d1845676d3b91bd5b69267f7d44dba214e0ce8362e3917c0f51725?apiKey=83349bf32574467093878959cd2ece82&"
        alt="Customer"
      />
    </Box>
  );
};

export default CustomerPage;
