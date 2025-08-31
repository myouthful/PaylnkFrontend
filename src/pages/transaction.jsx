import Header from "../components/header";
import RecentTransactions from "../components/RecentTransactions";
import notification from "../assets/icons/pages/notification.svg";
import arrowleft from "../assets/icons/pages/arrowleft.svg";
import search from "../assets/icons/pages/search.svg";
import { useState } from "react";

function RecentTrans() {
  return (
    <div className="flex-col gap-4 min-[1200px]:gap-9 flex overflow-x-hidden pb-[70px] bg-[#F6F9FC] justify-center items-center ">
      <Header />
      <RecentTransacsNotification />
      <SearchItem />
      <AllTimeTransaction />
      <TotalMoneyFlow />
      <RecentTransactions />
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

function SearchItem() {
  return (
    <div className="w-[88%] border-[#D8D8D8] flex items-center px-[15px] gap-2 bg-white border h-[39px] rounded-[30px] ">
      <div>
        <img src={search} alt="" />
      </div>
      <input
        className="font-poppins outline-none w-[95%] h-[30px]  text-[#A6A6A6] font-normal text-[13px] "
        type="text"
        placeholder="Search transactions."
      />
    </div>
  );
}

function AllTimeTransaction() {
  const [buttonState, setbuttonState] = useState(1);

  return (
    <div className="flex w-[89%] px-[8px] ">
      <Clickablebuttons
        description={"All"}
        value={buttonState}
        state={1}
        onClick={() => setbuttonState(1)}
      />
      <Clickablebuttons
        description={"Recieved"}
        value={buttonState}
        state={2}
        onClick={() => setbuttonState(2)}
      />
      <Clickablebuttons
        description={"Sent"}
        value={buttonState}
        state={3}
        onClick={() => setbuttonState(3)}
      />
    </div>
  );
}

function Clickablebuttons({ description, state, value, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: value === parseInt(state) ? "#0E1534" : "#F6F9FC",
      }}
      className="w-[104px] h-[45px] flex items-center justify-center rounded-[45px] cursor-pointer"
    >
      <p
        style={{
          color: value === parseInt(state) ? "white" : "#0E1534",
        }}
        className="font-mulish font-semibold text-center"
      >
        {description}
      </p>
    </div>
  );
}

function TotalMoneyFlow() {
  return (
    <div className="w-[89%] flex justify-between px-[10px]   ">
      <div className="w-[45%] h-[120px] flex items-center justify-center bg-white border-[2px] border-[#E3E8FF] rounded-[14px] ">
        <div className="flex flex-col gap-1 items-center " >
            <p className="font-poppins text-[14px] font-normal ">Total in</p>
        <p className="font-poppins text-[18px] font-medium ">+₦175,000</p>
        </div>
      </div>
      <div className="w-[45%] h-[120px] flex items-center justify-center bg-white border-[2px] border-[#E3E8FF] rounded-[14px] ">
       <div className="flex flex-col gap-1 items-center ">
         <p className="font-poppins text-[14px] font-normal ">Total out</p>
        <p className="font-poppins text-[18px] font-medium ">-₦75,000</p>
       </div>
      </div>
    </div>
  );
}

export default RecentTrans;
