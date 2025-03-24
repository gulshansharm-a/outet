
export const getFlexStyles = (alignment) => {
  const mapping = {
    'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
    'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
    'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
    'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
    'center': { justifyContent: 'center', alignItems: 'center' },
    'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
    'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
    'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
    'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
  };
  return mapping[alignment] || mapping['center'];
};


export const Gethight = (gethight) => {
    const mapping = {
      'small': { height: '3rem' },
      'medium': { height: '4rem' },
      'large': { height: '5rem' },
      'Extra-large': { height: '6rem' },
    };
    return mapping[gethight] || mapping['medium'];
  }

  export 
    const getFontSize = (fontSize) => {
      const mapping = {
        'small': { fontSize: '1rem' },
        'medium': { fontSize: '1.5rem' },
        'large': { fontSize: '2rem' },
        'Extra-large': { fontSize: '3rem' },
      };
      return mapping[fontSize] || mapping['small'];
    }

    export 
    const getdisplayhight=(Displayhight)=>{
         const mapping={
          'small': { height:'25rem'},
          'medium': { height: '35rem' },
          'large': { height: '50.8rem' },
          'Extra-large': { height:'60rem'},
         };
         return mapping[Displayhight] || mapping['large'];
    }
  