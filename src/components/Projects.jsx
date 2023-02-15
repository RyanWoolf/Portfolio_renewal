import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      name: "Weather App",
      img: 'weatherApp',
      date: "2023 FEB",
      desc: "Simple weather app on Laravel",
      link: 'https://github.com/RyanWoolf/WeatherApp'
    },
    {
      name: "Commercial Web App",
      img: 'commercialApp',
      date: "2023 FEB",
      desc: "Real world web app on MERN",
      link: 'https://github.com/RyanWoolf/T3A2'
    },
    {
      name: "API Server",
      img: 'apiServer',
      date: "2022 NOV",
      desc: "API server app on Flask",
      link: 'https://github.com/RyanWoolf/API_Webserver'
    },
    {
      name: "Terminal App",
      img: 'terminalApp',
      date: "2022 SEP",
      desc: "Terminal app on Python",
      link: 'https://github.com/RyanWoolf/Terminal_App'
    },
    {
      name: "Portfolio Web App",
      img: 'portfolioWebApp',
      date: "2022 SEP",
      desc: "First Portfolio web app on HTML",
      link: 'https://github.com/RyanWoolf/Portfolio_Website'
    },
    {
      name: "Melbourne Cup 2021",
      img: 'restaurantEvent01',
      date: "2021 SEP",
      desc: "Restaurant Event Poster"
    },
    {
      name: "Dry July",
      img: 'restaurantEvent02',
      date: "2021 JUN",
      desc: "Restaurant Event Poster"
    },
    {
      name: "Winter Party",
      img: 'restaurantEvent03',
      date: "2021 JUN",
      desc: "Restaurant Event Poster"
    },
    {
      name: "Wine Dinner",
      img: 'restaurantEvent04',
      date: "2021 MAY",
      desc: "Restaurant Event Poster"
    },
    {
      name: "International BurgerDay",
      img: 'restaurantEvent05',
      date: "2021 APR",
      desc: "Restaurant Event Poster"
    },
    {
      name: "Restaurant Web App",
      img: 'restaurantWebsite',
      date: "2021 JAN",
      desc: "Website renewal on Wordpress",
      link: 'https://motorwagen.com.au/'
    }
  ]

  const projectsCards = projects.map((project, idx) => {
      return (
        <div id={project.img} key={idx} className="flex flex-col snap-center top-0 left-0 bg-stone-600 bg-blend-multiply h-[32rem] bg-cover bg-center min-w-[100vw] " style={{backgroundImage: `url(../src/assets/projects/${project.img}.png)`}}>
          <div className="w-full h-full p-8">
            <h2 className="text-lg font-bold">{project.name}</h2>
            <h3 className="text-xs">{project.date}</h3>
            <p className="relative -left-28 -bottom-64 text-xs rotate-[270deg]">{project.desc}</p>
          </div>
        </div>
        )
    })

  // const isFirst = () => {
  //   const el = document.getElementById(projects[0].img)
  //   if (el.css(visibility)!== 'hidden') {
  //     return 'hidden'
  //   }
  // }

    const moveBackward = () => {
      const el = document.getElementById("projects-carousel")
      el.scrollLeft = el.scrollLeft - 300
    }

    const moveForward = () => {
      const el = document.getElementById("projects-carousel")
      el.scrollLeft = el.scrollLeft + 300
    }



  return (
    <article name="Projects" className="bg-main-200 flex flex-col justify-center items-center w-screen h-screen min-h-screen p-8 text-left">
      <h1 className="block tracking-wider self-start font-heading text-2xl text-sub-2">Projects</h1>
      <div className="relative max-w-xs items-center justify-center">
        <div className="absolute z-10 top-1/2 w-full flex justify-between px-2">  
          <Link id="backward" onClick={moveBackward} className=""><img className={"inline w-6 h-6 rounded-full bg-neutral-500 opacity-30 p-1.5 "} src="../src/assets/icons/icon_arrow_back.png"/></Link> 
          <Link id="forward" onClick={moveForward} className=""><img className="inline w-6 h-6 rounded-full bg-neutral-500 opacity-30 p-1.5" src="../src/assets/icons/icon_arrow_forward.png"/></Link>
        </div>
        <div id="projects-carousel" className="relative my-5 flex overflow-hidden overflow-x-scroll bg-main-100 h-[32rem] w-[100vw] max-w-[440px] scroll-smooth snap-x snap-mandatory">
        {projectsCards}
        </div>
        
      </div>
    </article>
  )
}

export default Projects