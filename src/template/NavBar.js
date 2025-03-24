import React from "react";
import { useGetSettingByID } from '../helper/section';

const navBarArray = [
    {id:1, name:'heading color',settingId:122,value:'green'},
    {id:2, name:'font Size',settingId:121,value:'2rem'},
];


const NavBar = ({ sectionId }) =>{
    const headingColor =  useGetSettingByID(sectionId,1);
    const fontSize =  useGetSettingByID(sectionId,2);
    return(<>
            <h1 style={{ color: headingColor , fontSize:fontSize }}>hi I am heading</h1> 
    </>)

}

export {NavBar,navBarArray}