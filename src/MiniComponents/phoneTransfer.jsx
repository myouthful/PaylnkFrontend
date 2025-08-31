


function PhoneTransferOption() {
    return(
        <div className="w-[89%] items-start flex flex-col gap-[25px] bg-white px-[20px] py-[20px] rounded-[20px]  ">
          <EnterAmounnt />
          <div className=" flex justify-between w-full ">
            <PreloadedAmount amount={'1000'} />
            <PreloadedAmount amount={'2,000'} />
            <PreloadedAmount amount={'5,0000'} />
            <PreloadedAmount amount={'10,000'} />
          </div>
          < DescriptionField />
        </div>
    )
}



function PreloadedAmount({amount}) {
    return(
        <div className=" w-[80px] h-[34px] flex items-center justify-center rounded-[100px] min-[1000px]:w-[271px] border border-[#FE3737] ">
           <p className="font-mulish font-medium text-[13px] min-[1200px]:text-[16px] ">
             ₦ {amount}
           </p>
        </div>
    )
}


function DescriptionField() {
    return(
       <div className="w-full flex flex-col gap-[4px]">
         <p className="font-poppins font-normal text-[16px] " >Description(Options)</p>
        <input className="w-full px-[12px] h-[45px] font-poppins font-normal text-[14px] border border-[#0E1534] rounded-[30px] " placeholder="Gadgets" type="text" />
       </div>   )
}

function EnterAmounnt() {
    return(
       <div className="w-full flex flex-col gap-[4px]">
         <p className="font-poppins font-normal text-[16px] " >Amount</p>
        <input className="w-full px-[12px] h-[45px] font-poppins font-medium text-[14px] border border-[#0E1534] rounded-[30px] " placeholder="₦ 50,000.000" type="text" />
       </div>   )
}


function Reciepient() {
    return(
        <div className="w-[89%] flex flex-col gap-[6px] px-[15px] py-[35px] rounded-[20px] bg-white ">
         <p className="font-poppins font-medium text-[16px] ">Phone Number</p>
         <p className="font-poppins font-normal text-[16px] " >Recipient Phone Number</p>
        <input className="w-full h-[45px] px-3 font-poppins font-medium text-[14px] border border-[#0E1534] rounded-[30px] " placeholder="08123855131" type="text" />
        <p className="font-poppins font-normal text-[14px] " >Victor Adebayo</p>
        <button className="w-full rounded-[20px] h-[45px] text-center text-white bg-[#FE3737] ">Continue</button>
       </div>
    )
}


export {Reciepient,PhoneTransferOption}