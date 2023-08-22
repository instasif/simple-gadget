import { useState } from "react";
import { Link } from "react-router-dom"; 
import { BiPhoneCall } from 'react-icons/bi';
import UpNav from "./UpNav";
import logo from "../../assets/images/logo00.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = <>
  <Link to={"/"} className=" text-white font-bold text-base hover:text-gray-500 md:mx-2">Home</Link>
  <Link to={"/"} className=" text-white font-bold text-base hover:text-gray-500 md:mx-2">About</Link>
  <Link to={"/"} className=" text-white font-bold text-base hover:text-gray-500 md:mx-2">Products</Link>
  <Link to={"/"} className=" text-white font-bold text-base hover:text-gray-500 md:mx-2">Blogs</Link>
  <Link to={"/"} className=" text-white font-bold text-base hover:text-gray-500 md:mx-2">Contact</Link>
  </>
    return (
        <>
        <UpNav />
        <nav className="relative md:h-20  bg-gray-950 shadow ">
      <div className="container px-6 py-3 mx-auto md:flex ">
        <div className="flex items-center justify-between">
        <Link to="#">
                    <img className="w-auto h-[120px] lg:h-[150px] lg:mt-[-40px]" src={logo} alt=""/>
                </Link>

          <div className="flex lg:hidden">
            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full h-[200px] md:h-[65px] lg:h-[65px] px-6 py-4 transition-all duration-300 ease-in-out bg-gray-950 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
          <div className="flex flex-col items-center px-2 -mx-4 md:flex-row md:gap-10 md:mx-10 md:py-0">
            {items}
          </div>

          <div className="relative mt-4 md:mt-0">
          <div className="flex justify-center md:justify-start py-3 pl-10 pr-20 gap-2 items-center cursor-pointer">
                <BiPhoneCall className="text-yellow-400 w-10 h-8 hover:text-white"/>
                <p className="text-white text-lg font-semibold">+880 1770042330</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
        </>
    );
};

export default Navbar;