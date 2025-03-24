// store.js
import { createStore } from 'redux';
import { change_setting } from './actions';
const initialState = {
    tree: [
      {
        id: 1226,
        designID: 1226,
        name: "Sections",
        settings: [
          {
            id: 1742835742946,
            name: "Direction",
            settingId: 121,
            value: "column"
          }
        ],
        type: "section",
        childrenAllowed: true,
        uID: 1742835742536,
        children: [
            {
            id: 1226,
            designID: 1226,
            name: "Sections",
            settings: [
              {
                id: 1742835744864,
                name: "Direction",
                settingId: 121,
                value: "column"
              }
            ],
            type: "section",
            childrenAllowed: true,
            uID: 1742835744371,
            children: [
              {
                id: 1228,
                designID: 1228,
                name: "Hero Slider",
                settings: [
                  {
                    id: 1742835748386,
                    name: "Title",
                    settingId: 121,
                    value: "Every piece of Jewelry tells a story"
                  },
                  {
                    id: 1742835748772,
                    name: "Alignment",
                    settingId: 122,
                    value: "center"
                  },
                  {
                    id: 1742835748792,
                    name: "Font Gap Title",
                    settingId: 123,
                    value: "large"
                  }
                ],
                type: "element",
                childrenAllowed: false,
                uID: 1742835747905
              },
              {
                id: 1228,
                designID: 1228,
                name: "Hero Slider",
                settings: [
                  {
                    id: 1742835751828,
                    name: "Title",
                    settingId: 121,
                    value: "Every piece of Jewelry tells a story"
                  },
                  {
                    id: 1742835752323,
                    name: "Alignment",
                    settingId: 122,
                    value: "center"
                  },
                  {
                    id: 1742835751958,
                    name: "Font Gap Title",
                    settingId: 123,
                    value: "large"
                  }
                ],
                type: "element",
                childrenAllowed: false,
                uID: 1742835751811
              }
            ]
          },
          {
            id: 1226,
            designID: 1226,
            name: "Sections",
            settings: [
              {
                id: 1742835747081,
                name: "Direction",
                settingId: 121,
                value: "row"
              }
            ],
            type: "section",
            childrenAllowed: true,
            uID: 1742835746207,
            children: [
              {
                id: 1228,
                designID: 1228,
                name: "Hero Slider",
                settings: [
                  {
                    id: 1742835749653,
                    name: "Title",
                    settingId: 121,
                    value: "Every piece of Jewelry tells a story"
                  },
                  {
                    id: 1742835750057,
                    name: "Alignment",
                    settingId: 122,
                    value: "center"
                  },
                  {
                    id: 1742835750387,
                    name: "Font Gap Title",
                    settingId: 123,
                    value: "large"
                  }
                ],
                type: "element",
                childrenAllowed: false,
                uID: 1742835749568
              },
              {
                id: 1228,
                designID: 1228,
                name: "Hero Slider",
                settings: [
                  {
                    id: 1742835754886,
                    name: "Title",
                    settingId: 121,
                    value: "Every piece of Jewelry tells a story"
                  },
                  {
                    id: 1742835753972,
                    name: "Alignment",
                    settingId: 122,
                    value: "center"
                  },
                  {
                    id: 1742835754867,
                    name: "Font Gap Title",
                    settingId: 123,
                    value: "large"
                  }
                ],
                type: "element",
                childrenAllowed: false,
                uID: 1742835753930
              }
            ]
          }
        ]
      }
    ],


  selectedSettingUID: 0,
  columngreid: 3,
  id: 1,
  parentID: 0
};

function treeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SELECTEDSECTION':
      return {
        ...state,
        parentID: setParentID(action.uID)
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
        tree: add_section_end(state.tree, action.array, state.parentID),
      };

    case 'CHANGE_SETTING':
      return {
        ...state,
        selectedSettingUID: action.uID,
      };
    case 'UPDATE_SETTING':
      const value = updateSettingValue(state.tree, action.uId, action.id_setting, action.value);
      console.log("tree", console.log(JSON.stringify(state.tree, null, 2)))
      initialState.tree = value
      return {
        ...state,
        tree: initialState.tree
      };
    default:
      return state;
  }
}
function setParentID(uID) {
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
  for (const element of data) {
    // Check current element for matching uID
    if (element.uID === elementId) {
      for (const setting of element.settings) {
        if (setting.id === id_setting) {
          setting.value = value;
          console.log(setting, element, "is of the element");
        }
      }
    }

    // Check children recursively if they exist
    if (element.children && element.children.length) {
      updateSettingValue(element.children, elementId, id_setting, value);
    }
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

function add_section_end(tree, newSection, parentID) {
  // Validate that the input is a valid object
  if (parseInt(parentID) == 0) {


    console.log(initialState.tree);
    if (typeof newSection !== "object" || newSection === null || Array.isArray(newSection)) {
      console.error("Input should be a valid object.");
      return tree;
    }
    // Append the new section to the end of the tree
    return [...tree, { ...newSection }];
  }
  return addSectionToTree(tree, newSection, parentID);
}

const store = createStore(treeReducer);

export default store;
