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
    <div className="w-full">
      <div className="h-10"></div>
      <div>
        <TextfieldProfile
          title={"Nama Lengkap"}
          placeholder={"Difa Rindang Utari"}
          type={"text"}
          readOnly={false}
          width={1300}
        />
        <TextfieldProfile
          title={"Contact Number"}
          placeholder={"62812121212"}
          type={"text"}
          readOnly={false}
          width={1300}
        />
        <div className="flex flex-row justify-between">
          <DropdownValue
            title={"Provinsi"}
            width={292}
            placeholder={"Riau"}
            options={provinces}
          />
          <DropdownValue
            title={"Kota"}
            width={292}
            placeholder={"Pekanbaru"}
            options={cities}
          />
          <DropdownValue
            title={"Kecamatan"}
            width={292}
            placeholder={"Pekanbaru Kota"}
            options={districts}
          />
          <DropdownValue
            title={"Kode Pos"}
            width={292}
            placeholder={"28111"}
            options={postalCodes}
          />
        </div>
        <TextfieldProfile
          title={"Detail Lainnya (Cth: Blok / Unit No., Patokan)"}
          width={1300}
          placeholder={"difautari@gmail.com"}
          type={"text"}
        />
        <div className="py-3 pb-12">
          <div className="flex flex-col items-start">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 26 }}
            >
              Nama Jalan, Gedung, No. Rumah
            </div>
            <div style={{ height: 25 }}></div>
            <form
              className="flex items-center justify-start"
              style={{ width: 1300, height: 70 }}
            >
              <span
                className="flex items-start justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray"
                style={{ height: 110 }}
              >
                <input
                  type={"text"}
                  placeholder={"sbdfbnd65sfdvbs"}
                  className="font-inter font-medium focus:outline-none"
                  style={{ fontSize: 24 }}
                  readOnly={false}
                />
              </span>
            </form>
          </div>
        </div>
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
    </div>
  );
};

export default ContentEditAlamat;
