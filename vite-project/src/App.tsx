

import './App.css'
import WelcomePage from './components/Pages/WelcomePage'
import AboutMePage from './components/Pages/AboutMePage'
import NavigationBar from './components/elements/NavigationBar'
import Resume from './components/Pages/Resume'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <><BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    
      </>

  );
}

export default App
