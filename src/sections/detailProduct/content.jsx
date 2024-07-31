import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductImage from "../../assets/images/carrot.jpg";
import ButtonWeightProduct from "../../components/common/button_weight_product";
import PlusMinusProduct from "../../components/common/button_plusminus_product";
import StatusPrice from "../../components/common/status_price";
import DetailImage from "../../components/common/detail_image";

import CartIcon from "../../assets/images/keranjang.svg";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ContentDetailProduct = (produkData) => {
  const { produkID } = useParams();
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [product, setProduct] = useState({});
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async (token) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:4000/produk/${produkID}`,
          config
        );
        setProduct(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, [produkID]);

  useEffect(() => {
    if (product) {
      let price = product.harga;
      if (selectedWeight === 25) {
        price *= 1;
      } else if (selectedWeight === 50) {
        price *= 1.25; // Naik 25% untuk berat 50
      } else if (selectedWeight === 75) {
        price *= 1.5; // Naik 50% untuk berat 75
      } else if (selectedWeight === 100) {
        price *= 1.75; // Naik 75% untuk berat 100
      }
      setCalculatedPrice(price);
    }
  }, [selectedWeight, product]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleBuyClick = () => {
    // Logika untuk membeli produk
    window.location.href = "/payment";
  };

  const handleWeightClick = (weight) => {
    setSelectedWeight(weight);
  };

  const handleAddToCartClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [
      ...cart,
      {
        ...product,
        jumlah: quantity,
        selectedWeight: selectedWeight,
        calculatedPrice: calculatedPrice,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Produk berhasil ditambahkan ke keranjang!");
  };

  return (
<<<<<<< HEAD
    <div>
      <div className="flex flex-col md:flex-row row-auto md:gap-5 mt-6 ">
        <div>
          <img
            src={ProductImage}
            className="border border-gray border-opacity-50 rounded-3xl w-[350px] h-[222px] md:w-[400px] md:h-[300px] lg:w-[700px] lg:h-[434px] "
=======
    <div key={product.produkID}>
      <div className="h-[30px] lg:h-[0px]"></div>
      <div className="flex flex-col md:flex-row row-auto">
        <div>
          <img
            src={`http://localhost:4000/uploads/${product.image_produk}`}
            className="border border-gray border-opacity-50 rounded-3xl w-[350px] h-[222px] lg:w-[700px] lg:h-[434px] "
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
            alt="productimage"
          />
          <DetailImage />
        </div>
<<<<<<< HEAD
        <div className="md:hidden lg:block" style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto items-start  w-[350px] h-auto lg:w-[505px] lg:h-[434px] ">
          <div className="pt-[15px] lg:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[20px] lg:text-[32px]">
            Nama Product blabla bshhvdshsh
          </div>
          <div className="md:hidden lg:block" style={{ height: 15 }}></div>
          <div className="py-[6px] lg:py-0 font-inter font-medium text-black text-start text-[14px] lg:text-[32px]">
=======
        <div style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto items-start h-[275px] lg:w-[505px] lg:h-[434px] ">
          <div className="pt-[15px] md:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[16px] lg:text-[32px]">
            {product.nama_produk}
          </div>
          <div style={{ height: 15 }}></div>
          <div className="py-[6px] lg:py-0 font-inter font-medium text-black text-start text-[14px] md:text-[16px] lg:text-[32px]">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
            Description
          </div>
          <div className="md:hidden lg:block" style={{ height: 15 }}></div>
          <div className="font-inter font-medium text-black text-start text-[12px] lg:text-[20px]">
            {product.deskripsi_produk}
          </div>
          <div className="flex flex-row row-auto">
            {[20, 50, 75, 100].map((weight) => (
              <ButtonWeightProduct
                key={weight}
                weight={weight}
                isSelected={selectedWeight === weight}
                onClick={handleWeightClick}
              />
            ))}
          </div>
          <PlusMinusProduct
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <StatusPrice />
          <div className="flex flex-col lg:h-[172px] col-auto p-1">
<<<<<<< HEAD
            <div className="flex flex-row row-auto items-center">
              <div className="font-inter text-[20px] lg:text-[40px] font-bold text-primary">
                Rp. 100.000
              </div>
              <div style={{ width: 10 }}></div>
              <div className="font-inter text-[16px] lg:text-[25px] font-normal text-gray text-opacity-50 line-through">
                Rp. 150.000
              </div>
            </div>
            <div className="flex items-start py-[8px] ">
              <div className="font-inter text-[14px] lg:text-[25px] font-semibold text-black">
                Stok: 10
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary rounded-xl lg:w-[205px] lg:h-[64px] md:w-[90px] md:h-[35px] "
                onClick={() => (window.location.href = "/payment")}
              >
                <div className="flex items-start justify-center text-white font-inter font-medium lg:text-[20px]  md:text-[15px] ">
=======
            <div className="flex flex-row row-auto items-center md:pt-[15px]">
              <span className="font-inter text-[20px] lg:text-[40px] font-bold text-primary">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice * 1).toLocaleString()}`
                  : "Loading..."}
              </span>
              <div style={{ width: 10 }}></div>
              <span className="font-inter text-[16px] md:text-[10px] lg:text-[25px] font-normal text-gray text-opacity-50 line-through">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice + 150000).toLocaleString()}`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-start py-[8px]">
              <div className="font-inter text-[14px] md:text-[12px] lg:text-[25px] font-semibold text-black">
                Stok: {product.jumlah_stok}
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary md:rounded lg:rounded-xl md:w-[93px] md:h-[27px] lg:w-[205px] lg:h-[64px] "
                onClick={handleBuyClick}
              >
                <div className="flex items-start justify-center text-white font-inter font-medium md:text-[10px] lg:text-[20px]">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
                  Buy
                </div>
              </button>
              <div style={{ width: 25 }}></div>
<<<<<<< HEAD
              <button className="flex flex-row row-auto items-center gap-1 justify-center bg-white border border-primary rounded-xl lg:w-[275px] lg:h-[64px] md:px-2 md:py-2 lg:px-0">
                <img src={CartIcon} className="w-6 h-6" alt="cart icon" />
                <div className="md:hidden lg:block" style={{ width: 10 }}></div>
                <div className="flex items-center font-semibold justify-center text-primary font-inter  lg:text-[20px] md:text-[13px] ">
=======
              <button
                className="flex flex-row row-auto items-center justify-center bg-white border border-primary md:rounded lg:rounded-xl md:w-[129px] md:h-[27px] lg:w-[275px] lg:h-[64px]"
                onClick={handleAddToCartClick}
              >
                <img
                  src={CartIcon}
                  className="md:w-[10px] md:h-[10px] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div style={{ width: 10 }}></div>
                <div className="flex items-center justify-center text-primary font-inter font-medium md:text-[10px] lg:text-[20px]">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
                  Masukkan Keranjang
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
