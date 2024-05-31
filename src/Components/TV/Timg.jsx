import React from 'react';
import { Box, makeStyles } from '@material-ui/core'; // Import Material-UI components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'black',
    maxWidth: '720px',
    [theme.breakpoints.down('md')]: {
      padding: '5px',
    },
  },
  image: {
    marginTop: '56px',
    width: '100%',
    aspectRatio: '1.11',
    maxWidth: '508px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
      maxWidth: '100%',
    },
  },
}));

const Timg = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28edb6a1ffdfda9dce106e29302c69c8602bd4e67273ed76346ab9efb5525c0b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
        alt="placeholder"
        className={classes.image}
      />
    </Box>
  );
};

export default Timg;
