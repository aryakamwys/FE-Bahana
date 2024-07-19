import React from "react";
import HeaderChat from "../sections/chat/header";
import ContentChat from "../sections/chat/content_chat";
import TextKeyboard from "../sections/chat/textKey";

const ChatPage = () => {
  return (
    <div
      className="h-screen grid grid-rows-[2fr,auto,1fr]"
      style={{ paddingLeft: 310, paddingRight: 310 }}
    >
      <HeaderChat />
      <ContentChat />
      <TextKeyboard />
    </div>
  );
};

export default ChatPage;
