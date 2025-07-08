import appstoredownload from "../assets/images/appstoredownload.png";
import googleplaydownload from "../assets/images/googleplaydownload.png";

function ControlYourFinance(params) {
  return (
    <div className="flex flex-col gap-[30px] min-[1200px]:gap-[20px] items-center min-[1200px]:items-start ">
      <p
        className={`font-mulish min-[1200px]:font-poppins 
        font-bold min-[1200px]:font-semibold 
        text-[26px] min-[1200px]:text-[48px] w-[401px] min-[1200px]:w-[595px] `}
      >
        Reay to Take Control of Your Finances?
      </p>
      <p className="font-poppins font-normal text-[16px] text-white w-[380px] min-[450px]:w-[401px] min-[1200px]:w-[595px] ">
        Join over 500,000 users who have transformed their financial lives with
        E-Pay. Download the app today and experience banking reimagined.
      </p>
      <div className="flex w-fit h-fit items-center justify-center gap-[14px] ">
        <div className="w-[120px] h-[40px] ">
          <img
            src={googleplaydownload}
            alt="download mobile app from the googleplay store for android users icon"
          />
        </div>
        <div className="w-[120px] h-[40px] ">
          <img
            src={appstoredownload}
            alt="download mobile app from the app store for IOS users icon"
          />
        </div>
      </div>
    </div>
  );
}



