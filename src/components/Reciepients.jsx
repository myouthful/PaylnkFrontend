import Contacts from "./Contacts";

function Recipent() {
  return (
    <div className="flex-col flex items-center gap-[38px]  w-screen  ">
      {/* <div className="w-[88%] h-fit flex items-center justify-between ">
        <p className="font-mulish font-bold text-[20px] text-textprimary ">
          Select a Recipient
        </p>
        <p className="font-mulish font-bold text-[16px] text-electricIndigo ">
          See more
        </p>
      </div> */}
      <div className=" w-screen flex-col flex items-center gap-[18px] ">
        <Contacts />
      </div>
    </div>
  );
}



export default Recipent;
