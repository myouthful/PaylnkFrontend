import contacts from "../assets/icons/pages/contacts.png";
import home from "../assets/icons/pages/home.png";
import profile from "../assets/icons/pages/profile.png";
import forward from "../assets/icons/pages/forward.png";
import backward from "../assets/icons/pages/backward.png";
import { Link } from "react-router-dom";

function BottomNavigation() {
  return (
    <nav className="w-screen h-[65px] bg-fadedWhite flex items-center justify-around fixed bottom-0 z-10 border-t-[1px] border-bordergray">
      <HomeIcon />
      <SendMoneyIcon />
      <RecieveMoneyIcon />
      <Contacts />
      <Profile />
    </nav>
  );
}

function HomeIcon() {
  return (
    <Link to={'/dashboard'} className="w-fit h-fit flex-col flex items-center gap-[2px]">
      <img className="block w-[23px] h-[23px]" src={home} alt="home icon" />
      <p className="font-poppins text-textfaded font-medium text-[14px]">
        Home
      </p>
    </Link>
  );
}

function Contacts() {
  return (
    <Link to={'/'} className="w-fit h-fit flex-col flex items-center gap-[2px]">
      <img
        className="block w-[23px] h-[23px]"
        src={contacts}
        alt="contact icon"
      />
      <p className="font-poppins text-textfaded font-medium text-[14px]">
        Contacts
      </p>
    </Link>
  );
}

function Profile() {
  return (
    <Link to={'/profile'} className="hidden min-[1200px]:flex flex-col w-fit h-fit items-center gap-[2px]">
      <img
        className="block w-[23px] h-[23px]"
        src={profile}
        alt="profile icon"
      />
      <p className="font-poppins text-textfaded font-medium text-[14px]">
        Profile
      </p>
    </Link>
  );
}

function SendMoneyIcon() {
  return (
    <Link to={'/sendmoney'} className="w-fit h-fit flex-col flex items-center gap-[2px]">
      <img
        className="block w-[23px] h-[23px]"
        src={forward}
        alt="send money icon"
      />
      <p className="font-poppins text-textfaded font-medium text-[14px]">
        Send
      </p>
    </Link>
  );
}

function RecieveMoneyIcon() {
  return (
    <Link to={'/'} className="w-fit h-fit flex-col flex items-center gap-[2px]">
      <img
        className="block w-[23px] h-[23px]"
        src={backward}
        alt="Recieve money icon"
      />
      <p className="font-poppins text-textfaded font-medium text-[14px]">
        Recieve
      </p>
    </Link>
  );
}


export default BottomNavigation;