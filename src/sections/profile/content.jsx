import React from "react";

import ProfileImage from "../../assets/images/image_profile_page.png";
import TextfieldProfile from "../../components/common/textfieldProfile";

const ContentProfile = () => {
  return (
    <div className="pl-16">
      <div style={{ height: 40 }}></div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col border border-black rounded-xl p-5">
            <img
              src={ProfileImage}
              style={{ width: 340, height: 300 }}
              alt="profile_photo"
            />
            <div style={{ height: 25 }}></div>
            <button className="flex items-center w-full justify-center py-2 border border-black rounded">
              <div
                className="font-inter font-semibold text-black text-start"
                style={{ fontSize: 18 }}
              >
                Pilih foto
              </div>
            </button>
            <div style={{ height: 25 }}></div>
            <div style={{ width: 340 }}>
              <div
                className="font-inter font-semibold text-black text-start"
                style={{ fontSize: 14 }}
              >
                Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                file yang diperbolehkan: .JPG .JPEG .PNG
              </div>
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <div>
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
        <div className="flex flex-col">
          <TextfieldProfile
            title="Nama"
            placeholder="Difa Rindng Utari"
            type="text"
            readOnly={true}
            width={766}
          />
          <TextfieldProfile
            title="Email"
            placeholder="bahanaaaaa@gmail.com"
            type="email"
            readOnly={true}
            width={766}
          />
          <TextfieldProfile
            title="Contact Number"
            placeholder="628120929172"
            type="text"
            readOnly={true}
            width={766}
          />
          <TextfieldProfile
            title="Tanggal Lahir"
            placeholder="12 Juli 2004"
            type="text"
            readOnly={true}
            width={766}
          />
          <TextfieldProfile
            title="Password"
            placeholder="*************"
            type="password"
            readOnly={true}
            width={766}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentProfile;
