import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme

// import Sidebar from './Components/TV/Sidebar';
import Login from './Components/TV/Login';
import Sidebar from './Components/TV/Sidebar';
import Channel from './Components/TV/Channel';
import Dashboard from './Components/TV/Dashboard';
import Program from './Components/TV/Program';
import Logout from './Components/TV/Logout';
import AddChannel from './Components/TV/AddChannel';
import AddProgram from './Components/TV/AddProgram';

const theme = createTheme({
  // Your theme configuration here
});

const App = () => {
  const data = [
    { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2' },
    { column1: 'Row 3 Column 1', column2: 'Row 3 Column 2' }, 
  ];

  return (
    <ThemeProvider theme={theme}> {/* Wrap your Routes with ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/program" element={<Program />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addchannel" element={<AddChannel />} />
          <Route path="/addprogram" element={<AddProgram />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
