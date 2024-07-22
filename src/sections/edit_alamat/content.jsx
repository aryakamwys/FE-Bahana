import React from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";

const ContentEditAlamat = () => {
  const provinces = [
    { label: "Aceh", value: "Aceh" },
    { label: "Bali", value: "Bali" },
    { label: "East Java", value: "East Java" },
    { label: "West Java", value: "West Java" },
    { label: "Central Java", value: "Central Java" },
    { label: "Yogyakarta", value: "Yogyakarta" },
    { label: "North Sumatra", value: "North Sumatra" },
    { label: "South Sulawesi", value: "South Sulawesi" },
    { label: "Papua", value: "Papua" },
    { label: "Riau", value: "Riau" },
  ];
  const cities = [
    { label: "Pekanbaru", value: "Pekanbaru" },
    { label: "Dumai", value: "Dumai" },
    { label: "Bengkalis", value: "Bengkalis" },
    { label: "Rokan Hulu", value: "Rokan Hulu" },
    { label: "Siak", value: "Siak" },
    { label: "Kampar", value: "Kampar" },
    { label: "Indragiri Hulu", value: "Indragiri Hulu" },
    { label: "Kuantan Singingi", value: "Kuantan Singingi" },
    { label: "Pelalawan", value: "Pelalawan" },
    { label: "Rokan Hilir", value: "Rokan Hilir" },
  ];
  const districts = [
    { label: "Pekanbaru Kota", value: "Pekanbaru Kota" },
    { label: "Sail", value: "Sail" },
    { label: "Tenayan Raya", value: "Tenayan Raya" },
    { label: "Marpoyan Damai", value: "Marpoyan Damai" },
    { label: "Rumbai", value: "Rumbai" },
    { label: "Rumbai Pesisir", value: "Rumbai Pesisir" },
    { label: "Bukit Raya", value: "Bukit Raya" },
    { label: "Tampan", value: "Tampan" },
    { label: "Sukajadi", value: "Sukajadi" },
    { label: "Lima Puluh", value: "Lima Puluh" },
  ];
  const postalCodes = [
    { label: "28111", value: "28111" },
    { label: "28112", value: "28112" },
    { label: "28113", value: "28113" },
    { label: "28114", value: "28114" },
    { label: "28115", value: "28115" },
    { label: "28116", value: "28116" },
    { label: "28117", value: "28117" },
    { label: "28118", value: "28118" },
    { label: "28119", value: "28119" },
    { label: "28121", value: "28121" },
  ];
  return (
    <div>
      <div className="lg:h-10"></div>
      <div className="w-full">
        <TextfieldProfile
          title={"Nama Lengkap"}
          placeholder={"Difa Rindang Utari"}
          type={"text"}
          readOnly={false}
          className={
            "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1239px]"
          }
        />
        <TextfieldProfile
          title={"Contact Number"}
          placeholder={"62812121212"}
          type={"text"}
          readOnly={false}
          className={
            "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1239px]"
          }
        />
        <div className="hidden lg:flex flex-row justify-between">
          <DropdownValue
            title={"Provinsi"}
            className={"relative w-[163px] lg:w-[200px] "}
            placeholder={"Riau"}
            options={provinces}
            width={"292px"}
          />
          <DropdownValue
            title={"Kota"}
            className={"relative w-[163px] lg:w-[200px] "}
            placeholder={"Pekanbaru"}
            options={cities}
            width={"292px"}
          />
          <DropdownValue
            title={"Kecamatan"}
            className={"relative w-[163px] lg:w-[200px] "}
            placeholder={"Pekanbaru Kota"}
            options={districts}
            width={"292px"}
          />
          <DropdownValue
            title={"Kode Pos"}
            className={"relative w-[163px] lg:w-[200px] "}
            placeholder={"28111"}
            options={postalCodes}
            width={"292px"}
          />
        </div>
        <div className="flex lg:hidden flex-row justify-between">
          <DropdownValue
            title={"Provinsi"}
            placeholder={"Riau"}
            options={provinces}
            className={"relative w-[163px] lg:w-[292px] "}
            width={"163px"}
          />
          <DropdownValue
            title={"Kota"}
            placeholder={"Pekanbaru"}
            options={cities}
            className={"relative w-[163px] lg:w-[292px] "}
            width={"163px"}
          />
        </div>
        <div className="flex lg:hidden flex-row justify-between">
          <DropdownValue
            title={"Kecamatan"}
            placeholder={"Pekanbaru Kota"}
            options={districts}
            className={"relative w-[163px] lg:w-[292px] "}
            width={"163px"}
          />
          <DropdownValue
            title={"Kode Pos"}
            placeholder={"28111"}
            options={postalCodes}
            className={"relative w-[163px] lg:w-[292px] "}
            width={"163px"}
          />
        </div>
        <TextfieldProfile
          title={"Detail Lainnya (Cth: Blok / Unit No., Patokan)"}
          placeholder={"difautari@gmail.com"}
          type={"text"}
          className={
            "font-inter font-medium text-[14px] lg:text-[26px] focus:outline-none w-[350px] lg:w-[1239px]"
          }
        />
        <div className="py-3">
          <div className="flex flex-col items-start">
            <div className="font-inter font-semibold text-black text-[14px] lg:text-[26px]">
              Nama Jalan, Gedung atau Rumah
            </div>
            <div style={{ height: 7 }}></div>
            <form className="flex items-center justify-start ">
              <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                <textarea
                  placeholder="Lorem ipsum dolor sit amet consectetur. Eu quis eget velit maecenas. Enim viverra nulla tellus eu aliquam. Augue risus sed orci at ut mauris vel. Enim donec fusce sed varius lacus ipsum ac. Sed quam commodo faucibus faucibus pellentesque magna mattis non tincidunt. Vulputate."
                  className="font-inter font-medium focus:outline-none text-[12px] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[350px] lg:w-[1239px]"
                  readOnly={false}
                />
              </span>
            </form>
          </div>
        </div>
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
    </div>
  );
};

export default ContentEditAlamat;
