import { useState, useEffect } from 'react';
import store from '../redux/store';
class Section {
    constructor(sectionId) {
        this.sectionId = sectionId;
        this.data = store.getState().tree; // Access Redux store data
    }

    getDefaultValue(settingId) {
        const section = this.findNodeByUID(this.data,this.sectionId);
        if (!section || !section.settings) return null;
        console.log("ksdj")
        const setting = section.settings[settingId];
        return setting ? setting.value : null;
    }

    findNodeByUID(tree, targetUID) {
        for (const node of tree) {
            if (node.uID === targetUID) {
                return node;
            }
            if (node.children && node.children.length > 0) {
                const foundNode = this.findNodeByUID(node.children, targetUID);
                if (foundNode) {
                    return foundNode;
                }
            }
        }
        return null; // Return null if no match is found
    }
}




export const useGetSettingByID = (sectionId, settingId) => {
    const [defaultValue, setDefaultValue] = useState(null);
    
    useEffect(() => {

        const section = new Section(sectionId);
        const initialValue = section.getDefaultValue(settingId);
        setDefaultValue(initialValue);

        const unsubscribe = store.subscribe(() => {
            const updatedValue = section.getDefaultValue(settingId);
            if (updatedValue !== defaultValue) {
                setDefaultValue(updatedValue);
            }
        });
        console.log('value',settingId,defaultValue,sectionId)
        return () => unsubscribe(); // Cleanup
    }, [sectionId, settingId, defaultValue]);

    return defaultValue;
};

export default Section;
