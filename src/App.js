import React from "react";
// Components
import CardColumns from "react-bootstrap/CardColumns";
import Nav from "react-bootstrap/Nav";
import Project from "./ProjectCard";
// Style sheets
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
// Static imports
import dot from "./images/dot.png";
import email from "./images/envelopes.png";
import face from "./images/face.png";
import java from "./images/java.png";
import python from "./images/python.png";

function App() {
  return (
    <div className='App'>
      {/* Navbar */}
      <Nav className='justify-content-end'>
        <Nav.Item>
          <Nav.Link href='Projects'>
            <u>projects</u>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey=''>
            <u>resume</u>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Landing page */}
      <div className='Main'>
        {/* Left hand side profile section */}
        <div className='Profile'>
          <img src={face} alt='face' id='face' />
          <div className='Email'>
            <img src={email} alt='email' id='email' /> waikeikong@berkeley.edu
          </div>
        </div>

        {/* Right hand side description section */}
        <div className='Grid'>
          <img src={dot} alt='dot' />
        </div>
      </div>

      {/* Project page */}
      <h4 style={{ textAlign: "center" }}>
        <u>projects</u>
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
            <Nav.Link onMouseEnter={() => console.log("hi")}>
              <img
                src={python}
                alt='python'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Python
            </Nav.Link>
            <Nav.Link>
              <img
                src={java}
                alt='java'
                width='20%'
                style={{ marginRight: "5px" }}
              />
              Java
            </Nav.Link>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </div>
        <div className='ProjectColumns'>
          <CardColumns>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
          </CardColumns>
        </div>
      </div>
    </div>
  );
}

export default App;
