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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
