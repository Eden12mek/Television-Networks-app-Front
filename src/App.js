import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// import Sidebar from './Components/TV/Sidebar';
import Login from './Components/TV/Login';

const App = () => {
  const data = [
    { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2' },
    { column1: 'Row 3 Column 1', column2: 'Row 3 Column 2' }, // This seems like a typo, should it be 'Row 3'?
  ];

  return (
    <Router> {/* Wrap MovieTable with Router */}
      <Login data={data} />
    </Router>
  );
}

export default App;
