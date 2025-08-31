import filter from "../assets/icons/pages/filter.svg";
import incoming from "../assets/icons/pages/incoming.svg";
import outgoing from "../assets/icons/pages/outgoing.svg";

function RecentTransactions() {
  //run map for Transaction card... for here i just repeated but all props are already prepared, except name
  return (
    <div className="w-[89%] flex flex-col gap-[10px] px-[20px] pt-[15px] mt-7 rounded-[20px] pb-[40px] bg-white  ">
      <TransactionHeader />
      <TransactionCard
        transactionStatus={true}
        amount={"+₦5000"}
        bgcolor={"#361DFC"}
        color={"#34C759"}
        description={"completed"}
      />
      <TransactionCard
        transactionStatus={false}
        amount={"-₦5000"}
        bgcolor={"#361DFC"}
        color={"#FE3737"}
        description={"completed"}
      />
      <TransactionCard
        transactionStatus={false}
        amount={"-₦5000"}
        bgcolor={"#FBBC04"}
        color={"#FE3737"}
        description={"pending"}
      />
      <TransactionCard
        transactionStatus={true}
        amount={"+₦5000"}
        bgcolor={"#361DFC"}
        color={"#34C759"}
        description={"completed"}
      />
    </div>
  );
}

function TransactionHeader() {
  return (
    <div className="px-[10px] w-full flex  justify-between items-center h-[46px] ">
      <p className=" font-poppins font-medium text-[14px] min-[1000px]:text-[20px] ">
        Recent Transactions
      </p>
      <div>
        <img className="w-[16px] h-[16px]" src={filter} alt="" />
      </div>
    </div>
  );
}

function TransactionCard({
  transactionStatus,
  amount,
  bgcolor,
  color,
  description,
}) {
  // use map here to repeat transaction card
  return (
    <div className="w-full flex justify-between h-[90px] px-[12px] items-center border border-b border-t-0 border-x-0 border-[#E3E8FF]  ">
      <TransactionDescription transactionStatus={transactionStatus} />
      <AmountCard amount={amount} bgcolor={bgcolor} color={color} description={description} />
    </div>
  );
}

function TransactionState({ status }) {
  return (
    <div className="flex  w-[50px] h-[50px] rounded-[45px] bg-[#F7CE45] justify-center items-center">
      <img
        className="w-[24px] h-[24px] "
        src={status ? incoming : outgoing}
        alt=""
      />
    </div>
  );
}

function TransactionDescription({ transactionStatus }) {
  // Name here on fetching from  API can be replaced
  return (
    <div className="flex gap-2 " >
      <TransactionState status={transactionStatus} />
      <div>
        {transactionStatus ? (
          <div className="flex flex-col gap-2 ">
            <p className="font-poppins font-medium text-[14px] ">
              Money Recieve
            </p>
            <div className="flex flex-col gap-1 ">
              <p className=" font-poppins font-normal text-[#7C7878] text-[12px] ">
                From John Doe
              </p>
              <p className=" font-poppins font-normal text-[#7C7878] text-[12px] ">
                {" "}
                Today 2:30pm
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 ">
            <p className="font-poppins font-medium text-[14px] ">Money Sent</p>
            <div className="flex flex-col gap-1 ">
              <p className=" font-poppins font-normal text-[#7C7878] text-[12px] ">
                From John Doe
              </p>
              <p className=" font-poppins font-normal text-[#7C7878] text-[12px] ">
                {" "}
                Today 2:30pm
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AmountCard({ amount, bgcolor, color, description }) {
  return (
    <div className=" flex flex-col items-end ">
      <p
        style={{
          color: color,
        }}
        className=" font-poppins font-medium text-[14px] "
      >
        {amount}
      </p>
      <p
        style={{ backgroundColor: bgcolor }}
        className="w-[90px] h-[20px] rounded-[20px] flex items-center justify-center text-center font-poppins font-normal text-[12px] text-white  "
      >
        {description}
      </p>
    </div>
  );
}


export default RecentTransactions;