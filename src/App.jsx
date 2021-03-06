import { Fade } from 'react-reveal'
import Certificate from './components/Certificates/Certificate'
import Home from './components/Home'
import Projects from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import './tailwind.css'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Home />
      <Fade bottom>
        <Projects />
      </Fade>
      <Fade>
        <Skills bottom />
      </Fade>
      <Fade>
        <Certificate bottom />
      </Fade>
      <Contact />
    </div>
  )
}

export default App
