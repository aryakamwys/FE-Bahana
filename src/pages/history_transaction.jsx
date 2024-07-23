import React from "react";
import HeaderHistoryTransaction from "../sections/history_transaction/header";
import NavbarPetani from "../components/specific/navbar_seller";
import ContentHistoryTransaction from "../sections/history_transaction/content";

const HistoryTransaction = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPetani /> */}
      <HeaderHistoryTransaction />
      <ContentHistoryTransaction />
    </div>
  );
};

export default HistoryTransaction;
