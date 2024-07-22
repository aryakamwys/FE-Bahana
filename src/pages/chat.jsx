import React from "react";
import HeaderChat from "../sections/chat/header";
import ContentChat from "../sections/chat/content_chat";
import TextKeyboard from "../sections/chat/textKey";

const ChatPage = () => {
  return (
    <div
      className="h-screen grid grid-rows-[2fr,auto,1fr] max-w-screen-sm pl-5 pr-5 lg:max-w-full lg:pl-[310px] lg:pr-[315px] "
    >
      <HeaderChat />
      <ContentChat />
      <TextKeyboard />
    </div>
  );
};

export default ChatPage;
