// actions.js

export const setData = () => ({ type: 'SET_DATA' });
export const reposition = (array,id1,id2,position) => ({ 
    type: 'REPOSITION', 
        array,
        id1,
        id2,
        position
      
});

export const reposition_c = (array,id1,id2,position) => ({ 
    type: 'REPOSITION_C', 
        array,
        id1,
        id2,
        position
      
});

export const add_at_end = (array) => ({ 
    type: 'ADD_SECTION', 
        array
});



