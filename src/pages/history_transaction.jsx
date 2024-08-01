import React from "react";
import HeaderHistoryTransaction from "../sections/history_transaction/header";
import NavbarPetani from "../components/specific/navbar_seller";
import ContentHistoryTransaction from "../sections/history_transaction/content";

const HistoryTransaction = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[240px]">
      <NavbarPetani />
      <HeaderHistoryTransaction />
      <ContentHistoryTransaction />
    </div>
  );
};

export default HistoryTransaction;
