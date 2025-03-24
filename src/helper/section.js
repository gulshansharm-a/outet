import { useState, useEffect } from 'react';
import store from '../redux/store';
class Section {
    constructor(sectionId) {
        this.sectionId = sectionId;
        this.data = store.getState().tree; // Access Redux store data
    }

    getDefaultValue(settingId) {
        const section = this.data.find(item => item.uID === this.sectionId);
        if (!section || !section.settings) return null;
        console.log("ksdj")
        const setting = section.settings.find(set => set.id === settingId);
        return setting ? setting.value : null;
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
