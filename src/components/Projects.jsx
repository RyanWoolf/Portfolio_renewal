import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      name: "Weather App",
      img: 'weatherApp.png',
      date: "2023 FEB",
      stack: "JS, React, PHP, Laravel",
      desc: "Simple weather app on Laravel",
      link: 'https://github.com/RyanWoolf/WeatherApp'
    },
    {
      name: "Commercial Web App",
      img: 'commercialApp.png',
      date: "2023 FEB",
      stack: "JS, React, Express, Node, MongoDB",
      desc: "Real world web app on MERN",
      link: 'https://github.com/RyanWoolf/T3A2'
    },
    {
      name: "API Server",
      img: 'apiServer.png',
      date: "2022 NOV",
      stack: "Python, Flask",
      desc: "API server app on Flask",
      link: 'https://github.com/RyanWoolf/API_Webserver'
    },
    {
      name: "Terminal App",
      img: 'terminalApp.png',
      date: "2022 SEP",
      stack: "Python",
      desc: "Terminal app on Python",
      link: 'https://github.com/RyanWoolf/Terminal_App'
    },
    {
      name: "Portfolio Web App",
      img: 'portfolioWebApp.png',
      date: "2022 SEP",
      stack: "HTML, CSS",
      desc: "First Portfolio web app on HTML",
      link: 'https://github.com/RyanWoolf/Portfolio_Website'
    },
    {
      name: "Melbourne Cup 2021",
      img: 'restaurantEvent01.png',
      date: "2021 SEP",
      desc: "Restaurant Event Poster",
      link: "../src/assets/projects/restaurantEvent01.png"
    },
    {
      name: "Dry July",
      img: 'restaurantEvent02.png',
      date: "2021 JUN",
      desc: "Restaurant Event Poster",
      link: "../src/assets/projects/restaurantEvent02.png"
    },
    {
      name: "Winter Party",
      img: 'restaurantEvent03.png',
      date: "2021 JUN",
      desc: "Restaurant Event Poster",
      link: "../src/assets/projects/restaurantEvent03.png"
    },
    {
      name: "Wine Dinner",
      img: 'restaurantEvent04.png',
      date: "2021 MAY",
      desc: "Restaurant Event Poster",
      link: "../src/assets/projects/restaurantEvent04.png"
    },
    {
      name: "International BurgerDay",
      img: 'restaurantEvent05.png',
      date: "2021 APR",
      desc: "Restaurant Event Poster",
      link: "../src/assets/projects/restaurantEvent05.png"
    },
    {
      name: "Restaurant Web App",
      img: 'restaurantWebsite.png',
      date: "2021 JAN",
      desc: "Website renewal on Wordpress",
      link: 'https://motorwagen.com.au/'
    }
  ]

  const projectsCards = projects.map((project, idx) => {
      return (<>
            
        <div id={project.img} key={idx} className="flex flex-col snap-center bg-stone-600 bg-blend-multiply h-[32rem] bg-cover bg-center min-w-full" style={{backgroundImage: `url(../src/assets/projects/${project.img})`}}>
          <div className="w-full h-full p-8 relative">
            <h2 className="text-lg font-bold">{project.name}</h2>
            <h3 className="text-xs opacity-70">{project.date}</h3>
            <p className="text-xs">{project.stack}</p>
            <div className="z-1 w-full flex justify-center items-center absolute bottom-1/2 left-0 transition duration-500 opacity-0 hover:opacity-100">
              <a className="w-14 h-14 rounded-full bg-sub-2/[0.5] flex justify-center items-center " href={project.link} target="_blank">
                <svg className="opacity-70" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
              </a>
            </div>
            <p className="origin-[0] w-max absolute bottom-5 pt-4 text-xs rotate-[270deg]">{project.desc}</p>
          </div>
          
        </div>
      </>
        )
    })


    const moveBackward = () => {
      const el = document.getElementById("projects-carousel")
      el.scrollLeft = el.scrollLeft - el.offsetWidth
    }

    const moveForward = () => {
      const el = document.getElementById("projects-carousel")
      el.scrollLeft = el.scrollLeft + el.offsetWidth
    }



  return (
    <article name="Projects" className="bg-main-200 flex flex-col justify-start items-start w-full h-fit min-h-[740px] p-8 text-left">
      <div className="max-w-xs mt-5">
        <h1 className="font-heading font-bold text-2xl text-sub-2">Projects</h1>
        <div id="carousel-container" className="absolute left-0 w-full h-full">
          <div className="flex items-center justify-center relative ">
            <div className="absolute z-10 top-1/2 w-full flex justify-between px-2">  
              <Link id="backward" onClick={moveBackward} className=""><img className={"inline w-6 h-6 rounded-full bg-neutral-600 opacity-40 p-1.5 "} src="../src/assets/icons/icon_arrow_back.png"/></Link> 
              <Link id="forward" onClick={moveForward} className=""><img className="inline w-6 h-6 rounded-full bg-neutral-600 opacity-40 p-1.5" src="../src/assets/icons/icon_arrow_forward.png"/></Link>
            </div>
            <div id="projects-carousel" className="relative my-5 flex overflow-hidden overflow-x-scroll bg-main-100 h-[32rem] w-screen scroll-smooth snap-x snap-mandatory">
              {projectsCards}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Projects