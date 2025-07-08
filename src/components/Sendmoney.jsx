import React, { useEffect, useState } from "react";
import axios from "axios";

function SendMoney() {
  return (
    <div className="flex-col flex items-center gap-[18px] rounded-[20px] bg-White  w-screen  ">
      <SendersProfile />
      <Amount />
      <Description />
      <Submit />
    </div>
  );
}

function SendersProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accountNumber = localStorage.getItem("accountNumber");
        if (!accountNumber) {
          throw new Error("Account number not found");
        }

        const response = await axios.post("http://localhost:5000/api/user/profile", {
          accountNumber
        });

        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="w-fit h-fit pt-[15px] px-[12px] rounded-[10px] bg-white">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-fit h-fit pt-[15px] px-[12px] rounded-[10px] bg-white text-[#FE3737]">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-fit h-fit pt-[15px] px-[12px] rounded-[10px] bg-white">
      {userData && (
        <div className="flex flex-col gap-[15px]">
          <p className="font-mulish text-textprimary">
            Name: {userData.username}
          </p>
          <p className="font-mulish text-textprimary">
            Phone: {userData.phone}
          </p>
        </div>
      )}
    </div>
  );
}

function Amount() {
  return (
    <div className="w-[80%] flex-col flex gap-[10px] ">
      <p className="font-poppins font-semibold text-[14px] text-textblack ">
        Amount
      </p>
      <input
        className="w-[80%] border-[1px] rounded-[30px] border-gray outline-none "
        placeholder="0"
        type="tel"
        name=""
        id=""
      />
    </div>
  );
}

function Description() {
  return (
    <div className="w-[80%] flex-col flex gap-[10px] ">
      <p className="font-poppins font-semibold text-[14px] text-textblack ">
        Description(Optional)
      </p>
      <input
        className="w-[80%] border-[1px] rounded-[30px] border-gray outline-none "
        placeholder="what's this for? "
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

function Submit() {
  return (
    <div className="w-[80%] rounded-[30px] bg-textred flex items-center justify-center font-poppins ">
      <p className="font-mulish font-semibold text-[16px] text-white  ">
        Submit
      </p>
    </div>
  );
}

export default SendMoney;
