import React from 'react'

const About = () => {

  const skillStack = {
    languages: ['Javascript', 'Python', 'php', 'HTML', 'CSS'],
    libraries: ['React', 'Node', 'Express', 'Flask', 'Laravel', 'TailwindCSS', 'Pytest', 'Jest', 'Cypress'],
    databases: ['PostgreSQL', 'MongoDB'],
    design: ['Figma', 'Illustrator', 'Photoshop', 'Xd'],
    management: ['Trello', 'Github', 'Git']
  }

  const skillsStack = [
    ['Javascript', 'Python', 'php', 'HTML', 'CSS'],
    ['React', 'Node', 'Express', 'Flask', 'Laravel', 'TailwindCSS', 'Pytest', 'Jest', 'Cypress'],
    ['PostgreSQL', 'MongoDB'],
    ['Figma', 'Illustrator', 'Photoshop', 'Xd'],
    ['Trello', 'Github', 'Git']

  ]

  const languages = ['Javascript', 'Python', 'php', 'HTML', 'CSS']
  const libraries = ['React', 'Node', 'Express', 'Flask', 'Laravel', 'TailwindCSS', 'Pytest', 'Jest', 'Cypress']
  const databases = ['PostgreSQL', 'MongoDB']
  const design = ['Figma', 'Illustrator', 'Photoshop', 'Xd']
  const management = ['Trello', 'Github', 'Git']

  const languages_render = languages.map(image => {
    return <img key={image} src={`../src/assets/icons/skills/languages/${image}.png`}></img>
  })


  const skillStackRender = (array, name) => {
      return (
        <>
          <h2 className="tracking-tight font-bold text-sm mb-2 desktop:text-xl">{name}</h2>
          <div className="flex flex-wrap mb-5">
            <p className="text-xs font-light block desktop:text-sm desktop:mb-1" >{array.map((item, idx) => item + " ")}</p>
          </div>
        </>
      )
    
  }

  return (
    <article id="About" className="bg-main-100 flex flex-col justify-center items-center w-full h-fit p-8 text-left desktop:pt-12 desktop:min-h-[820px] ">
      <div className="max-w-xs mt-5 desktop:flex desktop:max-w-fit">
        <div className="desktop:w-[400px] desktop:mr-5">
          <h1 className="inline font-heading font-bold text-xl text-sub-2 desktop:text-3xl">About Ryan</h1>
          <div className="flex-col py-6">
            <h2 className="tracking-tight font-bold text-sm mb-2 desktop:text-xl">Design to Web</h2>
            <p className="font-sans font-light text-xs">There is so many good web design projects. But if you can't substantiate them on the web, it's only imaginary project. I'm here to lead that to the real world with UI/UX and web development skills. </p>
            <h2 className="tracking-tight font-bold text-sm mt-6 mb-2 desktop:text-xl">History</h2>
            <p className="font-sans font-light text-xs">2015 | Diploma of Management</p>
            <p className="font-sans font-light text-xs">2023 | Diploma of Web Development, Coder Academy</p> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img src='https://i.ibb.co/pJcMqjg/profilephoto.jpg' className="my-5 rounded-full border bg-contain w-44 h-44" />
            <a className="text-white block rounded-full  border-sub-1 bg-sub-1 px-4 py-1 mb-8 align-middle text-xs transition duration-300 border hover:drop-shadow-sub1 desktop:text-base" href='https://drive.google.com/file/d/1wZOpi337ZCVTk_wIqbgb1hg3KR5EX5W0/view?usp=sharing' target="_blank">Resume</a>
          </div>
        </div>
        <div className="desktop:w-[400px]">
          <h1 className="font-heading font-bold text-xl text-sub-2 desktop:text-3xl">Skills stack </h1>
          <div className="flex-col pt-6">
            {skillStackRender(languages, "Language")}
            {skillStackRender(libraries, "Libraries")}
            {skillStackRender(databases, "Databases")}
            {skillStackRender(design, "Design")}
            {skillStackRender(management, "Management")}
          </div>
          <h2 className="tracking-tight font-bold text-sm esktop:text-md">And so much more is coming</h2>
        </div>
      </div>
    </article>
  )
}

export default About