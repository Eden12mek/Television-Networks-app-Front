import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import Login from './Components/TV/Login';
import Channel from './Components/TV/Channel';
import Dashboard from './Components/TV/Dashboard';
import Program from './Components/TV/Program';
import AddChannel from './Components/TV/AddChannel';
import AddProgram from './Components/TV/AddProgram';
import Register from './Components/TV/Register';
import MainLayout from './Components/TV/MainLayout';
import Movies from './Components/TV/Movies';
import Favorite from './Components/TV/Favorite';
import Later from './Components/TV/Later';
import Auth from './Components/Auth';


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
          <Route path="/dashboard" element={Auth(Dashboard)} />
            <Route path="/channel" element={Auth(Channel)} />
            <Route path="/program" element={Auth(Program)} />
            <Route path="/addchannel" element={Auth(AddChannel)} />
            <Route path="/addprogram" element={Auth(AddProgram)} />
            <Route path="/mainlayout" element={Auth(MainLayout)} />
            <Route path="/movies" element={Auth(Movies)} />
            <Route path="/favorite" element={Auth(Favorite)} />
            <Route path="/later" element={Auth(Later)} />  
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
