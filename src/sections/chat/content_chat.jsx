import React from "react";

import ForwardIcon from "../../assets/images/forward.svg";
import ProfilePembeli from "../../assets/images/profile_chat_pembeli.png";
import ProfilePenjual from "../../assets/images/profile_chat.png";

const ContentChat = () => {
  return (
    <div>
      <div className="flex flex-row row-auto items-end justify-end">
        <button>
          <img
            src={ForwardIcon}
            style={{ width: 30, height: 30 }}
            alt="forward"
          />
        </button>
        <div style={{ width: 20 }}></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-6">
            Lorem ipsum dolor sit amet consectetur. Montes semper mauris est
            mollis netus amet ultrices. Turpis arcu ut dolor.
          </div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-10 h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
      <div style={{ height: 22 }}></div>
      <div className="flex flex-row row-auto items-end justify-start">
        <div>
          <img
            src={ProfilePenjual}
            className="w-10 h-10"
            alt="profile_pembeli"
          />
        </div>
        <div style={{ width: 20 }}></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="bg-primary w-2 rounded-l-full"></div>
          <div className="p-6">
            Lorem ipsum dolor sit amet consectetur. Montes semper mauris est
            mollis netus amet ultrices. Turpis arcu ut dolor.
          </div>
        </div>
        <div style={{ width: 20 }}></div>
        <button>
          <img
            src={ForwardIcon}
            style={{ width: 30, height: 30 }}
            alt="forward"
          />
        </button>
      </div>
      <div style={{ height: 22 }}></div>
      <div className="flex flex-row row-auto items-end justify-end">
        <button>
          <img
            src={ForwardIcon}
            style={{ width: 30, height: 30 }}
            alt="forward"
          />
        </button>
        <div style={{ width: 20 }}></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-6">Thank you.</div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-10 h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentChat;
