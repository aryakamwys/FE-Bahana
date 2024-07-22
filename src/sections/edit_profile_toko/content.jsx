import React from "react";

import TextfieldProfile from "../../components/common/textfieldProfile";

const ContentEditProfileToko = () => {
  return (
    <div>
      <TextfieldProfile
        title={"Nama Toko"}
        placeholder={"Low Range"}
        type={"text"}
        className={
          "font-inter font-medium text-[14px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[1240px]"
        }
        readOnly={false}
      />
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-black text-[14px] lg:text-[26px]">
            Deskripsi Toko
          </div>
          <div style={{ height: 7 }}></div>
          <form className="flex items-center justify-start ">
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
              <textarea
                placeholder="Toko ini menjual blablabla."
                className="font-inter font-medium focus:outline-none text-[12px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[350px] lg:w-[1240px]"
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <TextfieldProfile
        title={"Email"}
        placeholder={"difautari@gmail.com"}
        type={"email"}
        className={
          "font-inter font-medium text-[14px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[1240px]"
        }
        readOnly={false}
      />
      <TextfieldProfile
        title="Contact Number"
        placeholder="628120929172"
        type="text"
        readOnly={false}
        className={
          "font-inter font-medium text-[14px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[1240px]"
        }
      />
      <TextfieldProfile
        title="Password"
        placeholder="*************"
        type="password"
        readOnly={false}
        className={
          "font-inter font-medium text-[14px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[1240px]"
        }
      />
      <div className="flex flex-row justify-start pt-[20px] lg:pt-0">
        <button className="border-2 border-primary rounded-md pl-[26px] pr-[26px] lg:pl-11 lg:pr-11 pt-2 pb-2 font-inter font-medium text-primary text-[16px] lg:text-[28px] ">
          Cancel
        </button>
        <div className="w-[24px] lg:w-10"></div>
        <button className="bg-primary rounded-md pl-[26px] pr-[26px] lg:pl-14  lg:pr-14 pt-2 pb-2 font-inter font-medium text-white text-[16px] lg:text-[28px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentEditProfileToko;
