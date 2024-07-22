import React from "react";

import Padi from "../../assets/images/padi.png";
import Farmer from "../../assets/images/farmer.png";
import ProfileDummy from "../../assets/images/profile_dummy.png";

const ContentAboutUs = () => {
  return (
    <div>
      <div className="h-[35px] lg:h-[50px]"></div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <img
            src={Padi}
            className="w-[109px] h-[109px] lg:w-[356px] lg:h-[340px] "
            alt="imagePadi"
          />
          <div className="flex flex-col items-start" style={{ width: 610 }}>
            <div className="font-semibold font-inter text-black text-[18px] lg:text-[50px] ">
              About Us
            </div>
            <div className="h-[5px] lg:h-[24px]"></div>
            <div className="font-inter text-black font-medium text-start text-[11px] lg:text-[25px] lg:leading-normal">
              Lorem ipsum dolor sit amet consectetur. Sed sed at elit magnis
              mollis. Erat molestie ornare pulvinar nulla pellentesque sagittis
              dui quis. Non varius venenatis lacus arcu tincidunt vulputate
              duis. Ac tempus placerat sed nec at quisque semper senectus. Neque
              amet diam condimen tum auctor posuere euismod.
            </div>
          </div>
        </div>
        <div className="h-[42px] lg:h-[138] "></div>
        <div className="flex flex-row row-auto justify-between items-center">
          <div className="flex flex-col items-start w-[349px] lg:w-[1190px]">
            <div className="font-inter font-semibold text-black  text-[16px] lg:text-[50px]">
              How can we help farmers
            </div>
            <div className="h-[5px] lg:h-[24px]"></div>
            <div className="font-inter font-medium text-black text-start text-[11px] lg:text-[25px] lg:leading-normal w-[204px] lg:w-[616px] ">
              Lorem ipsum dolor sit amet consectetur. Et nisl purus mattis
              ultrices ultrices convallis. Ullamcorper faucibus id non purus
              nunc neque. In scelerisque amet tempus sem eleifend lectus.
              Blandit elementum auctor ullamcorper ornare imperdiet ut.
            </div>
            <div className="h-[10px] lg:h-[58px]"></div>
            <div>
              <div
                className="flex flex-row row-auto items-center"
              >
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] lg:text-[20px] w-[159px] lg:w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 27 }}></div>
            <div>
              <div
                className="flex flex-row row-auto items-center"
              >
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] lg:text-[20px] w-[159px] lg:w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 27 }}></div>
            <div>
              <div
                className="flex flex-row row-auto items-center"
              >
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] lg:text-[20px] w-[159px] lg:w-[520px] ">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Farmer}
            className="w-[145px] h-[150px] lg:w-[470px] lg:h-[520px]"
            alt="petani"
          />
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default ContentAboutUs;
