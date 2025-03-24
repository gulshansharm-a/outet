// store.js
import { createStore } from 'redux';
import { change_setting } from './actions';
const initialState = {
  tree: [
    // {
    //   id: 1226,
    //   type: 'section',
    //   name: "Slider Section",
    //   childrenAllowed: true,
    //   uID: 123456987,
    //   designID: 1,
    //   settings: [
    //     { id: 1, name: 'Direction', settingId: 121, value: "row" }
    //   ],
    //   children: [
    //     {
    //       id: 1226,
    //       designID: 10000,
    //       type: 'section',
    //       uID: 123456985,
    //       parent: 1221,
    //       name: "Productkk",
    //       childrenAllowed: true,
    //       children: [
    //         {
    //           id: 1224,
    //           designID: 10000,
    //           type: 'section',
    //           parent: 1221,
    //           uID: 1234569845,
    //           name: "Product1",
    //           childrenAllowed: false,
    //         },
    //         {
    //           id: 1228,
    //           designID: 10000,
    //           type: 'section',
    //           parent: 1221,
    //           uID: 1234569567,
    //           name: "Product1",
    //           childrenAllowed: false,
    //         },
    //       ]
    //     }
    //     ,
    //     {
    //       id: 1224,
    //       designID: 10000,
    //       type: 'section',
    //       parent: 1221,
    //       uID: 1234569855,
    //       name: "Product33",
    //       childrenAllowed: false,
    //     },
    //   ]
    // },

    // {
    //   id: 1226,
    //   uID: 12345688,
    //   designID: 10000,
    //   type: 'section',
    //   name: "Featured Products",
    //   childrenAllowed: true,
    //   childre: [
    //     {
    //       id: 1221,
    //       designID: 10000,
    //       type: 'section',
    //       parent: 1226,
    //       name: "innerchild",
    //       childrenAllowed: false

    //     },
    //   ]
    //   ,
    //   settings: [
    //     { id: 1, name: 'Enter1', settingId: 121, value: 'default' },
    //     { id: 2, name: 'Enter2', settingId: 121, value: 'default' }
    //   ]
    // },

  ],

  selectedSettingUID: 0,
  columngreid: 3,
  id: 1,
  parentID : 0
};

function treeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SELECTEDSECTION':
      return {
        ...state,
        parentID:setParentID(action.uID)
      };
    case 'REPOSITION':
      return {
        ...state,
        tree: moveSection(
          action.array.array,
          action.array.id1,
          action.array.id2,
          action.array.position)
      };
    case 'REPOSITION_C':
      return {
        ...state,
        tree: move_child(
          action.array.array,
          action.array.id1,
          action.array.id2,
          action.array.position,
          action.array.parentId
        )
      };
    case 'ADD_SECTION':
      return {
        ...state,
        tree: add_section_end(state.tree, action.array,state.parentID),
      };

    case 'CHANGE_SETTING':
      return {
        ...state,
        selectedSettingUID: action.uID,

      };
    case 'UPDATE_SETTING':
      return {
        ...state,
        tree: updateSettingValue(state.tree, action.uId, action.id_setting, action.value)
      };
    default:
      return state;
  }
}
function setParentID(uID){
  return uID;
}
function addSectionToTree(tree, newSection, targetUID) {
  function findAndAddSection(node) {
      if (node.uID === targetUID) {
          const updatedNode = {
              ...node,
              children: [...(node.children || []), newSection],
              childrenAllowed: true
          };
          return updatedNode;
      }

      if (node.children) {
          return {
              ...node,
              children: node.children.map(findAndAddSection)
          };
      }

      return node; // If no changes are needed
  }

  return tree.map(findAndAddSection);
}

function updateSettingValue(data, elementId, id_setting, value) {
  function recursiveUpdate(items) {
    for (const item of items) {
      if (item.uID === elementId) {
        const setting = item.settings?.find(setting => setting.id === id_setting);
        console.log(setting)
        if (setting) {
          setting.value = value;
          console.log('Updated Data:', data);
          return true;  
        }
      }
      // Recursively search children if present
      if (item.children) {
        const updated = recursiveUpdate(item.children);
        if (updated) return true;  // Stop recursion once found
      }
    }
    return false;  // Element or setting not found
  }

  const updated = recursiveUpdate(data);

  if (!updated) {
    console.log('Element ID or Setting ID not found.');
  }

  return data;
}

function moveSection(arr, id1, id2, mousePosition) {
  console.log('arr:', arr);
  const index1 = arr.findIndex(item => item.uID === id1);
  let index2 = arr.findIndex(item => item.uID === id2);
  if (mousePosition === 'top') {
    index2--;
  }

  if (index2 === -1) {
    const temparray = [arr[index1]];
    arr.forEach((element) => {
      if (element.id !== id1) {
        temparray.push(element);
      }
    });
    return temparray;
  }

  if (index2 < 0 || index2 >= arr.length) return arr;

  if (index1 === -1 || index2 === -1) return arr;

  const [sectionToMove] = arr.splice(index1, 1); // Remove the section from its current position
  arr.splice(index2, 0, sectionToMove); // Insert the section at the new position

  return [...arr]; // Return a new array
}

function move_child(arr, id1, id2, mousePosition, parentID) {
  console.log(arr, id1, id2, mousePosition, parentID)
  let index = arr.findIndex(item => item.id === parentID)
  console.log(arr, index, "childers")
  arr[index].children = moveSection(arr[index].children, id1, id2, mousePosition);
  console.log("is a n issue", arr);
  return [...arr];
}

function add_section_end(tree, newSection,parentID) {
  // Validate that the input is a valid object
  if(parseInt(parentID)==0){

 
  console.log(initialState.tree);
  if (typeof newSection !== "object" || newSection === null || Array.isArray(newSection)) {
    console.error("Input should be a valid object.");
    return tree;
  }
  // Append the new section to the end of the tree
  return [...tree, { ...newSection }];
}
return addSectionToTree(tree, newSection , parentID);
}

const store = createStore(treeReducer);

export default store;
