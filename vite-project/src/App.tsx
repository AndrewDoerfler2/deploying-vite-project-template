
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
          {WelcomePageText.contactInfo}
        </p>
      </div>
    </>
  )
}

export default App
