import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderTrackingOrder from "../sections/tracking_order/header";
import ContentTrackingOrder from "../sections/tracking_order/content";
import Footer from "../components/specific/footer";

const TrackingOrder = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderTrackingOrder />
      <ContentTrackingOrder />
      <Footer />
    </div>
  );
};

export default TrackingOrder;
