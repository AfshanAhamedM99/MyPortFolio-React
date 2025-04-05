import { IoLogoAppleAppstore } from "react-icons/io5";
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="w-full bg-[#2f343a] md:h-auto text-white flex md:items-center md:justify-between md:p-7 md:flex-nowrap flex-wrap h-28 justify-center items-center shadow-md shadow-[#4F1C51] z-[99999] ">
            <h1 className="md:pl-5 text-xl font-semibold flex items-center "><IoLogoAppleAppstore className="animate-bounce " />PortFolio !</h1>
            <ul className="flex md:gap-5 gap-5 md:pr-5 md:p-0 p-2 cursor-pointer md:text-[16px] text-[14px] ">
                <li className="hover:text-violet-600 duration-200 hover:scale-90 hover:rotate-2 " >
                    <Link to='/' >Home </Link>
                </li>
                <li className="hover:text-violet-600 duration-200 hover:scale-90 hover:rotate-6 ">
                <Link to='/skills' >Skills </Link>
                    </li>
                <li className="hover:text-violet-600 duration-200 hover:scale-90 hover:rotate-6  ">
                <Link to='/experience' >Xperience </Link>
                </li>
                <li className="hover:text-violet-600 duration-200 hover:scale-90 hover:rotate-6  ">
                <Link to='/project' >Projects </Link>
                </li>
                <li className="hover:text-violet-600 duration-200 hover:scale-90 hover:rotate-6 ">
                <Link to='/contact' >Contact </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;