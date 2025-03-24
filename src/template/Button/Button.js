import React from 'react'
import { useGetSettingByID } from '../../helper/section';

// Style utility functions
const ButtonArray = [
    { id: 1, name: 'Height', settingId: 124, value: 60 },
    { id: 2, name: "width", settingId: 124, value: 60 },
    { id: 3, name: "Button Text", settingId: 121, value: "Default Text" },
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

export const getBackgroundColor = (value) => {
  return { backgroundColor: value };
};

export const getColor = (value) => {
  return { color: value };
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

export const getFontSize = (value) => {
  return { fontSize: typeof value === 'number' ? `${value}px` : value };
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

export const getOutline = (value) => {
  return { outline: value };
};

export const getOpacity = (value) => {
  return { opacity: value };
};

export const getTransition = (value) => {
  return { transition: value };
};
export const getchildren = (value) => {
  return value;
};

export const Button = ({
  sectionId,
  height = 40,
  width = 120,
  borderRadius = 4,
  backgroundColor = '#3498db',
  color = '#ffffff',
  borderWidth = 1,
  borderStyle = 'solid',
  borderColor = '#2980b9',
  fontSize = 16,
  padding = 10,
  margin = 5,
  cursor = 'pointer',
  outline = 'none',
  opacity = 1,
  transition = 'all 0.3s ease',
  children = 'Button',
  onClick = () => {},
  ...otherProps
}) => {

  const heightSetting = useGetSettingByID(sectionId, 1);
  const widthSetting = useGetSettingByID(sectionId, 2);
 const content=useGetSettingByID(sectionId, 3)
  const finalHeight = heightSetting?.value || height;
  const finalWidth = widthSetting?.value || width;
  
  const buttonStyle = {
    ...getHeight(heightSetting),
    ...getWidth(widthSetting),
    ...getBorderRadius(borderRadius),
    ...getBackgroundColor(backgroundColor),
    ...getColor(color),
    ...getBorderWidth(borderWidth),
    ...getBorderStyle(borderStyle),
    ...getBorderColor(borderColor),
    ...getFontSize(fontSize),
    ...getPadding(padding),
    ...getMargin(margin),
    ...getCursor(cursor),
    ...getOutline(outline),
    ...getOpacity(opacity),
    ...getTransition(transition),
    ...getchildren(children)
  }; 
  const buttonContent =  content; 
  return (
    <button 
      style={buttonStyle} 
      onClick={onClick}
      {...otherProps}
    >
      {buttonContent}
    
    </button>
    
  );
};

export default Button;
export {ButtonArray}