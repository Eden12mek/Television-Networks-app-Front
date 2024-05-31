import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core'; // Import Material-UI components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '5xl',
    color: 'black',
    whiteSpace: 'nowrap',
    maxWidth: '938px',
    [theme.breakpoints.down('md')]: {
      fontSize: '4xl',
    },
  },
  name: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      fontSize: '4xl',
    },
  },
  divider: {
    marginTop: '6px',
    width: '100%',
    minHeight: '99px',
    borderRadius: '20px',
    borderBottom: '2px solid black',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // You may adjust opacity as needed
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
}));

const AddchanName = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.name}>Name</Typography>
      <Box className={classes.divider} />
    </Box>
  );
};

export default AddchanName;
