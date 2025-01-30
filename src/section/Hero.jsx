import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import cadeau2 from "../assets/myprofile.png"; // Replace with the resized image file path

const Hero = () => {
  const textRef = useRef(null); // Correctly define useRef with null

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "Software Developer", "YouTuber"], // Texts to display
      typeSpeed: 100, // Typing speed
      backSpeed: 100, // Backspacing speed
      backDelay: 1000, // Delay before typing starts again
      loop: true, // Loop typing effect
    });

    // Cleanup to destroy instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id="home" className="flex items-center h-[95vh] gap-6 px-5 bg-gray-900 w-full text-white z-0">
      {/* Hero Section Content */}
      <div className="w-3/5 space-y-5">
        <h3 className="text-3xl font-bold">Hello, It's Me</h3>
        <h1 className="text-5xl font-extrabold text-cyan-400">Cadeau Masengesho</h1>
      
        <h1 className="text-4xl font-bold ">
        I am  <span className="text-[#0ef]" ref={textRef}></span>
        </h1>
        <p className="text-lg leading-8">
          I'm a software developer with extensive experience for over 1 year.
          Expertise in creating and developing software, frontend, and more.
        </p>
        <div className="mt-8 flex space-x-4">
          {/* Social Links */}
          <a href="https://www.facebook.com/" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
          {<FaFacebookF />}
          </a>
          <a href="https://twitter.com/home" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            { <  FaTwitter/> }
          </a>
          <a href="https://github.com/Masengesho666" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
         {<FaGithub />}
          </a>
          <a href="https://web.whatsapp.com/" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            {<FaWhatsapp /> }
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            { <FaLinkedin/>}
          </a>
        </div>

        <a href="#" className="mt-8 inline-block px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500">
          More About Me
        </a>
        {/* Additional Content */}
      </div>

      {/* Profile Image Section */}
      <div className="w-1/3 flex justify-center items-center">
  <img
    src={cadeau2}
    alt="profile"
    className="w-full h-full max-w-[300px] max-h-[300px] object-cover rounded-full shadow-lg border-4 border-cyan-500"
  />
</div>

    </main>
  );
};

export default Hero;
