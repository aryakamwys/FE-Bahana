import React from "react";
import HeaderChat from "../sections/chat/header";
import ContentChat from "../sections/chat/content_chat";
import TextKeyboard from "../sections/chat/textKey";

const ChatPage = () => {
  return (
    <div className="h-screen grid grid-rows-[2fr,auto,1fr] px-3 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full ">
      <HeaderChat />
      <ContentChat />
      <TextKeyboard />
    </div>
  );
};

export default ChatPage;
