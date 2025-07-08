import { Link } from "react-router-dom";
import paymentsuccesful from "../assets/icons/pages/paymentsuccesful.png";
import React, { useEffect, useState } from "react";



function PaymentStatus() {
  return (
    <div className="flex flex-col items-center gap-[10px] ">
      <img
        src={paymentsuccesful}
        alt="Payment Successful"
        className="block w-[81px] h-[81px] "
      />
      <h1 className="font-mulish font-bold text-[24px] text-textprimary ">
        Payment Successful
      </h1>
      <p className="font-poppins font-normal text-gray text-[14px] ">
        Your payment has been processed successfully.
      </p>
    </div>
  );
}

function PaymentDetails() {
    const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("transactionDetails");
    if (data) {
      setDetails(JSON.parse(data));
    }
  }, []);

  if (!details) {
    return (
      <div className="w-[70%] px-[20px] flex-col flex gap-[11px] ">
        <p className="font-mulish font-semibold text-[20px]">Loading...</p>
      </div>
    );
  }
  return (
    <div className="w-[70%] px-[20px] flex-col flex gap-[11px] ">
      <p className="font-mulish font-semibold text-[20px]  ">Payment Details</p>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          Amount
        </p>
        <p className="font-poppins font-medium text-green text-[16px] ">
          ₦{details.amount}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          reciepient account
        </p>
        <p className="font-poppins font-medium text-textprimary text-[16px] ">
          {details.accountNumber }
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          Date & Time
        </p>
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          {details.date}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          Transaction ID
        </p>
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          {details.transactionId}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          Reference ID
        </p>
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          {details.reference}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          Description
        </p>
        <p className="font-poppins font-normal text-textprimary text-[16px] ">
          {details.description}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <Link to={'/dashboard'} className="w-[40%] h-[45px] flex-col flex items-center rounded-[30px] bg-white border-[1px] border-textred justify-center ">
          <p className="font-mulish font-semibold text-[16px] text-textred ">
            Done
          </p>
        </Link>
        <Link to={'/sendmoney'} className="w-[40%] h-[45px] flex-col flex items-center rounded-[30px] bg-textred justify-center ">
          <p className="font-mulish font-semibold text-[16px] text-white ">
            Send Again
          </p>
        </Link>
      </div>
    </div>
  );
}

function PaymentStatusCard() {
  return (
    <div className="w-screen flex-col flex gap-[10px] items-center ">
      <PaymentStatus />
      <hr className="w-[70%] border-linegray " />
      <PaymentDetails />
    </div>
  );
}

export default PaymentStatusCard;
