"use client";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header>
      <nav className="hidden lg:flex justify-between text-[#C7C7C7] lg:px-18 py-6">
        <h1 className="text-xl text-[#C7C7C7]">ALIMAT JAMIU</h1>
        <ul className="flex gap-6">
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="lg:hidden flex justify-between items-center px-6 py-4">
        <h1 className="text-xl text-white">ALIMAT JAMIU</h1>
        <button 
          onClick={toggleMenu} 
          aria-label="Toggle Menu" 
          className="text-white lg:hidden"
        >
          {isOpen ?   <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 items-center justify-center absolute top-16 left-0 right-0 bg-[#1A1A1A] text-white py-10 lg:py-4 rounded-md shadow-lg z-50 lg:hidden mx-4">
          <a href="#" className="text-xl">Work</a>
          <a href="#" className="text-xl">About</a>
          <a href="#" className="text-xl">Contact</a>
        </div>
      )}
    </header>
  );
}







