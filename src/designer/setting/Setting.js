import React from "react";
import { useSelector } from "react-redux";

const Setting = () => {
    const selectedSettingUID = useSelector((state) => state.selectedSettingUID);

    return (
        <>
            <h3>Select the setting</h3>
            <p>{selectedSettingUID}</p>
        </>
    );

};

export default Setting;
