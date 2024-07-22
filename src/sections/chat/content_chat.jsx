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
            className="w-5 h-5 lg:w-8 lg:h-8"
            alt="forward"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-2 lg:p-6 text-xs text-start lg:text-xl font-medium font-inter max-w-64 lg:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Montes semper mauris est
            mollis netus amet ultrices. Turpis arcu ut dolor.
          </div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-7 h-7 lg:w-10 lg:h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
      <div className="h-7 lg:h-6"></div>
      <div className="flex flex-row row-auto items-end justify-start">
        <div>
          <img
            src={ProfilePenjual}
            className="w-7 h-7 lg:w-10 lg:h-10"
            alt="profile_pembeli"
          />
        </div>
        <div style={{ width: 20 }}></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="bg-primary w-2 rounded-l-full"></div>
          <div className="p-2 lg:p-6 text-xs text-start lg:text-xl font-medium font-inter max-w-64 lg:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Montes semper mauris est
            mollis netus amet ultrices. Turpis arcu ut dolor.
          </div>
        </div>
        <div className="w-2 lg:w-5"></div>
        <button>
          <img
            src={ForwardIcon}
            className="w-5 h-5 lg:w-8 lg:h-8"
            alt="forward"
          />
        </button>
      </div>
      <div className="h-7 lg:h-6"></div>
      <div className="flex flex-row row-auto items-end justify-end">
        <button>
          <img
            src={ForwardIcon}
            className="w-5 h-5 lg:w-8 lg:h-8"
            alt="forward"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-2 lg:p-6 text-xs text-start lg:text-xl font-medium font-inter max-w-64 lg:max-w-2xl">
            Thank you.
          </div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-7 h-7 lg:w-10 lg:h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentChat;
