import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

const TextField = ({ sectionID, settingId, name, defaultValue }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(defaultValue || ""); // Ensure controlled input

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue); // Update local state
        dispatch(update_setting(sectionID, settingId, newValue));
    };

    return (
        <>
            <h1>{name}</h1>
            <input 
                type="text" 
                onChange={handleChange} 
                value={value} 
                placeholder="Enter text"
            />
        </>
    );
};

export default TextField;
