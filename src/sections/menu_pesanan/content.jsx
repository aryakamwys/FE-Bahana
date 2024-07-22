import React from "react";

import ImageProduct from "../../assets/images/bayam_mini.png";

const ContentMenuPesanan = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between  py-5">
        <div
          className="font-inter font-semibold text-black"
          style={{ fontSize: 30 }}
        >
          50 Produk
        </div>
        <button className="border border-black rounded-md p-4">
          + Tambah Produk Baru
        </button>
      </div>
      <div className="overflow-x-auto py-10">
        <table className="w-full text-xl font-inter text-black">
          <thead className=" ">
            <tr className="text-2xl font-bold bg-greenLight bg-opacity-70">
              <th scope="col" className="px-6 py-3 text-left rounded-s-lg">Nama Produk</th>
              <th className="px-6 py-3 ">Harga</th>
              <th className="px-6 py-3 ">Stok</th>
              <th className="px-6 py-3 rounded-e-lg">Penjualan</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(7)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 flex items-center">
                  <img
                    src={ImageProduct}
                    alt="bayam"
                    className="w-16 h-16 mr-4"
                  />
                  <div>Bayam</div>
                </td>
                <td className="px-6 py-4">Rp 100.000</td>
                <td className="px-6 py-4">98</td>
                <td className="px-6 py-4">12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentMenuPesanan;
