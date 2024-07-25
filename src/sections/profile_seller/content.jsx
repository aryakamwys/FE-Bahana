import React, { useRef } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import ProfileImage from "../../assets/images/image_profile_page.png";

import UserIcon from "../../assets/images/user_profile.svg";
import HomeIcon from "../../assets/images/menu_pesanan.svg";
import TruckIcon from "../../assets/images/input.svg";
import HistoryIcon from "../../assets/images/history_profile.svg";
import NextIcon from "../../assets/images/next_profile.svg";

const ContentPetaniProfilePage = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // handle the file upload logic here
      console.log(file);
    }
  };
  return (
    <div className="lg:pl-16">
      <div style={{ height: 40 }}></div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-52 md:w-[223px] lg:w-96 items-center border border-black rounded-xl p-[15px]">
            <img
              src={ProfileImage}
              className="w-36 h-30 md:w-[189px] md:h-[155px] lg:w-80 lg:h-72"
              alt="profile_photo"
            />
            <div style={{ height: 25 }}></div>
            <button
              className="flex items-center w-36 md:w-[189px] h-auto lg:w-full justify-center py-2 border border-black rounded"
              onClick={handleButtonClick}
            >
              <div className="font-inter text-[10px] md:text-[14px] lg:text-[18px] font-semibold text-black text-start">
                Pilih foto
              </div>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="lg:h-[25px] md:h-[10px] h-[10px] "></div>
            <div className="w-32 md:w-[189px] lg:w-80">
              <div className="font-inter font-medium lg:font-semibold text-black text-start text-[8px] md:text-[10px] lg:text-sm">
                Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                file yang diperbolehkan: .JPG .JPEG .PNG
              </div>
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <div className="w-96 hidden lg:flex lg:flex-col">
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/editprofiletoko")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Edit Profile
                </div>
              </button>
            </div>
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/menupesanan")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Menu Pesanan
                </div>
              </button>
            </div>
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/uploadproduct")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Input Product
                </div>
              </button>
            </div>
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/historytransaction")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  History Transaction
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: 50 }}></div>
        <div className="max-w-full lg:pl-14 lg:pr-4">
          <div className="flex flex-col">
            <TextfieldProfile
              title="Nama Toko"
              placeholder="Bahnanaanna"
              type="text"
              readOnly={true}
              className={
                "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
              }
            />
            <div className="py-3">
              <div className="flex flex-col items-start">
                <div
                  className="font-inter font-semibold text-black text-[12px] md:text-[14px] lg:text-[24px]"
                >
                  Deskripsi Toko
                </div>
                <div style={{ height: 7 }}></div>
                <form className="flex items-center justify-start ">
                  <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                    <textarea
                      placeholder="Lorem ipsum dolor sit amet consectetur. Eu quis eget velit maecenas. Enim viverra nulla tellus eu aliquam. Augue risus sed orci at ut mauris vel. Enim donec fusce sed varius lacus ipsum ac. Sed quam commodo faucibus faucibus pellentesque magna mattis non tincidunt. Vulputate."
                      className="font-inter font-medium focus:outline-none text-[12px] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[350px] md:w-[604px] lg:w-[766px]"
                      readOnly={true}
                    />
                  </span>
                </form>
              </div>
            </div>

            <TextfieldProfile
              title="Contact Number"
              placeholder="628120929172"
              type="text"
              readOnly={true}
              className={
                "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
              }
            />
            <TextfieldProfile
              title="Email"
              placeholder="bahanaaa@gmail.com"
              type="email"
              readOnly={true}
              className={
                "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
              }
            />
            <TextfieldProfile
              title="Password"
              placeholder="*************"
              type="password"
              readOnly={true}
              className={
                "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
              }
            />
            <div className="hidden lg:flex justify-end py-5">
              <button
                className="flex items-center justify-center bg-red-500 rounded-xl w-36 h-12 "
                onClick={() => (window.location.href = "/loginseller")}
              >
                <div
                  className="font-inter font-semibold text-white"
                  style={{ fontSize: 18 }}
                >
                  Logout
                </div>
              </button>
            </div>
            <div className="flex flex-col lg:hidden py-5">
              <div className="px-[15px] py-[10px] md:w-[640px] w-full md:h-auto h-[230px] border border-black rounded-[10px] font-inter font-medium text-[14px] md:text-[20px]">
                <div className="border-b-[1px] flex items-start font-semibold px-[10px] py-[7px] ">
                  Pengaturan
                </div>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/editprofiletoko")}
                >
                  <div className="flex flex-row">
                    <img src={UserIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div>Edit Profile</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/menupesanan")}
                >
                  <div className="flex flex-row">
                    <img src={HomeIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div className="md:text-[16px]">Menu Pesanan</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/uploadproduct")}
                >
                  <div className="flex flex-row">
                    <img src={TruckIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div className="md:text-[16px]">Input Product</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/historytransaction")}
                >
                  <div className="flex flex-row">
                    <img src={HistoryIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div className="md:text-[16px]">History Transaction</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPetaniProfilePage;
