import React from "react";

import ImageProduct from "../../assets/images/bayam_mini.png";

const ContentMenuPesanan = () => {
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between  md:pt-[39px] md:pb-[18px] py-5">
        <div className="font-inter md:text-[20px] lg:text-[30px] font-semibold text-black ">
          50 Produk
        </div>
        <button className="border border-black rounded-md md:p-[15px] lg:p-4" onClick={() => (window.location.href = "/uploadproduct")}>
          + Tambah Produk Baru
        </button>
      </div>
      <div className="overflow-x-auto py-10 md:py-0">
        <table className="w-full text-xl font-inter text-black">
          <thead className=" ">
            <tr className="text-[10px] md:text-[16px] lg:text-2xl font-bold bg-greenLight bg-opacity-70">
              <th
                scope="col"
                className=" px-3 md:px-6  py-3 text-left rounded-s-lg"
              >
                Nama Produk
              </th>
              <th className=" px-3 md:px-6 py-3 ">Harga</th>
              <th className=" px-3 md:px-6  py-3 ">Stok</th>
              <th className=" px-3 md:px-6 py-3 rounded-e-lg">Penjualan</th>
            </tr>
          </thead>
          <tbody className="font-inter font-medium text-black text-[10px] md:text-[16px] lg:text-[20px] ">
            {[...Array(14)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className=" px-3 md:px-6  py-4 flex items-center">
                  <img
                    src={ImageProduct}
                    alt="bayam"
                    className="w-5 h-5 md:w-10 md:h-10 mr-4"
                  />
                  <div>Bayam</div>
                </td>
                <td className=" px-3 md:px-6  py-4">Rp 100.000</td>
                <td className=" px-3 md:px-6  py-4">98</td>
                <td className=" px-3 md:px-6  py-4">12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentMenuPesanan;
