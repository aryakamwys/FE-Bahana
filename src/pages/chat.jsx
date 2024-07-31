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
<<<<<<< HEAD
    <div className="h-screen grid grid-rows-[2fr,auto,1fr] px-3 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full ">
      <HeaderChat />
=======
    <div className="h-screen grid grid-rows-[2fr,auto,1fr] max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px] py-2">
      {isLG ? <HeaderChat /> : <NavbarPembeli />}
      <div className="pt-[10px] lg:pt-0 "></div>
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
      <ContentChat />
      <TextKeyboard />
    </div>
  );
};

export default ChatPage;
