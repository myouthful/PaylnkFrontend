import circumbank from '../assets/icons/pages/circumbank.svg'
import moneybagoutline from '../assets/icons/pages/moneybagoutline.svg'
import peopleoutline from '../assets/icons/pages/peopleoutline.png'
import phonelight from '../assets/icons/pages/phonelight.svg'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function PaymentAndTransfer(){
      const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
      
        useEffect(() => {
          function handleResize() {
            setIsDesktop(window.innerWidth >= 1200);
          }
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);

    return isDesktop? <DesktopView/> : <MobileView />
}


function DesktopView() {
    return(
         <div className=' bg-white rounded-[20px] pt-5 px-5 pb-4 flex flex-col w-[88%] h-[220px] mt-7 items-start gap-[44px]'>
            <p className='font-poppins font-medium text-[16px] min-[1000px]:text-[20px] '>Payments & Transfers</p>
            <div className="flex justify-around self-center w-full">
                <Link to="/sendfunds">
                  <Options bgcolor={'#FFE281'} text={'Send Money'} img={moneybagoutline} />
                </Link>
                <Link to="/recievefund">
                  <Options bgcolor={'#D3FFDE'} text={'Receive Money'} img={phonelight} />
                </Link>
                <Link to="/">
                  <Options bgcolor={'#E0E4FF'} text={'Epay Users'} img={peopleoutline} />
                </Link>
                <Link to="/">
                  <Options bgcolor={'#FFCFCF'} text={'Link Bank'} img={circumbank} />
                </Link>
            </div>
        </div>
    )
}


function MobileView() {
    return(
         <div className='bg-[#F6F9FC] rounded-[20px] pt-5 px-5 pb-4 flex flex-col w-[88%] h-[170px] mt-5 items-start gap-[30px]'>
            <p className='font-poppins font-medium text-[16px] min-[1000px]:text-[20px] '>Payments & Transfers</p>
            <div className="flex justify-around self-center w-full">
                <Link to="/sendfunds">
                  <Options2 bgcolor={'#FFE281'} text={'Send Money'} img={moneybagoutline} />
                </Link>
                <Link to="/recievefunds">
                  <Options2 bgcolor={'#D3FFDE'} text={'Receive Money'} img={phonelight} />
                </Link>
                <Link to="/">
                  <Options2 bgcolor={'#E0E4FF'} text={'Epay Users'} img={peopleoutline} />
                </Link>
                <Link to="/">
                  <Options2 bgcolor={'#FFCFCF'} text={'Link Bank'} img={circumbank} />
                </Link>
            </div>
        </div>
    )
}

function Options({ bgcolor, text, img }) {
    return (
       <div className='flex flex-col items-center gap-[5px]'>
         <div 
           className="flex w-[64px] h-[64px] min-[1000px]:w-[90px] min-[1000px]:h-[90px] rounded-[45px] justify-center items-center"
           style={{ backgroundColor: bgcolor }}
         >
           <img className='w-[30px] h-[30px] ' src={img} alt="" />
        </div>
        <p className='font-poppins font-normal text-textsecondary text-[13px]'>
            {text}
        </p>
       </div>
    )
}


function Options2({ bgcolor, text, img }) {
    return(
        <div className='flex flex-col items-center gap-[5px]'>
         <div 
           className="flex w-[50px] h-[50px]  rounded-[45px] justify-center items-center"
           style={{ backgroundColor: bgcolor }}
         >
           <img className='w-[20px] h-[20px] ' src={img} alt="" />
        </div>
        <p className='font-poppins font-normal text-textsecondary text-center w-[50px] text-[11px]'>
            {text}
        </p>
       </div>
    )
}

export default PaymentAndTransfer;
