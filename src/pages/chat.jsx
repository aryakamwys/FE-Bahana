import React, { useState, useEffect } from "react";
import HeaderChat from "../sections/chat/header";
import ContentChat from "../sections/chat/content_chat";
import TextKeyboard from "../sections/chat/textKey";
import NavbarPembeli from "../components/specific/navbar";

const ChatPage = () => {
  const [isLG, setIsLG] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLG(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen grid grid-rows-[2fr,auto,1fr] max-w-screen-sm pl-5 pr-5 lg:max-w-full lg:pl-[310px] lg:pr-[315px] py-2">
      {isLG ? <HeaderChat /> : <NavbarPembeli />}
      <div className="pt-[10px] lg:pt-0 "></div>
      <ContentChat />
      <TextKeyboard />
    </div>
  );
};

export default ChatPage;
