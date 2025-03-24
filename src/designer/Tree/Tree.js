import React, { useState } from 'react';
import './Tree.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData, reposition, reposition_c, change_setting, update_setting_parentID } from '../../redux/actions';
import { usePopover } from '../popover/PopoverContext';
const Tree1 = () => {
  const { openPopover } = usePopover();

  const data = useSelector(state => state.tree) || [];
  const dispatch = useDispatch();

  let previousTarget = null;
  let mousePosition = null;
  let dragging_element_type = null;
  let parentID = -1;

  const handleDragStart = (e, itemId, item) => {
    e.stopPropagation();
    e.dataTransfer.setData('itemId', itemId);
    if (item) {
      dragging_element_type = item.type;
      parentID = item.parent;
      console.log('drag type', dragging_element_type, item.type);
    }
  };

  const handleDrop = (e, parentId) => {
    e.stopPropagation();
    if (dragging_element_type === "section") {
      handle_drop_for_parent(e, parentId);
    } else {
      handle_drop_for_child(e, parentId);
    }
    dragging_element_type = null;
    parentID = -1;
  };

  const handle_drop_for_parent = (e, parentId) => {
    console.log("is in p");
    const draggedItemId = e.dataTransfer.getData('itemId');
    e.target.style.borderBottom = "none";
    e.target.style.borderTop = "none";

    dispatch(reposition({
      array: data,
      id1: parseInt(draggedItemId),
      id2: parentId,
      position: mousePosition
    }));
  };

  const handle_drop_for_child = (e, parentId_r) => {
    console.log("is in c");
    e.target.style.borderBottom = "none";
    e.target.style.borderTop = "none";
    const draggedItemId = e.dataTransfer.getData('itemId');

    dispatch(reposition_c({
      array: data,
      id1: parseInt(draggedItemId),
      id2: parentId_r,
      position: mousePosition,
      parentId: parentID
    }));
  };

  const renderTree = (items, level = 0) => (
    items.map((item) => (
      <div className='topDiv' key={item.uID} style={{ paddingLeft: `${level * 20}px`, border: "1px solid #ddd", margin: "5px", borderRadius: "8px" }}>
        <div
          data-key={item.uId}
          className="section"
          draggable={true}
          onDragStart={(e) => handleDragStart(e, item.uID, item)}
          onDrop={(e) => handleDrop(e, item.uID)}
          onDragOver={(e) => handleDragOver(e, item)}
          onDragLeave={handleDragLeave}
          data-type={item.type}
        >
          <div draggable={true} className="section-name">
            <div onClick={() => change_setting_hander(item.uID)}>
              &gt; {item.name}
              {item.type === 'section' && (
                <button
                  onClick={(e) => handleClickOnChild(e, item.uID)}
                  style={{ margin: "5px" }}
                >
                  +
                </button>
              )}
            </div>
          </div>

          {item.childrenAllowed && item.children && item.children.length > 0 && (
            <ul>{renderTree(item.children, level + 1)}</ul>
          )}
        </div>
      </div>
    ))
  );

  const handleDragOver = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    let targetElement = e.target;
    const targetRect = targetElement.getBoundingClientRect();
    const mouseY = e.clientY;
    const isTopHalf = mouseY < targetRect.top + targetRect.height / 2;

    mousePosition = isTopHalf ? 'top' : 'bottom';
    if (dragging_element_type === item.type) {
      if (isTopHalf) {
        targetElement.style.borderTop = "2px solid blue";
        targetElement.style.borderBottom = "none";
      } else {
        targetElement.style.borderBottom = "2px solid blue";
        targetElement.style.borderTop = "none";
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
    previousTarget = null;
  };

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    dispatch(update_setting_parentID(0));

    openPopover({
      x: rect.right + 10,
      y: rect.top + window.scrollY,
    });
  };

  const handleClickOnChild = (event, number) => {
    const rect = event.target.getBoundingClientRect();
    dispatch(update_setting_parentID(number));
    openPopover({
      x: rect.right + 10,
      y: rect.top + window.scrollY,
    });
  };

  const change_setting_hander = (uID) => {
    dispatch(change_setting(uID));
  };

  return (
    <div className="tree-container">
      <ul>
        {renderTree(data)}
      </ul>
      <button onClick={handleClick} style={{ margin: "5px" }}>+ Section</button>
    </div>
  );
};

export default Tree1;