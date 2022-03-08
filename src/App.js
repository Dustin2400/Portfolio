import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const selection = [
    'About me',
    'Portfolio',
    'Resume'
  ]

  const projects = [
    {
      title: "mybrary",
      text: "MyBrary",
      link: "https://mybrary2400.herokuapp.com/",
      github: "https://github.com/Dustin2400/Mybrary"
    },
    {
      title: "the-technocracy",
      text: "The\nTechnocracy",
      link: "https://the-technocracy.herokuapp.com/",
      github: "https://github.com/Dustin2400/the-technocracy"
    },
    {
      title: "weather-dashboard",
      text: "Weather\nDashboard",
      link: "https://dustin2400.github.io/weather-dashboard/",
      github: "https://github.com/Dustin2400/weather-dashboard"
    },
    {
      title: "lyrical-ta",
      text: "Lyrical TA",
      link: "https://dustin2400.github.io/lyrical-ta/",
      github: "https://github.com/Dustin2400/lyrical-ta"
    },
    // {
    //   title: "malcolm-esque",
    //   text: "Malcolm-esque",
    //   link: "https://dustin2400.github.io/Malcolm-esque/",
    //   github: "https://github.com/Dustin2400/Malcolm-esque"
    // },
    // {
    //   title: "run-buddy",
    //   text: "Run Buddy",
    //   link: "https://dustin2400.github.io/run-buddy/",
    //   github: "https://github.com/Dustin2400/Malcolm-esque"
    // },
  ]

  const [currentSelection, setCurrentSelection] = useState(selection[0]);
  

  return (
    <div>
      <Header selection={selection} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection}></Header>
      <main>
        {currentSelection === 'About me' && (
          <div>
            <h2>About Me</h2>
            <div className="platform, about-me">
              <img src={require('./images/ya-boy.jpg')} alt="Dustin Grijalva" className="ya-boy"></img>
              <p className="blurb">I am a full stack web developer leveraging an education background to create intuitive, innovative, and inspirational web design. I have earned a certificate in full stack web development from the University of Texas. I am proficient in HTML, CSS, JavaScript, Node.js, SQL, MongoDB, and React. I face challenges with zeal and fortitude, thrive in fast-paced environments and high pressure situations, and cooperate swimmingly with colleagues. I am eager to work collaboratively to find creative solutions generating influential projects.</p>
            </div>
          </div>
        )}
        {currentSelection === 'Portfolio' && (
          <div className="content">
            <h2>Works</h2>
            <div className="works-container">
            {projects.map((project) => 
              <Project project={project} />
            )}
            </div>
          </div>
        )}
        {/* {currentSelection === 'Contact' && (
          <div>
            <h2>Contact me</h2>
            <Contact />
          </div>
        )} */}
        {currentSelection === 'Resume' && (
          <div>
            <h2>Resume</h2>
            <Resume />
          </div>
        )}
      </main>
        <Footer />
    </div>

  );
}

export default App;
