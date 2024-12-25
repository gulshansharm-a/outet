// src/DataUpdater.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const DataUpdater = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: 'SET_DATA', payload: inputValue });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new data"
      />
      <button onClick={handleSubmit}>Update Data</button>
    </div>
  );
};


export default DataUpdater;
