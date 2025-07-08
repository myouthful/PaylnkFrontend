import send from "../assets/icons/pages/send.png";
import recieve from "../assets/icons/pages/recieve.png";
import users from "../assets/icons/pages/users.png";
import { Link } from "react-router-dom";

function QuickAction() {
  return (
    <div className="w-screen  mt-[40px] mb-[100px] bg-fadedWhite flex-col items-center flex gap-[20px]  ">
      <p className="font-mulish self-start pl-[6%] mt-[20px] font-bold text-[24px] text-textblack ">
        Quick Actions
      </p>
      <div className="w-screen items-center flex-col flex gap-[18px] ">
        <SendMoney />
        <RecieveMoney />
        <EpayUsers />
      </div>
    </div>
  );
}

function SendMoney() {
  return (
    <Link
      className="w-[88%] rounded-[14px] border-[2px] border-bordergray bg-white flex gap-[18px] items-center pl-[25px] h-[93px] "
      to="/sendmoney"
    >
      <img
        className="block w-[24px] h-[24px]  "
        src={send}
        alt="send money icon"
      />
      <div className="flex flex-col gap-1 w-fit h-fit  ">
        <p className="font-poppins font-medium text-[16px] ">Send Money </p>
        <p>Transfer to your contacts </p>
      </div>
    </Link>
  );
}

function RecieveMoney() {
  return (
    <div className="w-[88%] rounded-[14px] border-[2px] border-bordergray bg-white flex gap-[18px] items-center pl-[25px] h-[93px] ">
      <img
        className="block w-[24px] h-[24px]  "
        src={recieve}
        alt="recieve money icon"
      />
      <div className="flex flex-col gap-1 w-fit h-fit  ">
        <p className="font-poppins font-medium text-[16px] ">Recieve Money </p>
        <p>Share your payment details </p>
      </div>
    </div>
  );
}

function EpayUsers() {
  return (
    <div className="w-[88%] rounded-[14px] border-[2px] border-bordergray bg-white flex gap-[18px] items-center pl-[25px] h-[93px] ">
      <img
        className="block w-[24px] h-[24px]  "
        src={users}
        alt="send money to E-pay user icon"
      />
      <div className="flex flex-col gap-1 w-fit h-fit  ">
        <p className="font-poppins font-medium text-[16px] ">E-pay Users </p>
        <p>See who's on E-pay from your contacts </p>
      </div>
    </div>
  );
}

export default QuickAction;
