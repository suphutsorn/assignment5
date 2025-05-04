import { useState } from 'react'
import jenkinsLogo from './assets/Jenkins_logo.svg.png' // เพิ่มโลโก้ Jenkins
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">
          <img src={jenkinsLogo} className="logo" alt="Jenkins logo" />
        </a>
      </div>
      <h1>Welcome to Jenkins CI/CD Demo</h1>
      <div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    SCORE: {count}
  </button>
  <p style={{ textAlign: 'center' }}>
    BY<br />
    B6526436 SUPHUTSORN SOISUWAN<br />
    B6507022 PADUNGSIT SUPROM-IN
  </p>
</div>

      <p className="read-the-docs">
        Click on the Jenkins logo to learn more about Jenkins CI/CD
      </p>

      <footer className="footer">
        <p>Powered by Jenkins and Vite</p>
      </footer>
    </>
  )
}

export default App
