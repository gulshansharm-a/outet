import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

import './Dropdown.css';
import { select } from 'framer-motion/client';

const PositionDropdown = ({ sectionID, settingId, name, defaultValue }) => {
  const [selectedPosition, setSelectedPosition] = useState(defaultValue); // Default to 'center'
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedPosition(newValue); // Update state
    dispatch(update_setting(sectionID, settingId, newValue)); // Dispatch Redux action
  };

  return (
    <>
      <h2 className="title-drop">{name}</h2>
      <select className="containerdropdown" value={selectedPosition} onChange={handleChange}>
        <option value="topleft">Top Left</option>
        <option value="topcenter">Top Center</option>
        <option value="topright">Top Right</option>
        <option value="centerleft">Center Left</option>
        <option value="center">Center</option>
        <option value="centerright">Center Right</option>
        <option value="bottomleft">Bottom Left</option>
        <option value="bottomcenter">Bottom Center</option>
        <option value="bottomright">Bottom Right</option>
      </select>
      
    </>
  );
};

export default PositionDropdown;
