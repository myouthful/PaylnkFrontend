function PaymentOverlay(){
    return(
        <div className="flex-col flex items-center gap-[18px] rounded-[20px] bg-White  w-screen  ">
            <p className="font-mulish font-bold text-[24px] text-textblack ">Enter your Payment Pin</p>
            <Pin />
            <Submit />
        </div>
    )
}

function Pin() {
  return (
    <div className="w-[80%] flex-col flex gap-[10px] ">
      <p className="font-poppins font-semibold text-[14px] text-textblack ">
        Pin
      </p>
      <input
        className="w-[80%] border-[1px] rounded-[30px] border-gray outline-none "
        placeholder="Enter your payment pin"
        type="password"
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
        Verify and Pay
      </p>
    </div>
  );
}



export default PaymentOverlay;