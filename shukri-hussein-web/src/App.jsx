import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
