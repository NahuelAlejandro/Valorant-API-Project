import { BrowserRouter, Route, Routes } from "react-router-dom"
import Agent from "./components/Agent"
import Home from "./views/Home"
import Agents from "./components/Agents"
import Arsenal from "./components/Arsenal"
import Weapon from "./components/Weapon"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Agents" element={<Agents/>}/>
        <Route path="/Agent/:id" element={<Agent/>}/>
        <Route path="/Arsenal" element={<Arsenal/>}/>
        <Route path="/Arsenal/:id" element={<Weapon/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
