import React from 'react';
import {getFlexStyles,Gethight,getFontSize,getdisplayhight,CardChange,TextAlgin,buttonAlgin} from './HeroSectionWithProductCSSSectting';
import { useGetThemeByTag } from '../../../helper/theam';
const HeroSectionWithProduct = () => {
  return (
  <>
  {/* getdisplayhight function :- Display Hight Small,Medium,large,Extra-large */}
  <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-[800px]"  style={{...getdisplayhight(''),backgroundColor:useGetThemeByTag('background')}}>
      <header className="h-24 sm:h-32 flex items-center z-30 w-full" style={{...Gethight('Extra-large')}}>
        <div className="container mx-auto px-6 flex items-center justify-between" style={{...getFlexStyles('center')}}>
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl" style={{...getFontSize('large')}}>
           {TitleName}
          </div>
        </div>
      </header>
      {sections.map((section, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" style={{...getFontSize('small')}}>
          <div className="container mx-auto px-6 flex relative py-16" style={{...CardChange('')}} >
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800" style={{...TextAlgin(''),...getFontSize('large')}}>
                {section.title}
                <span className="text-5xl sm:text-7xl" style={{...TextAlgin(''),...getFontSize('large')}}>{section.subtitle}</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white" style={{...TextAlgin(''),...getFontSize('')}}>{section.description}</p>
              <div className="flex mt-4" style={{...buttonAlgin(''),...getFontSize('')}}>
                {section.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.link}
                    className={`uppercase py-2 px-4 rounded-lg border-2 text-md mr-4 ${button.style}`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src={section.image}
                className="max-w-xs md:max-w-sm m-auto"
                alt={section.title}
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  </>
  );
};
const TitleName='Watch.ME'
const sections = [
  {
    title: 'Be on',
    subtitle: 'Time',
    description:
      'Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.',
    buttons: [
      { label: 'Get started', link: '#', style: 'bg-pink-500 text-white hover:bg-pink-400' },
      { label: 'Read more', link: '#', style: 'bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white' },
    ],
    image: 'https://www.tailwind-kit.com/images/object/10.png',
  },
];
export default HeroSectionWithProduct;
