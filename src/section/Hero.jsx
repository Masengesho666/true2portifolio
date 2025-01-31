import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import cadeau2 from "../assets/myprofile.png";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "Software Developer", "YouTuber"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id="home" className="flex flex-col md:flex-row items-center h-auto md:h-[95vh] gap-6 px-5 bg-gray-900 w-full text-white z-0 py-10 md:py-0">
      <div className="w-full md:w-3/5 space-y-5 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold">Hello, It's Me</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400">Cadeau Masengesho</h1>
        
        <h1 className="text-3xl md:text-4xl font-bold">
          I am <span className="text-[#0ef]" ref={textRef}></span>
        </h1>
        <p className="text-lg leading-8 px-3 md:px-0">
          I'm a software developer with extensive experience for over 1 year.
          Expertise in creating and developing software, frontend, and more.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a href="https://www.facebook.com/" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/home" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="https://github.com/Masengesho666" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            <FaGithub />
          </a>
          <a href="https://web.whatsapp.com/" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            <FaWhatsapp />
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <a href="#about" className="mt-8 inline-block px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500">
            More About Me
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={cadeau2}
          alt="Portrait of Theoneste"
          className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        />
      </div>
    </main>
  );
};

export default Hero;
