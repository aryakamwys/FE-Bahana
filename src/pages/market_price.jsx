import React from "react";
import HeaderMarketPrice from "../sections/market_price/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentArticle from "../sections/market_price/content_article";

const MarketPrice = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
