

import { useState } from "react";
import Logo from "../assets/images.png";
import { FaBars , FaTimes} from "react-icons/fa";
import { FaHome, FaUserAlt, FaPhoneAlt,FaSkiingNordic  } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // const toggleState = () => {
  //   setToggle(!toggle);
  // };

  const toggleClose = () => {
    setToggle("didden");
  };

  return (
    <main className="bg-gray-900  fixed top-0 left-0 w-full z-10">
      <header className="flex h-20 items-center justify-between w-[90%] md:w-[95%]">
        {/* Logo Section */}
        <img
          className="text-red-800 bg-amber-50 rounded-full shadow-neon ml-7 w-[50px] h-[50px]"
          src={Logo}
          alt="logo"
        />
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="flex items-center text-white hover:text-amber-700 py-3 px-5 rounded-md transition-all duration-700 ease-in-out hover:bg-white"
            >
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center text-white hover:text-amber-700 py-3 px-5 rounded-md transition-all duration-700 ease-in-out hover:bg-white"
            >
              <FaUserAlt className="mr-2" /> About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex items-center text-white hover:text-amber-700 py-3 px-5 rounded-md transition-all duration-700 ease-in-out hover:bg-white"
            >
               Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center text-white hover:text-amber-700 py-3 px-5 rounded-md transition-all duration-700 ease-in-out hover:bg-white"
            >
              <FaPhoneAlt className="mr-2" /> Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}

        <button onClick={()=> setToggle(!toggle)} className="block md:hidden">
          {toggle ? (  <FaTimes className="text-6xl text-white" />) : (    <FaBars className="text-6xl text-white" />)}
      
        </button>
      </header>

      {/* Mobile Navigation */}
      <div className="relative">
        <ul
          className={`space-x-8 text-2xl flex flex-col justify-center items-center gap-8 text-white font-normal bg-amber-800 ${toggle ? "hidden" : "block"} md:hidden`}
        >
          <div className="flex flex-col gap-1">
            <a
              onClick={toggleClose}
              href="#hero"
              className="bg-amber-800 hover:bg-amber-900 w-screen py-2 text-center transition-all duration-500 ease-in-out"
            >
              <FaHome className="mr-2 inline" /> Home
            </a>
            <a
              onClick={toggleClose}
              href="#about"
              className="bg-amber-800 hover:bg-amber-900 w-screen py-2 text-center transition-all duration-500 ease-in-out"
            >
              <FaUserAlt className="mr-2 inline" /> About
            </a>
            <a
              onClick={toggleClose}
              href="#skills"
              className="bg-amber-800 hover:bg-amber-900 w-screen py-2 text-center transition-all duration-500 ease-in-out"
            >
             <FaSkiingNordic  className="mr-2 inline"/> Skills
            </a>
            <a
              onClick={toggleClose}
              href="#contact"
              className="bg-amber-800 hover:bg-amber-900 w-screen py-2 text-center transition-all duration-500 ease-in-out"
            >
              <FaPhoneAlt className="mr-2 inline" /> Contact
            </a>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;





