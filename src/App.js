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
import database from "./images/database.png";
import django from "./images/django.png";
import ds from "./images/ds.png";
import email from "./images/envelopes.png";
import face from "./images/face.png";
import github from "./images/github.svg";
import java from "./images/java.png";
import python from "./images/python.png";
import react from "./images/react.png";
import resume from "./static/resume.pdf";
import webdev from "./images/webdev.png";

function App() {
  const [languageSelected, changeLanguageSelected] = React.useState("");

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#fdfad8" }}>
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
            <div>
              <img
                src={email}
                alt='email'
                style={{
                  width: "10%",
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
                  width: "10%",
                  height: "auto",
                  margin: "0px 10px 5px 0px",
                }}
              />
              <a href='https://github.com/ekwkk'>github.com/ekwkk</a>
            </div>
            <p>
              Hi! I'm a 4th-year studying Computer Science and Data Science at
              UC Berkeley, and I'm from the foggy San Francisco{" "}
              <span role='img' aria-label='star'>
                💨
              </span>
              . I'm interested in working with ML/data and on full-stack dev
              with a concentration in backend!{" "}
            </p>
            <p>
              In my free time, I like to explore museums and take pictures of
              cityscapes in the Bay Area{" "}
              <span role='img' aria-label='star'>
                🌉
              </span>{" "}
              and learn about new technologies.
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
          </div>
        </div>
      </div>

      {/* Project page */}
      <h4 style={{ textAlign: "center", margin: "0% 0% 2% 0%" }} id='projects'>
        <span className='underline--magical'>sample projects</span>
      </h4>
      <p>
        <i>hover over projects for descriptions!</i>
      </p>
      <div className='Projects'>
        <div className='ProjectLegend'>
          <Nav
            defaultActiveKey='/home'
            className='flex-column'
            style={{
              border: "1px solid rgba(0, 0, 0, 0.25)",
              borderRadius: "0.25rem",
            }}
          >
            <Nav.Link eventKey='disabled' disabled>
              <i>Hover over!</i>
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("python")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={python}
                alt='python'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Python
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("java")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={java}
                alt='java'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Java
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("react")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={react}
                alt='react'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              React
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("webdev")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={webdev}
                alt='webdev'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Heroku, AWS
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("django")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={django}
                alt='django'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Django
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("database")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={database}
                alt='database'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              mongoDB, mySQL
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => changeLanguageSelected("ds")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={ds}
                alt='ds'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Data Science
            </Nav.Link>
          </Nav>
        </div>
        <div className='ProjectColumns'>
          <CardColumns>
            <Project
              languages={["webdev", "react", "ds", "django", "database"]}
              languageSelected={languageSelected}
              img='netskope.png'
            ></Project>
            <Project
              languages={["webdev", "react", "database"]}
              languageSelected={languageSelected}
              img='zymergen.png'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='asteriods.png'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='bearmap.gif'
            ></Project>
            <Project
              languages={["python"]}
              languageSelected={languageSelected}
              img='ants.png'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='minesweeper.gif'
            ></Project>
            <Project
              languages={["java"]}
              languageSelected={languageSelected}
              img='byog.gif'
            ></Project>
          </CardColumns>
        </div>
      </div>
    </div>
  );
}

export default App;
