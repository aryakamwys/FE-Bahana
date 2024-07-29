import React, { useEffect, useRef, useState } from "react";

// import ProfileImage from "../../assets/images/image_profile_page.png";
import TextfieldProfile from "../../components/common/textfieldProfile";

import UserIcon from "../../assets/images/user_profile.svg";
import HomeIcon from "../../assets/images/home_profile.svg";
import TruckIcon from "../../assets/images/truck_profile.svg";
import HistoryIcon from "../../assets/images/history_profile.svg";
import NextIcon from "../../assets/images/next_profile.svg";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
const ContentProfile = (profileData) => {
  const [profile, setProfile] = useState({});
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = async () => {
    try {
      // Remove token from local storage
      cookies.remove("token_pembeli");
      cookies.remove("pembeliID");

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = (token) => {
    const pembeliID = cookies.get("pembeliID");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:4000/pembeli/${pembeliID}`, config)
      .then((res) => {
        setProfile(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    if (userToken) {
      fetchData(userToken);
    } else {
      console.log("gada token");
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // handle the file upload logic here
      console.log(file);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
  };

  return (
    <div>
      <div className="lg:pl-16" key={profileData.pembeliID}>
        <div className="h-[40px] md:h-[30px]"></div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-52 md:w-[223px] lg:w-96 items-center border border-black rounded-xl p-[15px]">
              <img
                src={`http://localhost:4000/uploads/${profile.image_pembeli}`}
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
            <div className="flex flex-col">
              <TextfieldProfile
                title="Nama"
                placeholder={profile.nama_pembeli}
                type="text"
                readOnly={true}
                className={
                  "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
                }
              />
              <TextfieldProfile
                title="Email"
                placeholder={profile.email_pembeli}
                className={
                  "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
                }
                type="email"
                readOnly={true}
              />
              <TextfieldProfile
                title="Contact Number"
                placeholder={profile.kontak_pembeli}
                className={
                  "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
                }
                type="text"
                readOnly={true}
              />
              <TextfieldProfile
                title="Tanggal Lahir"
                placeholder={
                  profile.tanggal_lahir
                    ? formatDate(profile.tanggal_lahir)
                    : "Tanggal tidak tersedia"
                }
                className={
                  "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
                }
                type="text"
                readOnly={true}
              />
              <TextfieldProfile
                title="Password"
                placeholder="*************"
                className={
                  "font-inter font-medium text-[12px] md:text-[14px] lg:text-[24px] focus:outline-none w-[350px] md:w-[604px] lg:w-[766px]"
                }
                type="password"
                readOnly={true}
              />
              <div className=" hidden lg:flex justify-end">
                <button
                  type="button"
                  class="flex items-center w-24 h-8 lg:w-36 lg:h-12 justify-center focus:outline-none font-inter font-semibold text-white text-[12px] lg:text-[18px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              <div className="flex flex-col lg:hidden py-5">
                <div className="px-[15px] py-[10px] md:w-[640px] w-full md:h-auto h-[230px] border border-black rounded-[10px] font-inter font-medium text-[14px] md:text-[20px] ">
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
                      <div className="md:text-[16px]">Edit Profile</div>
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
                      <div className="md:text-[16px] ">Edit Alamat</div>
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
                      <div className="md:text-[16px] ">Riwayat Pesanan</div>
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
                      <div className="md:text-[16px] ">Tracking My Order</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentProfile;
