import { Link } from 'react-router-dom';

function GetStartedButton() {
  return (
    <Link to="/signup">
        <button className="cursor-pointer bg-textred w-[202px] font-mulish font-semibold text-[16px] rounded-[30px] h-[45px] flex flex-col items-center justify-center ">
      Get Started Now
    </button>
    </Link>
    
  );
}


function LoginButton(){
    return(
        <Link to="/signin">
        <div className="border-solid cursor-pointer border-textred bg-white px-[8px] flex-col flex h-[35px] items-center justify-center rounded-[30px] ">
            <p className="font-mulish text-textred font-semibold text-[16px]">Login</p>
        </div>
        </Link>
    )
}


function SignupButton(){
    return(
        <Link to="/signup">
             <div className=" cursor-pointer bg-textred flex-col h-[35px] px-[8px] flex items-center justify-center rounded-[30px] ">
            <p className="font-mulish font-semibold text-white text-[16px]">Sign Up</p>
        </div>
        </Link>
       
    )
}


export{
    LoginButton,
    SignupButton,
    GetStartedButton
}