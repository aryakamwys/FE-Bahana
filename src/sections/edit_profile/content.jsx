import React from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";

const ContentEditProfile = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row" >
        <TextfieldProfile title={"Firstname"} placeholder={"Difa"} type={"text"} readOnly={false} />
        <TextfieldProfile title={"Lastname"} placeholder={"Utari"} type={"text"} readOnly={false}/>
      </div>
    </div>
  );
};

export default ContentEditProfile;
