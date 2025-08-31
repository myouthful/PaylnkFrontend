import scan from "../assets/icons/pages/scan.svg";

function ScanPage() {
    return(
        <div className="flex flex-col gap-4  bg-black h-screen items-center " >
            <p className="mt-[70px] font-poppins font-medium text-[16px] text-white ">Send Money</p>
            <div>
                <img className="w-[346px] h-[372px] " src={scan} alt="" />
            </div> 
            <div className=" flex items-center justify-center  rounded-[100px] bg-[#FE3737] w-[261px] h-[54px] ">
                <p className="font-poppins font-normal text-[14px] text-white ">Scan QR Code</p>
            </div>
        </div>
    )
}



export default ScanPage;