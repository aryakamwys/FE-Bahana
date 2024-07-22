import React from "react";

import AddImageIcon from "../../assets/images/add_image.svg";
import TextfieldProfile from "../../components/common/textfieldProfile";

const ContentEditProfileToko = () => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <button className="flex flex-col items-start">
        <div
          className="font-inter font-semibold text-black"
          style={{ fontSize: 26 }}
        >
          Gambar Toko
        </div>
        <div className="h-3"></div>
        <div
          className="w-40 h-40 flex items-center justify-center border-2 rounded-xl"
          style={{
            borderColor: "#ddd",
            borderStyle: "dashed",
            borderRadius: "0.75rem",
          }}
        >
          <div className="flex flex-col w-20 h-20 items-center">
            <div>
              <img src={AddImageIcon} alt="add_image" />
            </div>
            <div style={{ height: 10 }}></div>
            <div>Tambahkan Gambar</div>
          </div>
        </div>
      </button>
      <TextfieldProfile
        title={"Nama Toko"}
        placeholder={"Low Range"}
        type={"text"}
        width={1300}
        readOnly={false}
      />
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-semibold text-black"
            style={{ fontSize: 26 }}
          >
            Deskripsi Toko
          </div>
          <div style={{ height: 7 }}></div>
          <form
            className="flex items-center justify-start"
            style={{ width: 1300 }}
          >
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
              <textarea
                placeholder="Toko ini menjual blablbalba"
                className="font-inter font-medium focus:outline-none w-full"
                style={{ fontSize: 24, height: 171, resize: "none" }}
                readOnly={true}
              />
            </span>
          </form>
        </div>
      </div>
      <TextfieldProfile
        title={"Email"}
        placeholder={"difautari@gmail.com"}
        type={"email"}
        width={1300}
        readOnly={false}
      />
      <TextfieldProfile
        title="Contact Number"
        placeholder="628120929172"
        type="text"
        readOnly={false}
        width={1300}
      />
      <TextfieldProfile
        title="Password"
        placeholder="*************"
        type="password"
        readOnly={false}
        width={1300}
      />
      <div className="flex flex-row justify-start py-12">
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

export default ContentEditProfileToko;
