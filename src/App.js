import React from 'react';
import MovieTable from './Components/Tables/MovieTable';


const App = () => {
  const data = [
    { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2' },
  ];

  return <MovieTable data={data} />;
}



export default App;
