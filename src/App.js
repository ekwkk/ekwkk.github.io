import React from "react";
// Components
import CardColumns from "react-bootstrap/CardColumns";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Project from "./ProjectCard";
import Scrollchor from "react-scrollchor";
// Style sheets
import "./css/App.scss";
import "bootstrap/dist/css/bootstrap.css";
// Static imports
import email from "./images/envelopes.png";
import face from "./images/face.png";
import github from "./images/github.svg";
import resume from "./static/resume.pdf";

function App() {
  const [languageSelected, changeLanguageSelected] = React.useState("");
  const legendDescription = [
    "Python",
    "Java",
    "React",
    "Heroku, AWS",
    "Django",
    "Data Science",
    "mongoDB, PostgreSQL",
  ];
  const legends = [
    "python",
    "java",
    "react",
    "webdev",
    "django",
    "ds",
    "database",
  ];
  const legendSpans = legends.map((legend, i) => (
    <span
      onMouseEnter={() => changeLanguageSelected(legend)}
      onMouseLeave={() => changeLanguageSelected("")}
      key={legend}
    >
      <img
        src={require("./images/" + legend + ".png")}
        alt={legend}
        width='5%'
        style={{ margin: "0% 1%" }}
      />
      {legendDescription[i]}
    </span>
  ));

  const legendNavLinks = legends.map((legend, i) => (
    <Nav.Link
      onMouseEnter={() => changeLanguageSelected(legend)}
      onMouseLeave={() => changeLanguageSelected("")}
      key={legend}
    >
      <img
        src={require("./images/" + legend + ".png")}
        alt={legend}
        width='20%'
        style={{ marginRight: "5px" }}
      />
      {legendDescription[i]}
    </Nav.Link>
  ));

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#ffd100" }}>
        <Navbar.Brand>
          <h4>
            HELLO! I'M{" "}
            <span className='underline--magical' style={{ fontSize: "1.5rem" }}>
              ERICA
            </span>
          </h4>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Scrollchor to='projects' className='nav-link'>
              <span
                className='underline--magical'
                style={{ fontSize: "1.5rem" }}
              >
                projects
              </span>
            </Scrollchor>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={resume} target='_blank'>
              <span
                className='underline--magical'
                style={{ fontSize: "1.5rem" }}
              >
                resume
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* Landing page */}
      <div className='Main'>
        {/* Left hand side profile section */}
        <div className='Profile'>
          <img src={face} alt='face' id='face' />
          <div className='Contact'>
            <p>
              Hi! I'm a 4th-year studying Computer Science and Data Science at
              UC Berkeley, and I'm from the foggy San Francisco{" "}
              <span role='img' aria-label='star'>
                💨
              </span>
              . I'm interested in working with ML + data-driven projects and on
              full-stack dev with a concentration in backend!{" "}
            </p>
            <p>
              In my free time, I like to explore museums and take pictures of
              cityscapes in the Bay Area{" "}
              <span role='img' aria-label='star'>
                🌉
              </span>{" "}
              , learn about new technologies, contribute back to my community by
              teaching.
            </p>
            <p>
              <span role='img' aria-label='star'>
                🌟
              </span>{" "}
              Fluent in <b>Java</b>, <b>Python</b>, JavaScript, <b>React</b>,
              Django, HTML/CSS, Git, Typescript, C, <b>SQL</b>, <b>Pandas</b>,{" "}
              <b>Scikit-learn</b>, Seaborn.
            </p>
            <p>
              <span role='img' aria-label='star'>
                ⭐️
              </span>{" "}
              Proficient with Go, AWS, Node.js, Heroku, Google Cloud API, REST,
              Webpack.
            </p>
            <p>Let's get in touch!</p>
            <div>
              <img
                src={email}
                alt='email'
                style={{
                  height: "auto",
                  margin: "0px 5px 5px 0px",
                }}
              />{" "}
              waikeikong @ berkeley . edu
            </div>
            <div>
              <img
                src={github}
                alt='github'
                style={{
                  height: "auto",
                  margin: "0px 10px 5px 0px",
                }}
              />
              <a
                href='https://github.com/ekwkk'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/ekwkk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project page */}
      <h4 style={{ textAlign: "center", margin: "0% 0% 2% 0%" }} id='projects'>
        <span className='underline--magical'>projects</span>
      </h4>
      <p style={{ textAlign: "center" }}>
        <i>hover over projects for descriptions!</i>
      </p>
      <div className='Projects'>
        <div className='ProjectLegend'>
          <Nav
            defaultActiveKey='/home'
            style={{
              border: "1px solid rgba(0, 0, 0, 0.25)",
              borderRadius: "0.25rem",
            }}
          >
            <Nav.Link eventKey='disabled' disabled>
              <i>Hover over below!</i>
            </Nav.Link>
            {legendNavLinks}
          </Nav>
        </div>

        <div className='ProjectLegend2' style={{ textAlign: "center" }}>
          <span>
            <i>Click! >></i>
          </span>
          {legendSpans}
        </div>

        <div className='ProjectColumns'>
          <CardColumns>
            <Project
              languages={["webdev", "react", "ds", "django", "database"]}
              languageSelected={languageSelected}
              img='netskope.png'
              cardText='Analyzed 100k JSON files to train and predict which fields should be combined. Created a React frontend, Django backend, mongoDB webapp hosted on Heroku.'
            ></Project>
            <Project
              languages={["webdev", "react", "database", "django"]}
              languageSelected={languageSelected}
              img='zymergen.png'
              cardText='Designed and implemented a React, Django web-based tool to store and visualize plasmid maps efficiently. Stored files in AWS.'
              cardTitle='Data Visualization'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='minesweeper.gif'
              cardTitle='Minesweeper'
              cardText='Recreated the popular puzzle game using Java'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='bearmap.gif'
              cardTitle='Bear Map (CS 61B)'
              cardText='Rasterized images to create a map of Berkeley. Utilized A* to navigate from Point A to B'
            ></Project>
            <Project
              languages={["ds", "python"]}
              languageSelected={languageSelected}
              img='spamham.png'
              cardTitle='Spam Ham Classifier'
              cardText='Visualized data and found common patterns in emails, trained and refined Logistic Regression model through cross-validation and hyperparameter tuning'
            ></Project>
            <Project
              languages={["python"]}
              languageSelected={languageSelected}
              img='ants.png'
              cardTitle='Ants (CS 61A)'
              cardText='Recreated Plants vs Zombies in Python as a class project'
            ></Project>
            <Project
              languages={["react", "webdev"]}
              languageSelected={languageSelected}
              img='vimeotab.png'
              cardTitle='Extension for Vimeo'
              cardText='Worked with a group of 4 as an intern side project to build a dashboard extension for Vimeo'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='byog.gif'
              cardTitle='Game (CS 61B)'
              cardText='Worked with a partner to create a 2-player game with psuedorandom game map generation, game save functionality, and keyboard controls'
            ></Project>
          </CardColumns>
        </div>
      </div>
    </div>
  );
}

export default App;
