import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme

// import Sidebar from './Components/TV/Sidebar';
import Login from './Components/TV/Login';
import Channel from './Components/TV/Channel';
import Dashboard from './Components/TV/Dashboard';
import Program from './Components/TV/Program';
import Logout from './Components/TV/Logout';
import AddChannel from './Components/TV/AddChannel';
import AddProgram from './Components/TV/AddProgram';
import DashboardPage from './Components/TV/DashboardPage';
import Register from './Components/TV/Register';
import CustomerPage from './Components/TV/CustomerPage';
import MainLayout from './Components/Tables/MainLayout';



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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/program" element={<Program />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addchannel" element={<AddChannel />} />
          <Route path="/addprogram" element={<AddProgram />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/mainlayout" element={<MainLayout />} />        
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
