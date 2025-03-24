import React from "react";
import { usePopover } from "./PopoverContext";
import sectionArray from "../../redux/sectionArray";
import { useSelector, useDispatch } from 'react-redux';
import { setData,add_at_end } from '../../redux/actions';

const Popover = () => {
  const { popover, closePopover } = usePopover();
  const data = useSelector(state => state.tree);
  const dispatch = useDispatch();

  if (!popover.show) return null;

  const setData = (elementID) => {
    closePopover();
    console.log(elementID);
    const index = sectionArray.findIndex(item => item.id === elementID);
    const inputData = {
      id: elementID,
      designID: elementID,
      name: sectionArray[index].name,
      settings: sectionArray[index].array.map(item => ({
          ...item,
          id: Date.now() + Math.floor(Math.random() * 1000) // Unique ID for each setting
      })),
      type: sectionArray[index].type,
      childrenAllowed: false,
      uID: Date.now()
  }
  
   console.log(inputData);
    dispatch(add_at_end(inputData));
  };

  return (
    <div
      style={{
        position: "absolute",
        top: popover.position.y,
        left: popover.position.x,
        backgroundColor: "white",
        border: "1px solid #ccc",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      />
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {sectionArray.map((section) => (
          <li
            onClick={() => setData(section.id)} // Wrap the function in an arrow function
            key={section.id}
            style={{ padding: "5px", cursor: "pointer" }}
          >
            {section.name}
          </li>
        ))}
      </ul>
      <button onClick={closePopover} style={{ marginTop: "10px" }}>
        Close
      </button>
    </div>
  );
};

export default Popover;
