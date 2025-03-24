import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

import './Dropdown.css';

const Getheight = ({ sectionID, settingId, name, defaultValue }) => {
  const [selectedSize, setSelectedSize] = useState(defaultValue); // Fallback to 'medium' if undefined
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedSize(newValue); // Update state
    dispatch(update_setting(sectionID, settingId, newValue)); // Dispatch action
  };

  return (
    <>
      <h2 className="title-drop">{name}</h2>
      <select className="containerdropdown" value={selectedSize} onChange={handleChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>

      </select>
  
    </>
  );
};

export default Getheight;
