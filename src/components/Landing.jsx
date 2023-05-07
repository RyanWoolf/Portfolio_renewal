import React from 'react'

const Landing = () => {

  return (
    <>
    <main id="Home" className="flex justify-center items-center w-full h-screen text-left bg-main-200 relative z-50">
      <div>
        <h1 className="font-heading font-bold text-3xl -mb-1.5 desktop:text-[3rem] desktop:mb-2">Ryan Lee</h1>
        <span className="font-sans font-light text-xs desktop:text-[1rem]">Everyday Grass planter | Junior Developer</span>
        <a href="#Navbar" className="mt-3 animate-pulse hover:drop-shadow-sub1  transition duration-300 bg-main-100 p-2 w-8 h-8 desktop:w-10 desktop:h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-sub-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </main>
    </>
  )
}

export default Landing