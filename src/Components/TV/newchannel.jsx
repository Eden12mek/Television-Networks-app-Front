import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const NewChannel = () => {
  return (
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
          <TableRow>
            <TableCell>GOT</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/690fde85b360218468235df05d2542ddb1225a8405529bdd83c65e5647267370?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                alt="Edit"
                className="shrink-0 self-stretch aspect-[1.45] w-[85px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba7df861eeb9d45456c57c88634f3d29f72ec0bc9bead9c4b763b2a0bed8b552?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                alt="Delete"
                className="shrink-0 self-stretch my-auto aspect-[0.97] fill-black w-[33px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/040caff6c23e59f472f85846e58c7f1a8516161f3a6ec05a53f36ef037f485b3?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                alt="View"
                className="shrink-0 self-stretch my-auto aspect-[0.77] w-[27px]"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NewChannel;
