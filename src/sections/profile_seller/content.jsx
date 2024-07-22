import React from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import ProfileImage from "../../assets/images/image_profile_page.png";

const ContentPetaniProfilePage = () => {
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
        <div className="flex flex-col">
          <TextfieldProfile
            title="Nama Toko"
            placeholder="Bahnanaanna"
            type="text"
            readOnly={true}
            width={766}
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
                style={{ width: 766 }}
              >
                <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                  <textarea
                    placeholder="Lorem ipsum dolor sit amet consectetur. Eu quis eget velit maecenas. Enim viverra nulla tellus eu aliquam. Augue risus sed orci at ut mauris vel. Enim donec fusce sed varius lacus ipsum ac. Sed quam commodo faucibus faucibus pellentesque magna mattis non tincidunt. Vulputate."
                    className="font-inter font-medium focus:outline-none w-full"
                    style={{ fontSize: 24, height: 189, resize: "none" }}
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
            width={766}
          />
          <TextfieldProfile
            title="Email"
            placeholder="bahanaaa@gmail.com"
            type="email"
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

export default ContentPetaniProfilePage;
