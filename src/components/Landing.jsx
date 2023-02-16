import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from './About'


const Landing = () => {

  return (
    <>
    <main className="flex justify-center items-center w-full h-screen text-left bg-main-200">
      <div>
        <h1 className="font-heading font-bold text-3xl -mb-1.5">Ryan Lee</h1>
        <span className="font-sans font-light text-xs">Junior Developer | Senior Explorer</span>
        <a href="#About" class="mt-3 hover:animate-bounce bg-main-100 p-2 w-8 h-8 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-sub-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </main>
    </>
  )
}

export default Landing