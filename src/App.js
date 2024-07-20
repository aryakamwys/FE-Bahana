import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AboutUs from "./pages/aboutus";
import Wishlist from "./pages/wishlist";
import AllProducts from "./pages/all_product";
import DetailProduct from "./pages/detail_product";
import ChatPage from "./pages/chat";
import CartPage from "./pages/keranjang";
import MarketPrice from "./pages/market_price";
import DetailBlog from "./pages/detail_blog";
import ProfilePage from "./pages/profile";
import EditProfile from "./pages/edit_profile";
import EditAlamat from "./pages/edit_alamat";
import RiwayatPesanan from "./pages/riwayat_pesanan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/detailproduct" element={<DetailProduct />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/marketprice" element={<MarketPrice />} />
          <Route path="/detailblog" element={<DetailBlog />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/editalamat" element={<EditAlamat />} />
          <Route path="/riwayatpesanan" element={<RiwayatPesanan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
