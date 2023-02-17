import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Landing/>
    <Navbar/>
    <About/>
    <Projects/>
    <Contact/>
    {/* <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes> */}
    <Footer/>
    </>
  )
}

export default App
