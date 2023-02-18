import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      name: "Weather App",
      img: "https://i.ibb.co/ZXqCdWM/weather-App.png",
      date: "2023 FEB",
      stack: "JS, React, PHP, Laravel",
      desc: "Simple weather app on Laravel",
      link: 'https://github.com/RyanWoolf/WeatherApp'
    },
    {
      name: "Commercial Web App",
      img: "https://i.ibb.co/S5yvJfT/commercial-App.png",
      date: "2023 FEB",
      stack: "JS, React, Express, Node, MongoDB",
      desc: "Real world web app on MERN",
      link: 'https://github.com/RyanWoolf/T3A2'
    },
    {
      name: "API Server",
      img: "https://i.ibb.co/pd8CPvW/api-Server.png",
      date: "2022 NOV",
      stack: "Python, Flask",
      desc: "API server app on Flask",
      link: 'https://github.com/RyanWoolf/API_Webserver'
    },
    {
      name: "Terminal App",
      img: "https://i.ibb.co/HdrgshN/terminal-App.png",
      date: "2022 SEP",
      stack: "Python",
      desc: "Terminal app on Python",
      link: 'https://github.com/RyanWoolf/Terminal_App'
    },
    {
      name: "Portfolio Web App",
      img: "https://i.ibb.co/fpP3QRL/portfolio-Web-App.png",
      date: "2022 SEP",
      stack: "HTML, CSS",
      desc: "First Portfolio web app on HTML",
      link: 'https://github.com/RyanWoolf/Portfolio_Website'
    },
    {
      name: "Melbourne Cup 2021",
      img: "https://i.ibb.co/ZHMQ1g3/restaurant-Event01.png",
      date: "2021 SEP",
      desc: "Restaurant Event Poster",
      link: "https://i.ibb.co/ZHMQ1g3/restaurant-Event01.png"
    },
    {
      name: "Dry July",
      img: "https://i.ibb.co/NZJDVNr/restaurant-Event02.png",
      date: "2021 JUN",
      desc: "Restaurant Event Poster",
      link: "https://i.ibb.co/NZJDVNr/restaurant-Event02.png"
    },
    {
      name: "Winter Party",
      img: "https://i.ibb.co/94WzHrD/restaurant-Event03.png",
      date: "2021 JUN",
      desc: "Restaurant Event Poster",
      link: "https://i.ibb.co/94WzHrD/restaurant-Event03.png"
    },
    {
      name: "Wine Dinner",
      img: "https://i.ibb.co/6BPf06W/restaurant-Event04.png",
      date: "2021 MAY",
      desc: "Restaurant Event Poster",
      link: "https://i.ibb.co/6BPf06W/restaurant-Event04.png"
    },
    {
      name: "International BurgerDay",
      img: "https://i.ibb.co/K0bd92Y/restaurant-Event05.png",
      date: "2021 APR",
      desc: "Restaurant Event Poster",
      link: "https://i.ibb.co/K0bd92Y/restaurant-Event05.png"
    },
    {
      name: "Restaurant Web App",
      img: "https://i.ibb.co/FBDTVB6/restaurant-Website.png",
      date: "2021 JAN",
      desc: "Website renewal on Wordpress",
      link: 'https://motorwagen.com.au/'
    }
  ]

  const projectsCards = projects.map((project, idx) => {
      return (
            
        <div id={project.img} key={idx} className="flex flex-col snap-center bg-stone-600 bg-blend-multiply h-full  bg-cover bg-center min-w-full tablet:min-w-[50%] tablet:snap-start desktop:min-w-[25%] desktop:snap-start desktop:max-h-[700px]" 
          style={{backgroundImage: `url(${project.img})`}}>
          <div className="w-full min-w-fit h-full p-8 relative">
            <h2 className="text-lg font-bold desktop:text-xl">{project.name}</h2>
            <h3 className="text-xs opacity-70 desktop:text-base">{project.date}</h3>
            <p className="text-xs  desktop:text-base">{project.stack}</p>
            <div className="z-1 w-full flex justify-center items-center absolute bottom-1/2 left-0 transition duration-500 opacity-0 hover:opacity-100">
              <a className="w-14 h-14 rounded-full bg-sub-2/[0.5] flex justify-center items-center " href={project.link} target="_blank">
                <svg className="opacity-70" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
              </a>
            </div>
            <p className="origin-[0] w-max absolute bottom-5 pt-4 text-xs rotate-[270deg]  desktop:text-base">{project.desc}</p>
          </div>
        </div>
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
    <article id="Projects" className="bg-main-200 flex flex-col justify-start w-full h-[90vh] min-h-[700px] p-8 text-left relative desktop:pt-12 desktop:min-h-[820px] desktop:h-max desktop:items-center">
      <div className="self-center max-w-xs mt-5 top-0 flex flex-col">
        <h1 className="font-heading font-bold text-xl text-sub-2 max-w-xs w-[81vw] min-w-[200px] desktop:text-3xl desktop:text-center desktop:mb-5">Projects</h1>
        <div className="h-[75vh] min-h-[450px] max-h-[720px]"></div>
        <div id="carousel-container" className="h-fit w-screen absolute left-0 top-20 desktop:flex desktop:justify-center desktop:top-32">
          <div className="flex items-center justify-center min-w-[320px] desktop:max-w-[1440px]">
            <div className="absolute z-10 top-1/2 w-full flex justify-between px-2  desktop:max-w-[1440px]">  
              <Link id="backward" onClick={moveBackward} className=""><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="opacity-50" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></Link> 
              <Link id="forward" onClick={moveForward} className=""><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="opacity-50" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></Link>
            </div>
            <div id="projects-carousel" className="relative my-5 flex overflow-hidden overflow-x-scroll bg-main-100 h-[75vh] w-screen scroll-smooth snap-x min-h-[500px] snap-mandatory desktop:max-h-[700px]">
              {projectsCards}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Projects