function RecentTransaction() {
  return (
    <div className="w-screen pl-[25px] bg-fadedWhite flex-col flex gap-[38px] ">
      <p className="font-mulish font-bold text-textblack text-[24px] ">Recent Transaction</p>
      <div>
        <TransactionCardFirst />
        <TransactionCardRepeated />
        <TransactionCardLast />
      </div>
    </div>
  );
}

function TransactionCardFirst() {
  return (
    <div className="w-[80%] rounded-t-[14px] border-[2px] border-bordergray bg-white flex justify-between items-center px-[25px] h-[93px] ">
      <div className="flex-col flex gap-[2px] w-fit h-fit ">
        <p className="font-poppins font-bold text-[14px] text-textprimary ">
          Jason Smith
        </p>
        <p className="font-poppins font-normal text-[14px] text-textgray ">
          5/06/2025{" "}
        </p>
      </div>
      <div>
        <p className="text-textred font-poppins font-semibold text-[14px] ">
          ₦5000
        </p>
        <p className="font-poppins text-[14px] font-thin ">completed</p>
      </div>
    </div>
  );
}

function TransactionCardRepeated() {
  return (
    <div className="w-[80%] border-[2px] border-bordergray bg-white flex justify-between items-center px-[25px] h-[93px] ">
      <div className="flex-col flex gap-[2px] w-fit h-fit ">
        <p className="font-poppins font-bold text-[14px] text-textprimary ">
          Jason Smith
        </p>
        <p className="font-poppins font-normal text-[14px] text-textgray ">
          5/06/2025{" "}
        </p>
      </div>
      <div>
        <p className="text-textred font-poppins font-semibold text-[14px] ">
          ₦5000
        </p>
        <p className="font-poppins text-[14px] font-thin ">completed</p>
      </div>
    </div>
  );
}

function TransactionCardLast() {
  return (
    <div className="w-[80%] rounded-b-[14px] border-[2px] border-bordergray bg-white flex justify-between items-center px-[25px] h-[93px] ">
      <div className="flex-col flex gap-[2px] w-fit h-fit ">
        <p className="font-poppins font-bold text-[14px] text-textprimary ">
          Jason Smith
        </p>
        <p className="font-poppins font-normal text-[14px] text-textgray ">
          5/06/2025{" "}
        </p>
      </div>
      <div>
        <p className="text-textred font-poppins font-semibold text-[14px] ">
          ₦5000
        </p>
        <p className="font-poppins text-[14px] font-thin ">completed</p>
      </div>
    </div>
  );
}


export default RecentTransaction;