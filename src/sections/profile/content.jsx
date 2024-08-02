import React, { useRef } from "react";

import ProfileImage from "../../assets/images/image_profile_page.png";
import TextfieldProfile from "../../components/common/textfieldProfile";

import UserIcon from "../../assets/images/user_profile.svg";
import HomeIcon from "../../assets/images/home_profile.svg";
import TruckIcon from "../../assets/images/truck_profile.svg";
import HistoryIcon from "../../assets/images/history_profile.svg";
import NextIcon from "../../assets/images/next_profile.svg";
import Back from "../../assets/images/vectorback.png";
import Down from "../../assets/images/arrow.png";

const ContentProfile = () => {
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
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-52 md:w-70 lg:w-96 items-center border border-black rounded-md lg:rounded-xl p-2 md:p-3 lg:p-5">
            <img
              src={ProfileImage}
              className="w-36 h-30  md:w-40 md:h-32 lg:w-80 lg:h-72"
              alt="profile_photo"
            />
            <div style={{ height: 25 }}></div>
            <button
              className="flex items-center w-36 md:w-full justify-center py-1 lg:py-2 border border-black rounded"
              onClick={handleButtonClick}
            >
              <div
                className="font-inter font-semibold text-black text-start"
                style={{ fontSize: 18 }}
              >
                Pilih foto
              </div>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div style={{ height: 25 }}></div>
            <div className="w-32 md:w-44 lg:w-80">
              <div className="font-inter font-semibold text-black text-justify text-xs lg:text-sm">
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
                onClick={() => (window.location.href = "/editprofile")}
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
                onClick={() => (window.location.href = "/editalamat")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Edit Alamat
                </div>
              </button>
            </div>
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/riwayatpesanan")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Riwayat Pesanan
                </div>
              </button>
            </div>
            <div className="py-1">
              <button
                className="flex items-center w-full justify-center py-2 border border-black rounded-lg"
                onClick={() => (window.location.href = "/trackingorder")}
              >
                <div
                  className="font-inter font-semibold text-black text-start"
                  style={{ fontSize: 18 }}
                >
                  Tracking My Order
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: 50 }}></div>
        <div className="max-w-full lg:pl-14 lg:pr-4">
          <div className="flex flex-col w-f">
            <TextfieldProfile
              title="Nama"
              placeholder="Difa Rindng Utari"
              type="text"
              readOnly={true}
              className={
                "font-inter font-medium text-[12px] lg:text-[24px] focus:outline-none w-[350px] md:w-[630px] lg:w-[766px]"
              }
            />
            <TextfieldProfile
              title="Email"
              placeholder="bahanaaaaa@gmail.com"
              className={
                "font-inter font-medium text-[12px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[766px] md:w-[630px]"
              }
              type="email"
              readOnly={true}
            />
            <TextfieldProfile
              title="Contact Number"
              placeholder="628120929172"
              className={
                "font-inter font-medium text-[12px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[766px] md:w-[630px]"
              }
              type="text"
              readOnly={true}
            />
            <TextfieldProfile
              title="Tanggal Lahir"
              placeholder="12 Juli 2004"
              className={
                "font-inter font-medium text-[12px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[766px] md:w-[630px]"
              }
              type="text"
              readOnly={true}
            />
            <TextfieldProfile
              title="Password"
              placeholder="*************"
              className={
                "font-inter font-medium text-[12px] lg:text-[24px] focus:outline-none w-[350px] lg:w-[766px] md:w-[630px]"
              }
              type="password"
              readOnly={true}
            />
            <div className=" hidden lg:flex justify-end">
              <button
                className="flex items-center justify-center bg-red-500 rounded-xl w-24 h-8 lg:w-36 lg:h-12 "
                onClick={() => (window.location.href = "/login")}
              >
                <div className="font-inter font-semibold text-white text-[12px] lg:text-[18px]">
                  Logout
                </div>
              </button>
            </div>
            <div className="flex flex-col lg:hidden py-5">
              <div className="px-[15px] py-[10px] w-full h-[230px] border border-black rounded-[10px] font-inter font-medium text-[14px]">
                <div className="border-b-[1px] flex items-start font-semibold px-[10px] py-[7px] ">
                  Pengaturan
                </div>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/editprofile")}
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
                  onClick={() => (window.location.href = "/editalamat")}
                >
                  <div className="flex flex-row">
                    <img src={HomeIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div>Edit Alamat</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/riwayatpesanan")}
                >
                  <div className="flex flex-row">
                    <img src={HistoryIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div>Riwayat Pesanan</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
                <button
                  className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                  onClick={() => (window.location.href = "/trackingorder")}
                >
                  <div className="flex flex-row">
                    <img src={TruckIcon} alt="user" />
                    <div className="w-[10px]"></div>
                    <div>Tracking My Order</div>
                  </div>
                  <img src={NextIcon} alt="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* KONTEN EDIT LOKASI PRODCT FIXED DI PROFILE */}
        <div className="w-full fixed flex justify-center items-center h-[100vh] z-40 bg-blur backdrop-blur-md bg-white/30 inset-0 ">
          <div className=" lg:w-[800px] lg:h-[400px]  xl:w-[1112px] xl:h-[482px] w-[350px] h-[192px] md:w-[638px] md:h-[353px] bg-[#003E22] bg-opacity-85 rounded-xl    text-white ">
            <div className="w-full flex justify-between items-center lg:border-none border-b border-white px-3 md:px-5 md:py-3 py-2">
              <button className="flex items-center gap-1 md:gap-2">
                <img
                  src={Back}
                  alt=""
                  className="w-[8px] h-[8px] md:w-[14px] md:h-[14px] "
                />
                <p className="text-[10px] md:text-[20px] lg:text-[22px] font-semibold">
                  Back
                </p>
              </button>
              <h1 className="text-[12px] font-semibold  md:text-[20px] lg:text-[28px] ">
                Edit Lokasi Yang di Hasilkan
              </h1>

              <span className="text-[12px]  md:text-[20px] lg:text-[28px] font-semibold">
                X
              </span>
            </div>
            <div className="mt-2 items-center md:px-5 lg:gap-8 md:gap-6 justify-start md:mt-7 flex gap-[14px] px-3">
              <div className="flex flex-col items-start justify-start  gap-[2px]  md:gap-[8px]">
                <label
                  for="provinsi"
                  class="block text-white text-[12px] font-medium  md:text-[20px] lg:text-[26px] "
                >
                  Provinsi
                </label>
                <div class="relative">
                  <select
                    id="provinsi"
                    class="block appearance-none text-[10px] bg-white   lg:w-[225px] lg:h-[55px] lg:rounded-lg xl:w-[292px] xl:h-[70px] lg:text-[24px] text-gray border border-gray-400 hover:border-gray-500 px-2 md:w-[180px] md:h-[40px] w-[100px] h-[24px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Jawa Barat</option>
                    <option>Jawa Tengah</option>
                    <option>Jawa Timur</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img src={Down} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start  gap-[2px] md:gap-[8px]  ">
                <label
                  for="provinsi"
                  class="block text-white text-[12px] font-medium  md:text-[20px]  lg:text-[26px]"
                >
                  Kota/Kab
                </label>
                <div class="relative">
                  <select
                    id="provinsi"
                    class="block appearance-none text-[10px] bg-white  lg:w-[225px] lg:h-[55px] lg:rounded-lg xl:w-[292px] xl:h-[70px] lg:text-[24px] text-gray border border-gray-400 hover:border-gray-500 px-2 md:w-[180px] md:h-[40px] w-[100px] h-[24px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Bandung</option>
                    <option>Bogor</option>
                    <option>Buah Batu</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img src={Down} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start  gap-[2px] md:gap-[8px] ">
                <label
                  for="provinsi"
                  class="block text-white text-[12px] font-medium  md:text-[20px]  lg:text-[26px]"
                >
                  Kacamatan
                </label>
                <div class="relative">
                  <select
                    id="provinsi"
                    class="block appearance-none text-[10px]  lg:w-[225px] lg:h-[55px] lg:rounded-lg xl:w-[292px] xl:h-[70px] lg:text-[24px] bg-white text-gray border border-gray-400 hover:border-gray-500 px-2 md:w-[180px] md:h-[40px] w-[100px] h-[24px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Bojongsoang</option>
                    <option>Baleendah</option>
                    <option>Dayeuhkolot</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img src={Down} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 md:px-5 flex items-center gap-1 md:gap-2 mt-2 md:mt-7">
              <input
                type="checkbox"
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] rounded-md lg:w-[32px] lg:h-[32px] "
              />
              <h1 className="text-[7px] font-medium md:text-[12px] lg:text-[16px] xl:text-[20px] ">
                Saya menyetujui Syarat & Ketentuan serta Kebijakan
                Privasi pengaturan alamat di TaniDirect.
              </h1>
            </div>
            <div className="w-full justify-center items-center flex mt-8 md:mt-12 lg:mt-14 xl:mt-18">
              <button className="text-[12px] font-bold lg:w-[428px] lg:h-[44px] lg:text-[20px] text-primary border md:w-[315px] md:h-[44px] md:text-[20px] flex justify-center items-center border-black rounded-md w-[180px] h-[28px] p-2 bg-white ">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentProfile;
