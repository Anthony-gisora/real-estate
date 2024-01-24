import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <div className="flex  items-center justify-between p-[20px] fixed w-full top-0 left-0 backdrop-blur-[4px] bg-[#8b898962] bg-opacity-[0.8] z-[1000] shadow-black">
            <h1 className="text-[30px] text-[#1f151dfb] font-semibold"> <span className="text-[#f71bd2ea] ">Real</span>Estate</h1>
            <div className="md:flex hidden md:w-[30%] w-[50%] md:text-[22px] items-enter justify-evenly">
                <NavLink to='/' className='focus:border-b-[2px] hover:border-b-[2px]'>Home</NavLink>
                <NavLink to='/about' className=' focus:border-b-[2px] hover:border-b-[2px]'>About</NavLink>
                <NavLink to='/contactUs' className=' focus:border-b-[2px] hover:border-b-[2px]'>Contact Us</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
