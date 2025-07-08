import eye from "../assets/icons/pages/eye.png";
import copy from "../assets/icons/pages/copy.png";
import share from "../assets/icons/pages/share.png";
import profileimage from "../assets/images/profileimage.png"

import { useState,useEffect } from "react";

function ProfileCard() {
  //fetch user details like name, acccount balance, account number
  // pass them as props to Welcomeback,AccountBalance,AccountNumber component
  return (
    <div className="w-[89%] py-5 bg-cardsm pl-[25px] flex-col flex gap-[10px]  min-[1200px]:bg-cardlg bg-center bg-cover rounded-[20px] ">
      <Welcomeback />
     
    </div>
  );
}

function Welcomeback() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      setUserName(`${userDetails.firstName} ${userDetails.lastName}`);
    }
  }, []);
  return (
    <div className="w-fit h-fit flex items-center gap-[10px] ">
        <div className="w-[100px] h-[100px] ">
            <img className="w-[100px] h-[100px] " src={profileimage} alt="profileimage" />
        </div>
     <div className="flex-col flex gap-3 ">
         <p className="font-poppins font-medium text-white text-[14px] ">
        Welcome Back!
      </p>
      <p className="font-mulish font-semibold text-white text-[18px] ">
       {userName}
      </p>
     </div>
    </div>
  );
}




export default ProfileCard;

