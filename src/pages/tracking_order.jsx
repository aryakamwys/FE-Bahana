import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderTrackingOrder from "../sections/tracking_order/header";
import ContentTrackingOrder from "../sections/tracking_order/content";
import Footer from "../components/specific/footer";

const TrackingOrder = () => {
  return (
    <div className="px-3 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
      <HeaderTrackingOrder />
      <ContentTrackingOrder />
      {/* <Footer /> */}
    </div>
  );
};

export default TrackingOrder;
