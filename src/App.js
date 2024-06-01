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
import NewChannel from './Components/TV/newchannel';
import New from './Components/TV/New';
import DashboardPage from './Components/TV/DashboardPage';
import AddchanName from './Components/TV/AddchanName';
import Chanselect from './Components/TV/Chanselect';
import Fistlogin from './Components/TV/Fistlogin';
import Register from './Components/TV/Register';



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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/program" element={<Program />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addchannel" element={<AddChannel />} />
          <Route path="/newchannel" element={<NewChannel />} />
          <Route path="/addprogram" element={<AddProgram />} />
          <Route path="/new" element={<New />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/chan" element={<Chanselect />} />
          <Route path="/fist" element={<Fistlogin />} />
          {/* <Route path="/timg" element={<Timg />} />
          <Route path="/combine" element={<Combine />} />
          <Route path="/boxoflogin" element={<Boxoflogin />} />
          <Route path="/addchan" element={<AddchanName />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
