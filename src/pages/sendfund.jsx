import notification from "../assets/icons/pages/notification.svg";
import arrowleft from "../assets/icons/pages/arrowleft.svg";
import Header from "../components/header";
import AccounDetailsCard2 from "../components/TransferDetailsCard";
import peopleoutline from "../assets/icons/pages/peopleoutline.svg"
import calloutline from "../assets/icons/pages/calloutline.svg";
import { useState,useEffect } from "react";
import peoplewhite from "../assets/icons/pages/peoplewhite.svg"
import callwhite from "../assets/icons/pages/callwhite.svg"
import peopleblack from "../assets/icons/pages/peopleblack.svg"
import qrcode from "../assets/icons/pages/qrcode.png"
import { PhoneTransferOption, Reciepient } from "../MiniComponents/phoneTransfer";



function SendFund() {
  return (
    <div className="flex-col gap-4 min-[1200px]:gap-9 flex overflow-x-hidden pb-[70px] bg-[#F6F9FC] justify-center items-center ">
      <Header />
      <RecentTransacsNotification />
      <AccounDetailsCard2 />
      <Responsive />
      <PhoneTransferOption />
      <Reciepient />
      
    </div>
  );
}


function Responsive() {
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
        
          useEffect(() => {
            function handleResize() {
              setIsDesktop(window.innerWidth >= 1200);
            }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
  return isDesktop ? <TotalMoneyFlowDesktop /> : <TotalMoneyFlowMobile />
}

function RecentTransacsNotification() {
  return (
    <div className=" flex justify-between w-[88%] px-[8px] ">
      <div className=" flex gap-[8px] ">
        <div className="flex justify-center items-center ">
          <img className="w-[24px] h-[24px] " src={arrowleft} alt="" />
        </div>
        <p className="font-poppins font-medium text-[20px] min-[1200px]:text-[20px] ">
          Send Money{" "}
        </p>
      </div>
      <div className="hidden justify-center items-center min-[1200px]:flex ">
        <img className="w-[24px] h-[24px]  " src={notification} alt="" />
      </div>
    </div>
  );
}

function TotalMoneyFlowDesktop() {
    const [buttonState, setbuttonState]= useState(1)
  return (
    <div className="w-[89%] flex justify-between px-[10px] cursor-pointer " >
      <div 
      onClick={()=>{
        setbuttonState(false)
    }} 
       style={{
        backgroundColor:buttonState ? 'white':'#0E1534'

    }}
      className="w-[48%] h-[93px] flex items-center justify-center  border-[2px] border-[#E3E8FF] rounded-[14px] ">
        <div className="flex flex-col gap-1 items-center ">
          <div className="flex items-center justify-center ">
            <img className="w-[30px] h-[30px] " src={buttonState? calloutline: callwhite } alt="" />
          </div>
          <p style={{
            color:buttonState? '#0E1534': 'white'
          }} className="font-poppins text-[14px] font-normal ">Phone</p>
        </div>
      </div>


      <div onClick={()=>{
        setbuttonState(true)
    }} style={{
        backgroundColor:buttonState ? '#0E1534':'white'

    }}
     className="w-[48%] h-[93px] flex cursor-pointer items-center justify-center  border-[2px] border-[#E3E8FF] rounded-[14px] ">
        <div className="flex flex-col gap-1 items-center ">
          <div className="flex items-center justify-center ">
            <img className="w-[30px] h-[30px] " src={buttonState? peoplewhite : peopleblack} alt="" />
          </div>
          <p style={{
            color:buttonState? 'white': '#0E1534'
          }} className="font-poppins text-[14px] font-normal ">Contacts</p>
        </div>
      </div>
    </div>
  );
}

function TotalMoneyFlowMobile() {
  const [buttonState, setbuttonState] = useState(1); // default = Phone

  return (
    <div className="w-[89%] flex justify-between px-[10px]">
      
      {/* Phone */}
      <div 
        onClick={() => setbuttonState(1)}
        style={{
          backgroundColor: buttonState === 1 ? '#0E1534' : 'white'
        }}
        className="w-[30%] h-[93px] flex items-center justify-center border-[2px] border-[#E3E8FF] rounded-[14px]"
      >
        <div className="flex flex-col gap-1 items-center">
          <img
            className="w-[24px] h-[24px]"
            src={buttonState === 1 ? callwhite : calloutline}
            alt=""
          />
          <p
            style={{ color: buttonState === 1 ? 'white' : '#0E1534' }}
            className="font-poppins text-[14px] font-normal"
          >
            Phone
          </p>
        </div>
      </div>

      {/* Contacts */}
      <div 
        onClick={() => setbuttonState(2)}
        style={{
          backgroundColor: buttonState === 2 ? '#0E1534' : 'white'
        }}
        className="w-[30%] h-[93px] flex items-center justify-center border-[2px] border-[#E3E8FF] rounded-[14px]"
      >
        <div className="flex flex-col gap-1 items-center">
          <img
            className="w-[24px] h-[24px]"
            src={buttonState === 2 ? peoplewhite : peopleblack}
            alt=""
          />
          <p
            style={{ color: buttonState === 2 ? 'white' : '#0E1534' }}
            className="font-poppins text-[14px] font-normal"
          >
            Contacts
          </p>
        </div>
      </div>

      {/* QR Code */}
      <div 
        onClick={() => setbuttonState(3)}
        style={{
          backgroundColor: buttonState === 3 ? '#0E1534' : 'white'
        }}
        className="w-[30%] h-[93px] flex items-center justify-center border-[2px] border-[#E3E8FF] rounded-[14px]"
      >
        <div className="flex flex-col gap-1 items-center">
          <img
            className="w-[24px] h-[24px]"
            src={qrcode}
            alt=""
          />
          <p
            style={{ color: buttonState === 3 ? 'white' : '#0E1534' }}
            className="font-poppins text-[14px] font-normal"
          >
            QR Code
          </p>
        </div>
      </div>
    </div>
  );
}



export default SendFund;
