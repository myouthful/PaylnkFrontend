import help from "../assets/icons/pages/help.png";
import logout from "../assets/icons/pages/logout.png";
import security from "../assets/icons/pages/security.png";
import profilecircle from "../assets/icons/pages/profilecircle.png";
import notification from "../assets/icons/pages/notification.png";
import profileimage from "../assets/images/profileimage.png";
import card from "../assets/icons/pages/card.png";

function Card({ image, header, subtext, border, bordercolor }) {
  return (
    <div
      className={` w-[90%] flex items-center h-[68px] ${border} ${bordercolor} `}
    >
      <div className="flex items-center gap-[16px] w-fit h-fit ">
        <img className="w-[28px] h-[28px] block " src={image} alt="icon" />
        <div className="flex flex-col items-start gap-[1px] ">
          <p className="font-poppins font-medium text-textprimary text-[16px] ">
            {header}
          </p>
          <p className="font-poppins font-light text-textgray text-[14px] ">
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className=" w-[90%] px-[4.3%] flex items-center h-[65px] rounded-[14px] border-[2px] border-bordergray ">
      <div className="flex items-center gap-[16px] w-fit h-fit ">
        <img className="w-[28px] h-[28px] block " src={help} alt="icon" />
        <div className="flex flex-col items-start gap-[1px] ">
          <p className="font-poppins font-medium text-textprimary text-[16px] ">
            Help & Support
          </p>
          <p className="font-poppins font-light text-textgray text-[14px] ">
            Get help with Epay App
          </p>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className=" w-[90%] flex items-center justify-center h-[45px] rounded-[30px] bg-white border-[2px] border-textred ">
                    <div className="flex items-center gap-[4px] " >
                        <img className="w-[24px] h-[24px] block " src={logout} alt="icon" />
                        <p className="font-mulish font-medium text-[16px] text-textred ">Log Out</p>
                    </div>
    </div>
  );
}

function Clickables() {
  return (
    <div className="w-[90%] flex flex-col bg-white rounded-[20px] items-center gap-[1px] ">
      <Card
        image={profilecircle}
        header={"Personal information"}
        subtext={"Update your personal information"}
        border={"border-b-[1px]"}
        bordercolor={"border-linegray"}
      />
      <Card
        image={card}
        header={"Bank & Card "}
        subtext={"Manage your payment method "}
        border={"border-b-[1px]"}
        bordercolor={"border-linegray"}
      />
      <Card
        image={security}
        header={"Security"}
        subtext={"Update your security settngs"}
        border={"border-b-[1px]"}
        bordercolor={`border-linegray`}
      />
      <Card
        image={notification}
        header={"Notification"}
        subtext={"Manage your notification preferences"}
      />
    </div>
  );
}

function Settings() {
  return (
    <div className="flex-col flex gap-8 items-center w-screen bg-white mb-20 ">
      <Clickables />
      <Support />
      <Logout />
    </div>
  );
}

export default Settings;
