import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='container'>
        <nav className='navbar'>
          <div><h2>Awadhesh Kumar</h2></div>
          <div>
            <h3>Home</h3>
            <h3>Projects</h3>
            <h3>Resume</h3>
            <h3>About</h3>
          </div>
        </nav>
        <div className='intro'>
          <h3>Hi! I am Awadhesh Kumar</h3>
          <b>
            Passionate Full Stack Web Developer ll MERN, Mastered in 
            JavaScript, HTML, CSS, React.js, Node.js, Express.js and Python.
          </b>
        </div>
        <div className='projects'>
          <div>
            <h3>Tata-1mg</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/TATA-1mg-Front-end/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://tata-1mg-kappa.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h3>Movie-Hub</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Movie-Hub" target='blang'>Code</a>
              <a href="https://movie-hub-blue.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h3>Healthcare(Shedula)</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Shedula-FE/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://shedula-fe.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h3>Healthy-eats</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Healthy-eats-frontend/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://healthyeats-nu.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h3>Acko-app</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Acko-app-Project" target='blang'>Code</a>
              <a href="https://acko-app-project.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h3>Tata-1mg</h3>
            <h4>

            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/TATA-1mg-Front-end/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://tata-1mg-kappa.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
