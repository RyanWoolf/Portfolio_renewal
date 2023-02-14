import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleState = (evt) => {
    setOpen(!isOpen)
    evt.preventDefault()
  };

  const MenuBox = () => {

    

    return (
    <div id="slideMenu"  className={`shadow-neutral-900 shadow-md w-screen absolute top-0 left-0 isOpen ${isOpen ? 'top-16' : 'hidden'}`} >
      <div id="menu-container" aria-label="menu"  
      className="bg-stone-800 w-screen">     
        <Link className="block" to="#Home" name="Home" onClick={toggleState}>Home</Link>
        <Link className="block" to="#About" name="About" onClick={toggleState}>About</Link>
        <Link className="block" to="#Skills" name="Skills" onClick={toggleState}>Skills</Link>
        <Link className="block" to="#Projects" name="Projects" onClick={toggleState}>Projects</Link>
        <Link className="block" to="#Contact" name="Contact" onClick={toggleState}>Contact</Link>  
      </div>
    </div>

    )    
  }

  return (
    <>
      <div id="menu-wrapper" onBlur={()=>setOpen(false)} className="flex relative z-5 flex-col justify-center h-16 py-6 sm:py-12">
        <MenuBox />
        <div className="relative z-5 bg-stone-900 w-screen py-3 mx-auto px-4 sm:max-w-xl flex justify-between ">
          <h1 className="font-heading font-extrabold text-2xl text-left text-gray-400 pt-1">LW</h1>
          <nav>
            <button
              className="z-10 relative w-10 h-10 text-gray-500 rounded-sm focus:outline-none"
              onClick={toggleState}>
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    isOpen && "opacity-0"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}