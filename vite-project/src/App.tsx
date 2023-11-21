

import ProfilePicture from './assets/ProfilePicture.jpg'
import './App.css'
import WelcomePageText from './components/constants/WelcomePageText'
import AboutMe from './components/Pages/AboutMe'
import { AboutMeText } from './components/constants/AboutMeText'

function App() {

  return (
    <>
      <h1>{WelcomePageText.title}</h1>
      
      <div>
        <a href={AboutMeText.linkedIn} target="_blank">
          <img src={ProfilePicture} className="logo"/>
        </a>
      </div>
      * Click picture to go directly to my LinkedIn profile *
        <p>
            <AboutMe />
        </p>
    </>
  )
}

export default App
