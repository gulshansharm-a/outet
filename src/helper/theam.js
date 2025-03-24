import { useState, useEffect } from 'react';

class Theam {
    background = "#ffffff;";
    headingColor = "#000000";
    paraColor = "#808080";
    buttonColor = "#4CAF50";
    linkColor = "#1E90FF";
    borderColor = "#DDDDDD";
    shadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    cardBackground = "#f9f9f9";

    //section
    sectionLarge = "110vh";
    sectionMedium = "100vh";
    sectionSmall = "90vh";

    //heading 
    headingLarge = "100px";
    headingMedium = "80px";
    headingSmall = "50px";

    //Sub heading
    subheadingLarge = "80px";
    subheadingMedium = "50px";
    subheadingSmall = "30px";

    //pargraph
    paragraphLarge = "30px";
    paragraphMedium = "22px";
    paragraphSmall = "15px";

    
    getDefaultValue(key) {
        return this[key] || null;
    }
}

export const useGetThemeByTag = (key) => {
    const [themeValue, setThemeValue] = useState(new Theam().getDefaultValue(key));

    useEffect(() => {
        const handleThemeChange = () => {
            const newThemeValue = new Theam().getDefaultValue(key);
            setThemeValue(newThemeValue);
        };

        window.addEventListener('themeChange', handleThemeChange);

        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, [key]);

    return themeValue;
};

// Example usage: Trigger theme update
document.dispatchEvent(new CustomEvent('themeChange', { detail: { background: "#FAF3E0" } }));

export default Theam;
