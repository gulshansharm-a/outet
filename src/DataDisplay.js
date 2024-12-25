// src/DataDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const DataDisplay = () => {
  const data = useSelector(state => state.data);

  return (
    <div>
      <h3>Current Data: {data}</h3>
    </div>
  );
};

export default DataDisplay;
