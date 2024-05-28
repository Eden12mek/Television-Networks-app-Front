import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const New = () => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'start', pt: 2.5, pl: 5, boxShadow: 3, bgcolor: 'slate.900' }}>
      <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', color: 'white' }}>
        Channel
      </Typography>
      <Box display="flex" gap={2} justifyContent="space-between" px={{ xs: 1.25, md: 2.5 }} mt={1}>
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94a3186516d2fbe8f2967c6f88cedeef538129cb0ec23a48f78c8027f2ba4cdf?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
          sx={{ width: 46, height: 'auto', aspectRatio: '0.92', alignSelf: 'start' }}
          variant="square"
        />
        <Box display="flex" flexDirection="column" pb={3}>
          <Box sx={{ width: 50, height: 50, bgcolor: 'grey.300', borderRadius: '50%' }} />
        </Box>
      </Box>
    </Paper>
  );
};

export default New;
