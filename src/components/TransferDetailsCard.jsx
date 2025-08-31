import eye from "../assets/icons/pages/eye.png";
import copy from "../assets/icons/pages/copy.png";
import share from "../assets/icons/pages/share.png";
import axios from 'axios';

import { useState,useEffect } from "react";

function AccounDetailsCard2() {
  //fetch user details like name, acccount balance, account number
  // pass them as props to Welcomeback,AccountBalance,AccountNumber component
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  
    useEffect(() => {
      function handleResize() {
        setIsDesktop(window.innerWidth >= 1200);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isDesktop ? <DesktopView /> : <MobileView />;
  // return (
  //   <div className="w-[89%] min-[1200px]:h-[240px] py-5 bg-cardsm pl-[25px] flex-col flex gap-[10px]  min-[1200px]:bg-cardlg bg-center bg-cover rounded-[20px] ">
  //     <Welcomeback />
  //     <div className="flex gap-[51px] items-start min-[1200px]:flex-col min-[1200px]:gap-[10px] min-[1200px]:items-start ">
  //       <AccountBalance />
  //       <AccountNumber />
  //     </div>
  //   </div>
  // );
}


function MobileView() {
  return(
    <div className="flex flex-col bg-cardsm w-[89%] px-[19px] py-5 pl-[25px] bg gap-[44px] bg-center bg-cover rounded-[20px] ">
      <div className="flex justify-between ">
        <Welcomeback />
        <TransactionHistory />
      </div>
      <div className="flex justify-between">
       <AccountBalance />
       <AccountNumber />
      </div>
    </div>
  )
}

function DesktopView() {
  return(
    <div className="px-[25px] py-[35px]  h-[280px] gap-[30px] w-[88%] flex flex-col bg-cardlg bg-center bg-cover rounded-[20px] ">
     {/* <Welcomeback /> */}
     <AccountBalance />
     <div className="flex justify-between items-start">
      <AccountNumber />
      <TransactionHistory />
     </div>
    </div>
  )
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
    <div className="w-fit h-fit flex-col flex items-start min-[1200px]:items-center gap-[2px] min-[1000px]:self-center ">
      <p className="font-poppins font-medium text-white text-[14px]  ">
        Welcome Back!
      </p>
      <p className="font-mulish font-semibold text-white min-[300px]:text-[16px] min-[355px]:text-[18px] min-[1000px]:text-[20px] ">
       {userName? userName : 'Alex Thompson'}
      </p>
    </div>
  );
}

function AccountBalance() {
  const [Visibility, setVisibility] = useState(false);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = JSON.parse(localStorage.getItem('userDetails'));
        const accountNumber = data?.accountNumber;
        
        if (!accountNumber) {
          throw new Error("Account number not found");
        }
             
        console.log(accountNumber)

        const response = await axios.post("http://localhost:5000/api/lookup", {
          accountNumber
        });

        console.log(response)

        if (!response.data) {
          throw new Error("No balance data received");
        }

        setBalance(response.data.balance);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="w-fit h-fit flex-col flex items-start gap-[4px] ">
      <p className="font-poppins font-normal text-[14px] text-white ">
        Balance
      </p>
      <div className="flex gap-[7px] items-center w-fit h-fit ">
        {Visibility ? (
          <p className="font-poppins text-white h-[20px] font-semibold text-[14px] w-fit ">
            ₦{" "}{balance}
          </p>
        ) : (
          <p className="font-poppins font-semibold h-[20px] text-white text-[14px] w-fit ">
            ₦{' '}******
          </p>
        )}
        <img
          className="w-[20px] h-[20px] block "
          onClick={() => {
            setVisibility((prev) => !prev);
          }}
          src={eye}
          alt="hide or unhide account balance icon"
        />
      </div>
    </div>
  );
}

function AccountNumber() {
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      setAccountNumber(`${userDetails.accountNumber} `);
    }
  }, []);
  return (
    <div className="w-fit h-fit flex-col flex items-start gap-[4px] ">
      <div className="flex gap-2 w-fit">
        <p className="font-poppins font-normal text-[13px] text-white ">
        Bank Account
      </p>
       <p className="font-poppins text-white font-normal text-[13px] w-fit min-[1200px]:hidden ">
        E-Pay
      </p>
      </div>
      <div className="flex gap-[7px] items-center w-fit h-fit ">
        <p className="font-poppins text-white font-semibold text-[14px] w-fit ">
          {accountNumber? accountNumber: '*****566789' }
        </p>
        <img
          className="w-[24px] h-[24px] block "
          src={copy}
          alt="copy icon to copy account number"
        />
        <img
          className="w-[20px] h-[20px] block "
          src={share}
          alt="share icon to share account number"
        />
      </div>
      <p className="hidden font-poppins text-white font-normal text-[13px] w-fit min-[1200px]:block ">
        E-Pay
      </p>
    </div>
  );
}


function TransactionHistory() {
  return(

      <p className="font-poppins text-white font-normal min-[300px]:text-[13px] text-[14px] ">Transaction History</p>
 
  )
}


export default AccounDetailsCard2;

