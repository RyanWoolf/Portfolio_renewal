import React from 'react'

const Skills = () => {
  return (
    <article name="Skills" className="bg-main-100 flex flex-col justify-center items-center w-screen h-screen min-h-min p-8 text-left">
      <div className="max-w-xs flex-col items-center justify-center">
        <h1 className="inline tracking-wider font-heading font-bold text-2xl text-sub-2">Skills stack </h1>
        <div className="flex-col py-6">
          <h2 className="tracking-tight font-bold mb-2">Design to Web</h2>
          <p className="font-sans font-light text-xs">There is so many good web design projects. But if you can't substantiate them on the web, it's only imaginary project. I'm here to lead that to the real world with UI/UX and web development skills. </p>
          <h2 className="tracking-tight font-bold mt-6 mb-2">History</h2>
          <p className="font-sans font-light text-xs">2015 | Diploma of Management</p>
          <p className="font-sans font-light text-xs">2023 | Diploma of Web Development</p>

        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="my-5 rounded-full border bg-contain w-44 h-44 bg-[url('./assets/profilephoto.jpg')]"></div>
          <a className="text-sub-2 block rounded-full border-sub-2 px-2 py-1 align-middle font-light text-xs border hover:text-main-200 hover:bg-sub-2" href="">Resume</a>
        </div>
      </div>
    </article>
  )
}

export default Skills