import React from "react";
import HeaderProduk from "./headerproduk";
import galeri from "../../assets/images/galeri.png";
import Down from "../../assets/images/arrow.png";
import peta from "../../assets/images/basemap.png";

const Produk = () => {
  return (
    <div className="h-[200vh]">
      <HeaderProduk />
      <main className="mt-5">
        {/* deskripsi produk */}
        <aside className="w-full flex flex-col justify-start items-start mb-5">
          <div className="w-full flex flex-col items-start justify-start gap-1 md:gap-2">
            <label
              htmlFor=""
              className="text-[14px] md:text-[20px] lg:text-[26px]  font-semibold "
            >
              Product Name
            </label>
            <input
              type="text"
              className="border-black border-opacity-40 border-[0.1px] lg:h-[70px] w-full h-[35px] md:h-[46px] rounded-md p-2"
            />

            <label
              htmlFor=""
              className="text-[14px] md:text-[20px] font-semibold mb-1 lg:text-[26px] "
            >
              Product Images
            </label>
            <div className="w-[110px] h-[110px] md:w-[200px]  md:h-[200px] lg:w-[300px] lg:h-[300px] border border-dashed rounded-lg border-opacity-50 flex items-center justify-center ">
              <div className="flex flex-col items-center gap-1">
                <img
                  src={galeri}
                  alt=""
                  className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] "
                />
                <p className="text-[10px] font-semibold md:text-[16px] lg:text-[22px] ">
                  + Add Image
                </p>
              </div>
            </div>
            <label
              htmlFor=""
              className=" mt-3 text-[16px] md:text-[25px] font-semibold  lg:text-[32px] "
            >
              Product Description
            </label>
            <div className="w-full mt-1">
              <div className="flex justify-between items-center">
                <h1 className="text-[12px] md:text-[16px] font-semibold lg:text-[25px] ">
                  Metode Pertanian:
                </h1>
                <button className="flex justify-center md:justify-between items-center gap-2 md:p-2 w-[82px] lg:w-[384px] lg:h-[56px] md:w-[176px] md:h-[39px] h-[26px] border border-black rounded-md">
                  <p className="text-[10px] font-semibold md:text-[16px] lg:text-[22px] ">
                    Select{" "}
                  </p>{" "}
                  <img
                    src={Down}
                    alt=""
                    className="w-[10px] h-[6px] lg:w-[20px] lg:h-[12px] "
                  />
                </button>
              </div>
              <div className="text-start flex flex-col gap-[7px] mt-2">
                <h1 className="text-[12px] md:text-[14px] font-semibold lg:text-[22px] ">
                  Deksripsi lebih lanjut Metode Pertanian:
                </h1>

                <textarea
                  placeholder="Contoh: Menggunakan pupuk kompos dan pestisida alami."
                  className="border-black border-opacity-40 border-[0.1px] lg:h-[156px]  h-[106px] md:h-[156px] rounded-md  p-2  flex justify-center items-center md:placeholder:font-semibold lg:placeholder:text-[22px] placeholder:text-[10px] md:placeholder:text-[16px]  w-full placeholder:text-[#B0B0B0]"
                ></textarea>
              </div>
              <div className="flex md:flex-col justify-between md:items-start gap-1 items-center mt-3">
                <h1 className="text-[12px] font-semibold md:text-[16px] lg:text-[25px]">
                  Kualitas Tanah:
                </h1>
                <input
                  type="text"
                  className="border-black border-opacity-40 border-[0.1px] lg:h-[49px] w-[194px] md:w-full md:h-[37px] h-[26px] rounded-md  p-2  flex justify-center items-center md:placeholder:text-[16px]  placeholder:text-[10px] placeholder:text-[#B0B0B0]  "
                  placeholder="Contoh: Tanah liat"
                />
              </div>
              <div className="text-start flex flex-col gap-[7px] mt-3">
                <h1 className="text-[12px] font-semibold md:text-[14px] lg:text-[22px] ">
                  Deksripsi lebih lanjut Metode Pertanian:
                </h1>

                <textarea
                  placeholder="Menjelaskan lebih lanjut tentang kondisi tanah dan faktor lingkungan lainnya yang mungkin relevan"
                  className="border-black border-opacity-40 border-[0.1px] md:h-[146px]  h-[106px] rounded-md  p-2  flex justify-center items-center  placeholder:text-[10px] md:placeholder:text-[16px] lg:h-[156px] md:placeholder:font-semibold lg:placeholder:text-[22px] w-full placeholder:text-[#B0B0B0]"
                ></textarea>
                <div className="flex justify-between items-center md:mt-2">
                  <h1 className="text-[12px] font-semibold md:text-[16px] lg:text-[25px]">
                    Penggunaan Pestisida/Herbisida
                  </h1>
                  <button className="flex justify-center  lg:w-[384px] lg:h-[56px] md:justify-between items-center gap-2 md:p-2 w-[82px] md:w-[176px] md:h-[39px] h-[26px] border border-black rounded-md">
                    <p className="text-[10px] font-semibold md:text-[16px] lg:text-[22px] ">
                      Select{" "}
                    </p>{" "}
                    <img
                      src={Down}
                      alt=""
                      className="w-[10px] h-[6px] lg:w-[20px] lg:h-[12px] "
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* INFORMASI PETTANI */}
        <aside className="flex flex-col w-full justify-start items-start">
          <h1 className="text-[16px] md:text-[25px] font-bold text-[#2570EB] mb-2 lg:text-[32px] ">
            Information of Farmer
          </h1>
          <div className="w-[110px] h-[110px] md:w-[200px]  md:h-[200px] lg:w-[300px] lg:h-[300px] border border-dashed rounded-lg border-opacity-50 flex items-center justify-center ">
            <div className="flex flex-col items-center gap-1">
              <img
                src={galeri}
                alt=""
                className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] "
              />
              <p className="text-[10px] font-semibold md:text-[16px] lg:text-[22px] ">
                + Add Image
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full items-start justify-start mb-3 mt-1">
            <label
              htmlFor=""
              className="text-[14px] md:text-[20px] font-semibold lg:text-[26px] "
            >
              Farmer's Name
            </label>
            <input
              type="text"
              className="border-black border-opacity-40 border-[0.1px] w-full lg:h-[70px] md:h-[46px] h-[35px] rounded-md p-2"
            />
            <h1 className="text-[12px] font-semibold md:text-[20px] lg:text-[26px] ">
              Profil Singkat Petani
            </h1>

            <textarea
              placeholder="A detailed description of the product helps customers to learn more about the product."
              className="border-black border-opacity-40 border-[0.1px] md:h-[142px] h-[98px] rounded-md  p-3  flex justify-center items-center  placeholder:text-[10px] md:placeholder:text-[16px] lg:placeholder:text-[22px] lg:h-[151px]  w-full placeholder:text-[#B0B0B0]"
            ></textarea>
          </div>
          <h1 className="text-[12px] font-semibold md:text-[20px] lg:text-[26px] ">
            Lokasi Produk di Hasilkan
          </h1>
          <div className="flex items-center gap-2 md:gap-8 mt-2">
            <input
              placeholder="Provinsi"
              className="border-black border-opacity-40 border-[0.1px] lg:w-[250px] lg:h-[55px] xl:w-[350px] xl:h-[70px] lg:placeholder:text-[22px] md:w-[184px] md:h-[44px]  h-[35px] p-2  leading-[17px] placeholder:text-[10px]  md:placeholder:text-[16px]  w-[109px] rounded-md md:rounded-lg placeholder:text-[#B0B0B0]"
            ></input>
            <input
              placeholder="Kota/Kab"
              className="border-black border-opacity-40 lg:w-[250px] lg:h-[55px] xl:w-[350px] xl:h-[70px] lg:placeholder:text-[22px] border-[0.1px] md:placeholder:text-[16px] md:w-[184px] md:h-[44px] h-[35px] p-2  leading-[17px] placeholder:text-[10px] w-[109px]  rounded-md md:rounded-lg placeholder:text-[#B0B0B0]"
            ></input>
            <input
              placeholder="Kecamatan"
              className="border-black border-opacity-40 lg:w-[250px] lg:h-[55px] xl:w-[350px] xl:h-[70px]  lg:placeholder:text-[22px] border-[0.1px] md:placeholder:text-[16px] md:w-[184px] md:h-[44px] h-[35px] p-2  leading-[17px] placeholder:text-[10px] w-[109px]  rounded-md md:rounded-lg placeholder:text-[#B0B0B0]"
            ></input>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2 mt-3 md:mt-8">
            <h1 className="text-[16px] font-bold text-[#2570EB] md:text-[20px] lg:text-[32px] ">
              Peta Lokasi Produk di Hasilkan
            </h1>
            <h1 className="text-[10px] font-semibold md:text-[16px] lg:text-[25px] md:mb-2 ">
              Nama Lokasi Produk Di Hasilkan: didapat dari informasi petani
            </h1>
            <img
              src={peta}
              alt=""
              className="w-[313px] h-[164px] md:w-[477px] md:h-[280px] lg:w-[706px] lg:h-[465px] "
            />
            <div className="w-full  flex  justify-between items-center mt-5">
              <button className="w-[102px] md:w-[130px] lg:w-[180px] lg:h-[60px] md:h-[44px] h-[39px] p-2 md:text-[20px] lg:text-[26px] text-[16px] text-semibold  text-[#003E22] border border-[#003E22]  rounded-md bg-[#F6F6F6] ">
                Cancel
              </button>
              <button className="w-[102px] h-[39px] p-2 md:w-[130px]  lg:w-[180px] lg:h-[60px]  md:text-[20px] lg:text-[26px] md:h-[44px] text-[16px] text-semibold  text-[#F6F6F6]  rounded-md bg-[#003E22] ">
                Save
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Produk;
