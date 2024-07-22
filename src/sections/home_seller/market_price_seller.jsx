import React from "react";
import HeaderMarketPrice from "../../sections/market_price/header";
import ContentArticle from "../../sections/market_price/content_article";
import NavbarPetani from "../../components/specific/navbar_seller";

const MarketPricePetani = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPricePetani;
