import React from "react";

import Padi from "../../assets/images/padi.png";
import Farmer from "../../assets/images/farmer.png";
import ProfileDummy from "../../assets/images/profile_dummy.png";

const ContentAboutUs = () => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <div className="flex flex-col">
        <div className="flex flex-row row-auto justify-between">
          <img src={Padi} alt="imagePadi" />
          <div className="flex flex-col items-start" style={{ width: 610 }}>
            <div
              className="font-semibold font-inter text-black"
              style={{ fontSize: 50 }}
            >
              About Us
            </div>
            <div style={{ height: 24 }}></div>
            <div
              className="font-inter text-black font-medium text-start"
              style={{ fontSize: 25, lineHeight: 1.2 }}
            >
              Lorem ipsum dolor sit amet consectetur. Sed sed at elit magnis
              mollis. Erat molestie ornare pulvinar nulla pellentesque sagittis
              dui quis. Non varius venenatis lacus arcu tincidunt vulputate
              duis. Ac tempus placerat sed nec at quisque semper senectus. Neque
              amet diam condimen tum auctor posuere euismod.
            </div>
          </div>
        </div>
        <div style={{ height: 138 }}></div>
        <div className="flex flex-row row-auto justify-between items-center">
          <div className="flex flex-col items-start">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 50 }}
            >
              How can we help farmers
            </div>
            <div style={{ height: 24 }}></div>
            <div
              className="font-inter font-medium text-black text-start"
              style={{ fontSize: 25, width: 616 }}
            >
              Lorem ipsum dolor sit amet consectetur. Et nisl purus mattis
              ultrices ultrices convallis. Ullamcorper faucibus id non purus
              nunc neque. In scelerisque amet tempus sem eleifend lectus.
              Blandit elementum auctor ullamcorper ornare imperdiet ut.
            </div>
            <div style={{ height: 58 }}></div>
            <div>
              <div
                className="flex flex-row row-auto items-center"
                style={{ width: 616 }}
              >
                <img src={ProfileDummy} className="w-18 h-18" l alt="profile" />
                <div style={{ width: 21 }}></div>
                <div className="flex flex-col items-start">
                  <div
                    className="font-inter font-bold text-black"
                    style={{ fontSize: 25 }}
                  >
                    Loren ipsum ceunah
                  </div>
                  <div
                    className="font-inter font-medium text-black text-start"
                    style={{ fontSize: 20 }}
                  >
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
                style={{ width: 616 }}
              >
                <img src={ProfileDummy} className="w-18 h-18" l alt="profile" />
                <div style={{ width: 21 }}></div>
                <div className="flex flex-col items-start">
                  <div
                    className="font-inter font-bold text-black"
                    style={{ fontSize: 25 }}
                  >
                    Loren ipsum ceunah
                  </div>
                  <div
                    className="font-inter font-medium text-black text-start"
                    style={{ fontSize: 20 }}
                  >
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
                style={{ width: 616 }}
              >
                <img src={ProfileDummy} className="w-18 h-18" l alt="profile" />
                <div style={{ width: 21 }}></div>
                <div className="flex flex-col items-start">
                  <div
                    className="font-inter font-bold text-black"
                    style={{ fontSize: 25 }}
                  >
                    Loren ipsum ceunah
                  </div>
                  <div
                    className="font-inter font-medium text-black text-start"
                    style={{ fontSize: 20 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Farmer} style={{width:470, height:520}} alt="petani" />
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default ContentAboutUs;
