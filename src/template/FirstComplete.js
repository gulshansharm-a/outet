import { useGetSettingByID } from '../helper/section';

const FirstCompleteArray =[
    {id:1, name:'Enter1',settingId:121,value:'default'},
    {id:2, name:'Enter1',settingId:121,value:'default'},
    {id:3, name:'Enter1',settingId:121,value:'default'},
  ]
  
const FirstComplete = ({ sectionId }) =>{
    const color1 = useGetSettingByID(sectionId,1);
    return (<>
    {color1}
    </>)
}
export  {FirstComplete,FirstCompleteArray};