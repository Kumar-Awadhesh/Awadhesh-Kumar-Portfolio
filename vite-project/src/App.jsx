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
        <h1 className='project-title'>Projects</h1>
        <div className='projects'>
          <div>
            <h2>Tata-1mg</h2>
            <h4>
              HTML5 | CSS3 | JavaScript | React | Node.js | Express.js | MongoDB | Responsive Web Design

              Developed a responsive Ul using React, showcasing dynamic form submissions, dropdown menus, and modals.

              Created a robust server-side API using Node.js and Express.js for handling backend operations.

              Implemented MongoDB for efficient data storage and retrieval, simulating user authentication and registration functionality
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/TATA-1mg-Front-end/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://tata-1mg-kappa.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h2>Movie-Hub</h2>
            <h4>
              HTML5 CSS3 | JavaScript | Node.js | Express.js | MongoDB | Responsive Web Design
              Crafted a full-stack application with a strong focus on user-friendly interfaces using Vanilla Java Script, HTML5 and CSS3.
              Built server-side components with Node.js and Express.js, focusing on RESTful API principles.
              Utilized MongoDB for data management, including implementing querying functionalities for efficient movie data exploration
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Movie-Hub" target='blang'>Code</a>
              <a href="https://movie-hub-blue.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h2>Healthcare(Shedula)</h2>
            <h4>
              HTML5 | CSS3 | JavaScript | React | Node.js | Express.js | MongoDB | Responsive Web Design
              Developed a responsive Ul using React, showcasing dynamic form submissions, and modals.
              Created a robust server-side API using Node.js and Express.js for handling backend operations.
              Implemented MongoDB for efficient data storage and retrieval, simulating user authentication and registration functionality
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Shedula-FE/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://shedula-fe.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h2>Healthy-eats</h2>
            <h4>
              HTML5 | CSS3 | JavaScript | React | Node.js | Express.js | MongoDB | Responsive Web Design
              Developed a responsive Ul using React, showcasing dynamic form submissions, and modals.
              Created a robust server-side API using Node.js and Express.js for handling backend operations.
              Implemented MongoDB for efficient data storage and retrieval, simulating user authentication and registration functionality
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Healthy-eats-frontend/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://healthyeats-nu.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h2>Acko-app</h2>
            <h4>
              HTML5 | CSS3 | JavaScript | 
              Developed a Ul using JavaScript, HTML, CSS, showcasing dynamic form submissions, dropdown menus, and modals.
              simulating user authentication and registration functionality
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Acko-app-Project" target='blang'>Code</a>
              <a href="https://acko-app-project.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
          <div>
            <h2>Books-Library</h2>
            <h4>
              HTML5 | CSS3 | JavaScript | React | Node.js | Express.js | MongoDB | Responsive Web Design
              Developed a responsive Ul using React, showcasing dynamic form submissions, and modals.
              Created a robust server-side API using Node.js and Express.js for handling backend operations.
              Implemented MongoDB for efficient data storage and retrieval, simulating user authentication and registration functionality
            </h4>
            <p>
              <a href="https://github.com/Kumar-Awadhesh/Books-Library/tree/main/vite-project" target='blang'>Code</a>
              <a href="https://books-library-rho.vercel.app/" target='blank'>Live</a>
            </p>
          </div>
        </div>
        <h1 className='certificate-title'>Certificates and Achievements</h1>
        <h2 className='certificate'>Certificates</h2>
        <div className='certificate-container'>
          <div>
            <a href="https://drive.google.com/file/d/1xFRyNMl9yQA18XQ4JAWL6tDnISJ0FqEZ/view?usp=sharing" target='blank'><img src="/images/Certificate-of-Participation.jpg" alt="participaton-certificate" /></a>
            <p>Prepleaf by Masai</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1Q6u8kdTk89bp7BsVkQbUMwFJemBFUWKV/view?usp=sharing" target='blank'><img src="/images/Certificate-of-Excellence.png" alt="certificate-of-excellence" /></a>
            <p>Prepleaf by Masai</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1Ak3tuZMxO4TtmEKj04ZjeDdH1NgRhC3e/view?usp=sharing" target='blank'><img src="/images/basics-of-web-development-certificate.jpg" alt="basic-web-development-certificate"/></a>
            <p>Prepleaf by Masai</p>
          </div>
        </div>
        <h2 className='achievements'>Achievements</h2>
        <div className='achievement-container'>
          <div>
            <a href="https://drive.google.com/file/d/1DqqkDGQb8AfXJK7Z-Dx2J_S_Rnf_U1c6/view?usp=sharing" target='blang'><img src="/images/Zoom-Marathon-Certificate.jpg" alt="zoom-marathon-challenge-logo" /></a>
            <p>Prepleaf by Masai</p>
          </div>
        </div>
        <h1 className='skill-title'>Technical Skills</h1>
        <div className='skills'>
          <img src="/images/javascript-logo.png" alt="javascript-logo" />
          <img src="/images/html-logo.webp" alt="html-logo" />
          <img src="/images/css-logo.webp" alt="css.logo" />
          <img src="/images/react-logo.webp" alt="react-logo" />
          <img src="/images/node-logo.webp" alt="node-logo" />
          <img src="/images/express-logo.webp" alt="express-logo" />
          <img src="/images/mongodb-logo.webp" alt="mongodb-logo" />
          <img src="/images/python-logo.webp" alt="python.logo" />
          <img src="/images/git-logo.webp" alt="git-logo" />
          <img src="/images/render-logo.webp" alt="render-logo" />
          <img src="/images/vercel-logo.webp" alt="vercel-logo" />
          <img src="/images/mongoose-logo.webp" alt="mongoose-logo" />
        </div>
      </main>
    </>
  )
}

export default App
