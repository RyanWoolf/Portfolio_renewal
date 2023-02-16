import React from 'react'

const About = () => {

  const languages = ['Javascript', 'Python', 'php', 'HTML', 'CSS']
  const libraries = ['React', 'Node', 'Express', 'Flask', 'Laravel', 'TailwindCSS', 'Pytest', 'Jest', 'Cypress']
  const databases = ['PostgreSQL', 'MongoDB']
  const design = ['Figma', 'Illustrator', 'Photoshop', 'Xd']
  const management = ['Trello', 'Github', 'Git']

  const languages_render = languages.map(image => {
    return <img key={image} src={`../src/assets/icons/skills/languages/${image}.png`}></img>
  })

  return (
    <article id="About" className="bg-main-100 flex flex-col justify-center items-center w-full h-fit min-h-screen p-8 text-left">
      <div className="max-w-xs items-center justify-center mt-5">
        <h1 className="inline font-heading font-bold text-2xl ">About </h1>
        <h1 className="inline font-heading  font-bold text-2xl text-sub-2">Ryan</h1>
        <div className="flex-col py-6">
          <h2 className="tracking-tight font-bold text-sm mb-2">Design to Web</h2>
          <p className="font-sans font-light text-xs">There is so many good web design projects. But if you can't substantiate them on the web, it's only imaginary project. I'm here to lead that to the real world with UI/UX and web development skills. </p>
          <h2 className="tracking-tight font-bold text-sm mt-6 mb-2">History</h2>
          <p className="font-sans font-light text-xs">2015 | Diploma of Management</p>
          <p className="font-sans font-light text-xs">2023 | Diploma of Web Development, Coder Academy</p> 
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="my-5 rounded-full border bg-contain w-44 h-44 bg-[url('./assets/profilephoto.jpg')]"></div>
          <a className="text-sub-2 block rounded-full border-sub-2 px-2 py-1 mb-8 align-middle font-light text-xs border hover:text-main-200 hover:bg-sub-2" href="">Resume</a>
        </div>
        <h1 className="font-heading font-bold text-2xl text-sub-2">Skills stack </h1>
        <div className="flex-col py-6">
          <h2 className="tracking-tight font-bold text-sm mb-2">Languages</h2>
          <div className="flex flex-wrap mb-5">
            <p className="text-xs font-light block">JavaScript, Python, PHP, HTML, CSS</p>
            {/* {languages.map(image => {
              return <img className="w-6 inline m-1" key={image} src={`../src/assets/icons/skills/languages/${image}.png`}></img>
            })
          } */}
          </div>
          <h2 className="tracking-tight font-bold text-sm mb-2">Libraries</h2>
          <div className="flex flex-wrap mb-5">
          <p className="text-xs font-light block">React, Node, Express, Flask, Laravel, TailwindCSS, Pytest, Jest, Cypress</p>
            {/* {libraries.map(image => {
              return <img className="w-6 inline m-1" key={image} src={`../src/assets/icons/skills/libraries/${image}.png`}></img>
            })
          } */}

          </div>
          <h2 className="tracking-tight font-bold text-sm mb-2">Databases</h2>
          <div className="flex flex-wrap mb-5">
          <p className="text-xs font-light block">PostgreSQL, MongoDB</p>
            {/* {databases.map(image => {
              return <img className="w-6 inline m-1" key={image} src={`../src/assets/icons/skills/databases/${image}.png`} alt={image}></img>
            })
          } */}
          </div>
          <h2 className="tracking-tight font-bold text-sm mb-2">Design</h2>
          <div className="flex flex-wrap mb-5">
          <p className="text-xs font-light block">Figma, illustrator, Photoshop, Xd</p>
            {/* {design.map(image => {
              return <img className="w-6 inline m-1" key={image} src={`../src/assets/icons/skills/design/${image}.png`}></img>
            })
          } */}
          </div>
          <h2 className="tracking-tight font-bold text-sm mb-2">Management</h2>
          <div className="flex flex-wrap mb-5">
          <p className="text-xs font-light block">Trello, Git, Github</p>
            {/* {management.map(image => {
              return <img className="w-6 inline m-1" key={image} src={`../src/assets/icons/skills/management/${image}.png`}></img>
              })
            } */}
          </div>
        </div>
      </div>
      <div className="max-w-xs items-center justify-center">
        
      </div>
    </article>
  )
}

export default About