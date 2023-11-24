import { Link } from 'react-router-dom';
import './NavigationBar.css'

const baseURL = '/deploying-vite-project-template/';
const aboutmePath = baseURL + 'AboutMe';
const resumePath = baseURL + 'Resume'

function NavigationBar() {
  return (
    <div className="nav-bar">
    <nav>
        <div>
            <Link to="/">Business Card</Link>
        </div>
        <div>
            <Link to={aboutmePath}>Contact Info</Link>
        </div>
        <div>
            <Link to={resumePath}>Resume</Link>
        </div>
    </nav>
    </div>
  );
}

export default NavigationBar;