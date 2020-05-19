import React from "react";
// Components
import CardColumns from "react-bootstrap/CardColumns";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Project from "./ProjectCard";
// Style sheets
import "./css/App.scss";
import "bootstrap/dist/css/bootstrap.css";
// Static imports
import background from "./images/background.PNG";
import email from "./images/envelopes.png";
import face from "./images/face.png";
import github from "./images/github.svg";
import java from "./images/java.png";
import js from "./images/js.png";
import python from "./images/python.png";
import react from "./images/react.png";
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
            <span class='underline--magical' style={{ fontSize: "1.5rem" }}>
              ERICA
            </span>
          </h4>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link href='Projects'>
              <span class='underline--magical' style={{ fontSize: "1.5rem" }}>
                projects
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey=''>
              <span class='underline--magical' style={{ fontSize: "1.5rem" }}>
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
              UC Berkeley, and I'm from the foggy San Francisco 💨. I'm
              interested in working with ML/data-related concepts and on
              full-stack dev with a concentration in backend!{" "}
            </p>
            <p>
              In my free time, I like to explore museums and take pictures of
              cityscapes in the Bay Area 🌉 and learn new techs.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* Project page */}
      <h4 style={{ textAlign: "center", margin: "0% 0% 2% 0%" }}>
        <span class='underline--magical'>projects</span>
      </h4>
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
              Legend
            </Nav.Link>
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
              onMouseEnter={() => changeLanguageSelected("python")}
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
              onMouseEnter={() => changeLanguageSelected("js")}
              onMouseLeave={() => changeLanguageSelected("")}
            >
              <img
                src={js}
                alt='js'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Vanilla JS
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
              Heroku, etc
            </Nav.Link>
          </Nav>
        </div>
        <div className='ProjectColumns'>
          <CardColumns>
            <Project
              languages={["python", "java"]}
              languageSelected={languageSelected}
            ></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
            <Project languageSelected={languageSelected}></Project>
          </CardColumns>
        </div>
      </div>
    </div>
  );
}

export default App;
