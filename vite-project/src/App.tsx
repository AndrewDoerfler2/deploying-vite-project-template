

import './App.css'
import WelcomePage from './components/Pages/WelcomePage'
import AboutMePage from './components/Pages/AboutMePage'
import NavigationBar from './components/elements/NavigationBar'
import Resume from './components/Pages/Resume'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const baseURL = '/deploying-vite-project-template/';
const aboutmePath = baseURL + 'AboutMe';
const resumePath = baseURL + 'Resume'

function App() {
  return (
    <><BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path={aboutmePath} element={<AboutMePage />} />
        <Route path={resumePath} element={<Resume />} />
      </Routes>
    </BrowserRouter>
    
      </>

  );
}

export default App
