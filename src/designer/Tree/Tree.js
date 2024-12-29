import React, { useState } from 'react';
import './Tree.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData, reposition,reposition_c } from '../../redux/actions';
import { usePopover } from '../popover/PopoverContext';
const Tree1 = () => {
  const { openPopover } = usePopover();

  const data = useSelector(state => state.tree);
  const dispatch = useDispatch();
  let previousTarget = null;
  let mousePosition = null; 
  let dragging_element_type = null;
  let parentID = -1;
  const handleDragStart = (e, itemId,item) => {
    e.stopPropagation()
    e.dataTransfer.setData('itemId', itemId);
    if(item) {
      dragging_element_type = item.type;
      parentID = item.parent;
      console.log('drage type',dragging_element_type,item.type)
    }
  };

  const handleDrop = (e, parentId) => {
      e.stopPropagation()
      if(dragging_element_type == "section") {
        handle_drop_for_parent(e,parentId);
      }else {
        handle_drop_for_child(e,parentId);
      }
      dragging_element_type = null;
      parentID = -1;
  };

  const handle_drop_for_parent=(e, parentId) => {
    console.log("is in p")
    const draggedItemId = e.dataTransfer.getData('itemId');
    console.log(draggedItemId, parentId); 
    e.target.style.borderBottom = "none";
    e.target.style.borderTop = "none";

    dispatch(reposition({
        array: data,           
        id1: parseInt(draggedItemId),  
        id2: parentId,         
        position: mousePosition 
      }));
  }

  const handle_drop_for_child=(e, parentId_r) => {
    console.log("is in c")
    e.target.style.borderBottom = "none";
    e.target.style.borderTop = "none";
    const draggedItemId = e.dataTransfer.getData('itemId');
    console.log({
      array: data,           
      id1: parseInt(draggedItemId),  
      id2: parentId_r,         
      position: mousePosition,
      parentId: parentID
    }); 
    dispatch(reposition_c({
      array: data,           
      id1: parseInt(draggedItemId),  
      id2: parentId_r,         
      position: mousePosition,
      parentId: parentID
    }));
  } 

  const handleDragOver = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    
    let targetElement = e.target;
    const targetRect = targetElement.getBoundingClientRect();
    const mouseY = e.clientY;
    const isTopHalf = mouseY < targetRect.top + targetRect.height / 2;

    mousePosition = isTopHalf ? 'top' : 'bottom';
    if(dragging_element_type === item.type) {
      if (isTopHalf) {
        targetElement.style.borderTop = "2px solid blue";
        targetElement.style.borderBottom = "none"; // Remove bottom border
      } else {
        targetElement.style.borderBottom = "2px solid blue";
        targetElement.style.borderTop = "none"; // Remove top border
      }  
    }
    if (previousTarget && previousTarget !== targetElement) {
      previousTarget.style.borderTop = "none";
      previousTarget.style.borderBottom = "none";
    }
    previousTarget = targetElement;
  };

  const handleDragLeave = (e) => {
    const targetElement = e.target;
    targetElement.style.borderTop = "none";
    targetElement.style.borderBottom = "none";
    previousTarget = null; // Reset previous target on leave
  };
  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    openPopover({
      x: rect.right + 10, // Adjust to show next to the button
      y: rect.top + window.scrollY,
    });
  };

  return (
    <div className="tree-container">
      <ul>
        {data.map((item) => (
          <div className='topDiv' >
          <div
            key={item.uID}
            data-key={item.uId}
            className="section"
            draggable={true}
            onDragStart={(e) => handleDragStart(e, item.uID,item)}
            onDrop={(e) => handleDrop(e, item.uID)}
            onDragOver={(e) => handleDragOver(e, item)}
            onDragLeave={handleDragLeave}
            data-type={item.type}
          >
            <div draggable={true} className="section-name">
              &gt; {item.name}
            </div>
            {item.childrenAllowed && item.children && item.children.length > 0 && (
              <ul>
                {item.children.map((child) => (
                  <div 
                    key={child.uID}
                    data-key={child.uId}
                    className="child"
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, child.uID,child)}
                    onDrop={(e) => handleDrop(e, child.uID)}
                    onDragOver={(e) => handleDragOver(e, child)}
                    onDragLeave={handleDragLeave}
                    data-type={child.type}
                  >
                    {child.name} 
                  </div>
                ))}
              </ul>
            )}
          </div>
          </div>

        ))}
      </ul>
      <button onClick={handleClick} style={{ margin: "5px" }}>
      + Section
    </button>    </div>
  );
  
};

export default Tree1;
