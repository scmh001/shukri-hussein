import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Projects from "./pages/Projects"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
