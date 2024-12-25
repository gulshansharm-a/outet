// treeRedux.js

// Action Types
const SET_DATA = 'SET_DATA';
const MOVE_SECTION = 'MOVE_SECTION';

// Initial State
const initialState = {
    data: [
      { 
        id: 2,
        type: 'section',
        name: "Slider Section",
        designID: 10000,
        childrenAllowed: true,
        children: [
          { id: 2, designID: 10000, type: 'element', parent: 0, name: "Product1", childrenAllowed: false },
          { id: 3, designID: 10000, type: 'element', parent: 0, name: "Product2", childrenAllowed: false },
          { id: 4, designID: 10000, type: 'element', parent: 0, name: "Product3", childrenAllowed: false },
        ]
      },
      { id: 3, designID: 10000, type: 'section', name: "Featured Products", childrenAllowed: false },
      { id: 4, designID: 10000, type: 'section', name: "About Us Section", childrenAllowed: false }
    ]
  };

// Action Creators
export const setData = (newData) => ({
  type: SET_DATA,
  payload: newData,
});

export const moveSectionAction = (id1, id2, mousePosition) => ({
  type: MOVE_SECTION,
  payload: { id1, id2, mousePosition },
});

// Reducer
const moveSection = (arr, id1, id2, mousePosition) => {
  const index1 = arr.findIndex(item => item.id === id1);
  let index2 = arr.findIndex(item => item.id === id2);

  if (index2 === -1) {
    const temparray = [arr[index1]];
    arr.forEach((element) => {
      if (element.id !== id1) {
        temparray.push(element);
      }
    });
    return temparray;
  }

  if (mousePosition === 'top') {
    index2--;
  }

  if (index2 < 0 || index2 >= arr.length) return arr;

  if (index1 === -1 || index2 === -1) return arr;

  const [sectionToMove] = arr.splice(index1, 1);
  arr.splice(index2, 0, sectionToMove);

  return [...arr];
};


const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case MOVE_SECTION:
      const { id1, id2, mousePosition } = action.payload;
      return {
        ...state,
        data: moveSection(state.data, id1, id2, mousePosition),
      };
    default:
      return state;
  }
};

export default treeReducer;
