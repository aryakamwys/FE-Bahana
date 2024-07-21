import React, { useState } from "react";

import QRIS from "../../assets/images/qris.svg";
import BankIcon from "../../assets/images/bank.svg";
import QRISPayment from "./qris";
import BankPayment from "./bank";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div className="px-10 py-14" style={{ width: 650 }}>
      <div className="flex flex-col">
        <div
          className="font-inter font-semibold text-black flex items-start"
          style={{ fontSize: 35 }}
        >
          Payment Method
        </div>
        <div className="flex flex-row justify-evenly mt-6">
          <button
            className={`flex flex-col justify-center  border rounded-xl pl-5 py-4 cursor-pointer ${
              selectedPayment === "QRIS" ? "border-black" : "border-gray"
            }`}
            style={{ width: 217, height: 114 }}
            onClick={() => setSelectedPayment("QRIS")}
          >
            <img src={QRIS} alt="qris" className="mb-2" />
            <div
              className={`font-inter font-semibold ${
                selectedPayment === "QRIS" ? "text-black" : "text-gray"
              }`}
              style={{ fontSize: 20 }}
            >
              QRIS
            </div>
          </button>
          <button
            className={`flex flex-col justify-center border rounded-xl pl-5 py-4 cursor-pointer ${
              selectedPayment === "Bank" ? "border-black" : "border-gray"
            }`}
            style={{ width: 217, height: 114 }}
            onClick={() => setSelectedPayment("Bank")}
          >
            <img src={BankIcon} alt="bank" className="mb-2" />
            <div
              className={`font-inter font-semibold ${
                selectedPayment === "Bank" ? "text-black" : "text-gray"
              }`}
              style={{ fontSize: 20 }}
            >
              Transfer Bank
            </div>
          </button>
        </div>
        <div className="mt-10">
          {selectedPayment === "QRIS" && <QRISPayment />}
          {selectedPayment === "Bank" && <BankPayment />}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
