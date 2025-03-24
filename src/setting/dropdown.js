import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";
import './Dropdown.css';

const PositionDropdown = ({ sectionID, settingId, name, defaultValue, options = [] }) => {
  const [selectedPosition, setSelectedPosition] = useState(defaultValue || (options.length > 0 ? options[0] : ""));
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPosition(defaultValue || (options.length > 0 ? options[0] : ""));
  }, [defaultValue, options]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedPosition(newValue);
    dispatch(update_setting(sectionID, settingId, newValue));
  };

  return (
    <div className="dropdown-container">
      <h1>{name}</h1>
      <select className="containerdropdown" value={selectedPosition} onChange={handleChange}>
        {(options ?? []).map((data, index) => (
          <option key={data} value={data}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default PositionDropdown;

