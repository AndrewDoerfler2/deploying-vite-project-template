
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePageText from './components/constants/WelcomePageText'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{WelcomePageText.title}</h1>
      <div className="card">
        <p>
          {WelcomePageText.description}
        </p>
        <p>
          <div> Please feel free to contact me at:
          <br />
          <ul>
            <li> <a href="mailto:" target="_blank">{WelcomePageText.email}</a> </li>
            <li> <a href={WelcomePageText.linkedIn} target="_blank">{WelcomePageText.linkedIn}</a> </li>
          </ul>
          </div>
          
        </p>
      </div>
    </>
  )
}

export default App
