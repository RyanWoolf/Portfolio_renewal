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
      <Footer/>
    </>
  )
}

export default App
