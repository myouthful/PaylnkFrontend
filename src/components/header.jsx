import menu from '../assets/icons/pages/menu.png';
import { LoginButton, SignupButton } from './buttons';
import { Link } from 'react-router-dom';



function Epay(){
    return(
        <p className="font-inter font-semibold text-[20px] min-[1200px]:font-mulish text-textred min-[1200px]:text-[24px] min-[1200px]:font-bold ">
            E-pay
        </p>
    )
}


function NavigationLinks(){
    return(
        <ul className="hidden min-[1200px]:flex gap-10 w-fit h-fit list-none items-center font-poppins font-normal text-[16px] ">
            <Link to={'/'} className='font-poppins cursor-pointer '>Home</Link>
            <li className='font-poppins cursor-pointer '>About</li>
            <li className='font-poppins cursor-pointer '>Contact Us</li>
        </ul>
    )
}

function ClickableButtons() {
    return(
        <div className='hidden min-[1200px]:flex items-center gap-[10px] '>
           <LoginButton />
           <SignupButton />
        </div>
    )
}

function MenuIcon(){
    return(
        <div className=' w-[34px] h-[34px] min-[1200px]:hidden '>
            <img className=' w-[34px] h-[34px]' src={menu} alt="menu icon" />
        </div>
    )
}


function Header() {
    return(
        <nav className='w-screen h-[70px] bg-white flex items-center justify-between px-[7%] min-[1200px]:px-[90px] '>
            <Epay />
            <NavigationLinks />
            <ClickableButtons />
            <MenuIcon />
        </nav>
    )
}


export default Header;