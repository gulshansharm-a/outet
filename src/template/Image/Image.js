import React from 'react';
import { useGetSettingByID } from '../../helper/section';

// Style utility functions
const ImageArray = [
    { id: 1, name: 'Height', settingId: 124, value: 150 },
    { id: 2, name: "width", settingId: 124, value: 150 },
    { id: 3, name: "Border Radius", settingId: 124, value:4},  
    { id: 4, name: "Border Width", settingId: 124, value:0},   
    { id: 5, name:"Border Style", settingId:122,value:"solid",options:[
      "dashed","dotted","double","groove","hidden","inset","none","outset","ridge","solid","initial","revert","revert-layer","unset"] },
    { id: 6, name:"Border Color", settingId:125,value:"#ffffff"},
    { id: 7, name: "PaddingTop", settingId: 124, value: 10 },
    { id: 8, name: "PaddingRight", settingId: 124, value: 20 },
    { id: 9, name: "PaddingBottom", settingId: 124, value: 10 },
    { id: 10, name: "PaddingLeft", settingId: 124, value: 20 },
    { id: 11, name: "MarginTop", settingId: 124, value: 5 },
    { id: 12, name: "MarginRight", settingId: 124, value: 0 },
    { id: 13, name: "MarginBottom", settingId: 124, value: 5 },
    { id: 14, name: "MarginLeft", settingId: 124, value: 0 },
    { id: 15, name: "Opacity", settingId: 124, value: 10 },
    { id: 16, name: "Outline", settingId: 122, value: "none" },
    { id: 17, name: "Z-index", settingId: 124, value:-1 },
    { id: 18, name: "position", settingId: 122, value:"revert",options:[
      "absolute","fixed","relative","static","sticky","inherit","initial","revert","revert-layer","unset"] },
    
]

export const getHeight = (value) => {
  return { height: typeof value === 'number' ? `${value}px` : value };
};

export const getWidth = (value) => {
  return { width: typeof value === 'number' ? `${value}px` : value };
};

export const getBorderRadius = (value) => {
  return { borderRadius: typeof value === 'number' ? `${value}px` : value };
};

export const getBorderWidth = (value) => {
  return { borderWidth: typeof value === 'number' ? `${value}px` : value };
};

export const getBorderStyle = (value) => {
  return { borderStyle: value };
};

export const getBorderColor = (value) => {
  return { borderColor: value };
};


export const getPadding = (value) => {
  return { padding: typeof value === 'number' ? `${value}px` : value };
};

export const getMargin = (value) => {
  return { margin: typeof value === 'number' ? `${value}px` : value };
};

export const getCursor = (value) => {
  return { cursor: value };
};

export const getchildren = (value) => {
  return value;
};

export const getPaddingTop = (value) => {
    return { paddingTop: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getPaddingRight = (value) => {
    return { paddingRight: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getPaddingBottom = (value) => {
    return { paddingBottom: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getPaddingLeft = (value) => {
    return { paddingLeft: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getMarginTop = (value) => {
    return { marginTop: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getMarginRight = (value) => {
    return { marginRight: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getMarginBottom = (value) => {
    return { marginBottom: typeof value === 'number' ? `${value}px` : value };
  };
  
  export const getMarginLeft = (value) => {
    return { marginLeft: typeof value === 'number' ? `${value}px` : value };
  };

  export const getOpacity = (value) => {
    return { opacity: value };
  };

  export const getOutline = (value) => {
    return { outline: value };
  };
  export const zindex = (value) => {
    return { zIndex: value };
  };
  export const Position=(value)=>{
    return {position:value};
  }
export const Image = ({
  sectionId,
  height = 120,
  width = 120,
  borderRadius = 4,
  backgroundColor = '#3498db',
  color = '#ffffff',
  fontSize = 16,
  padding = 1,
  margin = 10,
  cursor = 'pointer',
  transition = 'all 0.3s ease',
  children = 'Image',
  onClick = () => {},
  imageUrl='https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png', // New prop for image URL
  altText = "Image NOT Found", // Alt text for image
  ...otherProps
}) => {
  const heightSetting = useGetSettingByID(sectionId, 1);
  const widthSetting = useGetSettingByID(sectionId, 2);
  const borderRadiusSetting=useGetSettingByID(sectionId,3);
  const borderWidthSetting = useGetSettingByID(sectionId, 4);
  const borderstyle=useGetSettingByID(sectionId,5);
  const borderColor=useGetSettingByID(sectionId,6);
  const paddingTop = useGetSettingByID(sectionId,7);
  const paddingRight = useGetSettingByID(sectionId,8);
  const paddingBottom = useGetSettingByID(sectionId,9);
  const paddingLeft = useGetSettingByID(sectionId, 10);
  const marginTop = useGetSettingByID(sectionId, 11);
  const marginRight = useGetSettingByID(sectionId, 12);
  const marginBottom = useGetSettingByID(sectionId, 13);
  const marginLeft = useGetSettingByID(sectionId, 14);
  const opacity = useGetSettingByID(sectionId, 15);
  const outline = useGetSettingByID(sectionId, 16);
  const Zindex = useGetSettingByID(sectionId, 17);
  const Positionsetting= useGetSettingByID(sectionId,18);

  const finalHeight = heightSetting?.value || height;
  const finalWidth = widthSetting?.value || width;
  
  const imageStyle = {
    ...getHeight(heightSetting),
    ...getWidth(widthSetting),
    ...getBorderRadius(borderRadiusSetting),
    ...getBorderWidth(borderWidthSetting),
    ...getBorderColor(borderColor),
    ...getPaddingTop(paddingTop),
    ...getPaddingRight(paddingRight),
    ...getPaddingBottom(paddingBottom),
    ...getPaddingLeft(paddingLeft),
    ...getMarginTop(marginTop),
    ...getMarginRight(marginRight),
    ...getMarginBottom(marginBottom),
    ...getMarginLeft(marginLeft),
    ...getOpacity((opacity/10)),
    ...getOutline(outline?.value || 'none'),
    ...getBorderStyle(borderstyle),
    ...Position(Positionsetting),
    ...getPadding(padding),
    ...getMargin(margin),
    ...getCursor(cursor),
    ...zindex(Zindex),
  };

  return (
    <img
      src={imageUrl}
      alt={altText}
      style={imageStyle}
      onClick={onClick}
      {...otherProps}
    />
  );
};

export default Image;
export { ImageArray };

