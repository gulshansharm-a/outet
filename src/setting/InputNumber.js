import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

import './Dropdown.css';

const PixelInput = ({ sectionID, settingId, name, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
  
    if (!isNaN(newValue)) {
      setValue(newValue); // Update state
      dispatch(update_setting(sectionID, settingId, newValue)); // Dispatch action
    }
  };

  return (
    <div className="pixel-input-container">
      <h2 className="title-drop">{name}</h2>
      <div className="input-wrapper">
        <input 
          type="number" 
          value={value}
          onChange={handleChange}
          className="pixel-input"
          min="0"
          step="1"
        />
        <span className="unit">px</span>
      </div>
    </div>
  );
};

// Create specific components for different CSS properties
export const Inputvalue = (props) => {
  return <PixelInput {...props} name={props.name || "Height"} />;
};

export default Inputvalue