import React from "react";
import { useGetSettingByID } from "../helper/section";
const sliderArray = [
    {id:1, name:'Title Color',settingId:121,value:'green'},
];

const Slider= ({sectionId}) =>{
    const headingColor = useGetSettingByID(sectionId,1);
    return(<>
    slider
    <h1 style={{ color: headingColor }}>hi I am heading</h1> 
    </>)
}

export {Slider,sliderArray}