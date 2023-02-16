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
    <div id="slideMenu"  className={`shadow-neutral-900 shadow-lg w-full absolute top-12 left-0`} >
      <div id="menu-container" aria-label="menu" aria-hidden="true" className={`bg-main-100 w-full  ${isOpen?'visible':'hidden'}`}>     
        <Link className="block py-3" to="#Home" name="Home" onClick={toggleState}>Home</Link>
        <Link className="block py-3" to="#About" name="About" onClick={toggleState}>About</Link>
        <Link className="block py-3" to="#Projects" name="Projects" onClick={toggleState}>Projects</Link>
        <Link className="block py-3" to="#slideMenu" name="Contact" onClick={toggleState}>Contact</Link>  
      </div>
    </div>

    )    
  }

  return (
    <>
      <div onBlur={()=>setOpen(false)} className="flex shadow-lg shadow-neutral-900 sticky w-full top-0 z-20 flex-col justify-center h-10">
        <MenuBox />
        <div className="relative bg-main-200 w-full py-3 px-4 sm:max-w-xl flex justify-between ">
          <h1 className="font-heading font-extrabold text-2xl text-left text-gray-400 pt-">LW</h1>
          <nav>
            <button
              className="relative w-10 h-6 text-gray-500 rounded-sm focus:outline-none"
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