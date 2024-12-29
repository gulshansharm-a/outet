// src/App.js
import React from 'react';
import DataUpdater from './DataUpdater';
import DataDisplay from './DataDisplay';

const App = () => {


  return (
    <div>
      <h1>Redux Example</h1>
      <DataUpdater />
      <DataDisplay />
    </div>
  );
};

export default App;
