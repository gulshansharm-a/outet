// store.js
import { createStore } from 'redux';

const initialState = {
  tree: [
    { 
      id: 2,
      type: 'section',
      name: "Slider Section",
      designID: 10000,
      childrenAllowed: true,
      children: [
        { id: 2, designID: 10000, type: 'element', parent: 2, name: "Product1", childrenAllowed: false },
        { id: 3, designID: 10000, type: 'element', parent: 2, name: "Product2", childrenAllowed: false },
        { id: 4, designID: 10000, type: 'element', parent: 2, name: "Product3", childrenAllowed: false },
      ]
    },
    { id: 3, designID: 10000, type: 'section', name: "Featured Products", childrenAllowed: false },
    { id: 4, designID: 10000, type: 'section', name: "About Us Section", childrenAllowed: false }
  ]
};


function counterReducer(state = initialState, action) {
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
    default:
      return state;
  }
}



function moveSection(arr, id1, id2, mousePosition) {
    console.log('arr:', arr);
    const index1 = arr.findIndex(item => item.id === id1);
    let index2 = arr.findIndex(item => item.id === id2);
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
    arr[index].children = moveSection(arr[index].children, id1, id2, mousePosition);
    console.log("is a n issue",arr);
    return [...arr];
  }

const store = createStore(counterReducer);

export default store;
