// 01 Box Size left,Right,Center

export  const getFlexStyles = (alignment) => {
  const mapping = {
    'left': { justifyContent: 'flex-start', alignItems: 'flex-start' },
    'center': { justifyContent: 'center', alignItems: 'center' },
    'right': { justifyContent: 'flex-end', alignItems: 'flex-end' },
  };
  return mapping[alignment] || mapping['center'];
};
//02 Get Box-Size Hight
export
const Gethight = (gethight) => {
  const mapping = {
    'small': { height: '3rem' },
    'medium': { height: '4rem' },
    'large': { height: '5rem' },
    'Extra-large': { height: '6rem' },
  };
  return mapping[gethight] || mapping['medium'];
};
// 03 Font Size 
export 
const getFontSize = (fontSize) => {
  const mapping = {
    'small': { fontSize: '1rem' },
    'medium': { fontSize: '1.5rem' },
    'large': { fontSize: '2rem' },
    'Extra-large': { fontSize: '3rem' },
  };
  return mapping[fontSize] || mapping['small'];
};
//04 Card Change Left Right
export
const CardChange = (card) => {
  const mapping = {
    'left': {flexDirection :'row' },
    'Right': { flexDirection:'row-reverse' },
  };
  return mapping[card] || mapping['left'];
};

// 05 Text Algin left,Right,Center
export
const TextAlgin = (textalgin) => {
  const mapping = {
    'left': {textAlign:'left'},
    'center': {textAlign:'center'},
    'Right': {textAlign:'right'},
  };
  return mapping[textalgin] || mapping['center'];
};

//06 Button Algin Left,Right,Center
export
const buttonAlgin = (ButtonAlgin) => {
  const mapping = {
    'left': {justifyContent:'flex-start'},
    'center': {justifyContent:'center'},
    'Right': {justifyContent:'flex-end'},
    'around': {justifyContent:'space-around'},
    'between': {justifyContent:'space-between'},
    'evenly': {justifyContent:'space-evenly'},
  };
  return mapping[ButtonAlgin] || mapping['center'];
};

//07 Display Size Hight,Small,Medium,Large,Extra-large
export
const getdisplayhight=(Displayhight)=>{
     const mapping={
      'small': { height:'25rem'},
      'medium': { height: '34rem' },
      'large': { height: '50.8rem' },
      'Extra-large': { height:'60rem'},
     }
     return mapping[Displayhight] || mapping['large'];
};