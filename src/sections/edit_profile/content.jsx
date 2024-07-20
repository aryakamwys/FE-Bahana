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
    <div className="w-full">
      <div className="h-10"></div>
      <div className="flex flex-row justify-between">
        <TextfieldProfile
          title={"Firstname"}
          placeholder={"Difa"}
          type={"text"}
          readOnly={false}
          width={580}
        />
        <TextfieldProfile
          title={"Lastname"}
          placeholder={"Utari"}
          type={"text"}
          readOnly={false}
          width={590}
        />
      </div>
      <TextfieldProfile
        title={"Email"}
        placeholder={"difautari@gmail.com"}
        readOnly={false}
        type={"email"}
        width={1300}
      />
      <TextfieldProfile
        title={"Contact Number"}
        placeholder={"62812121212"}
        readOnly={false}
        type={"text"}
        width={1300}
      />
      <div className="flex flex-row justify-between">
        <DropdownValue
          title={"Tanggal lahir"}
          placeholder={"12"}
          options={dates}
          width={345}
        />
        <DropdownValue
          title={"Bulan lahir"}
          placeholder={"Juli"}
          options={months}
          width={345}
        />
        <DropdownValue
          title={"Tahun lahir"}
          placeholder={"2023"}
          options={years}
          width={345}
        />
      </div>
      <TextfieldProfile
        title={"Password"}
        placeholder={"sbdfbnd65sfdvb s"}
        type={"password"}
        width={1300}
        readOnly={false}
      />
      <div style={{ height: 26 }}></div>
      <div className="flex flex-row justify-start">
        <button
          className="border-2 border-primary rounded-md pl-11 pr-11 pt-2 pb-2 font-inter font-medium text-primary"
          style={{ fontSize: 28 }}
        >
          Cancel
        </button>
        <div className="w-10"></div>
        <button
          className="bg-primary rounded-md pl-14 pr-14 pt-2 pb-2 font-inter font-medium text-white"
          style={{ fontSize: 28 }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentEditProfile;
