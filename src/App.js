import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import Login from './Components/TV/Login';
import Channel from './Components/TV/Channel';
import Dashboard from './Components/TV/Dashboard';
import Program from './Components/TV/Program';
import Logout from './Components/TV/Logout';
import AddChannel from './Components/TV/AddChannel';
import AddProgram from './Components/TV/AddProgram';
import DashboardPage from './Components/TV/DashboardPage';
import Register from './Components/TV/Register';
import MainLayout from './Components/TV/MainLayout';
import Movies from './Components/TV/Movies';
import Favorite from './Components/TV/Favorite';
import Later from './Components/TV/Later';

const theme = createTheme({
  // Your theme configuration here
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="/mainlayout" element={<MainLayout />} />      
          <Route path="/movies" element={<Movies />} />    
          <Route path="/favorite" element={<Favorite />} />  
          <Route path="/later" element={<Later />} />   
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
