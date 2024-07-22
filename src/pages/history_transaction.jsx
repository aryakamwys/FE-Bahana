import React from "react";
import HeaderHistoryTransaction from "../sections/history_transaction/header";
import NavbarPetani from "../components/specific/navbar_seller";
import ContentHistoryTransaction from "../sections/history_transaction/content";

const HistoryTransaction = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderHistoryTransaction />
      <ContentHistoryTransaction />
    </div>
  );
};

export default HistoryTransaction;
