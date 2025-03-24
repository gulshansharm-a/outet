import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

import './Dropdown.css';

const ColorPicker = ({ sectionID, settingId, name, defaultValue = "#000000" }) => {
  const [value, setValue] = useState(defaultValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue); // Update state
    dispatch(update_setting(sectionID, settingId, newValue)); // Dispatch action
  };

  return (
    <div className="color-picker-container">
      <h2 className="title-drop">{name}</h2>
      <div className="color-input-wrapper">
        <input 
          type="color" 
          value={value}
          onChange={handleChange}
          className="color-input"
        />
        <input 
          type="text" 
          value={value}
          onChange={handleChange}
          className="color-text-input"
          placeholder="#000000"
        />
      </div>
    </div>
  );
};

// Create a specific component for color picking
export const ColorInput = (props) => {
  return <ColorPicker {...props} name={props.name || "Color"} />;
};

export default ColorInput;