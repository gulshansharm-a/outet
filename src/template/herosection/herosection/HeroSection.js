import React, { useState } from 'react';
import { useGetSettingByID } from '../../../helper/section';
import { getFlexStyles, getFontSize, Gethight, getdisplayhight } from './HeroSectionCSSSectting';
import { useGetThemeByTag } from '../../../helper/theam';
const HeroSectionArray = [
  { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
]

const HeroSection = ({ sectionId }) => {
  const settingData = useGetSettingByID(sectionId, 1); // Call the hook at the top level
  const titletext = useGetSettingByID(sectionId,0)
  
  return (
    // getdisplayhight() function :- Display Hight Small,Medium,large,Extra-large
    <div className="flex flex-col h-[800px]" style={{ ...getdisplayhight(''),backgroundColor:useGetThemeByTag('background') }}>
      {/* Hero Section */}
      <div className="flex-1">
        {/* getFlexStyles() function :- Left Right Top Bottom  */}
        <div style={{ ...getFlexStyles(useGetSettingByID(sectionId, 1)) }}
          className={`h-full bg-[url("https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png")] bg-cover bg-center bg-no-repeat flex items-center text-white pl-[137px]`}
        >

      {Product.map((item, index) => (
          <div key={index} className="flex flex-col">
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="text-[34px] leading-8"
                style={{ ...Gethight(settingData), ...getFontSize('large') }}>
                {titletext}
              </div>
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="text-[56px] font-medium mb-4"
                style={{ ...Gethight('medium'), ...getFontSize('large') }}>
                {item.nameTwo}
              </div>
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <p className="w-[397px] mb-[40px]"
                style={{ ...Gethight('medium'), ...getFlexStyles('small') }}>
                {item.Paragraph}
              </p>
              {/* [GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="flex gap-[16px]" style={{ ...Gethight('medium') }}>
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`rounded-[4px] p-[12px] font-medium ${button.style}`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

const Product = [
  { name: "", Paragraph: ' “A gentleman knows his appearance is very important that shows his characteristic.” - Unknown' }
]
const buttons = [
  { text: 'Shop Now', style: 'bg-white text-black' },
  { text: 'New Items', style: 'border-2 border-white text-white' }
];

export { HeroSection, HeroSectionArray };
