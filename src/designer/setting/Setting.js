import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update_setting } from '../../redux/actions';
import settingArray from "../../redux/settingArray";

const Setting = () => {
  const dispatch = useDispatch();
  const selectedSettingUID = useSelector((state) => state.selectedSettingUID);
  const tree = useSelector((state) => state.tree) || [];
  
  const [foundElement, setFoundElement] = useState(null);

  function findElementInTree(tree, targetUID) {
    for (const node of tree) {
      if (node.uID === targetUID) {
        console.log("element found",node)
        return node; // Found the element
      }

      if (node.children) {
        const found = findElementInTree(node.children, targetUID);
        if (found) return found; // Found in nested structure
      }
    }
    return null; // Not found
  }

  useEffect(() => {
    const element = findElementInTree(tree, selectedSettingUID);
    setFoundElement(element);
  }, [selectedSettingUID, tree]);

  return (
    <>
      <h3>Select the setting</h3>
      <p>{selectedSettingUID}</p>

      {foundElement ? (
        foundElement.settings?.map((setting, index) => {
          const matchingSetting = settingArray.find(
            (item) =>
              item.settingId === setting.settingId);
          return (
            <div key={`${foundElement.id}-${index}`}>
              {matchingSetting ? (
                React.cloneElement(matchingSetting.setting, {
                  sectionID: foundElement.uID,
                  settingId: setting.id,
                  name: setting.name,
                  defaultValue: setting.value,
                  options: setting.options||null
                })
              ) : (
                <p>Setting not found</p>
              )}
            </div>
          );
        })
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default Setting;
