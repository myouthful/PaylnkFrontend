import Header from "../components/header";
import bigqr from "../assets/icons/pages/bigqr.svg";
import share from "../assets/icons/pages/share.svg";
import save from "../assets/icons/pages/save.svg";
import arrowleft from "../assets/icons/pages/arrowleft.svg";
import notification from "../assets/icons/pages/notification.svg";
import check from "../assets/icons/pages/check.svg";

function RecieveFunds() {
  return (
    <div className="flex-col gap-5 flex overflow-x-hidden pb-[70px] bg-[#F6F9FC] justify-center items-center ">
      <Header />
      <RecentTransacsNotification />
      <div className="flex flex-col gap-[20px] w-[89%] items-center ">
        <DescriptionField />
        <QRpart />
      </div>
      <WalletInformation />
      <Instruction />
    </div>
  );
}

function RecentTransacsNotification() {
  return (
    <div className=" flex justify-between w-[88%] ">
      <div className=" flex gap-[8px] ">
        <div className="flex justify-center items-center ">
          <img className="w-[24px] h-[24px] " src={arrowleft} alt="" />
        </div>
        <p className="font-poppins font-medium text-[20px] min-[1200px]:text-[20px] ">
          Transaction History{" "}
        </p>
      </div>
      <div className="hidden justify-center items-center min-[1200px]:flex ">
        <img className="w-[24px] h-[24px]  " src={notification} alt="" />
      </div>
    </div>
  );
}

function DescriptionField() {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      <p className="font-poppins font-normal text-[16px] ">
        Request Specific Amount(optional)
      </p>
      <input
        className="w-full px-[12px] h-[38px] font-poppins font-normal text-[14px] border border-[#0E1534] rounded-[30px] "
        placeholder=" ₦0.00"
        type="text"
      />
    </div>
  );
}

function QRpart() {
  return (
    <div className="flex flex-col items-center rounded-[20px] gap-[14px] bg-white w-full px-[12px] py-[29px] ">
      <p className="font-poppins font-normal text-[14px] ">
        Leave empty to allow sender to enter amount
      </p>
      <p className="font-poppins font-medium text-[14px] ">Your QR Code</p>
      <img className="w-[109px] h-[109px] " src={bigqr} alt="" />
      <div className="w-[89%] cursor-pointer  flex justify-between items-center gap-2 px-[12px] ">
        <div className="w-[54%] h-[32px] rounded-[10px] border-[#FE3737] border flex items-center gap-[4px] justify-center ">
          <img src={save} alt="" />
          <p className="font-poppins font-normal text-[14px] text-[#FE3737] ">
            Save
          </p>
        </div>
        <div className="w-[54%] h-[32px] cursor-pointer rounded-[10px] border-[#FE3737] border flex items-center gap-[4px] justify-center ">
          <img src={share} alt="" />
          <p className="font-poppins font-normal text-[14px] text-[#FE3737] ">
            Share
          </p>
        </div>
      </div>
    </div>
  );
}

function WalletInformation() {
  return (
    <div className="w-[89%] flex flex-col gap-3 px-[12px] py-[20px] rounded-[20px] ">
      <p>Wallet Information</p>
      <EnterAmounnt />
      <EnterAmounnt2 />
    </div>
  );
}

function EnterAmounnt() {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      <p className="font-poppins font-normal text-[16px] ">Phone Number</p>
      <input
        className="w-full px-[12px] h-[45px] font-poppins font-medium text-[14px] border border-[#0E1534] rounded-[30px] "
        placeholder="+234 801 234 5678"
        type="text"
      />
    </div>
  );
}

function EnterAmounnt2() {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      <p className="font-poppins font-normal text-[16px] ">Account Number</p>
      <input
        className="w-full px-[12px] h-[45px] font-poppins font-medium text-[14px] border border-[#0E1534] rounded-[30px] "
        placeholder="2034567890"
        type="text"
      />
    </div>
  );
}

function Instruction() {
  return (
    <div className="w-[89%] px-[12px] flex flex-col gap-[5px] ">
      <div className="bg-[#FFE797] flex flex-col w-full rounded-[10px] px-[15px] py-[25px] ">
         <p className="fomt-poppins font-medium text-[14px] text-[#0E1534] ">
        {" "}
        How to Recieve Money
      </p>
        <div className=" flex gap-[5px]">
          <div className="flex items-center justify-center ">
            <img src={check} alt="" />
          </div>
          <p className="font-poppins font-normal text-[#1E1E1E] text-[12px] ">
            Share you QR code or wallet information
          </p>
        </div>
        <div className=" flex gap-[5px]">
          <div className="flex items-center justify-center ">
            <img src={check} alt="" />
          </div>
          <p className="font-poppins font-normal text-[#1E1E1E] text-[12px] ">
            Ask sender to scan QR code or enter your details
          </p>
        </div>
        <div className=" flex gap-[5px]">
          <div className="flex items-center justify-center ">
            <img src={check} alt="" />
          </div>
          <p className="font-poppins font-normal text-[#1E1E1E] text-[12px] ">
            you'll recieve a notification when money arrives
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecieveFunds;
