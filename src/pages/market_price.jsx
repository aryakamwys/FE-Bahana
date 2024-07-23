import React from "react";
import HeaderMarketPrice from "../sections/market_price/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentArticle from "../sections/market_price/content_article";

const MarketPrice = () => {
  return (
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
