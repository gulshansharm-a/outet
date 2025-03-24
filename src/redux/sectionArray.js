import { NavBar,navBarArray } from "../template/NavBar";
import { Slider, sliderArray } from "../template/Slider";
import {JewelryComponent, JewelryComponentArray } from "../template/JewelryComponent";
import HeroSectionWithProduct from "../template/herosection/herosection_with_product/HeroSectionWithProduct";
import {HeroSection,HeroSectionArray} from "../template/herosection/herosection/HeroSection";
import JewelryShowcase from "../template/herosection/herosection/Showcase";
import {Section,SectionDArray} from "../elements/section";
import Button ,{ButtonArray } from "../template/Button/Button";
import {Image,ImageArray} from '../template/Image/Image';

    const SectionArray = [
       //elements
       { id: 1228,type:'element', name: "Hero Slider", section: <HeroSection />,array:HeroSectionArray  },  
       { id: 1227,type:'element', name: "Custom Button", section: <Button />,array:ButtonArray },  
       { id: 1229,type:'element', name: "Custom Image", section: <Image />,array:ImageArray },  

       //section
       { id: 1226,type:'section', name: "Sections", section: <Section/>,array:SectionDArray },
    ];

export default SectionArray;
