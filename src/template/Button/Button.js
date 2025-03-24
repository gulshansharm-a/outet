import React from 'react'
import { useGetSettingByID } from '../../helper/section';

const ButtonArray = [
    { id: 1, name: 'Height', settingId: 124, value: 57 },
    { id: 2, name: "Width", settingId: 124, value: 136 },
    { id: 3, name: "ButtonText", settingId: 121, value: "Default Text" },
    { id: 4, name: "BackgroundColor", settingId: 125, value: "#3498db" },
    { id: 5, name: "TextColor", settingId: 125, value: "#000000" },
    { id: 6, name: "BorderColor", settingId: 125, value: "#ffffff" },
    { id: 7, name: "BorderRadius", settingId: 124, value: 0 },
    { id: 8, name: "BorderWidth", settingId: 124, value: 1 },
    { id: 9, name: "BorderStyle", settingId: 132, value: "solid" },
    { id: 10, name: "FontSize", settingId: 124, value: 16 },
    { id: 11, name: "FontWeight", settingId: 124, value: 400 },
    { id: 12, name: "PaddingTop", settingId: 124, value: 10 },
    { id: 13, name: "PaddingRight", settingId: 124, value: 20 },
    { id: 14, name: "PaddingBottom", settingId: 124, value: 10 },
    { id: 15, name: "PaddingLeft", settingId: 124, value: 20 },
    { id: 16, name: "MarginTop", settingId: 124, value: 5 },
    { id: 17, name: "MarginRight", settingId: 124, value: 0 },
    { id: 18, name: "MarginBottom", settingId: 124, value: 5 },
    { id: 19, name: "MarginLeft", settingId: 124, value: 0 },
    { id: 20, name: "Cursor", settingId: 122, value: "pointer",options: [
      "default",  // Standard arrow cursor
      "pointer",  // Hand cursor (for links, buttons)
      "text",     // Text selection (I-beam)
      "crosshair",// Precision crosshair
      "help",     // Help cursor (question mark)
      "wait",     // Loading cursor (spinning wheel)
      "progress"  // Loading but interactive
    ] },
    { id: 21, name: "Outline", settingId: 144, value: "none" },
    { id: 22, name: "Opacity", settingId: 124, value: 10 },
    { id: 23, name: "Transition", settingId: 146, value: "all 0.3s ease" },
    { id: 24, name: "TextTransform", settingId: 147, value: "none" },
    { id: 25, name: "LetterSpacing", settingId: 124, value: 0 },
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

export const getFontWeight = (value) => {
  return { fontWeight: value };
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

export const getTextTransform = (value) => {
  return { textTransform: value };
};

export const getLetterSpacing = (value) => {
  return { letterSpacing: typeof value === 'number' ? `${value}px` : value };
};
export const BoxSizing = (value) => {
  return { boxSizing: value };
};
export const zindex = (value) => {
  return { "z-index": value };
};


const Button = ({ sectionId, ...otherProps }) => {

  const heightSetting = useGetSettingByID(sectionId, 1);
  const widthSetting = useGetSettingByID(sectionId, 2);
  const buttonText = useGetSettingByID(sectionId, 3);
  const backgroundColor = useGetSettingByID(sectionId, 4);
  const textColor = useGetSettingByID(sectionId, 5);
  const borderColor = useGetSettingByID(sectionId, 6);
  const borderRadius = useGetSettingByID(sectionId, 7);
  const borderWidth = useGetSettingByID(sectionId, 8);
  const borderStyle = useGetSettingByID(sectionId, 9);
  const fontSize = useGetSettingByID(sectionId, 10);
  const fontWeight = useGetSettingByID(sectionId, 11);
  const paddingTop = useGetSettingByID(sectionId, 12);
  const paddingRight = useGetSettingByID(sectionId, 13);
  const paddingBottom = useGetSettingByID(sectionId, 14);
  const paddingLeft = useGetSettingByID(sectionId, 15);
  const marginTop = useGetSettingByID(sectionId, 16);
  const marginRight = useGetSettingByID(sectionId, 17);
  const marginBottom = useGetSettingByID(sectionId, 18);
  const marginLeft = useGetSettingByID(sectionId, 19);
  const cursor = useGetSettingByID(sectionId, 20);
  const outline = useGetSettingByID(sectionId, 21);
  const opacity = useGetSettingByID(sectionId, 22);
  const transition = useGetSettingByID(sectionId, 23);
  const textTransform = useGetSettingByID(sectionId, 24);
  const letterSpacing = useGetSettingByID(sectionId, 25);
  
  // Build the button style object using the settings
  const buttonStyle = {
    ...getHeight(heightSetting),
    ...getWidth(widthSetting),
    ...getBorderRadius(borderRadius),
    ...getBackgroundColor(backgroundColor),
    ...getColor(textColor),
    ...getBorderWidth(borderWidth),
    ...getBorderStyle(borderStyle?.value || 'solid'),
    ...getBorderColor(borderColor),
    ...getFontSize(fontSize),
    ...getFontWeight(fontWeight),
    ...getPaddingTop(paddingTop),
    ...getPaddingRight(paddingRight),
    ...getPaddingBottom(paddingBottom),
    ...getPaddingLeft(paddingLeft),
    ...getMarginTop(marginTop),
    ...getMarginRight(marginRight),
    ...getMarginBottom(marginBottom),
    ...getMarginLeft(marginLeft),
    ...getCursor(cursor),
    ...getOutline(outline?.value || 'none'),
    ...getOpacity((opacity/10)),
    ...getTransition(transition?.value || 'all 0.5s ease'),
    ...getTextTransform(textTransform?.value || 'none'),
    ...getLetterSpacing(letterSpacing),
    ...BoxSizing("none"),
    ...zindex(1000)

  };


  const content = buttonText;

  return (
    <button 
      style={buttonStyle} 
      {...otherProps}
    >
      {content}
    </button>
  );
};

// Export statements moved to the top level
export default Button;
export { ButtonArray };