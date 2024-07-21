import React, { useState } from "react";

import BRIIcon from "../../assets/images/bri.png";
import BCAIcon from "../../assets/images/bca.png";
import MandiriIcon from "../../assets/images/mandiri.png";
import BSIIcon from "../../assets/images/bsi.png";
import BNIIcon from "../../assets/images/bni.png";
import PermataIcon from "../../assets/images/permata.png";

const banks = [
  { name: "Bank BCA", icon: BCAIcon },
  { name: "Bank Mandiri", icon: MandiriIcon },
  { name: "Bank Syariah Indonesia (BSI)", icon: BSIIcon },
  { name: "Bank BRI", icon: BRIIcon },
  { name: "Bank BNI", icon: BNIIcon },
  { name: "Bank Permata", icon: PermataIcon },
];

const BankPayment = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  return (
    <div>
      <div className="flex flex-col w-full">
        {banks.map((bank, index) => (
          <div key={index} className="py-2">
            <div
              className={`border rounded-xl cursor-pointer ${
                selectedBank === bank.name
                  ? "border-4 border-primary "
                  : "border-black"
              }`}
              onClick={() => setSelectedBank(bank.name)}
            >
              <div className="flex flex-row items-center px-5 py-2 ">
                <img src={bank.icon} alt={bank.name} />
                <div style={{ width: 10 }}></div>
                <div
                  className="font-inter font-semibold"
                  style={{
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  {bank.name}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="px-10 py-9">
          <button
            className="bg-primary w-full rounded-xl"
            style={{ fontSize: 20 }}
            onClick={() => (window.location.href = "/pembayaran")}
          >
            <div className="py-3 font-inter font-semibold text-white">
              Selanjutnya
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankPayment;
