import React from 'react';
import { useGetSettingByID } from '../helper/section';
import sectionArray from "../redux/sectionArray"; // Assuming this contains your section data

const SectionDArray = [
    { id: 0, name: 'Direction', settingId: 121, value: "row" },
];

const Section = ({ sectionId, data }) => {
    const flexDirection = useGetSettingByID(sectionId, 0);

    return (
        <div style={{
            display: 'flex',
            flexDirection: flexDirection,
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
