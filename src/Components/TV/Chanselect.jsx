import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '30px',
    [theme.breakpoints.down('md')]: {
      padding: '10px',
      maxWidth: '100%',
    },
  },
  section: {
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },
  },
  textField: {
    width: '100%',
    marginBottom: '10px',
    '& .MuiInputBase-root': {
      fontSize: '4xl',
    },
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '4xl',
    fontWeight: 'bold',
    textTransform: 'none',
  },
  typographyBox: {
    display: 'flex',
    gap: 5,
    justifyContent: 'end',
    px: 20,
    py: 3,
    mt: 6,
    width: '50%',
    borderRadius: 2,
    borderBottom: 2,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'rgba(189, 189, 189, 0.5)',
    color: 'rgba(0, 0, 0, 0.7)',
    '@media (max-width: 500px)': {
      flexWrap: 'wrap',
      px: 5,
      maxWidth: '100%',
      typography: 'h2',
    },
  },
}));

const Chanselect = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className="flex flex-col w-full max-w-[2053px] max-md:max-w-full">
        <Typography variant="h1" align="center" className={classes.section}>
          Add Program
        </Typography>
        <Box className={classes.section}>
          <Box display="flex" gap="5" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box flex="1" minWidth="0">
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Video URL</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" />
            </Box>
            <Box flex="1" minWidth="0" marginLeft={{ md: '5px' }}>
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Title</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" />
            </Box>
          </Box>
        </Box>
        <Box className={classes.section}>
          <Box display="flex" gap="5" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box flex="1" minWidth="0">
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Duration</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" />
            </Box>
            <Box flex="1" minWidth="0" marginLeft={{ md: '5px' }}>
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Category</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" select>
                <MenuItem value="Select...">Select...</MenuItem>
                {/* Add your categories here */}
              </TextField>
            </Box>
          </Box>
        </Box>
        <Box className={classes.section}>
          <Box display="flex" gap="5" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box flex="1" minWidth="0">
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Channel</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" select>
                <MenuItem value="Select...">Select...</MenuItem>
                {/* Add your channels here */}
              </TextField>
            </Box>
            <Box flex="1" minWidth="0" marginLeft={{ md: '5px' }}>
              <Box className={classes.typographyBox}>
                <Typography variant="h2">Type</Typography>
              </Box>
              <TextField className={classes.textField} variant="outlined" select>
                <MenuItem value="Select...">Select...</MenuItem>
                {/* Add your types here */}
              </TextField>
            </Box>
          </Box>
        </Box>
        <Box className={classes.section} alignSelf="flex-end" mt={{ xs: '56px', md: '10px' }}>
          <Box display="flex" gap="5" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box flex="57%" minWidth="0">
              <Button variant="outlined" className={classes.button}>Cancel</Button>
            </Box>
            <Box flex="43%" minWidth="0">
              <Button variant="contained" color="primary" className={classes.button}>Add</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Chanselect;
