import React from 'react';
import { useGetSettingByID } from '../helper/section';
import sectionArray from "../redux/sectionArray"; // Assuming this contains your section data

const SectionDArray = [
    { id: 1, name: 'Direction', settingId: 121, value: "row" },
];

const Section = ({ sectionId, data }) => {
    const flexDirection = useGetSettingByID(sectionId, 1);

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            flexDirection: flexDirection,
            alignItems: 'center',
            justifyContent: 'space-around',
            border: '1px solid #ccc',
            padding: '10px',
            background: '#f0f0f0'
        }}>

            {/* Render Children if Allowed */}
            {data.childrenAllowed && data.children?.map((child) => {
                const matchingElement = sectionArray.find(el => el.id === child.id);
                return matchingElement ? (
                    <div>
                        {/* Recursive Call for Child Section */}
                        {React.cloneElement(matchingElement.section, {
                            sectionId: child.uID,
                            data: child
                        })}
                    </div>
                ) : (
                    <div 
                        key={child.id}
                        style={{
                            border: '1px solid #2196F3',
                            padding: '10px',
                            background: '#E3F2FD'
                        }}
                    >
                        {matchingElement}
                        {child.name}
                    </div>
                );
            })}
        </div>
    );
};

export { Section, SectionDArray };
