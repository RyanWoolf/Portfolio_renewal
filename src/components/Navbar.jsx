import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = ["Home", "About", "Projects", "Contact"]
  const [isOpen, setOpen] = useState(false);
  const targets = {
    Home: document.getElementById('Home'),
    About: document.getElementById('About'),
    Projects: document.getElementById('Projects'),
    Contact: document.getElementById('Contact')
  }
  useEffect(()=>{
  },[targets?.Contact])

  const toggleState = (evt) => {
    setOpen(!isOpen)
    evt.preventDefault()

    console.log(targets.Home)
  };

  const MenuBox = () => {

    

    return (
    <div id="slideMenu"  className={`shadow-neutral-900 shadow-lg w-full absolute delay-150 transition duration-300 ${isOpen?'translate-y-[0px]':'-translate-y-[240px]'} top-[70px] left-0 `} >
      <div id="menu-container" aria-label="menu" aria-hidden="true" className={`bg-main-100 transition duration-300 w-full font-heading`}>     
        {
          menuItems.map((item, idx) => {
            return <Link to="/" key={idx} className="block py-3 hover:bg-zinc-700 font-semibold text-sm transition duration-300 opacity-50 hover:opacity-100" name={item} onClick={toggleState}>{item}</Link>
          })
        }
      </div>
    </div>

    )    
  }


  return (
    <>
      <div className="flex shadow-lg bg-main-200 shadow-neutral-900 sticky w-full top-0 z-20 flex-col justify-center h-14" >
        <MenuBox />
        <div className="relative bg-main-200 w-full py-3 px-4 h-14 flex justify-between desktop:max-w-[1440px] desktop:m-auto">
          <a href="#Home" onClick={()=> targets[Home]?.scrollIntoView()} ><h1 className="font-heading font-extrabold text-2xl text-left text-gray-400 pt-">LW</h1></a>
          <nav className="desktop:hidden">
            <button
              className="relative w-10 h-6 text-gray-500 rounded-sm focus:outline-none"
              onClick={()=> setOpen(!isOpen)}>
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
          <nav className="hidden mx-2 desktop:flex desktop:items-center"> 
            {
              menuItems.map((menu, idx) => {
                return <a key={idx} href={`#${menu}`} name={menu} onLoad={setOpen} onClick={(evt) => {
                  targets[evt.target.name]?.scrollIntoView()
                  // targets[menu].scrollIntoView()
                  setOpen(false)}
                } className="relative opacity-50 font-heading mx-3 font-semibold text-sm transition duration-300 hover:opacity-100">{menu}</a>
              })
            }
          
          </nav>
        </div>
      </div>
    </>
  );
}