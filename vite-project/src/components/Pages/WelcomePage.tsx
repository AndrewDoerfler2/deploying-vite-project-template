

import BusinessCard from '../../assets/BusinessCard.png'
import { AboutMeText } from '../constants/AboutMeText'
import './WelcomePage.css'

export default function WelcomePage() {

  return (
    <>
        <div className='picture-area'>
          <a href={AboutMeText.linkedIn} target="_blank">
            <img src={BusinessCard} className="logo"/>
          </a>
      </div>
    </>
  )
}
