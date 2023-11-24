import { Link } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {
  return (
    <div className="nav-bar">
    <nav>
        <div>
            <Link to="/">Business Card</Link>
        </div>
        <div>
            <Link to="/AboutMe">Contact Info</Link>
        </div>
        <div>
            <Link to="/Resume">Resume</Link>
        </div>
    </nav>
    </div>
  );
}

export default NavigationBar;