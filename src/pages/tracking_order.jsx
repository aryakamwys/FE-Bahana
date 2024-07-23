import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderTrackingOrder from "../sections/tracking_order/header";
import ContentTrackingOrder from "../sections/tracking_order/content";
import Footer from "../components/specific/footer";

const TrackingOrder = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderTrackingOrder />
      <ContentTrackingOrder />
      {/* <Footer /> */}
    </div>
  );
};

export default TrackingOrder;
