import { AboutMeText } from "../constants/AboutMeText";
import './AboutMePage.css'

export default function AboutMe() {
    return (
        <>
            <div className="card">
                <p>
                    <div> Please feel free to contact me at:
                    <br />
                    <ul>
                        <li> <a href="mailto:" target="_blank">{AboutMeText.email}</a> </li>
                        <li> <a href={AboutMeText.linkedIn} target="_blank">{AboutMeText.linkedIn}</a> </li>
                        <li> <a href="tel:" target="_blank">{AboutMeText.phone}</a> </li>
                    </ul>
                    </div>
                </p>
            </div>   
        </>
)}