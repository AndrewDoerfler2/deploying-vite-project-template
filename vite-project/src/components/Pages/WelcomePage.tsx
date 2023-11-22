

import ProfilePicture from '../../assets/ProfilePicture.jpg'
import { WelcomePageText } from '../constants/WelcomePageText'
import AboutMe from './AboutMePage'
import { AboutMeText } from '../constants/AboutMeText'
import './WelcomePage.css'

export default function WelcomePage() {

  return (
    <>
    <div className='welcome-page'>
      <h1>{WelcomePageText.title}</h1>
      
      <div className='business-card'>
        <div className='picture-area'>
        <a href={AboutMeText.linkedIn} target="_blank">
          <img src={ProfilePicture} className="logo"/>
        </a>
        </div>
        
        <AboutMe />
      </div>
        </div>
    </>
  )
}
