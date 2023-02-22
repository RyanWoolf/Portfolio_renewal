import React from 'react'
import { Modal } from 'flowbite';
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
    const $targetEl = document.getElementById(`popup-modal${idx}`);

    // options with default values
    const options = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-main-1 bg-opacity-8 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
          console.log('modal is hidden');
      },
      onShow: () => {
          console.log('modal is shown');
      },
      onToggle: () => {
          console.log('modal has been toggled');
      }
    };
    const modal = new Modal($targetEl, options);

      return (
            
        <div id={project.img} key={idx} className="flex flex-col snap-center bg-stone-600 bg-blend-multiply h-full  bg-cover bg-center min-w-full tablet:min-w-[50%] tablet:snap-start desktop:min-w-[25%] desktop:snap-start desktop:max-h-[700px]" 
          style={{backgroundImage: `url(${project.img})`}}>
          <div className="w-full min-w-fit h-full p-8 relative">
            <h2 className="text-lg font-bold desktop:text-xl opacity-90">{project.name}</h2>
            <h3 className="text-xs opacity-60 font-semibold  desktop:text-base">{project.date}</h3>
            <div className="z-1 w-full flex justify-center items-center absolute bottom-1/2 left-0 transition duration-500 opacity-10 hover:opacity-100">
            {/* Modal button */}
              <button data-modal-target={`popup-modal${idx}`}  data-modal-toggle={`popup-modal${idx}`}  className="block text-white bg-sub-2 opacity-80 hover:bg-sub-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center" type="button">
                <svg className="opacity-70" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
              </button>
            </div>
            {/* Modal content start */}
            <div id={`popup-modal${idx}`} tabIndex="-1" className="fixed top-1/3 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-modal">
              <div className="relative w-full h-full max-w-md">
                <div className="relative bg-gray-700 rounded-lg shadow">
                  <div className="flex flex-col ">
                    <div className="flex items-center justify-between p-4 border-b border-gray-600 rounded-t">
                      <div className="flex flex-col">
                        <h3 className="text-base -mb-0.5 font-semibold text-gray-300 desktop:text-lg">{project.name}</h3>
                        <h3 className="text-xs opacity-60 desktop:text-xs">{project.date}</h3>
                      </div>
                      <button type="button" className=" duration-300 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide={`popup-modal${idx}`} >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-4 border-b border-gray-600 rounded-t">
                      <p className="mb-1 text-xs text-gray-400 desktop:text-sm">{project.stack}</p>
                      <p className="my-1 text-xs text-gray-300 desktop:text-sm">{project.desc}</p>
                    </div>
                    <button data-modal-hide={`popup-modal${idx}`}  type="button" className="text-gray-300 w-20 ml-4 mb-4 duration-300 bg-sub-1 hover:drop-shadow-sub1 focus:ring-4 focus:outline-none focus:ring-gray-400 rounded-lg text-sm font-semibold px-4 py-1.5 mt-3 focus:z-10">
                      <a target="_blank" href={project.link} className="h-full w-full" >
                        View
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal content end */}
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