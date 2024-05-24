import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Sidebar from './Components/TV/Sidebar';
import Login from './Components/TV/Login';
import Sidebar from './Components/TV/Sidebar';
import Channel from './Components/TV/Channel';
import Dashboard from './Components/TV/Dashboard';
import Program from './Components/TV/Program';
import heni from './Components/TV/heni';

const App = () => {
  const data = [
    { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2' },
    { column1: 'Row 3 Column 1', column2: 'Row 3 Column 2' }, // This seems like a typo, should it be 'Row 3'?
  ];

  return (
    <Router>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/program" element={<Program />} />
    </Routes>
</Router>
);
}

export default App;
