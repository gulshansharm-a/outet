import React from "react";
import './Screen.css';
import { useSelector } from 'react-redux';
import sectionArray from "../../redux/sectionArray";

const Screen = () => {
    const data = useSelector(state => state.tree);
    return (
        <>
        {data.map(section => {
            const matchingElement = sectionArray.find(el => el.id === section.id);
            return matchingElement ? (
                <div 
                    className="screen_section" 
                    style={{ marginLeft: '2px', marginRight: '2px' }} 
                    key={section.id}
                >
                    {React.cloneElement(matchingElement.section, { sectionId: section.uID,data:section })}
                </div>
            ) : null;
        })}
    </>
    
    );
};


export default Screen;
