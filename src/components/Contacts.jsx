function Contacts(){
    return(
        <div className="flex items-center h-[93px] w-[87%] border-2px border-bordergray radius-[14px] ">
          <div className="flex items-center gap-[18px] w-fit h-fit ">
            <div className="rounded-[50%] w-[51px] h-[51px] bg-textblack flex-col flex items-center justify-center " >
            <p className="font-poppins font-bold text-[20px] text-white ">V</p>
          </div>
          <div className="flex-col flex gap-[3px]">
            <p className="font-poppins font-bold text-textprimary text-[16px] ">Epay Test Account</p>
            <p className="font-poppins font-mediom text-[14px] text-textprimary ">+234 001 002 004 </p>
          </div>
          </div>
        </div>
    )
}


export default Contacts;