import React, { useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";

const ContentEditProfile = () => {
  const dates = Array.from({ length: 31 }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }));
  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];
  const years = [
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
    { label: "2003", value: "2003" },
    { label: "2004", value: "2004" },
    { label: "2005", value: "2005" },
  ];
  return (
    <div>
      <div className="lg:h-10"></div>
      <div className="flex flex-row w-full justify-between">
        <TextfieldProfile
          title={"Firstname"}
          placeholder={"Difa"}
          type={"text"}
          readOnly={false}
          className={
            "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[125px] lg:w-[580px]"
          }
        />
        <TextfieldProfile
          title={"Lastname"}
          placeholder={"Utari"}
          type={"text"}
          readOnly={false}
          className={
            "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[135px] lg:w-[590px]"
          }
        />
      </div>
      <TextfieldProfile
        title={"Email"}
        placeholder={"difautari@gmail.com"}
        readOnly={false}
        type={"email"}
        className={
          "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1300px]"
        }
      />
      <TextfieldProfile
        title={"Contact Number"}
        placeholder={"62812121212"}
        readOnly={false}
        type={"text"}
        className={
          "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1300px]"
        }
      />
      <div className="flex flex-row justify-between">
        <DropdownValue
          title={"Tanggal lahir"}
          placeholder={"12"}
          options={dates}
          className={"relative w-[104px] lg:w-[345px] "}
        />
        <DropdownValue
          title={"Bulan lahir"}
          placeholder={"Juli"}
          options={months}
          className={"relative w-[104px] lg:w-[345px] "}
        />
        <DropdownValue
          title={"Tahun lahir"}
          placeholder={"2023"}
          options={years}
          className={"relative w-[104px] lg:w-[345px] "}
        />
      </div>
      <TextfieldProfile
        title={"Password"}
        placeholder={"sbdfbnd65sfdvb s"}
        type={"password"}
        readOnly={false}
        className={
          "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1300px]"
        }
      />
      <div className="h-[15px] lg:h-[26px]"></div>
      <div className="flex flex-row justify-start">
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

export default ContentEditProfile;
