// store.js
import { createStore } from 'redux';

const initialState = {
  tree: [
    // { 
    //   id: 1221,
    //   type: 'section',
    //   name: "Slider Section",
    //   childrenAllowed: true, 
    //   uID:123456987,
    //   children: [
    //     { id: 2, designID: 10000, icon:'', type: 'element', parent: 1221, name: "Product1", childrenAllowed: false },
    //     { id: 3, designID: 10000, type: 'element', parent: 1221, name: "Product2", childrenAllowed: false },
    //     { id: 4, designID: 10000, type: 'element', parent: 1221, name: "Product3", childrenAllowed: false },
    //   ]
    // },
    // { id: 1222, uID:12345688, designID: 10000, type: 'section', name: "Featured Products", childrenAllowed: false },
    // { id: 1223, uID:321654, designID: 10000, type: 'section', name: "About Us Section", childrenAllowed: false }
  ]
};


function treeReducer(state = initialState, action) {
  switch (action.type) {
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
        tree: add_section_end(state.tree, action.array),
      };
    default:
      return state;
  }
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

function move_child(arr, id1, id2, mousePosition,parentID) {
    console.log(arr, id1, id2, mousePosition,parentID)
    let index = arr.findIndex(item => item.id === parentID)
    console.log(arr,index,"childers")
    arr[index].children = moveSection(arr[index].children, id1, id2, mousePosition);
    console.log("is a n issue",arr);
    return [...arr];
}

function add_section_end(tree, newSection) {
  // Validate that the input is a valid object
  if (typeof newSection !== "object" || newSection === null || Array.isArray(newSection)) {
    console.error("Input should be a valid object.");
    return tree;
  }

  // Append the new section to the end of the tree
  return [...tree, { ...newSection }];
}
const store = createStore(treeReducer);

export default store;
