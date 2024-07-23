import React from "react";

import ImageProduct from "../../assets/images/bayam_mini.png";

const ContentMenuPesanan = () => {
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between md:py-2 lg:py-5 mt-2">
        <div className="font-inter font-semibold text-black lg:text-[30px] md:text-[20px] ">
          50 Produk
        </div>
        <button className="border border-black rounded-md lg:p-4 md:p-2 ">
          + Tambah Produk Baru
        </button>
      </div>
      <div className="overflow-x-auto lg:py-10  md:py-5">
        <table className="w-full text-xl font-inter text-black">
          <thead className=" ">
            <tr className="text-[10px] lg:text-2xl font-bold bg-greenLight bg-opacity-70">
              <th
                scope="col"
                className=" px-3 lg:px-6  py-3 text-left rounded-s-lg md:text-[14px] lg:text-[17px]"
              >
                Nama Produk
              </th>
              <th className=" px-3 lg:px-6 py-3 md:text-[14px] lg:text-[17px] ">
                Harga
              </th>
              <th className=" px-3 lg:px-6  py-3 md:text-[14px] lg:text-[17px]">
                Stok
              </th>
              <th className=" px-3 lg:px-6 py-3 rounded-e-lg md:text-[14px] lg:text-[17px]">
                Penjualan
              </th>
            </tr>
          </thead>
          <tbody className="font-inter font-medium text-black text-[10px] lg:text-[20px] ">
            {[...Array(9)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className=" px-3 lg:px-6  py-4 flex items-center">
                  <img
                    src={ImageProduct}
                    alt="bayam"
                    className="w-5 h-5 md:w-7 md:h-7  lg:w-10 lg:h-10 mr-4"
                  />
                  <div className="md:text-[14px] font-semibold lg:text-[17px]">
                    Bayam
                  </div>
                </td>
                <td className=" px-3 lg:px-6  py-4 md:text-[14px] font-semibold lg:text-[17px] ">
                  Rp 100.000
                </td>
                <td className=" px-3 lg:px-6  py-4 md:text-[14px] font-semibold  lg:text-[17px]">
                  98
                </td>
                <td className=" px-3 lg:px-6  py-4 md:text-[14px] font-semibold lg:text-[17px]">
                  12
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentMenuPesanan;
