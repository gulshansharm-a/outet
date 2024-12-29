import Navbar from "../template/Navbar";
import Cardrow from "../template/Cardrow";
import Carousel from "../template/Carousel";
import Tabbedcard from "../template/Tabbedcard";
import Accordion from "../template/Accordion";

const sectionArray = [
    { id: 1221, name:"Nav Bar", section: <Navbar /> },
    { id: 1222, name:"Slides", section: <Carousel /> },
    { id: 1223, name:"2 Cards", section: <Cardrow /> },
    { id: 1224, name:"Tabbed card", section: <Tabbedcard /> },
    { id: 1225, name:"Collaps", section: <Accordion /> }
];

export default sectionArray;
