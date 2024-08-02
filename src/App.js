import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login";
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
import TrackingOrder from "./pages/tracking_order";
import Payment from "./pages/payment";
import PembayaranPage from "./sections/payment/pembayaran";
import SuccessPayment from "./components/specific/success";
import PembeliLoginPage from "./pages/login";
import PetaniLoginPage from "./pages/login_seller";
import PetaniRegisterPage from "./pages/register_seller";
import PembeliHomePage from "./pages/home";
import PetaniHomePage from "./pages/home_seller";
import PetaniProfilePage from "./pages/profile_seller";
import MenuPesanan from "./pages/menu_pesanan";
import HistoryTransaction from "./pages/history_transaction";
import EditProfileToko from "./pages/edit_profile_toko";
import UploadProduct from "./pages/upload_product";
import PembeliRegisterPage from "./pages/register";
import MarketPricePetani from "./sections/home_seller/market_price_seller";
import WishlistPetani from "./sections/home_seller/wishlist_seller";
import StepOne from "./pages/biodata/step1";
import StepTwo from "./pages/biodata/step2";
import StepThree from "./pages/biodata/step3";
import ProductIn from "./pages/informasiProduk";
import MyProduct from "./pages/produksaya";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PembeliHomePage />} />
          <Route path="/homeseller" element={<PetaniHomePage />} />
          <Route path="/login" element={<PembeliLoginPage />} />
          <Route path="/loginseller" element={<PetaniLoginPage />} />
          <Route path="/register" element={<PembeliRegisterPage />} />
          <Route path="/registerseller" element={<PetaniRegisterPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wishlistseller" element={<WishlistPetani />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/detailproduct" element={<DetailProduct />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/marketprice" element={<MarketPrice />} />
          <Route path="/marketpriceseller" element={<MarketPricePetani />} />
          <Route path="/detailblog" element={<DetailBlog />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profileseller" element={<PetaniProfilePage />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/editprofiletoko" element={<EditProfileToko />} />
          <Route path="/editalamat" element={<EditAlamat />} />
          <Route path="/riwayatpesanan" element={<RiwayatPesanan />} />
          <Route path="/trackingorder" element={<TrackingOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pembayaran" element={<PembayaranPage />} />
          <Route path="/sucsess" element={<SuccessPayment />} />
          <Route path="/menupesanan" element={<MenuPesanan />} />
          <Route path="/historytransaction" element={<HistoryTransaction />} />
          <Route path="/uploadproduct" element={<UploadProduct />} />
          <Route path="/stepone" element={<StepOne />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/stepthree" element={<StepThree />} />
          <Route path="/informasiproduct" element={<ProductIn />} />
          <Route path="/myproduct" element={<MyProduct />} />

          <Route path="/" element={<Navigate to="/login" />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
