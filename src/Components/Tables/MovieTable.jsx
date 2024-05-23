import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const MovieTable = ({ data }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the other page when the button is clicked
    navigate('../../Components/SideNav/Sidebar.jsx');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>Go to Other Pageeeee</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.column1}</TableCell>
                <TableCell>{row.column2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MovieTable;
